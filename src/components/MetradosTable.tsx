import React, { useMemo } from 'react';
import type { Metrado, Partida } from '../types';
import { Download, Loader2, Eraser, Trash2, Calendar, Users } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { RenderModificacionBadge } from './MetradosForm';
import { useMetradosStore } from '../store/useMetradosStore';
import { useAuthStore } from '../store/useAuthStore';
import { useSystemUsersStore } from '../store/useSystemUsersStore';
import { formulaRegistry } from '../utils/formulas/registry';
import { SPECIALTY_RULES } from '../data/specialtyConfig';
import { applyAllFilters, getAvailableAuthorsImproved, getEspecialidadPorCodigo, getAvailableFrentes, getAvailableBloques, getAvailableNiveles } from '../utils/filteringLogic';

interface MetradosTableProps {
    metrados: Metrado[];
    onUpdate?: (id: string, field: keyof Metrado, value: any) => void;
    onGroupUpdate?: (codigoPartida: string, oldElemento: string, newElemento: string) => void;
    onDelete?: (id: string) => void;
    proyecto?: string;
    especialidadSeleccionada?: string;
    onEspecialidadChange?: (val: string) => void;
    isSpecialtyLocked?: boolean;
}

/**
 * Detecta el nivel de jerarquía basado en el código (ej. OE.1.1 = Nivel 2)
 */
const getIndentLevel = (codigo: string): number => {
    if (!codigo) return 0;
    const parts = codigo.split('.');
    return Math.max(0, parts.length - 1);
};

const getAuthorInitials = (name: string): string => {
    if (!name || name === 'TODOS' || name === 'TODAS') return 'TODOS';
    return name
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word[0].toUpperCase())
        .join('');
};

/**
 * Genera el array secuencial para el Data Grid con "Tree Pruning".
 * @param activeMetrados Metrados registrados a mostrar.
 * @param partidasCatalogo Catálogo maestro de partidas del proyecto activo.
 * @param isSummaryMode Si es true, omite el detalle de registros y agrupadores.
 * @param maxLevel Nivel máximo de jerarquía a mostrar (ej. 1 para OE.1, 2 para OE.1.1). null para mostrar todo.
 */
const getHierarchicalRows = (activeMetrados: Metrado[], partidasCatalogo: Partida[], isSummaryMode: boolean = false, maxLevel: number | null = null): any[] => {
    // 1. Identificar IDs activos de los metrados (UUID de catalogo, UUID custom, o fallback a código)
    const getMetradoTargetId = (m: Metrado) => m.custom_partida_id || m.partida_id || m.codigo_partida.trim().toUpperCase();

    const activeNodeIds = new Set(activeMetrados.map(getMetradoTargetId));
    const activeIds = new Set<string>();

    // Optimización O(1) Lookup por ID y por parent_id
    const catalogoMap = new Map<string, Partida>();
    partidasCatalogo.forEach(p => {
        // Registrar por UUID
        if (p.id) catalogoMap.set(p.id, p);
        // Fallback para legacy: Registrar también por código si no colisiona
        catalogoMap.set(p.codigo.trim().toUpperCase(), p);
    });

    // 2. Algoritmo de Rescate de Rama (Bottom-Up):
    // Activamos un nodo si tiene metrados directos O si es ancestro de uno con metrados.
    partidasCatalogo.forEach((node: Partida) => {
        const nodeId = node.id || node.codigo.trim().toUpperCase();
        const legacyCode = node.codigo.trim().toUpperCase();

        if (activeNodeIds.has(nodeId) || activeNodeIds.has(legacyCode)) {
            activeIds.add(nodeId);

            // Subir por la jerarquía para marcar ancestros como activos
            let parentId = node.parent_id || catalogoMap.get(legacyCode)?.parent_id;
            while (parentId) {
                if (activeIds.has(parentId)) break;
                activeIds.add(parentId);
                const parent = catalogoMap.get(parentId);
                parentId = parent?.parent_id;
            }
        }
    });

    const finalRows: any[] = [];
    const metradosRendered = new Set<string>();

    // 3. Segunda pasada: Construir el array lineal para registros con partida conocida
    partidasCatalogo.forEach((node: Partida) => {
        const nodeId = node.id || node.codigo.trim().toUpperCase();
        if (!activeIds.has(nodeId)) return;

        // FILTRO DE NIVEL (V28)
        if (maxLevel !== null) {
            const currentLevel = getIndentLevel(node.codigo);
            if (currentLevel > maxLevel) return;
        }

        // Filtrar metrados que corresponden a este nodo
        const relatedMetrados = activeMetrados.filter(m => {
            const targetId = getMetradoTargetId(m);
            const matches = targetId === node.id ||
                (m.custom_partida_id && m.custom_partida_id === node.id) ||
                (!m.partida_id && !m.custom_partida_id && m.codigo_partida.trim().toUpperCase() === node.codigo.trim().toUpperCase());
            return matches;
        }).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

        // FIX: Los nodos HOJA (!es_titulo) solo se muestran si tienen metrados reales en el periodo actual.
        // Sin este fix, aparecen headers vacíos con solo datos históricos (metrado_anterior_acumulado)
        // cuando se cambia de especialidad, causando el "arrastre visual" entre filtros.
        if (!node.es_titulo && relatedMetrados.length === 0) return;

        // Fila de plantilla (Cabecera)
        finalRows.push({ ...node, is_template: true });

        if (!isSummaryMode && relatedMetrados.length > 0) {
            let lastElemento: string | null | undefined = null;

            relatedMetrados.forEach(m => {
                // Lógica de Agrupador (Elemento Virtual)
                if (m.elemento && m.elemento !== lastElemento) {
                    finalRows.push({
                        is_template: true,
                        es_titulo: false,
                        is_elemento_virtual: true,
                        codigo: '',
                        descripcion: (m.elemento || '').toString().replace(/NaN/g, ''),
                        codigo_partida: node.codigo,
                        id: `virtual-${m.id}-${m.elemento}`,
                        parcial: 0,
                        total: 0
                    });
                    lastElemento = m.elemento;
                } else if (!m.elemento && lastElemento !== null) {
                    lastElemento = null;
                }

                finalRows.push({ ...m, is_template: false, tipo_metrado: node.tipo_metrado });
                metradosRendered.add(m.id);
            });
        }
    });

    // 4. RESCATE DE HUÉRFANOS (V13.5): Para los registros que ya no están en el catálogo
    const orphans = activeMetrados.filter(m => !metradosRendered.has(m.id));
    if (orphans.length > 0) {
        // Agrupar por código para no repetir títulos
        const orphansByCode = new Map<string, Metrado[]>();
        orphans.forEach(m => {
            const code = m.codigo_partida?.trim().toUpperCase() || 'SIN_CODIGO';
            if (!orphansByCode.has(code)) orphansByCode.set(code, []);
            orphansByCode.get(code)!.push(m);
        });

        orphansByCode.forEach((metradosDeOrfano, code) => {
            const sample = metradosDeOrfano[0];
            
            // FILTRO DE NIVEL EN HUÉRFANOS (V28)
            if (maxLevel !== null) {
                const currentLevel = getIndentLevel(code);
                if (currentLevel > maxLevel) return;
            }

            finalRows.push({
                id: `virt-header-${code}`,
                codigo: code === 'SIN_CODIGO' ? 'S/C' : code,
                descripcion: (sample.descripcion_partida || '(Entrada Manual / Sin Item)').toString().replace(/NaN/g, ''),
                unidad: (sample.unidad || 'und').toString().replace(/NaN/g, ''),
                modificacion: 'ET',
                is_template: true,
                es_titulo: false,
                tipo_metrado: sample.tipo_metrado || 'ESTANDAR'
            });

            metradosDeOrfano.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
            if (!isSummaryMode) {
                metradosDeOrfano.forEach(m => finalRows.push({ ...m, is_template: false }));
            }
        });
    }

    return finalRows;
};


