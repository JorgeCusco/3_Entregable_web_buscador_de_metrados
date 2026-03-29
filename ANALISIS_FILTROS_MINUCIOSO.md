# 🔍 ANÁLISIS MINUCIOSO: Filtros Superpuestos y Problemas Identificados

## 🚨 PROBLEMAS CRÍTICOS ENCONTRADOS

### PROBLEMA 1️⃣: DOBLE FILTRADO POR PROYECTO (CRÍTICO)

**Ubicación 1** - MetradosTable.tsx línea 159:
```typescript
const metradosDelProyecto = useMemo(() => {
    const projActual = proyecto.toLowerCase();
    return metrados.filter(m => {
        if (!m.proyecto) return true;  // ⚠️ INCLUYE registros sin proyecto
        return m.proyecto.toLowerCase() === projActual;
    });
}, [metrados, proyecto]);
```

**Ubicación 2** - filteringLogic.ts línea 235 (dentro de applyAllFilters):
```typescript
// 1️⃣ PRIMERO: Filtro de proyecto (generalmente reduce más)
if (filters.proyecto) {
    result = result.filter(m => {
        if (!m.proyecto) return true;  // ⚠️ VUELVE A INCLUIR
        return m.proyecto.toLowerCase() === filters.proyecto!.toLowerCase();
    });
}
```

**CONSECUENCIA**:
- ❌ El filtrado de proyecto ocurre DOS VECES
- ❌ Registros sin proyecto se incluyen AUNQUE la lógica dice que no
- ❌ Potencial inconsistencia en resultados

---

### PROBLEMA 2️⃣: FILTRO ESPECIALIDAD CON RETORNO FALSE (CRÍTICO)

**Ubicación** - filteringLogic.ts línea 145:
```typescript
export const isMetradoOfSpecialtyImproved = (
    metrado: Metrado,
    specialtyId: string,
    catalogoActivo: Partida[] = []
): boolean => {
    // NIVEL 1: Campo directo
    if (metrado.especialidad && isValidSpecialty(metrado.especialidad)) {
        return ...
    }
    
    // NIVEL 2: En catálogo
    if (linkedPartida?.especialidad && isValidSpecialty(linkedPartida.especialidad)) {
        return ...
    }
    
    // NIVEL 3: Fallback comentado
    // ... código comentado ...
    
    // ⚠️ SI NADA COINCIDE: RETORNA FALSE
    return false;
};
```

**CONSECUENCIA DEL RETORNO FALSE**:
- ❌ Si un metrado NO tiene especialidad grabada
- ❌ Y la partida NO existe en catálogo (FK roto)
- ❌ Y el fallback está comentado
- ❌ **SE OCULTA COMPLETAMENTE** aunque sea válido

**EJEMPLOS DE CASOS OCULTOS**:
```javascript
// Caso 1: Metrado huérfano (partida eliminada)
{
    codigo_partida: "OE.1.1",
    especialidad: null,
    partida_id: "uuid-NO-EXISTE"  // ← FK roto
    // → FILTRO RETORNA FALSE → SE OCULTA ❌
}

// Caso 2: Partida personal sin especialidad
{
    codigo_partida: "CUSTOM.001",
    especialidad: null,
    partida_id: null,
    custom_partida_id: "uuid-CUSTOM"  // ← Existe en BD local pero no en servidor
    // → FILTRO RETORNA FALSE → SE OCULTA (LOCAL OK, SERVIDOR NO) ❌
}

// Caso 3: Valor genérico
{
    especialidad: "GENERAL"  // ← isValidSpecialty() retorna false
    // → FILTRO RETORNA FALSE → SE OCULTA ❌
}
```

---

### PROBLEMA 3️⃣: TREE PRUNING EN getHierarchicalRows (ACCIONADOR)

**Ubicación** - MetradosTable.tsx línea 44-77:

```typescript
const getHierarchicalRows = (activeMetrados: Metrado[], partidasCatalogo: Partida[]) => {
    // 1. Solo marca como "activas" las partidas que TIENEN metrados
    const activeNodeIds = new Set(activeMetrados.map(getMetradoTargetId));
    
    // 2. Luego marca ancestros como activos (rescate de rama)
    // 3. Pero SOLO si tiene descendientes con metrados
    
    // ⚠️ RESULTADO: Si una partida no tiene metrados, no aparece
    // ⚠️ AUNQUE sea válida en el catálogo
};
```

