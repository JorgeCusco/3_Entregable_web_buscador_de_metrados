import React, { useMemo } from 'react';
import type { Metrado, Partida } from '../types';
import { Download, Trash2, Loader2, Eraser } from 'lucide-react';
import { mockPartidas } from '../data/mockDB_1';
import { mockPartidasContingencia } from '../data/mockDB_contingencia';
import { RenderModificacionBadge } from './MetradosForm';
import { useMetradosStore } from '../store/useMetradosStore';
import { SPECIALTY_RULES } from '../data/specialtyConfig';

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

    // 3. Segunda pasada para construir el array lineal final
    partidasCatalogo.forEach((node: Partida) => {
        const nodeId = node.id || node.codigo.trim().toUpperCase();
        if (!activeIds.has(nodeId)) return;

        // Agregar fila de plantilla (Cabecera de Jerarquía o de Partida)
        finalRows.push({ ...node, is_template: true });

        // Filtrar metrados que pertenecen exactamente a este nodo
        const relatedMetrados = activeMetrados
            .filter(m => {
                const targetId = getMetradoTargetId(m);
                // Matches exact UUID
                if (targetId === node.id) return true;
                // Matches exact Custom UUID
                if (m.custom_partida_id && m.custom_partida_id === node.id) return true;
                // Fallback a código SI el metrado no tiene UUIDs asignados (legacy data)
                if (!m.custom_partida_id && !m.partida_id) {
                    return m.codigo_partida.trim().toUpperCase() === node.codigo.trim().toUpperCase();
                }
                return false;
            })
            .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

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
                        descripcion: m.elemento,
                        codigo_partida: node.codigo,
                        id: `virtual-${m.id}-${m.elemento}`,
                        parcial: 0,
                        total: 0
                    });
                    lastElemento = m.elemento;
                } else if (!m.elemento && lastElemento !== null) {
                    lastElemento = null;
                }
                
                // Agregar el registro real
                finalRows.push({ ...m, is_template: false });
            });
        }
    });

    return finalRows;
};


