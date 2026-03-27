import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

url = os.environ.get('VITE_SUPABASE_URL')
key = os.environ.get('VITE_SUPABASE_ANON_KEY')
client = create_client(url, key)

# Consultar los usuarios recién cargados
result = client.table('ecosistema_usuarios').select('dni_username, nombre_completo, area, cargo, roles_apps').limit(10).execute()

print('=== USUARIOS CARGADOS EN SUPABASE ===\n')
for user in result.data:
    print(f"DNI: {user['dni_username']}")
    print(f"Nombre: {user['nombre_completo']}")
    print(f"Area: {user['area']}")
    print(f"Cargo: {user['cargo']}")
    print(f"Roles: {user['roles_apps']}")
    print('-' * 50)

print(f'\n✅ Total usuarios verificados: {len(result.data)}')
