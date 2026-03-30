import os
import re
import json

# Paths
INPUT_FILE = r'd:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\src\data\hvacData.ts'
OUTPUT_FILE = r'd:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\supabase\migrations\0015_populate_hvac.sql'

def parse_hvac_data():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to get the object content between {}
    # Since it's a huge file, we'll try to find the groups
    content = content.replace('export const HVAC_DATA = ', '').strip()
    if content.endswith(';'):
        content = content[:-1]
    
    # The file is almost valid JSON if we fix quotes and trailing commas
    # But it's easier to just use some string processing since it's a known format
    
    # Fix keys
    content = re.sub(r'(\s+)(\w+):', r'\1"\2":', content)
    
    try:
        data = json.loads(content)
        return data
    except Exception as e:
        print(f"Error parsing JSON-like content: {e}")
        # Secondary approach: just regex the lines if JSON load fails
        return None

def generate_sql(data):
    if not data:
        return ""
    
    sql_lines = ["-- Population for HVAC Accessories\n", "INSERT INTO hvac_catalogo_accesorios (categoria, label, factor) VALUES\n"]
    
    all_values = []
    for category, items in data.items():
        for item in items:
            label = item['label'].replace("'", "''")
            factor = item['factor']
            all_values.append(f"('{category}', '{label}', {factor})")
    
    # Process in chunks to avoid huge statements
    chunk_size = 500
    output = []
    for i in range(0, len(all_values), chunk_size):
        chunk = all_values[i:i + chunk_size]
        stmt = f"INSERT INTO hvac_catalogo_accesorios (categoria, label, factor) VALUES\n" + ",\n".join(chunk) + ";\n"
        output.append(stmt)
    
    return "\n".join(output)

if __name__ == "__main__":
    hvac_data = parse_hvac_data()
    if hvac_data:
        sql = generate_sql(hvac_data)
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(sql)
        print(f"SQL migration generated at {OUTPUT_FILE}")
    else:
        print("Failed to extract HVAC data.")
