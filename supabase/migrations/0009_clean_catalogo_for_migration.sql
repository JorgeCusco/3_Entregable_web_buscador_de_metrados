-- Migración 0009: Limpiar datos antiguos en catalogo_partidas
-- Ejecutar en el SQL Editor de Supabase DESPUÉS de agregar la columna modificacion

-- 1. Eliminar todas las partidas de Hospital y Contingencia actuales
DELETE FROM catalogo_partidas 
WHERE proyecto_id IN (
    SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT')
);

-- 2. Asegurar que los proyectos existen
INSERT INTO proyectos (codigo, nombre) VALUES 
('HOSP', 'Proyecto Hospital'),
('CONT', 'Proyecto Contingencia')
ON CONFLICT (codigo) DO NOTHING;

-- 3. Verificar limpieza
SELECT COUNT(*) as total_partidas_limpias FROM catalogo_partidas 
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'));
-- Resultado esperado: 0
