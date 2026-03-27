import pandas as pd
import os
import json
import httpx
from datetime import datetime

def load_env():
    env = {}
    if os.path.exists('.env.local'):
        with open('.env.local') as f:
            for line in f:
                if '=' in line:
                    k, v = line.strip().split('=', 1)
                    env[k] = v.replace('"', '').replace("'", "")
    return env

ENV = load_env()
URL = f"{ENV['VITE_SUPABASE_URL'].strip('/')}/rest/v1/metrados"
KEY = ENV['VITE_SUPABASE_ANON_KEY']

def run():
    df = pd.read_excel('SSOMA_SUBIR.xlsx', sheet_name='Metrado')
    df.columns = [str(c).strip() for c in df.columns]
    
    data = []
    for _, r in df.iterrows():
        raw_p = str(r.get('PARTIDA', '')).strip()
        code = raw_p.split('-')[0].strip()
        desc = str(r.get('DESCRIPCIÓN', '')).strip()
        if '-' in raw_p and not desc:
            desc = raw_p.split('-', 1)[1].strip()

        def sf(v):
            try: return float(v) if not pd.isna(v) and str(v).strip() != '' else 0.0
            except: return 0.0

        data.append({
            "fecha": str(r.get('FECHA', datetime.now().strftime('%Y-%m-%d'))),
            "frente": str(r.get('FRENTE', 'F1')),
            "bloque": str(r.get('BLOQUE', 'B1')),
            "nivel": str(r.get('NIVEL (PISO)', 'N1')),
            "cuadrilla": f"SEGURIDAD - {str(r.get('CUADRILLA', 'SSOMA'))}",
            "codigo_partida": code,
            "descripcion_partida": desc,
            "unidad": str(r.get('UNIDAD', 'und')),
            "cantidad": sf(r.get('CANTIDAD')),
            "longitud_area": sf(r.get('LONGITUD/AREA')),
            "ancho_empalme": sf(r.get('ANCHO/EMPAME')),
            "altura_gancho": sf(r.get('ALTURA/GANCHO')),
            "nro_veces": sf(r.get('NRO VECES')) or 1.0,
            "parcial": sf(r.get('PARCIAL')),
            "total": sf(r.get('TOTAL')),
            "proyecto": "hospital",
            "autor_usuario": "RUBEN DARIO BRAVO TUNQUI",
            "created_at": datetime.now().isoformat()
        })

    headers = {
        "apikey": KEY,
        "Authorization": f"Bearer {KEY}",
        "Content-Type": "application/json",
        "Content-Profile": "public",
        "Prefer": "return=minimal"
    }
    
    print(f"Subiendo {len(data)} registros...")
    chunk = 100
    for i in range(0, len(data), chunk):
        batch = data[i:i+chunk]
        res = httpx.post(URL, headers=headers, content=json.dumps(batch))
        if res.status_code in [200, 201, 204]:
            print(f"Lote {i//chunk + 1} OK")
        else:
            print(f"Error {res.status_code}: {res.text}")

if __name__ == "__main__":
    run()
