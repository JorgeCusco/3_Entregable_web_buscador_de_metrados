-- ================================================================
-- DIAGNÓSTICO Y CORRECCIÓN: OE.1.1.1.21 aparece como PC en planilla
-- El problema: existe en partidas_personalizadas (PC) Y en catalogo_partidas (MM5)
-- Los metrados apuntan al custom (sin datos financieros) en lugar al catálogo oficial
-- ================================================================

-- PASO 1: VERIFICAR que existe duplicado en partidas_personalizadas
SELECT 
    'CUSTOM (PC)' AS fuente,
    id, codigo, descripcion, modificacion, especialidad
FROM partidas_personalizadas 
WHERE codigo ILIKE 'OE.1.1.1.21';

-- PASO 2: VER la versión correcta del catálogo oficial
SELECT 
    'CATALOGO OFICIAL' AS fuente,
    cp.id, cp.codigo, cp.descripcion, cp.modificacion,
    cp.pu_actual, cp.metrado_programado, 
    cp.metrado_anterior_acumulado, cp.valorizacion_anterior,
    p.codigo AS proyecto
FROM catalogo_partidas cp
JOIN proyectos p ON cp.proyecto_id = p.id
WHERE cp.codigo ILIKE 'OE.1.1.1.21';

-- PASO 3: VER cuántos metrados apuntan a la versión custom del OE.1.1.1.21
SELECT 
    m.id, m.fecha, m.autor_usuario, m.total,
    m.custom_partida_id,
    m.partida_id
FROM metrados m
JOIN partidas_personalizadas pp ON m.custom_partida_id = pp.id
WHERE pp.codigo ILIKE 'OE.1.1.1.21';

-- ================================================================
-- CORRECCIÓN (ejecutar DESPUÉS de confirmar los pasos 1-3):
-- ================================================================

-- A. Obtener los IDs necesarios (reemplaza los valores abajo)
-- ID_CUSTOM  = el id devuelto en PASO 1
-- ID_CATALOG = el id devuelto en PASO 2 (del proyecto HOSP)

-- B. Reasignar los metrados del custom → catálogo oficial
/*
UPDATE metrados 
SET 
    partida_id = '<ID_CATALOG>',    -- UUID del catalogo_partidas
    custom_partida_id = NULL
WHERE custom_partida_id = '<ID_CUSTOM>';   -- UUID del partidas_personalizadas
*/

-- C. Eliminar la partida personalizada duplicada
/*
DELETE FROM partidas_personalizadas 
WHERE codigo = 'OE.1.1.1.21';
*/

-- ================================================================
-- ALTERNATIVA: Script automático (si los pasos 1-3 confirman el diagnóstico)
-- Este bloque hace todo en una sola transacción segura:
-- ================================================================

/*
DO $$
DECLARE
    v_custom_id UUID;
    v_catalog_id UUID;
    v_rows_updated INTEGER;
BEGIN
    -- Obtener ID de la versión custom (problemática)
    SELECT id INTO v_custom_id 
    FROM partidas_personalizadas 
    WHERE codigo = 'OE.1.1.1.21'
    LIMIT 1;
    
    -- Obtener ID del catálogo oficial (Hospital)
    SELECT cp.id INTO v_catalog_id
    FROM catalogo_partidas cp
    JOIN proyectos p ON cp.proyecto_id = p.id
    WHERE cp.codigo = 'OE.1.1.1.21' AND p.codigo = 'HOSP'
    LIMIT 1;
    
    IF v_custom_id IS NULL THEN
        RAISE NOTICE 'No se encontró OE.1.1.1.21 en partidas_personalizadas. Nada que corregir.';
        RETURN;
    END IF;
    
    IF v_catalog_id IS NULL THEN
        RAISE EXCEPTION 'No se encontró OE.1.1.1.21 en catalogo_partidas (HOSP). Verifica el catálogo.';
    END IF;
    
    RAISE NOTICE 'Custom ID: %, Catalog ID: %', v_custom_id, v_catalog_id;
    
    -- Reasignar metrados del custom → catálogo oficial
    UPDATE metrados
    SET partida_id = v_catalog_id, custom_partida_id = NULL
    WHERE custom_partida_id = v_custom_id;
    
    GET DIAGNOSTICS v_rows_updated = ROW_COUNT;
    RAISE NOTICE '% metrados reasignados al catálogo oficial.', v_rows_updated;
    
    -- Eliminar la partida custom duplicada
    DELETE FROM partidas_personalizadas WHERE id = v_custom_id;
    RAISE NOTICE 'Partida custom OE.1.1.1.21 eliminada de partidas_personalizadas.';
    
END $$;
*/
