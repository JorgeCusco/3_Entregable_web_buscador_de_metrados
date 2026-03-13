import pandas as pd

base_path = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/presupuesto_modif.xls'

try:
    df = pd.read_excel(base_path, header=None)
    matches = df[df[0].astype(str).str.contains('OE.9.9.57', na=False)]
    if not matches.empty:
        print(f"Found {len(matches)} matches in base.")
        for i, row in matches.iterrows():
            print(f"Row {i} [{row[0]}]: {row[1]}")
    else:
        print("Not found in base.")
except Exception as e:
    print(f"Error: {e}")
