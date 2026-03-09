/**
 * limpiador.js – Reparación matemática del árbol WBS
 * Usa import() dinámico para leer mockDB.ts correctamente.
 * Estrategia: re-exporta como JSON a un archivo temporal, luego lo procesa.
 */

import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, '../src/data');
const OUTPUT = join(SRC_DIR, 'mockDB_2.ts');

// ─── Reglas Matemáticas ────────────────────────────────────────────────────
const calcNivel = (cod) => cod.split('.').length - 1;
const calcParentId = (cod) => {
    const last = cod.lastIndexOf('.');
    return last === -1 ? '' : cod.substring(0, last);
};

// ─── Estrategia: leer el raw TS y parsear con regex más simple ─────────────
// El mockDB.ts tiene objetos en formato JSON-like. Lo convertimos a JSON real
// reemplazando: comentarios TS, "import type..." header, export statement.

console.log('[LIMPIADOR] Leyendo mockDB.ts...');
let raw = readFileSync(join(SRC_DIR, 'mockDB.ts'), 'utf-8');

// Remover el header de TypeScript para quedarnos solo con el array
// Buscar desde el primer '[' hasta el final del archivo
const arrStart = raw.indexOf('[\r\n    {');
if (arrStart === -1) {
    // Intentar sin \r
    const arrStart2 = raw.indexOf('[\n    {');
    if (arrStart2 === -1) throw new Error('No se encontró inicio del array. Verificar formato del archivo.');
}
const startIdx = arrStart !== -1 ? arrStart : raw.indexOf('[\n    {');

// El final es always el último '];\n' del archivo
const endIdx = raw.lastIndexOf('];');
if (endIdx === -1) throw new Error('No se encontró el cierre del array.');

const arrayContent = raw.substring(startIdx, endIdx + 1); // Incluir el ']'
console.log(`[LIMPIADOR] Raw array extraído: ${arrayContent.length} chars`);

// Convertir a JSON válido:
// 1. Reemplazar claves sin comillas → "clave":
// 2. Eliminar comas finales (trailing commas)
let jsonStr = arrayContent
    // Quitar comentarios de línea //...
    .replace(/\/\/[^\n]*/g, '')
    // Poner comillas en propiedades sin comillas: { id: → { "id":
    .replace(/([{,]\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*:)/g, '$1"$2"$3')
    // Trailing commas: , } → } y , ] → ]
    .replace(/,(\s*[}\]])/g, '$1');

console.log('[LIMPIADOR] Parseando JSON...');
let partidas;
try {
    partidas = JSON.parse(jsonStr);
} catch (e) {
    // Si falla, intentar con eval como fallback
    console.warn('[LIMPIADOR] JSON.parse falló, intentando con Function eval...', e.message.substring(0, 100));
    try {
        partidas = Function('"use strict"; return (' + arrayContent + ')')();
    } catch (e2) {
        throw new Error('No se pudo parsear el array: ' + e2.message.substring(0, 200));
    }
}

console.log(`[LIMPIADOR] ${partidas.length} partidas cargadas.`);

// ─── Mapa para breadcrumbs ─────────────────────────────────────────────────
const codigoMap = new Map(partidas.map(p => [p.codigo, `${p.codigo} ${p.descripcion}`]));

// ─── Reparar cada nodo ─────────────────────────────────────────────────────
let reparadas = 0;
const fixedPartidas = partidas.map(p => {
    const nuevaNivel = calcNivel(p.codigo);
    const nuevoParent = calcParentId(p.codigo);
    if (p.nivel_jerarquia !== nuevaNivel || p.parent_id !== nuevoParent) reparadas++;

    // Breadcrumb solo en terminales
    let jerarquia = p.jerarquia || [];
    if (p.es_titulo === false && !p.is_elemento_virtual) {
        const cadena = [];
        let cur = nuevoParent;
        const visited = new Set();
        while (cur && codigoMap.has(cur) && !visited.has(cur)) {
            visited.add(cur);
            cadena.unshift(codigoMap.get(cur));
            cur = calcParentId(cur);
        }
        jerarquia = cadena;
    }

    return {
        ...p,
        nivel_jerarquia: nuevaNivel,
        parent_id: nuevoParent,
        jerarquia,
        especialidad: 'hospital',
    };
});

console.log(`[LIMPIADOR] Nodos corregidos: ${reparadas}`);
console.log(`[LIMPIADOR] T: ${fixedPartidas.filter(p => p.es_titulo === true).length} títulos`);
console.log(`[LIMPIADOR] P: ${fixedPartidas.filter(p => p.es_titulo === false).length} partidas terminales`);

// ─── Escribir mockDB_2.ts ──────────────────────────────────────────────────
const outJson = JSON.stringify(fixedPartidas, null, 4);
const output = `import type { Partida } from "../types";

// Generado por scripts/limpiador.js — NO editar manualmente.
// Árbol WBS reparado: nivel_jerarquia, parent_id, jerarquia[] y especialidad reconstruidos.

export const mockPartidas2: Partida[] = ${outJson};
`;

writeFileSync(OUTPUT, output, 'utf-8');
console.log('[LIMPIADOR] ✅ Generado:', OUTPUT);
