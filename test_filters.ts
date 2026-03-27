import { getEspecialidadPorCodigo } from './src/constants/especialidades'

const mockCatalog = [
    { id: 'p1', codigo: 'OE.1.1', especialidad: 'OBRAS PROVISIONALES' },
    { id: 'p2', codigo: 'OE.1.2', especialidad: 'SEGURIDAD' }
]

function isMetradoOfSpecialty(m: any, specialtyId: string, catalogo: any[]) {
    if (specialtyId === 'TODAS') return true;
    if (m.especialidad && m.especialidad !== 'TODAS' && m.especialidad !== 'GENERAL') {
        return m.especialidad.trim().toUpperCase() === specialtyId.trim().toUpperCase();
    }
    const linkedPartida = catalogo.find(p => p.id === (m.partida_id || m.custom_partida_id));
    if (linkedPartida && linkedPartida.especialidad) {
        return linkedPartida.especialidad.trim().toUpperCase() === specialtyId.trim().toUpperCase();
    }
    return getEspecialidadPorCodigo(m.codigo_partida).trim().toUpperCase() === specialtyId.trim().toUpperCase();
}

const metrados = [
    { id: 'm1', autor_usuario: 'KATHERIN', codigo_partida: 'OE.1.1.1', especialidad: null },
    { id: 'm2', autor_usuario: 'RUBEN', codigo_partida: 'OE.1.2.1', especialidad: 'SEGURIDAD' },
    { id: 'm3', autor_usuario: 'RUBEN', codigo_partida: 'OE.1.2.2', especialidad: null }
]

console.log("Test 1: Filter SEGURIDAD")
const filtered = metrados.filter(m => isMetradoOfSpecialty(m, 'SEGURIDAD', mockCatalog))
console.log("Result:", filtered.map(f => `${f.id} (${f.autor_usuario})`))

console.log("\nTest 2: Filter RUBEN + SEGURIDAD")
const final = filtered.filter(f => f.autor_usuario.toUpperCase().includes('RUBEN'))
console.log("Result:", final.map(f => `${f.id} (${f.autor_usuario})`))
