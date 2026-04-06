import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function test() {
    const { data: ins, error: insErr } = await supabase.from('metrados').insert([{
        fecha: '2024-01-01', frente: 'A', bloque: 'B', nivel: 'C',
        codigo_partida: '01.01', descripcion_partida: 'test', unidad: 'm', autor_usuario: 'NodeTest'
    }]);

    console.log("Metrados insert:", insErr || 'Success');
}

test();
