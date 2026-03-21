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
  const jsonPath = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/scripts/script_login_data.json';
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

  let successCount = 0;
  for (const user of payload) {
      const { error } = await supabase.from('ecosistema_usuarios').upsert(user, { onConflict: 'dni_username' });
      if (error) console.error(`Error inyectando DNI ${user.dni_username}:`, error.message);
      else successCount++;
  }
  console.log(`Successfully injected ${successCount} users!`);
}
populate();
