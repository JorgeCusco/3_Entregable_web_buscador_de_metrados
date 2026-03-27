import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error("Faltan variables de entorno")
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function audit() {
    console.log("Auditoría de Datos Metrados...")
    const { data, error } = await supabase
        .from('metrados')
        .select('autor_usuario, especialidad, proyecto, codigo_partida')
        .limit(20)

    if (error) {
        console.error("Error:", error)
        return
    }

    console.log("Primeros 20 registros:")
    data.forEach((row, i) => {
        console.log(`[${i}] Autor: "${row.autor_usuario}" | Especialidad: "${row.especialidad}" | Proyecto: "${row.proyecto}" | Código: "${row.codigo_partida}"`)
    })

    // Contar totales para Ruben
    const { count, error: countErr } = await supabase
        .from('metrados')
        .select('*', { count: 'exact', head: true })
        .ilike('autor_usuario', '%RUBEN DARIO%')

    console.log(`\nTotal registros atribuidos a RUBEN DARIO: ${count}`)
}

audit()
