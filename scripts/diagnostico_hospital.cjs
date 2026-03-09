#!/usr/bin/env node
/**
 * diagnostico_hospital.cjs — Diagnóstico del parseo del mockDB.ts
 */
const fs = require('fs');
const path = require('path');

const MOCKDB_PATH = path.join(__dirname, '../src/data/mockDB.ts');
console.log('[DIAG] Leyendo:', MOCKDB_PATH);
const tsContent = fs.readFileSync(MOCKDB_PATH, 'utf-8');
console.log('[DIAG] Tamaño del archivo:', tsContent.length, 'chars');

const markerIdx = tsContent.indexOf('export const mockPartidas: Partida[] = [');
console.log('[DIAG] markerIdx:', markerIdx);

const arrayStart = tsContent.indexOf('[', markerIdx);
console.log('[DIAG] arrayStart:', arrayStart);

let depth = 0, arrayEnd = -1, count = 0;
for (let i = arrayStart; i < tsContent.length; i++) {
    if (tsContent[i] === '[') depth++;
    else if (tsContent[i] === ']') {
        depth--;
        if (depth === 0) { arrayEnd = i; break; }
    }
}
console.log('[DIAG] arrayEnd:', arrayEnd);
const rawArray = tsContent.substring(arrayStart, arrayEnd + 1);
console.log('[DIAG] rawArray length:', rawArray.length);

// Contar el numero de objetos via heuristica (numero de { "id": )
const idCount = (rawArray.match(/"id":/g) || []).length;
console.log('[DIAG] Objetos detectados via "id":', idCount);

// Intentar Function eval
console.log('[DIAG] Intentando Function eval...');
try {
    const result = Function('"use strict"; return (' + rawArray + ')')();
    console.log('[DIAG] ✅ Function eval exitoso. Items:', result.length);
} catch (e) {
    console.log('[DIAG] ❌ Function eval FALLÓ:', e.message.substring(0, 200));
    // Mostrar caracteres problemáticos alrededor
    if (e.lineNumber) console.log('[DIAG] Línea:', e.lineNumber);
}
