const ExcelJS = require('exceljs');
const path = require('path');

async function inspect() {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join(__dirname, '..', 'METRADO_PLANTILLA_3.xlsx');
    try {
        await workbook.xlsx.readFile(filePath);
        console.log('Worksheets found:');
        workbook.worksheets.forEach((ws, i) => {
            console.log(`${i}: "${ws.name}"`);
        });
    } catch (e) {
        console.error('Error reading Excel:', e);
    }
}

inspect();
