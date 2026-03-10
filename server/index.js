require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://inkaia.pe',
        'https://www.inkaia.pe',
        'https://3-entregable-web-buscador-de-metrad.vercel.app'
    ],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online. El endpoint de exportación es un POST a /api/export/metrados.');
});

// Inicializar Google Auth (Service Account)
let authOptions = {
    scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/spreadsheets'
    ],
};

if (process.env.GOOGLE_CREDENTIALS_JSON) {
    try {
        const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);
        authOptions.credentials = credentials;
        console.log("[INKAIA] Usando credenciales desde variable de entorno.");
    } catch (e) {
        console.error("[INKAIA] Error parseando GOOGLE_CREDENTIALS_JSON:", e.message);
    }
} else {
    authOptions.keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    console.log("[INKAIA] Usando credenciales desde archivo físico:", authOptions.keyFile);
}

const auth = new google.auth.GoogleAuth(authOptions);
const sheets = google.sheets({ version: 'v4', auth });

const TEMPLATE_ID = process.env.TEMPLATE_SPREADSHEET_ID;
const TARGET_SHEET = process.env.TARGET_SHEET_NAME || 'Metrado Estructuras';
const STARTING_CELL = process.env.STARTING_CELL || 'A7';

// Pesos nominales de acero (kg/m)
const validacionesPesoAcero = {
    "6mm": 0.222,
    "8mm": 0.395,
    "3/8\"": 0.560,
    "12mm": 0.888,
    "1/2\"": 0.994,
    "5/8\"": 1.552,
    "3/4\"": 2.235,
    "1\"": 3.973,
    "1 3/8\"": 7.907
};

// Helper para determinar si una partida es de acero
const esPartidaAcero = (m) =>
    m.unidad && m.unidad.toLowerCase() === 'kg' &&
    m.descripcion_partida &&
    m.descripcion_partida.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes('acero');

