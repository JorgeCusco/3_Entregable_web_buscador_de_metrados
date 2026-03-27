-- Nueva tabla para metrados de Liquidaciones
-- Estructura similar a metrados pero completamente independiente
CREATE TABLE metrados_liquidaciones (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    fecha DATE NOT NULL,
    frente TEXT NOT NULL,
    bloque TEXT NOT NULL,
    nivel TEXT NOT NULL,
    cuadrilla TEXT,
    
    -- Referencias al catálogo principal (no duplicamos datos)
    partida_id UUID REFERENCES catalogo_partidas(id) ON DELETE SET NULL,
    custom_partida_id UUID REFERENCES partidas_personalizadas(id) ON DELETE SET NULL,
    
    -- Datos denormalizados para rapidez
    codigo_partida TEXT NOT NULL,
    descripcion_partida TEXT NOT NULL,
    unidad TEXT NOT NULL,
    
    -- Campos de medición
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
    
    -- HVAC
    hvac_item_id UUID,
    hvac_factor NUMERIC,
    hvac_item_type TEXT,
    
    -- Auditoría y metadata
    autor_usuario TEXT NOT NULL,
    especialidad TEXT,
    proyecto TEXT DEFAULT 'hospital',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Índices para rendimiento
    CONSTRAINT valid_total CHECK (total IS NULL OR total >= 0),
    CONSTRAINT valid_cantidad CHECK (cantidad IS NULL OR cantidad >= 0)
);

-- Índices
CREATE INDEX idx_metrados_liquidaciones_autor ON metrados_liquidaciones(autor_usuario);
CREATE INDEX idx_metrados_liquidaciones_fecha ON metrados_liquidaciones(fecha DESC);
CREATE INDEX idx_metrados_liquidaciones_proyecto ON metrados_liquidaciones(proyecto);
CREATE INDEX idx_metrados_liquidaciones_especialidad ON metrados_liquidaciones(especialidad);
CREATE INDEX idx_metrados_liquidaciones_codigo ON metrados_liquidaciones(codigo_partida);

-- Comentarios de tabla
COMMENT ON TABLE metrados_liquidaciones IS 'Tabla independiente para registros de metrados del área de Liquidaciones. Aislada de metrados generales.';
COMMENT ON COLUMN metrados_liquidaciones.autor_usuario IS 'Usuario de Liquidaciones que creó el registro (desde ecosistema_usuarios.nombre_completo)';
COMMENT ON COLUMN metrados_liquidaciones.proyecto IS 'Proyecto fijo a hospital para Liquidaciones';
