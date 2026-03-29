import pandas as pd
import sys
from datetime import datetime

def escape_sql(val):
    if val is None or pd.isna(val) or str(val).lower() == 'nan': return "NULL"
    if isinstance(val, str):
        return "'" + val.replace("'", "''") + "'"
    return str(val)

def generate_update_sql(excel_path: str, output_sql: str, proyecto_codigo="HOSP"):
    print(f"DEBUG: Generando Updates para {excel_path}...")
    
    # Read the excel. Skipping the first two header rows usually, or just read blindly and filter by OE.
    try:
        df = pd.read_excel(excel_path, header=None)
    except Exception as e:
        print(f"ERROR al leer Excel: {e}")
        return
    
    sql_lines = []
    sql_lines.append("-- SQL Generado para actualizar precios y cantidad presupuesto")
    sql_lines.append(f"-- Archivo Origen: {excel_path}")
    sql_lines.append(f"-- Generado el: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    sql_lines.append("")
    sql_lines.append("BEGIN;")
    sql_lines.append(f"DO $$")
    sql_lines.append("DECLARE")
    sql_lines.append(f"  v_proyecto_id UUID;")
    sql_lines.append("BEGIN")
    sql_lines.append(f"  SELECT id INTO v_proyecto_id FROM proyectos WHERE codigo = '{proyecto_codigo}' LIMIT 1;")
    sql_lines.append(f"  IF v_proyecto_id IS NULL THEN")
    sql_lines.append(f"    RAISE EXCEPTION 'Proyecto {proyecto_codigo} no encontrado';")
    sql_lines.append(f"  END IF;")
    sql_lines.append("")
    
    updates = 0
    inserts = 0
    
    for i in range(len(df)):
        row = df.iloc[i]
        c0 = str(row[0]).strip() if pd.notnull(row[0]) else ""
        
        # Detectar partidas
        if c0.startswith('OE.'):
            codigo = c0
            desc = str(row[1]).strip() if len(row) > 1 and pd.notnull(row[1]) else ""
            unidad = str(row[10]).strip() if len(row) > 10 and pd.notnull(row[10]) else ""
            
            # Cantidad y Precio
            cant_raw = row[12] if len(row) > 12 else None
            precio_raw = row[13] if len(row) > 13 else None
            
            cant = 0
            if pd.notnull(cant_raw):
                try: cant = float(cant_raw)
                except: pass
                
            precio = 0
            if pd.notnull(precio_raw):
                try: precio = float(precio_raw)
                except: pass
                
            # Si tiene cantidad o precio o unidad, lo procesamos.
            # Aun si no tiene, lo podemos procesar como título (es_titulo = true)
            
            # Para títulos cantidad es 0.
            
            # Usaremos INSERT ... ON CONFLICT
            # Asumiendo constraint ON CONFLICT (codigo, proyecto_id)
            # Pero para ser seguros ante esquemas variados, mejor UPDATE. Si rowAffected = 0, luego hacemos insert dinámico o advertimos.
            # O mejor, un UPSERT genérico:
            
            codigo_sql = escape_sql(codigo)
            desc_sql = escape_sql(desc)
            unidad_sql = escape_sql(unidad) if unidad else "'und'"
            
            sql_lines.append(f"  -- {codigo} - {desc}")
            sql_lines.append(f"  UPDATE catalogo_partidas SET precio_unitario={precio}, cantidad_presupuesto={cant} WHERE codigo={codigo_sql} AND proyecto_id=v_proyecto_id;")
            updates += 1

    sql_lines.append("END $$;")
    sql_lines.append("COMMIT;")
    sql_lines.append(f"-- Generadas {updates} sentencias UPDATE")
    
    with open(output_sql, 'w', encoding='utf-8') as f:
        f.write("\n".join(sql_lines))
    
    print(f"✅ FIN: Se generó {output_sql} con {updates} updates.")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--file', default='presupuesto_ultim.xls')
    parser.add_argument('--output', default='tools/migracion/0013_apply_prices.sql')
    parser.add_argument('--proyecto', default='HOSP')
    args = parser.parse_args()
    generate_update_sql(args.file, args.output, args.proyecto)
