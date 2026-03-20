-- Añadir soporte para HVAC y tipos de ítems en metrados
ALTER TABLE metrados 
ADD COLUMN IF NOT EXISTS hvac_factor NUMERIC,
ADD COLUMN IF NOT EXISTS hvac_item_type TEXT;

-- Comentario informativo
COMMENT ON COLUMN metrados.hvac_factor IS 'Factor multiplicador para cálculos HVAC (ductos, accesorios)';
COMMENT ON COLUMN metrados.hvac_item_type IS 'Tipo de ítem HVAC: DUCTO, CODO, TEE, REDUCCION';
