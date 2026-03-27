import pandas as pd
import sys

file_path = sys.argv[1] if len(sys.argv) > 1 else 'METRADO_PLANTILLA_5.xlsx'
xl = pd.ExcelFile(file_path)
sheet_name = next((s for s in xl.sheet_names if 'metrado' in s.lower()), xl.sheet_names[0])
df = pd.read_excel(file_path, sheet_name=sheet_name, header=None)

# Guardar un resumen de filas que TENGAN cantidad
df_data = df[pd.notnull(df[3]) & (df[3] != 0)]

with open('tools/migracion/inspection_data.txt', 'w', encoding='utf-8') as f:
    f.write(f"FILAS CON DATOS (Col 3 != 0):\n")
    f.write(df_data.to_string())
