import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Cargar variables de entorno (desde la raíz o la ruta correcta)
dotenv.config({ path: path.resolve(__dirname, '../.env.production') });
dotenv.config({ path: path.resolve(__dirname, '../.env') }); // Fallback

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Faltan credenciales VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en el .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function populateUsers() {
  const jsonPath = 'C:/Users/Legion/.gemini/antigravity/brain/3afdea43-f148-4ff8-95c8-e454b9e24dde/tmp/full_login_data.json';
  
  if (!fs.existsSync(jsonPath)) {
    console.error('Archivo JSON de usuarios no encontrado en:', jsonPath);
    return;
  }

  const rawData = fs.readFileSync(jsonPath, 'utf-8');
  const usersExcel = JSON.parse(rawData);

  console.log(`Iniciando migración de ${usersExcel.length} usuarios al Hub Central...`);

  // Transformar al esquema de la base de datos
  const payload = usersExcel.map((u: any) => ({
    dni_username: String(u.DNI_USERNAME || '').replace('.0', '').trim(),
    password: String(u.PASSWORD || '').trim(),
    nombre_completo: u.NOMBRE,
    correo: u.CORREO || null,
    area: u.AREA,
    cargo: u.CARGO,
    especialidad: u.ESPECIALIDAD,
    // JSONB: Registramos la especialidad como permiso para la app "metrados"
    roles_apps: { metrados: u.ESPECIALIDAD } 
  })).filter((u: any) => u.dni_username && u.dni_username !== 'nan');

  const { data, error } = await supabase
    .from('ecosistema_usuarios')
    .upsert(payload, { onConflict: 'dni_username' });

  if (error) {
    console.error('Error al insertar usuarios:', error);
  } else {
    console.log('¡Éxito! Migración masiva completada correctamente en la tabla ecosistema_usuarios.');
  }
}

populateUsers();
