import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createClient } from '@supabase/supabase-js';
import Cookies from 'js-cookie';
import { User } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    checkAuth: () => void;
}

const COOKIE_NAME = 'gore_cusco_session';
// Si estamos en producción, usamos el wildcard de dominio para SSO entre subdominios
const COOKIE_DOMAIN = import.meta.env.PROD ? '.copgorecusco.com' : undefined;

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,

            login: async (username, password) => {
                const { data, error } = await supabase
                    .from('ecosistema_usuarios')
                    .select('*')
                    .eq('dni_username', username)
                    .eq('password', password)
                    .single();

                if (error || !data) {
                    return { success: false, error: 'Credenciales inválidas' };
                }

                const user: User = data;
                
                // Seteamos Cookie para Single Sign-On (SSO) entre aplicaciones
                Cookies.set(COOKIE_NAME, JSON.stringify(user), {
                    expires: 7, // La sesión dura 7 días para evitar re-login diario
                    domain: COOKIE_DOMAIN,
                    sameSite: 'lax',
                    secure: import.meta.env.PROD
                });

                set({ user, isAuthenticated: true });
                return { success: true };
            },

            logout: () => {
                Cookies.remove(COOKIE_NAME, { domain: COOKIE_DOMAIN });
                set({ user: null, isAuthenticated: false });
                localStorage.removeItem('auth-storage');
            },

            checkAuth: () => {
                const cookieData = Cookies.get(COOKIE_NAME);
                if (cookieData) {
                    try {
                        const user = JSON.parse(cookieData);
                        set({ user, isAuthenticated: true });
                    } catch (e) {
                        get().logout();
                    }
                } else if (get().isAuthenticated) {
                    // Si el estado dice que está autenticado pero no hay cookie, cerramos sesión
                    get().logout();
                }
            }
        }),
        {
            name: 'auth-storage',
        }
    )
);
