import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  console.log("--- BÚSQUEDA DE AUTORES ---");
  const { data: authors } = await supabase.from('metrados').select('autor_usuario');
  const authorCounts: Record<string, number> = {};
  if (authors) {
    authors.forEach(a => {
      const name = String(a.autor_usuario);
      authorCounts[name] = (authorCounts[name] || 0) + 1;
    });
  }
  console.log("Distribución de Autores:");
  console.log(JSON.stringify(authorCounts, null, 2));

  console.log("\n--- BÚSQUEDA DE PROYECTOS PARA LUPITA ---");
  const targetAuthor = "LUPITA ENCARNACION SALAZ"; // Based on screenshot
  const { data: lupitaRows } = await supabase.from('metrados').select('proyecto, codigo_partida, partida_id').eq('autor_usuario', targetAuthor);
  
  if (lupitaRows) {
    const projCounts: Record<string, number> = {};
    const codePrefixes: Record<string, number> = {};
    lupitaRows.forEach(row => {
      const p = String(row.proyecto);
      projCounts[p] = (projCounts[p] || 0) + 1;
      
      const code = String(row.codigo_partida).substring(0, 4);
      codePrefixes[code] = (codePrefixes[code] || 0) + 1;
    });
    console.log("Proyectos de Lupita:");
    console.log(JSON.stringify(projCounts, null, 2));
    console.log("Prefijos de Código de Lupita:");
    console.log(JSON.stringify(codePrefixes, null, 2));
  }
}
run();
