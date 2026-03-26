# 🔧 DOCUMENTO TÉCNICO: GUÍA DE IMPLEMENTACIÓN
## Sistema de Migración Segura de Catálogo de Partidas

**Tabla de Contenidos:**
1. Scripts Listos para Usar
2. Checklist Detallado
3. Troubleshooting
4. Plan de Rollback

---

## 📦 SCRIPTS LISTOS PARA USAR

### Script 1: Validación Pre-Upload (validate_catalog.py)

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Valida que el archivo de catálogo nuevo sea seguro de subir a Supabase
Uso: python validate_catalog.py nueva_data.xlsx supabase_backup.csv
"""

import pandas as pd
import re
import sys
from pathlib import Path
from typing import Tuple, List, Dict

class CatalogValidator:
    def __init__(self, excel_file: str, current_csv: str):
        self.excel_file = excel_file
        self.current_csv = current_csv
        self.errors = []
        self.warnings = []
        self.issues_by_severity = {'CRÍTICO': [], 'ALTO': [], 'MEDIO': [], 'BAJO': []}
        
    def load_files(self):
        """Carga archivos a validar"""
        print("[1] Cargando archivos...")
        try:
            self.nuevo = pd.read_excel(self.excel_file, header=None)
            self.nuevo = pd.DataFrame({
                'codigo': self.nuevo[0],
                'descripcion': self.nuevo[1],
                'unidad': self.nuevo[2] if 2 in self.nuevo.columns else ''
            }).dropna(subset=['codigo'])
            print(f"    ✓ Excel: {len(self.nuevo)} registros")
        except Exception as e:
            print(f"    ✗ Error al leer Excel: {e}")
            sys.exit(1)
            
        try:
            self.actual = pd.read_csv(self.current_csv)
            print(f"    ✓ CSV: {len(self.actual)} registros")
        except Exception as e:
            print(f"    ✗ Error al leer CSV: {e}")
            sys.exit(1)
    
    def normalizar_codigo(self, codigo):
        """Normaliza código según reglas del sistema"""
        return str(codigo).strip().upper().replace(' ', '')
    
    def validar_codigos(self):
        """Valida que los códigos cumplan con reglas WBS"""
        print("\n[2] Validando códigos...")
        
        self.nuevo['codigo_norm'] = self.nuevo['codigo'].apply(self.normalizar_codigo)
        
        # Buscar duplicados
        duplicados = self.nuevo[self.nuevo.duplicated(subset=['codigo_norm'])]
        if len(duplicados) > 0:
            self.issues_by_severity['CRÍTICO'].append(
                f"⚠️  {len(duplicados)} códigos duplicados: {duplicados['codigo_norm'].tolist()[:5]}"
            )
        
        # Validar formato WBS (debe ser OE.X.X... o EC.X.X... etc)
        for idx, row in self.nuevo.iterrows():
            codigo = row['codigo_norm']
            if not re.match(r'^[A-Z]{1,3}(\.\d+)*$', codigo):
                self.issues_by_severity['ALTO'].append(
                    f"Código malformado (línea {idx}): '{codigo}' - debe ser formato WBS (OE.1.2.3)"
                )
        
        print(f"    ✓ Validación de códigos completada")
        return len(duplicados) == 0

    def validar_descripciones(self):
        """Valida integridad de descripciones"""
        print("\n[3] Validando descripciones...")
        
        vacias = self.nuevo[self.nuevo['descripcion'].isna() | (self.nuevo['descripcion'] == '')]
        if len(vacias) > 0:
            self.issues_by_severity['ALTO'].append(
                f"⚠️  {len(vacias)} descripciones vacías"
            )
        
        # Cambios semánticos graves (comparar con actual si existe)
        for idx, row in self.nuevo.iterrows():
            codigo = row['codigo_norm']
            desc_nuevo = str(row['descripcion']).strip()
            
            actual_row = self.actual[self.actual['codigo'] == codigo]
            if len(actual_row) > 0:
                desc_actual = str(actual_row.iloc[0]['descripcion']).strip()
                
                # Detectar cambios que NO son solo acentos
                if desc_actual != desc_nuevo:
                    # Comparar sin acentos
                    desc_actual_sin_acentos = self.sin_acentos(desc_actual)
                    desc_nuevo_sin_acentos = self.sin_acentos(desc_nuevo)
                    
                    if desc_actual_sin_acentos != desc_nuevo_sin_acentos:
                        # Es un cambio semántico real
                        if self.diferencia_significativa(desc_actual, desc_nuevo):
                            self.issues_by_severity['CRÍTICO'].append(
                                f"Cambio semántico grave en {codigo}:\n"
                                f"  ANTES: {desc_actual[:60]}...\n"
                                f"  NUEVO: {desc_nuevo[:60]}..."
                            )
                        else:
                            self.issues_by_severity['MEDIO'].append(
                                f"Cambio en descripción de {codigo}"
                            )
        
        print(f"    ✓ Validación de descripciones completada")
    
    def sin_acentos(self, texto):
        """Elimina acentos de texto"""
        import unicodedata
        return ''.join(c for c in unicodedata.normalize('NFD', texto)
                      if unicodedata.category(c) != 'Mn')
    
    def diferencia_significativa(self, desc1, desc2):
        """Detecta si hay cambio significativo (no solo typos)"""
        # Si comparten menos del 70% de palabras, es significativo
        palabras1 = set(desc1.lower().split())
        palabras2 = set(desc2.lower().split())
        
        if len(palabras1) == 0 or len(palabras2) == 0:
            return True
        
        similitud = len(palabras1 & palabras2) / max(len(palabras1), len(palabras2))
        return similitud < 0.7
    
    def validar_unidades(self):
        """Valida que unidades sean válidas"""
        print("\n[4] Validando unidades...")
        
        UNIDADES_VALIDAS = {'m2', 'm3', 'kg', 'hh', 'hm', 'ml', 'und', 'lote', ''}
        
        invalidas = self.nuevo[~self.nuevo['unidad'].astype(str).str.lower().isin(UNIDADES_VALIDAS)]
        if len(invalidas) > 0:
            self.issues_by_severity['MEDIO'].append(
                f"⚠️  Unidades no reconocidas: {invalid['unidad'].unique().tolist()}"
            )
        
        print(f"    ✓ Validación de unidades completada")
    
    def validar_jerarquia(self):
        """Valida que existan todos los padres en la jerarquía"""
        print("\n[5] Validando jerarquía WBS...")
        
        def get_padre(codigo):
            partes = codigo.split('.')
            return '.'.join(partes[:-1]) if len(partes) > 1 else None
        
        self.nuevo['padre'] = self.nuevo['codigo_norm'].apply(get_padre)
        codigos_existentes = set(self.nuevo['codigo_norm'].unique())
        
        padres_faltantes = []
        for padre in self.nuevo['padre'].dropna().unique():
            if padre not in codigos_existentes and padre is not None:
                padres_faltantes.append(padre)
        
        if padres_faltantes:
            self.issues_by_severity['ALTO'].append(
                f"⚠️  {len(padres_faltantes)} padres no existen en catálogo: {padres_faltantes[:10]}"
            )
        
        print(f"    ✓ Validación de jerarquía completada")
    
    def detectar_eliminados(self):
        """Detecta qué códigos van a ser eliminados"""
        print("\n[6] Detectando códigos eliminados...")
        
        codigos_nuevo = set(self.nuevo['codigo_norm'])
        codigos_actual = set(self.actual['codigo'].astype(str).str.strip().str.upper())
        
        eliminados = codigos_actual - codigos_nuevo
        
        if eliminados:
            self.issues_by_severity['ALTO'].append(
                f"⚠️  {len(eliminados)} códigos serán eliminados: {list(eliminados)[:5]}"
            )
        
        print(f"    ✓ Detección de eliminados completada")
    
    def generar_reporte(self):
        """Genera reporte final"""
        print("\n" + "="*80)
        print("📋 REPORTE FINAL DE VALIDACIÓN")
        print("="*80)
        
        total_issues = sum(len(v) for v in self.issues_by_severity.values())
        
        if self.issues_by_severity['CRÍTICO']:
            print("\n🛑 ISSUES CRÍTICOS (impiden upload):")
            for i, issue in enumerate(self.issues_by_severity['CRÍTICO'], 1):
                print(f"   {i}. {issue}")
        
        if self.issues_by_severity['ALTO']:
            print("\n⚠️  ISSUES ALTOS (revisar antes de upload):")
            for i, issue in enumerate(self.issues_by_severity['ALTO'], 1):
                print(f"   {i}. {issue}")
        
        if self.issues_by_severity['MEDIO']:
            print("\n⚡ ISSUES MEDIO (supervisar):")
            for i, issue in enumerate(self.issues_by_severity['MEDIO'][:3], 1):
                print(f"   {i}. {issue}")
            if len(self.issues_by_severity['MEDIO']) > 3:
                print(f"    ... y {len(self.issues_by_severity['MEDIO']) - 3} más")
        
        print("\n" + "="*80)
        print(f"RESUMEN: {total_issues} issues detectados")
        print(f"  - Críticos: {len(self.issues_by_severity['CRÍTICO'])}")
        print(f"  - Altos: {len(self.issues_by_severity['ALTO'])}")
        print(f"  - Medios: {len(self.issues_by_severity['MEDIO'])}")
        
        if len(self.issues_by_severity['CRÍTICO']) > 0:
            print("\n❌ NO PUEDES HACER UPLOAD - Corrige issues críticos primero")
            return False
        elif len(self.issues_by_severity['ALTO']) > 0:
            print("\n⚠️  PUEDES HACER UPLOAD pero revisa issues altos manualmente")
            return True
        else:
            print("\n✅ VALIDACIÓN EXITOSA - Safe to upload")
            return True
    
    def run(self):
        """Ejecuta validación completa"""
        self.load_files()
        self.validar_codigos()
        self.validar_descripciones()
        self.validar_unidades()
        self.validar_jerarquia()
        self.detectar_eliminados()
        return self.generar_reporte()

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Uso: python validate_catalog.py nueva_data.xlsx supabase_backup.csv")
        sys.exit(1)
    
    validator = CatalogValidator(sys.argv[1], sys.argv[2])
    success = validator.run()
    sys.exit(0 if success else 1)
```

---

### Script 2: Migración Segura (migrate_catalog.py)

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Migrará catálogo con validaciones y rollback
Uso: python migrate_catalog.py --mode=staging|production --dry-run
"""

