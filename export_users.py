
import os
import pandas as pd
from supabase import create_client, Client
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv(".env.local")

url: str = os.environ.get("VITE_SUPABASE_URL")
key: str = os.environ.get("VITE_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

def export_users():
    print("🚀 Iniciando exportación de ecosistema_usuarios...")
    
    # 1. Fetch data
    response = supabase.table("ecosistema_usuarios").select("*").execute()
    
    if not response.data:
        print("❌ No se encontraron datos en ecosistema_usuarios.")
        return

    # 2. Convert to DataFrame
    df = pd.DataFrame(response.data)
    
    # Reordenar columnas para que sea más legible (opcional)
    cols = ['dni_username', 'nombre_completo', 'cargo', 'area', 'especialidad', 'correo', 'roles_apps', 'created_at', 'last_login']
    # Solo usar las disponibles si faltan algunas
    available_cols = [c for c in cols if c in df.columns]
    df = df[available_cols]

    # 3. Export to Excel
    filename = "export_ecosistema_usuarios_v1.xlsx"
    filepath = os.path.join(os.getcwd(), filename)
    
    df.to_excel(filepath, index=False)
    
    print(f"✅ Exportación completada con éxito: {filepath}")
    print(f"📊 Total usuarios exportados: {len(df)}")

if __name__ == "__main__":
    export_users()
