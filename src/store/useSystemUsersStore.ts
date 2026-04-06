import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '../types';

interface SystemUsersState {
    systemUsers: User[];
    fetchSystemUsers: () => Promise<void>;
}

export const useSystemUsersStore = create<SystemUsersState>()((set) => ({
    systemUsers: [],
    
    fetchSystemUsers: async () => {
        const { data, error } = await supabase
            .from('ecosistema_usuarios')
            .select('id, dni_username, nombre_completo, especialidad, roles_apps')
            .eq('is_active', true)
            .order('nombre_completo');
            
        if (!error && data) {
            set({ systemUsers: data as User[] });
        }
    }
}));
