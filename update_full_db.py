import pandas as pd
import json
import os
import re

excel_path = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/Base_datos_17_17.xlsx'

def clean_codigo(codigo):
    if not isinstance(codigo, str): return str(codigo)
    # Eliminar espacios y ceros a la izquierda en cada segmento
    segments = codigo.split('.')
    cleaned_segments = []
    for s in segments:
        s = s.strip()
        if s.isdigit():
            cleaned_segments.append(str(int(s)))
        else:
            cleaned_segments.append(s)
    return '.'.join(cleaned_segments)

def get_nivel(codigo):
    if not isinstance(codigo, str): return 0
    return codigo.count('.') + 1

def get_parent(codigo):
    if not isinstance(codigo, str) or '.' not in codigo: return 'OE'
    return '.'.join(codigo.split('.')[:-1])

def process_sheet(sheet_name, output_file, var_name, specialty):
    try:
        print(f"--- Procesando Hoja: {sheet_name} ---")
        df = pd.read_excel(excel_path, sheet_name=sheet_name, header=None)
        print(f"Shape: {df.shape}")
        
        partidas = []
        hierarchy_names = {}
        
        for index, row in df.iterrows():
            codigo_raw = str(row[0]).strip() if pd.notna(row[0]) else None
            descripcion = str(row[1]).strip() if pd.notna(row[1]) else None
            unidad = str(row[2]).strip() if pd.notna(row[2]) else ""
            modificacion = str(row[3]).strip() if pd.notna(row[3]) else "SM"
            
            if not codigo_raw or codigo_raw == "nan" or "ITEM" in codigo_raw.upper():
                continue
            
            codigo = clean_codigo(codigo_raw)
            nivel = get_nivel(codigo)
            es_titulo = (unidad == "" or unidad == "nan")
            
            # Construir jerarquía para metrados
            hierarchy_names[nivel] = f"{codigo} {descripcion}"
            current_hierarchy = [hierarchy_names[i] for i in range(1, nivel) if i in hierarchy_names]
            
            partida = {
                "id": str(len(partidas) + 1),
                "codigo": codigo,
                "descripcion": descripcion,
                "unidad": unidad if not es_titulo else "",
                "es_titulo": es_titulo,
                "parent_id": get_parent(codigo),
                "nivel_jerarquia": nivel,
                "jerarquia": current_hierarchy if not es_titulo else [],
                "especialidad": specialty,
                "modificacion": modificacion if modificacion != "nan" else "SM",
                "apu": None
            }
            partidas.append(partida)

        with open(output_file, 'w', encoding='utf-8') as f:
            if specialty == 'contingencia':
                f.write('// @ts-nocheck\n')
            f.write('import type { Partida } from "../types";\n\n')
            f.write(f'export const {var_name}: Partida[] = ')
            f.write(json.dumps(partidas, indent=4, ensure_ascii=False))
            f.write(';\n')
            
        print(f"✅ Procesadas {len(partidas)} partidas para {specialty}.")
        return len(partidas)
        
    except Exception as e:
        print(f"❌ Error en hoja {sheet_name}: {e}")
        return 0

if __name__ == "__main__":
    # Hospital
    h_file = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/src/data/mockDB_1.ts'
    process_sheet('Hospital', h_file, 'mockPartidas', 'hospital')
    
    # Contingencia
    c_file = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/src/data/mockDB_contingencia.ts'
    process_sheet('Contingencia', c_file, 'mockPartidasContingencia', 'contingencia')