const getCurrentWeekRange = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diffToMonday);
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    const format = (d: Date) => d.toISOString().split('T')[0];
    return { from: format(monday), to: format(saturday) };
};

const getSpecificMonthRange = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const format = (d: Date) => d.toISOString().split('T')[0];
    return { from: format(firstDay), to: format(lastDay) };
};

export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados, onUpdate, onGroupUpdate, onDelete, proyecto = 'hospital', especialidadSeleccionada = 'TODAS', onEspecialidadChange, isSpecialtyLocked }) => {
    const { customPartidas, catalogoHospital, catalogoContingencia } = useMetradosStore();

    // Seleccionar el catálogo de partidas correcto según el proyecto y sumarle las personalizadas
    const catalogoActivo = useMemo(() => {
        const base = proyecto === 'hospital' ? catalogoHospital : catalogoContingencia;
        return [...base, ...customPartidas];
    }, [proyecto, customPartidas, catalogoHospital, catalogoContingencia]);

    const [filterAuthor, setFilterAuthor] = React.useState('TODOS');
    const { user } = useAuthStore();
    const { systemUsers } = useSystemUsersStore();
    
    // 1. ESTADOS DE FILTROS BÁSICOS
    const [filterFrente, setFilterFrente] = React.useState('TODOS');
    const [filterBloque, setFilterBloque] = React.useState('TODOS');
    const [filterNivel, setFilterNivel] = React.useState('TODOS');
    
    // 2. ESTADOS DE FECHAS (Deben ir antes de las funciones que los usan)
    const initialDateRange = useMemo(() => getCurrentWeekRange(), []);
    const [filterDateFrom, setFilterDateFrom] = React.useState(initialDateRange.from);
    const [filterDateTo, setFilterDateTo] = React.useState(initialDateRange.to);
    const [activeMonthTab, setActiveMonthTab] = React.useState<string>('week');

    // 3. LÓGICA DE MESES DISPONIBLES (Data Real)
    const availableMonths = useMemo(() => {
        const monthsMap = new Map<string, { year: number, month: number, label: string }>();
        const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"];
        
        metrados.forEach(m => {
            if (!m.fecha) return;
            const d = new Date(m.fecha + 'T00:00:00');
            const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2, '0')}`;
            if (!monthsMap.has(key)) {
                monthsMap.set(key, { 
                    year: d.getFullYear(), 
                    month: d.getMonth(), 
                    label: `${monthNames[d.getMonth()]} ${String(d.getFullYear()).slice(-2)}`
                });
            }
        });
        
        return Array.from(monthsMap.values()).sort((a, b) => (b.year * 100 + b.month) - (a.year * 100 + a.month));
    }, [metrados]);

    // 4. HANDLERS DE CAMBIO DE PERIODO
    const handleMonthChange = (tabId: string) => {
        if (tabId === 'week') {
            const range = getCurrentWeekRange();
            setFilterDateFrom(range.from);
            setFilterDateTo(range.to);
        } else if (tabId === 'all') {
            setFilterDateFrom('');
            setFilterDateTo('');
        } else if (tabId.includes('-')) {
            const [year, month] = tabId.split('-').map(Number);
            const range = getSpecificMonthRange(year, month);
            setFilterDateFrom(range.from);
            setFilterDateTo(range.to);
        }
    };

    // 5. EFECTO DE SINCRONIZACIÓN BIDIRECCIONAL (Tabs <-> Inputs)
    React.useEffect(() => {
        const rangeWeek = getCurrentWeekRange();
        if (filterDateFrom === rangeWeek.from && filterDateTo === rangeWeek.to) {
            setActiveMonthTab('week');
        } else if (filterDateFrom === '' && filterDateTo === '') {
            setActiveMonthTab('all');
        } else {
            const matchedMonth = availableMonths.find(m => {
                const range = getSpecificMonthRange(m.year, m.month);
                return range.from === filterDateFrom && range.to === filterDateTo;
            });
            if (matchedMonth) {
                setActiveMonthTab(`${matchedMonth.year}-${String(matchedMonth.month).padStart(2, '0')}`);
            } else {
                setActiveMonthTab('custom');
            }
        }
    }, [filterDateFrom, filterDateTo, availableMonths]);

    const [debugMode] = React.useState(true);
    const [hasAutoSelectedAuthor, setHasAutoSelectedAuthor] = React.useState(false);

    // Muestra base de metrados filtrada SÓLO por proyecto y especialidad para extraer listas consistentes
    const especialidadMetrados = useMemo(() => {
        return applyAllFilters(metrados, { proyecto, especialidad: especialidadSeleccionada }, catalogoActivo, false, getEspecialidadPorCodigo);
    }, [metrados, proyecto, especialidadSeleccionada, catalogoActivo]);

    // Extraer todos los autores únicos presentes en la vista actual (filtrados por especialidad) y cruzar con la tabla oficial de usuarios del sistema
    const availableAuthors = useMemo(() => {
        return getAvailableAuthorsImproved(metrados, especialidadSeleccionada, catalogoActivo, getEspecialidadPorCodigo, debugMode, systemUsers);
    }, [metrados, especialidadSeleccionada, catalogoActivo, debugMode, systemUsers]);

    // Aplicar Filtro Autor Inteligente ("Si el usuario activo forma parte de la tabla actual y no se ha autoseleccionado aún, selecciónalo")
    React.useEffect(() => {
        if (!hasAutoSelectedAuthor && metrados.length > 0 && user?.nombre_completo) {
            // Evaluamos si el nombre existe dentro de los autores válidos / disponibles
            if (availableAuthors.includes(user.nombre_completo)) {
                setFilterAuthor(user.nombre_completo);
                setHasAutoSelectedAuthor(true);
            } else if (availableAuthors.length > 0) {
                // Si ya cargaron los autores y no estamos (por ejemplo: no tiene registros esta semana), no hacemos force a un nombre vacío, pero deshabilitamos autoTrigger
                setHasAutoSelectedAuthor(true);
            }
        }
    }, [user, availableAuthors, metrados.length, hasAutoSelectedAuthor]);

    const availableFrentes = useMemo(() => getAvailableFrentes(especialidadMetrados), [especialidadMetrados]);
    const availableBloques = useMemo(() => getAvailableBloques(especialidadMetrados), [especialidadMetrados]);
    const availableNiveles = useMemo(() => getAvailableNiveles(especialidadMetrados), [especialidadMetrados]);

    // Filtrar metrados por proyecto, especialidad, autor y fecha (OPTIMIZADO)
    // CORRECCIÓN: 
    // - Proyecto ahora se aplica en applyAllFilters (no en useMemo separado)
    // - Agregar parámetro debug para diagnosticar discrepancias local/servidor
    const filteredMetrados = useMemo(() => {
        return applyAllFilters(metrados, {
            proyecto,
            especialidad: especialidadSeleccionada,
            autor: filterAuthor,
            dateFrom: filterDateFrom,
            dateTo: filterDateTo,
            frente: filterFrente,
            bloque: filterBloque,
            nivel: filterNivel,
        }, catalogoActivo, debugMode);
    }, [metrados, proyecto, especialidadSeleccionada, filterAuthor, filterDateFrom, filterDateTo, filterFrente, filterBloque, filterNivel, catalogoActivo, debugMode]);

    const [isExporting, setIsExporting] = React.useState(false);
    const [showCostView, setShowCostView] = React.useState(false);
    const [viewMode, setViewMode] = React.useState<'DETALLE' | 'SUMMARY' | 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6'>('DETALLE');

    // Mapeo automático de Modo -> Summary y MaxLevel
    const { isSummaryActual, maxLevelActual } = useMemo(() => {
        if (viewMode === 'DETALLE') return { isSummaryActual: false, maxLevelActual: null };
        if (viewMode === 'SUMMARY') return { isSummaryActual: true, maxLevelActual: null };
        const levelMatch = viewMode.match(/^L(\d)$/);
        if (levelMatch) {
            return { isSummaryActual: true, maxLevelActual: parseInt(levelMatch[1], 10) };
        }
        return { isSummaryActual: false, maxLevelActual: null };
    }, [viewMode]);

    const rows = useMemo(() => getHierarchicalRows(filteredMetrados, catalogoActivo, isSummaryActual, maxLevelActual), [filteredMetrados, catalogoActivo, isSummaryActual, maxLevelActual]);

    // VIRTUALIZACIÓN: Referencia al contenedor con scroll
    const parentRef = React.useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40, // Altura estimada de fila
        overscan: 10, // Cuántas filas cargar fuera de vista
    });

    const virtualItems = virtualizer.getVirtualItems();
    const paddingTop = virtualItems.length > 0 ? virtualItems?.[0]?.start || 0 : 0;
    const paddingBottom = virtualItems.length > 0 ? virtualizer.getTotalSize() - (virtualItems?.[virtualItems.length - 1]?.end || 0) : 0;

    // Calcular totales por partida para las filas de cabecera
    const partidaTotals = useMemo(() => {
        const totals: Record<string, number> = {};
        filteredMetrados.forEach(m => {
            totals[m.codigo_partida] = (totals[m.codigo_partida] || 0) + m.total;
        });
        return totals;
    }, [filteredMetrados]);

    // Calcular resumen de personal (V27)
    const personnelSummary = useMemo(() => {
        const workersMap = new Map<string, string>();
        filteredMetrados.forEach(m => {
            if (m.obrero_nombre) {
                const parts = m.obrero_nombre.split(' / ');
                parts.forEach(p => {
                    const match = p.match(/(.+?)\s*\((.+?)\)/);
                    if (match) {
                        workersMap.set(match[1].trim(), match[2].trim());
                    } else {
                        workersMap.set(p.trim(), 'S/C');
                    }
                });
            }
        });
        return Array.from(workersMap.entries()).map(([nombre, categoria]) => ({ nombre, categoria }));
    }, [filteredMetrados]);


    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    const cantPartidasRegistradas = new Set(filteredMetrados.map(m => m.codigo_partida)).size;

    // Cálculo del Valorizado Total en Pantalla
    const totalValorizadoOnScreen = useMemo(() => {
        let sum = 0;
        Object.keys(partidaTotals).forEach(codigo => {
            const partida = catalogoActivo.find(p => p.codigo === codigo || p.id === codigo);
            const precio = partida?.pu_actual || partida?.precio_unitario || 0;
            const qtySistema = partidaTotals[codigo] || 0;
            sum += (qtySistema * precio);
        });
        return sum;
    }, [partidaTotals, catalogoActivo]);

    const exportToExcel = async () => {
        if (filteredMetrados.length === 0) {
            alert("No hay registros que exportar en la vista actual.");
            return;
        }

        try {
            setIsExporting(true);
            let apiUrl = import.meta.env.VITE_API_URL || 'https://inkaia-backend.onrender.com';

            if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1);

            console.log(`[V31 Deploy] Using API URL: ${apiUrl} (Mode: ${import.meta.env.MODE})`);

            let response: Response;
            try {
                response = await fetch(`${apiUrl}/api/export/metrados`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ metrados: rows, proyecto })
                });
            } catch (error) {
                throw new Error(`No se pudo conectar con el servidor de exportación en: ${apiUrl}. Verifique su conexión o que el servicio en el puerto 3001 esté activo.`);
            }

            if (!response.ok) {
                const errJson = await response.json().catch(() => ({}));
                const detail = errJson.error || errJson.detail || response.statusText;
                throw new Error(`Error del Servidor: ${detail} (Status: ${response.status})`);
            }

            // Descender como Blob e incitar auto-descarga Browser-side
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;

            const fileNameEspecialidad = especialidadSeleccionada.replace(/\s+/g, '_');
            const fileNameAutor = getAuthorInitials(filterAuthor);
            a.download = `reporte_metrados_${fileNameEspecialidad}_${fileNameAutor}.xlsx`.toLowerCase();

            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
            alert("Falló la exportación en nube: " + (error as Error).message);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="glass-panel overflow-hidden rounded-2xl flex flex-col h-full border border-slate-200 shadow-sm bg-white">
            {/* Header de la Tabla */}
            <div className="p-3 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
                <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-base tracking-tight">Planilla de Metrados Dinámica</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-0.5">
                        {/* Filtro Especialidad */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Especialidad</span>
                            <select
                                value={especialidadSeleccionada}
                                onChange={(e) => {
                                    onEspecialidadChange?.(e.target.value);
                                    setFilterAuthor('TODOS');
                                    setFilterFrente('TODOS');
                                    setFilterBloque('TODOS');
                                    setFilterNivel('TODOS');
                                }}
                                disabled={isSpecialtyLocked}
                                className={`text-[11px] font-bold border border-slate-200 rounded-lg px-2 py-1 outline-none transition-all ${isSpecialtyLocked
                                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
                                    : 'bg-white text-slate-700 hover:border-blue-400 cursor-pointer shadow-sm'
                                    }`}
                            >
                                {SPECIALTY_RULES.map(rule => (
                                    <option key={rule.id} value={rule.id}>{rule.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro Autor */}
                        <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Autor</span>
                            <select
                                value={filterAuthor}
                                onChange={(e) => setFilterAuthor(e.target.value)}
                                className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                            >
                                <option value="TODOS">TODOS</option>
                                {availableAuthors.map(author => (
                                    <option key={author} value={author}>{author}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro Fecha (Rango) */}
                        <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-200">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Fecha</span>
                            <div className="relative flex items-center gap-1">
                                <label className="text-[9px] text-slate-500 font-medium">Desde:</label>
                                <input
                                    type="date"
                                    value={filterDateFrom}
                                    onChange={(e) => setFilterDateFrom(e.target.value)}
                                    className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                                />
                                <label className="text-[9px] text-slate-500 font-medium">Hasta:</label>
                                <input
                                    type="date"
                                    value={filterDateTo}
                                    onChange={(e) => setFilterDateTo(e.target.value)}
                                    className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                                />
                                {(filterDateFrom || filterDateTo) && (
                                    <button
                                        onClick={() => {
                                            setFilterDateFrom('');
                                            setFilterDateTo('');
                                        }}
                                        className="absolute -right-8 w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white transition-colors text-[8px] cursor-pointer"
                                    >✕</button>
                                )}
                            </div>
                        </div>

                        {/* Filtros de Ubicación (Frente, Bloque, Nivel) */}
                        <div className="flex items-center gap-1 pl-1.5 border-l border-slate-200">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight mr-1">Locación</span>
                            
                            <select
                                value={filterFrente}
                                onChange={(e) => setFilterFrente(e.target.value)}
                                className="w-[80px] text-[10px] font-bold bg-white border border-slate-200 rounded-md px-1 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                                title="Frente"
                            >
                                <option value="TODOS">F. TODOS</option>
                                {availableFrentes.map(frente => (
                                    <option key={frente} value={frente}>{frente.substring(0, 10)}{frente.length > 10 ? '...' : ''}</option>
                                ))}
                            </select>

                            <select
                                value={filterBloque}
                                onChange={(e) => setFilterBloque(e.target.value)}
                                className="w-[80px] text-[10px] font-bold bg-white border border-slate-200 rounded-md px-1 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                                title="Bloque"
                            >
                                <option value="TODOS">B. TODOS</option>
                                {availableBloques.map(bloque => (
                                    <option key={bloque} value={bloque}>{bloque.substring(0, 10)}{bloque.length > 10 ? '...' : ''}</option>
                                ))}
                            </select>

                            <select
                                value={filterNivel}
                                onChange={(e) => setFilterNivel(e.target.value)}
                                className="w-[80px] text-[10px] font-bold bg-white border border-slate-200 rounded-md px-1 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
                                title="Nivel"
                            >
                                <option value="TODOS">N. TODOS</option>
                                {availableNiveles.map(nivel => (
                                    <option key={nivel} value={nivel}>{nivel.substring(0, 10)}{nivel.length > 10 ? '...' : ''}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {/* Selector de Jerarquía y Vistas (V28) */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-all">
                        <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest border-r border-slate-100 pr-2">Vista</span>
                        <select
                            value={viewMode}
                            onChange={(e) => setViewMode(e.target.value as any)}
                            className="text-[11px] font-black bg-transparent border-none outline-none text-blue-600 cursor-pointer focus:ring-0"
                        >
                            <optgroup label="Modos de Tabla">
                                <option value="DETALLE">💎 Vista Integral (Detalle)</option>
                                <option value="SUMMARY">📊 Resumen Ejecutivo (Partidas)</option>
                            </optgroup>
                            <optgroup label="Agrupar por Jerarquía (Especialidades)">
                                <option value="L1">📍 Nivel 1: Títulos (OE.1)</option>
                                <option value="L2">📍 Nivel 2: Sub-Títulos</option>
                                <option value="L3">📍 Nivel 3: Partidas 1°</option>
                                <option value="L4">📍 Nivel 4: Partidas 2°</option>
                                <option value="L5">📍 Nivel 5: Detalle 3°</option>
                                <option value="L6">📍 Nivel 6: Máximo</option>
                            </optgroup>
                        </select>
                    </div>

                    {/* Botón Toggle Vista Valorizada (Ahora solo controla mostrar precios o metrados en la vista actual) */}
                    <button
                        onClick={() => setShowCostView(!showCostView)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer border ${showCostView
                            ? 'bg-blue-600 text-white border-blue-700 shadow-blue-200'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                        title={showCostView ? "Ver en modo Técnico (Medidas)" : "Ver en modo Económico (Soles)"}
                    >
                        <span className="text-[14px]">{showCostView ? '👷' : '💰'}</span>
                        {showCostView ? 'Soles' : 'Medidas'}
                    </button>

                    <button
                        onClick={() => {
                            if (window.confirm('¿Estás seguro de que deseas limpiar todos los datos registrados? Esta acción no se puede deshacer.')) {
                                useMetradosStore.getState().clearAll();
                            }
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all shadow-sm cursor-pointer"
                    >
                        <Eraser size={14} />
                        Limpiar datos
                    </button>
                    <button
                        onClick={exportToExcel}
                        disabled={isExporting}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm cursor-pointer ${isExporting
                            ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                    >
                        {isExporting ? <Loader2 className="animate-spin" size={14} /> : <Download size={14} />}
                        {isExporting ? 'Exportando Nube...' : 'Exportar Oficial'}
                    </button>
                </div>
            </div>

            {/* Clasificador por Meses (Nueva UI Premium) */}
            <div className="flex items-center gap-2 mb-1 p-1 bg-slate-50/50 rounded-xl border border-slate-100/50 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1 shrink-0 px-2 border-r border-slate-200 mr-1">
                    <Calendar size={12} className="text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Período:</span>
                </div>
                
                <button
                    onClick={() => handleMonthChange('week')}
                    className={`shrink-0 px-3 py-1 rounded-lg text-[10px] font-black transition-all border ${activeMonthTab === 'week' 
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm shadow-blue-200' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'}`}
                >
                    ESTA SEMANA
                </button>
                
                <button
                    onClick={() => handleMonthChange('all')}
                    className={`shrink-0 px-3 py-1 rounded-lg text-[10px] font-black transition-all border ${activeMonthTab === 'all' 
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm shadow-indigo-200' 
                        : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}
                >
                    TODO EL TIEMPO
                </button>

                <div className="w-px h-4 bg-slate-200 mx-1 shrink-0" />

                {availableMonths.map(m => {
                    const tabId = `${m.year}-${String(m.month).padStart(2, '0')}`;
                    return (
                        <button
                            key={tabId}
                            onClick={() => handleMonthChange(tabId)}
                            className={`shrink-0 px-3 py-1 rounded-lg text-[10px] font-black transition-all border ${activeMonthTab === tabId 
                                ? 'bg-slate-800 text-white border-slate-900 shadow-sm' 
                                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
                        >
                            {m.label.toUpperCase()}
                        </button>
                    );
                })}
                
                {availableMonths.length === 0 && (
                    <span className="text-[9px] text-slate-400 italic px-2">No hay meses con registros aún</span>
                )}
            </div>

            {/* Contenedor con Scroll (VIRTUALIZADO) */}
            <div 
                ref={parentRef}
                className="overflow-auto flex-grow max-h-[calc(100vh-270px)] scrollbar-thin scrollbar-thumb-slate-200"
            >
                <table className="w-full text-[13px] text-left align-middle border-collapse table-auto">
                    <thead className="text-[11px] text-slate-400 bg-white uppercase whitespace-nowrap sticky top-0 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] z-10 font-bold">
                        <tr className="border-b border-slate-100">
                            <th className="w-[60px] min-w-[60px] px-1 py-3 text-center overflow-hidden">Fecha</th>
                            <th className="w-[85px] min-w-[85px] px-1 py-3 text-left">Item / Código</th>
                            <th className="px-1 py-3 min-w-[200px]">Descripción / Partida / Metrado</th>
                            <th className="w-[30px] min-w-[30px] px-0.5 py-3 text-center">Und</th>

                            {!showCostView ? (
                                <>
                                    <th className="w-[50px] min-w-[50px] px-0.5 py-3 text-right text-[10px] border-l border-slate-200">CANT.</th>
                                    <th className="w-[70px] min-w-[70px] px-0.5 py-3 text-right text-[10px] border-l border-slate-200">LONG./AREA</th>
                                    <th className="w-[60px] min-w-[60px] px-0.5 py-3 text-right text-[10px] border-l border-slate-200">ANCHO</th>
                                    <th className="w-[60px] min-w-[60px] px-0.5 py-3 text-right text-[10px] border-l border-slate-200">ALT./GAN.</th>
                                    <th className="w-[75px] min-w-[75px] px-1 py-3 text-right text-[10px] border-l border-slate-200">Parcial</th>
                                    <th className="w-[45px] min-w-[45px] px-0.5 py-3 text-center text-[10px] border-l border-slate-200">Veces</th>
                                    <th className="w-[10px] min-w-[10px] px-1 py-3 text-center text-[10px] border-l border-slate-200"></th>
                                </>
                            ) : (
                                <>
                                    <th className="w-[65px] min-w-[65px] px-1 py-3 text-right text-[10px] border-l bg-emerald-100 bg-financial-value transition-all">Precio S/</th>
                                    <th className="w-[80px] min-w-[80px] px-1 py-3 text-right text-[10px] border-l bg-blue-100 bg-financial-progress font-black">Metrado Acum.</th>
                                    <th className="w-[80px] min-w-[80px] px-1 py-3 text-right text-[10px] border-l bg-blue-100 bg-financial-progress">Presupuesto</th>
                                    <th className="w-[80px] min-w-[80px] px-1 py-3 text-right text-[10px] border-l bg-amber-100 bg-financial-pending font-black">Saldo Fis.</th>
                                    <th className="w-[80px] min-w-[80px] px-1 py-3 text-right text-[10px] border-l bg-amber-100 bg-financial-pending">Sald. Mon S/</th>
                                    <th className="w-[85px] min-w-[85px] px-1 py-3 text-right text-[10px] border-l bg-emerald-200 bg-current-month font-black shadow-inner">Val. Mes S/</th>
                                    <th className="w-[85px] min-w-[85px] px-1 py-3 text-right text-[10px] border-l bg-emerald-200 bg-financial-value font-black text-emerald-800">Costo Ejec.</th>
                                </>
                            )}

                            <th className="w-[70px] min-w-[70px] px-1 py-3 text-center text-[10px] border-l border-slate-200">AUTOR</th>
                            <th className="w-[85px] min-w-[85px] px-2 py-3 text-right text-[10px] border-l border-slate-200">Total</th>
                        </tr>
                    </thead>
                    <tbody key={`grid-body-${showCostView}-${viewMode}`} className="bg-white">
                        {paddingTop > 0 && (
                            <tr><td colSpan={20} style={{ height: `${paddingTop}px` }}></td></tr>
                        )}
                        {virtualItems.map((virtualRow) => {
                            const r = rows[virtualRow.index];
                            
                            // CASO 1: Es un Título WBS (Nodo Padre)
                            if (r.is_template && r.es_titulo) {
                                return (
                                    <tr key={`title-${r.codigo}`} className="bg-slate-100 border-b border-slate-200">
                                        <td className="w-[60px] min-w-[60px] max-w-[60px] px-1 py-1 text-center font-mono text-[9px] text-slate-400 overflow-hidden"></td>
                                        <td className="w-[85px] min-w-[85px] px-1 py-1 font-mono text-[10px] tracking-wider text-left text-slate-500">
                                            {r.codigo}
                                        </td>
                                        <td colSpan={11} className="px-1 py-1 uppercase text-[10px] font-black tracking-[0.15em] text-slate-600"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.2 + 0.15}rem` }}>
                                            {r.descripcion}
                                        </td>
                                    </tr>
                                );
                            }

                            // CASO 2.5: Fila Virtual de Elemento (Agrupador) - EDITABLE
                            if (r.is_template && r.is_elemento_virtual) {
                                return (
                                    <tr key={r.id} className="bg-slate-50/50 border-b border-slate-100 group">
                                        <td className="w-[60px] min-w-[60px] max-w-[60px] px-1 py-1.5 text-center overflow-hidden"></td>
                                        <td className="w-[85px] min-w-[85px] px-1 py-1.5 text-left"></td>
                                        <td className="px-1 py-1.5" colSpan={11} style={{ paddingLeft: `${getIndentLevel(r.codigo_partida) * 0.2 + 0.25}rem` }}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-blue-300 font-black text-[10px]">▼</span>
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px] font-bold uppercase tracking-wider placeholder:text-slate-300"
                                                    value={r.descripcion}
                                                    onChange={(e) => onGroupUpdate?.(r.codigo_partida, r.descripcion, e.target.value.toUpperCase())}
                                                    onFocus={(e) => e.target.select()}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }

                            // CASO 2: Es una Cabecera de Partida (Nodo Hoja del Presupuesto)
                            if (r.is_template && !r.es_titulo) {
                                const qtySistema = partidaTotals[r.codigo] || 0;
                                const qtyAnterior = r.metrado_anterior_acumulado || r.acumulado_anterior_qty || 0;

                                // TOTAL DEL PERIODO (Solo lo ingresado en el sistema)
                                const totalPeriodo = qtySistema;

                                // TOTAL ACUMULADO (Histórico + Sistema) para cálculos de presupuesto
                                const totalAcumulado = qtySistema + qtyAnterior;
                                const hasMetrados = totalAcumulado > 0;

                                // Cálculos Vista Valorizada
                                const precio = r.pu_actual || r.precio_unitario || 0;
                                const presupuesto = r.metrado_programado || r.cantidad_presupuesto || 0;
                                const saldoFisico = presupuesto - totalAcumulado;
                                const costoEjecutado = totalAcumulado * precio;
                                const saldoMonetario = saldoFisico * precio;

                                return (
                                    <tr key={`header-${r.codigo}`} className={`${hasMetrados ? 'bg-blue-50/50' : 'bg-white'} border-b border-slate-100 font-semibold group transition-colors`}>
                                        <td className="w-[60px] min-w-[60px] max-w-[60px] px-1 py-1 text-center overflow-hidden"></td>
                                        <td className="w-[85px] min-w-[85px] px-1 py-1 text-left" style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.2 + 0.1}rem` }}>
                                            <span className="font-mono text-[10px] text-blue-500 bg-blue-50 px-1 py-0.5 rounded border border-blue-100">
                                                {r.codigo}
                                            </span>
                                        </td>
                                        <td className="px-1 py-1"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.2 + 0.15}rem` }}>
                                            <div className="flex items-center gap-2">
                                                {RenderModificacionBadge(r.modificacion)}
                                                <span className="text-slate-700 text-[11px] leading-snug">{r.descripcion}</span>
                                                {r.cantidad_presupuesto === 0 && (
                                                    <span className="bg-red-100 text-red-600 font-bold px-1 py-0.5 rounded text-[9px] border border-red-200" title="Partida Deductiva (Cantidad 0 original)">DD</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="w-[30px] min-w-[30px] px-1 py-1 text-center text-slate-400 font-bold text-[10px]">{r.unidad}</td>

                                        {!showCostView ? (
                                            <td colSpan={8} className="px-1 py-1 border-l border-slate-100/50">
                                                {!showCostView && r.precio_unitario > 0 && (
                                                    <div className="w-full h-full flex justify-end items-center pr-3 gap-2">
                                                        <span className="bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded text-[10px] border border-emerald-200 shadow-sm" title={`Precio Base: S/ ${r.precio_unitario}`}>S/ {r.precio_unitario.toFixed(2)}</span>
                                                        <span className="bg-blue-600 text-white font-black px-2 py-0.5 rounded text-[11px] border border-blue-700 shadow-sm animate-pulse-subtle">
                                                            S/ {formatNumber(totalPeriodo * precio)}
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                        ) : (
                                            <>
                                                <td className="w-[65px] min-w-[65px] px-1 py-1 text-right text-[11px] border-l border-slate-100 bg-financial-value font-mono">S/ {precio.toFixed(2)}</td>
                                                <td className="w-[80px] min-w-[80px] px-1 py-1 text-right text-[11px] border-l border-blue-100 bg-financial-progress font-mono font-bold">{formatNumber(totalAcumulado)}</td>
                                                <td className="w-[80px] min-w-[80px] px-1 py-1 text-right text-[11px] border-l border-blue-100 bg-financial-progress font-mono text-slate-500/70">{formatNumber(presupuesto)}</td>
                                                <td className={`w-[80px] min-w-[80px] px-1 py-1 text-right text-[11px] border-l border-amber-100 bg-financial-pending font-mono font-bold ${saldoFisico < 0 ? 'text-red-500' : 'text-amber-800'}`}>{formatNumber(saldoFisico)}</td>
                                                <td className="w-[80px] min-w-[80px] px-1 py-1 text-right text-[11px] border-l border-amber-100 bg-financial-pending font-mono italic text-amber-700/80">S/ {formatNumber(saldoMonetario)}</td>
                                                <td className="w-[85px] min-w-[85px] px-1 py-1 text-right text-[11px] border-l border-emerald-200 bg-current-month font-mono font-black text-emerald-800 shadow-sm">S/ {formatNumber(totalPeriodo * precio)}</td>
                                                <td className="w-[85px] min-w-[85px] px-1 py-1 text-right text-[12px] border-l border-emerald-200 bg-financial-value font-mono font-black text-emerald-700">S/ {formatNumber(costoEjecutado)}</td>
                                                <td className="w-[70px] min-w-[70px] border-l border-slate-100/50"></td>
                                            </>
                                        )}

                                        <td className={`w-[85px] min-w-[85px] px-2 py-1 text-right font-black text-[12px] border-l border-slate-100/50 ${showCostView ? 'text-emerald-700 bg-emerald-50/50' : 'text-blue-600'}`}>
                                            {hasMetrados ? (showCostView ? `S/ ${formatNumber(totalPeriodo * precio)}` : formatNumber(totalPeriodo)) : '-'}
                                        </td>
                                    </tr>
                                );
                            }

                            // CASO 3: Es un Registro de Metrado (Ingresado por el usuario)
                            const handleKeyDown = (e: React.KeyboardEvent) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    const inputs = Array.from(document.querySelectorAll('.metrado-input')) as HTMLInputElement[];
                                    const currentIndex = inputs.indexOf(e.target as HTMLInputElement);
                                    if (currentIndex > -1 && currentIndex < inputs.length - 1) {
                                        inputs[currentIndex + 1].focus();
                                        inputs[currentIndex + 1].select();
                                    }
                                }
                            };

                            return (
                                <tr key={`rec-${r.id}`} className="hover:bg-blue-50/20 border-b border-slate-100 group transition-all duration-200">
                                    <td className="w-[60px] min-w-[60px] max-w-[60px] px-1 py-1.5 text-center overflow-hidden">
                                        <input type="date" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-400 font-bold text-[9px] uppercase tracking-tighter"
                                            value={r.fecha} onChange={(e) => onUpdate?.(r.id, 'fecha', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            title={r.fecha} />
                                    </td>
                                    <td className="w-[85px] min-w-[85px] px-0.5 py-1.5">
                                        <div className="flex items-center justify-center gap-0.5">
                                            <div className="w-1 min-w-[4px] h-1 rounded-full bg-slate-300 shrink-0"></div>
                                            <input type="text" className="metrado-input text-[8px] text-slate-600 font-medium uppercase bg-slate-100 border border-slate-200 px-0.5 py-0.5 rounded shrink-0 w-[18px] text-center"
                                                title="Frente" value={r.frente} onChange={(e) => onUpdate?.(r.id, 'frente', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                            <input type="text" className="metrado-input text-[8px] text-slate-600 font-medium uppercase bg-slate-100 border border-slate-200 px-0.5 py-0.5 rounded shrink-0 w-[18px] text-center"
                                                title="Bloque" value={r.bloque} onChange={(e) => onUpdate?.(r.id, 'bloque', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                            <input type="text" className="metrado-input text-[8px] text-slate-600 font-medium uppercase bg-slate-100 border border-slate-200 px-0.5 py-0.5 rounded shrink-0 w-[18px] text-center"
                                                title="Nivel" value={r.nivel} onChange={(e) => onUpdate?.(r.id, 'nivel', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                        </div>
                                    </td>
                                    <td className="px-1 py-1.5">
                                        <div className="flex items-center gap-1.5 w-full">
                                            <input
                                                type="text"
                                                className="metrado-input w-12 bg-slate-200/90 border border-slate-300 px-1 py-0.5 rounded text-slate-500 text-[9px] font-black uppercase shrink-0 text-center shadow-inner cursor-not-allowed opacity-80"
                                                value={r.cuadrilla || ''}
                                                placeholder="CDLLA"
                                                title={`Personal asignado: ${r.obrero_nombre || "Ninguno"}. La edición se hace desde el panel de ingreso.`}
                                                readOnly
                                            />
                                            {r.elemento && <span className="text-blue-400 font-black text-[12px] shrink-0">↳</span>}
                                            <input
                                                type="text"
                                                className="metrado-input w-20 bg-blue-50/50 border border-blue-100 px-1.5 py-0.5 rounded focus:ring-1 focus:ring-blue-500/30 text-blue-800 text-[10px] font-bold uppercase shrink-0"
                                                value={r.elemento || ''}
                                                placeholder="Agrupador"
                                                onChange={(e) => onUpdate?.(r.id, 'elemento', e.target.value.toUpperCase())}
                                                onFocus={(e) => e.target.select()}
                                            />
                                            {r.diametro && <span className="text-orange-600 font-bold tracking-wider text-[10px] bg-orange-100/80 px-1.5 py-0.5 rounded shadow-sm border border-orange-200 shrink-0">Φ {r.diametro}</span>}
                                            <input
                                                type="text"
                                                className="metrado-input w-full bg-transparent border-none p-0 focus:ring-0 text-slate-700 text-[11px] font-medium placeholder:text-slate-300 italic"
                                                value={r.detalle || ''}
                                                placeholder="Ej. Acero longitudinal 3/4''..."
                                                onChange={(e) => onUpdate?.(r.id, 'detalle', e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(e)}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-2 py-1.5 text-center text-slate-300">-</td>

                                    {!showCostView ? (
                                        (() => {
                                            const strategy = formulaRegistry.get(r.tipo_metrado);
                                            const meta = { hvacItemType: r.hvac_item_type };

                                            return (
                                                <>
                                                    {/* Dimensiones Editables */}
                                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                                        {strategy.isFieldLocked('cantidad', meta) ? (
                                                            <span className="text-[9px] font-bold text-slate-300 pointer-events-none">N/A</span>
                                                        ) : (
                                                            <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                                                value={r.cantidad} onChange={(e) => onUpdate?.(r.id, 'cantidad', e.target.value)}
                                                                onFocus={(e) => e.target.select()}
                                                                onKeyDown={(e) => handleKeyDown(e)} />
                                                        )}
                                                    </td>
                                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                                        {strategy.isFieldLocked('longitud_area', meta) ? (
                                                            <span className="text-[9px] font-bold text-slate-300 pointer-events-none">N/A</span>
                                                        ) : (
                                                            <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                                                value={r.longitud_area} onChange={(e) => onUpdate?.(r.id, 'longitud_area', e.target.value)}
                                                                onFocus={(e) => e.target.select()}
                                                                onKeyDown={(e) => handleKeyDown(e)} />
                                                        )}
                                                    </td>
                                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                                        {strategy.isFieldLocked('ancho_empalme', meta) ? (
                                                            <span className="text-[9px] font-bold text-slate-300 pointer-events-none">N/A</span>
                                                        ) : (
                                                            <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                                                value={r.ancho_empalme} onChange={(e) => onUpdate?.(r.id, 'ancho_empalme', e.target.value)}
                                                                onFocus={(e) => e.target.select()}
                                                                onKeyDown={(e) => handleKeyDown(e)} />
                                                        )}
                                                    </td>
                                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                                        {strategy.isFieldLocked('altura_gancho', meta) ? (
                                                            <span className="text-[9px] font-bold text-slate-300 pointer-events-none">N/A</span>
                                                        ) : (
                                                            <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                                                value={r.altura_gancho} onChange={(e) => onUpdate?.(r.id, 'altura_gancho', e.target.value)}
                                                                onFocus={(e) => e.target.select()}
                                                                onKeyDown={(e) => handleKeyDown(e)} />
                                                        )}
                                                    </td>

                                                    <td className="px-2 py-1.5 text-right font-semibold text-slate-500 text-[11px] border-l border-slate-200/60">{formatNumber(r.parcial)}</td>

                                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                                        {strategy.isFieldLocked('nro_veces', meta) ? (
                                                            <span className="text-[9px] font-bold text-slate-300 pointer-events-none bg-slate-50/50 block w-full rounded">1</span>
                                                        ) : (
                                                            <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-500 font-bold text-[11px]"
                                                                value={r.nro_veces} onChange={(e) => onUpdate?.(r.id, 'nro_veces', e.target.value)}
                                                                onFocus={(e) => e.target.select()}
                                                                onKeyDown={(e) => handleKeyDown(e)} />
                                                        )}
                                                    </td>

                                                    {/* Espaciador para la columna vacía del Header */}
                                                    <td className="w-[10px] min-w-[10px] border-l border-slate-200/60"></td>
                                                </>
                                            );
                                        })()
                                    ) : (
                                        <td colSpan={7} className="px-1 py-1.5 text-center border-l border-slate-200/60 text-slate-300 italic text-[10px]">
                                            Modo valorización activado - Desactivar para editar medidas
                                        </td>
                                    )}

                                    <td className="w-[60px] min-w-[60px] px-1 py-1 text-center border-l border-slate-100/50">
                                        <div className="flex flex-col items-center leading-none">
                                            <span className="text-[9px] font-black text-slate-800 uppercase truncate w-full" title={r.autor_usuario || 'User'}>
                                                {(r.autor_usuario || 'User').split(' ')[0]}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Total + Acciones */}
                                    <td className="w-[75px] min-w-[75px] px-1.5 py-1.5 text-right font-bold text-slate-800 relative text-[11px] border-l border-slate-200/60">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <span>{r.total.toFixed(2)}</span>
                                            <button
                                                onClick={() => onDelete?.(r.id)}
                                                className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all p-1 hover:bg-red-50 rounded-md"
                                                title="Eliminar Registro"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        {paddingBottom > 0 && (
                            <tr><td colSpan={20} style={{ height: `${paddingBottom}px` }}></td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer de Resumen */}
            <div className="mt-auto p-3 border-t border-slate-200 bg-white flex justify-between items-center z-10">
                <div className="flex items-center gap-5">
                    <div className="flex gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 block"></span> Partidas: {cantPartidasRegistradas}</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 block"></span> Registros: {filteredMetrados.length}</span>
                        {personnelSummary.length > 0 && (
                            <span className="flex items-center gap-1.5"><Users size={12} className="text-blue-500" /> Personal: {personnelSummary.length}</span>
                        )}
                    </div>
                    <div className="h-4 w-px bg-slate-200 mx-1"></div>
                    <div className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded border border-emerald-200 shadow-inner group transition-all hover:bg-emerald-100/50">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600/80">Valorizado en Vista</span>
                        <span className="text-[14px] font-black tracking-tighter">S/ {formatNumber(totalValorizadoOnScreen)}</span>
                    </div>
                </div>
                <div className="bg-slate-800 text-white px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Control de Planilla Web v3.1
                </div>
            </div>
        </div>
    );
};
