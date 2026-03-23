import { useState, useMemo, useEffect } from 'react';
import type { Partida, Metrado } from '../types';
import { getEspecialidadPorCodigo } from '../constants/especialidades';
import { usePersonalStore } from '../store/usePersonalStore';
import { useMetradosStore } from '../store/useMetradosStore';
import { useAuthStore } from '../store/useAuthStore';
import { calcularParcial, calcularTotal, isAcero as isAceroUtil } from '../utils/metradosCalculations';

export const isAcero = isAceroUtil;

export const getHvacCategory = (partida: Partida | null): string | null => {
    if (!partida) return null;
    const codigo = partida.codigo;

    // Partidas que requieren TODO (Ductos + Accesorios)
    if (['OE.5.6.16.5.11.5', 'OE.5.6.16.5.12.1'].includes(codigo)) {
        return 'TODO';
    }

    // Categoría TEE, REDUCCIONES, CODOS
    if (['OE.5.6.16.5.8', 'OE.5.6.16.5.11.2'].includes(codigo)) {
        return 'ACCESORIO';
    }

    // Categoría DUCTO
    if (['OE.5.6.16.5.7', 'OE.5.6.16.5.11.1'].includes(codigo)) {
        return 'DUCTO';
    }

    return null;
};

export const useMetradosForm = () => {
    const { context, setContext, customPartidas, addCustomPartida } = useMetradosStore();
    const { user } = useAuthStore();

    const getLocalDateString = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [fecha, setFecha] = useState<string>(getLocalDateString());

    const frente = context.frente;
    const bloque = context.bloque;
    const nivel = context.nivel;
    const cuadrilla = context.cuadrilla || 'VARIOS'; // Fallback legacy
    const obreros_ids = context.obreros_ids || [];

    const [partidaSeleccionada, setPartidaSeleccionada] = useState<Partida | null>(null);
    const [elemento, setElemento] = useState<string>('');
    const [detalle, setDetalle] = useState<string>('');
    const [hvacFactor, setHvacFactor] = useState<number | null>(null);
    const [hvacItemType, setHvacItemType] = useState<string | null>(null); // 'TEE', 'REDUCCION', 'CODO', 'DUCTO'
    const [diametro, setDiametro] = useState<string>('5/8"');

    const [cantidad, setCantidad] = useState<number | "">("");
    const [longitud, setLongitud] = useState<number | "">("");
    const [ancho, setAncho] = useState<number | "">("");
    const [altura, setAltura] = useState<number | "">("");
    const [nroVeces, setNroVeces] = useState<number | "">("");

    const isSpecialtyLocked = useMemo(() => {
        const role = user?.roles_apps?.metrados;
        if (!role) return false;
        const r = role.trim().toUpperCase();
        // Roles que NO bloquean (dan libertad total)
        const rolesLibres = ['TODAS', 'TODOS', 'ADMIN', 'SUPERVISOR', 'MASTER'];
        return !rolesLibres.includes(r);
    }, [user?.roles_apps?.metrados]);

    const initialSpecialty = isSpecialtyLocked ? user!.roles_apps!.metrados!.trim().toUpperCase() : 'TODAS';
    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState<string>(initialSpecialty);

    useEffect(() => {
        if (isSpecialtyLocked && user?.roles_apps?.metrados) {
            setEspecialidadSeleccionada(user.roles_apps.metrados.trim().toUpperCase());
        }
    }, [isSpecialtyLocked, user?.roles_apps?.metrados]);

    const parcial = useMemo(() => {
        return calcularParcial({
            partida: partidaSeleccionada,
            cantidad, longitud, ancho, altura,
            diametro, hvacFactor, hvacItemType
        });
    }, [cantidad, longitud, ancho, altura, partidaSeleccionada, diametro, hvacFactor, hvacItemType]);

    const hvacConfig = useMemo(() => {
        const category = getHvacCategory(partidaSeleccionada);
        if (!category) return null;

        return {
            category,
            isAccessory: category === 'ACCESORIO',
            isDuct: category === 'DUCTO'
        };
    }, [partidaSeleccionada]);

    const total = useMemo(() => {
        return calcularTotal(parcial, nroVeces);
    }, [parcial, nroVeces]);

    const limpiarCampos = () => {
        setElemento('');
        setDetalle('');
        setHvacFactor(null);
        setHvacItemType(null);
        setCantidad('');
        setLongitud('');
        setAncho('');
        setAltura('');
        setNroVeces('');
    };

    const procesarRegistro = (): Metrado | null => {
        if (!partidaSeleccionada) return null;

        const isCustom = partidaSeleccionada.modificacion === 'PC';
        
        // Obtener el personal desde el store usando los IDs seleccionados explícitamente
        const personalStoreData = usePersonalStore.getState().personal;
        const personalDeCuadrilla = personalStoreData.filter(p => (context.obreros_ids || []).includes(p.id));
        
        // Formatear obreros
        const obrero_nombre_concatenado = personalDeCuadrilla.length > 0 
            ? personalDeCuadrilla.map(p => `${p.nombre_formateado} (${p.categoria || 'Sin Cat'})`).join(' / ')
            : undefined;

        const isValidUUID = (id: string | undefined) => id && id.length === 36;

        const nuevoMetrado: Metrado = {
            id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : (Date.now() + Math.random().toString(36).substring(2)),
            fecha: fecha,
            frente,
            bloque,
            nivel,
            cuadrilla: context.cuadrilla || undefined,
            obreros_ids: context.obreros_ids || [],
            obrero_nombre: obrero_nombre_concatenado,
            partida_id: (!isCustom && isValidUUID(partidaSeleccionada.id)) ? partidaSeleccionada.id : undefined,
            custom_partida_id: (isCustom && isValidUUID(partidaSeleccionada.id)) ? partidaSeleccionada.id : undefined,
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
            fecha, frente, bloque, nivel, cuadrilla, obreros_ids,
            partidaSeleccionada, elemento, detalle, diametro,
            cantidad, longitud, ancho, altura, nroVeces,
            parcial, total, especialidadSeleccionada, isSpecialtyLocked,
            customPartidas, hvacFactor, hvacConfig, hvacItemType
        },
        actions: {
            setFecha,
            setFrente: (val: string) => setContext({ frente: val }),
            setBloque: (val: string) => setContext({ bloque: val }),
            setNivel: (val: string) => setContext({ nivel: val }),
            setCuadrilla: (val: string) => {
                setContext({ cuadrilla: val });
                const cuadrillaUpper = val.trim().toUpperCase();
                if (cuadrillaUpper && cuadrillaUpper !== 'VARIOS') {
                    const allPersonal = usePersonalStore.getState().personal;
                    const obrerosDeCuadrilla = allPersonal.filter(p => {
                        if (p.cuadrilla?.toUpperCase() !== cuadrillaUpper) return false;
                        
                        if (especialidadSeleccionada && especialidadSeleccionada !== 'TODAS') {
                            if (p.especialidad && p.especialidad.toUpperCase() === especialidadSeleccionada.toUpperCase()) {
                                return true;
                            }
                            // Solo traemos a los que coinciden estrictamente con la especialidad o no tienen,
                            // pero el usuario prefiere que respete la selección.
                            return false;
                        }
                        
                        return true;
                    });
                    if (obrerosDeCuadrilla.length > 0) {
                        setContext({ obreros_ids: obrerosDeCuadrilla.map(p => p.id) });
                    }
                }
            },
            setObrerosIds: (ids: string[]) => setContext({ obreros_ids: ids }),
            setPartidaSeleccionada, setElemento, setDetalle, setDiametro,
            setCantidad, setLongitud, setAncho, setAltura, setNroVeces,
            setEspecialidadSeleccionada, setHvacFactor,
            limpiarCampos, procesarRegistro,
            addCustomPartida,
            setHvacItemType
        }
    };
};
