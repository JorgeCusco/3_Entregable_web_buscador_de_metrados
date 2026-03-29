import pandas as pd

def explore(filename, outfile):
    print(f"=== {filename} ===")
    try:
        df = pd.read_excel(filename, nrows=30)
        with open(outfile, 'w', encoding='utf-8') as f:
            f.write(f"=== {filename} ===\n")
            f.write("Columns (index: name):\n")
            for i, c in enumerate(df.columns):
                f.write(f"[{i}] {c}\n")
            f.write("\nFirst 30 rows:\n")
            for i, row in df.iterrows():
                f.write(f"Row {i}: {row.to_dict()}\n")
    except Exception as e:
        print("ERROR:", e)

explore("presupuesto_ultim.xls", "tools/migracion/explore_presupuesto.txt")
explore("nueva_data.xlsx", "tools/migracion/explore_nueva_data.txt")
