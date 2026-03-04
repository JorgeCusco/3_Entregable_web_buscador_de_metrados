import { useState } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import { Metrado } from './types';
import { Building2 } from 'lucide-react';

function App() {
  const { state, actions } = useMetradosForm();
  const [metrados, setMetrados] = useState<Metrado[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const handleGuardar = () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      // Put at the beginning to see recently added first
      setMetrados(prev => [nuevo, ...prev]);

      // Show simple toast
      setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1600px] mx-auto">

      {/* Header */}
      <header className="flex items-center gap-3 px-2">
        <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
          <Building2 className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Metrados Belempampa
          </h1>
          <p className="text-sm text-gray-500 font-medium">Plataforma Costos y Presupuestos</p>
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
          />
        </div>

        {/* Right Column: Table History */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          <MetradosTable metrados={metrados} />
        </div>

      </main>

    </div>
  );
}

export default App;
