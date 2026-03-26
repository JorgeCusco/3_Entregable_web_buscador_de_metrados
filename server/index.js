// DEPLOY_FORCE: 2026-03-12 09:38
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

// Ruta a la plantilla local
const TEMPLATE_PATH = path.join(__dirname, '..', 'METRADO_PLANTILLA_5.xlsx');
const STARTING_ROW = 8; // B8 corresponde a Fila 8

app.get('/', (req, res) => {
    res.send('✅ Servidor Proxy INKAIA Online (Modo Excel Local).');
});

// Pesos nominales de acero (kg/m)
const validacionesPesoAcero = {
    "1/4": 0.254,
    "3/8": 0.560,
    "1/2": 0.994,
    "5/8": 1.550,
    "3/4": 2.240,
    "1": 3.970,
    "1 3/8": 7.907
};

// Reglas de especialidad para detección automática
const SPECIALTY_RULES = [
    { id: 'TODAS', label: 'TODAS', ranges: ['OE'] },
    { id: 'OBRAS PROVISIONALES', label: 'OBRAS PROVISIONALES', ranges: ['OE.1.1'] },
    { id: 'SEGURIDAD', label: 'SEGURIDAD', ranges: ['OE.1.2'] },
    { id: 'ARQUEOLOGÍA', label: 'ARQUEOLOGÍA', ranges: ['OE.1.3', 'OE.1.4', 'OE.1.5', 'OE.1.6'] },
    { id: 'ESTRUCTURAS', label: 'ESTRUCTURAS', ranges: ['OE.2'] },
    { id: 'ARQUITECTURA', label: 'ARQUITECTURA', ranges: ['OE.3'] },
    { id: 'INSTALACIONES SANITARIAS', label: 'INSTALACIONES SANITARIAS', ranges: ['OE.4'] },
    { id: 'ELÉCTRICAS', label: 'ELÉCTRICAS', ranges: ['OE.5', 'OE.5.1', 'OE.5.2', 'OE.5.3', 'OE.5.4', 'OE.5.5'] },
    { id: 'ELECTROMECÁNICAS', label: 'ELECTROMECÁNICAS', ranges: ['OE.5.6', 'OE.5.7', 'OE.7'] },
    { id: 'COMUNICACIONES', label: 'COMUNICACIONES', ranges: ['OE.6'] },
    { id: 'PLAN DE MANEJO AMBIENTAL', label: 'PLAN DE MANEJO AMBIENTAL', ranges: ['OE.8'] },
    { id: 'EQUIPAMIENTO BIOMÉDICO', label: 'EQUIPAMIENTO BIOMÉDICO', ranges: ['OE.9'] },
];

const obtenerEspecialidad = (codigo) => {
    if (!codigo) return "";
    const cleanCodigo = codigo.trim();
    // Buscar la regla más específica primero (rango más largo)
    const sortedRules = [...SPECIALTY_RULES]
        .filter(r => r.id !== 'TODAS')
        .sort((a, b) => {
            const maxA = Math.max(...a.ranges.map(r => r.length));
            const maxB = Math.max(...b.ranges.map(r => r.length));
            return maxB - maxA;
        });

    for (const rule of sortedRules) {
        if (rule.ranges.some(range => cleanCodigo.startsWith(range))) {
            return rule.id;
        }
    }
    return "";
};

// Helper para determinar si una partida es de acero
const esPartidaAcero = (m) =>
    m.unidad && m.unidad.toLowerCase() === 'kg' &&
    m.descripcion_partida &&
    m.descripcion_partida.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes('acero');

