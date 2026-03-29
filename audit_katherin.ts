
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { normalizeAuthorName, getEspecialidadPorCodigo } from './src/utils/filteringLogic'; // Usaré los helpers locales
import { normalizeAuthorName as normA, normalizeSpecialty as normS } from './src/utils/normalization';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function audit() {
  console.log("🔍 Auditando metrados de 'KATHERIN'...");
  
  const { data: metrados, error } = await supabase
    .from('metrados')
    .select('*');

  if (error) {
    console.error("Error fetching metrados:", error);
    return;
  }

  // 1. Buscar metrados de Katherin (variaciones)
  const katherinMetrados = metrados.filter(m => 
    normA(m.autor_usuario || '').includes('KATHERIN')
  );

  console.log(`📊 Encontrados ${katherinMetrados.length} registros para KATHERIN.`);

  const specialtyCounts: Record<string, number> = {};
  const projectCounts: Record<string, number> = {};
  const orphanCount = katherinMetrados.filter(m => !m.partida_id && !m.custom_partida_id).length;

  katherinMetrados.forEach(m => {
    const spec = m.especialidad || 'NULL';
    specialtyCounts[spec] = (specialtyCounts[spec] || 0) + 1;
    
    const proj = m.proyecto || 'NULL';
    projectCounts[proj] = (projectCounts[proj] || 0) + 1;
  });

  console.log("\n📈 Especialidades en DB para Katherin:", specialtyCounts);
  console.log("📁 Proyectos en DB para Katherin:", projectCounts);
  console.log(`❓ Registros Huérfanos (sin partida_id): ${orphanCount}`);

  // 2. Analizar registros "SIN_CODIGO"
  const sinCodigo = metrados.filter(m => !m.codigo_partida || m.codigo_partida.trim() === '');
  console.log(`\n🚫 Registros SIN CÓDIGO de partida: ${sinCodigo.length}`);
  if (sinCodigo.length > 0) {
      console.log("Muestra de autores sin código:", [...new Set(sinCodigo.map(m => m.autor_usuario))].slice(0, 5));
  }
}

audit();
