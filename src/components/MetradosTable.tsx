import React from 'react';
import { Metrado } from '../types';
import { mockPartidas } from '../data/mockDB';

interface MetradosTableProps {
    metrados: Metrado[];
}

import { ChevronDown, ChevronUp, Hammer, Truck, Box } from 'lucide-react';

const getRecursoIcon = (tipo: string) => {
    switch (tipo) {
        case 'Mano de Obra': return <Hammer className="w-3 h-3 text-amber-500" />;
        case 'Materiales': return <Box className="w-3 h-3 text-blue-500" />;
        case 'Equipos': return <Truck className="w-3 h-3 text-green-500" />;
        default: return <Box className="w-3 h-3 text-gray-500" />;
    }
}

const MetradoRow: React.FC<{ m: Metrado }> = ({ m }) => {
    const [isApuOpen, setIsApuOpen] = React.useState(false);

    // Buscar la Partida original en la "BD" para extraerle su apu
    // En un caso real esto ya vendría amarrado desde el momento del render
    // pero como es historial mock, importaremos mockPartidas
    const partidaBase = mockPartidas.find((p: any) => p.codigo === m.codigo_partida);
    const apu = partidaBase?.apu;

    return (
        <>
            <tr className="hover:bg-blue-50/50 transition-colors whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-300 group">
                <td className="px-4 py-3 text-xs text-gray-500">
                    {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </td>
                <td className="px-4 py-3">
                    <div className="text-gray-900 font-medium">{m.frente || '-'}</div>
                    <div className="text-xs text-gray-500">{m.nivel}</div>
                </td>
                <td className="px-4 py-3 cursor-pointer" onClick={() => apu && setIsApuOpen(!isApuOpen)}>
                    <div className="flex items-center gap-2">
                        {apu && (
                            <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-gray-100">
                                {isApuOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                        )}
                        <div>
                            <div className="font-medium text-gray-800 truncate max-w-[250px]" title={m.descripcion_partida}>
                                {m.descripcion_partida}
                            </div>
                            {m.jerarquia && m.jerarquia.length > 0 && (
                                <div className="text-[9px] text-gray-400 font-medium truncate max-w-[250px] uppercase mt-0.5 leading-tight" title={m.jerarquia.join(' > ')}>
                                    <span className="text-gray-300 mr-1 font-bold">↳</span> {m.jerarquia.join(' > ')}
                                </div>
                            )}
                            <div className="text-gray-500 text-xs mt-0.5">{m.codigo_partida} {apu ? ` · S/ ${apu.costo_directo_unitario.toFixed(2)}/u` : ''}</div>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-3 text-center text-gray-600 font-medium">{m.unidad}</td>
                <td className="px-4 py-3 text-right text-gray-400">{m.cantidad !== "" ? m.cantidad : '-'}</td>
                <td className="px-4 py-3 text-right text-gray-400">{m.longitud_area !== "" ? m.longitud_area : '-'}</td>
                <td className="px-4 py-3 text-right text-gray-400">{m.ancho_empalme !== "" ? m.ancho_empalme : '-'}</td>
                <td className="px-4 py-3 text-right text-gray-400">{m.altura_gancho !== "" ? m.altura_gancho : '-'}</td>
                <td className="px-4 py-3 text-right font-medium text-blue-600 bg-blue-50/30">{m.parcial.toFixed(2)}</td>
                <td className="px-4 py-3 text-center text-gray-400">{m.nro_veces !== "" ? m.nro_veces : '1'}</td>
                <td className="px-4 py-3 text-right font-bold text-blue-800 bg-blue-50/50">{m.total.toFixed(2)}</td>
            </tr>

            {/* Accordion APU Sub-Table */}
            {isApuOpen && apu && (
                <tr>
                    <td colSpan={11} className="p-0 border-b-0">
                        <div className="bg-slate-50 px-8 py-4 border-l-4 border-l-primary shadow-inner animate-in slide-in-from-top-2">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-bold text-slate-700">Análisis de Precios Unitarios (APU)</h4>
                                <div className="text-xs text-slate-500 bg-white px-2 py-1 rounded border">Rendimiento: {apu.rendimiento_diario || '-'} {m.unidad}/día</div>
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
        </>
    );
};

export const MetradosTable: React.FC<MetradosTableProps> = ({ metrados }) => {
    return (
        <div className="glass-panel overflow-hidden rounded-2xl flex flex-col h-full">
            <div className="p-4 border-b border-gray-100 bg-white/50 backdrop-blur-md flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Historial (Sesión Actual)</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{metrados.length} registros</span>
            </div>

            <div className="overflow-x-auto flex-grow">
                <table className="w-full text-sm text-left align-middle">
                    <thead className="text-xs text-gray-600 bg-gray-50/80 uppercase whitespace-nowrap sticky top-0 backdrop-blur-md">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Hora</th>
                            <th className="px-4 py-3 font-semibold">Ubicación</th>
                            <th className="px-4 py-3 font-semibold min-w-[200px]">Partida</th>
                            <th className="px-4 py-3 font-semibold text-center">Und</th>
                            <th className="px-4 py-3 font-semibold text-right">Cant</th>
                            <th className="px-4 py-3 font-semibold text-right">Largo</th>
                            <th className="px-4 py-3 font-semibold text-right">Ancho</th>
                            <th className="px-4 py-3 font-semibold text-right">Alto</th>
                            <th className="px-4 py-3 font-semibold text-right text-blue-600">Parcial</th>
                            <th className="px-4 py-3 font-semibold text-center">Veces</th>
                            <th className="px-4 py-3 font-semibold text-right text-blue-800">Total</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {metrados.length === 0 ? (
                            <tr>
                                <td colSpan={11} className="px-4 py-12 text-center text-gray-400">
                                    <div className="flex flex-col items-center justify-center space-y-2">
                                        <span className="text-3xl">📭</span>
                                        <span>No hay metrados registrados aún.</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            metrados.map((m) => <MetradoRow key={m.id} m={m} />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
