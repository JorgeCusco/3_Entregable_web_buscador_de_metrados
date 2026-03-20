-- Migración 0002
-- Ejecutar en el SQL Editor de Supabase
ALTER TABLE metrados ADD COLUMN proyecto TEXT DEFAULT 'hospital';
