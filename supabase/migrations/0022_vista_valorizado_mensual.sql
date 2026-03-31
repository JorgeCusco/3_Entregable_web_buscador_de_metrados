-- Vista para el seguimiento de valorización mensual por partida
-- Calcula el metrado registrado en el sistema y su correspondiente valorizado (PU * Metrado)
CREATE OR REPLACE VIEW vista_metrados_mensuales_valorizados AS
SELECT 
  cp.id as partida_id,
  cp.codigo,
  cp.descripcion,
  cp.unidad,
  cp.metrado_programado,
  cp.metrado_anterior_acumulado,
  cp.pu_actual,
  COALESCE(SUM(m.total), 0) as metrado_sistema,
  (COALESCE(SUM(m.total), 0) * COALESCE(cp.pu_actual, 0)) as valorizado_actual_metrado_mes,
  (cp.metrado_anterior_acumulado + COALESCE(SUM(m.total), 0)) as metrado_acumulado_total,
  ((cp.metrado_anterior_acumulado + COALESCE(SUM(m.total), 0)) * COALESCE(cp.pu_actual, 0)) as valorizado_acumulado_total
FROM catalogo_partidas cp
LEFT JOIN metrados m ON cp.codigo = m.codigo_partida
GROUP BY cp.id, cp.codigo, cp.descripcion, cp.unidad, cp.metrado_programado, cp.metrado_anterior_acumulado, cp.pu_actual;

COMMENT ON VIEW vista_metrados_mensuales_valorizados IS 'Resumen físico-financiero por partida: Periodo Actual (Mes) vs Acumulado Total';
