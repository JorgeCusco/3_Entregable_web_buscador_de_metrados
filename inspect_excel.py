import pandas as pd
import sys

file_path = r'd:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\DATOS_LIMPIOS_PROCESAR.xlsx'
try:
    df = pd.read_excel(file_path, sheet_name='APUS', header=None, nrows=25)
    
    # We know row index 5 (Row 6) has the headers for the resource table.
    print("Headers at row 6 (index 5):")
    for col_idx in range(len(df.columns)):
        val = df.iloc[5, col_idx]
        if pd.notna(val):
            print(f"Col {col_idx} ({chr(65+col_idx)}): {val}")
            
    print("\nData row at row 9 (index 8) - OPERARIO:")
    for col_idx in range(len(df.columns)):
        val = df.iloc[8, col_idx]
        if pd.notna(val):
            print(f"Col {col_idx} ({chr(65+col_idx)}): {val}")

except Exception as e:
    print(f"Error: {e}")
