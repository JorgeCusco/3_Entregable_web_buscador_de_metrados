import React from 'react';
import { SearchCombobox } from './ui/SearchCombobox';
import { Select } from './ui/Select';
import type { Partida } from '../types';
import { isAcero } from '../hooks/useMetradosForm';
import { mockPartidas } from '../data/mockDB';
import { Save } from 'lucide-react';

interface MetradosFormProps {
    state: any;
    actions: any;
    onGuardar: () => void;
}

export const RenderModificacionBadge = (modificacionStr?: string) => {
    if (!modificacionStr) {
        return (
            <div className="w-[10px] h-[10px] rounded-full bg-sky-200 shadow-sm border border-sky-300 shrink-0" title="Sin Modificación" />
        );
    }

    const tags = modificacionStr.split('-');

    return (
        <div className="flex items-center gap-1 shrink-0">
            {tags.map((tag, i) => {
                let colorClass = "bg-slate-200 border-slate-300";
                if (tag.startsWith('DD')) colorClass = "bg-blue-500 border-blue-600";
                if (tag.startsWith('PN')) colorClass = "bg-green-500 border-green-600";
                if (tag.startsWith('MM')) colorClass = "bg-red-500 border-red-600";

                return (
                    <div key={i} className={`w-[10px] h-[10px] rounded-full border shadow-sm ${colorClass}`} title={tag} />
                );
            })}
        </div>
    );
};

