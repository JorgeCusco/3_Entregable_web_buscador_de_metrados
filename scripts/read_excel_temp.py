import pandas as pd
import json

df = pd.read_excel('Personal_cuadrillas_belem.xlsx')
df = df.astype(str)
info = {
    'columns': df.columns.tolist(),
    'head': df.head(3).to_dict('records')
}
with open('info.json', 'w', encoding='utf-8') as f:
    json.dump(info, f, indent=2, ensure_ascii=False)
