# 📋 REPORTE INTEGRAL: ANÁLISIS COMPARATIVO Y CASUÍSTICAS
## Sistema de Gestión de Metrados Belempampa v3 - Migración de Datos

**Fecha Generación:** 26 de Marzo 2026  
**Versión:** 1.0  
**Autores:** Sistema Automatizado de Análisis

---

## 🎯 EXECUTIVE SUMMARY

Tu software es un **ecosistema de gestión presupuestaria e integración de metrados en ingeniería civil** que ha evolucionar desde herramientas desktop (Excel + VBA/Python) hacia una plataforma web moderna. La comparación de datos revela que hay **202 partidas nuevas, 4 eliminadas y 26 modificadas** entre la versión actual en Supabase (7,592 registros) y la versión nueva en el Excel (5,793 registros).

---

## 📊 PARTE 1: ANÁLISIS DEL SOFTWARE

### 1.1 ¿Qué ES tu Software?

Tu aplicación es una **plataforma web collaborativa de gestión de metrados (mediciones en obra)** para proyectos de ingeniería civil. Específicamente:

| Aspecto | Descripción |
|---------|-------------|
| **Propósito Principal** | Eliminar entrada manual propensa a errores y centralizar el análisis de costos unitarios (APU) |
| **Usuarios Finales** | Ingenieros, supervisores y capataces en obra que registran mediciones diarias |
| **Flujo Core** | Excel → Backend Python → Supabase → Frontend React → Visualización Jerárquica |
| **Tecnología** | React 18 + TypeScript + Vite + TailwindCSS (Frontend) + Supabase (Backend/DB) |
| **Dato Central** | Catálogo de Partidas (códigos WBS) + Registros de Metrados + ABU (Análisis de Precios Unitarios) |

### 1.2 Evolución Arquitectónica

```
ETAPA 1: Era Excel (2020-2024)
├── V1-V4: Automatización con win32com + VBA
└── V5: Buscador Booleano Tokenizado en Excel

ETAPA 2: Plataforma Web (2024-2026)
├── V1-V2: SPA Simple con Glassmorphism
├── V3: Data Grid Jerárquico WBS (ACTUAL)
└── Roadmap: Contextual Breadcrumbs + Sincronización Bidireccional
```

### 1.3 Arquitectura de Datos (Tres Pilares)

```
┌─────────────────────────────────────────────────────┐
│  CATÁLOGO MASTER (catalogo_partidas)               │
│  • 7,592 registros actuales en Supabase            │
│  • Código WBS (ej: OE.2.3.1.01)                    │
│  • Descripción, Unidad, Jerarquía                  │
│  • APU (Análisis de Precios Unitarios)             │
└─────────────────────────────────────────────────────┘
            │
            ├──→ ┌──────────────────────────┐
            │    │ METRADOS (Transacciones) │
            │    │ • Fecha, Frente, Bloque  │
            │    │ • Dimensiones (L, A, H)  │
            │    │ • Cuadrilla asignada     │
            │    └──────────────────────────┘
            │
            └──→ ┌──────────────────────────┐
                 │ PERSONAL (Obreros)       │
                 │ • DNI, Nombre, Oficio    │
                 │ • Especialidad, Cuadrilla│
                 └──────────────────────────┘
```

### 1.4 Flujo de Procesamiento de Datos (ETL)

```
Excel Source          →  Python Processor      →  Supabase DB      →  React Frontend
(nueva_data.xlsx)        (procesar_apus.py)       (PostgreSQL)        (Data Grid)
     ↓                          ↓                      ↓                    ↓
- Códigos WBS            - Validación               - Tablas            - Búsqueda
- Descripciones          - Normalización            - Relaciones        - Filtros
- Unidades              - Limpieza de caracteres   - Índices           - Visualización
- Jerarquía             - Inferencia de padres      - Integridad         jerárquica
```

---

## 📈 PARTE 2: RESULTADOS DE LA COMPARACIÓN

### 2.1 Métricas Globales

