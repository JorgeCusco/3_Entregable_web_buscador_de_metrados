import { isMetradoOfSpecialtyImproved } from './src/utils/filteringLogic';
import type { Metrado } from './src/types';

const metradoMock: Metrado = {
    id: "123",
    codigo_partida: "OE.1.1.1.21",
    especialidad: "OBRAS PROVISIONALES",
    descripcion_partida: "Embalado de materiales",
    unidad: "kg",
    frente: "F2",
    bloque: "IV",
    nivel: "ZZ",
    cuadrilla: "CDLLA",
    elemento: "Agrupador",
    detalle: "caja octogonal",
    cantidad: 300,
    longitud_area: 0.25,
    ancho_empalme: null,
    altura_gancho: null,
    parcial: 75.00,
    nro_veces: 1,
    total: 75.00,
    fecha: "2026-03-23",
    proyecto: "hospital",
    autor_usuario: "KATHERIN",
    created_at: "2026-03-23T00:00:00Z",
    tipo_metrado: "ESTANDAR"
};

console.log("TESTING isMetradoOfSpecialtyImproved");
console.log("Metrado especialidad:", metradoMock.especialidad);

const target1 = "SEGURIDAD";
const result1 = isMetradoOfSpecialtyImproved(metradoMock, target1, [], undefined, true);
console.log(`With target '${target1}':`, result1);

const target2 = "ARQUEOLOGÍA";
const result2 = isMetradoOfSpecialtyImproved(metradoMock, target2, [], undefined, true);
console.log(`With target '${target2}':`, result2);
