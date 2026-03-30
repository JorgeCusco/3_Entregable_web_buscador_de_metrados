import React, { useState, useMemo, useEffect } from 'react';
import { SearchCombobox } from './ui/SearchCombobox';
import { Select } from './ui/Select';
import type { Partida } from '../types';
import type { TipoProyecto } from '../App';
import { isAcero, isInstalacion } from '../hooks/useMetradosForm';
import { ESPECIALIDADES_PARTIDA, getEspecialidadPorCodigo } from '../constants/especialidades';
import { Save, Eraser, ChevronDown, ChevronUp } from 'lucide-react';
import { usePersonalStore } from '../store/usePersonalStore';
import { useMetradosStore } from '../store/useMetradosStore';
import { SimpleSearchInput } from './ui/SimpleSearchInput';
import { PersonalMultiSelect } from './ui/PersonalMultiSelect';

interface MetradosFormProps {
    state: any;
    actions: any;
    onGuardar: () => void;
    proyecto: TipoProyecto;
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
                if (tag.startsWith('DD')) colorClass = "bg-red-500 border-red-600";
                if (tag.startsWith('PN')) colorClass = "bg-green-500 border-green-600";
                if (tag.startsWith('MM')) colorClass = "bg-blue-500 border-blue-600";
                if (tag.startsWith('PC')) colorClass = "bg-[#FF69B4] border-[#FF1493]"; // Rosado (Partidas Creadas)

                return (
                    <div key={i} className={`w-[10px] h-[10px] rounded-full border shadow-sm ${colorClass}`} title={tag} />
                );
            })}
        </div>
    );
};

// @ts-ignore
window.RenderModificacionBadge = RenderModificacionBadge;

