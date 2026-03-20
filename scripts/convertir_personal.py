import pandas as pd
import json
import os
import uuid

# Read Excel
df = pd.read_excel('Personal_cuadrillas_belem.xlsx')
df = df.astype(str)

# Clean and transform
data = []
for index, row in df.iterrows():
    # Convert "APELLIDO, NOMBRE" to "NOMBRE APELLIDO"
    nombre_original = row.get('nombre', '')
    nombre_formateado = nombre_original
    if ',' in nombre_original:
        parts = nombre_original.split(',', 1)
        nombre_formateado = (parts[1].strip() + " " + parts[0].strip()).title()
    else:
        nombre_formateado = nombre_original.title()

    # Create record
    record = {
        "id": str(uuid.uuid4()),
        "dni": row.get('dni', ''),
        "nombre_original": nombre_original,
        "nombre_formateado": nombre_formateado,
        "sexo": row.get('sexo', ''),
        "especialidad": row.get('especialidad', '') if row.get('especialidad', '') != 'nan' else '',
        "cuadrilla": row.get('cuadrilla', '') if row.get('cuadrilla', '') != 'nan' else '',
        "categoria": row.get('categoria', ''),
        "telefono": row.get('telefono', ''),
        "condicion": row.get('condicion', ''),
        "oficio": row.get('oficio', ''),
        "fecha_ingreso": row.get('fecha_ingreso', '')
    }
    data.append(record)

# Ensure directory exists
os.makedirs('src/data', exist_ok=True)

with open('src/data/personal.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Data exported: {len(data)} records.")
