-- LIMPIAR DATOS EN SUPABASE TABLA catalogo_partidas
-- Ejecutar en el Editor SQL de Supabase ANTES de migrar nuevos datos

-- 1. Eliminar todas las partidas de proyecto_id específicos (Hospital y Contingencia)
DELETE FROM catalogo_partidas 
WHERE proyecto_id IN (
    SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT')
);

-- 2. Verific ar que los proyectos HOSPITAL y CONTINGENCIA existen
-- Si no existen, crearlos
INSERT INTO proyectos (codigo, nombre) VALUES 
('HOSP', 'Proyecto Hospital'),
('CONT', 'Proyecto Contingencia')
ON CONFLICT (codigo) DO NOTHING;

-- 3. Confirmar que la tabla está limpia para nuevos datos
SELECT COUNT(*) as total_partidas FROM catalogo_partidas WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'));
-- Resultado esperado: 0
