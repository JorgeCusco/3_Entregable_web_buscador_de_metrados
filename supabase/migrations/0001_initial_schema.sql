-- PARTE 1: Configuración Inicial de la BD 
-- Ejecutar en el SQL Editor de Supabase

-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla: Proyectos
CREATE TABLE proyectos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  codigo TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL
);

-- Poblar estáticos (Hospital y Contingencia)
INSERT INTO proyectos (codigo, nombre) VALUES 
('HOSP', 'Proyecto Hospital'),
('CONT', 'Proyecto Contingencia')
ON CONFLICT (codigo) DO NOTHING;

-- 2. Tabla: Catálogo de Partidas
CREATE TABLE catalogo_partidas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  codigo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  unidad TEXT NOT NULL,
  jerarquia TEXT[],
  nivel_jerarquia INTEGER,
  is_title BOOLEAN DEFAULT false,
  parent_id UUID REFERENCES catalogo_partidas(id) ON DELETE CASCADE,
  proyecto_id UUID REFERENCES proyectos(id)
);

-- Indice para búsquedas rápidas por prefijo
CREATE INDEX idx_partidas_codigo ON catalogo_partidas(codigo);

-- 3. Tabla: Partidas Personalizadas
CREATE TABLE partidas_personalizadas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  codigo TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  unidad TEXT NOT NULL,
  modificacion TEXT DEFAULT 'PC'
);

-- 4. Tabla: HVAC
CREATE TABLE catalogo_hvac (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  categoria TEXT NOT NULL,
  label TEXT NOT NULL,
  factor NUMERIC NOT NULL
);

-- 5. Tabla: Personal
CREATE TABLE personal (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dni TEXT UNIQUE NOT NULL,
  nombre_original TEXT NOT NULL,
  nombre_formateado TEXT NOT NULL,
  especialidad TEXT,
  cuadrilla TEXT,
  categoria TEXT,
  sexo TEXT,
  telefono TEXT,
  condicion TEXT,
  oficio TEXT,
  fecha_ingreso TEXT
);

-- 6. Tabla: Metrados
CREATE TABLE metrados (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fecha DATE NOT NULL,
  frente TEXT NOT NULL,
  bloque TEXT NOT NULL,
  nivel TEXT NOT NULL,
  cuadrilla TEXT,
  obrero_id UUID REFERENCES personal(id) ON DELETE SET NULL,
  partida_id UUID REFERENCES catalogo_partidas(id) ON DELETE CASCADE,
  custom_partida_id UUID REFERENCES partidas_personalizadas(id) ON DELETE CASCADE,
  elemento TEXT,
  detalle TEXT,
  diametro TEXT,
  cantidad NUMERIC,
  longitud_area NUMERIC,
  ancho_empalme NUMERIC,
  altura_gancho NUMERIC,
  parcial NUMERIC,
  nro_veces NUMERIC,
  total NUMERIC,
  hvac_item_id UUID REFERENCES catalogo_hvac(id) ON DELETE SET NULL,
  autor_usuario TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Restricción XOR temporal (O es normal o es personalizada)
  CONSTRAINT chk_partida CHECK (
    (partida_id IS NOT NULL AND custom_partida_id IS NULL) OR 
    (partida_id IS NULL AND custom_partida_id IS NOT NULL)
  )
);
