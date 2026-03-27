import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

import { mockPartidas } from '../src/data/mockDB_1';
import { mockPartidasContingencia } from '../src/data/mockDB_contingencia';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; 

if (!supabaseUrl || !supabaseKey) {
  console.error("Faltan variables VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log('--- Iniciando Migración de Catálogos ---');
  
  // 1. Obtener UUIDs de los Proyectos
  console.log('1. Verificando proyectos (HOSP y CONT)...');
  const { data: proyectos, error: proyError } = await supabase.from('proyectos').select('id, codigo');
  if (proyError || !proyectos) {
    console.error('Error al obtener proyectos:', proyError);
    return;
  }
  
  const idHosp = proyectos.find(p => p.codigo === 'HOSP')?.id;
  const idCont = proyectos.find(p => p.codigo === 'CONT')?.id;
  
  if (!idHosp || !idCont) {
    console.error('Falta HOSPITAL (HOSP) o CONTINGENCIA (CONT) en tabla proyectos.');
    return;
  }

  // 2. Preparar Registros
  console.log(`2. Generando UUIDs y resolviendo dependencias jerárquicas...`);
  const registrosHospital = prepareRecords(mockPartidas, idHosp);
  const registrosContingencia = prepareRecords(mockPartidasContingencia, idCont);
  const todos = [...registrosHospital, ...registrosContingencia];

  // 3. Insertar por Niveles para no violar Foreign Keys (Padres primero, luego Hijos)
  const maxNivel = Math.max(...todos.map(t => t.nivel_jerarquia || 1));
  console.log(`TOTAL a insertar: ${todos.length} registros estructurados en ${maxNivel} niveles de jerarquía.`);
  
  for (let nivel = 1; nivel <= maxNivel; nivel++) {
    const recordsNivel = todos.filter(t => t.nivel_jerarquia === nivel);
    if (recordsNivel.length === 0) continue;
    
    console.log(` -> Insertando Nivel ${nivel} (${recordsNivel.length} registros)...`);
    
    const BATCH_SIZE = 1000;
    for (let i = 0; i < recordsNivel.length; i += BATCH_SIZE) {
      const batch = recordsNivel.slice(i, i + BATCH_SIZE);
      const { error: insertError } = await supabase.from('catalogo_partidas').insert(batch);
      
      if (insertError) {
        console.error(`Error insertando Nivel ${nivel} [${i} - ${i + batch.length}]:`, insertError);
        return;
      }
    }
  }

  console.log('✅ MIGACIÓN DEL CATÁLOGO DE PARTIDAS COMPLETADA CON ÉXITO');
}

function prepareRecords(mockArray: any[], proyectoId: string) {
  const codeToIdMap = new Map<string, string>();
  
  // Paso 1: Generar IDs
  const dbRecords = mockArray.map(p => {
    const recordId = uuidv4();
    codeToIdMap.set(p.codigo, recordId);

    return {
      id: recordId,
      codigo: p.codigo,
      descripcion: p.descripcion || '',
      unidad: p.unidad || '',
      jerarquia: p.jerarquia || [],
      nivel_jerarquia: p.nivel_jerarquia || 1, // Por si acaso algún nivel viene vacío
      is_title: p.es_titulo || false,
      proyecto_id: proyectoId,
      parent_id: null as null | string,
      modificacion: p.modificacion || 'SM', // Incluye el campo modificacion (MM5, ET, etc)
      tipo_metrado: p.tipo_metrado || 'ESTANDAR' // Incluye tipo_metrado si existe
    };
  });

  // Paso 2: Vincular parents por su código
  dbRecords.forEach(r => {
    if (r.nivel_jerarquia > 1) {
      // Intentar derivar el código del padre: ej OE.1.1.2 -> OE.1.1
      let parentCode = '';
      if (r.jerarquia && r.jerarquia.length > 1) {
         parentCode = r.jerarquia[r.jerarquia.length - 2];
      } else {
         parentCode = r.codigo.substring(0, r.codigo.lastIndexOf('.'));
      }
      
      if (codeToIdMap.has(parentCode)) {
        r.parent_id = codeToIdMap.get(parentCode)!;
      }
    }
  });

  return dbRecords;
}

migrate();
