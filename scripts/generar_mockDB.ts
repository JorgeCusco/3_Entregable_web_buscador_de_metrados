/**
 * generar_mockDB.ts — Script TSX para generar mockDB_2.ts
 * Importa mockDB.ts directamente (sin parseo textual) y combina con Excel MODIF3.
 */
import { mockPartidas } from '../src/data/mockDB';
import XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const EXCEL_PATH = join(__dirname, '../Base_datos_MODIF3.xlsx');
const OUTPUT = join(__dirname, '../src/data/mockDB_2.ts');

const calcNivel = (cod: string) => cod.split('.').length - 1;
const calcParentId = (cod: string) => { const l = cod.lastIndexOf('.'); return l === -1 ? '' : cod.substring(0, l); };
const isMod = (val: string) => /^(PN|MM|DD)\d+$/i.test(val.trim());

// ─── Hospital: enriquecer partidas originales ────────────────────────────────
console.log(`[GEN] Hospital raw: ${mockPartidas.length} partidas`);
const hospMap = new Map(mockPartidas.map((p: any) => [p.codigo, `${p.codigo} ${p.descripcion}`]));
const hospitalFixed = mockPartidas.map((p: any) => {
    const nivel = calcNivel(p.codigo);
    const pid = calcParentId(p.codigo);
    let jerarquia: string[] = [];
    if (p.es_titulo === false) {
        let cur = pid;
        const vis = new Set<string>();
        while (cur && hospMap.has(cur) && !vis.has(cur)) {
            vis.add(cur);
            jerarquia.unshift(hospMap.get(cur)!);
            cur = calcParentId(cur);
        }
    }
    return { ...p, nivel_jerarquia: nivel, parent_id: pid, jerarquia, especialidad: 'hospital' };
});

// ─── Contingencia: leer del Excel ───────────────────────────────────────────
const wb = XLSX.readFile(EXCEL_PATH);
const sheet = wb.SheetNames.find(n => n.toLowerCase().includes('contingencia')) ?? wb.SheetNames[0];
const rows = XLSX.utils.sheet_to_json<any[]>(wb.Sheets[sheet], { header: 1, defval: '' });

const contMap = new Map<string, string>();
const contRaw: any[] = [];
let id = hospitalFixed.length + 1;

for (const row of rows) {
    const codigo = String(row[0] || '').trim();
    if (!codigo.includes('.')) continue;
    const descripcion = String(row[1] || '').trim();
    const unidad = String(row[2] || '').trim();
    const mods = (row as string[]).slice(3, 21).map(v => String(v).trim()).filter(isMod).map(v => v.toUpperCase());
    contMap.set(codigo, `${codigo} ${descripcion}`);
    contRaw.push({
        id: String(id++), codigo, descripcion, unidad,
        es_titulo: unidad === '',
        parent_id: calcParentId(codigo),
        nivel_jerarquia: calcNivel(codigo),
        jerarquia: [],
        especialidad: 'contingencia',
        modificacion: mods.length ? mods.join('-') : undefined,
        apu: null
    });
}

const contFixed = contRaw.map(p => {
    if (p.es_titulo) return { ...p, jerarquia: [] };
    const jerarquia: string[] = [];
    let cur = p.parent_id;
    const vis = new Set<string>();
    while (cur && contMap.has(cur) && !vis.has(cur)) {
        vis.add(cur); jerarquia.unshift(contMap.get(cur)!); cur = calcParentId(cur);
    }
    return { ...p, jerarquia };
});

console.log(`[GEN] Contingencia: ${contFixed.length} partidas | Con modificadores: ${contFixed.filter((p: any) => p.modificacion).length}`);

const todas = [...hospitalFixed, ...contFixed];
console.log(`[GEN] Total: ${todas.length} partidas`);

const out = `// @ts-nocheck
import type { Partida } from "../types";

// Generado por scripts/generar_mockDB.ts via tsx
// Hospital: ${hospitalFixed.length} | Contingencia: ${contFixed.length}

export const mockPartidas2: Partida[] = ${JSON.stringify(todas, null, 4)};
`;
writeFileSync(OUTPUT, out, 'utf-8');
console.log('[GEN] ✅ Generado:', OUTPUT);
