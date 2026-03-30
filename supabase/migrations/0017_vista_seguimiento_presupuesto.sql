-- Migración 0017: Vista de Análisis Presupuestal (Metrado vs Valorizado)
-- Esta vista realiza las multiplicaciones pesadas en el servidor, permitiendo reportes instantáneos.

CREATE OR REPLACE VIEW vista_analisis_presupuesto AS
WITH acumulado_sistema AS (
    -- Sumamos todos los metrados registrados en la tabla de ejecución
    SELECT 
        codigo_partida,
        SUM(total) as qty_sistema
    FROM metrados
    GROUP BY codigo_partida
)
SELECT 
    c.id,
    c.codigo,
    c.descripcion,
    c.unidad,
    c.precio_unitario,
    c.cantidad_presupuesto as qty_presupuestada,
    COALESCE(c.acumulado_anterior_qty, 0) as qty_anterior,
    COALESCE(a.qty_sistema, 0) as qty_actual,
    (COALESCE(c.acumulado_anterior_qty, 0) + COALESCE(a.qty_sistema, 0)) as qty_acumulada_total,
    -- Cálculos Monetarios (Multiplicaciones en Supabase)
    ROUND((c.cantidad_presupuesto * COALESCE(c.precio_unitario, 0))::numeric, 2) as soles_presupuestados_total,
    ROUND(((COALESCE(c.acumulado_anterior_qty, 0) + COALESCE(a.qty_sistema, 0)) * COALESCE(c.precio_unitario, 0))::numeric, 2) as soles_ejecutados_total,
    ROUND(((c.cantidad_presupuesto * COALESCE(c.precio_unitario, 0)) - ((COALESCE(c.acumulado_anterior_qty, 0) + COALESCE(a.qty_sistema, 0)) * COALESCE(c.precio_unitario, 0)))::numeric, 2) as soles_saldo_restante
FROM catalogo_partidas c
LEFT JOIN acumulado_sistema a ON c.codigo = a.codigo_partida;

COMMENT ON VIEW vista_analisis_presupuesto IS 'Vista maestra para el control de presupuesto. Une el catálogo (con su acumulado anterior) con la ejecución real del sistema.';
