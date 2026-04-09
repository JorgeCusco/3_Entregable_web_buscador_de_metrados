-- Migración para el Módulo de Administración de Presupuesto
-- Añadir campos de control a ecosistema_usuarios y crear tabla de logs

-- 1. Asegurar que tenemos una columna de rol simple para el panel de administración
-- Usaremos un campo booleano para simplicidad de acceso rápido
ALTER TABLE public.ecosistema_usuarios 
ADD COLUMN IF NOT EXISTS es_administrador_presupuesto BOOLEAN DEFAULT false;

-- 2. Crear tabla de logs para auditoría de cambios en el catálogo maestro
CREATE TABLE IF NOT EXISTS public.logs_maestro_presupuesto (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    fecha timestamp with time zone DEFAULT now(),
    usuario_nombre text NOT NULL,
    accion text NOT NULL, -- 'ADD', 'EDIT', 'DELETE', 'MOVE'
    codigo_partida text,
    detalle text,
    valor_anterior jsonb,
    valor_nuevo jsonb,
    CONSTRAINT logs_maestro_presupuesto_pkey PRIMARY KEY (id)
);

-- 3. Habilitar RLS básico para los logs (Opcional pero recomendado)
ALTER TABLE public.logs_maestro_presupuesto ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Logs visibles para administradores" ON public.logs_maestro_presupuesto
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.ecosistema_usuarios 
            WHERE nombre_completo = auth.jwt() ->> 'email' -- O como manejes el auth
            AND es_administrador_presupuesto = true
        )
    );

COMMENT ON TABLE public.logs_maestro_presupuesto IS 'Bitácora de cambios realizados en el catálogo maestro de partidas por los administradores.';
