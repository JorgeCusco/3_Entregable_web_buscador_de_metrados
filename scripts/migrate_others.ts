import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { readFileSync } from 'fs';

dotenv.config({ path: resolve(process.cwd(), '.env.local') });

import { HVAC_DATA } from '../src/data/hvacData';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY; 

if (!supabaseUrl || !supabaseKey) {
  console.error("Faltan variables VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateOthers() {
  console.log('--- Iniciando Migración de HVAC y Personal ---');
  
  // 1. Migrar HVAC
  console.log('1. Preparando datos de HVAC...');
  const hvacRecords: any[] = [];
  
  for (const [categoria, items] of Object.entries(HVAC_DATA)) {
    items.forEach((item: any) => {
      // Remover "s" final de la categoría si lo usan en la app, 
      // pero usaremos MAYUSCULAS 'TEE', 'REDUCCION', 'CODO', 'DUCTO' como indica getHvacCategory
      let cat = categoria.toUpperCase();
      if (cat === 'REDUCCIONES') cat = 'REDUCCION';
      if (cat === 'CODOS') cat = 'CODO';
      if (cat === 'DUCTOS') cat = 'DUCTO';
      
      hvacRecords.push({
        categoria: cat,
        label: item.label,
        factor: item.factor
      });
    });
  }

  console.log(` -> Insertando ${hvacRecords.length} registros de HVAC...`);
  const { error: hvacError } = await supabase.from('catalogo_hvac').insert(hvacRecords);
  if (hvacError) {
    console.error('Error insertando HVAC:', hvacError);
  } else {
    console.log(' ✅ HVAC Migrado con éxito');
  }

  // 2. Migrar Personal
  console.log('2. Leyendo datos de Personal...');
  try {
    const rawData = readFileSync(resolve(process.cwd(), 'src/data/personal.json'), 'utf-8');
    const personalArray = JSON.parse(rawData);
    
    // Mapear los nombres de properties por seguridad, excluyendo el ID original si no es UUID
    // O si ya son UUID, lo mantenemos (src/data/personal.json tiene IDs V4).
    const personalRecords = personalArray.map((p: any) => ({
      id: p.id,
      dni: p.dni,
      nombre_original: p.nombre_original,
      nombre_formateado: p.nombre_formateado,
      especialidad: p.especialidad || null,
      cuadrilla: p.cuadrilla || null,
      categoria: p.categoria || null,
      sexo: p.sexo || null,
      telefono: p.telefono || null,
      condicion: p.condicion || null,
      oficio: p.oficio || null,
      fecha_ingreso: p.fecha_ingreso || null
    }));

    console.log(` -> Insertando ${personalRecords.length} registros de Personal en lotes de 200...`);
    const BATCH_SIZE = 200;
    for (let i = 0; i < personalRecords.length; i += BATCH_SIZE) {
      const batch = personalRecords.slice(i, i + BATCH_SIZE);
      const { error: persError } = await supabase.from('personal').insert(batch);
      
      if (persError) {
        console.error(`Error insertando Personal lote [${i}-${i+batch.length}]:`, persError);
        return;
      }
    }
    console.log(' ✅ Personal Migrado con éxito');

  } catch (err) {
    console.error('Error al leer o insertar personal.json:', err);
  }

  console.log('🎉 Migración Parte 4 Terminada');
}

migrateOthers();
