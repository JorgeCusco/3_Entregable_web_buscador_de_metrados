import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Metrado, Partida } from '../types';
import { supabase } from '../lib/supabase';
import { mockPartidas } from '../data/mockDB_1';
import { mockPartidasContingencia } from '../data/mockDB_contingencia';
import { usePersonalStore } from './usePersonalStore';
import { getEspecialidadPorCodigo } from '../constants/especialidades';

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

    // D) Catálogos vivos (Supabase)
    catalogoHospital: Partida[];
    catalogoContingencia: Partida[];
    hvacCatalog: { id: string; categoria: string; label: string; factor: number }[];

    // Acciones
    setContext: (context: Partial<MetradosContext>) => void;
    addMetrado: (metrado: Omit<Metrado, 'id' | 'created_at'>) => Promise<{success: boolean, error?: string}>;
    fetchMetrados: () => Promise<void>;
    updateMetrado: (id: string, payload: Partial<Metrado>) => Promise<void>;
    deleteMetrado: (id: string) => Promise<void>;
    updateGroup: (codigo_partida: string, old_elemento: string, new_elemento: string) => Promise<void>;
    addCustomPartida: (partida: Partida) => Promise<Partida | null>;
    fetchCustomPartidas: () => Promise<void>;
    fetchHvacCatalog: () => Promise<void>;
    fetchCatalogoMaestro: () => Promise<void>;
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
            catalogoHospital: [],
            catalogoContingencia: [],
            hvacCatalog: [],

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

                    // V7.2.4: Validación de UUID Ultra-Resiliente
                    const isUUID = (id: any) => {
                        if (typeof id !== 'string') return false;
                        // Acepta formato con guiones (8-4-4-4-12) o sin guiones (32 hex)
                        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) || /^[0-9a-f]{32}$/i.test(id);
                    };
                    
                    if (resolvedPartidaId && !isUUID(resolvedPartidaId)) {
                        console.warn(`[V7.2.4] Purgando partida_id inválido: "${resolvedPartidaId}"`);
                        resolvedPartidaId = undefined;
                    }
                    if (resolvedCustomId && !isUUID(resolvedCustomId)) {
                        console.warn(`[V7.2.4] Purgando custom_id inválido: "${resolvedCustomId}"`);
                        resolvedCustomId = undefined;
                    }

                    // Si el metrado viene sin ID real (ej. era de un mock), intentar buscarlo en la nube por su CÓDIGO
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

                    // LOG DE DEPURACIÓN CRÍTICO (Ver en F12)
                    console.log(`[V7.2.4 Insert] codigo: ${metrado.codigo_partida} | p_id: ${resolvedPartidaId || 'null'} | c_id: ${resolvedCustomId || 'null'}`);

                    // Payload único para insert y reintento (V8.1.2)
                    const payloadToInsert = {
                        fecha: metrado.fecha,
                        frente: metrado.frente,
                        bloque: metrado.bloque,
                        nivel: metrado.nivel,
                        cuadrilla: metrado.cuadrilla,
                        partida_id: resolvedPartidaId || null,
                        custom_partida_id: resolvedCustomId || null,
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
                        especialidad: metrado.especialidad,
                        hvac_factor: metrado.hvac_factor,
                        hvac_item_type: metrado.hvac_item_type
                    };

                    // 1. Insertamos el Metrado (V8.1.3: Nombres únicos para evitar redéclarations)
                    const { data: insertData, error: insertError } = await (supabase.from('metrados') as any).insert([payloadToInsert]).select().single();

                    // V8.1: Reintento Agresivo. Si falla por FK, intentar insertar sin IDs (solo data denormalizada)
                    if (insertError && insertError.code === '23503') {
                        console.warn('[V8.1] FK Error detectado. Reintentando insertar sin referencias de catálogo para salvar el dato...');
                        const fallbackPayload = { ...payloadToInsert };
                        delete (fallbackPayload as any).partida_id;
                        delete (fallbackPayload as any).custom_partida_id;
                        const { error: retryError } = await (supabase.from('metrados') as any).insert([fallbackPayload]).select().single();
                        if (!retryError) return { success: true }; 
                    }

                    if (insertError) {
                        console.error('Error insertando metrado en Supabase:', insertError);
                        return { success: false, error: 'Database Error [' + insertError.code + ']: ' + insertError.message };
                    }

                    // 2. Vinculación Many-to-Many de Cuadrilla (Personal)
                    // V7.2.3: Filtrar solo IDs que sean UUIDs válidos para evitar errores de integridad con personal local (mock)
                    const validObrerosIds = (metrado.obreros_ids || []).filter(id => isUUID(id));

                    if (validObrerosIds.length > 0) {
                        const personalLinks = validObrerosIds.map((id: string) => ({
                            metrado_id: (insertData as any).id,
                            personal_id: id
                        }));
                        const { error: errorLinks } = await (supabase.from('metrados_personal') as any).insert(personalLinks as any);
                        if (errorLinks) console.error('Error bindeando personal a metrado (FK Error):', errorLinks);
                    }

                    const dbMetrado: Metrado = { 
                        ...metrado, 
                        id: (insertData as any).id, 
                        // obrero_nombre ya viene estructurado correctamente en 'metrado' desde useMetradosForm.ts
                        created_at: (insertData as any).created_at || new Date().toISOString() 
                    };
                    set((state) => ({ metrados: [...state.metrados, dbMetrado] }));
                    return { success: true };
                } catch (err: any) {
                    console.error('Error inesperado insertando metrado:', err);
                    return { success: false, error: 'System Error: ' + (err.message || String(err)) };
                }
            },

            fetchMetrados: async () => {
                try {
                    // Motor de Carga Masiva V16: Bypass de límite de 1000 registros (Paginación Automática)
                    let allMetrados: any[] = [];
                    let from = 0;
                    const step = 1000;
                    let hasMore = true;

                    while (hasMore) {
                        const { data, error } = await supabase
                            .from('metrados')
                            .select('*, metrados_personal(personal(*))')
                            .order('fecha', { ascending: false })
                            .range(from, from + step - 1) as any;
                        
                        if (error) throw error;
                        if (!data || data.length === 0) {
                            hasMore = false;
                        } else {
                            allMetrados = [...allMetrados, ...data];
                            from += step;
                            if (data.length < step) hasMore = false; // Última página
                            if (allMetrados.length > 15000) hasMore = false; // Safe break
                        }
                    }

                    const fetchedMetrados: Metrado[] = allMetrados.map((dbRow: any) => {
                        let personalList = (dbRow.metrados_personal || [])
                            .map((rel: any) => rel.personal)
                            .filter(Boolean);
                        
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
                            proyecto: (dbRow.proyecto || 'hospital').trim().toLowerCase(),
                            autor_usuario: dbRow.autor_usuario || 'UserWeb',
                            created_at: dbRow.created_at || new Date().toISOString(),
                            especialidad: dbRow.especialidad || undefined,
                            hvac_factor: dbRow.hvac_factor,
                            hvac_item_type: dbRow.hvac_item_type
                        };
                    });
                    set({ metrados: fetchedMetrados });
                } catch (error) {
                    console.error('Error masivo obteniendo metrados:', error);
                }
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

                // V7.2.3: Validación de IDs en Update para evitar Error 23503
                const isUUID = (id: any) => typeof id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
                if ((dbPayload as any).partida_id && !isUUID((dbPayload as any).partida_id)) delete (dbPayload as any).partida_id;
                if ((dbPayload as any).custom_partida_id && !isUUID((dbPayload as any).custom_partida_id)) delete (dbPayload as any).custom_partida_id;

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
                            especialidad: partida.especialidad,
                            tipo_metrado: partida.tipo_metrado
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
                        tipo_metrado: data.tipo_metrado,
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
                            tipo_metrado: dbRow.tipo_metrado,
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

            fetchHvacCatalog: async () => {
                try {
                    const { data, error } = await supabase
                        .from('hvac_catalogo_accesorios')
                        .select('*')
                        .order('categoria', { ascending: true })
                        .order('label', { ascending: true });
                    
                    if (error) throw error;
                    set({ hvacCatalog: data || [] });
                } catch (e) {
                    console.error('Error cargando catalogo HVAC:', e);
                }
            },

            fetchCatalogoMaestro: async () => {
                try {
                    const { data: proyectos, error: errProj } = await supabase.from('proyectos').select('id, codigo') as any;
                    
                    if (errProj || !proyectos || proyectos.length === 0) {
                        console.warn('Fallback V5: Usando mock JSON porque no hay proyectos en BD');
                        set({ catalogoHospital: mockPartidas, catalogoContingencia: mockPartidasContingencia as Partida[] });
                        return;
                    }

                    const hospId = proyectos.find((p: any) => p.codigo === 'HOSP')?.id;
                    const contId = proyectos.find((p: any) => p.codigo === 'CONT')?.id;

                    // MOTOR DE CARGA MASIVA V16: Recursividad para Catálogo (Bypass límite 1000)
                    let allCatalogo: any[] = [];
                    let from = 0;
                    const step = 1000;
                    let hasMore = true;

                    while (hasMore) {
                        const { data, error } = await supabase
                            .from('catalogo_partidas')
                            .select('*')
                            .order('codigo', { ascending: true })
                            .range(from, from + step - 1) as any;

                        if (error) throw error;
                        if (!data || data.length === 0) {
                            hasMore = false;
                        } else {
                            allCatalogo = [...allCatalogo, ...data];
                            from += step;
                            if (data.length < step) hasMore = false;
                            if (allCatalogo.length > 20000) hasMore = false;
                        }
                    }

                    console.log(`[V16] Catálogo TOTAL cargado: ${allCatalogo.length} registros.`);
                    
                    const mapPartidas = (rows: any[]): Partida[] => rows.map((r: any) => ({
                        id: r.id,
                        codigo: r.codigo,
                        descripcion: r.descripcion,
                        unidad: r.unidad || 'und',
                        modificacion: r.modificacion || 'SM',
                        especialidad: r.especialidad_deducida || getEspecialidadPorCodigo(r.codigo),
                        tipo_metrado: r.tipo_metrado || 'ESTANDAR',
                        is_template: true,
                        es_titulo: r.is_title || false,
                        jerarquia: r.jerarquia || [],
                        nivel_jerarquia: r.nivel_jerarquia || 1,
                        precio_unitario: r.pu_actual || r.precio_unitario || 0,
                        cantidad_presupuesto: r.metrado_programado || r.cantidad_presupuesto || 0,
                        acumulado_anterior_qty: r.metrado_anterior_acumulado || r.acumulado_anterior_qty || 0,
                        // Mapeo explícito de los nuevos campos
                        metrado_anterior_acumulado: r.metrado_anterior_acumulado || 0,
                        valorizacion_anterior: r.valorizacion_anterior || 0,
                        pu_actual: r.pu_actual || 0,
                        metrado_programado: r.metrado_programado || 0,
                        valorizacion_programada: r.valorizacion_programada || 0,
                        metrado_anterior: r.metrado_anterior || 0,
                        presupuesto_anterior: r.presupuesto_anterior || 0
                    }));

                    let hosp = mapPartidas(allCatalogo.filter((c: any) => c.proyecto_id === hospId));
                    let cont = mapPartidas(allCatalogo.filter((c: any) => c.proyecto_id === contId));

                    const mergeWithMock = (dbItems: Partida[], mockItems: Partida[]): Partida[] => {
                        const existingCodes = new Set(dbItems.map(p => p.codigo));
                        const uniqueMocks = mockItems.filter(p => !existingCodes.has(p.codigo));
                        return [...dbItems, ...uniqueMocks];
                    };

                    set({ 
                        catalogoHospital: mergeWithMock(hosp, mockPartidas),
                        catalogoContingencia: mergeWithMock(cont, mockPartidasContingencia as Partida[])
                    });
                } catch (e) {
                    console.error('Error cargando catálogo maestro (Masivo V16):', e);
                }
            },

            clearAll: () => set({ metrados: [] }), // No borramos las custom partidas aquí, solo metrados
        }),
        {
            name: 'inkaia-metrados-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ 
                context: state.context 
            }),
        }
    )
);
