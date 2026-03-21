-- 1. Eliminar el bloqueo de restricción que causa el error "chk_partida"
ALTER TABLE metrados DROP CONSTRAINT IF EXISTS chk_partida;

-- 2. Agregar columnas de respaldo para que tus metrados nunca pierdan su nombre
ALTER TABLE metrados 
ADD COLUMN IF NOT EXISTS codigo_partida TEXT,
ADD COLUMN IF NOT EXISTS descripcion_partida TEXT,
ADD COLUMN IF NOT EXISTS unidad TEXT,
ADD COLUMN IF NOT EXISTS proyecto TEXT;

-- 3. Quitar restricciones de obligatoriedad temporales para fluidez
ALTER TABLE metrados ALTER COLUMN codigo_partida DROP NOT NULL;
ALTER TABLE metrados ALTER COLUMN descripcion_partida DROP NOT NULL;