| Métrica | Cantidad | % |
|---------|----------|---|
| **Registros en Supabase (Actual)** | 7,592 | 100% |
| **Registros en Excel (Nueva)** | 5,793 | 76.27% |
| **Códigos Únicos Supabase** | 4,919 | - |
| **Códigos Únicos Excel** | 5,117 | - |
| **SIN CAMBIOS** | 4,889 | 99.39%* |
| **NUEVOS Registros** | 202 | 4.11%** |
| **ELIMINADOS Registros** | 4 | 0.08%** |
| **MODIFICADOS Registros** | 26 | 0.53%** |

*Sobre códigos comunes  
**Sobre códigos únicos en Excel

### 2.2 Análisis Detallado de Cambios

#### 🆕 NUEVOS REGISTROS (202 partidas)

**Distribución por Familia de Códigos:**
```
OE.4.2.1.x  (Agua Fría)          → ~15 partidas nuevas
OE.4.2.2.x  (Tuberías Cobre)     → ~12 partidas nuevas
OE.4.2.4.3.x (Instalaciones Elec) → ~56 partidas CRÍTICAS
OE.4.2.5.x  (Variedades)         → ~25 partidas nuevas
OE.4.10.2.x (Servicios Obra)     → ~10 partidas nuevas
[Otros]                           → ~84 partidas
```

**Ejemplos de Nuevas Partidas:**
```
✓ OE.4.10.2.5  → "ABASTECIMIENTO DE AGUA A OBRA"
✓ OE.4.10.2.6  → "REUBICACION DE POZO EXTRACION DE AGUA"
✓ OE.4.2.4.3.1 → "PRENSAESTOPA PLÁSTICO CONDUIT EMT de 16 mm"
✓ OE.4.2.5.22  → "ENCHUFE SIMPLE 16 A 250 V CORRIENTE ALTERNA"
```

**Implicación:** Expansión significativa en la cobertura de **instalaciones mecánicas y eléctricas**. Tu presupuesto ahora es más granular y cubre casos específicos antes agrupados.

---

#### 🗑️ REGISTROS ELIMINADOS (4 partidas)

```
✗ OE.4.6.5.3.5 → "TRAMPA DE SOLIDOS DE CONCRETO ARMADO"
✗ OE.4.6.5.3.6 → "TRAMPA DE GRASAS DE CONCRETO ARMADO"
✗ OE.4.6.5.3.7 → "POZA DE ENFRIAMIENTO DE CONCRETO ARMADO"
✗ OE.4.6.5.3.8 → "CÁMARA DE CONTACTO DE CLORO"
```

**Análisis:** Todas las eliminadas están en la rama `OE.4.6.5.3` (Sistemas de Tratamiento de Aguas). Posibles causas:
- Consolidación en partidas padre (OE.4.6.5.3.2)
- Cambio de especificaciones técnicas
- No se usan en este proyecto específico

**Riesgo:** Si hay registros de metrados históricos usando estos códigos, causarán errores de integridad referencial.

---

#### ✏️ REGISTROS MODIFICADOS (26 partidas)

**Tipo de Cambios:**

| Tipo | Cantidad | Ejemplos |
|------|----------|----------|
| **Cambios Menores (Typos/Acentos)** | ~8 | "COLOCACIÓN" → "COLOCACION", "RIEGO" → "RIEGO" |
| **Redescripción Coherente** | ~12 | "TRAMPA DE GRASAS" → "TRAMPA DE GRASAS DE CONCRETO ARMADO" |
| **Cambios Semánticos Graves** | ~6 | descriptions completamente distintos (ver más abajo) |

**Cambios GRAVES Identificados:**

```
1. OE.4.2.3.2.6
   ANTES: "MONTANTE CON TUBERÍA PVC CLASE 10 CON ROSCA DE 1 1/2""
   AHORA: "PRUEBA HIDRAULICA EN REDES DE DISTRIBUCION"
   ⚠️  AMENAZA: Cambio de significado semántico = riesgo de cotización incorrecta

2. OE.4.2.3.2.4
   ANTES: "RED DE ALIMENTACION TUBERIA PVC CLASE 10 CON ROSCA DE 2""
   AHORA: "HABILITACION TUBO DE COBRE TIPO L 1 1/4" (CON CAMA DE ARENA)"
   ⚠️  AMENAZA: Material completamente diferente = cambio de APU crítico

3. OE.5.2.3.54.21
   ANTES: "PRENSAESTOPAS METÁLICO CONDUIT EMT de 25 mm"
   AHORA: "PRENSAESTOPA METÁLICO CONDUIT EMT de 25 mm"
   ✓ CAMBIO MENOR: Solo acento O → O (sin tilde)
```

