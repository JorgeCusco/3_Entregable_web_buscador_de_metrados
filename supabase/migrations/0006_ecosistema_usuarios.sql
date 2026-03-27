-- Migración 0006: Creación del Hub Centralizado de Usuarios (Single Sign-On Ecosistema)
-- Ejecutar este archivo en el Editor SQL de Supabase

CREATE TABLE IF NOT EXISTS ecosistema_usuarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dni_username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  nombre_completo TEXT NOT NULL,
  correo TEXT,
  area TEXT,
  cargo TEXT,
  especialidad TEXT,
  roles_apps JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

-- Habilitar RLS (Row Level Security) opcional, pero mantenerlo abierto para el microservicio de auth local.
ALTER TABLE ecosistema_usuarios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir lectura publica ecosistema_usuarios" ON ecosistema_usuarios FOR SELECT USING (true);
-- Las inserciones se harán a través de un master key o desde el Dashboard de Supabase.

-- Comentarios documentando la tabla
COMMENT ON TABLE ecosistema_usuarios IS 'Tabla maestra para autenticación Cross-App en el dominio copgorecusco.com';
COMMENT ON COLUMN ecosistema_usuarios.dni_username IS 'DNI o usuario principal usado para iniciar sesión.';
COMMENT ON COLUMN ecosistema_usuarios.roles_apps IS 'Privilegios dinámicos. Ej: {"metrados": "admin", "almacen": "lector"}';


-- ACTIVAR APRA PARTIDAS PERSONALIZADAS LA ESPECIALIDAD COMO CLASIFICADOR
ALTER TABLE partidas_personalizadas ADD COLUMN especialidad TEXT;