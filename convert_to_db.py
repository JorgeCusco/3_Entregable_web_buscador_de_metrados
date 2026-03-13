import pandas as pd
import json

excel_path = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/presupuesto_modif.xls'

def get_nivel(codigo):
    if not isinstance(codigo, str): return 0
    return codigo.count('.') + 1

def get_parent(codigo):
    if not isinstance(codigo, str) or '.' not in codigo: return 'OE'
    return '.'.join(codigo.split('.')[:-1])

try:
    df = pd.read_excel(excel_path, header=None)
    print(f"DataFrame shape: {df.shape}")
    num_cols = df.shape[1]
    
    partidas = []
    hierarchy_names = {}

    for index, row in df.iterrows():
        try:
            codigo = str(row[0]).strip() if pd.notna(row[0]) else None
            descripcion = str(row[1]).strip() if pd.notna(row[1]) else None
            
            # Use col 5 if exists, else look for unit in other cols or default ""
            # Based on inspection, col 5 was 'm2' etc.
            unidad = ""
            if num_cols > 5 and pd.notna(row[5]):
                unidad = str(row[5]).strip()
            
            if not codigo or codigo == "nan": continue
            
            nivel = get_nivel(codigo)
            es_titulo = (unidad == "" or unidad == "nan")
            
            hierarchy_names[nivel] = f"{codigo} {descripcion}"
            current_hierarchy = [hierarchy_names[i] for i in range(1, nivel)]
            
            partida = {
                "id": str(index + 1),
                "codigo": codigo,
                "descripcion": descripcion,
                "unidad": unidad if not es_titulo else "",
                "es_titulo": es_titulo,
                "parent_id": get_parent(codigo),
                "nivel_jerarquia": nivel,
                "jerarquia": current_hierarchy if not es_titulo else None,
                "apu": None
            }
            partidas.append(partida)
        except Exception as e_row:
            print(f"Error at row {index}: {e_row}")

    output_path = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/src/data/mockDB_1.ts'
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('import type { Partida } from "../types";\n\n')
        f.write('export const mockPartidas: Partida[] = ')
        f.write(json.dumps(partidas, indent=4, ensure_ascii=False))
        f.write(';\n')
        
    print(f"✅ Se han procesado {len(partidas)} partidas.")

except Exception as e:
    print(f"❌ Error General: {e}")