**Síntesis de Riesgos:**
- **8 cambios menores** (Bajo riesgo) = Normalizaciones
- **12 cambios coherentes** (Medio riesgo) = Ampliaciones de descripción
- **6 cambios graves** (ALTO RIESGO) = Cambios de material/especificación

---

### 2.3 Discrepancia de Volumen (1,799 registros faltantes)

El Excel tiene **5,793 registros** pero Supabase tiene **7,592 registros**. Diferencia: **1,799 (23.7%)**.

**Posibles causas:**

1. **Registros históricos en Supabase** que no están en el Excel nuevo
2. **Duplicados/variaciones** del mismo código (ej: OE.4.2.1 con diferentes versiones)
3. **Datos de proyectos anteriores** aún no depurados de la base
4. **Ciclos de desarrollo** — Excel es más reciente, Supabase tiene data acumulada

**Recomendación:** Ejecutar script de auditoría para identificar dónde están esos 1,799 registros adicionales.

---

## ⚠️ PARTE 3: CASUÍSTICAS AL SUBIR PARTIDAS (Escenarios de Riesgo)

### ESCENARIO 1: Actualización Directa (Sobrescribir Actual)

```
Acción: DELETE ALL + INSERT FROM nueva_data.xlsx
Resultado: ✗ CATASTRÓFICO

Problema:
├─ Los 4 códigos eliminados quedan huérfanos
├─ Registros de metrados existentes apuntan a códigos ya no existentes
├─ Integridad referencial de Supabase se rompe
├─ Errores 404 en el frontend al buscar partidas fantasma
└─ Pérdida de auditoría histórica

Registros Afectados:
└─ OE.4.6.5.3.5 a OE.4.6.5.3.8 (4 registros)
```

**Solución:** Nunca hacer DELETE ALL. En su lugar, usar UPSERT (actualizar o insertar).

---

### ESCENARIO 2: Actualización Selectiva (Merge)

```
Acción: 
1. Insertar 202 partidas nuevas (OK ✓)
2. Actualizar 26 partidas modificadas (CUIDADO ⚠️)
3. Dejar 4 partidas eliminadas como deprecated (MEJOR)

Riesgo ALTO:
├─ Los 6 cambios semánticos graves pueden afectar costos
├─ Metrados históricos aún referenciados pero con APU diferente
└─ Auditoría de costos quedará inconsistente
```

**Solución:** 
- Flag deprecated para eliminadas (no borrar)
- Versionado de descripción para modificadas
- Validación de APU antes de hacer cambios

---

### ESCENARIO 3: Activación de Nuevas Partidas Sin APU

```
Los 202 nuevos registros llegan sin:
├─ Análisis de Precios Unitarios completado
├─ Recursos desglosados (Mano de Obra, Materiales, Equipos)
├─ Rendimientos diarios definidos
└─ Justificación de costos

Problema:
├─ Usuario selecciona OE.4.2.4.3.1 en forma pero APU es NULL
├─ Presupuesto no se calcula correctamente
├─ Sistema asume factor de 1 para campos vacíos (failsafe lógico)
└─ Resultados incorrectos sin aviso

Registros Afectados:
└─ ~56 partidas nuevas de instalaciones eléctricas (OE.4.2.4.3.x)
```

**Solución:** Validar que todas las partidas no-título tengan APU completo antes de subir.

---

### ESCENARIO 4: Códigos Duplicados o Malformados

```
Caso: Excel contiene código "OE.4.2.1" pero en Supabase existe como:
├─ OE.4.2.1 (sin sufijo)
├─ OE.4.2.1.0
└─ OE.4.2.1a (variante)

Problema:
├─ Algoritmo de jerarquía WBS no reconoce relación padre-hijo
├─ Búsqueda booleana tokenizada falla si hay espacios inconsistentes
├─ Rollup de totales cuenta registros duplicados
└─ Gráficos de presupuesto muestran números inflados

Registros en Riesgo:
└─ Cualquiera de los 202 nuevos con códigos mal formateados
```

