import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { LogIn, User, Lock, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const login = useAuthStore((state) => state.login);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const result = await login(username, password);
            if (!result.success) {
                setError(result.error || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error de conexión con el servidor');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8">
                    {/* Header / Logo Section */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
                            <LogIn className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Ecosistema GORE Cusco</h1>
                        <p className="text-gray-500 mt-2">Ingresa tus credenciales para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                DNI / Usuario
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 sm:text-sm"
                                    placeholder="Ingresa tu DNI"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 sm:text-sm"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl animate-shake">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                <span className="text-sm text-red-700 font-medium">{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-[0.98] ${
                                isLoading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Verificando...</span>
                                </div>
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Section */}
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500">
                        © 2026 GORE Cusco - Control de Metrados Dinámico
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-medium">
                        Infraestructura Pro
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
