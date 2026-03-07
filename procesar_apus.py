import pandas as pd
import json
import math
import re
import os

def clean_val(val):
    if pd.isna(val) or val == 'nan':
        return ""
    if isinstance(val, str):
        return val.strip()
    return val

def clean_num(val):
    if pd.isna(val) or val == 'nan' or val == "":
        return 0.0
    try:
        if isinstance(val, str):
            val = val.replace(',', '')
        return float(val)
    except ValueError:
        return 0.0

def procesar_excel(file_path):
    print(f"Iniciando procesamiento profundo de {file_path}...")
    try:
        xl = pd.ExcelFile(file_path)
    except Exception as e:
        print(f"Error al abrir el archivo Excel: {e}")
        return

    partidas_dict = {} 
    
    # ---------------------------------------------------------
    # FASE 1: Extraer Jerarquía y Estructura Base (Hoja 'Presupuesto')
    # ---------------------------------------------------------
    hoja_presup = 'Presupuesto' if 'Presupuesto' in xl.sheet_names else xl.sheet_names[0]
    print(f"Fase 1: Escaneando hoja '{hoja_presup}' para armar el árbol WBS...")
    
    df_presupuesto = pd.read_excel(file_path, sheet_name=hoja_presup, header=None)
    current_hierarchy = {} # Key: nivel (int), Value: descripcion (str)
    titulos_dict = {} # Key: codigo, Value: {id, codigo, descripcion, es_titulo, parent_id}
    
    for index, row in df_presupuesto.iterrows():
        codigo = clean_val(row.iloc[0])
        descripcion = clean_val(row.iloc[1])
        unidad = clean_val(row.iloc[2]) if len(row) > 2 else ""
        
        if not descripcion or str(descripcion).lower() == "nan":
            continue
            
        if isinstance(codigo, str) and (codigo.startswith("OE.") or codigo.startswith("0") or codigo.startswith("1")):
            # Es un agrupador si no tiene unidad
            is_title = False
            if unidad == "" or str(unidad).lower() == "nan":
                is_title = True
                
            if is_title:
                parent_id = ""
                if "." in codigo:
                    parent_id = ".".join(codigo.split(".")[:-1])
                
                titulos_dict[codigo] = {
                    "id": "",
                    "codigo": codigo,
                    "descripcion": descripcion,
                    "unidad": "",
                    "es_titulo": True,
                    "parent_id": parent_id,
                    "nivel_jerarquia": str(codigo).count('.'),
                    "apu": None
                }
                
                # Guardar en jerarquía para las partidas hijas
                nivel = str(codigo).count('.')
                current_hierarchy[nivel] = f"{codigo} {descripcion}"
                keys_to_delete = [k for k in current_hierarchy.keys() if k > nivel]
                for k in keys_to_delete:
                    del current_hierarchy[k]
            else:
                # Es partida base
                parent_id = ""
                if "." in codigo:
                    parent_id = ".".join(codigo.split(".")[:-1])
                
                arr_jerarquia = [current_hierarchy[k] for k in sorted(current_hierarchy.keys())]
                partidas_dict[codigo] = {
                    "id": "", 
                    "codigo": codigo,
                    "descripcion": descripcion,
                    "unidad": unidad,
                    "jerarquia": arr_jerarquia,
                    "es_titulo": False,
                    "parent_id": parent_id,
                    "nivel_jerarquia": str(codigo).count('.'),
                    "apu": None
                }
                
    print(f" -> Presupuesto base mapeado: {len(partidas_dict)} partidas y {len(titulos_dict)} títulos encontrados.")

    # ---------------------------------------------------------
    # FASE 2: Extraer Detalle de APUS (Hoja 'APUS')
    # ---------------------------------------------------------
    hoja_apus = 'APUS' if 'APUS' in xl.sheet_names else xl.sheet_names[0]
    print(f"Fase 2: Escaneando hoja '{hoja_apus}' para extraer recursos, cuadrillas y costos...")
    
    df_apus = pd.read_excel(file_path, sheet_name=hoja_apus, header=None)
    
    current_codigo = None
    current_apu = None
    current_tipo_recurso = None
    partidas_apus_count = 0
    row_idx = 0
    
    while row_idx < len(df_apus):
        row = df_apus.iloc[row_idx]
        col_0 = clean_val(row.iloc[0])
        col_B = clean_val(row.iloc[1])
        # Columna 9 o 10 suele tener la unidad en la fila de recursos
        col_J = ""
        for offset in [9, 10, 8]: # Flexible unit searching
            if len(row) > offset:
                val = clean_val(row.iloc[offset])
                if val and isinstance(val, str) and len(val) <= 4: # Short units
                    col_J = val
                    break
        
        # Detectar cabecera de partida: "Partida: OE.1.1.1.01"
        if isinstance(col_0, str) and str(col_0).strip().startswith("Partida:"):
            # Guardar el APU anterior al diccionario local
            if current_codigo and current_apu:
                if current_codigo in partidas_dict:
                    partidas_dict[current_codigo]["apu"] = current_apu
                else:
                    partidas_dict[current_codigo] = {
                        "id": "",
                        "codigo": current_codigo,
                        "descripcion": "Extraido desde APU (Falta en Presupuesto)",
                        "unidad": "",
                        "jerarquia": [],
                        "es_titulo": False,
                        "parent_id": "",
                        "nivel_jerarquia": str(current_codigo).count('.'),
                        "apu": current_apu
                    }
                partidas_apus_count += 1
            
            # Nuevo Bloque APU
            current_codigo = str(col_0).replace("Partida:", "").strip()
            
            # Buscar el Rendimiento
            rendimiento = 0.0
            for val in row.dropna():
                if isinstance(val, str) and "Rendimiento" in val:
                    nums = re.findall(r'\d+\.?\d*', val)
                    if nums:
                        rendimiento = float(nums[0])
                        break
                        
            current_apu = {
                "rendimiento_diario": rendimiento,
                "jornada_horas": 8, 
                "costo_directo_unitario": 0.0,
                "recursos": []
            }
            
            # La fila inmediata inferior tiene la Descripción y el Costo Unitario
            if row_idx + 1 < len(df_apus):
                row_desc = df_apus.iloc[row_idx + 1]
                desc_val = clean_val(row_desc.iloc[0])
                costo_val = 0.0
                
                # Buscar un número en las dos últimas columnas de la fila de descripción
                for col_i in range(len(row_desc)-1, -1, -1):
                    val = clean_val(row_desc.iloc[col_i])
                    if val and isinstance(val, (int, float)):
                        costo_val = float(val)
                        break
                        
                # Actualizamos atributos en diccionario base
                if current_codigo in partidas_dict:
                    if not partidas_dict[current_codigo]["descripcion"]:
                        partidas_dict[current_codigo]["descripcion"] = str(desc_val)
                    if not partidas_dict[current_codigo]["unidad"]:
                        for cv in row_desc.dropna():
                            if isinstance(cv, str) and "Costo" in cv and "por" in cv:
                                try:
                                    partidas_dict[current_codigo]["unidad"] = cv.split("por ")[1].strip()
                                except:
                                    pass
                else:
                    unid_deduc = ""
                    for cv in row_desc.dropna():
                        if isinstance(cv, str) and "Costo" in cv and "por" in cv:
                            try:
                                unid_deduc = cv.split("por ")[1].strip()
                            except:
                                pass
                    partidas_dict[current_codigo] = {
                        "id": "",
                        "codigo": current_codigo,
                        "descripcion": str(desc_val),
                        "unidad": unid_deduc, 
                        "jerarquia": [],
                        "es_titulo": False,
                        "parent_id": "",
                        "nivel_jerarquia": str(current_codigo).count('.'),
                        "apu": None
                    }
                    
                if current_apu:
                    current_apu["costo_directo_unitario"] = costo_val

            current_tipo_recurso = None
            row_idx += 2 # Saltamos la descripción
            continue
            
        # 2. Detectar Categorías de Recurso (Ej: "MANO DE OBRA")
        if isinstance(col_0, str) and not col_B:
            c0_clean = col_0.strip().upper()
            if "MANO DE OBRA" in c0_clean or "MATERIALES" in c0_clean or "EQUIPO" in c0_clean or "SUBCONTRATO" in c0_clean:
                if "MANO DE OBRA" in c0_clean: current_tipo_recurso = "Mano de Obra"
                elif "MATERIAL" in c0_clean: current_tipo_recurso = "Materiales"
                elif "EQUIPO" in c0_clean: current_tipo_recurso = "Equipos"
                else: current_tipo_recurso = "Subcontratos"
                row_idx += 1
                continue
                
        # 3. Extraer los Detalles de los Recursos
        if current_codigo and current_apu and current_tipo_recurso:
            if col_0 and col_B and str(col_0).lower() != "código" and str(col_B).lower() != "descripción":
                q_val = clean_val(row.iloc[12]) if len(row) > 12 else 0
                precio_val = clean_val(row.iloc[16]) if len(row) > 16 else 0
                parcial_val = clean_val(row.iloc[17]) if len(row) > 17 else 0
                
                # Extraer la columna de "Recursos" (Cuadrilla), que suele ser la Col K (10)
                cuadrilla_val = ""
                if len(row) > 10:
                    c_val = clean_val(row.iloc[10])
                    if c_val != "" and c_val != "-" and c_val != "nan":
                        cuadrilla_val = clean_num(c_val)
                
                # Ajuste heurístico en caso de celdas movidas
                if q_val == 0 or q_val == "":
                    for c_off in [11, 13, 14, 15]:
                        if len(row) > c_off:
                            v = clean_val(row.iloc[c_off])
                            if v != "" and isinstance(v, (int, float)):
                                q_val = v
                                break
                                
                recurso = {
                    "tipo": current_tipo_recurso,
                    "descripcion": str(col_B),
                    "unidad": str(col_J),
                    "cuadrilla": cuadrilla_val if cuadrilla_val != "" else None,
                    "cantidad": clean_num(q_val),
                    "precio_unitario": clean_num(precio_val),
                    "parcial": clean_num(parcial_val)
                }
                
                if recurso["descripcion"] and recurso["descripcion"] != "nan":
                    current_apu["recursos"].append(recurso)
        
        row_idx += 1

    # Guardar el último APU
    if current_codigo and current_apu:
        if current_codigo in partidas_dict:
            partidas_dict[current_codigo]["apu"] = current_apu
        partidas_apus_count += 1

    print(f" -> Se extrajeron detalles de {partidas_apus_count} análisis de precios unitarios.")

    # ---------------------------------------------------------
    # FASE 3: Fusión y Exportación
    # ---------------------------------------------------------
    print("Fase 3: Fusionando datos y empaquetando para TypeScript...")
    lista_final = []
    pid = 1
    
    # Combinar diccionarios
    full_dict = {**titulos_dict, **partidas_dict}
    claves_ordenadas = sorted(list(full_dict.keys()), key=lambda x: str(x))
    
    for cod in claves_ordenadas:
        p = full_dict[cod]
        # Para títulos, no necesitamos tanta limpieza de descripción
        if p.get("es_titulo", False) or (p["descripcion"] and str(p["descripcion"]).lower() != "nan" and len(p["descripcion"]) > 2):
            p["id"] = str(pid)
            lista_final.append(p)
            pid += 1

    ts_content = 'import { Partida } from "../types";\n\n'
    ts_content += '// Datos extraídos y fusionados automáticamente de DATOS_LIMPIOS_PROCESAR.xlsx\n'
    ts_content += '// -> Fase 1: Hoja Presupuesto (Jerarquías WBS)\n'
    ts_content += '// -> Fase 2: Hoja APUS (Cuadrillas, Insumos y Rendimientos)\n\n'
    ts_content += 'export const mockPartidas: Partida[] = '
    
    # Prevenir que float infinity o NaN rompa el JSON, aunque el dict limpio no deberia tener
    json_str = json.dumps(lista_final, indent=4, ensure_ascii=False)
    ts_content += json_str + ';\n'
    
    output_path = 'src/data/mockDB.ts'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"✅ ¡Operación Terminada! {len(lista_final)} partidas con su APU completo exportadas exitosamente a '{output_path}'.")

if __name__ == "__main__":
    file_path = "DATOS_LIMPIOS_PROCESAR.xlsx"
    if not os.path.exists(file_path):
        print(f"Error Crítico: No se encontró el archivo '{file_path}' en esta carpeta.")
    else:
        procesar_excel(file_path)
