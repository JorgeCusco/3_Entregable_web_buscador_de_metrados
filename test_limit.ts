import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

const supabase = createClient(process.env.VITE_SUPABASE_URL!, process.env.VITE_SUPABASE_ANON_KEY!);

async function run() {
  console.log("--- TEST DE CAPACIDAD DE FETCH ---");
  
  // Intentar traer 5000 (Sabiendo que hay 2810)
  const { data, error, count } = await supabase
    .from('metrados')
    .select('*', { count: 'exact' })
    .limit(5000);
    
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Total Count (exact):", count);
    console.log("Rows returned (data.length):", data?.length);
    if (data && data.length === 1000) {
      console.log("!!! ADVERTENCIA: Se detuvo exactamente en 1000. Hay un hard-limit en Supabase.");
    }
  }
}
run();
