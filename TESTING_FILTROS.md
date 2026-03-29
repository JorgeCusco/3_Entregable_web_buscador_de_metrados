# 🧪 GUÍA DE TESTING - Filtros Reparados

**Objetivo**: Verificar que los filtros funcionan correctamente en LOCAL y SERVIDOR  
**Tiempo Estimado**: 10-15 minutos  
**Requisitos**: Servidor local + Servidor Supabase

---

## ⚡ Quick Start - 5 Minutos

### 1. Activar Debug Mode

Editar: `src/components/MetradosTable.tsx` linea ~210

```typescript
const [debugMode] = React.useState(false);  // ← Cambiar a true
```

### 2. Compilar
```bash
npm run build
npm run dev
```

### 3. Abrir Consola (F12)
- Chrome/Firefox: F12 → Console
- Con debugMode=true verás:
```
🔍 DEBUG: applyAllFilters
📊 Input: 1250 metrados
🎯 Filters: { proyecto: 'hospital', ... }
   📋 Proyecto (hospital): 1250 → 1100
   🏗️  Especialidad (ESTRUCTURAS): 1100 → 650
   ✅ Resultado Final: 650 metrados
```

### 4. Comparar Local vs Servidor
| LOCAL | SERVIDOR | ✅/❌ |
|-------|----------|-------|
| 650   | 450      | ❌ diff |

Si hay diferencia → debug mode muestra dónde se pierden datos

---

## 🔬 Testing Detallado

### TEST 1: Filtro de Proyecto SOLO

**Qué probar**: Proyecto filtra correctamente sin especialidad

**Pasos**:
1. Limpiar todos los filtros → "TODAS" especialidad, "TODOS" autor
2. Seleccionar Proyecto: "hospital"
3. Ver en consola:
   ```
   📋 Proyecto (hospital): XXXX → YYYY
   ```
4. Contar registros en tabla: ¿coincide con YYYY?
5. Repetir en servidor → ¿mismo número?

**Esperado**:
- ✅ Registros LOCAL = Registros SERVIDOR
- ✅ Sin registros sin proyecto (null)

---

### TEST 2: Especialidad cuando especialidad=" TODAS"

**Qué probar**: "TODAS" debe mostrar TODO incluyendo ambiguos

**Pasos**:
1. Fixar Proyecto = "hospital"
2. Fixar Especialidad = "TODAS" (default)
3. Ver en consola para cada cambio:
   ```
   🏗️  Especialidad (TODAS): 1100 → 1100  ✅ (no filtra)
   ```
4. Cambiar a especialidad específica: "ESTRUCTURAS"
   ```
   🏗️  Especialidad (ESTRUCTURAS): 1100 → 650
   ⚠️  Removidos: 450
   ```

**Esperado**:
- ✅ "TODAS" = sin filtro (1100)
- ✅ "ESTRUCTURAS" = solo esa especialidad (650)
- ✅ Diferencia = registros sin especialidad clara

