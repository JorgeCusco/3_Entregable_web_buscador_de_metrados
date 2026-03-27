import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  console.log("--- BÚSQUEDA DE METRADOS HUÉRFANOS ---");

  // 1. Cargar todo el catálogo (HOSP y CONT)
  const { data: catalogo } = await supabase.from('catalogo_partidas').select('id, codigo, proyecto_id').limit(10000);
  const catalogoIds = new Set(catalogo?.map(p => p.id) || []);
  const catalogoCodes = new Set(catalogo?.map(p => p.codigo.trim().toUpperCase()) || []);
  
  // 2. Escanear metrados
  let allMetrados: any[] = [];
  let from = 0;
  while (true) {
    const { data } = await supabase.from('metrados').select('id, codigo_partida, partida_id, custom_partida_id, proyecto').range(from, from + 999);
    if (!data || data.length === 0) break;
    allMetrados = allMetrados.concat(data);
    from += 1000;
  }

  console.log("Total Metrados:", allMetrados.length);

  let orphans = 0;
  const orphanDetails: any[] = [];

  allMetrados.forEach(m => {
    const hasValidId = m.partida_id && catalogoIds.has(m.partida_id);
    const hasValidCode = m.codigo_partida && catalogoCodes.has(m.codigo_partida.trim().toUpperCase());

    if (!hasValidId && !hasValidCode) {
      orphans++;
      if (orphanDetails.length < 5) orphanDetails.push(m);
    }
  });

  console.log("Metrados HUÉRFANOS (Sin partida en catálogo):", orphans);
  console.log("Muestra de Huérfanos:", JSON.stringify(orphanDetails, null, 2));

  console.log("\n--- FIN ---");
}
run();
