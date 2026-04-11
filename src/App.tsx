import { useState, useEffect } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { GestionPartidasPC } from './components/GestionPartidasPC';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado, Partida } from './types';
import { Building2, Stethoscope, AlertTriangle, Users, LogOut, User as UserIcon, ClipboardList, FileBarChart, ShieldCheck } from 'lucide-react';
import Login from './components/Login';
import { DashboardPersonal } from './components/DashboardPersonal';
import { AdminPresupuesto } from './admin/AdminPresupuesto';
import { ExecutiveDashboard } from './admin/ExecutiveDashboard';
import { calcularParcial, calcularTotal } from './utils/metradosCalculations';
import { useMetradosStore } from './store/useMetradosStore';
import { usePersonalStore } from './store/usePersonalStore';
import { useAuthStore } from './store/useAuthStore';
import { useSystemUsersStore } from './store/useSystemUsersStore';

// Tipo de proyecto disponible en el sistema (Hospital o Contingencia)
export type TipoProyecto = 'hospital' | 'contingencia';

function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup, fetchCustomPartidas, fetchMetrados, fetchCatalogoMaestro } = useMetradosStore();
  const { fetchPersonal } = usePersonalStore();
  const { isAuthenticated, user, logout, checkAuth } = useAuthStore();
  const { fetchSystemUsers } = useSystemUsersStore();
  
  const [showExecutiveDashboard, setShowExecutiveDashboard] = useState(false);
  const [showPersonalDashboard, setShowPersonalDashboard] = useState(false);
  const [showGestionPC, setShowGestionPC] = useState(false);
  const [showAdminPresupuesto, setShowAdminPresupuesto] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  // Efecto para limpiar notificaciones
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Verificar autenticación al montar
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Cargar datos iniciales solo si está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      fetchPersonal();
      fetchCatalogoMaestro();
      fetchCustomPartidas();
      fetchMetrados();
      fetchSystemUsers();
    }
  }, [isAuthenticated, fetchCustomPartidas, fetchMetrados, fetchPersonal, fetchCatalogoMaestro, fetchSystemUsers]);

  const handleGuardar = async () => {
    try {
      const nuevo = actions.procesarRegistro();
      if (nuevo) {
        // El metrado hereda el proyecto activo y el autor de la sesión
        const nuevoConMetadata = { 
          ...nuevo, 
          proyecto: context.proyecto,
          autor_usuario: user?.nombre_completo || 'Usuario Desconocido'
        };
        const result = await addMetrado(nuevoConMetadata);
        if (result.success) {
          setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
          setTimeout(() => setToast(null), 3000);
        } else {
          alert("Error de guardado en la nube (Supabase):\n\n" + result.error);
        }
      }
    } catch (err: any) {
      console.error("Error crítico al guardar:", err);
      alert("Error crítico inesperado:\n\n" + (err.message || String(err)));
    }
  };

  const handleDeleteMetrado = (id: string) => {
    deleteMetrado(id);
    setToast('Registro eliminado exitosamente');
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateMetrado = (id: string, field: keyof Metrado, value: any) => {
    const metradoOriginal = metrados.find(m => m.id === id);
    if (!metradoOriginal) return;

    const final = { ...metradoOriginal, [field]: value };
    const calculusFields = ['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces', 'diametro', 'hvac_factor'];
    
    if (calculusFields.includes(field as string)) {
      const p = calcularParcial({
        partida: { 
          codigo: final.codigo_partida,
          descripcion: final.descripcion_partida,
          unidad: final.unidad,
          tipo_metrado: final.tipo_metrado 
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

      updateMetrado(id, { [field]: value, parcial: p, total: t });
    } else {
      updateMetrado(id, { [field]: value });
    }
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

  const { isReadOnlyMetrados } = useAuthStore();
  const isReadOnly = isReadOnlyMetrados();

  // Si es solo lectura, forzamos que el formulario esté oculto y el filtro sea "TODAS"
  useEffect(() => {
    if (isReadOnly) {
      setIsFormVisible(false);
      actions.setEspecialidadSeleccionada('TODAS');
      setToast("Modo Lector Activo - Vista Protegida");
    }
  }, [isReadOnly, actions]);

  // Si no está autenticado, mostramos pantalla de Login
  if (!isAuthenticated) {
    return <Login />;
  }

  // Filtra los metrados mostrados según el proyecto activo (Case-insensitive V30.1)
  const metradosFiltrados = metrados.filter(m => {
    if (!m.proyecto) return true;
    return m.proyecto.trim().toLowerCase() === context.proyecto.toLowerCase();
  });

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">

      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-2 gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
              Metrados Belempampa
            </h1>
            <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider">
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
            className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 flex items-center gap-2 rounded-md text-sm font-bold shadow-sm transition-all"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Personal</span>
          </button>
          
          <button 
            onClick={() => setShowGestionPC(true)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 flex items-center gap-2 rounded-md text-sm font-bold border border-slate-200 transition-all"
            title="Gestión de Partidas Creadas (PC)"
          >
            <ClipboardList className="w-4 h-4 text-pink-500" />
            <span className="hidden sm:inline">Partidas PC</span>
          </button>

          {/* Dashboard Gerencial */}
          {user && (useAuthStore.getState().isGerencia()) && (
            <button 
              onClick={() => setShowExecutiveDashboard(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#005A9C] hover:bg-[#004A81] text-white rounded-md text-sm font-bold transition-all shadow-sm"
              title="Panel de Control Gerencial"
            >
              <FileBarChart className="w-4 h-4" />
              <span className="hidden sm:inline">Status Gerencial</span>
            </button>
          )}

          {/* Botón Maestro (Solo para Administradores de Presupuesto) */}
          {(useAuthStore.getState().isAdminPresupuesto()) && (
            <button 
              onClick={() => setShowAdminPresupuesto(true)}
              className="bg-white hover:bg-slate-50 text-[#005A9C] px-5 py-2.5 flex items-center gap-2 rounded-md text-sm font-bold shadow-sm border border-[#005A9C]/30 transition-all"
              title="Administración Maestra del Presupuesto"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Admin Maestro</span>
            </button>
          )}

          {!isReadOnly && (
            <button 
              onClick={() => {
                const newVal = !isFormVisible;
                setIsFormVisible(newVal);
                setToast(newVal ? "Modo Registro Activado" : "Vista Completa Activada");
              }}
              className={`px-5 py-2.5 flex items-center gap-2 rounded-md text-sm font-bold transition-all shadow-sm border ${
                isFormVisible 
                ? 'bg-blue-50 text-blue-700 border-blue-200' 
                : 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700'
              }`}
              title={isFormVisible ? "Ocultar Registro (Vista Completa)" : "Mostrar Registro"}
            >
              <ClipboardList className="w-4 h-4" />
              <span>{isFormVisible ? "Vista Completa" : "Registrar"}</span>
            </button>
          )}
          
          <button 
            onClick={() => logout()}
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

        {/* Left Column: Form (Solo si no está colapsado y no es solo lectura) */}
        {isFormVisible && !isReadOnly && (
          <div className="lg:col-span-4 xl:col-span-3 transition-all animate-in slide-in-from-left duration-300">
            <MetradosForm
              state={state}
              actions={actions}
              onGuardar={handleGuardar}
              proyecto={context.proyecto}
            />
          </div>
        )}

        {/* Right Column: Table History */}
        <div className={`${isFormVisible && !isReadOnly ? 'lg:col-span-8 xl:col-span-9' : 'lg:col-span-12'} flex flex-col transition-all duration-300`}>
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
            especialidadSeleccionada={state.especialidadSeleccionada}
            onEspecialidadChange={actions.setEspecialidadSeleccionada}
            isSpecialtyLocked={state.isSpecialtyLocked}
            isReadOnly={isReadOnly}
          />
        </div>
      </main>

      {showPersonalDashboard && (
        <DashboardPersonal onClose={() => setShowPersonalDashboard(false)} />
      )}

      {showGestionPC && (
        <GestionPartidasPC onClose={() => setShowGestionPC(false)} />
      )}

      {showAdminPresupuesto && (
        <AdminPresupuesto onClose={() => setShowAdminPresupuesto(false)} />
      )}

      {showExecutiveDashboard && (
        <ExecutiveDashboard onClose={() => setShowExecutiveDashboard(false)} />
      )}
    </div>
  );
}

export default App;
