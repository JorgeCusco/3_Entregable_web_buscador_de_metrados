import { useState, useMemo } from 'react';
import type { Partida, Metrado } from '../types';

const PESOS_ACERO: Record<string, number> = {
    "1/4": 0.254,
    "3/8": 0.560,
    "1/2": 0.994,
    "5/8": 1.550,
    "3/4": 2.240,
    "1": 3.970
};

export const isAcero = (partida: Partida | null): boolean => {
    if (!partida) return false;
    const isKg = partida.unidad === 'kg';
    const descNormalizada = partida.descripcion
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    return isKg && descNormalizada.includes('acero');
};

export const useMetradosForm = () => {
    const [fecha, setFecha] = useState<string>(new Date().toISOString().split('T')[0]);
    const [frente, setFrente] = useState<string>('');
    const [bloque, setBloque] = useState<string>('');
    const [nivel, setNivel] = useState<string>('');

    const [partidaSeleccionada, setPartidaSeleccionada] = useState<Partida | null>(null);
    const [elemento, setElemento] = useState<string>('');
    const [detalle, setDetalle] = useState<string>('');
    const [diametro, setDiametro] = useState<string>('5/8"');

    const [cantidad, setCantidad] = useState<number | "">("");
    const [longitud, setLongitud] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [altura, setAltura] = useState<number | "">("");
    const [nroVeces, setNroVeces] = useState<number | "">("");

    const parcial = useMemo(() => {
        const flagAcero = isAcero(partidaSeleccionada);

        if (flagAcero) {
            // RUTA 1: ACERO (Suma de longitudes * multiplicadores * factor)
            const c = typeof cantidad === 'number' ? cantidad : 0;
            const longitudRecta = typeof longitud === 'number' ? longitud : 0;
            const longitudGancho = typeof altura === 'number' ? altura : 0;

            const factorKg = PESOS_ACERO[diametro.replace('"', '')] || 0;
            const longitudTotal = longitudRecta + longitudGancho;

            if (c === 0 && longitudRecta === 0 && longitudGancho === 0) return 0;

            return c * longitudTotal * factorKg;
        } else {
            // RUTA 2: ESTÁNDAR
            if (cantidad === "" && longitud === "" && ancho === "" && altura === "") {
                return 0;
            }
            const c = cantidad !== "" ? cantidad : 1;
            const l = longitud !== "" ? longitud : 1;
            const a = ancho !== "" ? ancho : 1;
            const h = altura !== "" ? altura : 1;
            return c * l * a * h;
        }
    }, [cantidad, longitud, ancho, altura, partidaSeleccionada, diametro]);

    const total = useMemo(() => {
        const veces = nroVeces !== "" ? nroVeces : 1;
        return parcial * veces;
    }, [parcial, nroVeces]);

    const limpiarCampos = () => {
        setPartidaSeleccionada(null);
        // NO BORRAMOS EL ELEMENTO (para que persista y acelere el ingreso de datos)
        setDetalle('');
        setCantidad('');
        setLongitud('');
        setAncho('');
        setAltura('');
        setNroVeces('');
    };

    const procesarRegistro = (): Metrado | null => {
        if (!partidaSeleccionada) return null;

        const nuevoMetrado: Metrado = {
            id: Date.now().toString(),
            fecha, frente, bloque, nivel,
            codigo_partida: partidaSeleccionada.codigo,
            descripcion_partida: partidaSeleccionada.descripcion,
            elemento,
            detalle,
            diametro: isAcero(partidaSeleccionada) ? diametro : undefined,
            cantidad,
            longitud_area: longitud,
            ancho_empalme: ancho,
            altura_gancho: altura,
            parcial,
            nro_veces: nroVeces,
            total,
            unidad: partidaSeleccionada.unidad,
            jerarquia: partidaSeleccionada.jerarquia,
            autor_usuario: "UserWeb",
            created_at: Date.now(),
        };

        limpiarCampos();
        return nuevoMetrado;
    };

    return {
        state: {
            fecha, frente, bloque, nivel,
            partidaSeleccionada, elemento, detalle, diametro,
            cantidad, longitud, ancho, altura, nroVeces,
            parcial, total
        },
        actions: {
            setFecha, setFrente, setBloque, setNivel,
            setPartidaSeleccionada, setElemento, setDetalle, setDiametro,
            setCantidad, setLongitud, setAncho, setAltura, setNroVeces,
            limpiarCampos, procesarRegistro
        }
    };
};
