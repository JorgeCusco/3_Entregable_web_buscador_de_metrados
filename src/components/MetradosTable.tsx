import React, { useMemo, useState } from 'react';
import { Metrado } from '../types';
import { mockPartidas } from '../data/mockDB';
import { ChevronDown, ChevronUp, Hammer, Truck, Box, Download, CloudUpload } from 'lucide-react';
import * as XLSX from 'xlsx';

interface MetradosTableProps {
    metrados: Metrado[];
}

const getRecursoIcon = (tipo: string) => {
    switch (tipo) {
        case 'Mano de Obra': return <Hammer className="w-3 h-3 text-amber-500" />;
        case 'Materiales': return <Box className="w-3 h-3 text-blue-500" />;
        case 'Equipos': return <Truck className="w-3 h-3 text-green-500" />;
        default: return <Box className="w-3 h-3 text-gray-500" />;
    }
}

// Sub-componente para el Grupo de Partida (Header + Hijos + APU)
const PartidaGroup: React.FC<{ codigo: string, items: Metrado[] }> = ({ codigo, items }) => {
    const [isApuOpen, setIsApuOpen] = useState(false);

    // Referencia base
    const baseItem = items[0];
    const partidaBase = mockPartidas.find((p: any) => p.codigo === codigo);
    const apu = partidaBase?.apu;

    // Calcular total acumulado de este grupo
    const totalGrupo = items.reduce((sum, item) => sum + item.total, 0);

    return (
        <React.Fragment>
            {/* ROW 2: Header de la Partida */}
            <tr
                className={`group transition-colors border-b ${isApuOpen ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50'}`}
            >
                {/* Columnas combinadas para el Título */}
                <td colSpan={3} className="px-4 py-2.5 cursor-pointer" onClick={() => apu && setIsApuOpen(!isApuOpen)}>
                    <div className="flex items-center gap-2">
                        {apu && (
                            <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-100/50">
                                {isApuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                        )}
                        <div>
                            <span className="font-mono text-xs text-blue-600 font-semibold mr-2">{codigo}</span>
                            <span className="font-bold text-slate-800 tracking-tight text-sm">
                                {baseItem.descripcion_partida}
                            </span>
                            {apu && <span className="text-xs text-slate-400 ml-2 font-medium">S/ {apu.costo_directo_unitario.toFixed(2)}</span>}
                        </div>
                    </div>
                </td>
                {/* Unidad y Total Acumulado */}
                <td className="px-4 py-2.5 text-center text-slate-600 font-bold text-xs">{baseItem.unidad}</td>
                <td colSpan={6} className="px-4 py-2.5 text-right text-xs text-slate-400">Total Acumulado:</td>
                <td className="px-4 py-2.5 text-right font-black text-blue-700 bg-blue-50/30 text-sm">
                    {totalGrupo.toFixed(2)}
                </td>
            </tr>

            {/* APU Accordion (si está abierto) */}
            {isApuOpen && apu && (
                <tr>
                    <td colSpan={11} className="p-0 border-b-0">
                        <div className="bg-slate-50 px-8 py-4 border-l-4 border-l-blue-500 shadow-inner animate-in slide-in-from-top-2">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-bold text-slate-700">Análisis de Precios Unitarios (APU)</h4>
                                <div className="text-xs text-slate-500 bg-white px-2 py-1 rounded border">Rendimiento: {apu.rendimiento_diario || '-'} {baseItem.unidad}/día</div>
                            </div>
                            <table className="w-full text-xs text-left bg-white rounded-lg overflow-hidden border">
                                <thead className="bg-slate-100 text-slate-600">
                                    <tr>
                                        <th className="px-3 py-2">Tipo</th>
                                        <th className="px-3 py-2 w-1/3">Descripción del Recurso</th>
                                        <th className="px-3 py-2 text-center">Und</th>
                                        <th className="px-3 py-2 text-right">Cant. Unitaria</th>
                                        <th className="px-3 py-2 text-right">Precio S/</th>
                                        <th className="px-3 py-2 text-right font-semibold">Parcial S/</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {apu.recursos.map((r: any, idx: number) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-3 py-1.5 flex items-center gap-1.5 text-slate-500">
                                                {getRecursoIcon(r.tipo)} <span className="text-[10px] uppercase font-medium">{r.tipo}</span>
                                            </td>
                                            <td className="px-3 py-1.5 font-medium text-slate-700">{r.descripcion}</td>
                                            <td className="px-3 py-1.5 text-center text-slate-500">{r.unidad}</td>
                                            <td className="px-3 py-1.5 text-right font-mono text-slate-600">{Number(r.cantidad).toFixed(4)}</td>
                                            <td className="px-3 py-1.5 text-right font-mono text-slate-600">{Number(r.precio_unitario).toFixed(2)}</td>
                                            <td className="px-3 py-1.5 text-right font-mono font-semibold text-slate-800">{Number(r.parcial).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            )}

            {/* ROWS 3+: Medidas de este Grupo */}
            {items.map((m) => (
                <tr key={m.id} className="bg-white hover:bg-slate-50/80 transition-colors whitespace-nowrap text-xs">
                    <td className="px-4 py-1.5 text-slate-400 font-mono text-[10px]">
                        {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-4 py-1.5 text-slate-500">
                        {m.frente || m.bloque || m.nivel ?
                            [m.frente, m.bloque, m.nivel].filter(Boolean).join(' - ')
                            : '-'}
                    </td>
                    <td className="px-4 py-1.5">
                        <div className="flex items-center text-slate-700 ml-6">
                            <span className="text-slate-300 mr-2">♦</span>
                            <span className="truncate max-w-[250px]" title={m.descripcion_especifica}>
                                {m.descripcion_especifica || <i className="text-slate-400">(Sin descripción específica)</i>}
                            </span>
                        </div>
                    </td>
                    <td className="px-4 py-1.5 text-center text-transparent">-</td>
                    <td className="px-4 py-1.5 text-right text-slate-600">{m.cantidad !== "" ? m.cantidad : '-'}</td>
                    <td className="px-4 py-1.5 text-right text-slate-600">{m.longitud_area !== "" ? m.longitud_area : '-'}</td>
                    <td className="px-4 py-1.5 text-right text-slate-600">{m.ancho_empalme !== "" ? m.ancho_empalme : '-'}</td>
                    <td className="px-4 py-1.5 text-right text-slate-600">{m.altura_gancho !== "" ? m.altura_gancho : '-'}</td>
                    <td className="px-4 py-1.5 text-right font-medium text-slate-700 bg-slate-50/50">{m.parcial.toFixed(2)}</td>
                    <td className="px-4 py-1.5 text-center text-slate-500">{m.nro_veces !== "" ? m.nro_veces : '1'}</td>
                    <td className="px-4 py-1.5 text-right font-semibold text-slate-800">{m.total.toFixed(2)}</td>
                </tr>
            ))}
        </React.Fragment>
    );
};

export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados }) => {

    // Lógica de agrupación anidada por WBS y luego por Partida
    const gruposWBS = useMemo(() => {
        const grupos: Record<string, { jerarquia: string[], partidas: Record<string, Metrado[]> }> = {};
        metrados.forEach(m => {
            const jerarquiaStr = m.jerarquia && m.jerarquia.length > 0 ? m.jerarquia.join(' > ') : 'SIN JERARQUÍA';
            if (!grupos[jerarquiaStr]) {
                grupos[jerarquiaStr] = {
                    jerarquia: m.jerarquia || [],
                    partidas: {}
                };
            }
            if (!grupos[jerarquiaStr].partidas[m.codigo_partida]) {
                grupos[jerarquiaStr].partidas[m.codigo_partida] = [];
            }
            grupos[jerarquiaStr].partidas[m.codigo_partida].push(m);
        });
        return grupos;
    }, [metrados]);

    const cantPartidas = new Set(metrados.map(m => m.codigo_partida)).size;

    const exportToExcel = () => {
        const rows: any[] = [];
        rows.push(["PLANILLA DE METRADOS"]);
        rows.push([]);

        const headers = ["Jerarquía WBS", "Código Partida", "Descripción de Partida", "Unidad", "Ubicación / Frente", "Descripción Específica", "Cant.", "Largo", "Ancho", "Alto", "Parcial", "Veces", "Total"];
        rows.push(headers);

        Object.entries(gruposWBS).forEach(([jerarquiaStr, grupo]) => {
            Object.entries(grupo.partidas).forEach(([codigo, items]) => {
                const baseItem = items[0];
                const totalGrupo = items.reduce((sum, item) => sum + item.total, 0);

                rows.push([
                    jerarquiaStr,
                    codigo,
                    baseItem.descripcion_partida,
                    baseItem.unidad,
                    "", "", "", "", "", "", "", "",
                    totalGrupo
                ]);

                items.forEach((m) => {
                    const ubicacion = [m.frente, m.bloque, m.nivel].filter(Boolean).join(' - ');
                    rows.push([
                        "",
                        "",
                        "",
                        "",
                        ubicacion,
                        m.descripcion_especifica,
                        m.cantidad,
                        m.longitud_area,
                        m.ancho_empalme,
                        m.altura_gancho,
                        m.parcial,
                        m.nro_veces,
                        m.total
                    ]);
                });
            });
        });

        const ws = XLSX.utils.aoa_to_sheet(rows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Metrados");
        XLSX.writeFile(wb, "Planilla_Metrados.xlsx");
    };

    return (
        <div className="glass-panel overflow-hidden rounded-2xl flex flex-col h-full border border-slate-200 shadow-sm">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-lg tracking-tight">Planilla de Metrados Dinámica</h3>
                <div className="flex items-center gap-3">
                    <button onClick={exportToExcel} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm">
                        <Download size={14} /> Exportar Excel
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm">
                        <CloudUpload size={14} /> Enviar a BD
                    </button>
                    <div className="h-6 w-px bg-slate-300 mx-2"></div>
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">{cantPartidas} Partidas</span>
                    <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full">{metrados.length} Registros Totales</span>
                </div>
            </div>

            <div className="overflow-x-auto flex-grow">
                <table className="w-full text-sm text-left align-middle border-collapse">
                    <thead className="text-xs text-slate-500 bg-white uppercase whitespace-nowrap sticky top-0 shadow-sm z-10">
                        <tr>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200">Hora</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200">Ubicación</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 min-w-[250px]">Partida / Descripción Específica</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-center">Und</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right">Cant</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right">Largo</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right">Ancho</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right">Alto</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right text-slate-700 bg-slate-50/50">Parcial</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-center">Veces</th>
                            <th className="px-4 py-3 font-bold border-b-2 border-slate-200 text-right text-slate-800">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {metrados.length === 0 ? (
                            <tr>
                                <td colSpan={11} className="px-4 py-16 text-center text-slate-400">
                                    <div className="flex flex-col items-center justify-center space-y-3">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-2">📊</div>
                                        <span className="text-lg font-medium text-slate-600 tracking-tight">Planilla vacía</span>
                                        <span className="text-sm">Agrega metrados desde el panel izquierdo para comenzar a generar estructuras.</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            Object.entries(gruposWBS).map(([jerarquiaStr, grupo]) => (
                                <React.Fragment key={jerarquiaStr}>
                                    {grupo.jerarquia.length > 0 && (
                                        <tr className="bg-slate-50 border-b border-t border-slate-200">
                                            <td colSpan={11} className="px-4 py-2 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                                {jerarquiaStr}
                                            </td>
                                        </tr>
                                    )}
                                    {Object.entries(grupo.partidas).map(([codigo, items]) => (
                                        <PartidaGroup key={`${jerarquiaStr}-${codigo}`} codigo={codigo} items={items} />
                                    ))}
                                </React.Fragment>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