**ESCENARIO PROBLEMÁTICO**:
```
Catálogo:
├── OE (Estructuras)
│   ├── OE.1 (Excavación)
│   │   └── OE.1.1 (Excavación manual)  ← Sin metrados
│   └── OE.2 (Cimentación)  ← SIN NINGÚN METRADO ABAJO
└── OE.1.1 tiene metrado en filtro especialidad X

Resultado: 
- OE.1.1 aparece ✓
- OE.2 NO aparece ✗ (aunque sea válida)
- "Árbol incompleto"
```

---

### PROBLEMA 4️⃣: INCONSISTENCIA LOCAL vs SERVIDOR

**Root causes probable**:

1. **Catálogo incompleto en servidor**:
   ```
   Local: 500+ partidas en catalogo_partidas
   Servidor: 200+ partidas (algunas no sincronizadas)
   
   → Resultado: Metrados sin partida en servidor quedan huérfanos
   ```

2. **ForeignKey rotos en servidor**:
   ```
   Local: Todas las partidas_personalizadas linked correctamente
   Servidor: Algunas custom_partida_id NO existen
   
   → Resultado: isMetradoOfSpecialtyImproved retorna FALSE
   ```

3. **Datos de especialidad inconsistentes**:
   ```
   Local: especialidad = "ESTRUCTURAS"
   Servidor: especialidad = "ESTRUCTURA" (sin S)
   
   → Resultado: Comparación exacta falla en servidor
   ```

4. **Proyecto por defecto diferente**:
   ```
   // Línea 159 en MetradosTable.tsx
   if (!m.proyecto) return true;  // ← FALSA LÓGICA
   
   Local: registros sin proyecto = 10 (mostrados)
   Servidor: registros sin proyecto = 0 (ignorados correctamente)
   
   → Inconsistencia silenciosa
   ```

---

## 🎯 ANÁLISIS DE FLUJO DE DATOS

```
metrados (Supabase)
    ↓
metradosDelProyecto (filtro proyecto #1) ← PROBLEMA 1
    ↓
applyAllFilters()
    ├─ Filtro proyecto (DUPLICADO) ← PROBLEMA 1
    ├─ Filtro especialidad (retorna FALSE si no coincide) ← PROBLEMA 2
    ├─ Filtro autor
    └─ Filtro fecha
    ↓
filteredMetrados (RESULTADO INCORRECTO)
    ↓
getHierarchicalRows()
    ├─ Tree pruning (solo partidas con metrados) ← PROBLEMA 3
    └─ Rescate de rama (bottom-up)
    ↓
rows (VISUALIZACIÓN FINAL - PUEDE ESTAR INCOMPLETA) ← SÍNTOMA
```

**El problema que ves**:
- Partidas válidas NO aparecen sin razón aparente
- Funciona en local pero no en servidor
- Los filtros se comportan inconsistentemente

---

## ✅ SOLUCIONES PROPUESTAS

### SOLUCIÓN 1️⃣: Eliminar Doble Filtrado por Proyecto

**En MetradosTable.tsx**, elimina `metradosDelProyecto`:

```typescript
// ❌ ELIMINAR
const metradosDelProyecto = useMemo(() => {
    const projActual = proyecto.toLowerCase();
    return metrados.filter(m => {
        if (!m.proyecto) return true;
        return m.proyecto.toLowerCase() === projActual;
    });
}, [metrados, proyecto]);

// ✅ USAR DIRECTAMENTE
const filteredMetrados = useMemo(() => {
    return applyAllFilters(metrados, {  // ← Usa metrados, NO metradosDelProyecto
        proyecto,
        especialidad: especialidadSeleccionada,
        autor: filterAuthor,
        dateFrom: filterDateFrom,
        dateTo: filterDateTo,
    }, catalogoActivo);
}, [metrados, especialidadSeleccionada, filterAuthor, filterDateFrom, filterDateTo, proyecto, catalogoActivo]);

// ✅ ACTUALIZA availableAuthors (usa metrados, NO metradosDelProyecto)
const availableAuthors = useMemo(() => {
    return getAvailableAuthorsImproved(metrados, especialidadSeleccionada, catalogoActivo);
}, [metrados, especialidadSeleccionada, catalogoActivo]);
```

