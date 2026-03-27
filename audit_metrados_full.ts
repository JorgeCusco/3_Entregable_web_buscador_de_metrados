import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  let allRows: any[] = [];
  let from = 0;
  let to = 999;
  
  while (true) {
    const { data, error } = await supabase.from('metrados').select('proyecto').range(from, to);
    if (!data || data.length === 0) break;
    allRows = allRows.concat(data);
    from += 1000;
    to += 1000;
    if (data.length < 1000) break;
  }

  const counts: Record<string, number> = {};
  allRows.forEach(row => {
    const p = String(row.proyecto);
    counts[p] = (counts[p] || 0) + 1;
  });
  console.log("TOTAL PROCESADO:", allRows.length);
  console.log("DISTRIBUCION:");
  console.log(JSON.stringify(counts, null, 2));
}
run();
