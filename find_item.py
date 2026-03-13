import pandas as pd

excel_path = 'd:/00_OFI_PRESUPUESTOS_progra/3_Entregable_web_buscador_de_metrados/Base_datos_MODIF3.xlsx'

for sheet in ['Hospital', 'Contingencia']:
    try:
        print(f"--- Checking Sheet: {sheet} ---")
        df = pd.read_excel(excel_path, sheet_name=sheet, header=None)
        # Buscar en la columna 0
        matches = df[df[0].astype(str).str.contains('OE.9.9.57', na=False)]
        if not matches.empty:
            print(f"Found {len(matches)} matches in {sheet}")
            for i, row in matches.iterrows():
                mods = []
                for c in range(3, min(21, df.shape[1])):
                    if pd.notna(row[c]):
                        mods.append(f"Col{c}:{row[c]}")
                print(f"Row {i} [{row[0]}]: {' | '.join(mods)}")
        else:
            print("Not found in this sheet.")
    except Exception as e:
        print(f"Error in {sheet}: {e}")
