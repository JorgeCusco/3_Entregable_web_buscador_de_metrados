-- PARTE 4: Sanitización y Robustez de la Tabla de Metrados
-- Ejecutar este SQL en el Editor de Supabase (SQL Editor)

-- 1. Eliminar la restricción XOR que bloquea el guardado si falla la sincronización de IDs
ALTER TABLE metrados DROP CONSTRAINT IF EXISTS chk_partida;

-- 2. Agregar columnas de texto (Denormalización) para historial legible e independiente
ALTER TABLE metrados 
ADD COLUMN IF NOT EXISTS codigo_partida TEXT,
ADD COLUMN IF NOT EXISTS descripcion_partida TEXT,
ADD COLUMN IF NOT EXISTS unidad TEXT,
ADD COLUMN IF NOT EXISTS proyecto TEXT;

-- 3. Asegurar que las columnas acepten Nulos temporalmente para no romper inserts antiguos
ALTER TABLE metrados ALTER COLUMN codigo_partida DROP NOT NULL;
ALTER TABLE metrados ALTER COLUMN descripcion_partida DROP NOT NULL;

-- 4. Opcional: Si ya tienes datos, podrías intentar poblar las columnas, 
-- pero para nuevos registros el store se encargará.
