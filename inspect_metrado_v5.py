import pandas as pd
import os
import json

def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""
    from datetime import datetime
    if isinstance(obj, datetime):
        return obj.isoformat()
    return str(obj)

filename = 'METRADO_PLANTILLA_5.xlsx'
output_file = 'inspection_results.json'

if not os.path.exists(filename):
    with open(output_file, 'w') as f:
        json.dump({"error": f"File {filename} not found"}, f)
else:
    try:
        xl = pd.ExcelFile(filename)
        results = {"sheets": xl.sheet_names, "data": {}}
        for sheet in xl.sheet_names:
            df = pd.read_excel(filename, sheet_name=sheet, nrows=10)
            results["data"][sheet] = {
                "columns": [str(c) for c in df.columns],
                "head": df.head(5).astype(object).applymap(json_serial).to_dict(orient='records')
            }
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2, ensure_ascii=False)
        print(f"Results written to {output_file}")
    except Exception as e:
        with open(output_file, 'w') as f:
            json.dump({"error": str(e)}, f)
