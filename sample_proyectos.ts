import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  const { data: metrados } = await supabase.from('metrados').select('proyecto').limit(3000);
  if (metrados) {
    const counts: Record<string, number> = {};
    metrados.forEach(m => {
      const p = String(m.proyecto);
      counts[p] = (counts[p] || 0) + 1;
    });
    console.log(JSON.stringify(counts, null, 2));
  }
}
run();
