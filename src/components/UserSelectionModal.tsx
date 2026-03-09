import React, { useState } from 'react';
import { User, CheckCircle2 } from 'lucide-react';

interface UserSelectionModalProps {
    onSelect: (userName: string) => void;
}

const ASISTENTES = [
    "Ing. Residente",
    "Ing. Supervisor",
    "Asistente Técnico 01",
    "Asistente Técnico 02",
    "Metrador Especializado",
    "Control de Proyectos"
];

export const UserSelectionModal: React.FC<UserSelectionModalProps> = ({ onSelect }) => {
    const [selected, setSelected] = useState('');

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="bg-slate-900 p-8 text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                        <User className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 tracking-tight">Identificación de Usuario</h2>
                    <p className="text-slate-400 text-sm">Selecciona tu perfil para registrar los metrados a tu nombre.</p>
                </div>

                <div className="p-6 space-y-2">
                    {ASISTENTES.map((name) => (
                        <button
                            key={name}
                            onClick={() => setSelected(name)}
                            className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selected === name
                                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                    : 'border-slate-100 hover:border-slate-200 text-slate-600'
                                }`}
                        >
                            <span className="font-bold text-sm uppercase tracking-wide">{name}</span>
                            {selected === name && <CheckCircle2 className="w-5 h-5 text-blue-500" />}
                        </button>
                    ))}

                    <button
                        disabled={!selected}
                        onClick={() => onSelect(selected)}
                        className={`w-full mt-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg ${selected
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                            }`}
                    >
                        Ingresar a Inkaia
                    </button>
                </div>

                <div className="p-4 bg-slate-50 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100">
                    Smart Metrados • v4.0 Pro
                </div>
            </div>
        </div>
    );
};
