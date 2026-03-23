export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      proyectos: {
        Row: {
          id: string
          codigo: string
          nombre: string
        }
        Insert: {
          id?: string
          codigo: string
          nombre: string
        }
        Update: {
          id?: string
          codigo?: string
          nombre?: string
        }
      }
      catalogo_partidas: {
        Row: {
          id: string
          codigo: string
          descripcion: string
          unidad: string
          jerarquia: string[] | null
          nivel_jerarquia: number | null
          is_title: boolean
          parent_id: string | null
          proyecto_id: string | null
        }
        Insert: {
          id?: string
          codigo: string
          descripcion: string
          unidad: string
          jerarquia?: string[] | null
          nivel_jerarquia?: number | null
          is_title?: boolean
          parent_id?: string | null
          proyecto_id?: string | null
        }
        Update: {
          id?: string
          codigo?: string
          descripcion?: string
          unidad?: string
          jerarquia?: string[] | null
          nivel_jerarquia?: number | null
          is_title?: boolean
          parent_id?: string | null
          proyecto_id?: string | null
        }
      }
      partidas_personalizadas: {
        Row: {
          id: string
          codigo: string
          descripcion: string
          unidad: string
          modificacion: string | null
        }
        Insert: {
          id?: string
          codigo: string
          descripcion: string
          unidad: string
          modificacion?: string | null
        }
        Update: {
          id?: string
          codigo?: string
          descripcion?: string
          unidad?: string
          modificacion?: string | null
        }
      }
      catalogo_hvac: {
        Row: {
          id: string
          categoria: string
          label: string
          factor: number
        }
        Insert: {
          id?: string
          categoria: string
          label: string
          factor: number
        }
        Update: {
          id?: string
          categoria?: string
          label?: string
          factor?: number
        }
      }
      personal: {
        Row: {
          id: string
          dni: string
          nombre_original: string
          nombre_formateado: string
          especialidad: string | null
          cuadrilla: string | null
          categoria: string | null
          sexo: string | null
          telefono: string | null
          condicion: string | null
          oficio: string | null
          fecha_ingreso: string | null
        }
        Insert: {
          id?: string
          dni: string
          nombre_original: string
          nombre_formateado: string
          especialidad?: string | null
          cuadrilla?: string | null
          categoria?: string | null
          sexo?: string | null
          telefono?: string | null
          condicion?: string | null
          oficio?: string | null
          fecha_ingreso?: string | null
        }
        Update: {
          id?: string
          dni?: string
          nombre_original?: string
          nombre_formateado?: string
          especialidad?: string | null
          cuadrilla?: string | null
          categoria?: string | null
          sexo?: string | null
          telefono?: string | null
          condicion?: string | null
          oficio?: string | null
          fecha_ingreso?: string | null
        }
      }
      metrados_personal: {
        Row: {
          metrado_id: string
          personal_id: string
        }
        Insert: {
          metrado_id: string
          personal_id: string
        }
        Update: {
          metrado_id?: string
          personal_id?: string
        }
      }
      metrados: {
        Row: {
          id: string
          fecha: string
          frente: string
          bloque: string
          nivel: string
          cuadrilla: string | null
          partida_id: string | null
          custom_partida_id: string | null
          codigo_partida: string | null
          descripcion_partida: string | null
          unidad: string | null
          elemento: string | null
          detalle: string | null
          diametro: string | null
          cantidad: number | null
          longitud_area: number | null
          ancho_empalme: number | null
          altura_gancho: number | null
          parcial: number | null
          nro_veces: number | null
          total: number | null
          autor_usuario: string | null
          proyecto: string | null
          created_at: string
          hvac_factor: number | null
          hvac_item_type: string | null
        }
        Insert: {
          id?: string
          fecha: string
          frente: string
          bloque: string
          nivel: string
          cuadrilla?: string | null
          partida_id?: string | null
          custom_partida_id?: string | null
          codigo_partida?: string | null
          descripcion_partida?: string | null
          unidad?: string | null
          elemento?: string | null
          detalle?: string | null
          diametro?: string | null
          cantidad?: number | null
          longitud_area?: number | null
          ancho_empalme?: number | null
          altura_gancho?: number | null
          parcial?: number | null
          nro_veces?: number | null
          total?: number | null
          autor_usuario?: string | null
          proyecto?: string | null
          created_at?: string
          hvac_factor?: number | null
          hvac_item_type?: string | null
        }
        Update: {
          id?: string
          fecha?: string
          frente?: string
          bloque?: string
          nivel?: string
          cuadrilla?: string | null
          partida_id?: string | null
          custom_partida_id?: string | null
          codigo_partida?: string | null
          descripcion_partida?: string | null
          unidad?: string | null
          elemento?: string | null
          detalle?: string | null
          diametro?: string | null
          cantidad?: number | null
          longitud_area?: number | null
          ancho_empalme?: number | null
          altura_gancho?: number | null
          parcial?: number | null
          nro_veces?: number | null
          total?: number | null
          autor_usuario?: string | null
          proyecto?: string | null
          created_at?: string
          hvac_factor?: number | null
          hvac_item_type?: string | null
        }
      }
      ecosistema_usuarios: {
        Row: {
          id: string
          dni_username: string
          password: string
          nombre_completo: string
          correo: string | null
          area: string | null
          cargo: string | null
          especialidad: string | null
          roles_apps: Json | null
          created_at: string
          last_login: string | null
        }
        Insert: {
          id?: string
          dni_username: string
          password: string
          nombre_completo: string
          correo?: string | null
          area?: string | null
          cargo?: string | null
          especialidad?: string | null
          roles_apps?: Json | null
          created_at?: string
          last_login?: string | null
        }
        Update: {
          id?: string
          dni_username?: string
          password?: string
          nombre_completo?: string
          correo?: string | null
          area?: string | null
          cargo?: string | null
          especialidad?: string | null
          roles_apps?: Json | null
          created_at?: string
          last_login?: string | null
        }
      }
    }
  }
}
