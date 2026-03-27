import * as XLSX from 'xlsx';
import * as fs from 'fs';

const workbook = XLSX.readFile('d:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/SSOMA_SUBIR.xlsx');
const sheet = workbook.Sheets['Metrado'];
const data = XLSX.utils.sheet_to_json(sheet);

console.log("HEADERS DETECTADOS:");
if (data.length > 0) {
    console.log(Object.keys(data[0]));
    console.log("\nMUESTRA PRIMERA FILA:");
    console.log(JSON.stringify(data[0], null, 2));
} else {
    console.log("No hay datos en la hoja 'Metrado'");
}
