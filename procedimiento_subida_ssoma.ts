import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import * as XLSX from 'xlsx';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

const FILE_PATH = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/SSOMA_SUBIR.xlsx';
const SHEET_NAME = 'Metrado';

async function upload() {
  const workbook = XLSX.readFile(FILE_PATH);
  const sheet = workbook.Sheets[SHEET_NAME];
  const rows = XLSX.utils.sheet_to_json(sheet) as any[];

  console.log(`Analizando ${rows.length} registros de SSOMA...`);

  const metradosToInsert = rows.map((r, index) => {
    // 1. Limpieza de Partida y Descripción (V18: Caso "OE.x.x - Descripcion")
    let rawPartida = String(r['PARTIDA'] || r['OE.1-OBRAS PROVISIONALES'] || '').trim();
    let codigo = rawPartida;
    let descripcion = String(r['DESCRIPCIÓN'] || r[' DESCRIPCIÓN '] || '').trim();

    // Si el código trae la descripción pegada (ej. "OE.1.1-Limpieza")
    if (codigo.includes('-')) {
        const parts = codigo.split('-');
        codigo = parts[0].trim();
        if (!descripcion) descripcion = parts.slice(1).join('-').trim();
    }

    // 2. Mapeo a Esquema Supabase
    return {
      fecha: r['FECHA'] || new Date().toISOString().split('T')[0],
      frente: r['FRENTE'] || 'F1',
      bloque: r['BLOQUE'] || 'B1',
      nivel: r['NIVEL (PISO)'] || 'N1',
      cuadrilla: r['CUADRILLA'] || 'SSOMA_TEAM',
      codigo_partida: codigo,
      descripcion_partida: descripcion,
      unidad: r['UNIDAD'] || 'und',
      cantidad: parseFloat(r['CANTIDAD'] || 0),
      longitud_area: parseFloat(r['LONGITUD/AREA'] || 0),
      ancho_empalme: parseFloat(r['ANCHO/EMPAME'] || 0),
      altura_gancho: parseFloat(r['ALTURA/GANCHO'] || 0),
      nro_veces: parseFloat(r['NRO VECES'] || 1),
      parcial: parseFloat(r['PARCIAL'] || 0),
      total: parseFloat(r['TOTAL'] || 0),
      proyecto: 'hospital', // Deducido por defecto
      autor_usuario: 'ADMIN_SSOMA', // Autor genérico para carga masiva
      created_at: new Date().toISOString()
    };
  });

  console.log("Muestra de Mapeo (Fila 1):", metradosToInsert[0]);

  // Insertar en Supabase (Chunked para seguridad)
  /*
  const { data, error } = await supabase.from('metrados').insert(metradosToInsert);
  if (error) console.error("Error al subir:", error);
  else console.log("¡Carga masiva SSOMA completada con éxito!");
  */
}
upload();