**Solución:** Script de normalización:
```python
# Pseudocódigo
codigo = codigo.strip().upper()  # Eliminar espacios y mayúsculas
codigo = re.sub(r'[^A-Z0-9.]', '', codigo)  # Solo letras, números, puntos
```

---

### ESCENARIO 5: Desincronización de Unidades

```
Excel especifica unidades inconsistentes:
├─ "m3" vs "M3" vs "metros cúbicos" vs "m³"
├─ "kg" vs "KG" vs "kilo"
└─ Vacío (NULL) para partidas padre

Impacto:
├─ Búsqueda falla si usuario busca "kg" pero tabla tiene "KG"
├─ Conversiones automáticas de APU no funcionan
├─ Reportes de cantidad total por unidad están fragmentados
└─ Acero especial requiere formato "kg" para activar motor de diámetros

Registros Críticos:
└─ Todas las partidas de acero (deben tener unidad = "kg")
```

**Solución:** Script de normalización de unidades (pre-upload):
```python
UNIDADES_VALIDAS = {
    "m2": ["m2", "m²"], 
    "m3": ["m3", "m³"],
    "kg": ["kg", "kilo"],
    "hh": ["hh", "hora hombre"],
    "": ["", "null", "n/a"]  # Para títulos
}
```

---

### ESCENARIO 6: Pérdida de Jerarquía WBS

```
Excel contiene:
├─ OE.1 (Nivel 1 - Título)
├─ OE.1.2 (Nivel 2 - Subtítulo)
└─ OE.1.2.3 (Nivel 3 - Partida)

Pero al importar:
├─ OE.1.2.3 existe ✓
├─ OE.1.2 NO existe ✗
└─ OE.1 NO existe ✗

Consecuencia:
├─ Data grid jerárquico colapsa (no puede mostrar árbol)
├─ Búsqueda BooleanTokenized falla en contexto padre
├─ Presupuesto no agrupa correctamente en niveles
└─ Usuario no ve el "camino de navegación"

Registros Afectados:
└─ 202 nuevos + sus padres intermedios (¿existen todos?)
```

**Solución:** Generar automáticamente todos los padres antes de insertar:
```python
def generar_jerarquia_completa(codigo):
    """OE.4.2.4.3.1 → gira [OE, OE.4, OE.4.2, OE.4.2.4, OE.4.2.4.3, OE.4.2.4.3.1]"""
    partes = codigo.split('.')
    jerarquia = []
    for i in range(1, len(partes) + 1):
        jerarquia.append('.'.join(partes[:i]))
    return jerarquia
```

---

### ESCENARIO 7: Metrados Históricos Huérfanos

```
Tu base de datos ACTUAL tiene registros de metrados:
├─ Fecha: 2026-02-15
├─ Código Partida: OE.4.6.5.3.6 ← SERÁ ELIMINADO
├─ Cantidad: 12.5 m²
└─ Cuadrilla: C-02

Si eliminas OE.4.6.5.3.6, este metrado queda:
├─ Sin referencia válida (Foreign Key error)
├─ No calcula costo (APU no existe)
├─ Aparece como "ghost record" en reportes
└─ Auditoría completa queda inconsistente

Registros CRÍTICOS en Riesgo:
└─ OE.4.6.5.3.x → Buscar si hay metrados registrados
```

**Solución:** 
1. Auditar qué metrados usan códigos que van a desaparecer
2. Opción A: Cambiar esos metrados a código padre (OE.4.6.5.3)
3. Opción B: Deprecate el código pero no lo borres (flag is_deleted)

---

## 🛡️ PARTE 4: PROBLEMAS POTENCIALES EN EL SOFTWARE

### P1: Integridad Referencial (Foreign Key Constraints)

**Problema:** Si Supabase no tiene FK constraints bien definidas, puedes tener:
```
Metrado → apunta a → OE.4.6.5.3.6
Supabase borra OE.4.6.5.3.6
Metrado queda huérfano, sin error visible
```

**Solución:**
```sql
-- Verificar constraints activos
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'metrados' AND constraint_type = 'FOREIGN KEY';

-- Si no existen, crearlos:
ALTER TABLE metrados 
ADD CONSTRAINT fk_metrados_partida 
FOREIGN KEY (codigo_partida) 
REFERENCES catalogo_partidas(codigo) 
ON DELETE RESTRICT;  -- Impide borrar partidas con metrados
```

