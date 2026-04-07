import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.VITE_SUPABASE_URL as string, process.env.VITE_SUPABASE_ANON_KEY as string);

import { SPECIALTY_RULES } from './src/data/specialtyConfig';

const getEspecialidadPorCodigo = (codigo: string): string => {
    if (!codigo) return '';
    const cleanCode = codigo.trim().toUpperCase();
    
    let bestMatch = { id: '', length: 0 };

    for (const rule of SPECIALTY_RULES) {
        if (rule.id === 'TODAS') continue;
        for (const range of rule.ranges) {
            const rangeUpper = range.toUpperCase();
            if (cleanCode === rangeUpper || cleanCode.startsWith(rangeUpper + '.') || (rangeUpper.length <= 4 && cleanCode.startsWith(rangeUpper))) {
                if (rangeUpper.length > bestMatch.length) {
                    bestMatch = { id: rule.id, length: rangeUpper.length };
                }
            }
        }
    }
    return bestMatch.id;
};


async function run() {
  const { data, error } = await supabase.from('metrados').select('id, codigo_partida, especialidad, autor_usuario').ilike('autor_usuario', '%KATHERIN%');
  if (data) {
    const arqueologia = data.filter(m => {
       const direct = m.especialidad && m.especialidad.trim().toUpperCase() === 'ARQUEOLOGÍA';
       const byCode = getEspecialidadPorCodigo(m.codigo_partida) === 'ARQUEOLOGÍA';
       return direct || (!m.especialidad && byCode);
    });
    console.log('Metrados that resolve to ARQUEOLOGÍA:', arqueologia.length);
    if(arqueologia.length > 0) console.log(arqueologia.slice(0, 3));
    
    const seguridad = data.filter(m => {
       const direct = m.especialidad && m.especialidad.trim().toUpperCase() === 'SEGURIDAD';
       const byCode = getEspecialidadPorCodigo(m.codigo_partida) === 'SEGURIDAD';
       return direct || (!m.especialidad && byCode);
    });
    console.log('Metrados that resolve to SEGURIDAD:', seguridad.length);
    if(seguridad.length > 0) console.log(seguridad.slice(0, 3));
  }
}
run();
