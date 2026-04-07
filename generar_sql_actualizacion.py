import pandas as pd
import numpy as np

# Configurar el nombre del archivo Excel
EXCEL_FILE = "INFORMACIÓN_VALO_karin2.xlsx" # Puedes editar esto si se llama diferente
SHEET_NAME = "Compilado de modificaciones"
OUTPUT_SQL_FILE = "actualizacion_catalogo.sql"

def generate_sql():
    try:
        print(f"Leyendo el archivo: {EXCEL_FILE}, Hoja: {SHEET_NAME}...")
        df = pd.read_excel(EXCEL_FILE, sheet_name=SHEET_NAME) # Toma la Fila 1 como encabezados reales
        
        col_codigo = df.columns[0] # A
        col_d = df.columns[3]      # D
        col_e = df.columns[4]      # E
        col_f = df.columns[5]      # F
        col_g = df.columns[6]      # G

        print(f"Mapeo ESTRICTO: A={col_codigo}, D={col_d}, E={col_e}, F={col_f}, G={col_g}")

        sql_statements = ["-- SQL Generado Automáticamente", "-- Copiar y pegar en Supabase\n"]
        registros_procesados = 0

        for index, row in df.iterrows():
            codigo = str(row[col_codigo]).strip()
            
            if pd.isna(row[col_codigo]) or codigo.lower() == 'nan' or codigo == '' or codigo == 'None':
                continue

            def parse_num(val):
                if pd.isna(val) or str(val).strip() == '' or str(val).lower() == 'nan':
                    return 0.0
                try:
                    clean_str = str(val).replace('S/', '').replace(',', '').strip()
                    return float(clean_str)
                except ValueError:
                    return 0.0

            val_d = parse_num(row[col_d])
            val_e = parse_num(row[col_e])
            val_f = parse_num(row[col_f])
            val_g = parse_num(row[col_g])

            sql = f"""UPDATE "catalogo_partidas" 
SET metrado_programado = {val_d}, 
    valorizacion_programada = {val_e}, 
    metrado_anterior_acumulado = {val_f}, 
    valorizacion_anterior = {val_g} 
WHERE codigo = '{codigo}';"""
            
            sql_statements.append(sql)
            registros_procesados += 1

        # Escribir el archivo
        with open(OUTPUT_SQL_FILE, 'w', encoding='utf-8') as f:
            f.write("\n".join(sql_statements))
            
        print(f"\n¡Éxito! Se han generado {registros_procesados} sentencias UPDATE.")
        print(f"El código ha sido guardado en: {OUTPUT_SQL_FILE}")

    except Exception as e:
        print(f"Ocurrió un error: {str(e)}")

if __name__ == "__main__":
    generate_sql()
