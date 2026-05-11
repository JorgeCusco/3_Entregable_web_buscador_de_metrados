import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabase';
import Cookies from 'js-cookie';
import { User } from '../types';

interface SystemConfig {
    fecha_cierre: string; // YYYY-MM-DD
    activo: boolean;
}

interface AuthState {
    user: User | null;
    systemConfig: SystemConfig | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
    checkAuth: () => void;
    fetchSystemConfig: () => Promise<void>;
    isLiquidaciones: () => boolean;
    hasLiquidacionesAccess: () => boolean;
    isAdminPresupuesto: () => boolean;
    isGerencia: () => boolean;
    isReadOnlyMetrados: () => boolean;
    canEditMetrado: (autorReferencia: string, recordDate?: string) => boolean;
}

const COOKIE_NAME = 'gore_cusco_session';
// Si estamos en producción, usamos el wildcard de dominio para SSO entre subdominios
const COOKIE_DOMAIN = import.meta.env.PROD ? '.copgorecusco.com' : undefined;

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            systemConfig: null,
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
            },

            fetchSystemConfig: async () => {
                try {
                    const { data } = await (supabase
                        .from('ecosistema_usuarios')
                        .select('roles_apps')
                        .eq('dni_username', 'SISTEMA')
                        .single() as any);
                    
                    const roles = data?.roles_apps as any;
                    if (roles?.metrados_lock) {
                        set({ systemConfig: roles.metrados_lock });
                    }
                } catch (e) {
                    console.error('Error cargando configuración del sistema:', e);
                }
            },

            isLiquidaciones: () => {
                const user = get().user;
                if (!user) return false;
                return user.area?.toUpperCase().includes('LIQUIDACIONES') || 
                       user.roles_apps?.liquidaciones === 'editor';
            },

            hasLiquidacionesAccess: () => {
                const user = get().user;
                if (!user) return false;
                return user.roles_apps?.liquidaciones === 'editor' || 
                       user.roles_apps?.liquidaciones === 'lector';
            },
            
            isAdminPresupuesto: () => {
                const user = get().user;
                if (!user) return false;
                return user.es_administrador_presupuesto === true || 
                       user.roles_apps?.admin_presupuesto === true;
            },

            isGerencia: () => {
                const user = get().user;
                if (!user) return false;
                return user.es_gerencia === true;
            },

            isReadOnlyMetrados: () => {
                const user = get().user;
                if (!user) return false;
                // Es lector si tiene el rol explícito o si su cargo es Visita/Observador
                const metradoRole = (user.roles_apps?.metrados || "").toLowerCase();
                const cargo = (user.cargo || "").toUpperCase();
                
                return metradoRole === 'lector' || 
                       cargo.includes("VISITA") || 
                       cargo.includes("OBSERVADOR") ||
                       cargo.includes("LECTOR");
            },

            canEditMetrado: (autorReferencia: string, recordDate?: string) => {
                const user = get().user;
                if (!user) return false;
                if (get().isReadOnlyMetrados()) return false;

                const isAdmin = get().isAdminPresupuesto() || get().isGerencia();

                // 1. Bloqueo Global por Fecha (Candado)
                // Si el candado está activo y la fecha del registro es anterior a la fecha de cierre, BLOQUEAMOS.
                // Los administradores (Gerencia/Presupuesto) ignoran esta restricción.
                const config = get().systemConfig;
                if (!isAdmin && config?.activo && recordDate && config.fecha_cierre) {
                    if (recordDate <= config.fecha_cierre) {
                        return false;
                    }
                }

                const role = (user.roles_apps?.metrados || "").toUpperCase();
                const cargo = (user.cargo || "").toUpperCase();

                // Roles Master tienen acceso total (Admins/Supervisores)
                if (['TODAS', 'TODOS', 'ADMIN', 'MASTER', 'SUPERVISOR'].includes(role)) return true;

                // Si el cargo incluye 'METRADOR', es un usuario regular: solo edita sus propios registros.
                if (cargo.includes('METRADOR')) {
                    const miNombre = (user.nombre_completo || "").trim().toUpperCase();
                    const autorFila = (autorReferencia || "").trim().toUpperCase();
                    return miNombre === autorFila;
                }

                // En cualquier otro caso (es un Especialista/Jefe asignado a un Rol de Especialidad), tiene acceso total a lo que ve en su pantalla
                return true;
            }
        }),
        {
            name: 'auth-storage',
        }
    )
);
