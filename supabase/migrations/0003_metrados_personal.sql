-- Migración 0003
-- Ejecutar en el SQL Editor de Supabase
-- 1. Quitar el obrero_id original porque ahora un metrado puede tener MÚLTIPLES obreros
ALTER TABLE metrados DROP COLUMN obrero_id;

-- 2. Añadir array de UUIDs o, para que entienda bien PostgREST y Foreign Keys fácilmente, 
-- crearemos una tabla intermedia:
CREATE TABLE metrados_personal (
    metrado_id UUID REFERENCES metrados(id) ON DELETE CASCADE,
    personal_id UUID REFERENCES personal(id) ON DELETE CASCADE,
    PRIMARY KEY (metrado_id, personal_id)
);

-- Habilitar RLS en la nueva tabla
ALTER TABLE metrados_personal ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir todo a anon metrados_personal" ON metrados_personal FOR ALL USING (true);
