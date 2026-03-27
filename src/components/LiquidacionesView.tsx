import { useState, useEffect } from 'react';
import { MetradosForm } from './MetradosForm';
import { MetradosTable } from './MetradosTable';
import { DashboardPersonal } from './DashboardPersonal';
import { useMetradosForm } from '../hooks/useMetradosForm';
import type { Metrado, Partida } from '../types';
import { LogOut, DollarSign, Users, UserIcon } from 'lucide-react';
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
    const { fetchCatalogoMaestro, fetchCustomPartidas } = useMetradosStore();
    
    // Stores de contexto
    const { fetchPersonal } = usePersonalStore();
    const { user, logout } = useAuthStore();
    
    const [toast, setToast] = useState<string | null>(null);
    const [showPersonalDashboard, setShowPersonalDashboard] = useState(false);

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
                    proyecto: 'hospital',
                    autor_usuario: user?.nombre_completo || 'Usuario Desconocido'
                };
                const result = await addLiquidacion(nuevoConMetadata);
                if (result.success) {
                    setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
                    alert(`¡Registro Exitoso!\n\nSe guardó correctamente la Partida: ${nuevo.codigo_partida}`);
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
                        <DollarSign className="w-6 h-6" />
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

                {/* Proyecto fijo */}
                <div className="text-sm font-semibold px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                    📋 Hospital
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
                        proyecto="hospital"
                    />
                </div>

                {/* Right Column: Table History */}
                <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
                    <MetradosTable
                        metrados={metradosLiquidaciones}
                        onUpdate={handleUpdateMetrado}
                        onGroupUpdate={handleUpdateGroup}
                        onDelete={handleDeleteMetrado}
                        proyecto="hospital"
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
