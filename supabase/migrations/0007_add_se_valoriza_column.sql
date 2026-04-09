-- Migración 0007: Soporte para Valorización Selectiva y Proyecciones Modificadas
-- Añadir columna 'se_valoriza' para separar actividades operativas de financieras

-- 1. Añadir a Catálogo Maestro
ALTER TABLE public.catalogo_partidas 
ADD COLUMN IF NOT EXISTS se_valoriza BOOLEAN DEFAULT true;

-- 2. Añadir a Partidas Personalizadas (PC)
ALTER TABLE public.partidas_personalizadas 
ADD COLUMN IF NOT EXISTS se_valoriza BOOLEAN DEFAULT true;

-- Nota: Por defecto todas se valorizan (S/). 
-- El administrador podrá marcar como 'false' aquellas que sean puramente operativas o de bajo costo.

COMMENT ON COLUMN public.catalogo_partidas.se_valoriza IS 'Indica si el avance de esta partida debe sumarse al monto valorizado (S/) del proyecto.';
COMMENT ON COLUMN public.partidas_personalizadas.se_valoriza IS 'Indica si esta partida nueva debe sumarse al monto valorizado (S/) en el modificado.';
