import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

async function test() {
  const { data, error } = await supabase.from('metrados').insert([{
    fecha: new Date().toISOString().split('T')[0],
    frente: 'F1',
    bloque: 'I',
    nivel: 'N1',
    cuadrilla: 'C1',
    parcial: 10,
    total: 10,
    proyecto: 'hospital',
    autor_usuario: 'TEST'
  }]);
  console.log('Error:', error);
}
test();
