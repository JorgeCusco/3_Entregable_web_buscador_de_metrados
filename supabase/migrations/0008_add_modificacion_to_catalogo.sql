-- Migración 0008: Agregar columna 'modificacion' a catalogo_partidas
-- Ejecutar en el SQL Editor de Supabase

-- Agregar columna modificacion a catalogo_partidas
ALTER TABLE catalogo_partidas
ADD COLUMN IF NOT EXISTS modificacion TEXT DEFAULT 'SM';

-- Comentario explicativo
COMMENT ON COLUMN catalogo_partidas.modificacion IS 'Tipo de modificación: SM (Sin Modificación), MM5, MM4, ET, DD, PN, PC, etc';

-- Confirmar que la columna fue creada
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'catalogo_partidas' AND column_name = 'modificacion';
