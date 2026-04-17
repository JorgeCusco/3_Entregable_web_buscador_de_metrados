-- Script para crear el entorno asilado para Partidas Creadas/Personalizadas (PC)

-- 1. Crear tabla idéntica para los registros de metrados (metrados_personalizados)
CREATE TABLE public.metrados_personalizados (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  fecha date NOT NULL,
  frente text NOT NULL,
  bloque text NOT NULL,
  nivel text NOT NULL,
  cuadrilla text,
  partida_id uuid,
  custom_partida_id uuid,
  elemento text,
  detalle text,
  diametro text,
  cantidad numeric,
  longitud_area numeric,
  ancho_empalme numeric,
  altura_gancho numeric,
  parcial numeric,
  nro_veces numeric,
  total numeric,
  hvac_item_id uuid,
  autor_usuario text,
  created_at timestamp with time zone DEFAULT now(),
  proyecto text DEFAULT 'hospital'::text,
  codigo_partida text,
  descripcion_partida text,
  unidad text,
  hvac_factor numeric,
  hvac_item_type text,
  especialidad text,
  grado text,
  user_id uuid DEFAULT auth.uid(),
  CONSTRAINT metrados_personalizados_pkey PRIMARY KEY (id),
  CONSTRAINT metrados_personalizados_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.catalogo_partidas(id),
  CONSTRAINT metrados_personalizados_custom_partida_id_fkey FOREIGN KEY (custom_partida_id) REFERENCES public.partidas_personalizadas(id),
  CONSTRAINT metrados_personalizados_hvac_item_id_fkey FOREIGN KEY (hvac_item_id) REFERENCES public.catalogo_hvac(id),
  CONSTRAINT fk_met_pers_especialidad FOREIGN KEY (especialidad) REFERENCES public.especialidad(nombre),
  CONSTRAINT fk_met_pers_autor FOREIGN KEY (autor_usuario) REFERENCES public.ecosistema_usuarios(nombre_completo)
);

-- 2. Crear tabla puente para la relación N:N con Personal
CREATE TABLE public.metrados_personalizados_personal (
  metrado_id uuid NOT NULL,
  personal_id uuid NOT NULL,
  CONSTRAINT metrados_personalizados_personal_pkey PRIMARY KEY (metrado_id, personal_id),
  CONSTRAINT fk_mp_pers_metrado FOREIGN KEY (metrado_id) REFERENCES public.metrados_personalizados(id) ON DELETE CASCADE,
  CONSTRAINT fk_mp_pers_personal FOREIGN KEY (personal_id) REFERENCES public.personal(id)
);

-- 3. Crear índices para optimizar consultas en la nueva tabla
CREATE INDEX idx_metrados_personalizados_fecha_frente ON public.metrados_personalizados(fecha, frente);
CREATE INDEX idx_metrados_personalizados_autor ON public.metrados_personalizados(autor_usuario);
CREATE INDEX idx_metrados_personalizados_codigo ON public.metrados_personalizados(codigo_partida);
