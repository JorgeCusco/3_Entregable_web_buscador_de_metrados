import { createClient } from '@supabase/supabase-js';
import * as XLSX from 'xlsx';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function migrarSSOMA() {
    console.log("--- INICIANDO MIGRACIÓN SSOMA (TS) ---");
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
            cantidad: parseFloat(r['CANTIDAD'] || 0),
            longitud_area: parseFloat(r['LONGITUD/AREA'] || 0),
            ancho_empalme: parseFloat(r['ANCHO/EMPAME'] || 0),
            altura_gancho: parseFloat(r['ALTURA/GANCHO'] || 0),
            nro_veces: parseFloat(r['NRO VECES'] || 1),
            parcial: parseFloat(r['PARCIAL'] || 0),
            total: parseFloat(r['TOTAL'] || 0),
            proyecto: 'hospital',
            autor_usuario: 'RUBEN DARIO BRAVO TUNQUI',
            created_at: new Date().toISOString()
        };
    });

    const CHUNK_SIZE = 100;
    for (let i = 0; i < metrados.length; i += CHUNK_SIZE) {
        const batch = metrados.slice(i, i + CHUNK_SIZE);
        const { error } = await supabase.from('metrados').insert(batch);
        if (error) console.error("Error en bloque:", error.message);
        else console.log(`Bloque ${Math.floor(i/CHUNK_SIZE) + 1} subido.`);
    }
    console.log("--- MIGRACIÓN COMPLETADA ---");
}
migrarSSOMA();
