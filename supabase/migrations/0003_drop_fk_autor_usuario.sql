-- MIGRACIÓN: Eliminar Foreign Key fk_metrados_autor_usuario
-- PROBLEMA: El FK en metrados.autor_usuario exige que el valor exista
-- exactamente en ecosistema_usuarios.nombre_completo. Si hay cualquier
-- diferencia (mayúsculas, espacios, tildes) el insert falla con error 23503.
-- SOLUCIÓN: autor_usuario es un campo de texto de auditoría (quién registró),
-- no necesita ser un FK. El sistema ya gestiona la autenticación por separado.

ALTER TABLE public.metrados 
    DROP CONSTRAINT IF EXISTS fk_metrados_autor_usuario;

-- Opcional: también quitar el FK de especialidad si causa problemas similares
-- ALTER TABLE public.metrados 
--     DROP CONSTRAINT IF EXISTS fk_metrados_especialidad;

-- Verificar que se eliminó correctamente:
-- SELECT constraint_name FROM information_schema.table_constraints 
-- WHERE table_name = 'metrados' AND constraint_type = 'FOREIGN KEY';
