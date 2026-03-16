import { useState, useMemo } from 'react';
import type { Partida, Metrado } from '../types';
import { getEspecialidadPorCodigo } from '../constants/especialidades';
import { useMetradosStore } from '../store/useMetradosStore';

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
    const { context, setContext, customPartidas, addCustomPartida } = useMetradosStore();

    const getLocalDateString = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [fecha, setFecha] = useState<string>(getLocalDateString());

    // Estos campos ahora son proxies al contexto del store
    const frente = context.frente;
    const bloque = context.bloque;
    const nivel = context.nivel;
    const cuadrilla = context.cuadrilla;

    const [partidaSeleccionada, setPartidaSeleccionada] = useState<Partida | null>(null);
    const [elemento, setElemento] = useState<string>('');
    const [detalle, setDetalle] = useState<string>('');
    const [diametro, setDiametro] = useState<string>('5/8"');

    const [cantidad, setCantidad] = useState<number | "">("");
    const [longitud, setLongitud] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [altura, setAltura] = useState<number | "">("");
    const [nroVeces, setNroVeces] = useState<number | "">("");

    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState<string>('TODAS');

    const parcial = useMemo(() => {
        const flagAcero = isAcero(partidaSeleccionada);

        if (flagAcero) {
            const c = typeof cantidad === 'number' ? cantidad : 0;
            const longitudRecta = typeof longitud === 'number' ? longitud : 0;
            const longitudGancho = typeof altura === 'number' ? altura : 0;

            const factorKg = PESOS_ACERO[diametro.replace('"', '')] || 0;
            const longitudTotal = longitudRecta + longitudGancho;

            if (c === 0 && longitudRecta === 0 && longitudGancho === 0) return 0;
            return c * longitudTotal * factorKg;
        } else {
            if (cantidad === "" && longitud === "" && ancho === "" && altura === "") return 0;
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
            fecha,
            frente,
            bloque,
            nivel,
            cuadrilla,
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
            nivelJerarquia: partidaSeleccionada.nivel_jerarquia,
            modificacion: partidaSeleccionada.modificacion,
            especialidad: getEspecialidadPorCodigo(partidaSeleccionada.codigo),
            autor_usuario: "UserWeb",
            created_at: Date.now(),
        };

        limpiarCampos();
        return nuevoMetrado;
    };

    return {
        state: {
            fecha, frente, bloque, nivel, cuadrilla,
            partidaSeleccionada, elemento, detalle, diametro,
            cantidad, longitud, ancho, altura, nroVeces,
            parcial, total, especialidadSeleccionada,
            customPartidas
        },
        actions: {
            setFecha,
            setFrente: (val: string) => setContext({ frente: val }),
            setBloque: (val: string) => setContext({ bloque: val }),
            setNivel: (val: string) => setContext({ nivel: val }),
            setCuadrilla: (val: string) => setContext({ cuadrilla: val }),
            setPartidaSeleccionada, setElemento, setDetalle, setDiametro,
            setCantidad, setLongitud, setAncho, setAltura, setNroVeces,
            setEspecialidadSeleccionada,
            limpiarCampos, procesarRegistro,
            addCustomPartida
        }
    };
};
