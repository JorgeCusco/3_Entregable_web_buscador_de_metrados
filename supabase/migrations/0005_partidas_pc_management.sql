-- Migración: Nuevos campos en partidas_personalizadas para soporte económico
-- Permite asignar PU, metrado meta y rastrear el creador antes de oficializar

ALTER TABLE public.partidas_personalizadas 
  ADD COLUMN IF NOT EXISTS precio_unitario NUMERIC DEFAULT 0,
  ADD COLUMN IF NOT EXISTS metrado_programado NUMERIC DEFAULT 0,
  ADD COLUMN IF NOT EXISTS creado_por TEXT,
  ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT now();

-- Función SQL para oficializar una partida PC al catálogo oficial (en una sola transacción)
CREATE OR REPLACE FUNCTION oficializar_partida_pc(
  p_custom_id         UUID,
  p_proyecto_id       UUID,
  p_parent_id         UUID,
  p_pu_actual         NUMERIC DEFAULT 0,
  p_metrado_prog      NUMERIC DEFAULT 0,
  p_metrado_ant_acum  NUMERIC DEFAULT 0,
  p_valorizacion_ant  NUMERIC DEFAULT 0,
  p_modificacion      TEXT DEFAULT 'PC-OF'
) RETURNS UUID AS $$
DECLARE
  v_custom             RECORD;
  v_nuevo_id           UUID;
  v_metrados_updated   INT;
BEGIN
  -- 1. Obtener datos de la partida custom
  SELECT * INTO v_custom FROM partidas_personalizadas WHERE id = p_custom_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Partida personalizada con ID % no encontrada', p_custom_id;
  END IF;

  -- 2. Insertar en catalogo_partidas como partida oficial
  INSERT INTO catalogo_partidas (
    codigo, descripcion, unidad,
    pu_actual, metrado_programado,
    metrado_anterior_acumulado, valorizacion_anterior,
    modificacion, proyecto_id, parent_id,
    tipo_metrado, is_title
  ) VALUES (
    v_custom.codigo, v_custom.descripcion, v_custom.unidad,
    p_pu_actual, p_metrado_prog,
    p_metrado_ant_acum, p_valorizacion_ant,
    p_modificacion, p_proyecto_id, p_parent_id,
    COALESCE(v_custom.tipo_metrado, 'ESTANDAR'), false
  ) RETURNING id INTO v_nuevo_id;

  -- 3. Reasignar metrados de custom → catálogo oficial
  UPDATE metrados
  SET partida_id = v_nuevo_id, custom_partida_id = NULL
  WHERE custom_partida_id = p_custom_id;
  GET DIAGNOSTICS v_metrados_updated = ROW_COUNT;

  -- 4. Eliminar la partida personalizada
  DELETE FROM partidas_personalizadas WHERE id = p_custom_id;

  RAISE NOTICE 'Partida % oficializada. Nuevo ID en catálogo: %. % metrados reasignados.',
    v_custom.codigo, v_nuevo_id, v_metrados_updated;

  RETURN v_nuevo_id;
END;
$$ LANGUAGE plpgsql;
