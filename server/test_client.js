const fs = require('fs');

async function testExport() {
    console.log("-> Iniciando Test Inkaia: Leyendo payload sintético...");
    const payload = JSON.parse(fs.readFileSync('./test_payload.json', 'utf8'));

    try {
        const res = await fetch('http://localhost:3001/api/export/metrados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errorJson = await res.json();
            console.error("<- ERROR ESTRUCTURADO:");
            console.error(JSON.stringify(errorJson, null, 2));
            fs.writeFileSync('error_log.json', JSON.stringify(errorJson, null, 2));
            return;
        }

        const buffer = await res.arrayBuffer();
        fs.writeFileSync('./Respuesta_Automatica_OFI.xlsx', Buffer.from(buffer));
        console.log("✅ EXITO TOTAL: El archivo ha sido guardado.");

    } catch (error) {
        console.error("<- Falla de Conexión. ¿Está prendido el server en puerto 3001?", error);
    }
}

testExport();