import pandas as pd
import json
from supabase import create_client
from datetime import datetime
import argparse
import sys

SUPABASE_URL = "https://cdinoxmyukpasihkkkmd.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkaW5veG15dWtwYXNpaGtra21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMjEwNTgsImV4cCI6MjA4OTU5NzA1OH0.giZrcjXwrcKzQSzA9qMDGqMSUOvsvj8TMWToe-1O_hs"

class CatalogMigrator:
    def __init__(self, excel_file: str, mode: str = 'staging', dry_run: bool = True):
        self.excel_file = excel_file
        self.mode = mode
        self.dry_run = dry_run
        self.supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        self.stats = {}
        
        self.table_name = 'staging_catalogo_nueva' if mode == 'staging' else 'catalogo_partidas'
    
    def load_new_catalog(self):
        """Carga catálogo nuevo de Excel"""
        print("[1] Cargando catálogo nuevo...")
        excel_raw = pd.read_excel(self.excel_file, header=None)
        
        self.nuevo = pd.DataFrame({
            'codigo': excel_raw[0].astype(str).str.strip().str.upper(),
            'descripcion': excel_raw[1].astype(str).str.strip(),
            'unidad': excel_raw[2].fillna('').astype(str).str.strip().str.lower()
        }).dropna(subset=['codigo'])
        
        print(f"    ✓ Cargados {len(self.nuevo)} registros")
        return self.nuevo
    
    def generar_jerarquia(self):
        """Genera jerarquía WBS"""
        print("\n[2] Generando jerarquía WBS...")
        
        def parent_id(codigo):
            partes = codigo.split('.')
            return '.'.join(partes[:-1]) if len(partes) > 1 else None
        
        def nivel(codigo):
            return len(codigo.split('.'))
        
        self.nuevo['parent_id'] = self.nuevo['codigo'].apply(parent_id)
        self.nuevo['nivel_jerarquia'] = self.nuevo['codigo'].apply(nivel)
        
        print(f"    ✓ Jerarquía WBS generada")
        return self.nuevo
    
    def crear_tabla_staging(self):
        """Crea tabla staging si no existe"""
        if self.dry_run:
            print("\n[DRY-RUN] Saltando creación de tabla staging")
            return
        
        print("\n[3] Creando tabla staging...")
        try:
            # Crear tabla si no existe (esto normalmente se hace en Supabase UI)
            print("    ➜ Nota: Ejecuta esto en Supabase si no existe:")
            print("""
            CREATE TABLE staging_catalogo_nueva (
                id BIGSERIAL PRIMARY KEY,
                codigo VARCHAR(50) UNIQUE NOT NULL,
                descripcion TEXT,
                unidad VARCHAR(20),
                parent_id VARCHAR(50),
                nivel_jerarquia INTEGER,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                updated_at TIMESTAMPTZ DEFAULT NOW()
            );
            """)
        except Exception as e:
            print(f"    ⚠️  {e}")
    
    def insertar_registros(self):
        """Inserta registros en tabla staging"""
        print(f"\n[4] Insertando {len(self.nuevo)} registros en {self.table_name}...")
        
        if self.dry_run:
            print(f"    [DRY-RUN] Primeros 5 registros que se insertarían:")
            for idx, row in self.nuevo.head().iterrows():
                print(f"    - {row['codigo']}: {row['descripcion'][:50]}")
            return
        
        try:
            # Insertar en lotes (Supabase tiene límite)
            batch_size = 500
            for i in range(0, len(self.nuevo), batch_size):
                batch = self.nuevo.iloc[i:i+batch_size].to_dict('records')
                
                response = self.supabase.table(self.table_name).insert(batch).execute()
                
                print(f"    ✓ Lote {i//batch_size + 1} completado")
                
            self.stats['inserted'] = len(self.nuevo)
        except Exception as e:
            print(f"    ✗ Error: {e}")
            return False
        
        return True
    
    def validar_integridad(self):
        """Valida integridad referencial post-migración"""
        print("\n[5] Validando integridad...")
        
        if self.dry_run:
            print(f"    [DRY-RUN] Ejecutaría validación de integridad")
            return True
        
        try:
            # Verificar que todos los parent_ids existan
            response = self.supabase.table(self.table_name).select("codigo, parent_id").execute()
            registros = response.data
            
            codigos = {r['codigo'] for r in registros}
            
            huerfanos = 0
            for r in registros:
                padre = r['parent_id']
                if padre and padre not in codigos:
                    huerfanos += 1
            
            if huerfanos > 0:
                print(f"    ⚠️  {huerfanos} registros con padres faltantes")
                return False
            
            print(f"    ✓ Integridad validada")
            return True
            
        except Exception as e:
            print(f"    ✗ Error de validación: {e}")
            return False
    
    def generar_reporte(self):
        """Genera reporte final"""
        print("\n" + "="*80)
        print("📊 REPORTE DE MIGRACIÓN")
        print("="*80)
        print(f"Modo: {self.mode}")
        print(f"Tabla: {self.table_name}")
        print(f"Dry-Run: {self.dry_run}")
        print(f"Registros: {self.stats.get('inserted', len(self.nuevo))}")
        print(f"Timestamp: {datetime.now().isoformat()}")
        print("="*80)
    
    def run(self):
        """Ejecuta migración completa"""
        self.load_new_catalog()
        self.generar_jerarquia()
        
        if not self.dry_run:
            self.crear_tabla_staging()
        
        self.insertar_registros()
        
        if not self.dry_run:
            self.validar_integridad()
        
        self.generar_reporte()

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Migradora de Catálogo')
    parser.add_argument('--excel', default='nueva_data.xlsx', help='Archivo Excel a migrar')
    parser.add_argument('--mode', choices=['staging', 'production'], default='staging', help='Modo de migración')
    parser.add_argument('--dry-run', action='store_true', default=True, help='Simular sin hacer cambios')
    parser.add_argument('--no-dry-run', action='store_false', dest='dry_run', help='Ejecutar para real')
    
    args = parser.parse_args()
    
    migrator = CatalogMigrator(args.excel, mode=args.mode, dry_run=args.dry_run)
    migrator.run()
