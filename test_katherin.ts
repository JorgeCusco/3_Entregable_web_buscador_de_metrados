import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.VITE_SUPABASE_URL as string, process.env.VITE_SUPABASE_ANON_KEY as string);

async function checkKatherin() {
  const { data, error } = await supabase.from('metrados').select('id, codigo_partida, especialidad').ilike('autor_usuario', '%KATHERIN%');
  if (error) {
    console.error(error);
    return;
  }
  
  if (data) {
    console.log(`Total metrados de Katherin: ${data.length}`);
    const specs = Array.from(new Set(data.map(m => m.especialidad)));
    console.log(`Especialidades directamente guardadas:`, specs);
    
    // Group by first 2 segments of codigo_partida
    const grouped = {};
    data.forEach(m => {
        const prefix = m.codigo_partida.split('.').slice(0, 3).join('.'); // e.g. OE.1.1
        grouped[prefix] = (grouped[prefix] || 0) + 1;
    });
    console.log('Prefijos de codigo_partida de Katherin:', grouped);
  }
}
checkKatherin();
