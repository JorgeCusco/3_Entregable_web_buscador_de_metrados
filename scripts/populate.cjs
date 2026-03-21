const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.production') });
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Faltan credenciales SUPABASE en entorno local.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function populate() {
  const jsonPath = 'C:/Users/Legion/.gemini/antigravity/brain/3afdea43-f148-4ff8-95c8-e454b9e24dde/tmp/full_login_data.json';
  if (!fs.existsSync(jsonPath)) {
      console.error('No JSON file found!');
      return;
  }
  const usersExcel = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  console.log(`Injecting ${usersExcel.length} users into ecosistema_usuarios...`);
  
  const payload = [];
  for (let u of usersExcel) {
      const dni = String(u.DNI_USERNAME || '').replace('.0','').trim();
      if (!dni || dni === 'nan') continue;
      payload.push({
          dni_username: dni,
          password: String(u.PASSWORD || '').trim(),
          nombre_completo: u.NOMBRE,
          correo: u.CORREO || null,
          area: u.AREA || null,
          cargo: u.CARGO || null,
          especialidad: u.ESPECIALIDAD || null,
          roles_apps: { metrados: u.ESPECIALIDAD }
      });
  }

  const { data, error } = await supabase.from('ecosistema_usuarios').upsert(payload, { onConflict: 'dni_username' });
  if (error) console.error(error);
  else console.log('Successfully injected users!');
}
populate();
