import { useState, useMemo } from 'react';
import { Partida, Metrado } from '../types';

export const useMetradosForm = () => {
    const [fecha, setFecha] = useState<string>(new Date().toISOString().split('T')[0]);
    const [frente, setFrente] = useState<string>('');
    const [bloque, setBloque] = useState<string>('');
    const [nivel, setNivel] = useState<string>('');

    const [partidaSeleccionada, setPartidaSeleccionada] = useState<Partida | null>(null);
    const [elemento, setElemento] = useState<string>('');
    const [detalle, setDetalle] = useState<string>('');

    const [cantidad, setCantidad] = useState<number | "">("");
    const [longitud, setLongitud] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [altura, setAltura] = useState<number | "">("");
    const [nroVeces, setNroVeces] = useState<number | "">("");

    const parcial = useMemo(() => {
        // Si todos están vacíos, parcial es 0
        if (cantidad === "" && longitud === "" && ancho === "" && altura === "") {
            return 0;
        }
        const c = cantidad !== "" ? cantidad : 1;
        const l = longitud !== "" ? longitud : 1;
        const a = ancho !== "" ? ancho : 1;
        const h = altura !== "" ? altura : 1;
        return c * l * a * h;
    }, [cantidad, longitud, ancho, altura]);

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
            partidaSeleccionada, elemento, detalle,
            cantidad, longitud, ancho, altura, nroVeces,
            parcial, total
        },
        actions: {
            setFecha, setFrente, setBloque, setNivel,
            setPartidaSeleccionada, setElemento, setDetalle,
            setCantidad, setLongitud, setAncho, setAltura, setNroVeces,
            limpiarCampos, procesarRegistro
        }
    };
};
