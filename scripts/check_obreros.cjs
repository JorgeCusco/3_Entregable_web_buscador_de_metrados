require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function main() {
    const { data: links, error: errorLinks } = await supabase.from('metrados_personal').select('*');
    if (errorLinks) console.error('Error links:', errorLinks);
    console.log('Metrados Personal links:', links?.length);
    
    if (links?.length > 0) {
        console.log('Sample link:', links[0]);
    }
}
main();
