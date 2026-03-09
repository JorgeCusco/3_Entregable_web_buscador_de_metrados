import { useState } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado } from './types';
import { Building2 } from 'lucide-react';

function App() {
  const { state, actions } = useMetradosForm();
  const [metrados, setMetrados] = useState<Metrado[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const handleGuardar = () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      setMetrados(prev => [nuevo, ...prev]);
      setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleDeleteMetrado = (id: string) => {
    setMetrados(prev => prev.filter(m => m.id !== id));
    setToast('Registro eliminado exitosamente');
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
          <MetradosTable
            metrados={metrados}
            onUpdate={handleUpdateMetrado}
            onDelete={handleDeleteMetrado}
          />
        </div>

      </main>

    </div>
  );
}

export default App;
