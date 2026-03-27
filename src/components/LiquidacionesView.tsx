import { useState, useEffect, useMemo } from 'react';
import { MetradosForm } from './MetradosForm';
import { MetradosTable } from './MetradosTable';
import { DashboardPersonal } from './DashboardPersonal';
import { useMetradosForm } from '../hooks/useMetradosForm';
import type { Metrado, Partida } from '../types';
import { Building2, Stethoscope, AlertTriangle, Users, LogOut, User as UserIcon, DollarSign } from 'lucide-react';
import { useMetradosStore } from '../store/useMetradosStore';
import { useLiquidacionesStore } from '../store/useLiquidacionesStore';
import { usePersonalStore } from '../store/usePersonalStore';
import { useAuthStore } from '../store/useAuthStore';
import { calcularParcial, calcularTotal } from '../utils/metradosCalculations';

interface LiquidacionesViewProps {
    onLogout?: () => void;
}

export const LiquidacionesView: React.FC<LiquidacionesViewProps> = ({ onLogout }) => {
    const { state, actions } = useMetradosForm();
    
    // Store de Liquidaciones (tabla separada: metrados_liquidaciones)
    const { metrados: metradosLiquidaciones, addMetrado: addLiquidacion, updateMetrado: updateLiquidacion, deleteMetrado: deleteLiquidacion, fetchMetrados: fetchLiquidaciones } = useLiquidacionesStore();
    
    // Store de Metrados (para acceder a catálogos disponibles)
    const { fetchCatalogoMaestro, fetchCustomPartidas, context, setContext } = useMetradosStore();
    
    // Stores de contexto
    const { fetchPersonal } = usePersonalStore();
    const { user, logout } = useAuthStore();
    
    const [toast, setToast] = useState<string | null>(null);
    const [showPersonalDashboard, setShowPersonalDashboard] = useState(false);

    // Cálculos de resumen
    const stats = useMemo(() => {
        const total = metradosLiquidaciones.reduce((acc, m) => acc + (Number(m.total) || 0), 0);
        const uniquePartidas = new Set(metradosLiquidaciones.map(m => m.codigo_partida)).size;
        const lastUpdate = metradosLiquidaciones.length > 0 
            ? new Date(Math.max(...metradosLiquidaciones.map(m => new Date(m.created_at || m.fecha).getTime())))
            : null;
        
        return { total, uniquePartidas, lastUpdate };
    }, [metradosLiquidaciones]);

    // Cargar datos iniciales
    useEffect(() => {
        fetchPersonal();
        fetchCatalogoMaestro();
        fetchCustomPartidas();
        // Cargar metrados de liquidaciones del usuario
        if (user?.nombre_completo) {
            fetchLiquidaciones(user.nombre_completo);
        }
    }, [fetchPersonal, fetchCatalogoMaestro, fetchCustomPartidas, fetchLiquidaciones, user?.nombre_completo]);

    const handleGuardar = async () => {
        try {
            const nuevo = actions.procesarRegistro();
            if (nuevo) {
                const nuevoConMetadata = { 
                    ...nuevo, 
                    proyecto: context.proyecto,
                    autor_usuario: user?.nombre_completo || 'Usuario Desconocido'
                };
                const result = await addLiquidacion(nuevoConMetadata);
                if (result.success) {
                    setToast(`Liquidación guardada: ${nuevo.codigo_partida}`);
                    alert(`¡Liquidación Registrada!\n\nSe guardó correctamente la Partida: ${nuevo.codigo_partida}`);
                    setTimeout(() => setToast(null), 3000);
                    if (user?.nombre_completo) {
                        fetchLiquidaciones(user.nombre_completo);
                    }
                } else {
                    alert("Error de guardado:\n\n" + result.error);
                }
            }
        } catch (err: any) {
            console.error("Error crítico al guardar:", err);
            alert("Error crítico inesperado:\n\n" + (err.message || String(err)));
        }
    };

    const handleDeleteMetrado = (id: string) => {
        deleteLiquidacion(id);
        setToast('Registro eliminado exitosamente');
        setTimeout(() => setToast(null), 3000);
    };

    const handleUpdateMetrado = (id: string, field: keyof Metrado, value: any) => {
        const metradoOriginal = metradosLiquidaciones.find(m => m.id === id);
        if (!metradoOriginal) return;

        const final = { ...metradoOriginal, [field]: value };
        const calculusFields = ['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces', 'diametro', 'hvac_factor'];
        
        if (calculusFields.includes(field as string)) {
            const p = calcularParcial({
                partida: { 
                    codigo: final.codigo_partida,
                    descripcion: final.descripcion_partida,
                    unidad: final.unidad 
                } as Partida,
                cantidad: final.cantidad,
                longitud: final.longitud_area,
                ancho: final.ancho_empalme,
                altura: final.altura_gancho,
                diametro: final.diametro,
                hvacFactor: final.hvac_factor,
                hvacItemType: final.hvac_item_type
            });

            const t = calcularTotal(p, final.nro_veces);

            updateLiquidacion(id, { [field]: value, parcial: p, total: t });
        } else {
            updateLiquidacion(id, { [field]: value });
        }
    };

    const handleUpdateGroup = async (codigoPartida: string, oldElemento: string, newElemento: string) => {
        const toUpdate = metradosLiquidaciones.filter(
            m => m.codigo_partida === codigoPartida && m.elemento === oldElemento
        );
        
        for (const m of toUpdate) {
            await updateLiquidacion(m.id, { elemento: newElemento });
        }
        
        setToast(`Elemento actualizado: ${oldElemento} → ${newElemento}`);
        setTimeout(() => setToast(null), 3000);
    };

    const handleLogout = () => {
        logout();
        if (onLogout) onLogout();
    };

    return (
        <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">

            {/* Header */}
            <header className="flex flex-col md:flex-row items-center justify-between px-2 gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="bg-green-600 text-white p-2.5 rounded-xl shadow-lg shadow-green-600/30">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent leading-tight">
                            Liquidaciones Belempampa
                        </h1>
                        <div className="flex items-center gap-2 text-xs text-green-600 font-bold uppercase tracking-wider">
                            <UserIcon className="w-3 h-3" />
                            <span>{user?.nombre_completo} ({user?.cargo})</span>
                        </div>
                    </div>
                </div>

                {/* ─── Selector de Especialidad (Proyecto) ─── */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
                <button
                    onClick={() => { setContext({ proyecto: 'hospital' }); actions.setPartidaSeleccionada(null); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'hospital'
                    ? 'bg-white text-blue-700 shadow-md border border-blue-100'
                    : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <Stethoscope className="w-4 h-4" />
                    Hospital
                </button>
                <button
                    onClick={() => { setContext({ proyecto: 'contingencia' }); actions.setPartidaSeleccionada(null); }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'contingencia'
                    ? 'bg-white text-amber-600 shadow-md border border-amber-100'
                    : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <AlertTriangle className="w-4 h-4" />
                    Contingencia
                </button>
                </div>

                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setShowPersonalDashboard(true)}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 flex items-center gap-2 rounded-xl text-sm font-bold shadow-md transition-all shadow-slate-900/20"
                    >
                        <Users className="w-4 h-4" />
                        <span className="hidden sm:inline">Personal</span>
                    </button>
                    
                    <button 
                        onClick={handleLogout}
                        className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2.5 flex items-center gap-2 rounded-xl text-sm font-bold border border-red-100 transition-all active:scale-95"
                        title="Cerrar Sesión"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Liquidado</p>
                        <p className="text-xl font-black text-slate-800">
                            S/ {new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2 }).format(stats.total)}
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Partidas Alcanzadas</p>
                        <p className="text-xl font-black text-slate-800">{stats.uniquePartidas}</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                        <LogOut className="w-6 h-6 rotate-90" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Avance Items</p>
                        <p className="text-xl font-black text-slate-800">{metradosLiquidaciones.length}</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-orange-100 text-orange-600 p-3 rounded-xl cursor-help" title="Fecha del último registro guardado">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Último Reporte</p>
                        <p className="text-sm font-bold text-slate-800">
                            {stats.lastUpdate ? stats.lastUpdate.toLocaleDateString() : 'Sin registros'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 mt-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2">
                    <span className="text-xl">✨</span> {toast}
                </div>
            )}

            {/* Main Layout Grid */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh]">

                {/* Left Column: Form */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <MetradosForm
                        state={state}
                        actions={actions}
                        onGuardar={handleGuardar}
                        proyecto={context.proyecto}
                    />
                </div>

                {/* Right Column: Table History */}
                <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
                    <MetradosTable
                        metrados={metradosLiquidaciones}
                        onUpdate={handleUpdateMetrado}
                        onGroupUpdate={handleUpdateGroup}
                        onDelete={handleDeleteMetrado}
                        proyecto={context.proyecto}
                        especialidadSeleccionada={state.especialidadSeleccionada}
                        onEspecialidadChange={actions.setEspecialidadSeleccionada}
                        isSpecialtyLocked={state.isSpecialtyLocked}
                    />
                </div>
            </main>

            {showPersonalDashboard && (
                <DashboardPersonal onClose={() => setShowPersonalDashboard(false)} />
            )}
        </div>
    );
};
