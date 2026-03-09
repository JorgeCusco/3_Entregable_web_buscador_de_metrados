import React, { useState } from 'react';
import { Lock, User, Loader2, AlertCircle } from 'lucide-react';

interface LoginFormProps {
    onLogin: (token: string, user: any) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const API_URL = (import.meta.env.VITE_API_URL || `http://${window.location.hostname}:3001`).replace(/\/$/, "");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Error al iniciar sesión');
            }

            onLogin(data.token, data.user);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/20">
                <div className="bg-slate-900 p-10 text-center relative overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40 rotate-3">
                            <Lock className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Inkaia <span className="text-blue-500">Suite</span></h2>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Control de Ingeniería v4.0 PRO</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    {error && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold animate-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Usuario</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 pl-12 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-bold text-slate-700 text-sm"
                                placeholder="Ingresa tu usuario"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest ml-1">Contraseña</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 pl-12 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-bold text-slate-700 text-sm"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-3 text-sm uppercase tracking-widest mt-4"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Validando...
                            </>
                        ) : (
                            'Iniciar Sesión'
                        )}
                    </button>

                    <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider py-2">
                        Sistema restringido para personal autorizado
                    </p>
                </form>

                <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Inkaia S.A.C.</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Servidor Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
