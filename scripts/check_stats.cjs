require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function main() {
    const { data: metrados, error } = await supabase.from('metrados').select('id, cuadrilla, metrados_personal(personal_id)');
    if (error) { console.error(error); return; }
    
    let withLinks = 0;
    let withoutLinks = 0;
    
    for (const m of metrados) {
        if (m.metrados_personal && m.metrados_personal.length > 0) withLinks++;
        else withoutLinks++;
    }
    
    console.log(`Total metrados: ${metrados.length}`);
    console.log(`Con obreros_ids: ${withLinks}`);
    console.log(`Sin obreros_ids: ${withoutLinks}`);
}
main();
