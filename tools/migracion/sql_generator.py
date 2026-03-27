import pandas as pd
import os
from datetime import datetime
from typing import List, Dict

# --- MAPEO DE COLUMNAS ---
COLUMN_MAP = {
    'grado': 'grado',
    'fecha': 'fecha',
    'especialidad': 'especialidad',
    'frente': 'frente',
    'bloque': 'bloque',
    'nivel': 'nivel',
    'cuadrilla': 'cuadrilla',
    'codigo_partida': 'codigo_partida',
    'descripcion_partida': 'descripcion_partida',
    'unidad': 'unidad',
    'cantidad': 'cantidad',
    'longitud_area': 'longitud_area',
    'ancho_empalme': 'ancho_empalme',
    'altura_gancho': 'altura_gancho',
    'nro_veces': 'nro_veces',
    'parcial': 'parcial',
    'total': 'total'
}

def escape_sql(val):
    if val is None: return "NULL"
    if isinstance(val, str):
        return "'" + val.replace("'", "''") + "'"
    return str(val)

def generate_sql(excel_path: str, author: str, specialty: str, output_sql: str):
    print(f"Leyendo {excel_path}...")
    df = pd.read_excel(excel_path, sheet_name='Metrado') # Ajustar si es necesario
    df.columns = [str(c).strip() for c in df.columns]
    
    sql_lines = []
    sql_lines.append("-- SQL Generado para carga manual en Supabase")
    sql_lines.append(f"-- Autor: {author}")
    sql_lines.append(f"-- Especialidad: {specialty}")
    sql_lines.append(f"-- Fecha de generación: {datetime.now().isoformat()}")
    sql_lines.append("")

    for _, row in df.iterrows():
        # Limpieza básica
        raw_code = str(row.get('PARTIDA', '')).strip()
        code = raw_code
        desc = str(row.get('DESCRIPCIÓN', '')).strip()
        if '-' in raw_code and not desc:
            parts = raw_code.split('-', 1)
            code = parts[0].strip()
            desc = parts[1].strip()

        data = {
            'fecha': str(row.get('FECHA', datetime.now().strftime('%Y-%m-%d'))),
            'frente': str(row.get('FRENTE', 'F1')),
            'bloque': str(row.get('BLOQUE', 'B1')),
            'nivel': str(row.get('NIVEL (PISO)', 'N1')),
            'cuadrilla': f"{specialty} - LOAD",
            'codigo_partida': code,
            'descripcion_partida': desc,
            'unidad': str(row.get('UNIDAD', 'und')),
            'cantidad': row.get('CANTIDAD', 0),
            'longitud_area': row.get('LONGITUD/AREA', 0),
            'ancho_empalme': row.get('ANCHO/EMPAME', 0),
            'altura_gancho': row.get('ALTURA/GANCHO', 0),
            'nro_veces': row.get('NRO VECES', 1),
            'parcial': row.get('PARCIAL', 0),
            'total': row.get('TOTAL', 0),
            'proyecto': 'hospital',
            'autor_usuario': author,
            'especialidad': specialty,
            'grado': str(row.get('GRADO', '')),
            'created_at': datetime.now().isoformat()
        }

        columns = ", ".join(data.keys())
        values = ", ".join([escape_sql(v) for v in data.values()])
        
        # Corregir NaNs de pandas
        values = values.replace('nan', 'NULL')
        
        sql_lines.append(f"INSERT INTO metrados ({columns}) VALUES ({values});")

    with open(output_sql, 'w', encoding='utf-8') as f:
        f.write("\n".join(sql_lines))
    
    print(f"✅ SQL generado exitosamente en: {output_sql} ({len(df)} registros)")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--file', required=True)
    parser.add_argument('--author', default='RUBEN DARIO BRAVO TUNQUI')
    parser.add_argument('--specialty', default='SEGURIDAD')
    parser.add_argument('--output', default='ssoma_ruben.sql')
    
    args = parser.parse_args()
    generate_sql(args.file, args.author, args.specialty, args.output)
