import pandas as pd
import sys

def analyze_template():
    file_path = "d:\\00_OFI_PRESUPUESTOS_progra\\3_Entregable_web_buscador_de_metrados\\METRADO_PLANTILLA.xlsx"
    print(f"-> Analizando Formato del archivo Excel: {file_path}")
    
    try:
        df = pd.read_excel(file_path, sheet_name=None, header=None)
        sheet_name = list(df.keys())[0]
        data = df[sheet_name]
        
        print("\n-> Muestra Fila 7 (Index 6, supuestas cabeceras):")
        print(data.iloc[6].values)
        
        print("\n-> Muestra Fila 8 (Index 7, donde van los datos base):")
        print(data.iloc[7].values)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_template()
