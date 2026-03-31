import React, { useMemo } from 'react';
import type { Metrado, Partida } from '../types';
import { Download, Trash2, Loader2, Eraser } from 'lucide-react';
import { RenderModificacionBadge } from './MetradosForm';
import { useMetradosStore } from '../store/useMetradosStore';
import { formulaRegistry } from '../utils/formulas/registry';
import { SPECIALTY_RULES } from '../data/specialtyConfig';
import { applyAllFilters, getAvailableAuthorsImproved, getEspecialidadPorCodigo } from '../utils/filteringLogic';

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
 */
const getHierarchicalRows = (activeMetrados: Metrado[], partidasCatalogo: Partida[]): any[] => {
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

        // Fila de plantilla (Cabecera)
        finalRows.push({ ...node, is_template: true });

        // Filtrar metrados que corresponden a este nodo
        const relatedMetrados = activeMetrados.filter(m => {
            const targetId = getMetradoTargetId(m);
            const matches = targetId === node.id || 
                          (m.custom_partida_id && m.custom_partida_id === node.id) ||
                          (!m.partida_id && !m.custom_partida_id && m.codigo_partida.trim().toUpperCase() === node.codigo.trim().toUpperCase());
            return matches;
        }).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

        if (relatedMetrados.length > 0) {
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
            metradosDeOrfano.forEach(m => finalRows.push({ ...m, is_template: false }));
        });
    }

    return finalRows;
};


