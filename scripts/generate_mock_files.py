#!/usr/bin/env python3
import json

# Leer los JSONs convertidos
with open('hospital_converted.json', 'r', encoding='utf-8') as f:
    hospital = json.load(f)

with open('contingencia_converted.json', 'r', encoding='utf-8') as f:
    contingencia = json.load(f)

# Generar mockDB_1.ts
ts_content_hospital = "import type { Partida } from \"../types\";\n\nexport const mockPartidas: Partida[] = " + json.dumps(hospital, ensure_ascii=False, indent=4) + ";\n"

# Generar mockDB_contingencia.ts
ts_content_contingencia = "// @ts-nocheck\nimport type { Partida } from \"../types\";\n\nexport const mockPartidasContingencia: Partida[] = " + json.dumps(contingencia, ensure_ascii=False, indent=4) + ";\n"

# Guardar archivos
with open('../src/data/mockDB_1.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content_hospital)

with open('../src/data/mockDB_contingencia.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content_contingencia)

print(f"✅ mockDB_1.ts generado ({len(hospital)} partidas)")
print(f"✅ mockDB_contingencia.ts generado ({len(contingencia)} partidas)")