**Si falla** (450 vs 250):
→ Hay 200 registros de especialidad ambigua que no se rescatan
→ Necesitar fallback por código (ver Solución #3)

---

### TEST 3: Filtro de Autor

**Qué probar**: Autor filtra correctamente

**Pasos**:
1. Fixar Proyecto = "hospital", Especialidad = "TODAS"
2. Seleccionar Autor = "JUAN PEREZ"
3. Ver en consola:
   ```
   👤 Autor (JUAN PEREZ): 1100 → 230
   ```
4. Tabla debería mostrar ~230 registros
5. Repetir en servidor → ¿mismo número?

**Esperado**:
- ✅ Autor filtra por campo normalizado
- ✅ LOCAL = SERVIDOR

---

### TEST 4: Filtro de Fecha

**Qué probar**: Rango de fechas funciona

**Pasos**:
1. Fixar Proyecto = "hospital", Especialidad = "TODAS", Autor = "TODOS"
2. Seleccionar Fecha Desde: 2024-01-01
3. Seleccionar Fecha Hasta: 2024-03-31
4. Ver en consola:
   ```
   📅 Fecha (2024-01-01 a 2024-03-31): 1100 → 350
   ```
5. Tabla debería mostrar ~350 registros
6. Repetir en servidor → ¿mismo número?

**Esperado**:
- ✅ Fecha filtra rango correctamente
- ✅ LOCAL = SERVIDOR

---

### TEST 5: Combinación de Todos los Filtros

**Qué probar**: Todos los filtros juntos

**Pasos**:
1. Proyecto = "hospital"
2. Especialidad = "ESTRUCTURAS"
3. Autor = "JUAN PEREZ"
4. Fecha = 2024-01-01 a 2024-03-31

5. Ver en consola:
```
🔍 DEBUG: applyAllFilters
📊 Input: 1250 metrados
   📋 Proyecto (hospital): 1250 → 1100
   🏗️  Especialidad (ESTRUCTURAS): 1100 → 650
   👤 Autor (JUAN PEREZ): 650 → 180
   📅 Fecha (2024-01-01 a 2024-03-31): 180 → 45

✅ Resultado Final: 45 metrados
```

6. Tabla debería mostrar ~45 registros
7. **Repetir EXACTAMENTE en servidor**
8. ¿Mismo número de registros?

**Esperado**:
- ✅ LOCAL = 45 registros
- ✅ SERVIDOR = 45 registros (CRÍTICO)
- ❌ Si SERVIDOR < LOCAL → hay problema en base de datos o fallback

---

## 📊 Registro de Resultados

Completar esta tabla después de cada test:

| Test | LOCAL | SERVIDOR | ✅/❌ | Diferencia | Notas |
|------|-------|----------|-------|-----------|-------|
| 1. Proyecto | 1100 | 1100 | ✅ | - | OK |
| 2. Especialidad TODAS | 1100 | 999 | ❌ | -101 | Huérfanos no rescatados |
| 3. Especialidad ESTR | 650 | 499 | ❌ | -151 | FK rotos? |
| 4. Autor JUAN | 230 | 225 | ✅ | -5 | Diferencia aceptable |
| 5. Fecha rango | 350 | 340 | ✅ | -10 | OK |
| 6. Combinado | 45 | 30 | ❌ | -15 | PROBLEMA EN ESPECIALIDAD |

---

## 🔧 Diagnóstico por Síntoma

### Síntoma: LOCAL > SERVIDOR en Especialidad Específica

**Ejemplo:**
```
LOCAL:  1100 → 650 (especialidad ESTRUCTURAS)
SERVER: 1100 → 500 (falta 150 registros)
```

**Causas probables:**
1. ❌ FK rotos en servidor (partida_id no existe)
2. ❌ Registros sin especialidad directa (null en campo)
3. ❌ Fallback por código no implementado

**Solución:**
1. Activar debug en servidor
2. Ver si aparecen logs "Removidos: 150"
3. Consultar: `SELECT * FROM metrados WHERE especialidad IS NULL AND proyecto='hospital'`

---

### Síntoma: LOCAL = SERVIDOR pero contador "Removidos" alto

**Ejemplo:**
```
LOCAL:
   🏗️  Especialidad (ESTRUCTURAS): 1100 → 650
   ⚠️  Removidos: 450  ← MUCHOS REGISTROS OCULTOS
```

**Esto es NORMAL si:**
- Hay muchos registros genéricos sin especialidad
- Hay FK rotos que se filtran

**Solución:**
- Si es aceptable: mantener así
- Si necesita rescatar: implementar fallback por código

---

### Síntoma: Autor filtra diferentes en LOCAL vs SERVIDOR

**Ejemplo:**
```
LOCAL:  JUAN PEREZ → 230
SERVER: JUAN PEREZ → 180
```

**Causas:**
1. ❌ Datos inconsistentes en base (corrupción)
2. ❌ Replicación incompleta
3. ✅ Variación normal si datos estaban en transición

**Debug:**
```sql
-- En Supabase Console
SELECT COUNT(*) FROM metrados WHERE autor_usuario ILIKE '%JUAN%';
SELECT DISTINCT autor_usuario FROM metrados WHERE autor_usuario ILIKE '%JUAN%' LIMIT 5;
```

---

## ✅ Checklist de Validación

- [ ] npm run build = Exitoso (sin errores)
- [ ] Debug mode activo muestra logs en F12
- [ ] TEST 1 (Proyecto): LOCAL = SERVIDOR
- [ ] TEST 2a (TODAS): Muestra ambiguos
- [ ] TEST 2b (Específica): Filtra correctamente
- [ ] TEST 3 (Autor): LOCAL = SERVIDOR
- [ ] TEST 4 (Fecha): LOCAL = SERVIDOR
- [ ] TEST 5 (Combinado): LOCAL = SERVIDOR
- [ ] Diferencias explicables (descartar corrupción)
- [ ] Documentar en TESTING_RESULTS.md

---

## 🚀 Próximos Pasos

**Si todos los tests pasan (LOCAL = SERVIDOR)**:
1. ✅ Desactivar debug mode: `const [debugMode] = React.useState(false);`
2. ✅ Hacer build final: `npm run build`
3. ✅ Deployar a producción

**Si hay diferencias (LOCAL ≠ SERVIDOR)**:
1. 🔍 Ver logs de debug diferencia exacta
2. 🔍 Ejecutar queries SQL para verificar datos
3. 🔍 Identificar si es FK roto, datos null, o corrupción
4. ✅ Implementar fallback por código si mejora resultados

---

## 📞 Soporte

Si encuentras problemas:
1. **Tomar screenshot de consola** (F12 → Console)
2. **Anotar exactamente qué filtros usaste**
3. **Anotar números que viste en LOCAL**
4. **Anotar números en SERVIDOR**
5. **Ejecutar query SQL** para verificar BD

Esto permitirá diagnosticar si es problema de código o de datos.
