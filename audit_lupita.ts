import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  console.log("--- AUDITORÍA: LUPITA ENCARNACION SALAZ ---");
  
  const authorName = "LUPITA ENCARNACION SALAZ";
  
  // 1. Buscar todos sus registros
  const { data, count } = await supabase
    .from('metrados')
    .select('*', { count: 'exact' })
    .eq('autor_usuario', authorName);
    
  console.log(`Total en DB para ${authorName}: ${count}`);
  
  if (data) {
    const projects: Record<string, number> = {};
    const specialties: Record<string, number> = {};
    const nullPartidaIds = data.filter(m => !m.partida_id && !m.custom_partida_id).length;

    data.forEach(m => {
      const p = String(m.proyecto);
      projects[p] = (projects[p] || 0) + 1;
      
      const code = m.codigo_partida || 'S/N';
      const esp = code.substring(0, 4); // OE.1, OE.4, etc.
      specialties[esp] = (specialties[esp] || 0) + 1;
    });

    console.log("\nDesglose por Proyecto:");
    console.log(JSON.stringify(projects, null, 2));

    console.log("\nDesglose por Prefijo de Código (Especialidad):");
    console.log(JSON.stringify(specialties, null, 2));
    
    console.log("\nRegistros sin Partida ID (Orphans):", nullPartidaIds);
    
    if (data.length > 0) {
        console.log("\nMuestra del primer registro:", JSON.stringify(data[0], null, 2));
    }
  }
}
run();
