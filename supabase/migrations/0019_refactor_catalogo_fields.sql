-- Migración 0019: Reestructuración de campos presupuestales
-- Esta migración añade los nombres específicos solicitados por el usuario para el control físico y financiero.

ALTER TABLE catalogo_partidas 
ADD COLUMN IF NOT EXISTS metrado_anterior_acumulado NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS valorizacion_anterior NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS pu_actual NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS metrado_programado NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS valorizacion_programada NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS metrado_anterior NUMERIC DEFAULT 0,
ADD COLUMN IF NOT EXISTS presupuesto_anterior NUMERIC DEFAULT 0;

-- Migración de datos inicial (mapeo desde columnas antiguas)
UPDATE catalogo_partidas SET
  metrado_anterior_acumulado = COALESCE(acumulado_anterior_qty, 0),
  pu_actual = COALESCE(precio_unitario, 0),
  metrado_programado = COALESCE(cantidad_presupuesto, 0),
  valorizacion_programada = COALESCE(cantidad_presupuesto, 0) * COALESCE(precio_unitario, 0);

COMMENT ON COLUMN catalogo_partidas.metrado_anterior_acumulado IS 'Metrado acumulado ejecutado antes de iniciar el sistema (Histórico).';
COMMENT ON COLUMN catalogo_partidas.valorizacion_anterior IS 'Valorización (en Soles) acumulada antes de iniciar el sistema (Histórico).';
COMMENT ON COLUMN catalogo_partidas.pu_actual IS 'Precio unitario actual (APU) utilizado para los cálculos del mes.';
COMMENT ON COLUMN catalogo_partidas.metrado_programado IS 'Cantidad total contractual o programada para la partida.';
COMMENT ON COLUMN catalogo_partidas.valorizacion_programada IS 'Monto total contractual o programado en Soles.';
COMMENT ON COLUMN catalogo_partidas.metrado_anterior IS 'Metrado ejecutado solo en el mes exactamente anterior (Informativo).';
COMMENT ON COLUMN catalogo_partidas.presupuesto_anterior IS 'Presupuesto anterior acumulado (Informativo).';
