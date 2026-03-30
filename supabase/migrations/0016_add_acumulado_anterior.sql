-- Migración 0016: Agregar columna para acumulado histórico manual
-- Este campo permite definir un punto de partida para partidas ya ejecutadas antes del sistema.

ALTER TABLE catalogo_partidas 
ADD COLUMN IF NOT EXISTS acumulado_anterior_qty NUMERIC DEFAULT 0;

COMMENT ON COLUMN catalogo_partidas.acumulado_anterior_qty IS 'Metrado acumulado de meses anteriores que no están registrados individualmente en la tabla metrados.';
