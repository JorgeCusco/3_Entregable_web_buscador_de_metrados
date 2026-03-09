import React, { useState, useMemo } from 'react';
import type { Metrado } from '../types';
import { Search, Filter, Tag } from 'lucide-react';
import { RenderModificacionBadge } from './MetradosForm';

interface DatabaseViewerProps {
    metrados: Metrado[];
    onUpdate: (id: string, field: keyof Metrado, value: any) => void;
    onDelete: (id: string) => void;
}

export const DatabaseViewer: React.FC<DatabaseViewerProps> = ({ metrados }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterFrente, setFilterFrente] = useState('Todos');
    const [filterBloque, setFilterBloque] = useState('Todos');

    // Extraer opciones únicas para filtros
    const frentes = useMemo(() => ['Todos', ...new Set(metrados.map(m => m.frente).filter(Boolean))], [metrados]);
    const bloques = useMemo(() => ['Todos', ...new Set(metrados.map(m => m.bloque).filter(Boolean))], [metrados]);

    const filteredMetrados = useMemo(() => {
        return metrados.filter(m => {
            const matchesSearch =
                m.descripcion_partida.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (m.detalle || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                (m.elemento || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                m.codigo_partida.includes(searchTerm);

            const matchesFrente = filterFrente === 'Todos' || m.frente === filterFrente;
            const matchesBloque = filterBloque === 'Todos' || m.bloque === filterBloque;

            return matchesSearch && matchesFrente && matchesBloque;
        });
    }, [metrados, searchTerm, filterFrente, filterBloque]);

    const formatNumber = (num: number | "" | undefined) => {
        if (num === "" || num === undefined) return "-";
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    return (
        <div className="flex flex-col h-full bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header / Filtros */}
            <div className="p-4 bg-white border-b border-slate-200">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Buscar por partida, detalle o elemento..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                            <Tag className="w-3.5 h-3.5 text-slate-400" />
                            <select
                                value={filterFrente}
                                onChange={(e) => setFilterFrente(e.target.value)}
                                className="bg-transparent border-none text-[12px] font-bold text-slate-600 focus:ring-0 outline-none cursor-pointer"
                            >
                                {frentes.map(f => <option key={f} value={f}>{f === 'Todos' ? 'Frente: Todos' : `Frente: ${f}`}</option>)}
                            </select>
                        </div>

                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                            <Filter className="w-3.5 h-3.5 text-slate-400" />
                            <select
                                value={filterBloque}
                                onChange={(e) => setFilterBloque(e.target.value)}
                                className="bg-transparent border-none text-[12px] font-bold text-slate-600 focus:ring-0 outline-none cursor-pointer"
                            >
                                {bloques.map(b => <option key={b} value={b}>{b === 'Todos' ? 'Bloque: Todos' : `Bloque: ${b}`}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de Base de Datos */}
            <div className="flex-grow overflow-auto">
                <table className="w-full border-collapse text-left">
                    <thead className="sticky top-0 z-10">
                        <tr className="bg-slate-800 text-white text-[10px] uppercase tracking-wider font-bold">
                            <th className="px-4 py-3 border-b border-slate-700 w-24">Fecha</th>
                            <th className="px-4 py-3 border-b border-slate-700 w-32">Ubicación</th>
                            <th className="px-4 py-3 border-b border-slate-700">Partida / WBS</th>
                            <th className="px-4 py-3 border-b border-slate-700">Elemento / Detalle</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-20">Cant.</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-20">Largo</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-20">Ancho</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-20">Alto</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-24">Parcial</th>
                            <th className="px-4 py-3 border-b border-slate-700 text-center w-16">UT</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {filteredMetrados.length > 0 ? (
                            filteredMetrados.map((m) => (
                                <tr key={m.id} className="hover:bg-blue-50/40 border-b border-slate-100 transition-colors group">
                                    <td className="px-4 py-3 text-[11px] font-mono text-slate-500">{m.fecha}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-700">{m.frente} • {m.bloque}</span>
                                            <span className="text-[10px] text-slate-400 uppercase font-bold">{m.nivel}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-blue-600 font-mono">{m.codigo_partida}</span>
                                            <span className="text-[11px] text-slate-800 font-semibold truncate max-w-[200px]">{m.descripcion_partida}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-col gap-0.5">
                                            <div className="flex items-center gap-2">
                                                {RenderModificacionBadge(m.modificacion)}
                                                <span className="text-[11px] font-black text-slate-700 uppercase">{m.elemento || "-"}</span>
                                            </div>
                                            <span className="text-[11px] text-slate-500 italic font-medium leading-tight">{m.detalle}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-center text-[12px] font-mono text-slate-600">{m.cantidad || "-"}</td>
                                    <td className="px-4 py-3 text-center text-[12px] font-mono text-slate-600">{formatNumber(m.longitud_area as number)}</td>
                                    <td className="px-4 py-3 text-center text-[12px] font-mono text-slate-600">{formatNumber(m.ancho_empalme as number)}</td>
                                    <td className="px-4 py-3 text-center text-[12px] font-mono text-slate-600">{formatNumber(m.altura_gancho as number)}</td>
                                    <td className="px-4 py-3 text-center text-[13px] font-black text-blue-700 bg-blue-50/30 font-mono">
                                        {formatNumber(m.total)}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <span className="text-[9px] font-black text-slate-400 uppercase bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{m.unidad}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={10} className="px-4 py-20 text-center">
                                    <div className="flex flex-col items-center gap-2 text-slate-400">
                                        <Search className="w-8 h-8 opacity-20" />
                                        <p className="text-sm font-medium">No se encontraron registros que coincidan con los filtros.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer Estadístico */}
            <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center px-6">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Mostrando {filteredMetrados.length} registros de {metrados.length} totales
                </span>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400">SUMATORIA VISIBLE:</span>
                        <span className="text-sm font-black text-blue-700 font-mono">
                            {formatNumber(filteredMetrados.reduce((acc, curr) => acc + curr.total, 0))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