export const MetradosForm: React.FC<MetradosFormProps> = ({ state, actions, onGuardar }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>, nextId: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextId === 'submit') {
                if (state.partidaSeleccionada && state.total > 0) onGuardar();
            } else {
                const nextEl = document.getElementById(nextId) as HTMLInputElement;
                if (nextEl) {
                    nextEl.focus();
                    if (nextEl.select) nextEl.select();
                }
            }
        }
    };

    return (
        <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-3">
                <h2 className="text-lg font-bold text-gray-800 tracking-tight">Registro de Metrados</h2>
                <div className="flex items-center gap-3">
                    <input
                        type="date"
                        value={state.fecha}
                        onChange={e => actions.setFecha(e.target.value)}
                        className="text-[11px] font-mono font-medium text-slate-500 bg-transparent border-none p-0 focus:ring-0 cursor-pointer outline-none"
                    />
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-bold uppercase tracking-widest border border-slate-200">v4.0</span>
                </div>
            </div>

            <div className="space-y-4 flex-grow">
                {/* BUSCADOR Y METADATOS */}
                <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-600 block uppercase tracking-wider">Partida (Buscador)</label>
                    <SearchCombobox
                        partidas={mockPartidas}
                        value={state.partidaSeleccionada ? state.partidaSeleccionada.descripcion : ''}
                        onSelect={(p: Partida) => actions.setPartidaSeleccionada(p)}
                    />
                    {state.partidaSeleccionada && (
                        <div className="px-1 pt-1.5 pb-0.5 flex items-center justify-between">
                            <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                                CÓDIGO: <strong className="text-slate-700">{state.partidaSeleccionada.codigo}</strong> <span className="mx-2 text-slate-300">|</span> UNIDAD: <strong className="text-slate-700">{state.partidaSeleccionada.unidad}</strong>
                            </span>
                            {RenderModificacionBadge(state.partidaSeleccionada.modificacion)}
                        </div>
                    )}
                </div>

                <div className="h-px bg-slate-100 my-1" />

                <div className="h-px bg-gray-100 my-2" />

                {/* Ubicación Grid Compacto */}
                <div className="grid grid-cols-3 gap-3 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                    <Select
                        label="Frente"
                        value={state.frente}
                        options={['F1', 'F2', 'F3', 'F4', 'Azotea']}
                        onSelect={(val) => actions.setFrente(val)}
                    />
                    <Select
                        label="Bloque"
                        value={state.bloque}
                        options={['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI']}
                        onSelect={(val) => actions.setBloque(val)}
                    />
                    <Select
                        label="Nivel"
                        value={state.nivel}
                        options={['ZZ', 'N1', 'N2', 'N3']}
                        onSelect={(val) => actions.setNivel(val)}
                    />
                </div>

                {/* Bloque Descriptivo Acoplado */}
                <div className="space-y-1 bg-white">
                    <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-600 block uppercase tracking-wider">Elemento / Agrupador</label>
                        <input
                            type="text"
                            value={state.elemento}
                            onChange={e => actions.setElemento(e.target.value)}
                            className="w-full px-3 py-1.5 border border-slate-200 rounded shadow-sm text-sm font-semibold text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                            placeholder="Ej. Viga BV-206 Eje A..."
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-blue-600 block flex items-center gap-1 uppercase tracking-wider">
                            <span className="text-blue-400 font-black">↳</span> Detalle (Material, Actividad)
                        </label>
                        <input
                            type="text"
                            value={state.detalle}
                            onChange={e => actions.setDetalle(e.target.value)}
                            className="w-full px-3 py-1.5 border border-blue-200 rounded shadow-sm text-sm border-l-4 border-l-blue-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                            placeholder="Ej. Acero longitudinal 3/4''..."
                        />
                    </div>
                </div>

                {/* Flujo Matemático Integrado */}
                <div className="grid grid-cols-5 gap-2 pt-2">
                    {(() => {
                        const flagAcero = isAcero(state.partidaSeleccionada);

                        let config = [
                            { key: 'cantidad', label: flagAcero ? 'CANT. (N°)' : 'CANTIDAD', nextId: 'input-longitud' },
                            { key: 'longitud', label: flagAcero ? 'LONG(R)' : 'LARGO', nextId: flagAcero ? 'input-altura' : 'input-ancho' },
                        ];

                        if (!flagAcero) {
                            config.push({ key: 'ancho', label: 'ANCHO', nextId: 'input-altura' });
                        }

                        config.push({ key: 'altura', label: flagAcero ? 'ALTO(G)' : 'ALTO', nextId: 'input-veces' });

                        const fields = config.map(({ key, label, nextId }) => {
                            const valKey = key as 'cantidad' | 'longitud' | 'ancho' | 'altura';
                            return (
                                <div key={key} className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider truncate block flex justify-center text-center h-4">
                                        {label}
                                    </label>
                                    <input
                                        id={`input-${key}`}
                                        type="number"
                                        step="any"
                                        value={state[valKey]}
                                        onChange={e => actions[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](e.target.value === "" ? "" : Number(e.target.value))}
                                        onKeyDown={e => handleKeyDown(e, nextId)}
                                        className="w-full px-1 py-1.5 border rounded-md text-sm text-right font-mono outline-none transition-colors shadow-inner bg-white border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="-"
                                    />
                                </div>
                            );
                        });

                        const vecesField = (
                            <div key="veces" className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block flex justify-center text-center h-4">
                                    VECES
                                </label>
                                <input
                                    id="input-veces"
                                    type="number"
                                    value={state.nroVeces}
                                    onChange={e => actions.setNroVeces(e.target.value === "" ? "" : Number(e.target.value))}
                                    onKeyDown={e => handleKeyDown(e, 'submit')}
                                    className="w-full px-1 py-1.5 border border-slate-300 rounded-md text-sm text-right font-mono bg-white shadow-inner focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                                    placeholder="1"
                                />
                            </div>
                        );

                        if (flagAcero) {
                            const diametroField = (
                                <div key="diametro" className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block flex justify-center text-center h-4">
                                        DIÁMETRO
                                    </label>
                                    <select
                                        id="input-diametro"
                                        value={state.diametro}
                                        onChange={e => actions.setDiametro(e.target.value)}
                                        onKeyDown={e => handleKeyDown(e as any, 'input-cantidad')}
                                        className="w-full px-0 border border-orange-200 bg-orange-50 rounded-md text-xs font-bold text-orange-700 h-[34px] text-center outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 cursor-pointer shadow-sm relative bottom-[1px]"
                                    >
                                        {['1/4"', '3/8"', '1/2"', '5/8"', '3/4"', '1"'].map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            );
                            // Layout = Diametro, Cantidad, Longitud, Alto, Veces -> 5 cols exacto
                            return [diametroField, fields[0], fields[1], fields[2], vecesField];
                        }
                        return [...fields, vecesField];
                    })()}
                </div>

                {/* Desaturación de Resultados (UI Financiera) */}
                <div className="flex flex-col items-end gap-1 mt-4 pt-4 border-t border-slate-100">
                    <div className="text-right flex items-baseline gap-2 font-mono">
                        <span className="text-slate-400 text-xs font-bold tracking-widest">PARCIAL:</span>
                        <span className="text-slate-700 font-semibold text-[15px]">{state.parcial.toFixed(2)}</span>
                    </div>
                    <div className="text-right flex items-baseline gap-2 font-mono">
                        <span className="text-slate-500 text-xs font-bold tracking-widest">TOTAL ACUMULADO:</span>
                        <span className="text-slate-900 font-black text-2xl tracking-tight">{state.total.toFixed(2)}</span>
                    </div>
                </div>

            </div>

            <button
                id="submit"
                onClick={onGuardar}
                disabled={!state.partidaSeleccionada || state.total === 0}
                className={`mt-4 w-full py-3.5 rounded-lg font-bold text-[13px] tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-md ${(!state.partidaSeleccionada || state.total === 0)
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                    }`}
            >
                <Save className="w-5 h-5" />
                REGISTRAR METRADO
            </button>

        </div>
    );
};
