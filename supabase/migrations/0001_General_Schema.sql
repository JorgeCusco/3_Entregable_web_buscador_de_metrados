-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.catalogo_hvac (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  categoria text NOT NULL,
  label text NOT NULL,
  factor numeric NOT NULL,
  CONSTRAINT catalogo_hvac_pkey PRIMARY KEY (id)
);
CREATE TABLE public.catalogo_partidas (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  codigo text NOT NULL,
  descripcion text NOT NULL,
  unidad text NOT NULL,
  jerarquia ARRAY,
  nivel_jerarquia integer,
  is_title boolean DEFAULT false,
  parent_id uuid,
  proyecto_id uuid,
  tipo_metrado text DEFAULT 'ESTANDAR'::text,
  modificacion text DEFAULT 'SM'::text,
  precio_unitario numeric DEFAULT 0,
  cantidad_presupuesto numeric DEFAULT 0,
  acumulado_anterior_qty numeric DEFAULT 0,
  metrado_anterior_acumulado numeric DEFAULT 0,
  valorizacion_anterior numeric DEFAULT 0,
  pu_actual numeric DEFAULT 0,
  metrado_programado numeric DEFAULT 0,
  valorizacion_programada numeric DEFAULT 0,
  CONSTRAINT catalogo_partidas_pkey PRIMARY KEY (id),
  CONSTRAINT catalogo_partidas_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.catalogo_partidas(id),
  CONSTRAINT catalogo_partidas_proyecto_id_fkey FOREIGN KEY (proyecto_id) REFERENCES public.proyectos(id)
);
CREATE TABLE public.ecosistema_usuarios (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  dni_username text NOT NULL UNIQUE,
  password text NOT NULL,
  nombre_completo text NOT NULL,
  correo text,
  area text,
  cargo text,
  especialidad text,
  roles_apps jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now(),
  last_login timestamp with time zone,
  CONSTRAINT ecosistema_usuarios_pkey PRIMARY KEY (id)
);
CREATE TABLE public.especialidad (
  id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre character varying NOT NULL UNIQUE,
  codigo_prefijos ARRAY DEFAULT ARRAY[]::text[],
  CONSTRAINT especialidad_pkey PRIMARY KEY (id)
);
CREATE TABLE public.hvac_catalogo_accesorios (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  categoria character varying NOT NULL,
  label character varying NOT NULL,
  factor numeric NOT NULL DEFAULT 1.0,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT hvac_catalogo_accesorios_pkey PRIMARY KEY (id)
);
CREATE TABLE public.insumo_mapping (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  master_id bigint,
  comprado_id bigint,
  usuario text,
  CONSTRAINT insumo_mapping_pkey PRIMARY KEY (id),
  CONSTRAINT insumo_mapping_master_id_fkey FOREIGN KEY (master_id) REFERENCES public.insumos_master(id),
  CONSTRAINT insumo_mapping_comprado_id_fkey FOREIGN KEY (comprado_id) REFERENCES public.insumos_comprado(id)
);
CREATE TABLE public.insumos_comprado (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  anio integer,
  tipo text,
  orden text,
  detalle text,
  unidad text,
  cantidad double precision,
  pu double precision,
  total double precision,
  observacion text,
  especialidad text,
  tipo_id bigint,
  CONSTRAINT insumos_comprado_pkey PRIMARY KEY (id),
  CONSTRAINT insumos_comprado_tipo_id_fkey FOREIGN KEY (tipo_id) REFERENCES public.tipos_movimiento(id)
);
CREATE TABLE public.insumos_master (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  item numeric,
  procedencia text,
  codigo text,
  descripcion text,
  unidad text,
  cantidad double precision,
  costo double precision,
  total double precision,
  CONSTRAINT insumos_master_pkey PRIMARY KEY (id)
);
CREATE TABLE public.metrados (
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
  CONSTRAINT metrados_pkey PRIMARY KEY (id),
  CONSTRAINT metrados_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.catalogo_partidas(id),
  CONSTRAINT metrados_custom_partida_id_fkey FOREIGN KEY (custom_partida_id) REFERENCES public.partidas_personalizadas(id),
  CONSTRAINT metrados_hvac_item_id_fkey FOREIGN KEY (hvac_item_id) REFERENCES public.catalogo_hvac(id)
);
CREATE TABLE public.metrados_liquidaciones (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  fecha date NOT NULL,
  frente text NOT NULL,
  bloque text NOT NULL,
  nivel text NOT NULL,
  cuadrilla text,
  partida_id uuid,
  custom_partida_id uuid,
  codigo_partida text NOT NULL,
  descripcion_partida text NOT NULL,
  unidad text NOT NULL,
  elemento text,
  detalle text,
  diametro text,
  cantidad numeric CHECK (cantidad IS NULL OR cantidad >= 0::numeric),
  longitud_area numeric,
  ancho_empalme numeric,
  altura_gancho numeric,
  parcial numeric,
  nro_veces numeric,
  total numeric CHECK (total IS NULL OR total >= 0::numeric),
  hvac_item_id uuid,
  hvac_factor numeric,
  hvac_item_type text,
  autor_usuario text NOT NULL,
  especialidad text,
  proyecto text DEFAULT 'hospital'::text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT metrados_liquidaciones_pkey PRIMARY KEY (id),
  CONSTRAINT metrados_liquidaciones_partida_id_fkey FOREIGN KEY (partida_id) REFERENCES public.catalogo_partidas(id),
  CONSTRAINT metrados_liquidaciones_custom_partida_id_fkey FOREIGN KEY (custom_partida_id) REFERENCES public.partidas_personalizadas(id)
);
CREATE TABLE public.metrados_personal (
  metrado_id uuid NOT NULL,
  personal_id uuid NOT NULL,
  CONSTRAINT metrados_personal_pkey PRIMARY KEY (metrado_id, personal_id),
  CONSTRAINT metrados_personal_metrado_id_fkey FOREIGN KEY (metrado_id) REFERENCES public.metrados(id),
  CONSTRAINT metrados_personal_personal_id_fkey FOREIGN KEY (personal_id) REFERENCES public.personal(id)
);
CREATE TABLE public.partidas_personalizadas (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  codigo text NOT NULL,
  descripcion text NOT NULL,
  unidad text NOT NULL,
  modificacion text DEFAULT 'PC'::text,
  especialidad text,
  tipo_metrado text DEFAULT 'ESTANDAR'::text,
  CONSTRAINT partidas_personalizadas_pkey PRIMARY KEY (id)
);
CREATE TABLE public.personal (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  dni text NOT NULL UNIQUE,
  nombre_original text NOT NULL,
  nombre_formateado text NOT NULL,
  especialidad text,
  cuadrilla text,
  categoria text,
  sexo text,
  telefono text,
  condicion text,
  oficio text,
  fecha_ingreso text,
  CONSTRAINT personal_pkey PRIMARY KEY (id)
);
CREATE TABLE public.proyectos (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  codigo text NOT NULL UNIQUE,
  nombre text NOT NULL,
  CONSTRAINT proyectos_pkey PRIMARY KEY (id)
);
CREATE TABLE public.tipos_movimiento (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre text UNIQUE,
  CONSTRAINT tipos_movimiento_pkey PRIMARY KEY (id)
);