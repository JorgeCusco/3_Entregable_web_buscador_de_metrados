import * as XLSX from 'xlsx';
import * as path from 'path';

const fileName = process.argv[2] || 'METRADO_PLANTILLA_5.xlsx';
const filePath = path.isAbsolute(fileName) ? fileName : path.join(process.cwd(), fileName);

console.log(`Inspeccionando: ${filePath}`);

if (!require('fs').existsSync(filePath)) {
    console.error(`El archivo no existe: ${filePath}`);
    process.exit(1);
}

const workbook = XLSX.readFile(filePath);
const sheetNames = workbook.SheetNames;
console.log("Hojas disponibles:", sheetNames);

const sheetName = sheetNames.find(n => n.toLowerCase().includes('metrado')) || sheetNames[0];
console.log(`Usando hoja: ${sheetName}`);

const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

console.log("\n--- HEADERS ---");
if (data.length > 0) {
    console.log(Object.keys(data[0]));
    console.log("\n--- PRIMERA FILA ---");
    console.log(JSON.stringify(data[0], null, 2));
} else {
    console.log("No se encontraron datos.");
}
