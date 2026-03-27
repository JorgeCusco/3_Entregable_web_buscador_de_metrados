export const ESPECIALIDADES_PARTIDA = [
    { nombre: 'TODAS', prefijos: ['OE'] },
    { nombre: 'OBRAS PROVISIONALES', prefijos: ['OE.1', 'OE.1.1'] },
    { nombre: 'SEGURIDAD', prefijos: ['OE.1.2'] },
    { nombre: 'ARQUEOLOGÍA', prefijos: ['OE.1.3', 'OE.1.4', 'OE.1.5', 'OE.1.6'] },
    { nombre: 'ESTRUCTURAS', prefijos: ['OE.2'] },
    { nombre: 'ARQUITECTURA', prefijos: ['OE.3'] },
    { nombre: 'INSTALACIONES SANITARIAS', prefijos: ['OE.4'] },
    { nombre: 'ELÉCTRICAS', prefijos: ['OE.5', 'OE.5.1', 'OE.5.2', 'OE.5.3', 'OE.5.4', 'OE.5.5'] },
    { nombre: 'ELECTROMECÁNICAS', prefijos: ['OE.5.6', 'OE.5.7', 'OE.7'] },
    { nombre: 'COMUNICACIONES', prefijos: ['OE.6'] },
    { nombre: 'PLAN DE MANEJO AMBIENTAL', prefijos: ['OE.8'] },
    { nombre: 'EQUIPAMIENTO BIOMÉDICO', prefijos: ['OE.9'] }
];

export const getEspecialidadPorCodigo = (codigo: string): string => {
    if (!codigo) return 'GENERAL';

    // Normalizar el código para asegurar coincidencia
    const cod = codigo.trim().toUpperCase();

    let bestMatch = { nombre: 'GENERAL', length: 0 };

    for (const esp of ESPECIALIDADES_PARTIDA) {
        if (esp.nombre === 'TODAS') continue;
        for (const prefijo of esp.prefijos) {
            // Un match es válido si el código es IDÉNTICO al prefijo, 
            // o si el código COMIENZA con el prefijo seguido de un punto (hijo).
            // O si el prefijo es muy corto (menos de 4 char) y coincide al inicio.
            if (cod === prefijo || cod.startsWith(prefijo + '.') || (prefijo.length <= 4 && cod.startsWith(prefijo))) {
                if (prefijo.length > bestMatch.length) {
                    bestMatch = { nombre: esp.nombre, length: prefijo.length };
                }
            }
        }
    }

    return bestMatch.nombre;
};

export const getOficiosPorEspecialidad = (especialidad: string): string[] => {
    switch (especialidad) {
        case 'ESTRUCTURAS':
            return ['CONCRETO', 'ACERO', 'FIERRERO', 'ALBAÑIL', 'SOLDADURA'];
        case 'ARQUITECTURA':
            return ['DRYWALL', 'CARPINTERO', 'ENCHAPADO', 'TARRAJEO', 'PINTURA', 'ASENTADO', 'ALBAÑIL'];
        case 'INSTALACIONES SANITARIAS':
            return ['GASFITERIA', 'SANITARIO'];
        case 'ELÉCTRICAS':
        case 'ELECTROMECÁNICAS':
            return ['ELECTROMECÁNICO', 'SOLDADURA'];
        case 'SEGURIDAD':
            return ['VIGIA', 'SSOMA', 'GUARDIAN'];
        case 'PLAN DE MANEJO AMBIENTAL':
            return ['MEDIO AMBIENTE', 'SSOMA', 'VOLANTE DE RIEGO'];
        case 'OBRAS PROVISIONALES':
            return ['GUARDIAN', 'PEON'];
        default:
            return []; // Retorna vacío si es TODAS u otra cosa para aplicar lógica en UI
    }
};
