#!/usr/bin/env python3
import openpyxl
import json
from supabase import create_client
import os
from dotenv import load_dotenv

# Load .env.local
load_dotenv('.env.local')

supabaseUrl = os.getenv('VITE_SUPABASE_URL')
supabaseKey = os.getenv('VITE_SUPABASE_ANON_KEY')

if not supabaseUrl or not supabaseKey:
    print("ERROR: Faltan variables VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY en .env.local")
    exit(1)

supabase = create_client(supabaseUrl, supabaseKey)

# Leer Excel
print("Leyendo LIQUIDACIONES_LOGIN.xlsx...")
wb = openpyxl.load_workbook('LIQUIDACIONES_LOGIN.xlsx')
ws = wb['Hoja 1']

usuarios = []
for row_idx, row in enumerate(ws.iter_rows(min_row=2, values_only=True)):  # Saltar encabezado
    nombre_completo = str(row[0]).strip() if row[0] else ''
    especialidad = str(row[1]).strip() if row[1] else ''
    area = str(row[2]).strip() if row[2] else ''
    dni_usuario = str(row[3]).strip() if row[3] else ''
    password = str(row[4]).strip() if row[4] else ''
    cel = str(row[5]).strip() if row[5] else ''
    correo = str(row[6]).strip() if row[6] else ''
    
    # Validar campos requeridos
    if not nombre_completo or not dni_usuario or not password:
        print(f"⚠️ Fila {row_idx + 2} incompleta, saltando...")
        continue
    
    # Mapear roles según especialidad/area
    roles_apps = {}
    
    # Asignar roles basados en el área
    if 'LIQUIDACIONES' in area.upper():
        roles_apps['liquidaciones'] = 'editor'
        roles_apps['metrados'] = 'lector'
    elif 'ALMACEN' in area.upper():
        roles_apps['almacen'] = 'editor'
        roles_apps['metrados'] = 'lector'
    else:
        roles_apps['metrados'] = 'lector'  # Role por defecto
    
    usuario = {
        'dni_username': dni_usuario,
        'password': password,  # En producción, esto debe estar hasheado
        'nombre_completo': nombre_completo,
        'correo': correo if correo else None,
        'area': area if area else None,
        'cargo': especialidad if especialidad else None,
        'especialidad': especialidad if especialidad else None,
        'roles_apps': roles_apps
    }
    
    usuarios.append(usuario)
    print(f"✅ {nombre_completo} ({dni_usuario}) - Roles: {roles_apps}")

print(f"\n📊 Total usuarios a insertar: {len(usuarios)}")

if len(usuarios) == 0:
    print("ERROR: No se encontraron usuarios válidos")
    exit(1)

# Insertar en Supabase
print("\n⏳ Insertando en ecosistema_usuarios...")
try:
    # INSERT con UPSERT (si el DNI existe, actualiza; si no, crea)
    response = supabase.table('ecosistema_usuarios').upsert(usuarios).execute()
    
    print(f"\n✅ INSERTADOS: {len(response.data)} usuarios")
    print("\nDetalles:")
    for user in response.data[:3]:  # Mostrar primeros 3
        print(f"  - {user['nombre_completo']} ({user['dni_username']})")
    if len(response.data) > 3:
        print(f"  ... y {len(response.data) - 3} más")
        
except Exception as err:
    print(f"❌ ERROR al insertar: {err}")
    exit(1)

print("\n🎉 ¡CARGA COMPLETADA!")
