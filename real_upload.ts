import { createClient } from '@supabase/supabase-js';
import * as XLSX from 'xlsx';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
    const workbook = XLSX.readFile('./SSOMA_SUBIR.xlsx');
    const sheet = workbook.Sheets['Metrado'];
    const data = XLSX.utils.sheet_to_json(sheet) as any[];

    const metrados = data.map(r => {
        let rawPartida = String(r['PARTIDA'] || '').trim();
        let codigo = rawPartida;
        let descripcion = String(r['DESCRIPCIÓN'] || '').trim();
        if (codigo.includes('-')) {
            const parts = codigo.split('-');
            codigo = parts[0].trim();
            if (!descripcion) descripcion = parts.slice(1).join('-').trim();
        }

        return {
            fecha: r['FECHA'] || new Date().toISOString().split('T')[0],
            frente: r['FRENTE'] || 'F1',
            bloque: r['BLOQUE'] || 'B1',
            nivel: r['NIVEL (PISO)'] || 'N1',
            cuadrilla: `SEGURIDAD - ${r['CUADRILLA'] || 'SSOMA'}`,
            codigo_partida: codigo,
            descripcion_partida: descripcion,
            unidad: r['UNIDAD'] || 'und',
            cantidad: parseFloat(r['CANTIDAD'] || 0) || 0,
            longitud_area: parseFloat(r['LONGITUD/AREA'] || 0) || 0,
            ancho_empalme: parseFloat(r['ANCHO/EMPAME'] || 0) || 0,
            altura_gancho: parseFloat(r['ALTURA/GANCHO'] || 0) || 0,
            nro_veces: parseFloat(r['NRO VECES'] || 1) || 1,
            parcial: parseFloat(r['PARCIAL'] || 0) || 0,
            total: parseFloat(r['TOTAL'] || 0) || 0,
            proyecto: 'hospital',
            autor_usuario: 'RUBEN DARIO BRAVO TUNQUI',
            created_at: new Date().toISOString()
        };
    });

    console.log(`Subiendo ${metrados.length} registros...`);
    const { error } = await supabase.from('metrados').insert(metrados);
    if (error) console.error("Error:", error);
    else console.log("¡Carga masiva completada con EXITO!");
}
run();
