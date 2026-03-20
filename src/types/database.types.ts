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
      metrados: {
        Row: {
          id: string
          fecha: string
          frente: string
          bloque: string
          nivel: string
          cuadrilla: string | null
          obrero_id: string | null
          partida_id: string | null
          custom_partida_id: string | null
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
          hvac_item_id: string | null
          autor_usuario: string | null
          proyecto?: string | null
          created_at: string
        }
        Insert: {
          id?: string
          fecha: string
          frente: string
          bloque: string
          nivel: string
          cuadrilla?: string | null
          obrero_id?: string | null
          partida_id?: string | null
          custom_partida_id?: string | null
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
          hvac_item_id?: string | null
          autor_usuario?: string | null
          proyecto?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          fecha?: string
          frente?: string
          bloque?: string
          nivel?: string
          cuadrilla?: string | null
          obrero_id?: string | null
          partida_id?: string | null
          custom_partida_id?: string | null
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
          hvac_item_id?: string | null
          autor_usuario?: string | null
          created_at?: string
        }
      }
    }
  }
}