app.post('/api/export/metrados', async (req, res) => {
    try {
        const { metrados, proyecto } = req.body;
        console.log(`Iniciando exportación de ${metrados.length} registros para proyecto: ${proyecto}`);
        if (!Array.isArray(metrados) || metrados.length === 0)
            return res.status(400).json({ error: 'Payload vacío.' });

        console.log(`[INKAIA] Export Directo Excel — Filas: ${metrados.length}`);
        // DEBUG: Muestra los primeros 3 registros para ver obrero_nombre
        console.log('[INKAIA] DEBUG Payload (primeros 3):', JSON.stringify(metrados.slice(0, 3).map(m => ({ id: m.id, desc: m.descripcion_partida || m.descripcion, obrero: m.obrero_nombre })), null, 2));

        // Verificar si existe la plantilla
        if (!fs.existsSync(TEMPLATE_PATH)) {
            throw new Error(`No se encontró la plantilla en: ${TEMPLATE_PATH}`);
        }

        // Cargar libro de trabajo
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(TEMPLATE_PATH);

        // Determinar qué pestaña base usar. Priorizamos 'METRADO' o 'Hospital'/'Contingencia'
        let worksheet = workbook.getWorksheet('METRADO')
            || workbook.getWorksheet(proyecto === 'hospital' ? 'Hospital' : 'Contingencia')
            || workbook.getWorksheet('Metrado Estructuras')
            || workbook.worksheets[0];

        if (!worksheet) throw new Error("No se encontró una pestaña válida en la plantilla.");

        console.log(`[INKAIA] Usando pestaña: "${worksheet.name}"`);

        // OPTIMIZACIÓN O(N): Pre-calcular partidas con metrados
        const codesWithMetrados = new Set(
            metrados.filter(m => !m.is_template).map(m => m.codigo_partida)
        );

        // Pre-calcular sumas por partida para la fila "Total 2"
        const partidaTotals = {};
        const codigosMap = new Map();

        metrados.forEach(m => {
            if (m.is_template) {
                codigosMap.set(m.codigo, {
                    descripcion: m.descripcion,
                    nivel_jerarquia: m.nivel_jerarquia,
                    unidad: m.unidad
                });
            } else {
                partidaTotals[m.codigo_partida] = (partidaTotals[m.codigo_partida] || 0) + (m.total || 0);
            }
        });

        // Transformar y filtrar filas
        let currentExcelRow = STARTING_ROW;

        metrados.forEach(m => {
            let rowData = null;

            // CASO A: Título de jerarquía (se omite)
            if (m.is_template && m.es_titulo) {
                return;
            }
            // CASO A2: Elemento virtual (se omite)
            else if (m.is_template && m.is_elemento_virtual) {
                return;
            }

            // Calculamos Grados
            const isSumatoria = m.is_template && !m.es_titulo;
            const codigoActual = isSumatoria ? m.codigo : m.codigo_partida;
            const descActual = isSumatoria ? m.descripcion : (m.descripcion_partida || m.codigo_partida || "");

            const grados = ["", "", "", ""];
            let ancestors = [];
            for (let [key, val] of codigosMap.entries()) {
                if (codigoActual === key || codigoActual.startsWith(key + '.')) {
                    ancestors.push({ codigo: key, descripcion: val.descripcion });
                }
            }
            // Ordenar por nivel (longitud del código)
            ancestors.sort((a, b) => a.codigo.length - b.codigo.length);
            for (let i = 0; i < ancestors.length && i < 4; i++) {
                grados[i] = `${ancestors[i].codigo}-${ancestors[i].descripcion}`;
            }

            const colM = `${codigoActual}-${descActual}`;
            const total2 = partidaTotals[codigoActual] || 0;
            const unidadActual = (m.unidad) || (codigosMap.get(codigoActual)?.unidad) || "";

            rowData = new Array(27).fill("");

            if (isSumatoria) {
                const hasMetrados = codesWithMetrados.has(codigoActual);
                rowData[1] = m.nivel_jerarquia != null ? String(m.nivel_jerarquia) : ""; // B
                rowData[8] = grados[0]; // I: Grado 1
                rowData[9] = grados[1]; // J: Grado 2
                rowData[10] = grados[2]; // K: Grado 3
                rowData[11] = grados[3]; // L: Grado 4
                rowData[12] = colM;     // M
                rowData[22] = hasMetrados ? total2 : ""; // W: Total 2
                rowData[23] = unidadActual; // X: Unidad
                rowData[24] = m.modificacion || "SM"; // Y
                rowData[25] = ""; // Z: Personal
                rowData[26] = ""; // AA: Autor
            }
            // CASO B: Registro Real
            else if (!m.is_template) {
                const flagAcero = esPartidaAcero(m);
                const elemTrim = (m.elemento || '').trim();
                const detalleTrim = (m.detalle || '').trim();
                const concatDesc = elemTrim && detalleTrim ? `${elemTrim} / ${detalleTrim}` : elemTrim || detalleTrim;

                let parcial = m.parcial;
                if (flagAcero) {
                    const normalizedDiam = (m.diametro || "").replace('"', '');
                    const peso = validacionesPesoAcero[normalizedDiam] || 0;
                    if (peso > 0) {
                        parcial = (parseFloat(m.cantidad) || 0) * ((parseFloat(m.longitud_area) || 0) + (parseFloat(m.altura_gancho) || 0)) * peso;
                    }
                } else if (m.hvac_factor) {
                    const c = parseFloat(m.cantidad) || 1;
                    const l = (m.hvac_item_type === 'CODO' || m.hvac_item_type === 'DUCTO') ? (parseFloat(m.longitud_area) || 1) : 1;
                    const a = parseFloat(m.ancho_empalme) || 1;
                    const h = parseFloat(m.altura_gancho) || 1;
                    parcial = c * l * a * h * m.hvac_factor;
                }

                rowData[1] = m.nivelJerarquia != null ? String(m.nivelJerarquia) : ""; // B
                rowData[2] = m.fecha || ""; // C
                rowData[3] = obtenerEspecialidad(codigoActual) || m.especialidad || ""; // D: Especialidad detectada
                rowData[4] = m.frente || ""; // E
                rowData[5] = m.bloque || ""; // F
                rowData[6] = m.nivel || ""; // G
                rowData[7] = m.cuadrilla || ""; // H

                rowData[8] = grados[0]; // I: Grado 1
                rowData[9] = grados[1]; // J: Grado 2
                rowData[10] = grados[2]; // K: Grado 3
                rowData[11] = grados[3]; // L: Grado 4

                rowData[12] = colM; // M
                rowData[13] = concatDesc; // N
                rowData[14] = m.cantidad || ""; // O
                rowData[15] = m.longitud_area || ""; // P
                rowData[16] = flagAcero ? "" : (m.ancho_empalme || ""); // Q
                rowData[17] = m.altura_gancho || ""; // R
                rowData[18] = parcial || 0; // S
                rowData[19] = m.nro_veces || ""; // T
                rowData[20] = flagAcero ? (m.diametro || "") : ""; // U
                rowData[21] = m.total || 0; // V: total

                rowData[22] = ""; // W: Total 2 (Solo en cabeceras)
                rowData[23] = unidadActual; // X: Unidad
                rowData[24] = m.modificacion || "SM"; // Y: modificacion
                
                // Z: Personal (Cuadrilla Consolidada / Nombre Formateado)
                rowData[25] = m.obrero_nombre || "";

                // AA: Autor
                rowData[26] = m.autor_usuario || "";
            }

            if (rowData) {
                const row = worksheet.getRow(currentExcelRow);
                rowData.forEach((val, i) => {
                    // Escribimos siempre a partir de Col B (i=1) si el valor no es undefined
                    if (i === 0) return; // Saltamos Col A
                    if (val !== undefined) {
                        const cell = row.getCell(i + 1);
                        cell.value = val;

                        // Limpieza específica para Columna W (Total 2) en registros reales
                        if (i === 22 && !isSumatoria) {
                            cell.value = null;
                            // Quitar color de relleno si existe (para quitar el amarillo residual)
                            cell.fill = {
                                type: 'pattern',
                                pattern: 'none'
                            };
                        }
                    }
                });
                currentExcelRow++;
            }
        });

        // Generar Buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Determinar nombre descriptivo basado en la primera especialidad encontrada
        let especialidadNombre = "MODIF";
        const firstReal = metrados.find(m => !m.is_template && m.especialidad);
        if (firstReal && firstReal.especialidad) {
            especialidadNombre = firstReal.especialidad.toUpperCase();
        }

        const dateStr = new Date().toISOString().split('T')[0];
        const filename = `Metrado_${especialidadNombre}_${dateStr}.xlsx`;

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
