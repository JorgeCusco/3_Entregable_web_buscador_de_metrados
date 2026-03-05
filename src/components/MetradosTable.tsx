import React, { useMemo } from 'react';
import { Metrado, Partida } from '../types';
import { Download, Trash2 } from 'lucide-react';
import * as XLSX from 'xlsx';
import { mockPartidas } from '../data/mockDB';

interface MetradosTableProps {
    metrados: Metrado[];
    onUpdate?: (id: string, field: keyof Metrado, value: any) => void;
    onDelete?: (id: string) => void;
}

/**
 * Función que genera el array secuencial para el Data Grid.
 */
const getHierarchicalRows = (activeMetrados: Metrado[]): any[] => {
    // 1. Identificar Partidas Hoja activas
    const activePartidaCodes = new Set(activeMetrados.map(m => m.codigo_partida));
    const activeIds = new Set<string>();

    // 2. Algoritmo de Rescate de Rama (Bottom-Up)
    mockPartidas.forEach((node: Partida) => {
        if (!node.es_titulo && activePartidaCodes.has(node.codigo)) {
            activeIds.add(node.codigo);

            // Escalar recursivamente hacia arriba
            let parentId = node.parent_id;
            while (parentId) {
                if (activeIds.has(parentId)) break; // Ya rescatado
                activeIds.add(parentId);
                const parent = mockPartidas.find(p => p.codigo === parentId);
                parentId = parent?.parent_id;
            }
        }
    });

    const finalRows: any[] = [];

    // 3. Generar filas solo para los nodos rescatados
    mockPartidas.forEach((node: Partida) => {
        if (!activeIds.has(node.codigo)) return;

        // Agregar el nodo (Título o Partida Base)
        finalRows.push({ ...node, is_template: true });

        // Si es partida, inyectar sus metrados
        if (!node.es_titulo) {
            const relatedMetrados = activeMetrados.filter(m => m.codigo_partida === node.codigo);
            relatedMetrados.sort((a, b) => a.created_at - b.created_at);

            relatedMetrados.forEach(m => {
                finalRows.push({ ...m, is_template: false });
            });
        }
    });

    return finalRows;
};

const getIndentLevel = (codigo: string): number => {
    if (!codigo) return 0;
    return codigo.split('.').length - 1;
};

