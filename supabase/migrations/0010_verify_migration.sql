-- VERIFICACIÓN COMPLETA DE MIGRACIÓN
-- Ejecutar en SQL Editor de Supabase

-- 1. CONTAR TOTAL DE PARTIDAS POR PROYECTO
SELECT 
    p.codigo as proyecto,
    p.nombre,
    COUNT(cp.id) as total_partidas
FROM proyectos p
LEFT JOIN catalogo_partidas cp ON cp.proyecto_id = p.id
WHERE p.codigo IN ('HOSP', 'CONT')
GROUP BY p.id, p.codigo, p.nombre
ORDER BY p.codigo;

-- Resultado esperado:
-- HOSP | Proyecto Hospital | 4518
-- CONT | Proyecto Contingencia | 1271

-- 2. VERIFICAR QUE LA COLUMNA 'modificacion' TIENE VALORES
SELECT 
    COUNT(*) as total,
    COUNT(CASE WHEN modificacion IS NOT NULL THEN 1 END) as con_modificacion,
    COUNT(CASE WHEN modificacion IS NULL THEN 1 END) as sin_modificacion
FROM catalogo_partidas
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'));

-- Resultado esperado: total=5789, con_modificacion=5789, sin_modificacion=0

-- 3. DISTRIBUCION DE TIPOS DE MODIFICACION
SELECT 
    modificacion,
    COUNT(*) as cantidad
FROM catalogo_partidas
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'))
GROUP BY modificacion
ORDER BY cantidad DESC;

-- 4. BUSCAR DUPLICADOS (mismos códigos en mismo proyecto)
SELECT 
    codigo,
    proyecto_id,
    COUNT(*) as cantidad
FROM catalogo_partidas
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'))
GROUP BY codigo, proyecto_id
HAVING COUNT(*) > 1;

-- Resultado esperado: Sin resultados (sin duplicados)

-- 5. VERIFICAR JERARQUIA (nivel_jerarquia vs cantidad de puntos en codigo)
SELECT 
    codigo,
    nivel_jerarquia,
    LENGTH(codigo) - LENGTH(REPLACE(codigo, '.', '')) + 1 as puntos_esperados,
    CASE 
        WHEN nivel_jerarquia = (LENGTH(codigo) - LENGTH(REPLACE(codigo, '.', ''))) + 1 THEN 'OK'
        ELSE 'ERROR'
    END as validacion
FROM catalogo_partidas
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'))
AND (nivel_jerarquia != (LENGTH(codigo) - LENGTH(REPLACE(codigo, '.', ''))) + 1)
LIMIT 10;

-- Resultado esperado: Sin resultados (jerarquía correcta)

-- 6. MUESTRA ALGUNOS REGISTROS CON DIFERENTES MODIFICACIONES
SELECT 
    codigo,
    descripcion,
    unidad,
    modificacion,
    nivel_jerarquia
FROM catalogo_partidas
WHERE proyecto_id IN (SELECT id FROM proyectos WHERE codigo IN ('HOSP', 'CONT'))
AND modificacion IS NOT NULL
LIMIT 1 FROM (
    SELECT * FROM (
        SELECT * FROM (
            SELECT * FROM catalogo_partidas 
            WHERE modificacion = 'SM' 
            LIMIT 1
        )
        UNION ALL
        SELECT * FROM (
            SELECT * FROM catalogo_partidas 
            WHERE modificacion = 'MM5' 
            LIMIT 1
        )
        UNION ALL
        SELECT * FROM (
            SELECT * FROM catalogo_partidas 
            WHERE modificacion = 'ET' 
            LIMIT 1
        )
    )
);
