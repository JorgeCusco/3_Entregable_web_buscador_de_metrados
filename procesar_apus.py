import pandas as pd
import json
import math

# Función auxiliar para limpiar NaNs
def clean_val(val):
    if pd.isna(val) or val == 'nan':
        return ""
    if isinstance(val, str):
        return val.strip()
    return val

def procesar_excel(file_path):
    print(f"Leyendo {file_path}...")
    df = pd.read_excel(file_path)
    
    # Asumiendo estructura de columnas del S10 typical:
    # 0: Item/Jerarquía
    # 1: Descripción
    # 2: Und
    # 3: Metrado/Cantidad
    # 4: Precio S/
    # 5: Parcial S/
    
    partidas = []
    current_partida = None
    current_hierarchy = {} # Key: nivel (int), Value: descripcion (str)
    
    for index, row in df.iterrows():
        codigo = clean_val(row.iloc[0])
        descripcion = clean_val(row.iloc[1])
        unidad = clean_val(row.iloc[2])
        cantidad = clean_val(row.iloc[3])
        precio = clean_val(row.iloc[4])
        parcial = clean_val(row.iloc[5])
        
        # Ignorar cabeceras del reporte principal vacías
        if descripcion.isupper() and (codigo == "" or isinstance(codigo, int) or len(str(codigo)) < 3):
            continue
            
        is_partida = False
        is_title = False
        
        if isinstance(codigo, str) and (codigo.startswith("OE.") or codigo.startswith("0")):
            # Diferenciar Título Agrupador de Partida Ejecutable
            # Si carece de unidad y de precio, es una cabecera agrupacional WBS
            if (unidad == "" or str(unidad).lower() == "nan") and (precio == "" or str(precio).lower() == "nan" or precio == 0):
                is_title = True
            else:
                is_partida = True
                
        if is_title:
            nivel = codigo.count('.')
            current_hierarchy[nivel] = descripcion
            # Purgar cualquier nivel hijo residual
            keys_to_delete = [k for k in current_hierarchy.keys() if k > nivel]
            for k in keys_to_delete:
                del current_hierarchy[k]
                
        elif is_partida:
            # Construimos el array de jerarquía del padre para la nueva partida
            arr_jerarquia = [current_hierarchy[k] for k in sorted(current_hierarchy.keys())]
            
            # Guardamos la partida anterior si existía
            if current_partida:
                partidas.append(current_partida)
                
            # Creamos la nueva partida
            current_partida = {
                "id": str(len(partidas) + 1),
                "codigo": codigo,
                "descripcion": descripcion,
                "unidad": unidad,
                "jerarquia": arr_jerarquia,
                "apu": {
                    "rendimiento_diario": 0, # Placeholder, habría que extraerlo si el Excel lo tuviera
                    "jornada_horas": 8,
                    "costo_directo_unitario": precio if isinstance(precio, (int, float)) else 0,
                    "recursos": []
                }
            }
        elif current_partida and descripcion != "" and str(descripcion).lower() != "nan":
            # Si no es partida pero hay descripción, es un Insumo (Recurso del APU)
            # Intentamos clasificar el tipo burdamente por la unidad del S10
            tipo = "Materiales"
            u_min = str(unidad).lower()
            if u_min == "hh": tipo = "Mano de Obra"
            elif u_min == "hm" or u_min == "he" or "%" in u_min: tipo = "Equipos"
            elif u_min == "glb" or u_min == "est": tipo = "Subcontratos"
                
            recurso = {
                "tipo": tipo,
                "descripcion": descripcion,
                "unidad": unidad,
                "cantidad": cantidad if isinstance(cantidad, (int, float)) else 0,
                "precio_unitario": precio if isinstance(precio, (int, float)) else 0,
                "parcial": parcial if isinstance(parcial, (int, float)) else 0
            }
            # Evitamos basura
            if recurso["descripcion"] and recurso["descripcion"].lower() != "nan":
                current_partida["apu"]["recursos"].append(recurso)

    # Añadir la última
    if current_partida:
        partidas.append(current_partida)

    # Generar el archivo TypeScript para el frontend
    ts_content = 'import { Partida } from "../types";\n\n'
    ts_content += 'export const mockPartidas: Partida[] = '
    
    json_str = json.dumps(partidas, indent=2, ensure_ascii=False)
    ts_content += json_str + ';\n'
    
    with open('src/data/mockDB.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"✅ Extracción completada. {len(partidas)} partidas exportadas a src/data/mockDB.ts")

if __name__ == "__main__":
    procesar_excel("DATOS_LIMPIOS_PROCESAR.xlsx")