export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados, onUpdate, onGroupUpdate, onDelete, proyecto = 'hospital', especialidadSeleccionada = 'TODAS', onEspecialidadChange, isSpecialtyLocked }) => {
    const { customPartidas, catalogoHospital, catalogoContingencia } = useMetradosStore();

    // Seleccionar el catálogo de partidas correcto según el proyecto y sumarle las personalizadas
    const catalogoActivo = useMemo(() => {
        const base = proyecto === 'hospital' ? catalogoHospital : catalogoContingencia;
        return [...base, ...customPartidas];
    }, [proyecto, customPartidas, catalogoHospital, catalogoContingencia]);

    const [filterAuthor, setFilterAuthor] = React.useState('TODOS');
    const [filterDateFrom, setFilterDateFrom] = React.useState('');
    const [filterDateTo, setFilterDateTo] = React.useState('');
    const [debugMode] = React.useState(true); // Habilitado para diagnosticar infiltración

    // Extraer todos los autores únicos presentes en la vista actual (filtrados por especialidad)
    const availableAuthors = useMemo(() => {
        return getAvailableAuthorsImproved(metrados, especialidadSeleccionada, catalogoActivo, getEspecialidadPorCodigo, debugMode);
    }, [metrados, especialidadSeleccionada, catalogoActivo, debugMode]);

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
        }, catalogoActivo, debugMode);
    }, [metrados, proyecto, especialidadSeleccionada, filterAuthor, filterDateFrom, filterDateTo, catalogoActivo, debugMode]);

    const rows = useMemo(() => getHierarchicalRows(filteredMetrados, catalogoActivo), [filteredMetrados, catalogoActivo]);
    const [isExporting, setIsExporting] = React.useState(false);
    const [showCostView, setShowCostView] = React.useState(false);

    // Calcular totales por partida para las filas de cabecera
    const partidaTotals = useMemo(() => {
        const totals: Record<string, number> = {};
        filteredMetrados.forEach(m => {
            totals[m.codigo_partida] = (totals[m.codigo_partida] || 0) + m.total;
        });
        return totals;
    }, [filteredMetrados]);


    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    const cantPartidasRegistradas = new Set(filteredMetrados.map(m => m.codigo_partida)).size;

    const exportToExcel = async () => {
        if (filteredMetrados.length === 0) {
            alert("No hay registros que exportar en la vista actual.");
            return;
        }

        try {
            setIsExporting(true);
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            let apiUrl = import.meta.env.VITE_API_URL || '';
            
            if (!apiUrl) {
                apiUrl = isLocal 
                    ? `http://${window.location.hostname}:3001` 
                    : 'https://inkaia-backend.onrender.com';
            }
            
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
                                }}
                                disabled={isSpecialtyLocked}
                                className={`text-[11px] font-bold border border-slate-200 rounded-lg px-2 py-1 outline-none transition-all ${
                                    isSpecialtyLocked 
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
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {/* Botón Toggle Vista Valorizada */}
                    <button
                        onClick={() => setShowCostView(!showCostView)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer border ${
                            showCostView 
                            ? 'bg-blue-600 text-white border-blue-700 shadow-blue-200' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                        title={showCostView ? "Volver a vista técnica" : "Ver costos y saldos"}
                    >
                        <span className="text-[14px]">{showCostView ? '👷' : '💰'}</span>
                        {showCostView ? 'Vista Técnica' : 'Vista Valorizada'}
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

            {/* Contenedor con Scroll */}
            <div className="overflow-auto flex-grow max-h-[calc(100vh-250px)] scrollbar-thin scrollbar-thumb-slate-200">
                <table className="w-full text-[13px] text-left align-middle border-collapse table-auto">
                    <thead className="text-[11px] text-slate-400 bg-white uppercase whitespace-nowrap sticky top-0 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] z-10 font-bold">
                        <tr className="border-b border-slate-100">
                            <th className="w-[75px] min-w-[75px] px-1 py-3 text-center overflow-hidden">Fecha</th>
                            <th className="w-[70px] min-w-[70px] px-1 py-3 text-left">Item / Código</th>
                            <th className="px-1.5 py-3 min-w-[250px]">Descripción / Partida / Metrado</th>
                            <th className="w-[35px] min-w-[35px] px-0.5 py-3 text-center">Und</th>
                            
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
                    <tbody className="bg-white">
                        {rows.map((r: any) => {
                            // CASO 1: Es un Título WBS (Nodo Padre)
                            if (r.is_template && r.es_titulo) {
                                return (
                                    <tr key={`title-${r.codigo}`} className="bg-slate-100 border-b border-slate-200">
                                        <td className="w-[75px] min-w-[75px] max-w-[75px] px-1 py-1 text-center font-mono text-[9px] text-slate-400 overflow-hidden"></td>
                                        <td className="w-[70px] min-w-[70px] px-1 py-1 font-mono text-[10px] tracking-wider text-left text-slate-500">
                                            {r.codigo}
                                        </td>
                                        <td colSpan={11} className="px-2 py-1 uppercase text-[10px] font-black tracking-[0.15em] text-slate-600"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.5 + 0.25}rem` }}>
                                            {r.descripcion}
                                        </td>
                                    </tr>
                                );
                            }

                            // CASO 2.5: Fila Virtual de Elemento (Agrupador) - EDITABLE
                            if (r.is_template && r.is_elemento_virtual) {
                                return (
                                    <tr key={r.id} className="bg-slate-50/50 border-b border-slate-100 group">
                                        <td className="w-[75px] min-w-[75px] max-w-[75px] px-1 py-1.5 text-center overflow-hidden"></td>
                                        <td className="w-[70px] min-w-[70px] px-1 py-1.5 text-left"></td>
                                        <td className="px-1.5 py-1.5" colSpan={11} style={{ paddingLeft: `${getIndentLevel(r.codigo_partida) * 0.5 + 0.75}rem` }}>
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
                                        <td className="w-[75px] min-w-[75px] max-w-[75px] px-1 py-1 text-center overflow-hidden"></td>
                                        <td className="w-[70px] min-w-[70px] px-1 py-1 text-left" style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.5 + 0.25}rem` }}>
                                            <span className="font-mono text-[10px] text-blue-500 bg-blue-50 px-1 py-0.5 rounded border border-blue-100">
                                                {r.codigo}
                                            </span>
                                        </td>
                                        <td className="px-1.5 py-1"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.5 + 0.25}rem` }}>
                                            <div className="flex items-center gap-2">
                                                {RenderModificacionBadge(r.modificacion)}
                                                <span className="text-slate-700 text-[11px] leading-snug">{r.descripcion}</span>
                                                {r.cantidad_presupuesto === 0 && (
                                                    <span className="bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded text-[9px] border border-red-200" title="Partida Deductiva (Cantidad 0 original)">DD</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="w-[35px] min-w-[35px] px-1 py-1 text-center text-slate-400 font-bold text-[10px]">{r.unidad}</td>
                                        
                                        {!showCostView ? (
                                            <td colSpan={8} className="px-1 py-1 border-l border-slate-100/50">
                                                {!showCostView && r.precio_unitario > 0 && (
                                                    <div className="w-full h-full flex justify-end items-center pr-3">
                                                        <span className="bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded text-[10px] border border-emerald-200 shadow-sm" title={`Precio Base: S/ ${r.precio_unitario}`}>S/ {r.precio_unitario.toFixed(2)}</span>
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
                                    <td className="w-[75px] min-w-[75px] max-w-[75px] px-1 py-1.5 text-center overflow-hidden">
                                        <input type="date" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-400 font-bold text-[9px] uppercase tracking-tighter"
                                            value={r.fecha} onChange={(e) => onUpdate?.(r.id, 'fecha', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            title={r.fecha} />
                                    </td>
                                    <td className="w-[70px] min-w-[70px] px-0.5 py-1.5">
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
                                    <td className="px-1.5 py-1.5">
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
                                                placeholder="AGRUPADOR..."
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
                                                </>
                                            );
                                        })()
                                    ) : (
                                        <td colSpan={6} className="px-1 py-1.5 text-center border-l border-slate-200/60 text-slate-300 italic text-[10px]">
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
                    </tbody>
                </table>
            </div>

            {/* Footer de Resumen */}
            <div className="mt-auto p-3 border-t border-slate-200 bg-white flex justify-between items-center text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                <div className="flex gap-4">
                    <span>Partidas con metrado (vista): {cantPartidasRegistradas}</span>
                    <span>Total de registros (vista): {filteredMetrados.length}</span>
                </div>
                <div className="bg-slate-800 text-white px-3 py-1 rounded-md">
                    Control de Planilla Web v3.0
                </div>
            </div>
        </div>
    );
};
