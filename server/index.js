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
// Inicializar Google Auth
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

const drive = google.drive({ version: 'v3', auth });
const sheets = google.sheets({ version: 'v4', auth });

const TEMPLATE_ID = process.env.TEMPLATE_SPREADSHEET_ID;
const TARGET_SHEET = process.env.TARGET_SHEET_NAME || 'Metrado Estructuras';
const STARTING_CELL = process.env.STARTING_CELL || 'A7';

// Diccionario de pesos de acero (igual que frontend para validación)
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

app.post('/api/export/metrados', async (req, res) => {
    try {
        const metrados = req.body;
        if (!Array.isArray(metrados) || metrados.length === 0) return res.status(400).json({ error: 'Payload vacío.' });
        console.log(`[INKAIA] Iniciando Pipeline de Tab-Clone Interno: ${metrados.length} registros`);

        // 1. Obtener ID original de la hoja a copiar
        const documentMeta = await sheets.spreadsheets.get({ spreadsheetId: TEMPLATE_ID });
        const targetSheet = documentMeta.data.sheets.find(s => s.properties.title === TARGET_SHEET);
        if (!targetSheet) throw new Error("No se encontró la pestaña maestra " + TARGET_SHEET);
        const sourceSheetId = targetSheet.properties.sheetId;

        // 2. Clonar Tab Interno EN EL MISMO SPREADSHEET (No rompe la Cuota de Creación de Archivos)
        console.log(`[INKAIA] Clonando Pestaña internamente (GID: ${sourceSheetId})...`);
        const copyRes = await sheets.spreadsheets.sheets.copyTo({
            spreadsheetId: TEMPLATE_ID,
            sheetId: sourceSheetId,
            requestBody: { destinationSpreadsheetId: TEMPLATE_ID } // Clona hacia el mismo libro
        });
        const tempSheetId = copyRes.data.sheetId;
        const tempSheetTitle = copyRes.data.title;
        console.log(`[INKAIA] Pestaña Temp Creada: ${tempSheetTitle} (ID: ${tempSheetId})`);

        // Mutador Polimórfico INKAIA (Formato Extendido V2 - 18 Columnas)
        const values2D = metrados.map(m => {
            // Caso A: Fila es un Título o Cabecera del Presupuesto (estilo S10)
            if (m.is_template && m.es_titulo) {
                return [
                    m.nivel_jerarquia || "",  // B: NIVEL IND (1, 2, 3...)
                    "",                        // C: Fecha
                    "",                        // D: Frente
                    "",                        // E: Bloque
                    "",                        // F: Nivel
                    m.codigo || "",            // G: CÓDIGO WBS (OE.1, OE.1.1...)
                    "",                        // H: Partida (vacío en títulos)
                    m.descripcion || "",       // I: DESCRIPCIÓN (Nombre del título)
                    "", "", "", "", "", "", "", "", "", "" // J -> S vacíos
                ];
            }

            // Caso A2: Fila Virtual de Elemento (agrupador intermedio dentro de una partida)
            if (m.is_template && m.is_elemento_virtual) {
                return [
                    "",               // B: nivel ind vacío
                    "", "", "", "", "", "",
                    m.descripcion || "", // I: descripción del elemento
                    "", "", "", "", "", "", "", "", "", ""
                ];
            }

            // Caso A3: Cabecera de Partida (el nodo hoja del presupuesto, línea azul en pantalla)
            // Es is_template=true, es_titulo=false. Aparece como línea que agrupa los metrados.
            if (m.is_template && !m.es_titulo) {
                const nivelNum = m.nivel_jerarquia || "";
                return [
                    nivelNum,          // B: NIVEL IND
                    "", "", "", "",    // C-F vacíos
                    m.codigo || "",    // G: CÓDIGO de la partida
                    m.descripcion || "", // H: Nombre de la partida
                    "",                // I: descripción vacío (los metrados lo llenan)
                    "", "", "", "", "", "", "", m.unidad || "", "", "" // J-S, solo unidad en R
                ];
            }

            // Caso B: Fila es un Registro de Metrado Real
            const separador = m.elemento ? `${m.elemento.trim()} / ` : " - / ";
            const concatDesc = separador + (m.detalle || "").trim();

            let largo = m.longitud_area;
            let ancho = m.ancho_empalme;
            let alto = m.altura_gancho;
            let parcial = m.parcial;

            if (m.unidad && m.unidad.toLowerCase() === 'kg' && m.descripcion_partida && m.descripcion_partida.toLowerCase().includes('acero')) {
                largo = m.longitud_area; alto = m.altura_gancho; ancho = "";
                const peso_diametro = validacionesPesoAcero[m.diametro] || 0;
                const q = parseFloat(m.cantidad) || 0;
                const v = parseFloat(m.nro_veces) || 0;
                const l = parseFloat(largo) || 0;
                const a = parseFloat(alto) || 0;
                if (peso_diametro > 0) parcial = q * v * (l + a) * peso_diametro;
            }

            return [
                m.nivelJerarquia || "", // B: WBS
                m.fecha || "",          // C
                m.frente || "",         // D
                m.bloque || "",         // E
                m.nivel || "",          // F
                m.codigo_partida || "", // G
                m.descripcion_partida || "", // H
                concatDesc,            // I
                m.cantidad || "",      // J
                largo || "",           // K
                ancho || "",           // L
                alto || "",            // M
                m.diametro || "",       // N
                parcial || 0,          // O
                m.nro_veces || "",     // P
                m.total || 0,          // Q
                m.unidad || "",        // R
                m.modificacion || ""   // S
            ];
        });

        // 3. Inyección Masiva en la hoja clonada dentro del archivo viejo (Evitando tocar la pestaña maestra original)
        const range = `'${tempSheetTitle}'!${STARTING_CELL}`;
        console.log(`[INKAIA] Inyectando datos en ${tempSheetTitle}...`);
        await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId: TEMPLATE_ID,
            requestBody: { valueInputOption: 'RAW', data: [{ range: range, values: values2D }] }
        });

        // 4. Descarga Binaria usando GET nativo de Fetch pasando un Access Token y GID=tempSheetId
        console.log(`[INKAIA] Descargando buffer intermedio de Pestaña Clona vía Fetch Auth...`);
        const token = await auth.getAccessToken();
        const exportUrl = `https://docs.google.com/spreadsheets/d/${TEMPLATE_ID}/export?format=xlsx&gid=${tempSheetId}`;

        const exportReq = await fetch(exportUrl, {
            headers: { Authorization: `Bearer ${token.token}` } // Use token.token for the actual access token string
        });
        if (!exportReq.ok) throw new Error("Google rechazó la extracción binaria fetch export.");
        const fileBuffer = await exportReq.arrayBuffer();

        // 5. Purga (Limpia la pestaña creada en el libro original)
        console.log(`[INKAIA] Ocultando Rastro: Borrando Pestaña temp ${tempSheetId}...`);
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId: TEMPLATE_ID,
            requestBody: {
                requests: [{ deleteSheet: { sheetId: tempSheetId } }]
            }
        });

        // Enviar Response al cliente final
        const filename = `Export_Inkaia_${new Date().toISOString().replace(/[:.]/g, '-')}.xlsx`;
        console.log(`[INKAIA] Ciclo exitoso. Lanzando ${filename} (${fileBuffer.byteLength} bytes) al Frontend.`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(Buffer.from(fileBuffer));

    } catch (err) {
        console.error(`[INKAIA] ERROR CRÍTICO:`, err);
        res.status(500).json({ error: 'Error procesando exportación', detail: err.message || err });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[INKAIA] Backend Proxy iniciado en el puerto ${PORT}`);
});
