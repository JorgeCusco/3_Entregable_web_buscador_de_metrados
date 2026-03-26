import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Metrado, Partida } from '../types';
import { supabase } from '../lib/supabase';
import { usePersonalStore } from './usePersonalStore';

interface MetradosContext {
    frente: string;
    bloque: string;
    nivel: string;
    cuadrilla: string;
    obreros_ids?: string[];
    obrero_nombre?: string;
    proyecto: 'hospital' | 'contingencia';
}

interface MetradosState {
    // A) Contexto actual
    context: MetradosContext;

    // B) Array temporal de metrados
    metrados: Metrado[];

    // C) Partidas personalizadas
    customPartidas: Partida[];

    // Acciones
    setContext: (context: Partial<MetradosContext>) => void;
    addMetrado: (metrado: Omit<Metrado, 'id' | 'created_at'>) => Promise<{success: boolean, error?: string}>;
    fetchMetrados: () => Promise<void>;
    updateMetrado: (id: string, payload: Partial<Metrado>) => Promise<void>;
    deleteMetrado: (id: string) => Promise<void>;
    updateGroup: (codigo_partida: string, old_elemento: string, new_elemento: string) => Promise<void>;
    addCustomPartida: (partida: Partida) => Promise<Partida | null>;
    fetchCustomPartidas: () => Promise<void>;
    clearAll: () => void;
}

