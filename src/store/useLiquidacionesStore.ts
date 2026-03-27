import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Metrado } from '../types';
import { supabase } from '../lib/supabase';

interface LiquidacionesState {
    metrados: Metrado[];
    
    // Acciones
    fetchMetrados: (autorUsuario?: string) => Promise<void>;
    addMetrado: (metrado: Omit<Metrado, 'id' | 'created_at'>) => Promise<{ success: boolean; error?: string }>;
    updateMetrado: (id: string, payload: Partial<Metrado>) => Promise<void>;
    deleteMetrado: (id: string) => Promise<void>;
    clearAll: () => void;
}

export const useLiquidacionesStore = create<LiquidacionesState>()(
    persist(
        (set) => ({
            metrados: [],

            fetchMetrados: async (autorUsuario?: string) => {
                try {
                    let query = supabase
                        .from('metrados_liquidaciones')
                        .select('*')
                        .order('fecha', { ascending: false });

                    // Filtrar por usuario si se proporciona
                    if (autorUsuario) {
                        query = query.eq('autor_usuario', autorUsuario);
                    }

                    const { data, error } = await query;

                    if (error) throw error;
                    set({ metrados: (data as any[]) || [] });
                } catch (err) {
                    console.error('[LiquidacionesStore] Error fetching metrados:', err);
                    set({ metrados: [] });
                }
            },

            addMetrado: async (metrado) => {
                try {
                    // Resolver partida_id si viene vacío
                    let resolvedPartidaId = metrado.partida_id;
                    
                    const isUUID = (id: any) => {
                        if (typeof id !== 'string') return false;
                        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ||
                               /^[0-9a-f]{32}$/i.test(id);
                    };

                    if (resolvedPartidaId && !isUUID(resolvedPartidaId)) {
                        resolvedPartidaId = undefined;
                    }

                    // Si no tiene ID, intentar buscar por código en catálogo_partidas
                    if (!resolvedPartidaId && !metrado.custom_partida_id) {
                        const { data: catData } = await (supabase.from('catalogo_partidas') as any)
                            .select('id')
                            .eq('codigo', metrado.codigo_partida)
                            .maybeSingle();
                        
                        if (catData) resolvedPartidaId = catData.id;
                    }

                    const payloadToInsert = {
                        fecha: metrado.fecha,
                        frente: metrado.frente,
                        bloque: metrado.bloque,
                        nivel: metrado.nivel,
                        cuadrilla: metrado.cuadrilla,
                        partida_id: resolvedPartidaId || null,
                        custom_partida_id: metrado.custom_partida_id || null,
                        codigo_partida: metrado.codigo_partida,
                        descripcion_partida: metrado.descripcion_partida,
                        unidad: metrado.unidad,
                        proyecto: metrado.proyecto || 'hospital',
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
                        especialidad: metrado.especialidad,
                        hvac_factor: metrado.hvac_factor,
                        hvac_item_type: metrado.hvac_item_type,
                    };

                    const { data: insertData, error: insertError } = await (supabase.from('metrados_liquidaciones') as any)
                        .insert([payloadToInsert])
                        .select()
                        .single();

                    if (insertError) {
                        console.error('[LiquidacionesStore] Insert error:', insertError);
                        return { success: false, error: insertError.message };
                    }

                    // Actualizar estado local
                    set((state) => ({
                        metrados: [insertData, ...state.metrados]
                    }));

                    return { success: true };
                } catch (err: any) {
                    console.error('[LiquidacionesStore] Error adding metrado:', err);
                    return { success: false, error: err.message };
                }
            },

            updateMetrado: async (id, payload) => {
                try {
                    const { error } = await (supabase.from('metrados_liquidaciones') as any)
                        .update(payload)
                        .eq('id', id);

                    if (error) throw error;

                    // Actualizar estado local
                    set((state) => ({
                        metrados: state.metrados.map((m) =>
                            m.id === id ? { ...m, ...payload } : m
                        )
                    }));
                } catch (err) {
                    console.error('[LiquidacionesStore] Error updating metrado:', err);
                }
            },

            deleteMetrado: async (id) => {
                try {
                    const { error } = await (supabase.from('metrados_liquidaciones') as any)
                        .delete()
                        .eq('id', id);

                    if (error) throw error;

                    // Actualizar estado local
                    set((state) => ({
                        metrados: state.metrados.filter((m) => m.id !== id)
                    }));
                } catch (err) {
                    console.error('[LiquidacionesStore] Error deleting metrado:', err);
                }
            },

            clearAll: () => {
                set({ metrados: [] });
            }
        }),
        {
            name: 'liquidaciones-storage',
        }
    )
);
