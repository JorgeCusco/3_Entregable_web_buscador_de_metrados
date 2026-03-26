import pandas as pd

# Examinar la estructura del archivo Excel
print("Inspeccionando nueva_data.xlsx...")
print("=" * 80)

# Leer sin asignar encabezados para ver qué tenemos
excel_raw = pd.read_excel("nueva_data.xlsx", header=None)
print(f"Dimensiones: {excel_raw.shape}")
print(f"\nPrimeras 5 filas:")
print(excel_raw.head())

# Intentar leer con header en diferentes filas
print("\n" + "=" * 80)
print("Intentando detectar fila de encabezados...")

# Buscar la fila que contiene encabezados
for row in range(min(10, len(excel_raw))):
    if excel_raw.iloc[row].notna().sum() > 5:  # Si tiene varios valores no nulos
        print(f"\nFila {row} como posible encabezado:")
        print(excel_raw.iloc[row].head(15))