export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados, onUpdate, onDelete }) => {
    const rows = useMemo(() => getHierarchicalRows(metrados), [metrados]);

    // Calcular totales por partida para las filas de cabecera
    const partidaTotals = useMemo(() => {
        const totals: Record<string, number> = {};
        metrados.forEach(m => {
            totals[m.codigo_partida] = (totals[m.codigo_partida] || 0) + m.total;
        });
        return totals;
    }, [metrados]);

    // Calcular totales de títulos (Roll-up recursivo)
    const titleTotals = useMemo(() => {
        const totals: Record<string, number> = {};

        // Solo iteramos por los títulos rescatados en las filas actuales
        rows.filter(r => r.is_template && r.es_titulo).forEach(title => {
            let sum = 0;
            // Sumar todas las partidas que cuelgan de este código (prefijo)
            Object.keys(partidaTotals).forEach(pCode => {
                if (pCode.startsWith(title.codigo + ".")) {
                    sum += partidaTotals[pCode];
                }
            });
            totals[title.codigo] = sum;
        });

        return totals;
    }, [rows, partidaTotals]);

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    const cantPartidasRegistradas = new Set(metrados.map(m => m.codigo_partida)).size;

    const exportToExcel = () => {
        const excelRows: any[] = [
            ["PLANILLA DE METRADOS - BELEMPAMPA"],
            [],
            ["ITEM", "DESCRIPCIÓN", "UND", "FRENTE", "BLOQUE", "NIVEL", "CANT", "LARGO", "ANCHO", "ALTO", "PARCIAL", "VECES", "TOTAL"]
        ];

        rows.forEach(r => {
            if (r.is_template) {
                if (r.es_titulo) {
                    // Jerarquía WBS - Roll-up
                    const totalRama = titleTotals[r.codigo] || 0;
                    excelRows.push([r.codigo, r.descripcion, "", "", "", "", "", "", "", "", totalRama.toFixed(2), "", ""]);
                } else {
                    // Cabecera de Partida
                    const total = partidaTotals[r.codigo] || 0;
                    excelRows.push([r.codigo, r.descripcion, r.unidad, "", "", "", "", "", "", "", "", "", total.toFixed(2)]);
                }
            } else {
                // Registro de metrado individual
                excelRows.push([
                    "",
                    r.descripcion_especifica,
                    "",
                    r.frente,
                    r.bloque,
                    r.nivel,
                    r.cantidad,
                    r.longitud_area,
                    r.ancho_empalme,
                    r.altura_gancho,
                    formatNumber(r.parcial),
                    r.nro_veces,
                    formatNumber(r.total)
                ]);
            }
        });

        const ws = XLSX.utils.aoa_to_sheet(excelRows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Planilla");
        XLSX.writeFile(wb, `Planilla_Metrados_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    return (
        <div className="glass-panel overflow-hidden rounded-2xl flex flex-col h-full border border-slate-200 shadow-sm bg-white">
            {/* Header de la Tabla */}
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
                <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg tracking-tight">Planilla de Metrados Dinámica</h3>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-0.5">Vista Jerárquica Secuencial</p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm cursor-pointer">
                        <Download size={14} /> Exportar Excel
                    </button>
                </div>
            </div>

            {/* Contenedor con Scroll */}
            <div className="overflow-auto flex-grow max-h-[calc(100vh-250px)] scrollbar-thin scrollbar-thumb-slate-200">
                <table className="w-full text-[13px] text-left align-middle border-collapse table-fixed">
                    <thead className="text-[11px] text-slate-400 bg-white uppercase whitespace-nowrap sticky top-0 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] z-10 font-bold">
                        <tr className="border-b border-slate-100">
                            <th className="w-[90px] min-w-[90px] px-4 py-3">Item / Código</th>
                            <th className="px-4 py-3">Descripción / Partida / Metrado</th>
                            <th className="w-[60px] min-w-[60px] px-4 py-3 text-center">Und</th>
                            <th className="w-[80px] min-w-[80px] px-4 py-3 text-right">Cant</th>
                            <th className="w-[80px] min-w-[80px] px-4 py-3 text-right">Largo</th>
                            <th className="w-[80px] min-w-[80px] px-4 py-3 text-right">Ancho</th>
                            <th className="w-[80px] min-w-[80px] px-4 py-3 text-right">Alto</th>
                            <th className="w-[100px] min-w-[100px] px-4 py-3 text-right">Parcial</th>
                            <th className="w-[70px] min-w-[70px] px-4 py-3 text-center">Veces</th>
                            <th className="w-[110px] min-w-[110px] px-4 py-3 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {rows.map((r: any, idx: number) => {
                            // CASO 1: Es un Título WBS (Nodo Padre)
                            if (r.is_template && r.es_titulo) {
                                return (
                                    <tr key={`title-${r.codigo}-${idx}`} className="bg-slate-800 text-white font-bold border-b border-slate-700">
                                        <td className="w-[90px] min-w-[90px] px-3 py-1 font-mono text-[10px] tracking-wider text-left">
                                            {r.codigo}
                                        </td>
                                        <td colSpan={9} className="px-3 py-1 uppercase text-[10px] tracking-widest bg-slate-800/50"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 1 + 0.75}rem` }}>
                                            {r.descripcion}
                                        </td>
                                    </tr>
                                );
                            }

                            // CASO 2: Es una Cabecera de Partida (Nodo Hoja del Presupuesto)
                            if (r.is_template && !r.es_titulo) {
                                const total = partidaTotals[r.codigo] || 0;
                                const hasMetrados = total > 0;
                                return (
                                    <tr key={`header-${r.codigo}-${idx}`} className="bg-slate-50/50 border-b border-slate-200 font-semibold group transition-colors">
                                        <td className="w-[90px] min-w-[90px] px-3 py-1 text-left">
                                            <span className="font-mono text-[10px] text-blue-600 bg-blue-100/50 px-1 py-0.5 rounded">
                                                {r.codigo}
                                            </span>
                                        </td>
                                        <td className="px-3 py-1 text-slate-800 text-[12px]"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 1 + 0.75}rem` }}>
                                            {r.descripcion}
                                        </td>
                                        <td className="w-[60px] min-w-[60px] px-3 py-1 text-center text-slate-500 font-bold text-[11px]">{r.unidad}</td>
                                        <td colSpan={6} className="px-3 py-1 text-right text-[9px] text-slate-400 uppercase font-bold tracking-tighter">
                                            Total Acumulado
                                        </td>
                                        <td className="w-[110px] min-w-[110px] px-3 py-1 text-right text-blue-700 font-black text-[13px]">
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
                                <tr key={`rec-${r.id}-${idx}`} className="hover:bg-blue-50/30 border-b border-slate-100 group transition-all duration-200">
                                    <td className="w-[90px] min-w-[90px] px-1 py-0.5">
                                        <div className="flex items-center gap-0.5" style={{ marginLeft: '27px' }}>
                                            <div className="w-1 min-w-[4px] h-1 rounded-full bg-slate-300 shrink-0"></div>
                                            <input type="text" className="metrado-input text-[8px] text-slate-400 font-semibold uppercase bg-slate-100 px-0.5 py-0 rounded shrink-0 border-none focus:ring-0 w-[30px] text-center"
                                                value={r.frente} onChange={(e) => onUpdate?.(r.id, 'frente', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                            <span className="text-slate-300 text-[7px]">•</span>
                                            <input type="text" className="metrado-input text-[8px] text-slate-400 font-semibold uppercase bg-slate-100 px-0.5 py-0 rounded shrink-0 border-none focus:ring-0 w-[30px] text-center"
                                                value={r.bloque} onChange={(e) => onUpdate?.(r.id, 'bloque', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                            <span className="text-slate-300 text-[7px]">•</span>
                                            <input type="text" className="metrado-input text-[8px] text-slate-400 font-semibold uppercase bg-slate-100 px-0.5 py-0 rounded shrink-0 border-none focus:ring-0 w-[30px] text-center"
                                                value={r.nivel} onChange={(e) => onUpdate?.(r.id, 'nivel', e.target.value)}
                                                onFocus={(e) => e.target.select()} />
                                        </div>
                                    </td>
                                    <td className="px-3 py-0.5" style={{ paddingLeft: '55px' }}>
                                        <input
                                            type="text"
                                            className="metrado-input w-full bg-transparent border-none p-0 focus:ring-0 text-slate-700 text-[12px] font-medium placeholder:text-slate-300 italic"
                                            value={r.descripcion_especifica}
                                            placeholder="Ej. Eje A-B..."
                                            onChange={(e) => onUpdate?.(r.id, 'descripcion_especifica', e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(e)}
                                        />
                                    </td>
                                    <td className="px-3 py-0.5 text-center text-slate-300">-</td>

                                    {/* Dimensiones Editables */}
                                    <td className="px-1 py-0.5 text-center">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[12px]"
                                            value={r.cantidad} onChange={(e) => onUpdate?.(r.id, 'cantidad', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-0.5 text-center">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[12px]"
                                            value={r.longitud_area} onChange={(e) => onUpdate?.(r.id, 'longitud_area', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-0.5 text-center">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[12px]"
                                            value={r.ancho_empalme} onChange={(e) => onUpdate?.(r.id, 'ancho_empalme', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>
                                    <td className="px-1 py-0.5 text-center">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[12px]"
                                            value={r.altura_gancho} onChange={(e) => onUpdate?.(r.id, 'altura_gancho', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>

                                    <td className="px-3 py-0.5 text-right font-semibold text-slate-500 text-[12px]">{formatNumber(r.parcial)}</td>

                                    <td className="px-1 py-0.5 text-center">
                                        <input type="text" className="metrado-input w-full text-center bg-transparent border-none p-0 focus:ring-0 text-slate-500 font-bold text-[12px]"
                                            value={r.nro_veces} onChange={(e) => onUpdate?.(r.id, 'nro_veces', e.target.value)}
                                            onFocus={(e) => e.target.select()}
                                            onKeyDown={(e) => handleKeyDown(e)} />
                                    </td>

                                    {/* Total + Acciones */}
                                    <td className="px-3 py-0.5 text-right font-bold text-slate-800 relative text-[13px]">
                                        <div className="flex items-center justify-end gap-3">
                                            <span>{r.total.toFixed(2)}</span>
                                            <button
                                                onClick={() => onDelete?.(r.id)}
                                                className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all p-0.5 hover:bg-red-50 rounded-md"
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
            <div className="p-3 border-t border-slate-200 bg-white flex justify-between items-center text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                <div className="flex gap-4">
                    <span>Partidas con metrado: {cantPartidasRegistradas}</span>
                    <span>Total de líneas de registro: {metrados.length}</span>
                </div>
                <div className="bg-slate-800 text-white px-3 py-1 rounded-md">
                    Control de Planilla Web v3.0
                </div>
            </div>
        </div>
    );
};
