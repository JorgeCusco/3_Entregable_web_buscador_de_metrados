import pandas as pd
import os

def generate_update_sql(file_path, output_sql_path):
    print(f"Starting generation. Input: {file_path}")
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found")
        return

    sheets = {
        'Presupuesto Hospital': 'Hospital',
        'Presupuesto Contingencia': 'Contingencia'
    }

    sql_statements = []
    sql_statements.append("-- Script corregido")
    sql_statements.append("BEGIN;\n")

    total_processed = 0

    for sheet_name, project_label in sheets.items():
        try:
            print(f"Reading sheet: {sheet_name}")
            df = pd.read_excel(file_path, sheet_name=sheet_name, header=None)
            print(f"Loaded {len(df)} rows and {len(df.columns)} cols.")
            
            sql_statements.append(f"-- SECCIÓN: {project_label}")
            
            count = 0
            for index, row in df.iterrows():
                # Búsqueda de código en cualquier columna para depurar
                full_row_str = " ".join([str(v) for v in row.values if pd.notnull(v)])
                if 'OE.' in full_row_str.upper():
                    print(f"Row {index} found OE.: {list(row)}")

                val_0 = row[0]
                val_2 = row[2]
                raw_code_0 = str(val_0).strip() if pd.notnull(val_0) else ""
                raw_code_2 = str(val_2).strip() if pd.notnull(val_2) else ""
                
                code = ""
                # Prioridad al código que contenga 'OE.'
                if 'OE.' in raw_code_0.upper():
                    code = raw_code_0.rstrip('.')
                elif 'OE.' in raw_code_2.upper():
                    code = raw_code_2.rstrip('.')
                # Prioridad al código que contenga 'OE.'
                if 'OE.' in raw_code_0.upper():
                    code = raw_code_0.rstrip('.')
                elif 'OE.' in raw_code_2.upper():
                    code = raw_code_2.rstrip('.')

                if code:
                    try:
                        # Buscamos valores de forma inteligente en varias columnas posibles
                        # El usuario menciona C y D (index 2 y 3), pero en algunas hojas están en F/G o H/I
                        
                        def safe_float(val):
                            try:
                                if pd.notnull(val):
                                    text_val = str(val).split()[0].replace(',', '')
                                    return float(text_val)
                            except:
                                pass
                            return 0

                        # Candidatos: (Qty, Total)
                        pairs = [
                            (safe_float(row[2]), safe_float(row[3])),   # C, D (basado en reporte de usuario)
                            (safe_float(row[5]), safe_float(row[6])),   # F, G (basado en inspección Hospital)
                            (safe_float(row[6]), safe_float(row[7])),   # G, H (basado en inspección Contingencia)
                            (safe_float(row[7]), safe_float(row[8])),   # H, I
                        ]
                        
                        # Si OE. estaba en la fila de abajo (escalonado), también miramos la fila de arriba
                        if index > 0:
                            prev_row = df.iloc[index-1]
                            pairs.extend([
                                (safe_float(prev_row[2]), safe_float(prev_row[3])),
                                (safe_float(prev_row[0]), safe_float(prev_row[1])),
                                (safe_float(prev_row[5]), safe_float(prev_row[6])),
                                (safe_float(prev_row[6]), safe_float(prev_row[7])),
                                (safe_float(prev_row[7]), safe_float(prev_row[8])),
                            ])

                        qty, total = 0, 0
                        for q, t in pairs:
                            if q > 0:
                                qty, total = q, t
                                break

                        if qty > 0 or total > 0:
                            # Cálculo solicitado: D / C
                            pu = total / qty if qty > 0 else 0
                            sql = f"UPDATE catalogo_partidas SET acumulado_anterior_qty = {qty:.4f}, precio_unitario = {pu:.4f} WHERE codigo = '{code}';"
                            sql_statements.append(sql)
                            count += 1
                            total_processed += 1
                    except Exception as e:
                        print(f"Error row {index}: {e}")
                        continue
            
            print(f"Processed {count} items for {project_label}")

        except Exception as e:
            print(f"Error reading sheet {sheet_name}: {e}")

    sql_statements.append("\nCOMMIT;")

    with open(output_sql_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(sql_statements))
    
    print(f"SQL file generated at: {output_sql_path} ({total_processed} items total)")

if __name__ == "__main__":
    current_dir = os.getcwd()
    target_xlsx = os.path.join(current_dir, 'COPILADO_METRADO_VALO_ACUMULADO.xlsx')
    target_sql = os.path.join(current_dir, 'supabase', 'migrations', '0018_import_base_data.sql')
    generate_update_sql(target_xlsx, target_sql)
