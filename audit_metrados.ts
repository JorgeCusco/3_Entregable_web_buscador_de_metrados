import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  console.log("--- AUDITORÍA DE METRADOS (EXHAUSTIVA) ---");
  
  // 1. Conteo total real
  const { count, error } = await supabase.from('metrados').select('*', { count: 'exact', head: true });
  console.log("Total records en tabla 'metrados':", count);
  if (error) console.error("Error contando:", error);

  // 2. Desglose por valor de la columna 'proyecto'
  const { data: projects } = await supabase.from('metrados').select('proyecto');
  if (projects) {
    const counts: Record<string, number> = {};
    projects.forEach(p => {
      const val = String(p.proyecto);
      counts[val] = (counts[val] || 0) + 1;
    });
    console.log("\nDesglose por columna 'proyecto':");
    Object.entries(counts).forEach(([val, c]) => {
      console.log(`- "${val}": ${c} registros`);
    });
  }

  // 3. Verificación de Nulos
  const { count: nullCount } = await supabase.from('metrados').select('*', { count: 'exact', head: true }).is('proyecto', null);
  console.log("\nRegistros con proyecto NULL:", nullCount);

  console.log("\n--- FIN ---");
}
run();
