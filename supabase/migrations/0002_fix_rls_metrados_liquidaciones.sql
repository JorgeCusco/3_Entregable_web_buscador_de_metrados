-- Opcional: Solución Rápida de Políticas RLS para metrados_liquidaciones
-- El error de inserción ocurre porque Supabase puede haber activado RLS de forma predeterminada
-- sin agregar una política que permita a los usuarios autenticados (o anónimos de la API web) insertar datos.
-- Esta migración desactiva el RLS en metrados_liquidaciones para que su comportamiento
-- iguale a la tabla 'metrados'.

-- 1. Desactivar RLS:
ALTER TABLE metrados_liquidaciones DISABLE ROW LEVEL SECURITY;

-- 2. Asegurarse que están revocados todos los posibles bloqueos previos y que "anon" puede insertar
GRANT ALL ON metrados_liquidaciones TO anon;
GRANT ALL ON metrados_liquidaciones TO authenticated;
GRANT ALL ON metrados_liquidaciones TO service_role;