```

---

## ✅ CHECKLIST DETALLADO

### Fase 1: Preparación (1 hora)

- [ ] Hacer backup de Supabase actual
  ```bash
  # En Supabase Dashboard → SQL Editor:
  SELECT * INTO catalogo_partidas_backup FROM catalogo_partidas;
  ```

- [ ] Guardar CSV de respaldo
  ```python
  supabase.table('catalogo_partidas').select("*").execute()
  # Exportar como CSV
  ```

- [ ] Crear tabla staging limpiar
  ```sql
  DROP TABLE IF EXISTS staging_catalogo_nueva;
  CREATE TABLE staging_catalogo_nueva (
      codigo VARCHAR(50) PRIMARY KEY,
      descripcion TEXT,
      unidad VARCHAR(20),
      parent_id VARCHAR(50),
      nivel_jerarquia INTEGER,
      created_at TIMESTAMPTZ DEFAULT NOW()
  );
  ```

### Fase 2: Validación (2 horas)

- [ ] Ejecutar script de validación
  ```bash
  python validate_catalog.py nueva_data.xlsx catalogo_actual.csv
  ```

- [ ] Revisar y documentar todos los issues

- [ ] Para cada issue CRÍTICO:
  - [ ] Abrir en Excel
  - [ ] Corregir manualmente
  - [ ] Guardar y re-validar

- [ ] Para cada issue ALTO:
  - [ ] Documentar en hoja de cambios aprobada

### Fase 3: Test en Staging (2 horas)

- [ ] Ejecutar migración en modo DRY-RUN
  ```bash
  python migrate_catalog.py --mode=staging --dry-run
  ```

- [ ] Revisar qué cambios se harían

- [ ] Ejecutar migración en STAGING (real)
  ```bash
  python migrate_catalog.py --mode=staging --no-dry-run
  ```

- [ ] Testear en frontend:
  - [ ] ¿Carga el grid jerárquico?
  - [ ] ¿Busca los 202 nuevos?
  - [ ] ¿Funcionan los 26 cambios?
  - [ ] ¿Los 4 eliminados están deprecated?

- [ ] Ejecutar auditoría de metrados huérfanos
  ```sql
  SELECT m.*, c.codigo FROM metrados m 
  LEFT JOIN staging_catalogo_nueva c ON m.codigo_partida = c.codigo
  WHERE c.codigo IS NULL;
  ```

### Fase 4: Aprobación (1 hora)

- [ ] Presentar cambios a Ingeniero/PM
- [ ] Obtener aprobación firmada (audit trail)
- [ ] Documentar en CHANGELOG

### Fase 5: Producción (1 hora)

- [ ] Último backup de catalogo_partidas actual
- [ ] Ejecutar migración en PRODUCTION
  ```bash
  python migrate_catalog.py --mode=production --no-dry-run
  ```

- [ ] Ejecutar validación post-migración
  ```sql
  SELECT COUNT(*) as total, COUNT(DISTINCT codigo) as unicos FROM catalogo_partidas;
  ```

- [ ] Notificar a usuarios que hay nuevas partidas

---

## 🔄 PLAN DE ROLLBACK

Si algo sale mal:

```bash
# Paso 1: Detener acceso
-- En Supabase RLS, deshabilitar acceso a catalogo_partidas

# Paso 2: Restaurar backup
DELETE FROM catalogo_partidas;
INSERT INTO catalogo_partidas 
SELECT * FROM catalogo_partidas_backup;

# Paso 3: Validation
SELECT COUNT(*) FROM catalogo_partidas;  -- Debe ser 7592

# Paso 4: Re-enable access
-- En Supabase RLS, habilitar acceso

# Paso 5: Notify
-- Avisar al equipo que se revirtió
```

---

**Fin del Documento Técnico**