---

### P2: Búsqueda Booleana Tokenizada vs. Cambios de Descripción

**Problema:** Tu búsqueda divide en tokens y busca intersección:
```
Usuario busca: "TRAMPA GRASAS"
Tokens: [TRAMPA, GRASAS]

ANTES (Supabase):
├─ OE.4.6.5.3.6 = "TRAMPA DE GRASAS"
└─ ✓ Match (contiene TRAMPA + GRASAS)

DESPUÉS (Con cambios):
├─ OE.4.6.5.3.6 = "TRAMPA DE GRASAS DE CONCRETO ARMADO"
└─ ✓ Match (pero ahora agregó info extra)

PELIGRO: Si alguien renombra mal:
├─ OE.4.6.5.3.6 = "SISTEMA DE DRENAJE TIPO A"
└─ ✗ NO match (el usuario no la encontrará)
```

**Solución:** Versionar descripciones y mantener historial.

---

### P3: Actualización de APU Sin Versionado

**Problema:** Los 26 registros modificados pueden tener nuevos APU:

```
OE.4.6.5.3.2: "TRAMPA DE GRASAS" → "TRAMPA DE GRASAS DE CONCRETO ARMADO"
├─ APU viejo: Precio/m = $500
├─ APU nuevo: Precio/m = $750 (más especificado)
└─ Peligro: Metrados históricos usan APU viejo, nuevos usan APU nuevo
        → Inconsistencia en reportes históricos
```

**Solución:** Tabla de versionado:
```
catalogo_partidas_history
├─ codigo
├─ version
├─ descripcion
├─ apu
└─ fecha_cambio
```

---

### P4: Búsqueda de Padre Incompleta

**Problema:** Tu algoritmo corta el último segmento para encontrar padre:
```
OE.4.2.4.3.1 → padre = OE.4.2.4.3

PERO: ¿Existen TODOS los intermedios en Catálogo?
├─ OE (¿existe?)
├─ OE.4 (¿existe?)
├─ OE.4.2 (¿existe?)
├─ OE.4.2.4 (¿existe?)
└─ OE.4.2.4.3 (¿existe?) ← Si NO, la jerarquía se rompe
```

De los 202 nuevos, si algún padre intermedio no existe en Supabase:
- Grid no muestra árbol correctamente
- Rollup de costos incompleto
- Reportes fragmentados

**Solución:** Generar todos los códigos padre antes de insertar.

---

### P5: Desfase de Datos Entre Excel y BD

**Problema:** Tu flujo es:
```
Excel (nueva_data.xlsx) 
  ↓ (copia manual cada X tiempo)
    Python Script 
      ↓ (procesa, valida)
        Supabase (PostgreSQL)
          ↓ (pull a React)
            Frontend (stale data)
```

Si alguien:
1. Modifica Excel a las 10:00
2. Subes a las 11:00
3. Pero usuario trabaja en frontend desde las 10:30
   → Está usando datos OLD durante 30 min

**Solución:** Sincronización automática o alertas de "{data is stale}".

---

## 🚀 PARTE 5: RECOMENDACIONES Y ESTRATEGIA

### 5.1 Checklist Pre-Upload (Validación)

```
[ ] Ejecutar script de normalización:
    ├─ Códigos: strip, uppercase, sin espacios especiales
    ├─ Descripciones: encoding UTF-8, sin caracteres raros
    ├─ Unidades: validar contra lista blanca
    └─ Jerarquía: generar todos los padres intermedios

[ ] Auditar cambios antes de aplicar:
    ├─ 202 nuevos → verificar APU completo
    ├─ 26 modificados → revisar cambios semánticos
    └─ 4 eliminados → buscar metrados huérfanos

[ ] Validar integridad referencial:
    ├─ ¿Existen todos los parent_id?
    ├─ ¿Tienen nivel_jerarquia correcto?
    └─ ¿Jerarquía array es consistente?

[ ] Backup de Supabase actual (antes de cambios)

[ ] Test en ambiente de staging (no production)
```

---

### 5.2 Script de Normalización (Template Python)