export const useMetradosStore = create<MetradosState>()(
    persist(
        (set) => ({
            context: {
                frente: '',
                bloque: '',
                nivel: '',
                cuadrilla: '',
                obreros_ids: [],
                obrero_nombre: '',
                proyecto: 'hospital'
            },
            metrados: [],
            customPartidas: [],

            setContext: (newContext) =>
                set((state) => ({
                    context: { ...state.context, ...newContext }
                })),

            addMetrado: async (metrado) => {
                try {
                    // Si el metrado viene sin ID porque es del JSON genérico, buscar su UUID en la nube
                    // RESOLUCIÓN DE IDs (Priorizar los pasados por el UI, si no buscar por código)
                    let resolvedPartidaId = metrado.partida_id;
                    let resolvedCustomId = metrado.custom_partida_id;

                    // Si el metrado viene sin ID porque es del JSON genérico o mock, intentar buscarlo en la nube
                    if (!resolvedPartidaId && !resolvedCustomId) {
                        const isCustom = metrado.modificacion === 'PC'; 
                        if (isCustom) {
                            const { data: catData } = await (supabase.from('partidas_personalizadas') as any).select('id').eq('codigo', metrado.codigo_partida).maybeSingle();
                            if (catData) resolvedCustomId = catData.id;
                        } else {
                            // Fetch de catálogo maestro usando el código y el proyecto
                            const projCode = (metrado.proyecto || 'hospital').toUpperCase().substring(0, 4);
                            const { data: proj } = await (supabase.from('proyectos') as any).select('id').eq('codigo', projCode).maybeSingle();
                            if (proj) {
                                const { data: catData } = await (supabase.from('catalogo_partidas') as any).select('id')
                                    .eq('codigo', metrado.codigo_partida).eq('proyecto_id', proj.id).maybeSingle();
                                if (catData) resolvedPartidaId = catData.id;
                            }
                        }
                    }

                    // 1. Insertamos el Metrado (Petición Consolidada)
                    const { data, error } = await (supabase
                        .from('metrados') as any)
                        .insert([{
                            fecha: metrado.fecha,
                            frente: metrado.frente,
                            bloque: metrado.bloque,
                            nivel: metrado.nivel,
                            cuadrilla: metrado.cuadrilla,
                            partida_id: resolvedPartidaId || null,
                            custom_partida_id: resolvedCustomId || null,
                            // Datos denormalizados para historial robusto (Requieren correr SQL 0004)
                            codigo_partida: metrado.codigo_partida,
                            descripcion_partida: metrado.descripcion_partida,
                            unidad: metrado.unidad,
                            proyecto: metrado.proyecto,
                            elemento: metrado.elemento,
                            detalle: metrado.detalle,
                            diametro: metrado.diametro,
                            cantidad: typeof metrado.cantidad === 'number' ? metrado.cantidad : null,
                            longitud_area: typeof metrado.longitud_area === 'number' ? metrado.longitud_area : null,
                            ancho_empalme: typeof metrado.ancho_empalme === 'number' ? metrado.ancho_empalme : null,
                            altura_gancho: typeof metrado.altura_gancho === 'number' ? metrado.altura_gancho : null,
                            parcial: metrado.parcial,
                            nro_veces: typeof metrado.nro_veces === 'number' ? metrado.nro_veces : null,
                            total: metrado.total,
                            autor_usuario: metrado.autor_usuario,
                            hvac_factor: metrado.hvac_factor,
                            hvac_item_type: metrado.hvac_item_type
                        }])
                        .select()
                        .single();

                    if (error) {
                        console.error('Error insertando metrado en Supabase:', error);
                        return { success: false, error: 'Database Error [' + error.code + ']: ' + error.message };
                    }

                    // 2. Vinculación Many-to-Many de Cuadrilla (Personal)
                    if (metrado.obreros_ids && metrado.obreros_ids.length > 0) {
                        const personalLinks = metrado.obreros_ids.map((id: string) => ({
                            metrado_id: (data as any).id,
                            personal_id: id
                        }));
                        const { error: errorLinks } = await (supabase.from('metrados_personal') as any).insert(personalLinks as any);
                        if (errorLinks) console.error('Error bindeando personal a metrado:', errorLinks);
                    }

                    const dbMetrado: Metrado = { 
                        ...metrado, 
                        id: (data as any).id, 
                        // obrero_nombre ya viene estructurado correctamente en 'metrado' desde useMetradosForm.ts
                        created_at: (data as any).created_at || new Date().toISOString() 
                    };
                    set((state) => ({ metrados: [...state.metrados, dbMetrado] }));
                    return { success: true };
                } catch (err: any) {
                    console.error('Error inesperado insertando metrado:', err);
                    return { success: false, error: 'System Error: ' + (err.message || String(err)) };
                }
            },

            fetchMetrados: async () => {
                // Fetch de metrados con sus relaciones de personal (Many-to-Many)
                const { data, error } = await supabase
                    .from('metrados')
                    .select('*, metrados_personal(personal(*))') as any;
                
                if (error) {
                    console.error('Error obteniendo metrados:', error);
                    return;
                }

                const fetchedMetrados: Metrado[] = (data || []).map((dbRow: any) => {
                    // 1. Extraer lista desde Many-to-Many (Registros Nuevos)
                    let personalList = (dbRow.metrados_personal || [])
                        .map((rel: any) => rel.personal)
                        .filter(Boolean);
                    
                    // 2. Fallback: Si no hay vínculos, buscar por código de cuadrilla en el store personal (Registros Antiguos)
                    if (personalList.length === 0 && dbRow.cuadrilla) {
                        const allPersonal = usePersonalStore.getState().personal;
                        personalList = allPersonal.filter((p: any) => p.cuadrilla?.toUpperCase() === dbRow.cuadrilla.toUpperCase());
                    }

                    const obrerosIds = personalList.map((p: any) => p.id);
                    const formattedCuadrilla = personalList
                        .map((p: any) => p.categoria ? `${p.nombre_formateado} (${p.categoria})` : p.nombre_formateado)
                        .join(' / ');

                    return {
                        id: dbRow.id,
                        fecha: dbRow.fecha,
                        frente: dbRow.frente,
                        bloque: dbRow.bloque,
                        nivel: dbRow.nivel,
                        cuadrilla: dbRow.cuadrilla || undefined,
                        // Usamos la cadena concatenada para la UI y exportación
                        obrero_nombre: formattedCuadrilla || undefined, 
                        obreros_ids: obrerosIds,
                        partida_id: dbRow.partida_id || undefined,
                        custom_partida_id: dbRow.custom_partida_id || undefined,
                        codigo_partida: dbRow.codigo_partida || '',
                        descripcion_partida: dbRow.descripcion_partida || '',
                        elemento: dbRow.elemento,
                        detalle: dbRow.detalle || '',
                        diametro: dbRow.diametro || undefined,
                        cantidad: dbRow.cantidad !== null ? dbRow.cantidad : '',
                        longitud_area: dbRow.longitud_area !== null ? dbRow.longitud_area : '',
                        ancho_empalme: dbRow.ancho_empalme !== null ? dbRow.ancho_empalme : '',
                        altura_gancho: dbRow.altura_gancho !== null ? dbRow.altura_gancho : '',
                        parcial: dbRow.parcial || 0,
                        nro_veces: dbRow.nro_veces !== null ? dbRow.nro_veces : '',
                        total: dbRow.total || 0,
                        unidad: dbRow.unidad || 'und', 
                        proyecto: dbRow.proyecto || 'hospital',
                        autor_usuario: dbRow.autor_usuario || 'UserWeb',
                        created_at: dbRow.created_at || new Date().toISOString(),
                        hvac_factor: dbRow.hvac_factor,
                        hvac_item_type: dbRow.hvac_item_type
                    };
                });
                set({ metrados: fetchedMetrados });
            },

            updateMetrado: async (id, payload) => {
                // Optimistic update local
                set((state) => ({
                    metrados: state.metrados.map((m) =>
                        m.id === id ? { ...m, ...payload } : m
                    ),
                }));
                // Remote update
                const dbPayload = { ...payload };
                // Limpiar campos sintéticos
                delete (dbPayload as any).obrero_nombre; 
                delete (dbPayload as any).obrero_categoria;
                delete (dbPayload as any).descripcion_partida;

                const { error } = await (supabase.from('metrados') as any).update(dbPayload as any).eq('id', id);
                if (error) console.error('Error Supabase Update Metrado:', error);
            },

            deleteMetrado: async (id) => {
                set((state) => ({
                    metrados: state.metrados.filter((m) => m.id !== id),
                }));
                const { error } = await (supabase.from('metrados') as any).delete().eq('id', id);
                if (error) console.error('Error Supabase Delete Metrado:', error);
            },

            updateGroup: async (codigo_partida, old_elemento, new_elemento) => {
                set((state) => ({
                    metrados: state.metrados.map((m) =>
                        m.codigo_partida === codigo_partida && m.elemento === old_elemento
                            ? { ...m, elemento: new_elemento }
                            : m
                    ),
                }));
                const { error } = await (supabase.from('metrados') as any)
                    .update({ elemento: new_elemento } as any)
                    .eq('codigo_partida', codigo_partida)
                    .match({ elemento: old_elemento });
                if (error) console.error('Error Supabase Update Agrupador:', error);
            },

            addCustomPartida: async (partida) => {
                try {
                    // 1. Insertar en Supabase
                    const { data, error } = await (supabase
                        .from('partidas_personalizadas') as any)
                        .insert([{
                            codigo: partida.codigo,
                            descripcion: partida.descripcion,
                            unidad: partida.unidad,
                            modificacion: partida.modificacion || 'PC',
                            especialidad: partida.especialidad
                        } as any])
                        .select()
                        .single() as any;

                    if (error) {
                        console.error('Error insertando partida personalizada en Supabase:', error);
                        return null; // Indicamos falla al UI
                    }

                    // 2. Transforrmarlo al modelo `Partida` del frontend
                    // Usamos el id real de la BD
                    const dbPartida: Partida = {
                        id: data.id,
                        codigo: data.codigo,
                        descripcion: data.descripcion,
                        unidad: data.unidad,
                        modificacion: data.modificacion || 'PC',
                        especialidad: data.especialidad,
                        is_template: true,
                        es_titulo: false,
                        jerarquia: [],
                        nivel_jerarquia: 1
                    };

                    // 3. Actuaizar el Store localmente para reflejo instantáneo
                    set((state) => ({
                        customPartidas: [...state.customPartidas, dbPartida]
                    }));

                    return dbPartida;
                } catch (err) {
                    console.error('Error innesperado al guardar partida personalizada', err);
                    return null;
                }
            },

            fetchCustomPartidas: async () => {
                try {
                    const { data, error } = await (supabase
                        .from('partidas_personalizadas') as any)
                        .select('*')
                        .order('codigo') as any;

                    if (error) {
                        console.error('Error fetching custom partidas:', error);
                        return;
                    }

                    if (data) {
                        const parsedPartidas: Partida[] = (data as any[]).map((dbRow: any) => ({
                            id: dbRow.id,
                            codigo: dbRow.codigo,
                            descripcion: dbRow.descripcion,
                            unidad: dbRow.unidad,
                            modificacion: dbRow.modificacion || 'PC',
                            especialidad: dbRow.especialidad,
                            is_template: true,
                            es_titulo: false,
                            jerarquia: [],
                            nivel_jerarquia: 1
                        }));

                        set({ customPartidas: parsedPartidas });
                    }
                } catch (e) {
                    console.error('Error cargando inicial de partidas:', e);
                }
            },

            clearAll: () => set({ metrados: [] }), // No borramos las custom partidas aquí, solo metrados
        }),
        {
            name: 'inkaia-metrados-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
