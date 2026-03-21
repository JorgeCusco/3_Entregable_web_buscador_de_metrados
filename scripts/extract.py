import pandas as pd
import json

excel_path = r"d:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\REGISTRO_LOGIN.xlsx"
json_path = r"d:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\scripts\script_login_data.json"

df = pd.read_excel(excel_path)
df = df.fillna('')  # Reemplazar NaN por strings vacíos para evitar problemas con JSON

data = df.to_dict('records')

# Normalize Especialidad mapping to match FrontEnd EXACTLY
specialty_map = {
    "TODOS": "TODAS",
    "SANITARIAS": "INSTALACIONES SANITARIAS",
    "ELÉCTRICAS": "INSTALACIONES ELÉCTRICAS Y MECÁNICAS",
    "ELECTROMECÁNICAS": "INSTALACIONES ELÉCTRICAS Y MECÁNICAS",
    "COMUNICACIOENS": "INSTALACIONES DE COMUNICACIONES",
    "COMUNICACIONES": "INSTALACIONES DE COMUNICACIONES",
    "PLAN DE MANEJO AMBIENTAL": "PLAN DE MANEJO AMBIENTAL",
    "ARQUEOLOGIA": "ARQUEOLOGIA",
    "SEGURIDAD": "SEGURIDAD",
    "OBRAS PROVISIONALES": "OBRAS PROVISIONALES",
    "ESTRUCTURAS": "ESTRUCTURAS",
    "ARQUITECTURA": "ARQUITECTURA"
}

for row in data:
    if row.get("ESPECIALIDAD"):
        raw_esp = str(row["ESPECIALIDAD"]).strip().upper()
        row["ESPECIALIDAD"] = specialty_map.get(raw_esp, raw_esp)

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Excel read successfully. Extracted {len(data)} rows mapped.")
