-- Migration: Create HVAC accessories catalog table
-- Description: Stores labels and conversion factors for HVAC items (TEEs, Reductions, etc.)

CREATE TABLE IF NOT EXISTS hvac_catalogo_accesorios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    categoria VARCHAR(50) NOT NULL, -- TEE, REDUCCIONES, CODOS, DUCTOS, etc.
    label VARCHAR(255) NOT NULL,    -- Ej: "TEE 4x6-4x6"
    factor NUMERIC(15,8) NOT NULL DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for searching by category and label
CREATE INDEX IF NOT EXISTS idx_hvac_categoria ON hvac_catalogo_accesorios(categoria);
CREATE INDEX IF NOT EXISTS idx_hvac_label ON hvac_catalogo_accesorios(label);

-- Comment for documentation
COMMENT ON TABLE hvac_catalogo_accesorios IS 'Catálogo dinámico de factores de conversión para partidas de HVAC.';
