require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const mongoose = require('mongoose');

const app = express();

// Conexión a MongoDB Atlas
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log("[INKAIA] Conectado a MongoDB Atlas"))
        .catch(err => console.error("[INKAIA] Error conectando a MongoDB:", err));
} else {
    console.warn("[INKAIA] MONGODB_URI no definida. El servidor funcionará sin persistencia en nube.");
}

// Esquema de Metrado para Multi-usuario
const metradoSchema = new mongoose.Schema({
    fecha: String,
    frente: String,
    bloque: String,
    nivel: String,
    codigo_partida: String,
    descripcion_partida: String,
    elemento: String,
    detalle: String,
    diametro: String,
    cantidad: Number,
    longitud_area: Number,
    ancho_empalme: Number,
    altura_gancho: Number,
    parcial: Number,
    nro_veces: Number,
    total: Number,
    unidad: String,
    autor_usuario: String, // Campo clave para identificar al técnico
    modificacion: String,
    created_at: { type: Date, default: Date.now }
});

const Metrado = mongoose.model('Metrado', metradoSchema);

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

// --- ENDPOINTS DE BASE DE DATOS (NUBE) ---

// Obtener todos los metrados (Para el Visor de Administrador)
app.get('/api/metrados', async (req, res) => {
    try {
        const metrados = await Metrado.find().sort({ created_at: -1 });
        res.json(metrados);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener metrados de la nube' });
    }
});

// Guardar un nuevo metrado (Llamado desde el formulario de los técnicos)
app.post('/api/metrados', async (req, res) => {
    try {
        const nuevoMetrado = new Metrado(req.body);
        await nuevoMetrado.save();
        res.status(201).json(nuevoMetrado);
    } catch (err) {
        console.error("[INKAIA] Error guardando metrado:", err);
        res.status(500).json({ error: 'Error al guardar el metrado en la nube' });
    }
});

// Eliminar un metrado
app.delete('/api/metrados/:id', async (req, res) => {
    try {
        await Metrado.findByIdAndDelete(req.params.id);
        res.json({ message: 'Registro eliminado de la nube' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
});

// --- ENDPOINT DE EXPORTACIÓN ---

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
            // Concatenación para Descripción_
            const separador = m.elemento ? `${m.elemento.trim()} / ` : " - / ";
            const concatDesc = separador + (m.detalle || "").trim();

            // RUTA DE MUTACIÓN
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

            // IMPORTANTE: Este es el orden dictado por el cliente ["B", "C", "D"..."S"]
            // 1: Nivel Indicador (Asume Backend lo inyecta como "", o frontend manda "nivelJerarquia")
            // 2: Fecha
            // 3: Frente, 4: Bloque, 5: Nivel
            // 6: Código, 7: Partida
            // 8: Descripción_ (Concatenado)
            // 9: Cantidad, 10: Longitud, 11: Ancho, 12: Altura
            // 13: Acero (Diámetro)
            // 14: Parcial
            // 15: Nro de Veces, 16: Total
            // 17: Unidades, 18: Modificaciones

            return [
                m.nivelJerarquia || "", // Desde Frontend (o base si no existe)
                m.fecha || "",
                m.frente || "",
                m.bloque || "",
                m.nivel || "",
                m.codigo_partida || "",
                m.descripcion_partida || "",
                concatDesc,
                m.cantidad || "",
                largo || "",
                ancho || "",
                alto || "",
                m.diametro || "",
                parcial || 0,
                m.nro_veces || "",
                m.total || 0,
                m.unidad || "",
                m.modificacion || ""
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
