-- PARTE 5: Blindaje de Casos Especiales Matemáticos
-- Añadir columna clasificadora 'tipo_metrado' a los catálogos para evitar depender del "código de texto" para lógica matemática.
-- Opciones esperadas: 'ESTANDAR', 'ACERO', 'HVAC_DUCTO', 'HVAC_ACCESORIO'

ALTER TABLE catalogo_partidas 
ADD COLUMN IF NOT EXISTS tipo_metrado TEXT DEFAULT 'ESTANDAR';

ALTER TABLE partidas_personalizadas 
ADD COLUMN IF NOT EXISTS tipo_metrado TEXT DEFAULT 'ESTANDAR';

COMMENT ON COLUMN catalogo_partidas.tipo_metrado IS 'Clasificador estricto para lógica matemática en React (ej: ACERO, ESTANDAR). Evita parsers por prefijo.';
COMMENT ON COLUMN partidas_personalizadas.tipo_metrado IS 'Permite que partidas customizadas tengan lógica matemática especial sin depender de códigos estándar (como el OE.2).';
