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
            
            # Localizar columna ITEM
            base_col = -1
            for idx, col in enumerate(df.columns):
                if df[col].astype(str).str.contains('ITEM', case=False).any():
                    base_col = idx
                    break
            
            if base_col == -1:
                print(f"Warning: 'ITEM' column not found in {sheet_name}. Assuming index 0.")
                base_col = 0
            else:
                print(f"Found 'ITEM' column at index {base_col}")

            sql_statements.append(f"-- SECCIÓN: {project_label}")
            
            count = 0
            for index, row in df.iterrows():
                # Item (A) relativo a base_col
                raw_code = str(row[base_col]).strip() if pd.notnull(row[base_col]) else ""
                
                # Buscamos 'OE.' en el código
                if 'OE.' in raw_code.upper():
                    code = raw_code.rstrip('.')
                    try:
                        # Mapeo solicitado: E (Base+4) = Metrado, F (Base+5) = Presupuesto
                        # Metrado Acumulado (E)
                        qty_idx = base_col + 4
                        total_idx = base_col + 5
                        
                        def safe_float(val):
                            try:
                                if pd.notnull(val):
                                    text_val = str(val).split()[0].replace(',', '')
                                    return float(text_val)
                            except:
                                pass
                            return 0

                        qty = safe_float(row[qty_idx]) if qty_idx < len(row) else 0
                        total = safe_float(row[total_idx]) if total_idx < len(row) else 0
                        
                        # Si están en 0 en la misma fila, intentamos la fila de arriba (escalonado detectado antes)
                        if qty == 0 and total == 0 and index > 0:
                            prev_row = df.iloc[index-1]
                            qty = safe_float(prev_row[qty_idx]) if qty_idx < len(prev_row) else 0
                            total = safe_float(prev_row[total_idx]) if total_idx < len(prev_row) else 0

                        if qty > 0 or total > 0:
                            # Cálculo: PU = Presupuesto / Metrado
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
