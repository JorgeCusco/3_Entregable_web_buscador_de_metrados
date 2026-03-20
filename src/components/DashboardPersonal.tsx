import { useState, useMemo } from 'react';
import { usePersonalStore, Personal } from '../store/usePersonalStore';
import { ESPECIALIDADES_PARTIDA } from '../constants/especialidades';
import { Users, X, Plus, Edit2, Save, Trash2, Search } from 'lucide-react';

interface DashboardPersonalProps {
    onClose: () => void;
}

export function DashboardPersonal({ onClose }: DashboardPersonalProps) {
    const { personal, updateWorker, deleteWorker, addWorker } = usePersonalStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState<Partial<Personal>>({});
    const [isAdding, setIsAdding] = useState(false);
    
    // New worker form state
    const [newWorker, setNewWorker] = useState({
        dni: '', nombre_original: '', sexo: 'M', especialidad: '', cuadrilla: '',
        categoria: 'PEON', telefono: '', condicion: 'OBRERO', oficio: '', fecha_ingreso: ''
    });

    // Extract unique cuadrillas for filter/dropdown
    const uniqueCuadrillas = useMemo(() => {
        const cuadrillas = personal.map(p => p.cuadrilla).filter(c => c && c.trim() !== '' && c !== 'nan');
        return Array.from(new Set(cuadrillas)).sort();
    }, [personal]);

    // Filter personal based on search
    const filteredPersonal = useMemo(() => {
        if (!searchTerm) return personal;
        const lower = searchTerm.toLowerCase();
        return personal.filter(p => 
            p.nombre_formateado?.toLowerCase().includes(lower) || 
            p.dni?.includes(lower) ||
            p.cuadrilla?.toLowerCase().includes(lower)
        );
    }, [personal, searchTerm]);

    const handleEditClick = (worker: Personal) => {
        setEditingId(worker.id);
        setEditForm({ especialidad: worker.especialidad, cuadrilla: worker.cuadrilla, categoria: worker.categoria });
    };

    const handleSaveEdit = (id: string) => {
        if (editForm.especialidad !== undefined) updateWorker(id, 'especialidad', editForm.especialidad);
        if (editForm.cuadrilla !== undefined) updateWorker(id, 'cuadrilla', editForm.cuadrilla);
        if (editForm.categoria !== undefined) updateWorker(id, 'categoria', editForm.categoria);
        setEditingId(null);
    };

    const handleAddNew = () => {
        if (!newWorker.nombre_original || !newWorker.dni) return alert('DNI y Nombre son obligatorios');
        addWorker(newWorker);
        setIsAdding(false);
        setNewWorker({
            dni: '', nombre_original: '', sexo: 'M', especialidad: '', cuadrilla: '',
            categoria: 'PEON', telefono: '', condicion: 'OBRERO', oficio: '', fecha_ingreso: ''
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95">
                
                {/* Header */}
                <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                            <Users size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Gestión de Personal y Cuadrillas</h2>
                            <p className="text-slate-400 text-sm">Organiza los obreros, especialidades y asignación de cuadrillas.</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap gap-4 items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Buscar por nombre, DNI o cuadrilla..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-shadow"
                        />
                    </div>
                    <button 
                        onClick={() => setIsAdding(!isAdding)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md transition-colors"
                    >
                        <Plus size={18} /> Nuevo Obrero
                    </button>
                </div>

                {/* New Worker Form (Expandable) */}
                {isAdding && (
                    <div className="p-4 bg-blue-50/50 border-b border-blue-100 grid grid-cols-1 md:grid-cols-4 gap-4 animate-in slide-in-from-top-4">
                        <input className="input-col" placeholder="DNI *" value={newWorker.dni} onChange={e => setNewWorker({...newWorker, dni: e.target.value})} />
                        <input className="input-col" placeholder="Apellidos, Nombres *" value={newWorker.nombre_original} onChange={e => setNewWorker({...newWorker, nombre_original: e.target.value})} />
                        <select className="input-col" value={newWorker.especialidad} onChange={e => setNewWorker({...newWorker, especialidad: e.target.value})}>
                            <option value="">-- Especialidad --</option>
                            {ESPECIALIDADES_PARTIDA.filter(e => e.nombre !== 'TODAS').map(e => (
                                <option key={e.nombre} value={e.nombre}>{e.nombre}</option>
                            ))}
                        </select>
                        <input className="input-col" placeholder="Cuadrilla" value={newWorker.cuadrilla} onChange={e => setNewWorker({...newWorker, cuadrilla: e.target.value})} />
                        <input className="input-col" placeholder="Categoría (ej. PEON)" value={newWorker.categoria} onChange={e => setNewWorker({...newWorker, categoria: e.target.value})} />
                        <button onClick={handleAddNew} className="bg-green-600 text-white rounded-xl font-bold py-2 shadow-md hover:bg-green-700 transition">Guardar Obrero</button>
                    </div>
                )}

                {/* Table Container */}
                <div className="flex-1 overflow-auto bg-white p-4">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead className="bg-slate-100 sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="p-3 font-semibold text-slate-700 rounded-tl-lg">DNI</th>
                                <th className="p-3 font-semibold text-slate-700">Nombre</th>
                                <th className="p-3 font-semibold text-slate-700">Categoría</th>
                                <th className="p-3 font-semibold text-slate-700 min-w-[180px]">Especialidad</th>
                                <th className="p-3 font-semibold text-slate-700 min-w-[150px]">Cuadrilla</th>
                                <th className="p-3 font-semibold text-slate-700 text-right rounded-tr-lg">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredPersonal.map(worker => {
                                const isEditing = editingId === worker.id;
                                return (
                                    <tr key={worker.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="p-3 text-slate-600">{worker.dni}</td>
                                        <td className="p-3">
                                            <div className="font-semibold text-slate-800">{worker.nombre_formateado}</div>
                                            <div className="text-xs text-slate-400">{worker.nombre_original}</div>
                                        </td>
                                        <td className="p-3">
                                            {isEditing ? (
                                                <input 
                                                    className="w-full p-1 border rounded"
                                                    value={editForm.categoria || ''} 
                                                    onChange={e => setEditForm({...editForm, categoria: e.target.value})} 
                                                />
                                            ) : (
                                                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">{worker.categoria}</span>
                                            )}
                                        </td>
                                        <td className="p-3">
                                            {isEditing ? (
                                                <select 
                                                    className="w-full p-1 border rounded focus:ring-1 focus:ring-blue-500"
                                                    value={editForm.especialidad || ''}
                                                    onChange={e => setEditForm({...editForm, especialidad: e.target.value})}
                                                >
                                                    <option value="">Ninguna</option>
                                                    {ESPECIALIDADES_PARTIDA.filter(e => e.nombre !== 'TODAS').map(e => (
                                                        <option key={e.nombre} value={e.nombre}>{e.nombre}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <span className="text-slate-700">{worker.especialidad || '-'}</span>
                                            )}
                                        </td>
                                        <td className="p-3">
                                            {isEditing ? (
                                                <input 
                                                    list="cuadrillas-list"
                                                    className="w-full p-1 border rounded focus:ring-1 focus:ring-blue-500"
                                                    value={editForm.cuadrilla || ''}
                                                    onChange={e => setEditForm({...editForm, cuadrilla: e.target.value})}
                                                    placeholder="Ej. Cuadrilla 1"
                                                />
                                            ) : (
                                                <span className="text-slate-700 font-medium">{worker.cuadrilla || '-'}</span>
                                            )}
                                        </td>
                                        <td className="p-3 text-right">
                                            <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                {isEditing ? (
                                                    <button onClick={() => handleSaveEdit(worker.id)} className="p-1.5 text-green-600 bg-green-50 hover:bg-green-100 rounded-md" title="Guardar">
                                                        <Save size={16} />
                                                    </button>
                                                ) : (
                                                    <button onClick={() => handleEditClick(worker)} className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md" title="Editar">
                                                        <Edit2 size={16} />
                                                    </button>
                                                )}
                                                <button onClick={() => { if(confirm('¿Eliminar obrero?')) deleteWorker(worker.id) }} className="p-1.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-md" title="Eliminar">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    
                    {/* Datalist for Cuadrillas autocomplete */}
                    <datalist id="cuadrillas-list">
                        {uniqueCuadrillas.map(c => <option key={c} value={c} />)}
                    </datalist>

                </div>
                
                {/* Footer */}
                <div className="bg-slate-50 border-t border-slate-200 p-2 text-center text-xs text-slate-500">
                    Mostrando {filteredPersonal.length} de {personal.length} obreros registrados.
                </div>
            </div>
            
            <style>{`
                .input-col {
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 0.5rem;
                    outline: none;
                    transition: all 0.2s;
                }
                .input-col:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
            `}</style>
        </div>
    );
}
