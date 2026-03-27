import pandas as pd
import os
import json
import httpx
from datetime import datetime
from typing import List, Dict

# --- CONFIGURACIÓN (Lectura de .env.local) ---
def load_env():
    env_vars = {}
    env_path = './.env.local'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if '=' in line:
                    key, value = line.strip().split('=', 1)
                    env_vars[key] = value.replace('"', '').replace("'", "")
    return env_vars

ENV = load_env()
SUPABASE_URL = ENV.get('VITE_SUPABASE_URL')
SUPABASE_KEY = ENV.get('VITE_SUPABASE_ANON_KEY')

# --- MAPEO DE COLUMNAS (Sincronizado con Esquema Oficial) ---
COLUMN_MAP = {
    'GRADO': 'grado',
    'FECHA': 'fecha',
    'ESPECIALIDAD': 'especialidad',
    'FRENTE': 'frente',
    'BLOQUE': 'bloque',
    'NIVEL (PISO)': 'nivel',
    'CUADRILLA': 'cuadrilla',
    'PARTIDA': 'codigo_partida',
    'DESCRIPCIÓN': 'descripcion_partida',
    'UNIDAD': 'unidad',
    'CANTIDAD': 'cantidad',
    'LONGITUD/AREA': 'longitud_area',
    'ANCHO/EMPAME': 'ancho_empalme',
    'ALTURA/GANCHO': 'altura_gancho',
    'NRO VECES': 'nro_veces',
    'PARCIAL': 'parcial',
    'TOTAL': 'total'
}

def clean_row(row: Dict) -> Dict:
    # 1. Limpieza de Código y Descripción pegados
    raw_code = str(row.get('PARTIDA', '')).strip()
    code = raw_code
    desc = str(row.get('DESCRIPCIÓN', '')).strip()
    
    if '-' in raw_code and not desc:
        parts = raw_code.split('-', 1)
        code = parts[0].strip()
        desc = parts[1].strip()

    # 2. Formateo de Fecha
    fecha = row.get('FECHA')
    if isinstance(fecha, datetime):
        fecha = fecha.strftime('%Y-%m-%d')
    elif pd.isna(fecha):
        fecha = datetime.now().strftime('%Y-%m-%d')

    def safe_float(val):
        try:
            if pd.isna(val) or str(val).strip() == '':
                return 0.0
            return float(val)
        except:
            return 0.0

    return {
        'fecha': str(fecha),
        'frente': str(row.get('FRENTE', 'F1')),
        'bloque': str(row.get('BLOQUE', 'B1')),
        'nivel': str(row.get('NIVEL (PISO)', 'N1')),
        'cuadrilla': str(row.get('CUADRILLA', 'CARGA_PYTHON')),
        'codigo_partida': code,
        'descripcion_partida': desc,
        'unidad': str(row.get('UNIDAD', 'und')),
        'cantidad': safe_float(row.get('CANTIDAD')),
        'longitud_area': safe_float(row.get('LONGITUD/AREA')),
        'ancho_empalme': safe_float(row.get('ANCHO/EMPAME')),
        'altura_gancho': safe_float(row.get('ALTURA/GANCHO')),
        'nro_veces': safe_float(row.get('NRO VECES') or 1),
        'parcial': safe_float(row.get('PARCIAL')),
        'total': safe_float(row.get('TOTAL')),
        'proyecto': 'hospital',
        'autor_usuario': 'RUBEN DARIO BRAVO TUNQUI',
        'especialidad': 'SEGURIDAD',
        'grado': str(row.get('GRADO', '')),
        'created_at': datetime.now().isoformat()
    }

def upload_to_supabase(data: List[Dict]):
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("Error: No se encontraron credenciales en .env.local")
        return

    base_url = SUPABASE_URL.strip('/')
    url = f"{base_url}/rest/v1/metrados"
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Content-Profile": "public",
        "Prefer": "return=minimal"
    }
    
    # Subir en bloques de 100
    batch_size = 100
    for i in range(0, len(data), batch_size):
        batch = data[i:i + batch_size]
        print(f"Subiendo lote {i//batch_size + 1}...")
        response = httpx.post(url, headers=headers, content=json.dumps(batch))
        if response.status_code in [200, 201, 204]:
            print(f"Lote {i//batch_size + 1} OK.")
        else:
            print(f"Error {response.status_code}: {response.text}")

def run_migration(excel_path: str, sheet_name: str = 'Metrado'):
    if not os.path.exists(excel_path):
        print(f"Archivo no encontrado: {excel_path}")
        return

    print(f"Leyendo Excel: {excel_path}...")
    df = pd.read_excel(excel_path, sheet_name=sheet_name)
    
    # Limpiar columnas para que coincidan con el mapa (Eliminar espacios)
    df.columns = [str(c).strip() for c in df.columns]
    
    print(f"Detectadas {len(df)} filas. Iniciando limpieza...")
    rows_clean = [clean_row(row) for _, row in df.iterrows()]
    
    print("Iniciando carga a Supabase...")
    upload_to_supabase(rows_clean)
    print("--- PROCESO FINALIZADO ---")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Migrador de Metrados a Supabase')
    parser.add_argument('--file', type=str, required=True, help='Ruta al archivo Excel')
    parser.add_argument('--author', type=str, default='RUBEN DARIO BRAVO TUNQUI', help='Nombre del Autor')
    parser.add_argument('--specialty', type=str, default='SEGURIDAD', help='Especialidad')
    parser.add_argument('--project', type=str, default='hospital', help='Proyecto (hospital/contingencia)')
    parser.add_argument('--sheet', type=str, default='METRADO', help='Nombre de la hoja del Excel')
    
    args = parser.parse_args()

    if not os.path.exists(args.file):
        print(f"Error: Archivo no encontrado: {args.file}")
        exit(1)

    print(f"🚀 Iniciando migración de {args.file}...")
    print(f"👤 Autor: {args.author}")
    print(f"🏗️ Especialidad: {args.specialty}")
    print(f"📋 Proyecto: {args.project}")

    df = pd.read_excel(args.file, sheet_name=args.sheet)
    df.columns = [str(c).strip() for c in df.columns]
    
    rows_clean = []
    for _, row in df.iterrows():
        clean = clean_row(row)
        clean['autor_usuario'] = args.author
        clean['especialidad'] = args.specialty
        clean['proyecto'] = args.project.lower()
        rows_clean.append(clean)
        
    print(f"✅ Procesados {len(rows_clean)} registros. Subiendo a Supabase...")
    upload_to_supabase(rows_clean)
    print("✨ PROCESO FINALIZADO CON ÉXITO ✨")
