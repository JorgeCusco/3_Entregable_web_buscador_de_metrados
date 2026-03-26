import pandas as pd
import json
from supabase import create_client
from datetime import datetime

# Configurar credenciales
SUPABASE_URL = "https://cdinoxmyukpasihkkkmd.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkaW5veG15dWtwYXNpaGtra21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMjEwNTgsImV4cCI6MjA4OTU5NzA1OH0.giZrcjXwrcKzQSzA9qMDGqMSUOvsvj8TMWToe-1O_hs"

# Inicializar cliente de Supabase
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("=" * 80)
print("COMPARACIÓN DE DATOS: catalogo_partidas")
print("=" * 80)
print()

# 1. Leer datos de Excel
print("[1] Leyendo archivo Excel: nueva_data.xlsx")
try:
    # Leer excel sin headers primero
    excel_raw = pd.read_excel("nueva_data.xlsx", header=None)
    
    # Extraer código (col 0), descripción (col 1), unidad (col 2)
    excel_data = pd.DataFrame({
        'codigo': excel_raw[0],
        'descripcion': excel_raw[1],
        'unidad': excel_raw[2]
    })
    
    # Limpiar: eliminar valores NaN en codigo
    excel_data = excel_data.dropna(subset=['codigo'])
    excel_data['codigo'] = excel_data['codigo'].astype(str).str.strip()
    excel_data['descripcion'] = excel_data['descripcion'].astype(str).str.strip()
    excel_data['unidad'] = excel_data['unidad'].fillna('').astype(str).str.strip()
    
    print(f"    ✓ {len(excel_data)} filas cargadas desde Excel")
    print(f"    Ejemplo: {excel_data.iloc[0].to_dict()}")
except Exception as e:
    print(f"    ✗ Error al leer Excel: {e}")
    import traceback
    traceback.print_exc()
    exit(1)

print()

# 2. Obtener datos de Supabase
print("[2] Obteniendo datos de Supabase (tabla: catalogo_partidas)")
try:
    # Obtener todos los registros en paginación
    all_data = []
    page = 0
    while True:
        response = supabase.table("catalogo_partidas").select("*").range(
            page * 1000, (page + 1) * 1000 - 1
        ).execute()
        
        if not response.data:
            break
        
        all_data.extend(response.data)
        page += 1
    
    supabase_data = pd.DataFrame(all_data)
    print(f"    ✓ {len(supabase_data)} filas cargadas desde Supabase")
    print(f"    Ejemplo: {supabase_data.iloc[0].to_dict() if len(supabase_data) > 0 else 'Sin datos'}")
except Exception as e:
    print(f"    ✗ Error al conectar con Supabase: {e}")
    import traceback
    traceback.print_exc()
    exit(1)

print()

# 3. Normalizar datos para comparación
print("[3] Normalizando y comparando datos...")

# Usar código como identificador único
excel_ids = set(excel_data['codigo'].unique())
supabase_ids = set(supabase_data['codigo'].unique()) if len(supabase_data) > 0 else set()

print(f"    Códigos únicos Excel: {len(excel_ids)}")
print(f"    Códigos únicos Supabase: {len(supabase_ids)}")
print()

# 4. Análisis de cambios
print("[4] RESULTADOS DE LA COMPARACIÓN")
print("-" * 80)

# Nuevos registros (en Excel pero no en Supabase)
nuevos = excel_ids - supabase_ids
print(f"\n📝 NUEVOS REGISTROS: {len(nuevos)} registros")
if nuevos:
    nuevos_sorted = sorted(list(nuevos))
    print(f"    Primeros 10:\n")
    for code in nuevos_sorted[:10]:
        desc = excel_data[excel_data['codigo'] == code]['descripcion'].iloc[0]
        print(f"      {code}: {desc[:60]}")
    if len(nuevos) > 10:
        print(f"    ... y {len(nuevos) - 10} más")
else:
    print("    (Ninguno)")