```python
import pandas as pd
import re
from datetime import datetime

def normalizar_catalogo(archivo_excel):
    """Normaliza catalogo antes de subir a Supabase"""
    
    df = pd.read_excel(archivo_excel, header=None)
    catalogo = pd.DataFrame({
        'codigo': df[0],
        'descripcion': df[1],
        'unidad': df[2]
    }).dropna(subset=['codigo'])
    
    # 1. Normalizar códigos
    catalogo['codigo'] = (
        catalogo['codigo']
        .str.strip()
        .str.upper()
        .str.replace(r'[^A-Z0-9.]', '', regex=True)
    )
    
    # 2. Normalizar descripciones
    catalogo['descripcion'] = (
        catalogo['descripcion']
        .str.strip()
        .str.encode('utf-8')
        .str.decode('utf-8')
    )
    
    # 3. Normalizar unidades
    UNIDADES_VALIDAS = {
        'm2': ['m2', 'm²', 'M2'],
        'm3': ['m3', 'm³', 'M3'],
        'kg': ['kg', 'KG'],
        'hh': ['hh', 'HH'],
        'hm': ['hm', 'HM'],
        '': ['', 'null', 'nan']
    }
    
    def normalizar_unidad(valor):
        if pd.isna(valor) or valor == '':
            return ''
        valor = str(valor).strip().lower()
        for unidad_canonical, variantes in UNIDADES_VALIDAS.items():
            if valor in variantes:
                return unidad_canonical
        return valor
    
    catalogo['unidad'] = catalogo['unidad'].apply(normalizar_unidad)
    
    # 4. Generar jerarquía
    def generar_padre_e_nivel(codigo):
        partes = codigo.split('.')
        nivel = len(partes)
        padre = '.'.join(partes[:-1]) if nivel > 1 else None
        return padre, nivel
    
    catalogo[['parent_id', 'nivel_jerarquia']] = (
        catalogo['codigo'].apply(
            lambda x: pd.Series(generar_padre_e_nivel(x))
        )
    )
    
    # 5. Reporte de cambios
    print(f"✓ {len(catalogo)} registros normalizados")
    print(f"  - Códigos únicos: {catalogo['codigo'].nunique()}")
    print(f"  - Unidades únicas: {catalogo['unidad'].nunique()}")
    print(f"  - Niveles: {catalogo['nivel_jerarquia'].min()} a {catalogo['nivel_jerarquia'].max()}")
    
    # 6. Detectar problemas
    duplicados = catalogo[catalogo.duplicated(subset=['codigo'])]
    if len(duplicados) > 0:
        print(f"⚠️  {len(duplicados)} códigos duplicados encontrados")
        print(duplicados)
    
    return catalogo

# Uso
catalogo = normalizar_catalogo('nueva_data.xlsx')
catalogo.to_csv('catalogo_normalizado.csv', index=False)
```

---

### 5.3 Script de Auditoría (¿Qué se va a perder?)

```python
def auditar_cambios(catalogo_viejo, catalogo_nuevo):
    """Identifica qué código se va a perder y qué metrados serán afectados"""
    
    codigos_viejo = set(catalogo_viejo['codigo'])
    codigos_nuevo = set(catalogo_nuevo['codigo'])
    
    eliminados = codigos_viejo - codigos_nuevo
    nuevos = codigos_nuevo - codigos_viejo
    
    print("\n📊 AUDITORÍA DE CAMBIOS")
    print(f"   Eliminados: {eliminados}")
    print(f"   Nuevos: {nuevos}")
    
    # Buscar metrados que usan códigos eliminados
    from supabase import create_client
    supabase = create_client(URL, KEY)
    
    for codigo_eliminado in eliminados:
        metrados_afectados = supabase.table('metrados').select('*').eq(
            'codigo_partida', codigo_eliminado
        ).execute()
        
        if len(metrados_afectados.data) > 0:
            print(f"\n⚠️  {codigo_eliminado}: {len(metrados_afectados.data)} metrados afectados")
            for metrado in metrados_afectados.data[:3]:
                print(f"   - Fecha: {metrado['fecha']}, Cantidad: {metrado['cantidad']}")

auditar_cambios(catalogo_actual, catalogo_nuevo)
```

---

### 5.4 Estrategia de Merge (No Sobrescribir)