app.post('/api/export/metrados', async (req, res) => {
    try {
        const metrados = req.body;
        if (!Array.isArray(metrados) || metrados.length === 0)
            return res.status(400).json({ error: 'Payload vacío.' });

        console.log(`[INKAIA] Pipeline Export — Filas recibidas: ${metrados.length}`);

        // LOG DIAGNÓSTICO: Muestra la estructura de las primeras 3 filas para verificar el mapping
        metrados.slice(0, 5).forEach((m, i) => {
            console.log(`[DIAG] Fila[${i}]:`, JSON.stringify({
                is_template: m.is_template,
                es_titulo: m.es_titulo,
                is_elemento_virtual: m.is_elemento_virtual,
                codigo: m.codigo,
                descripcion: m.descripcion,
                nivel_jerarquia: m.nivel_jerarquia,
                codigo_partida: m.codigo_partida,
                nivelJerarquia: m.nivelJerarquia,
                fecha: m.fecha
            }));
        });

        // ─── 1. Determinar Pestaña Maestra (Hospital o Contingencia) ──────────
        const firstMetrado = metrados.find(m => m.especialidad);
        const especialidad = firstMetrado?.especialidad?.toLowerCase();

        let sheetToFind = TARGET_SHEET; // Default 'METRADO' from env
        if (especialidad === 'hospital') sheetToFind = 'Hospital';
        if (especialidad === 'contingencia') sheetToFind = 'Contingencia';

        console.log(`[INKAIA] Especialidad detectada: ${especialidad || 'n/a'}. Buscando pestaña: "${sheetToFind}"`);

        const documentMeta = await sheets.spreadsheets.get({ spreadsheetId: TEMPLATE_ID });
        const targetSheet = documentMeta.data.sheets.find(s =>
            s.properties.title.trim().toLowerCase() === sheetToFind.toLowerCase()
        );

        if (!targetSheet) {
            throw new Error(`No se encontró la pestaña maestra: "${sheetToFind}". Verifique el nombre en Google Sheets.`);
        }
        const sourceSheetId = targetSheet.properties.sheetId;

        // ─── 2. Clonar pestaña dentro del mismo Spreadsheet ────────────────────
        console.log(`[INKAIA] Clonando pestaña (GID: ${sourceSheetId})...`);
        const copyRes = await sheets.spreadsheets.sheets.copyTo({
            spreadsheetId: TEMPLATE_ID,
            sheetId: sourceSheetId,
            requestBody: { destinationSpreadsheetId: TEMPLATE_ID }
        });
        const tempSheetId = copyRes.data.sheetId;
        const tempSheetTitle = copyRes.data.title;
        console.log(`[INKAIA] Pestaña Temp: "${tempSheetTitle}" (ID: ${tempSheetId})`);

        // ─── 3. Transformar filas al formato de 18 columnas ────────────────────
        // El array 'metrados' contiene tanto filas virtuales (títulos, cabeceras) como registros reales.
        // Todas deben producir EXACTAMENTE 18 columnas para que Google Sheets acepte el batchUpdate.
        const EMPTY18 = () => ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

        // OPTIMIZACIÓN O(N): Pre-calcular el conjunto de códigos de partidas que tienen metrados reales
        const codesWithMetrados = new Set(
            metrados.filter(m => !m.is_template).map(m => m.codigo_partida)
        );

        const rawRows = metrados.map(m => {
            // CASO A: Título del presupuesto (OE.1, OE.1.1, ...) — is_template=true, es_titulo=true
            if (m.is_template && m.es_titulo) {
                const row = EMPTY18();
                row[0] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : "";  // B: NIVEL IND
                row[5] = m.codigo || "";           // G: Código WBS
                row[6] = m.descripcion || "";      // H: Descripción del título
                return row;
            }

            // CASO A2: Sub-agrupador de Elemento virtual (ej. "ACERO", "Viga BV-206")
            // → Se omite del export: la descripción de cada fila de metrado ya incluye el elemento.
            if (m.is_template && m.is_elemento_virtual) {
                return null;
            }

            // CASO A3: Cabecera de Partida (línea azul / nodo hoja)
            if (m.is_template && !m.es_titulo) {
                // Si la partida tiene metrados reales registrados, OMITIMOS esta fila de cabecera
                // porque los metrados individuales ya llevan la descripción de la partida.
                if (codesWithMetrados.has(m.codigo)) return null;

                const row = EMPTY18();
                row[0] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : "";  // B: NIVEL IND
                row[5] = m.codigo || "";            // G: Código de la partida
                row[6] = m.descripcion || "";       // H: Nombre de la partida
                row[16] = m.unidad || "";            // R: Unidad de medida
                return row;
            }

            // CASO B: Registro de Metrado Real
            const flagAcero = esPartidaAcero(m);

            // Concatenar Elemento + Detalle solo con '/' cuando ambos existen
            const elemTrim = (m.elemento || '').trim();
            const detalleTrim = (m.detalle || '').trim();
            const concatDesc = elemTrim && detalleTrim
                ? `${elemTrim} / ${detalleTrim}`  // Ambos presentes → con separador
                : elemTrim || detalleTrim;          // Solo uno → sin separador

            let largo = m.longitud_area;
            let ancho = m.ancho_empalme;
            let alto = m.altura_gancho;
            let parcial = m.parcial;

            if (flagAcero) {
                // Para acero: limpiar ancho y recalcular parcial con peso nominal
                ancho = "";
                const peso_diametro = validacionesPesoAcero[m.diametro] || 0;
                const q = parseFloat(m.cantidad) || 0;
                const v = parseFloat(m.nro_veces) || 1;
                const l = parseFloat(largo) || 0;
                const a = parseFloat(alto) || 0;
                if (peso_diametro > 0) parcial = q * v * (l + a) * peso_diametro;
            }

            return [
                m.nivelJerarquia != null ? String(m.nivelJerarquia) : "", // B: NIVEL IND
                m.fecha || "",  // C: Fecha
                m.frente || "",  // D: Frente
                m.bloque || "",  // E: Bloque
                m.nivel || "",  // F: Nivel constructivo
                m.codigo_partida || "",  // G: Código de Partida
                m.descripcion_partida || m.codigo_partida || "",  // H: Nombre de la Partida (nunca vacío)
                concatDesc,                   // I: Elemento / Detalle (sin separador si falta uno)
                m.cantidad || "",  // J: Cantidad (N°)
                largo || "",  // K: Longitud / Área
                ancho || "",  // L: Ancho / Empalme
                alto || "",  // M: Altura / Gancho
                flagAcero ? (m.diametro || "") : "", // N: Acero Ø (SOLO si es acero)
                parcial || 0,   // O: Parcial
                m.nro_veces || "",  // P: Nro de Veces
                m.total || 0,   // Q: Total
                m.unidad || "",  // R: Unidades
                m.modificacion || ""   // S: Modificaciones/Estado
            ];
        });

        // Filtrar nulos (filas virtuales y cabeceras redundantes omitidas)
        const values2D = rawRows.filter(r => r !== null);

        console.log(`[INKAIA] Filas transformadas: ${values2D.length}. Primera fila:`, JSON.stringify(values2D[0]));

        // ─── 4. Inyectar datos en la pestaña clonada ───────────────────────────
        const range = `'${tempSheetTitle}'!${STARTING_CELL}`;
        console.log(`[INKAIA] Inyectando en rango: ${range}`);
        await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId: TEMPLATE_ID,
            requestBody: {
                valueInputOption: 'RAW',
                data: [{ range: range, values: values2D }]
            }
        });

        // ─── 5. Descargar el archivo Excel generado ────────────────────────────
        console.log(`[INKAIA] Descargando Excel de Google Sheets...`);
        const token = await auth.getAccessToken();
        const exportUrl = `https://docs.google.com/spreadsheets/d/${TEMPLATE_ID}/export?format=xlsx&gid=${tempSheetId}`;
        const exportReq = await fetch(exportUrl, {
            headers: { Authorization: `Bearer ${token.token}` }
        });
        if (!exportReq.ok) throw new Error("Google rechazó la descarga: " + exportReq.statusText);
        const fileBuffer = await exportReq.arrayBuffer();

        // ─── 6. Borrar la pestaña temporal ─────────────────────────────────────
        console.log(`[INKAIA] Limpiando pestaña temporal (${tempSheetId})...`);
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: TEMPLATE_ID,
            requestBody: { requests: [{ deleteSheet: { sheetId: tempSheetId } }] }
        });

        // ─── 7. Enviar el Excel al cliente ─────────────────────────────────────
        const filename = `Export_Inkaia_${new Date().toISOString().replace(/[:.]/g, '-')}.xlsx`;
        console.log(`[INKAIA] ✅ Ciclo completo. Enviando ${filename} (${fileBuffer.byteLength} bytes)`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(Buffer.from(fileBuffer));

    } catch (err) {
        console.error(`[INKAIA] ❌ ERROR CRÍTICO:`, err);
        res.status(500).json({ error: 'Error procesando exportación', detail: err.message || err });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[INKAIA] Backend Proxy iniciado en el puerto ${PORT}`);
});
