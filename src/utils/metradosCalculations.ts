import { Partida } from '../types';

export const PESOS_ACERO: Record<string, number> = {
    "1/4": 0.254,
    "3/8": 0.560,
    "1/2": 0.994,
    "5/8": 1.550,
    "3/4": 2.240,
    "1": 3.970
};

export const isAcero = (partida: Partida | null | undefined): boolean => {
    if (!partida) return false;
    const isKg = (partida.unidad || '').toLowerCase() === 'kg';
    const descNormalizada = (partida.descripcion || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    return isKg && descNormalizada.includes('acero');
};

/**
 * Calcula el parcial basado en reglas de Acero, HVAC o Estándar
 */
export function calcularParcial(data: {
    partida: Partida | null | undefined;
    cantidad: number | "";
    longitud: number | "";
    ancho: number | "";
    altura: number | "";
    diametro?: string;
    hvacFactor?: number | null;
    hvacItemType?: string | null;
}): number {
    const { partida, cantidad, longitud, ancho, altura, diametro, hvacFactor, hvacItemType } = data;
    const flagAcero = isAcero(partida);

    if (flagAcero) {
        const c = typeof cantidad === 'number' ? cantidad : 0;
        const longitudRecta = typeof longitud === 'number' ? longitud : 0;
        const longitudGancho = typeof altura === 'number' ? altura : 0;
        const d = (diametro || '1/2"').replace('"', '');
        const factorKg = PESOS_ACERO[d] || 0;
        const longitudTotal = longitudRecta + longitudGancho;

        if (c === 0 && longitudRecta === 0 && longitudGancho === 0) return 0;
        return c * longitudTotal * factorKg;
    } else if (hvacFactor !== undefined && hvacFactor !== null) {
        const c = typeof cantidad === 'number' ? cantidad : 1;
        const l = (hvacItemType === 'CODO' || hvacItemType === 'DUCTO') && typeof longitud === 'number' ? longitud : 1;
        const a = typeof ancho === 'number' ? ancho : 1;
        const h = typeof altura === 'number' ? altura : 1;
        return c * l * a * h * hvacFactor;
    } else {
        if (cantidad === "" && longitud === "" && ancho === "" && altura === "") return 0;
        const c = cantidad !== "" ? Number(cantidad) : 1;
        const l = longitud !== "" ? Number(longitud) : 1;
        const a = ancho !== "" ? Number(ancho) : 1;
        const h = altura !== "" ? Number(altura) : 1;
        return c * l * a * h;
    }
}

/**
 * Calcula el total a partir del parcial y número de veces
 */
export function calcularTotal(parcial: number, nroVeces: number | ""): number {
    const v = nroVeces !== "" ? Number(nroVeces) : 1;
    return parcial * v;
}
