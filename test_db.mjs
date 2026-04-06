import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
    const { data: sel, error: selErr } = await supabase.from('metrados_liquidaciones').select('*').limit(1);
    const { data: ins, error: insErr } = await supabase.from('metrados_liquidaciones').insert([{
        fecha: '2024-01-01', frente: 'A', bloque: 'B', nivel: 'C',
        codigo_partida: '01.01', descripcion_partida: 'test', unidad: 'm', autor_usuario: 'A'
    }]);

    fs.writeFileSync('test_output.json', JSON.stringify({ 
        selectError: selErr, 
        insertError: insErr 
    }, null, 2));
}

test();
