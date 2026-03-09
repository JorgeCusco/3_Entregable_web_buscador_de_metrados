import { useState, useEffect } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { DatabaseViewer } from './components/DatabaseViewer';
import { UserSelectionModal } from './components/UserSelectionModal';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado } from './types';
import { Building2, LayoutGrid, Database, LogOut } from 'lucide-react';

function App() {
  const { state, actions } = useMetradosForm();
  const [metrados, setMetrados] = useState<Metrado[]>([]);
  const [view, setView] = useState<'hierarchical' | 'database'>('hierarchical');
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(localStorage.getItem('inkaia_user'));

  // URL del Backend (Render)
  const API_URL = (import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3001`).replace(/\/$/, "");

  // CARGAR DATOS DE LA NUBE AL INICIAR
  useEffect(() => {
    const fetchMetrados = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/metrados`);
        const data = await res.json();
        setMetrados(data);
      } catch (err) {
        console.error("Error cargando metrados:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMetrados();
  }, []);

  const handleGuardar = async () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      // Inyectar el autor real antes de enviar
      const dataConAutor = { ...nuevo, autor_usuario: currentUser || 'Anonimo' };

      try {
        const res = await fetch(`${API_URL}/api/metrados`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataConAutor)
        });
        const guardado = await res.json();
        setMetrados(prev => [guardado, ...prev]);
        setToast(`Guardado por ${currentUser}: ${guardado.codigo_partida}`);
      } catch (err) {
        setToast("Error al guardar en la nube");
      }
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleUserSelect = (name: string) => {
    setCurrentUser(name);
    localStorage.setItem('inkaia_user', name);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('inkaia_user');
  };

  const handleDeleteMetrado = async (id: string) => {
    try {
      // Intentar borrar de la nube si es un ID de MongoDB (24 chars aprox) o el ID local
      await fetch(`${API_URL}/api/metrados/${id}`, { method: 'DELETE' });
      setMetrados(prev => prev.filter(m => m.id !== id && (m as any)._id !== id));
      setToast('Registro eliminado de la nube');
    } catch (err) {
      setToast("Error al eliminar");
    }
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateMetrado = (id: string, field: keyof Metrado, value: any) => {
    setMetrados(prev => prev.map(m => {
      if (m.id !== id) return m;

      const updated = { ...m, [field]: value };

      // Si modificó dimensiones o cantidad, recalcular parcial y total
      if (['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces'].includes(field as string)) {

        const parseVal = (v: any) => {
          if (v === "" || v === undefined || v === null) return null;
          const num = parseFloat(String(v));
          return isNaN(num) ? null : num;
        };

        const cant = parseVal(updated.cantidad);
        const l = parseVal(updated.longitud_area);
        const a = parseVal(updated.ancho_empalme);
        const h = parseVal(updated.altura_gancho);

        // Multiplicar todo lo que no sea null
        let product = 1;
        let hasFactors = false;

        [cant, l, a, h].forEach(val => {
          if (val !== null) {
            product *= val;
            hasFactors = true;
          }
        });

        // Si todos están vacíos (cosa rara pero posible), el parcial es 0
        updated.parcial = hasFactors ? product : 0;

        // Recalcular Total (Parcial * Nro de Veces)
        const veces = parseVal(updated.nro_veces);
        updated.total = updated.parcial * (veces !== null ? veces : 1);
      }

      return updated;
    }));
  };

  const MainContent = (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header Principal */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 tracking-tight leading-none">INKAIA</h1>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">Civil Engineering Suite</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Técnico Activo</span>
              <span className="text-sm font-bold text-slate-700">{currentUser}</span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all"
              title="Cambiar Usuario"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div className="hidden sm:flex flex-col items-end leading-tight">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Smart Metrados</span>
            <span className="text-slate-900 font-black text-xl tracking-tighter">v4.0 <span className="text-blue-600">PRO</span></span>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 mt-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          {toast}
        </div>
      )}

      {/* Main Layout Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh] p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
        {/* Left Column: Form */}
        <div className="lg:col-span-4 xl:col-span-3">
          <MetradosForm
            state={state}
            actions={actions}
            onGuardar={handleGuardar}
          />
        </div>

        {/* Right Column: Table/Database */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          <div className="flex-grow min-h-0 flex flex-col gap-4">
            {/* Tabs de Navegación */}
            <div className="flex items-center gap-1 bg-white/50 p-1 rounded-xl w-fit border border-slate-200/50 self-end">
              <button
                onClick={() => setView('hierarchical')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${view === 'hierarchical' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Vista Jerárquica
              </button>
              <button
                onClick={() => setView('database')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${view === 'database' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                <Database className="w-3.5 h-3.5" />
                Base de Datos
              </button>
            </div>

            <div className="flex-grow overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <span className="text-sm font-bold text-slate-400 animate-pulse">Sincronizando con la nube...</span>
                </div>
              ) : view === 'hierarchical' ? (
                <MetradosTable
                  metrados={metrados}
                  onUpdate={handleUpdateMetrado}
                  onDelete={handleDeleteMetrado}
                />
              ) : (
                <DatabaseViewer
                  metrados={metrados}
                  onUpdate={handleUpdateMetrado}
                  onDelete={handleDeleteMetrado}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <>
      {!currentUser && <UserSelectionModal onSelect={handleUserSelect} />}
      {MainContent}
    </>
  );
}

// Icono temporal para el Toast
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

export default App;
