#!/usr/bin/env node
/**
 * generar_mockDB.cjs — Generador definitivo mockDB_2.ts
 * Usa parser consciente de strings para extraer el array del mockDB.ts
 */
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_PATH = path.join(__dirname, '../Base_datos_MODIF3.xlsx');
const MOCKDB_PATH = path.join(__dirname, '../src/data/mockDB.ts');
const OUTPUT_PATH = path.join(__dirname, '../src/data/mockDB_2.ts');

// ─── Helpers ────────────────────────────────────────────────────────────────
const calcNivel = cod => cod.split('.').length - 1;
const calcParentId = cod => {
    const last = cod.lastIndexOf('.');
    return last === -1 ? '' : cod.substring(0, last);
};
const isMod = val => /^(PN|MM|DD)\d+$/i.test(String(val || '').trim());

/**
 * Extrae el array del archivo TypeScript usando un parser con awareness de strings,
 * para no confundirse con [ ] dentro de cadenas de texto.
 */
function extractArrayFromTS(tsContent) {
    const marker = 'export const mockPartidas: Partida[] = [';
    const markerIdx = tsContent.indexOf(marker);
    if (markerIdx === -1) throw new Error('No se encontró el marker en mockDB.ts');

    const start = tsContent.indexOf('[', markerIdx);
    let i = start;
    let depth = 0;
    let inString = false;
    let stringChar = '';

    while (i < tsContent.length) {
        const ch = tsContent[i];

        if (inString) {
            if (ch === '\\') {
                i += 2; // Saltar el carácter escapado
                continue;
            }
            if (ch === stringChar) {
                inString = false;
            }
        } else {
            if (ch === '"' || ch === "'") {
                inString = true;
                stringChar = ch;
            } else if (ch === '[') {
                depth++;
            } else if (ch === ']') {
                depth--;
                if (depth === 0) {
                    return tsContent.substring(start, i + 1);
                }
            }
        }
        i++;
    }
    throw new Error('No se pudo cerrar el array. El archivo puede estar truncado.');
}

// ─── FUENTE 1: Hospital desde mockDB.ts ──────────────────────────────────────
console.log('[GENERADOR] Leyendo Hospital desde mockDB.ts...');
const tsContent = fs.readFileSync(MOCKDB_PATH, 'utf-8');
console.log(`[GENERADOR] Archivo: ${tsContent.length} chars`);

const rawArray = extractArrayFromTS(tsContent);
console.log(`[GENERADOR] Array extraído: ${rawArray.length} chars. Evaluando...`);

const hospitalRaw = Function('"use strict"; return (' + rawArray + ')')();
console.log(`[GENERADOR] Hospital raw: ${hospitalRaw.length} partidas`);

// Enriquecer Hospital: recalcular jerarquía + especialidad
const hospMap = new Map(hospitalRaw.map(p => [p.codigo, `${p.codigo} ${p.descripcion}`]));
const hospitalFixed = hospitalRaw.map(p => {
    const nivel_jerarquia = calcNivel(p.codigo);
    const parent_id = calcParentId(p.codigo);
    let jerarquia = [];
    if (p.es_titulo === false) {
        let cur = parent_id;
        const visited = new Set();
        while (cur && hospMap.has(cur) && !visited.has(cur)) {
            visited.add(cur);
            jerarquia.unshift(hospMap.get(cur));
            cur = calcParentId(cur);
        }
    }
    return { ...p, nivel_jerarquia, parent_id, jerarquia, especialidad: 'hospital' };
});
console.log(`[GENERADOR] Hospital procesado: ${hospitalFixed.length} partidas`);

// ─── FUENTE 2: Contingencia desde Excel ───────────────────────────────────────
console.log('[GENERADOR] Leyendo Excel:', EXCEL_PATH);
const wb = XLSX.readFile(EXCEL_PATH);
console.log('[GENERADOR] Hojas:', wb.SheetNames);

const sheetName = wb.SheetNames.find(n => n.toLowerCase().includes('contingencia')) || wb.SheetNames[0];
const ws = wb.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

const contMap = new Map();
const contRaw = [];
let idCtr = hospitalFixed.length + 1;

rows.forEach(row => {
    const codigo = String(row[0] || '').trim();
    if (!codigo || !codigo.includes('.')) return;

    const descripcion = String(row[1] || '').trim();
    const unidad = String(row[2] || '').trim();

    // Modificadores PN/MM/DD en cols D..U
    const mods = [];
    for (let col = 3; col <= 20; col++) {
        const val = String(row[col] || '').trim();
        if (isMod(val)) mods.push(val.toUpperCase());
    }

    const es_titulo = unidad === '';
    const modificacion = mods.length > 0 ? mods.join('-') : undefined;

    contMap.set(codigo, `${codigo} ${descripcion}`);
    contRaw.push({
        id: String(idCtr++),
        codigo,
        descripcion,
        unidad,
        es_titulo,
        parent_id: calcParentId(codigo),
        nivel_jerarquia: calcNivel(codigo),
        jerarquia: [],
        especialidad: 'contingencia',
        modificacion,
        apu: null
    });
});

// Reconstruir breadcrumbs Contingencia
const contFixed = contRaw.map(p => {
    if (p.es_titulo) return { ...p, jerarquia: [] };
    const jerarquia = [];
    let cur = p.parent_id;
    const visited = new Set();
    while (cur && contMap.has(cur) && !visited.has(cur)) {
        visited.add(cur);
        jerarquia.unshift(contMap.get(cur));
        cur = calcParentId(cur);
    }
    return { ...p, jerarquia };
});

console.log(`[GENERADOR] Contingencia: ${contFixed.length} partidas`);
console.log(`[GENERADOR] Con modificadores: ${contFixed.filter(p => p.modificacion).length}`);

// ─── COMBINAR ────────────────────────────────────────────────────────────────
const todas = [...hospitalFixed, ...contFixed];
console.log(`[GENERADOR] Total: ${todas.length} partidas`);

// ─── ESCRIBIR ─────────────────────────────────────────────────────────────────
const jsonStr = JSON.stringify(todas, null, 4);
const output = `import type { Partida } from "../types";

// Generado por scripts/generar_mockDB.cjs — NO editar manualmente.
// Hospital: ${hospitalFixed.length} partidas (mockDB.ts con APUs intactos)
// Contingencia: ${contFixed.length} partidas (Base_datos_MODIF3.xlsx)
// Modificaciones agrupadas: "PN01-MM02-DD03"

export const mockPartidas2: Partida[] = ${jsonStr};
`;

fs.writeFileSync(OUTPUT_PATH, output, 'utf-8');
console.log('[GENERADOR] ✅ Escrito en:', OUTPUT_PATH);
