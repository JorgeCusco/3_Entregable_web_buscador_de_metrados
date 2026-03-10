require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

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

// Ruta a la plantilla local
const TEMPLATE_PATH = path.join(__dirname, '..', 'METRADO_PLANTILLA_2.xlsx');
const STARTING_ROW = 8; // B8 corresponde a Fila 8

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online (Modo Excel Local).');
});

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

        console.log(`[INKAIA] Export Directo Excel — Filas: ${metrados.length}`);

        // Verificar si existe la plantilla
        if (!fs.existsSync(TEMPLATE_PATH)) {
            throw new Error(`No se encontró la plantilla en: ${TEMPLATE_PATH}`);
        }

        // Cargar libro de trabajo
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(TEMPLATE_PATH);

        // Seleccionar pestaña (METRADO es la prioridad)
        let worksheet = workbook.getWorksheet('METRADO')
            || workbook.getWorksheet('Metrado Estructuras')
            || workbook.worksheets[0];

        if (!worksheet) throw new Error("No se encontró una pestaña válida en la plantilla.");

        console.log(`[INKAIA] Usando pestaña: "${worksheet.name}"`);

        // OPTIMIZACIÓN O(N): Pre-calcular partidas con metrados
        const codesWithMetrados = new Set(
            metrados.filter(m => !m.is_template).map(m => m.codigo_partida)
        );

        // Transformar y filtrar filas
        let currentExcelRow = STARTING_ROW;

        metrados.forEach(m => {
            let rowData = null;

            // CASO A: Título
            if (m.is_template && m.es_titulo) {
                rowData = ["", m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : "", "", "", "", "", m.codigo || "", m.descripcion || ""];
            }
            // CASO A2: Elemento virtual (se omite)
            else if (m.is_template && m.is_elemento_virtual) {
                return;
            }
            // CASO A3: Cabecera Partida
            else if (m.is_template && !m.es_titulo) {
                if (codesWithMetrados.has(m.codigo)) return;
                rowData = ["", m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : "", "", "", "", "", m.codigo || "", m.descripcion || "", "", "", "", "", "", "", "", "", m.unidad || ""];
            }
            // CASO B: Registro Real
            else if (!m.is_template) {
                const flagAcero = esPartidaAcero(m);
                const elemTrim = (m.elemento || '').trim();
                const detalleTrim = (m.detalle || '').trim();
                const concatDesc = elemTrim && detalleTrim ? `${elemTrim} / ${detalleTrim}` : elemTrim || detalleTrim;

                let parcial = m.parcial;
                if (flagAcero) {
                    const peso = validacionesPesoAcero[m.diametro] || 0;
                    if (peso > 0) parcial = (parseFloat(m.cantidad) || 0) * (parseFloat(m.nro_veces) || 1) * ((parseFloat(m.longitud_area) || 0) + (parseFloat(m.altura_gancho) || 0)) * peso;
                }

                rowData = [
                    "", // Col A (vacia si empezamos en B)
                    m.nivelJerarquia != null ? String(m.nivelJerarquia) : "", // B
                    m.fecha || "", // C
                    m.frente || "", // D
                    m.bloque || "", // E
                    m.nivel || "", // F
                    m.codigo_partida || "", // G
                    m.descripcion_partida || m.codigo_partida || "", // H
                    concatDesc, // I
                    m.cantidad || "", // J
                    m.longitud_area || "", // K
                    flagAcero ? "" : (m.ancho_empalme || ""), // L
                    m.altura_gancho || "", // M
                    flagAcero ? (m.diametro || "") : "", // N
                    parcial || 0, // O
                    m.nro_veces || "", // P
                    m.total || 0, // Q
                    m.unidad || "", // R
                    m.modificacion || "" // S
                ];
            }

            if (rowData) {
                // Inyectar en la hoja a partir de la columna B (índice 2)
                // Usamos row.values para setear el rango completo
                // Nota: rowData[0] es vacío para alinear con columna B
                const row = worksheet.getRow(currentExcelRow);
                for (let i = 1; i < rowData.length; i++) {
                    if (rowData[i] !== undefined) {
                        row.getCell(i + 1).value = rowData[i];
                    }
                }
                row.commit();
                currentExcelRow++;
            }
        });

        // Generar Buffer
        const buffer = await workbook.xlsx.writeBuffer();

        const filename = `Export_Excel_Directo_${new Date().toISOString().replace(/[:.]/g, '-')}.xlsx`;
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send(buffer);

        console.log(`[INKAIA] ✅ Exportación local completada: ${filename}`);

    } catch (err) {
        console.error(`[INKAIA] ❌ ERROR:`, err);
        res.status(500).json({ error: err.message, detail: err.stack });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[INKAIA] Servidor Local Excel activo en puerto ${PORT}`);
});