export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados, onUpdate, onGroupUpdate, onDelete, proyecto = 'hospital', especialidadSeleccionada = 'TODAS', onEspecialidadChange, isSpecialtyLocked }) => {
    const { customPartidas } = useMetradosStore();

    // Seleccionar el catálogo de partidas correcto según el proyecto y sumarle las personalizadas
    const catalogoActivo = useMemo(() => {
        const base = proyecto === 'hospital' ? mockPartidas : mockPartidasContingencia;
        return [...base, ...customPartidas];
    }, [proyecto, customPartidas]);

    const [filterAuthor, setFilterAuthor] = React.useState('TODOS');
    const [filterDate, setFilterDate] = React.useState('');

    // Lógica compartida para saber si un metrado pertenece a una especialidad
    const isMetradoOfSpecialty = (m: Metrado, specialtyId: string, rule: any) => {
        if (m.custom_partida_id) {
            const customP = catalogoActivo.find(p => p.id === m.custom_partida_id);
            if (customP && customP.especialidad && customP.especialidad !== 'TODAS') {
                return customP.especialidad === specialtyId;
            }
        }
        return rule.ranges.some((prefix: string) => m.codigo_partida.startsWith(prefix));
    };

    // Extraer todos los autores únicos presentes en la vista actual (filtrados por especialidad)
    const availableAuthors = useMemo(() => {
        let result = metrados;
        if (especialidadSeleccionada !== 'TODAS') {
            const rule = SPECIALTY_RULES.find(r => r.id === especialidadSeleccionada);
            if (rule) {
                result = result.filter(m => isMetradoOfSpecialty(m, especialidadSeleccionada, rule));
            }
        }
        const authors = new Set(result.map(m => m.autor_usuario).filter(Boolean));
        return Array.from(authors).sort();
    }, [metrados, especialidadSeleccionada, catalogoActivo]);

    // Filtrar metrados por especialidad dinámica, autor y fecha
    const filteredMetrados = useMemo(() => {
        let result = metrados;

        if (especialidadSeleccionada !== 'TODAS') {
            const rule = SPECIALTY_RULES.find(r => r.id === especialidadSeleccionada);
            if (rule) {
                result = result.filter(m => isMetradoOfSpecialty(m, especialidadSeleccionada, rule));
            }
        }
        
        if (filterAuthor !== 'TODOS') {
            result = result.filter(m => m.autor_usuario === filterAuthor);
        }

        if (filterDate) {
            result = result.filter(m => m.fecha === filterDate);
        }

        return result;
    }, [metrados, especialidadSeleccionada, filterAuthor, filterDate, catalogoActivo]);

    const rows = useMemo(() => getHierarchicalRows(filteredMetrados, catalogoActivo), [filteredMetrados, catalogoActivo]);
    const [isExporting, setIsExporting] = React.useState(false);

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
            
            let apiUrl = import.meta.env.VITE_API_URL || '';
            if (!apiUrl) {
                apiUrl = `http://${window.location.hostname}:3001`;
            }
            if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1);

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
            const ds = new Date().toISOString().split('T')[0];
            a.download = `Metrados_V5_NUBE_${ds}.xlsx`;
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
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
                <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg tracking-tight">Planilla de Metrados Dinámica</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1">
                        {/* Filtro Especialidad */}
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Especialidad:</span>
                            <select
                                value={especialidadSeleccionada}
                                onChange={(e) => {
                                    onEspecialidadChange?.(e.target.value);
                                    setFilterAuthor('TODOS'); // Reiniciar filtro de autor al cambiar especialidad
                                }}
                                disabled={isSpecialtyLocked}
                                className={`text-[9px] font-bold uppercase border border-slate-200 rounded px-1.5 py-0.5 focus:ring-1 outline-none transition-colors ${
                                    isSpecialtyLocked 
                                    ? 'bg-slate-50 text-slate-400 cursor-not-allowed opacity-80' 
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer focus:ring-blue-500/30'
                                }`}
                            >
                                {SPECIALTY_RULES.map(rule => (
                                    <option key={rule.id} value={rule.id}>{rule.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro Autor */}
                        <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Autor:</span>
                            <select
                                value={filterAuthor}
                                onChange={(e) => setFilterAuthor(e.target.value)}
                                className="text-[9px] font-bold uppercase bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 focus:ring-1 focus:ring-blue-500/30 text-slate-700 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
                            >
                                <option value="TODOS">TODOS</option>
                                {availableAuthors.map(author => (
                                    <option key={author} value={author}>{author}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro Fecha */}
                        <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Fecha:</span>
                            <div className="relative flex items-center">
                                <input
                                    type="date"
                                    value={filterDate}
                                    onChange={(e) => setFilterDate(e.target.value)}
                                    className="text-[9px] font-bold uppercase bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 focus:ring-1 focus:ring-blue-500/30 text-slate-700 outline-none cursor-pointer hover:bg-slate-200 transition-colors"
                                />
                                {filterDate && (
                                    <button 
                                        onClick={() => setFilterDate('')}
                                        className="absolute -right-5 w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white transition-colors text-[8px]"
                                        title="Limpiar fecha"
                                    >✕</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
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
                <table className="w-full text-[13px] text-left align-middle border-collapse table-fixed">
                    <thead className="text-[11px] text-slate-400 bg-white uppercase whitespace-nowrap sticky top-0 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] z-10 font-bold">
                        <tr className="border-b border-slate-100">
                            <th className="w-[85px] min-w-[85px] max-w-[85px] px-1.5 py-3 text-center overflow-hidden">Fecha</th>
                            <th className="w-[80px] min-w-[80px] px-1.5 py-3 text-left">Item / Código</th>
                            <th className="px-2 py-3">Descripción / Partida / Metrado</th>
                            <th className="w-[45px] min-w-[45px] px-1 py-3 text-center">Und</th>
                            <th className="w-[60px] min-w-[60px] px-1 py-3 text-right text-[10px] border-l border-slate-200">CANT.</th>
                            <th className="w-[80px] min-w-[80px] px-1 py-3 text-right text-[10px] border-l border-slate-200">LONG./AREA</th>
                            <th className="w-[70px] min-w-[70px] px-1 py-3 text-right text-[10px] border-l border-slate-200">ANCHO</th>
                            <th className="w-[70px] min-w-[70px] px-1 py-3 text-right text-[10px] border-l border-slate-200">ALT./GAN.</th>
                            <th className="w-[80px] min-w-[80px] px-2 py-3 text-right text-[10px] border-l border-slate-200">Parcial</th>
                            <th className="w-[50px] min-w-[50px] px-1 py-3 text-center text-[10px] border-l border-slate-200">Veces</th>
                            <th className="w-[70px] min-w-[70px] px-1 py-3 text-center text-[10px] border-l border-slate-200">AUTOR</th>
                            <th className="w-[85px] min-w-[85px] px-2 py-3 text-right text-[10px] border-l border-slate-200">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {rows.map((r: any) => {
                            // CASO 1: Es un Título WBS (Nodo Padre)
                            if (r.is_template && r.es_titulo) {
                                return (
                                    <tr key={`title-${r.codigo}`} className="bg-slate-800 text-white font-bold border-b border-slate-700">
                                        <td className="w-[85px] min-w-[85px] max-w-[85px] px-2 py-1 text-center font-mono text-[9px] text-slate-400 overflow-hidden"></td>
                                        <td className="w-[80px] min-w-[80px] px-2 py-1 font-mono text-[10px] tracking-wider text-left">
                                            {r.codigo}
                                        </td>
                                        <td colSpan={10} className="px-3 py-1 uppercase text-[10px] tracking-widest bg-slate-800/50"
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
                                        <td className="w-[85px] min-w-[85px] max-w-[85px] px-2 py-1.5 text-center overflow-hidden"></td>
                                        <td className="w-[80px] min-w-[80px] px-2 py-1.5 text-left"></td>
                                        <td className="px-2 py-1.5" colSpan={10} style={{ paddingLeft: `${getIndentLevel(r.codigo_partida) * 0.5 + 0.75}rem` }}>
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
                                const total = partidaTotals[r.codigo] || 0;
                                const hasMetrados = total > 0;

                                return (
                                    <tr key={`header-${r.codigo}`} className={`${hasMetrados ? 'bg-blue-50/80' : 'bg-slate-50/30'} border-b border-slate-200 font-semibold group transition-colors`}>
                                        <td className="w-[85px] min-w-[85px] max-w-[85px] px-2 py-1 text-center overflow-hidden"></td>
                                        <td className="w-[80px] min-w-[80px] px-2 py-1 text-left" style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.5 + 0.25}rem` }}>
                                            <span className="font-mono text-[10px] text-blue-600 bg-blue-100/50 px-1 py-0.5 rounded">
                                                {r.codigo}
                                            </span>
                                        </td>
                                        <td className="px-2 py-1 flex items-center gap-2"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 0.5 + 0.25}rem` }}>
                                            {RenderModificacionBadge(r.modificacion)}
                                            <span className="text-slate-800 text-[11px] leading-tight">{r.descripcion}</span>
                                        </td>
                                        <td className="w-[45px] min-w-[45px] px-2 py-1 text-center text-slate-500 font-bold text-[10px]">{r.unidad}</td>
                                        <td colSpan={7} className="px-1 py-1 border-l border-slate-200/60"></td>
                                        <td className="w-[85px] min-w-[85px] px-2 py-1 text-right text-blue-700 font-black text-[12px] border-l border-slate-200/60">
                                            {hasMetrados ? formatNumber(total) : '-'}
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
                                    <td className="w-[85px] min-w-[85px] max-w-[85px] px-1 py-1.5 text-center overflow-hidden">
                                        <input type="date" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-400 font-bold text-[9px] uppercase tracking-tighter"
                                            value={r.fecha} onChange={(e) => onUpdate?.(r.id, 'fecha', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            title={r.fecha} />
                                    </td>
                                    <td className="w-[80px] min-w-[80px] px-0.5 py-1.5">
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
                                    <td className="px-2 py-1.5">
                                        <div className="flex items-center gap-1.5 w-full">
                                            <input
                                                type="text"
                                                className="metrado-input w-14 bg-slate-200/90 border border-slate-300 px-1 py-0.5 rounded text-slate-500 text-[9px] font-black uppercase shrink-0 text-center shadow-inner cursor-not-allowed opacity-80"
                                                value={r.cuadrilla || ''}
                                                placeholder="CDLLA"
                                                title={`Personal asignado: ${r.obrero_nombre || "Ninguno"}. La edición se hace desde el panel de ingreso.`}
                                                readOnly
                                            />
                                            {r.elemento && <span className="text-blue-400 font-black text-[12px] shrink-0">↳</span>}
                                            <input
                                                type="text"
                                                className="metrado-input w-24 bg-blue-50/50 border border-blue-100 px-1.5 py-0.5 rounded focus:ring-1 focus:ring-blue-500/30 text-blue-800 text-[10px] font-bold uppercase shrink-0"
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

                                    {/* Dimensiones Editables */}
                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                            value={r.cantidad} onChange={(e) => onUpdate?.(r.id, 'cantidad', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                            value={r.longitud_area} onChange={(e) => onUpdate?.(r.id, 'longitud_area', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                            value={r.ancho_empalme} onChange={(e) => onUpdate?.(r.id, 'ancho_empalme', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[11px]"
                                            value={r.altura_gancho} onChange={(e) => onUpdate?.(r.id, 'altura_gancho', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>

                                    <td className="px-2 py-1.5 text-right font-semibold text-slate-500 text-[11px] border-l border-slate-200/60">{formatNumber(r.parcial)}</td>

                                    <td className="px-1 py-1.5 text-center border-l border-slate-200/60">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-500 font-bold text-[11px]"
                                            value={r.nro_veces} onChange={(e) => onUpdate?.(r.id, 'nro_veces', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>

                                    <td className="px-1 py-1.5 text-center text-[9px] font-bold text-slate-400 truncate max-w-[70px] border-l border-slate-200/60" title={r.autor_usuario}>
                                        {r.autor_usuario ? r.autor_usuario.split(' ')[0] : '-'}
                                    </td>

                                    {/* Total + Acciones */}
                                    <td className="w-[85px] min-w-[85px] px-2 py-1.5 text-right font-bold text-slate-800 relative text-[11px] border-l border-slate-200/60">
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
