require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function main() {
    console.log('Fetching metrados with personal...');
    const { data: metrados, error } = await supabase
        .from('metrados')
        .select('id, codigo_partida, metrados_personal(personal(*))')
        .order('created_at', { ascending: false })
        .limit(3);
        
    if (error) {
        console.error('Error:', error);
        return;
    }
    
    console.log(JSON.stringify(metrados, null, 2));
}
main();
