import { useState, useEffect } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado, Partida } from './types';
import { Building2, Stethoscope, AlertTriangle, Users } from 'lucide-react';
import { useMetradosStore } from './store/useMetradosStore';
import { usePersonalStore } from './store/usePersonalStore';
import { DashboardPersonal } from './components/DashboardPersonal';
import { calcularParcial, calcularTotal } from './utils/metradosCalculations';

// Tipo de proyecto disponible en el sistema (Hospital o Contingencia)
export type TipoProyecto = 'hospital' | 'contingencia';

function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup, fetchCustomPartidas, fetchMetrados } = useMetradosStore();
  const { fetchPersonal } = usePersonalStore();
  const [toast, setToast] = useState<string | null>(null);
  const [showPersonalDashboard, setShowPersonalDashboard] = useState(false);

  useEffect(() => {
    fetchPersonal();
    fetchCustomPartidas();
    fetchMetrados();
  }, [fetchCustomPartidas, fetchMetrados, fetchPersonal]);

  const handleGuardar = async () => {
    try {
      const nuevo = actions.procesarRegistro();
      if (nuevo) {
        // El metrado hereda el proyecto activo al momento de registrarse
        const nuevoConProy = { ...nuevo, proyecto: context.proyecto };
        const result = await addMetrado(nuevoConProy);
        if (result.success) {
          setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
          alert(`¡Registro Exitoso!\n\nSe guardó correctamente la Partida: ${nuevo.codigo_partida}`);
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

      updateMetrado(id, { [field]: value, parcial: p, total: t });
    } else {
      updateMetrado(id, { [field]: value });
    }
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

  // Filtra los metrados mostrados según el proyecto activo
  const metradosFiltrados = metrados.filter(m => !m.proyecto || m.proyecto === context.proyecto);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">

      {/* Header */}
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Metrados Belempampa
            </h1>
            <p className="text-sm text-gray-500 font-medium">Plataforma Costos y Presupuestos</p>
          </div>
        </div>

        {/* ─── Selector de Especialidad ─── */}
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

        <button 
          onClick={() => setShowPersonalDashboard(true)}
          className="ml-auto bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 flex items-center gap-2 rounded-xl text-sm font-bold shadow-md transition-all shadow-slate-900/20"
        >
          <Users className="w-4 h-4" />
          Personal y Cuadrillas
        </button>
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
            proyecto={context.proyecto}
          />
        </div>

        {/* Right Column: Table History */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
          />
        </div>

      </main>

      {showPersonalDashboard && (
        <DashboardPersonal onClose={() => setShowPersonalDashboard(false)} />
      )}

    </div>
  );
}

export default App;
