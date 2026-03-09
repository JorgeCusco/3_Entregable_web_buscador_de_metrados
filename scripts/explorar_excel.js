// explorar_excel.js — ESM script para inspeccionar Base_datos_MODIF3.xlsx
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const XLSX = await import('xlsx');

const wb = XLSX.readFile(join(__dirname, '../Base_datos_MODIF3.xlsx'));
console.log('=== HOJAS ===', wb.SheetNames);

for (const sheetName of wb.SheetNames) {
    console.log(`\n=== HOJA: ${sheetName} ===`);
    const ws = wb.Sheets[sheetName];
    const raw = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    console.log('Total filas:', raw.length);

    // Ver primeras 20 filas
    for (let i = 0; i < Math.min(20, raw.length); i++) {
        const row = raw[i];
        if (row && row.some(c => c !== '')) {
            console.log(`Fila[${i}]:`, JSON.stringify(row));
        }
    }

    // Ver columnas disponibles (primera fila con datos)
    const firstDataRow = raw.find(r => r && r[0] && String(r[0]).includes('.'));
    if (firstDataRow) {
        console.log('\nEjemplo de fila de datos:', JSON.stringify(firstDataRow));
    }

    // Contar todas las filas no vacías
    const noVacias = raw.filter(r => r && r.some(c => c !== '')).length;
    console.log('Filas con contenido:', noVacias);
}
