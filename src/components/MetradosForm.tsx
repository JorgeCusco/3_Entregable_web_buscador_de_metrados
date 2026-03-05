import React from 'react';
import { SearchCombobox } from './ui/SearchCombobox';
import { Select } from './ui/Select';
import { Partida } from '../types';
import { mockPartidas } from '../data/mockDB';
import { Save } from 'lucide-react';

interface MetradosFormProps {
    state: any;
    actions: any;
    onGuardar: () => void;
}

export const MetradosForm: React.FC<MetradosFormProps> = ({ state, actions, onGuardar }) => {
    return (
        <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <h2 className="text-xl font-bold text-gray-800">Registro de Metrados</h2>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">BETA v1.0</span>
            </div>

            <div className="space-y-4 flex-grow">
                {/* BUSCADOR */}
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-700 block">Partida (Buscador)</label>
                    <SearchCombobox
                        partidas={mockPartidas}
                        value={state.partidaSeleccionada ? state.partidaSeleccionada.descripcion : ''}
                        onSelect={(p: Partida) => actions.setPartidaSeleccionada(p)}
                    />
                </div>

                {/* Read-Only Partida Info */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Código</label>
                        <input
                            readOnly
                            value={state.partidaSeleccionada?.codigo || ''}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 text-sm focus:outline-none cursor-not-allowed"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Unidad</label>
                        <input
                            readOnly
                            value={state.partidaSeleccionada?.unidad || ''}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 text-sm focus:outline-none cursor-not-allowed text-center"
                        />
                    </div>
                </div>

                <div className="h-px bg-gray-100 my-2" />

                {/* Location Info (Frente, Bloque, Nivel, Fecha) */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600 block">Fecha</label>
                        <input
                            type="date"
                            value={state.fecha}
                            onChange={e => actions.setFecha(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                    </div>

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

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 block">Descripción Específica (Opcional)</label>
                    <input
                        type="text"
                        value={state.descripcionEspecifica}
                        onChange={e => actions.setDescripcionEspecifica(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Detalles del metrado..."
                    />
                </div>

                {/* Dimensiones Matematicas */}
                <div className="grid grid-cols-4 gap-2 pt-2">
                    {['Cantidad', 'Largo/Área', 'Ancho', 'Alto'].map((label, idx) => {
                        const keys = ['cantidad', 'longitud', 'ancho', 'altura'];
                        const key = keys[idx] as any;
                        return (
                            <div key={label} className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600 truncate block items-center flex justify-center">{label}</label>
                                <input
                                    type="number"
                                    step="any"
                                    value={state[key]}
                                    onChange={e => actions[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](e.target.value === "" ? "" : Number(e.target.value))}
                                    className="w-full px-2 py-2 border border-gray-300 rounded-md text-sm text-center focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-inner"
                                    placeholder="-"
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Resultados */}
                <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 mt-2">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-500 uppercase block text-center">Nro Veces</label>
                        <input
                            type="number"
                            value={state.nroVeces}
                            onChange={e => actions.setNroVeces(e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="1"
                            className="w-full px-2 py-1.5 border border-gray-200 rounded text-sm text-center focus:border-primary outline-none"
                        />
                    </div>
                    <div className="space-y-1 bg-white p-1 rounded border border-blue-100 shadow-sm flex flex-col justify-center">
                        <label className="text-[10px] font-bold text-blue-500 uppercase block text-center">Parcial</label>
                        <div className="text-center font-mono font-semibold text-gray-700">{state.parcial.toFixed(2)}</div>
                    </div>
                    <div className="space-y-1 bg-blue-500 p-1 rounded border border-blue-600 shadow-sm flex flex-col justify-center text-white">
                        <label className="text-[10px] font-bold text-blue-200 uppercase block text-center">Total</label>
                        <div className="text-center font-mono font-bold text-lg leading-none">{state.total.toFixed(2)}</div>
                    </div>
                </div>

            </div>

            <button
                onClick={onGuardar}
                disabled={!state.partidaSeleccionada || state.total === 0}
                className={`mt-6 w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${(!state.partidaSeleccionada || state.total === 0)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                    : 'bg-primary hover:bg-primary-hover text-white hover:shadow-primary/30'
                    }`}
            >
                <Save className="w-5 h-5" />
                REGISTRAR METRADO
            </button>

        </div>
    );
};