export const MetradosForm: React.FC<MetradosFormProps> = ({ state, actions, onGuardar, proyecto }) => {
    const { personal } = usePersonalStore();
    const { catalogoHospital, catalogoContingencia, metrados, hvacCatalog, fetchHvacCatalog } = useMetradosStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCostDetail, setShowCostDetail] = useState(false);

    useEffect(() => {
        fetchHvacCatalog();
    }, [fetchHvacCatalog]);
    
    const uniqueCuadrillas = useMemo(() => {
        const cuadrillas = personal.map(p => p.cuadrilla).filter(c => c && c.trim() !== '' && c !== 'nan');
        return Array.from(new Set(cuadrillas)).sort();
    }, [personal]);
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>, nextId: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextId === 'submit') {
                const isAceroFlag = isAcero(state.partidaSeleccionada);
                const isAceroValido = isAceroFlag && state.cantidad !== "" && state.cantidad > 0;
                const isGuardable = state.partidaSeleccionada && (state.total > 0 || isAceroValido);
                if (isGuardable) handleOnGuardar();
            } else {
                const nextEl = document.getElementById(nextId) as HTMLInputElement;
                if (nextEl) {
                    nextEl.focus();
                    if (nextEl.select) nextEl.select();
                }
            }
        }
    };

    const [showNuevaPartidaModal, setShowNuevaPartidaModal] = useState(false);
    const [nuevaPartidaData, setNuevaPartidaData] = useState({ codigo: '', descripcion: '', unidad: 'm', tipo_metrado: 'ESTANDAR' });
    const [modalEspecialidad, setModalEspecialidad] = useState<string>('TODAS');

    React.useEffect(() => {
        if (showNuevaPartidaModal) {
            setModalEspecialidad(state.especialidadSeleccionada || 'TODAS');
        }
    }, [showNuevaPartidaModal, state.especialidadSeleccionada]);

    const catalogoSugerencias = useMemo(() => {
        return [
            ...(proyecto === 'hospital' ? catalogoHospital : catalogoContingencia),
            ...state.customPartidas
        ];
    }, [proyecto, catalogoHospital, catalogoContingencia, state.customPartidas]);

    const modalCatalogoSugerencias = useMemo(() => {
        return catalogoSugerencias.filter(p => {
            if (p.es_titulo) return false;
            if (modalEspecialidad === 'TODAS') return true;
            
            const mapping = ESPECIALIDADES_PARTIDA.find(e => e.nombre === modalEspecialidad);
            const coincidePrefijo = mapping ? mapping.prefijos.some(pref => p.codigo.trim().startsWith(pref)) : true;
            const coincideEspecialidad = p.especialidad === modalEspecialidad;

            return coincidePrefijo || coincideEspecialidad;
        });
    }, [catalogoSugerencias, modalEspecialidad]);

    const handleCrearPartida = async () => {
        if (!nuevaPartidaData.codigo || !nuevaPartidaData.descripcion) return;
        
        const nuevaP: Partida = {
            id: `custom-${Date.now()}`, 
            codigo: nuevaPartidaData.codigo,
            descripcion: nuevaPartidaData.descripcion.toUpperCase(), 
            unidad: nuevaPartidaData.unidad,
            jerarquia: [],
            nivel_jerarquia: 1,
            modificacion: 'PC',
            especialidad: modalEspecialidad === 'TODAS' ? getEspecialidadPorCodigo(nuevaPartidaData.codigo) : modalEspecialidad,
            tipo_metrado: nuevaPartidaData.tipo_metrado || 'ESTANDAR'
        };

        const successPartida = await actions.addCustomPartida(nuevaP); 
        if (successPartida) {
            actions.setPartidaSeleccionada(successPartida);
            setShowNuevaPartidaModal(false);
            setNuevaPartidaData({ codigo: '', descripcion: '', unidad: 'm', tipo_metrado: 'ESTANDAR' });
        } else {
            alert('Error al guardar en Supabase.');
        }
    };

    const handleOnGuardar = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
            await onGuardar();
        } finally {
            setTimeout(() => setIsSubmitting(false), 1000);
        }
    };

    return (
        <div className="glass-panel rounded-2xl p-4 h-full flex flex-col gap-3 relative">
            {/* Modal para Nueva Partida */}
            {showNuevaPartidaModal && (
                <div className="absolute inset-0 z-[200] bg-white/90 backdrop-blur-sm p-4 flex flex-col justify-center animate-in fade-in zoom-in-95 duration-200">
                    <div className="glass-panel p-5 rounded-2xl shadow-xl border border-blue-100 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest">Crear Nueva Partida o actividad</h3>
                            <button onClick={() => setShowNuevaPartidaModal(false)} className="text-slate-400 hover:text-red-500 font-bold text-xs px-2 cursor-pointer">X</button>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Filtrar por Especialidad</label>
                                <Select
                                    value={modalEspecialidad}
                                    onSelect={val => setModalEspecialidad(val)}
                                    options={ESPECIALIDADES_PARTIDA.map(esp => esp.nombre)}
                                    className="bg-white"
                                />
                            </div>

                            <SimpleSearchInput 
                                label="Código (OE.x.x.x)"
                                placeholder="OE.1.1.2.3.99"
                                value={nuevaPartidaData.codigo}
                                onChange={val => setNuevaPartidaData({...nuevaPartidaData, codigo: val.toUpperCase()})}
                                onSelect={p => setNuevaPartidaData({ ...nuevaPartidaData, codigo: p.codigo, descripcion: p.descripcion })}
                                suggestions={modalCatalogoSugerencias}
                                searchField="codigo"
                                renderItem={(p) => (
                                    <>
                                        <span className="text-[10px] font-bold text-slate-800 line-clamp-1">{p.descripcion}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] font-mono text-blue-500 font-bold">{p.codigo}</span>
                                            {/* @ts-ignore */}
                                            {window.RenderModificacionBadge && window.RenderModificacionBadge(p.modificacion)}
                                        </div>
                                    </>
                                )}
                            />
                            
                            <SimpleSearchInput 
                                label="Descripción"
                                placeholder="Ej. Suministro de materiales no catalogados..."
                                value={nuevaPartidaData.descripcion}
                                onChange={val => setNuevaPartidaData({...nuevaPartidaData, descripcion: val})}
                                onSelect={p => setNuevaPartidaData({ ...nuevaPartidaData, codigo: p.codigo, descripcion: p.descripcion })}
                                suggestions={modalCatalogoSugerencias}
                                searchField="descripcion"
                                renderItem={(p) => (
                                    <>
                                        <span className="text-[10px] font-bold text-slate-800 line-clamp-1">{p.descripcion}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] font-mono text-blue-500 font-bold">{p.codigo}</span>
                                            {/* @ts-ignore */}
                                            {window.RenderModificacionBadge && window.RenderModificacionBadge(p.modificacion)}
                                        </div>
                                    </>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-2">
                                <div className="space-y-1">
                                    <label className="text-[9px] font-bold text-slate-500 uppercase">Unidad</label>
                                    <Select 
                                        value={nuevaPartidaData.unidad}
                                        options={['m', 'm2', 'm3', 'kg', 'und', 'glb', 'pto', 'est']}
                                        onSelect={val => setNuevaPartidaData({...nuevaPartidaData, unidad: val})}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[9px] font-bold text-slate-500 uppercase" title="Lógica matemática que aplicará la app para esta partida">Tipo de Lógica</label>
                                    <Select 
                                        value={nuevaPartidaData.tipo_metrado}
                                        options={['ESTANDAR', 'ACERO', 'HVAC_DUCTO', 'HVAC_ACCESORIO']}
                                        onSelect={val => setNuevaPartidaData({...nuevaPartidaData, tipo_metrado: val})}
                                    />
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleCrearPartida}
                            disabled={!nuevaPartidaData.codigo || !nuevaPartidaData.descripcion}
                            className="w-full py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none transition-all cursor-pointer"
                        >
                            Confirmar y Seleccionar
                        </button>
                    </div>
                </div>
            )}

            {/* Cabecera Compacta */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h2 className="text-sm font-bold text-gray-800 tracking-tight uppercase flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-blue-600 rounded-full" /> Registro de Metrados
                </h2>
                <div className="flex items-center gap-3">
                    <input
                        type="date"
                        value={state.fecha}
                        onChange={e => actions.setFecha(e.target.value)}
                        className="text-[10px] font-mono font-bold text-slate-500 bg-transparent border-none p-0 focus:ring-0 cursor-pointer outline-none"
                    />
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => actions.limpiarCampos()}
                            className="text-[9px] font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer px-1.5 py-0.5 rounded hover:bg-red-50"
                            title="Limpiar medidas y detalle"
                        >
                            <Eraser size={10} />
                            Limpiar
                        </button>
                        <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold border border-slate-200">v5.0</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 flex-grow">
                {/* ─── PASO 1: ESPECIALIDAD Y BÚSQUEDA ─── */}
                <div className="space-y-3">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Especialidad (Filtro OE)</label>
                        <Select
                            value={state.especialidadSeleccionada}
                            onSelect={val => {
                                actions.setEspecialidadSeleccionada(val);
                                actions.setPartidaSeleccionada(null);
                            }}
                            options={ESPECIALIDADES_PARTIDA.map(esp => esp.nombre)}
                            disabled={state.isSpecialtyLocked}
                            className="bg-white/50"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Partida (Buscador)</label>
                        <SearchCombobox
                            partidas={catalogoSugerencias.filter(p => {
                                if (p.es_titulo) return false;
                                if (state.especialidadSeleccionada === 'TODAS') return true;

                                let espP = p.especialidad;
                                if (!espP || espP === 'hospital' || espP === 'contingencia' || espP === 'TODAS') {
                                    espP = getEspecialidadPorCodigo(p.codigo);
                                }
                                return espP.trim().toUpperCase() === state.especialidadSeleccionada.trim().toUpperCase();
                            })}
                            value={state.partidaSeleccionada ? state.partidaSeleccionada.descripcion : ''}
                            onSelect={(p: Partida) => {
                                actions.setPartidaSeleccionada(p);
                                actions.setCantidad(1);
                                actions.setLongitud('');
                                actions.setAncho('');
                                actions.setAltura('');
                            }}
                            onAddPartida={() => setShowNuevaPartidaModal(true)}
                        />
                    </div>

                    {state.partidaSeleccionada && (
                        <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-1">
                            <div className="bg-blue-50/50 px-3 py-2 rounded-xl border border-blue-100 flex items-center justify-between shadow-sm">
                                <span className="text-[10px] text-blue-700 font-mono tracking-wider font-black">
                                    <span className="text-blue-400 opacity-50 mr-1">ID:</span> {state.partidaSeleccionada.codigo}
                                    <span className="mx-3 opacity-20">|</span>
                                    <span className="text-blue-400 opacity-50 mr-1">UNIDAD:</span> {state.partidaSeleccionada.unidad}
                                </span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => setShowCostDetail(!showCostDetail)}
                                        className="text-[9px] font-bold text-blue-600 hover:text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded flex items-center gap-1 transition-colors"
                                    >
                                        {showCostDetail ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                                        {showCostDetail ? 'Ocultar Saldo' : 'Ver Saldo'}
                                    </button>
                                    {RenderModificacionBadge(state.partidaSeleccionada.modificacion)}
                                </div>
                            </div>

                            {showCostDetail && (
                                <div className="bg-white border border-blue-100 rounded-xl p-3 shadow-md space-y-3 animate-in zoom-in-95 duration-200">
                                    {(() => {
                                        const presupuesto = state.partidaSeleccionada.cantidad_presupuesto || 0;
                                        const acumulado = metrados
                                            .filter((m: any) => m.codigo_partida === state.partidaSeleccionada.codigo)
                                            .reduce((sum: number, m: any) => sum + (m.total || 0), 0);
                                        
                                        const saldo = presupuesto - acumulado;
                                        const porcentaje = presupuesto > 0 ? Math.min((acumulado / presupuesto) * 100, 100) : 0;
                                        const isExceeded = acumulado > presupuesto && presupuesto > 0;

                                        return (
                                            <>
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-tight">
                                                        <span className="text-slate-500">Progreso de Ejecución</span>
                                                        <span className={isExceeded ? 'text-red-600' : 'text-blue-600'}>
                                                            {porcentaje.toFixed(1)}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200 shadow-inner">
                                                        <div 
                                                            className={`h-full transition-all duration-500 ${isExceeded ? 'bg-red-500' : 'bg-blue-500'}`}
                                                            style={{ width: `${porcentaje}%` }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                                        <span className="text-[8px] font-bold text-slate-400 block uppercase">Presupuesto Base</span>
                                                        <span className="text-xs font-black text-slate-700">{presupuesto.toFixed(2)} {state.partidaSeleccionada.unidad}</span>
                                                    </div>
                                                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                                                        <span className="text-[8px] font-bold text-slate-400 block uppercase">Acumulado Total</span>
                                                        <span className="text-xs font-black text-blue-700">{acumulado.toFixed(2)} {state.partidaSeleccionada.unidad}</span>
                                                    </div>
                                                    <div className={`col-span-2 p-2 rounded-lg border ${isExceeded ? 'bg-red-50 border-red-100' : 'bg-emerald-50 border-emerald-100'}`}>
                                                        <div className="flex justify-between items-center">
                                                            <span className={`text-[9px] font-bold uppercase ${isExceeded ? 'text-red-700' : 'text-emerald-700'}`}>
                                                                {isExceeded ? '⚠️ Mayor Metrado por' : '✅ Saldo Disponible'}
                                                            </span>
                                                            <span className={`text-xs font-black ${isExceeded ? 'text-red-700' : 'text-emerald-700'}`}>
                                                                {Math.abs(saldo).toFixed(2)} {state.partidaSeleccionada.unidad}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="h-px bg-slate-100 mx-2" />

                {/* ─── PASO 2: UBICACIÓN Y ELEMENTO ─── */}
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-50/50 rounded-2xl border border-slate-100">
                        <Select
                            label="Frente"
                            value={state.frente}
                            options={['F1', 'F2', 'F3', 'F4', 'F5']}
                            onSelect={(val) => actions.setFrente(val)}
                        />
                        <Select
                            label="Bloque"
                            value={state.bloque}
                            options={['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'EXT']}
                            onSelect={(val) => actions.setBloque(val)}
                        />
                        <Select
                            label="Nivel"
                            value={state.nivel}
                            options={['ZZ', 'N1', 'N2', 'N3', 'N4', 'AZ']}
                            onSelect={(val) => actions.setNivel(val)}
                        />
                    </div>

                    <div className="space-y-2 p-3 bg-blue-50/30 rounded-2xl border border-blue-100/50">
                        <label className="text-[10px] font-bold text-blue-800 uppercase tracking-widest pl-1 mb-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"/> Cuadrilla / Personal
                        </label>
                        
                        <div className="flex flex-col gap-2 bg-white/60 p-2 rounded-xl border border-blue-50">
                            <div className="flex items-center gap-2">
                                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider w-14 shrink-0 text-right">Código:</label>
                                <input
                                    type="text"
                                    list="cdlla-form-list"
                                    className="flex-1 bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all uppercase"
                                    value={state.cuadrilla === 'VARIOS' ? '' : state.cuadrilla}
                                    onChange={(e) => actions.setCuadrilla(e.target.value.toUpperCase())}
                                    placeholder="Nombre de cuadrilla (Ej: C1)"
                                />
                                <datalist id="cdlla-form-list">
                                    {uniqueCuadrillas.map(c => <option key={c} value={c} />)}
                                </datalist>
                            </div>
                            
                            <div className="flex items-start gap-2">
                                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider w-14 shrink-0 text-right pt-2.5">Obreros:</label>
                                <div className="flex-1">
                                    <PersonalMultiSelect 
                                        especialidad={state.especialidadSeleccionada}
                                        selectedIds={state.obreros_ids || []}
                                        onChange={(ids) => actions.setObrerosIds(ids)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 p-3 bg-slate-50/50 rounded-2xl border border-slate-100">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Elemento / Agrupador</label>
                            <input
                                type="text"
                                value={state.elemento}
                                onChange={e => actions.setElemento(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-700 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all h-9"
                                placeholder="Ej. Viga BV-206 Ejes 1-4..."
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[9px] font-bold text-blue-600 flex items-center gap-1 uppercase tracking-wider pl-1">
                                <span className="text-blue-400 font-black">↳</span> Detalle {state.hvacConfig ? `Especifico (${state.hvacConfig.category})` : 'Específico'}
                            </label>
                            {state.hvacConfig ? (
                                <SimpleSearchInput 
                                    placeholder={state.hvacConfig.category === 'TODO' ? "Buscar ducto o accesorio..." : `Buscar ${state.hvacConfig.category.toLowerCase()}...`}
                                    value={state.detalle}
                                    onChange={val => actions.setDetalle(val)}
                                    onSelect={(item: any) => {
                                        actions.setDetalle(item.label);
                                        actions.setHvacFactor(item.factor);
                                        actions.setHvacItemType(item.categoria);
                                    }}
                                    suggestions={hvacCatalog}
                                    searchField="label"
                                    className="h-8 shadow-none"
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={state.detalle}
                                    onChange={e => actions.setDetalle(e.target.value)}
                                    className="w-full px-4 py-1.5 border border-blue-100 rounded-xl shadow-sm text-xs border-l-4 border-l-blue-500 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none h-8"
                                    placeholder="Mat. / Esp. / Actividad..."
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* FILA 4: MATEMÁTICA */}
                <div className="grid grid-cols-5 gap-1.5 bg-white/50 p-2 rounded-xl border border-slate-100 shadow-sm">
                    {(() => {
                        const strategy = state.formulaStrategy;
                        if (!strategy) return null;
                        const meta = { hvacItemType: state.hvacItemType };

                        const fieldKeys: ('cantidad' | 'longitud' | 'ancho' | 'altura')[] = ['cantidad', 'longitud', 'ancho', 'altura'];
                        
                        const fields = fieldKeys.map((key) => {
                            const internalKey = key === 'longitud' ? 'longitud_area' : key === 'ancho' ? 'ancho_empalme' : key === 'altura' ? 'altura_gancho' : key;
                            const isLocked = strategy.isFieldLocked(internalKey as any, meta);
                            const label = strategy.getFieldLabel(internalKey as any);

                            const nextIds = {
                                cantidad: 'input-longitud',
                                longitud: strategy.isFieldLocked('ancho_empalme', meta) ? 'input-altura' : 'input-ancho',
                                ancho: 'input-altura',
                                altura: 'input-veces'
                            };

                            return (
                                <div key={key} className="space-y-1">
                                    <label className={`text-[7px] font-black uppercase tracking-tighter text-center block leading-[1.1] h-[18px] flex items-end justify-center pb-0.5 ${isLocked ? 'text-slate-300' : 'text-slate-400'}`}>
                                        {label}
                                    </label>
                                    <input
                                        id={`input-${key}`}
                                        type="number"
                                        step="any"
                                        value={state[key]}
                                        disabled={isLocked}
                                        onChange={e => actions[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](e.target.value === "" ? "" : Number(e.target.value))}
                                        onKeyDown={e => handleKeyDown(e, nextIds[key as keyof typeof nextIds])}
                                        onFocus={e => e.target.select()}
                                        className={`w-full px-1 py-1 border rounded text-xs text-right font-mono font-bold outline-none transition-colors ${
                                            isLocked 
                                            ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed' 
                                            : 'border-slate-200 text-slate-700 bg-white focus:border-blue-500'
                                        }`}
                                        placeholder={isLocked ? "N/A" : "-"}
                                    />
                                </div>
                            );
                        });

                        const flagAcero = strategy.id === 'ACERO';
                        const isInstalacionFlag = isInstalacion(state.partidaSeleccionada);
                        
                        let extraField = null;
                        if (flagAcero || isInstalacionFlag) {
                            const diametros = flagAcero 
                                ? ['1/4"', '3/8"', '1/2"', '5/8"', '3/4"', '1"']
                                : ['1/2"', '3/4"', '1"', '1 1/4"', '1 1/2"', '2"', '2 1/2"', '3"', '4"', '6"'];
                            
                            extraField = (
                                <div key="diametro" className="space-y-1">
                                    <label className={`text-[9px] font-black uppercase tracking-tighter text-center block ${flagAcero ? 'text-orange-400' : 'text-blue-400'}`}>DIÁM</label>
                                    <select
                                        id="input-diametro"
                                        value={state.diametro}
                                        onChange={e => actions.setDiametro(e.target.value)}
                                        onKeyDown={e => handleKeyDown(e as any, 'input-cantidad')}
                                        className={`w-full border rounded text-[10px] font-black h-[26px] text-center outline-none ${
                                            flagAcero 
                                            ? 'border-orange-100 bg-orange-50 text-orange-700 font-bold' 
                                            : 'border-blue-100 bg-blue-50 text-blue-700 font-bold'
                                        }`}
                                    >
                                        {diametros.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                            );
                        } else {
                            const isVecesLocked = strategy.isFieldLocked('nro_veces', meta);
                            extraField = (
                                <div key="veces" className="space-y-1">
                                    <label className={`text-[9px] font-black uppercase tracking-tighter text-center block ${isVecesLocked ? 'text-slate-300' : 'text-slate-400'}`}>
                                        VECES
                                    </label>
                                    <input
                                        id="input-veces"
                                        type="number"
                                        value={state.nroVeces}
                                        disabled={isVecesLocked}
                                        onChange={e => actions.setNroVeces(e.target.value === "" ? "" : Number(e.target.value))}
                                        onKeyDown={e => handleKeyDown(e, 'submit')}
                                        onFocus={e => e.target.select()}
                                        className={`w-full px-1 py-1 border rounded text-xs text-right font-mono font-bold outline-none transition-colors ${
                                            isVecesLocked
                                            ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed'
                                            : 'border-slate-200 text-slate-700 bg-white focus:border-blue-500'
                                        }`}
                                        placeholder={isVecesLocked ? "1" : "1"}
                                    />
                                </div>
                            );
                        }

                        return [...fields, extraField];
                    })()}
                </div>

                {/* RESULTADOS INTEGRADOS */}
                <div className="flex items-center justify-between px-2 -mb-1">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Parcial</span>
                            <span className="text-sm font-bold text-slate-700 font-mono">{state.parcial.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Total</span>
                            <span className="text-xl font-black text-blue-900 font-mono -mt-1">
                                {state.total.toFixed(2)}
                                {state.hvacFactor !== null && (
                                    <span className="text-[10px] text-blue-400 ml-1 font-bold">
                                        (x{state.hvacFactor.toFixed(3)})
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                id="submit"
                onClick={handleOnGuardar}
                disabled={isSubmitting || !state.partidaSeleccionada || (state.total === 0 && !(state.formulaStrategy?.id === 'ACERO' && state.cantidad !== "" && state.cantidad > 0))}
                className={`w-full py-3 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all shadow-md ${(isSubmitting || !state.partidaSeleccionada || (state.total === 0 && !(state.formulaStrategy?.id === 'ACERO' && state.cantidad !== "" && state.cantidad > 0)))
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg active:scale-[0.98]'
                    }`}
            >
                <Save className="w-4 h-4" />
                {isSubmitting ? 'GUARDANDO...' : 'REGISTRAR METRADO'}
            </button>
        </div>
    );
};