# Eliminados (en Supabase pero no en Excel)
eliminados = supabase_ids - excel_ids
print(f"\n🗑️  ELIMINADOS: {len(eliminados)} registros")
if eliminados:
    eliminados_sorted = sorted(list(eliminados))
    print(f"    Primeros 10:\n")
    for code in eliminados_sorted[:10]:
        if len(supabase_data) > 0:
            desc = supabase_data[supabase_data['codigo'] == code]['descripcion'].iloc[0] if any(supabase_data['codigo'] == code) else "N/A"
            print(f"      {code}: {desc[:60] if desc != 'N/A' else desc}")
    if len(eliminados) > 10:
        print(f"    ... y {len(eliminados) - 10} más")
else:
    print("    (Ninguno)")

# Modificados (comparar valores de registros existentes)
print(f"\n✏️  MODIFICADOS: Analizando...")
modificados = {}

comunes = excel_ids & supabase_ids

for codigo in comunes:
    fila_excel = excel_data[excel_data['codigo'] == codigo].iloc[0]
    fila_supabase = supabase_data[supabase_data['codigo'] == codigo].iloc[0]
    
    cambios = {}
    
    # Comparar descripción
    desc_excel = str(fila_excel['descripcion']).strip()
    desc_supabase = str(fila_supabase['descripcion']).strip()
    if desc_excel != desc_supabase:
        cambios['descripcion'] = {
            'anterior': desc_supabase,
            'nuevo': desc_excel
        }
    
    # Comparar unidad
    unit_excel = str(fila_excel['unidad']).strip() if fila_excel['unidad'] else ''
    unit_supabase = str(fila_supabase['unidad']).strip() if fila_supabase['unidad'] else ''
    if unit_excel != unit_supabase:
        cambios['unidad'] = {
            'anterior': unit_supabase,
            'nuevo': unit_excel
        }
    
    if cambios:
        modificados[codigo] = cambios

print(f"    Total: {len(modificados)} registros modificados")
if modificados:
    for codigo, cambios in list(modificados.items())[:5]:
        print(f"\n    Código {codigo}:")
        for campo, valores in cambios.items():
            print(f"      - {campo}:")
            print(f"        Anterior: {valores['anterior'][:70]}")
            print(f"        Nuevo:    {valores['nuevo'][:70]}")
    if len(modificados) > 5:
        print(f"\n    ... y {len(modificados) - 5} registros más con cambios")
else:
    print("    (Ninguno)")

print()
print("=" * 80)

# 5. Resumen
print("\nRESUMEN:")
print(f"  📊 Excel:     {len(excel_data)} registros")
print(f"  📊 Supabase:  {len(supabase_data)} registros")
print(f"  ➕ Nuevos:    {len(nuevos)}")
print(f"  ➖ Eliminados: {len(eliminados)}")
print(f"  🔄 Modificados: {len(modificados)}")
print(f"  ✅ Sin cambios: {len(comunes) - len(modificados)}")
print("=" * 80)

# 6. Guardar reporte detallado
reporte = {
    "fecha_comparacion": datetime.now().isoformat(),
    "resumen": {
        "excel_total": len(excel_data),
        "supabase_total": len(supabase_data),
        "nuevos": len(nuevos),
        "eliminados": len(eliminados),
        "modificados": len(modificados),
        "sin_cambios": len(comunes) - len(modificados)
    },
    "nuevos": {
        "cantidad": len(nuevos),
        "codigos": sorted(list(nuevos))[:100],  # Primeros 100
        "total_codigos": len(nuevos)
    },
    "eliminados": {
        "cantidad": len(eliminados),
        "codigos": sorted(list(eliminados))[:100],  # Primeros 100
        "total_codigos": len(eliminados)
    },
    "modificados": {
        "cantidad": len(modificados),
        "detalles": {codigo: cambios for codigo, cambios in list(modificados.items())[:50]}  # Primeros 50
    }
}

with open("reporte_comparacion.json", "w", encoding="utf-8") as f:
    json.dump(reporte, f, ensure_ascii=False, indent=2)

print("\n✓ Reporte detallado guardado en: reporte_comparacion.json")