**Cambios en applyAllFilters**:
```typescript
// Hacer proyecto COMPLETAMENTE OBLIGATORIO (sin "if (!m.proyecto) return true")
if (filters.proyecto) {
    result = result.filter(m => {
        if (!m.proyecto) return false;  // ← Excluye explícitamente
        return m.proyecto.toLowerCase() === filters.proyecto!.toLowerCase();
    });
}
```

---

### SOLUCIÓN 2️⃣: Especialidad - Cambiar Retorno FALSE a Inclusión

**En filteringLogic.ts**, reemplazar el retorno final:

```typescript
// ❌ ACTUAL
return false;

// ✅ NUEVO: Si no se puede determinar, INCLUIR (es más permisivo)
// Lógica: "Si no sabemos la especialidad, no excluyas"
return true;  // Mostrar registros ambiguos en "TODAS"
```

**PERO** solo si `specialtyId === 'TODAS'`:

```typescript
export const isMetradoOfSpecialtyImproved = (
    metrado: Metrado,
    specialtyId: string,
    catalogoActivo: Partida[] = []
): boolean => {
    const targetSpecialty = normalizeSpecialty(specialtyId);
    
    if (targetSpecialty === 'TODAS') {
        return true;  // ← Mostrar TODOS, incluso los ambiguos
    }

    // ... LEVEL 1, 2, 3 ...
    
    // Si no coincide exactamente y estamos filtrando por especialidad específica:
    return false;  // ← Excluir registros ambiguos
};
```

---

### SOLUCIÓN 3️⃣: Descomentar Fallback de Código (IMPORTANTE)

**En filteringLogic.ts línea 140**, descomentar:

```typescript
// NIVEL 3: Fallback mediante deducción de código
import { getEspecialidadPorCodigo } from '../constants/especialidades';

const deducedSpec = getEspecialidadPorCodigo(metrado.codigo_partida);
if (deducedSpec && isValidSpecialty(deducedSpec)) {
    const deducedNormalized = normalizeSpecialty(deducedSpec);
    return deducedNormalized === targetSpecialty;
}

// Si aún NO coincide
return false;
```

**¿Por qué?**: El código `OE.1.1` muchas veces indica la especialidad automáticamente. Descomentar esto "rescata" metrados huérfanos.

---

### SOLUCIÓN 4️⃣: Logging para Debuggear Local vs Servidor

**Agregar a applyAllFilters**:

```typescript
export const applyAllFilters = (
    metrados: Metrado[],
    filters: {
        proyecto?: string;
        especialidad?: string;
        autor?: string;
        dateFrom?: string;
        dateTo?: string;
        date?: string;
    },
    catalogoActivo: Partida[] = [],
    debug: boolean = false
): Metrado[] => {
    let result = metrados;
    const startCount = metrados.length;
    
    if (debug) {
        console.group('🔍 DEBUG: applyAllFilters');
        console.log(`📊 Input: ${startCount} metrados`);
        console.log(`🎯 Filters:`, filters);
        console.log(`📚 Catálogo: ${catalogoActivo.length} partidas`);
    }

    // FILTRO 1: Proyecto
    if (filters.proyecto) {
        const before = result.length;
        result = result.filter(m => {
            if (!m.proyecto) return false;
            return m.proyecto.toLowerCase() === filters.proyecto!.toLowerCase();
        });
        if (debug) console.log(`   Proyecto: ${before} → ${result.length}`);
    }

    // FILTRO 2: Especialidad
    if (filters.especialidad && filters.especialidad !== 'TODAS') {
        const before = result.length;
        result = filterMetradosBySpecialty(result, filters.especialidad, catalogoActivo);
        if (debug) console.log(`   Especialidad "${filters.especialidad}": ${before} → ${result.length}`);
        
        // Debug: Mostrar qué se filtró
        if (debug && before !== result.length) {
            const filtered = result;
            const removed = metrados.filter(m => !filtered.includes(m));
            console.log(`   ⚠️  Removidos por especialidad:`, removed.slice(0, 3));
        }
    }

    // FILTRO 3: Autor
    if (filters.autor) {
        const before = result.length;
        result = filterMetradosByAuthor(result, filters.autor);
        if (debug) console.log(`   Autor "${filters.autor}": ${before} → ${result.length}`);
    }

    // FILTRO 4: Fecha
    if (filters.dateFrom || filters.dateTo) {
        const before = result.length;
        result = filterMetradosByDateRange(result, filters.dateFrom, filters.dateTo);
        if (debug) console.log(`   Fecha: ${before} → ${result.length}`);
    }

    if (debug) {
        console.log(`✅ Output: ${result.length} metrados`);
        console.log(`📉 Removidos: ${startCount - result.length}`);
        console.groupEnd();
    }

    return result;
};
```

