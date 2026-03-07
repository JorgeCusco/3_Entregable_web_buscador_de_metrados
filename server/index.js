require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Inicializar Google Auth (Service Account)
const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/spreadsheets'
    ],
});

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
        if (!Array.isArray(metrados) || metrados.length === 0) {
            return res.status(400).json({ error: 'Payload vacío o inválido.' });
        }

        console.log(`[INKAIA] Iniciando Pipeline de Exportación: ${metrados.length} registros`);

        // 1. Clonación
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const fileName = `Export_${timestamp}`;
        console.log(`[INKAIA] Clonando Template ${TEMPLATE_ID}...`);
        const copyResponse = await drive.files.copy({
            fileId: TEMPLATE_ID,
            requestBody: { name: fileName }
        });

        const cloneId = copyResponse.data.id;
        console.log(`[INKAIA] Clon exitoso: ID ${cloneId}`);

        // Mutador de Datos (INKAIA Polimórfico)
        const values2D = metrados.map(m => {
            // Base: ["Nivel Indicador", "Frente", "Bloque", "Nivel", "Código", "Partida", "Descripción_", "Cantidad", "Longitud/Área", "Ancho/Empalme", "Altura/Gancho", "Parcial", "Acero", "Nro de Veces", "Total", "Unidades", "Modificaciones"]
            // Pero el usuario pidió: [Item, Descripción, Unidad, Cantidad, Largo, Ancho, Alto, Parcial, Veces, Total] hacia el Sheets.

            const item = m.codigo_partida;
            const separador = m.elemento ? `${m.elemento.trim()} / ` : " - / ";
            const concatDesc = separador + (m.detalle || "").trim();

            // RUTA B (Acero - kg)
            let largo = m.longitud_area;
            let ancho = m.ancho_empalme;
            let alto = m.altura_gancho;
            let parcial = m.parcial;

            if (m.unidad && m.unidad.toLowerCase() === 'kg' && m.descripcion_partida && m.descripcion_partida.toLowerCase().includes('acero')) {
                // Sobrecarga Semántica Inkaia
                largo = m.longitud_area; // LONG(R)
                alto = m.altura_gancho; // ALTO(G)
                ancho = ""; // Forzado nulo según requerimiento

                // Validación de Parcial (Cantidad * Veces * (Largo + Alto) * Peso_Diametro)
                const peso_diametro = validacionesPesoAcero[m.diametro] || 0;
                const q = parseFloat(m.cantidad) || 0;
                const v = parseFloat(m.nro_veces) || 0;
                const l = parseFloat(largo) || 0;
                const a = parseFloat(alto) || 0;

                if (peso_diametro > 0) {
                    parcial = q * v * (l + a) * peso_diametro;
                }
            }

            // El formato de columnas destino [Item, Descripción, Und, Cant, Largo, Ancho, Alto, Parcial, Veces, Total]
            return [
                item,
                concatDesc,
                m.unidad,
                m.cantidad || "",
                largo || "",
                ancho || "",
                alto || "",
                parcial || 0,
                m.nro_veces || "",
                m.total || 0
            ];
        });

        // 2. Inyección Masiva
        const range = `${TARGET_SHEET}!${STARTING_CELL}`;
        console.log(`[INKAIA] Inyectando ${values2D.length} filas en el rango ${range}...`);

        await sheets.spreadsheets.values.batchUpdate({
            spreadsheetId: cloneId,
            requestBody: {
                valueInputOption: 'RAW',
                data: [{
                    range: range,
                    values: values2D
                }]
            }
        });

        // 3. Exportación Binaria
        console.log(`[INKAIA] Exportando documento como XLSX binario...`);
        const exportResponse = await drive.files.export({
            fileId: cloneId,
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }, { responseType: 'arraybuffer' });

        const fileBuffer = Buffer.from(exportResponse.data);

        // 4. Auto-Purga
        console.log(`[INKAIA] Purgando clon temporal ${cloneId}...`);
        await drive.files.delete({ fileId: cloneId });

        // 5. Entregar al Frontend
        console.log(`[INKAIA] Ciclo exitoso. Entregando ${fileBuffer.length} bytes.`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}.xlsx"`);
        res.send(fileBuffer);

    } catch (err) {
        console.error(`[INKAIA] ERROR CRÍTICO:`, err);
        res.status(500).json({ error: 'Error procesando la solicitud de exportación', detail: err.message || err });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[INKAIA] Backend Proxy iniciado en el puerto ${PORT}`);
});
