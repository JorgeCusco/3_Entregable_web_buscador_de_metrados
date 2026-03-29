-- Migration: Add pricing and budget quantities to catalogo_partidas
-- Description: Adds 'precio_unitario' and 'cantidad_presupuesto' fields to track costs and identify Deductivos.

ALTER TABLE catalogo_partidas
ADD COLUMN IF NOT EXISTS precio_unitario NUMERIC(12,2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS cantidad_presupuesto NUMERIC(12,2) DEFAULT 0;

-- Optional comment explaining deducciones
COMMENT ON COLUMN catalogo_partidas.cantidad_presupuesto IS 'Si su cantidad es 0.00, se considera una partida de deductivo (DD) visualmente en el frontend. Si es > 0, es metrado base del presupuesto original.';
