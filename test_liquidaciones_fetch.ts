import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkMetrados() {
    console.log("Fetching metrados_liquidaciones...");
    const { data, error } = await supabase.from('metrados_liquidaciones').select('*').limit(5);
    if (error) {
        console.error("Supabase Error:", error);
    } else {
        console.log(`Success! Retrieved ${data.length} records.`);
        console.log(data);
    }
}

checkMetrados();
