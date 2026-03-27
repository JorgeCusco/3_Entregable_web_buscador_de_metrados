import pandas as pd
import os
import sys
from datetime import datetime

def escape_sql(val):
    if val is None or str(val).lower() == 'nan': return "NULL"
    if isinstance(val, str):
        return "'" + val.replace("'", "''") + "'"
    return str(val)

def generate_sql_v5(excel_path: str, author: str, output_sql: str):
    print(f"DEBUG: Procesando Plantilla V5: {excel_path}...")
    
    xl = pd.ExcelFile(excel_path)
    sheet_name = next((s for s in xl.sheet_names if 'metrado' in s.lower()), xl.sheet_names[0])
    df = pd.read_excel(excel_path, sheet_name=sheet_name, header=None)
    
    sql_lines = []
    sql_lines.append("-- SQL Generado para Plantilla V5")
    sql_lines.append(f"-- Autor: {author}")
    sql_lines.append("")

    curr_code = ""
    curr_desc = ""
    curr_context = []
    
    for i in range(len(df)):
        row = df.iloc[i]
        
        # Valores limpios para lógica de flujo
        c1 = str(row[1]).strip() if pd.notnull(row[1]) else ""
        c2 = str(row[2]).strip() if pd.notnull(row[2]) else ""
        c3_raw = row[3] # Cantidad core

        # A. Detectar Nueva Partida
        if c1.upper().startswith('OE.'):
            curr_code = c1
            curr_desc = c2
            curr_context = []
            print(f"Row {i} -> PARTIDA: {curr_code}")
            continue
            
        # B. Detectar Contexto
        if not c1 and c2 and pd.isnull(c3_raw):
            curr_context.append(c2)
            print(f"Row {i} -> CONTEXTO: {c2}")
            continue
            
        # C. Detectar Metrado
        if pd.notnull(c3_raw):
            try:
                # Intentar convertir c3 a numero
                val_c3 = float(c3_raw)
                if val_c3 == 0: continue
                
                # OJO: Evitar filas de cabecera como Row 10 ("CANTIDAD")
                if str(c3_raw).upper() == "CANTIDAD": 
                    continue

                elemento = " / ".join(curr_context)
                detalle = c2 if c2 else "Registro Importado"
                
                longitud = float(row[4]) if (len(row) > 4 and pd.notnull(row[4])) else 0
                veces = float(row[7]) if (len(row) > 7 and pd.notnull(row[7])) else 1
                diametro = str(row[8]).strip() if (len(row) > 8 and pd.notnull(row[8])) else ""
                
                # TOTAL (Index 15 o fallback)
                total = 0
                if len(row) > 15 and pd.notnull(row[15]):
                    total = float(row[15])
                
                if total == 0:
                    # Intentar en index 14
                    if len(row) > 14 and pd.notnull(row[14]):
                        total = float(row[14])
                
                if total == 0:
                    total = val_c3 * longitud * veces

                espec = "ESTRUCTURAS" if curr_code.startswith("OE.2") else "GENERAL"
                if "SEGURIDAD" in curr_desc.upper(): espec = "SEGURIDAD"

                data = {
                    'fecha': '2025-06-01',
                    'frente': curr_context[0] if len(curr_context) > 0 else 'F1',
                    'bloque': curr_context[1] if len(curr_context) > 1 else 'B1',
                    'nivel': curr_context[2] if len(curr_context) > 2 else 'N1',
                    'cuadrilla': f"{espec} - V5",
                    'codigo_partida': curr_code,
                    'descripcion_partida': curr_desc,
                    'unidad': 'KG' if diametro else 'und', # Si hay diametro, probablemente es acero (KG)
                    'elemento': elemento,
                    'detalle': detalle,
                    'cantidad': val_c3,
                    'longitud_area': longitud,
                    'ancho_empalme': 0,
                    'altura_gancho': 0,
                    'nro_veces': veces,
                    'diametro': diametro,
                    'total': total,
                    'proyecto': 'hospital',
                    'autor_usuario': author,
                    'especialidad': espec,
                    'created_at': datetime.now().isoformat()
                }

                cols_str = ", ".join(data.keys())
                vals_str = ", ".join([escape_sql(v) for v in data.values()])
                sql_lines.append(f"INSERT INTO metrados ({cols_str}) VALUES ({vals_str});")
                print(f"Row {i} -> INSERT OK: {detalle}")
            except Exception as e:
                # print(f"Row {i} -> ERROR: {e}")
                pass

    with open(output_sql, 'w', encoding='utf-8') as f:
        f.write("\n".join(sql_lines))
    
    print(f"✅ FIN: {output_sql} ({len(sql_lines)-3} registros)")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--file', required=True)
    parser.add_argument('--author', default='RUBEN DARIO BRAVO TUNQUI')
    parser.add_argument('--output', default='tools/migracion/metrados_v5_final.sql')
    args = parser.parse_args()
    generate_sql_v5(args.file, args.author, args.output)
