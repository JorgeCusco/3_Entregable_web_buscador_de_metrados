import { supabase } from '../src/lib/supabase';

async function check() {
    const { data } = await supabase.from('metrados').select('id').maybeSingle();
    if (data) {
        console.log(data.id);
    }
}