**Uso en MetradosTable.tsx**:

```typescript
const filteredMetrados = useMemo(() => {
    const isLocal = window.location.hostname === 'localhost';
    return applyAllFilters(metrados, {
        proyecto,
        especialidad: especialidadSeleccionada,
        autor: filterAuthor,
        dateFrom: filterDateFrom,
        dateTo: filterDateTo,
    }, catalogoActivo, isLocal);  // ← Debug solo en local
}, [metrados, especialidadSeleccionada, filterAuthor, filterDateFrom, filterDateTo, proyecto, catalogoActivo]);
```

---

### SOLUCIÓN 5️⃣: Reparar Lógica de Registros sin Proyecto

**En applyAllFilters**:

```typescript
// ❌ FALSA LÓGICA
if (filters.proyecto) {
    result = result.filter(m => {
        if (!m.proyecto) return true;  // INCLUYE sin proyecto
        return m.proyecto.toLowerCase() === ...;
    });
}

// ✅ CORRECTA
if (filters.proyecto) {
    result = result.filter(m => {
        if (!m.proyecto) return false;  // EXCLUYE sin proyecto
        return m.proyecto.toLowerCase() === filters.proyecto!.toLowerCase();
    });
}
```

---

## 📋 CHECKLIST DE VERIFICACIÓN

Después de aplicar las soluciones, verificar:

### En SERVER LOCAL:
1. [ ] Especialidad "TODAS" muestra TODOS los metrados (incluso sin especialidad)
2. [ ] Especialidad "ESTRUCTURAS" muestra solo ESTRUCTURAS
3. [ ] Filtro por autor funciona correctamente
4. [ ] Console.log muestra el flow de filtrado (debug enabled)
5. [ ] Registros huérfanos (sin partida) aparecen correctamente

### En SERVIDOR GENERAL:
1. [ ] Specialty "TODAS" muestra TODOS (sin ocultaciones)
2. [ ] Números son iguales o mayores al server local
3. [ ] No hay desaparición misteriosa de metrados
4. [ ] Los logs en console muestran por qué se removieron

### En AMBOS:
1. [ ] `npm run build` compila sin errores
2. [ ] No hay metrados duplicados
3. [ ] El árbol de partidas está completo
4. [ ] Exportación a Excel funciona

---

## 🎓 RESUMEN DE RAÍZ DEL PROBLEMA

**El problema que ves**:
```
Algunas partidas desaparecen sin razón, especialmente en servidor general
```

**La causa raíz**:

1. **Doble filtrado por proyecto** → inconsistencia silenciosa
2. **Especialidad con retorno FALSE** → oculta registros válidos
3. **FK rotos en servidor** → metrados huérfanos se excluyen
4. **Fallback comentado** → no hay rescate por código
5. **Log ausente** → no puedes ver por qué se filtran

**La solución**:

- Eliminar doble filtrado (1 línea)
- Cambiar lógica de especialidad (1 línea)
- Descomentar fallback (3 líneas)
- Agregar logging (15 líneas)
- Total: ~20 líneas de cambio

---

**Siguiente paso**: ¿Deseas que aplique estas 5 soluciones directamente en los archivos?