```sql
-- En lugar de DELETE + INSERT, usar UPSERT:

INSERT INTO catalogo_partidas (codigo, descripcion, unidad, ...)
SELECT codigo, descripcion, unidad, ...
FROM staging_catalogo_nueva
ON CONFLICT (codigo) 
DO UPDATE SET
  descripcion = EXCLUDED.descripcion,
  unidad = EXCLUDED.unidad,
  modified_at = NOW(),
  version = version + 1
WHERE is_deprecated = FALSE;

-- Para los 4 eliminados, marcar como deprecated:
UPDATE catalogo_partidas 
SET is_deprecated = TRUE, deprecated_at = NOW()
WHERE codigo IN (
  'OE.4.6.5.3.5',
  'OE.4.6.5.3.6',
  'OE.4.6.5.3.7',
  'OE.4.6.5.3.8'
);
```

---

### 5.5 Mejoras al Software (Roadmap Inmediato)

| Mejora | Prioridad | Esfuerzo | Impacto |
|--------|-----------|----------|--------|
| **Versionado de Descripciones** | CRÍTICA | 2 días | Evita pérdida de auditoría |
| **API de Validación Pre-Upload** | CRÍTICA | 1 día | Early detection de errores |
| **Foreign Key Constraints** | ALTA | 1 día | Data integrity |
| **Función de Rollback** | ALTA | 2 días | Recovery ante cambios malos |
| **Sincronización Automática Excel-Supabase** | MEDIA | 3 días | Reduce desfase |
| **UI de Cambios Pendientes** | MEDIA | 1 día | Transparencia |
| **Auditoría Trail de Partidas** | MEDIA | 2 días | Compliance |

---

## 📋 PARTE 6: RESUMEN EJECUTIVO DE ACCIONES INMEDIATAS

### ✅ Si quieres CONSERVADOR (Bajo Riesgo):

```
1. NO borres Supabase
2. Importa los 202 nuevos códigos como STAGING
3. Valida APU completo para cada uno
4. Marca los 4 eliminados como "deprecated" (no borres)
5. Revisa manualmente los 26 cambios semánticos graves
6. Una vez validado, ejecuta UPSERT (no DELETE)
7. Corre auditoría de integridad referencial
```

**Tiempo:** 3-4 horas  
**Riesgo:** Mínimo  
**Resultado:** Actualización limpia sin pérdida de datos

---

### ⚡ Si quieres AGRESIVO (Alto Riesgo):

```
1. Backup de Supabase (manual export a CSV)
2. DELETE * FROM catalogo_partidas
3. INSERT FROM nueva_data.xlsx
4. Esperar a que todo cuelgue
5. Rollback desde backup
6. Llorar
```

**Tiempo:** 30 minutos (si no falla)  
**Riesgo:** MÁXIMO  
**Resultado:** 💥 Catastrófico si hay Foreign Keys

---

### 🏆 Recomendación Final (Goldilocks):

```
1. Ejecutar script de normalización a nuevo Excel
2. Generar lista de "cambios pendientes" en UI
3. Validar cada uno con PMs/Ingenieros
4. Crear tabla staging_catalogo_nueva en Supabase
5. Importar ahí primero
6. Tests de integridad en staging
7. Una vez OK, hacer UPSERT a tabla real
8. Ejecutar auditoría post-migración
9. Documentar en CHANGELOG
```

**Tiempo:** 8 horas  
**Riesgo:** Bajo  
**Resultado:** ✓ Cambios validados, auditable, reversible

---

## 📞 CONCLUSIÓN

Tu software es **robusto en concepto** (arquitectura en capas, WBS jerárquico, búsqueda avanzada) pero necesita **robustez operacional** (versionado, auditoría, validación pre-upload, rollback).

Los **202 nuevos registros + 26 modificaciones** representes expansión legítima del catálogo, pero requieren validación cuidadosa para no romper:
- Metrados históricos (integridad referencial)
- APU/Costos (cálculos presupuestarios)
- Búsqueda BooleanTokenized (consistencia semántica)
- Reportes y auditoría (trazabilidad)

**Recomendación:** Implementar el flujo "Goldilocks" arriba. Te toma 8 horas pero duermes tranquilo.

---

**Documento Generado Automáticamente**  
**Sistema: Análisis Integral de Migración de Datos**  
**Fecha:** 26 de Marzo 2026 - 10:30 AM
