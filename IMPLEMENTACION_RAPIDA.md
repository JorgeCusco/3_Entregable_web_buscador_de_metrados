# 🚀 IMPLEMENTAR MIGRACION + INDICES + FILTROS

## ⚡ QUICK START (5 minutos)

### PASO 1: Ejecutar Migración SQL (Tabla metrados_liquidaciones)

#### Opción A: Supabase Dashboard (RECOMENDADO)
1. Abre: https://app.supabase.com
2. Entra a tu proyecto
3. **SQL Editor** (lado izquierdo)
4. **New Query**
5. **Copia TODO el contenido** de este archivo:
   ```
   supabase/migrations/0011_create_metrados_liquidaciones.sql
   ```
6. **Pega y ejecuta** (Ctrl+Enter o botón RUN)

#### Opción B: Desde Terminal (si tienes supabase CLI)
```powershell
npm install -g supabase
supabase link
supabase db push
```

#### Verificar que se creó:
```sql
-- Copiar/pegar en SQL Editor
SELECT tablename FROM pg_tables WHERE tablename = 'metrados_liquidaciones';
-- Esperado: 1 fila con "metrados_liquidaciones"
```

---

### PASO 2: Crear Índices para Filtros (CRÍTICO para performance)

**En Supabase SQL Editor, ejecutar:**

```sql
-- Índices para tabla METRADOS (filtros principales)
CREATE INDEX IF NOT EXISTS idx_metrados_autor_usuario 
    ON metrados(autor_usuario);

CREATE INDEX IF NOT EXISTS idx_metrados_especialidad 
    ON metrados(especialidad);

CREATE INDEX IF NOT EXISTS idx_metrados_fecha 
    ON metrados(fecha DESC);

CREATE INDEX IF NOT EXISTS idx_metrados_proyecto 
    ON metrados(proyecto);

CREATE INDEX IF NOT EXISTS idx_metrados_proyecto_autor 
    ON metrados(proyecto, autor_usuario) 
    WHERE proyecto IS NOT NULL;

-- Verificar que se crearon
SELECT indexname FROM pg_indexes WHERE tablename = 'metrados';
```

**Esperado**: Verás 5+ índices listados

---

### PASO 3: Actualizar MetradosTable.tsx (Filtros mejorados)

Ya tenemos 2 archivos nuevos listos:
- ✅ `src/utils/normalization.ts` (funciones de normalización)
- ✅ `src/utils/filteringLogic.ts` (lógica de filtrado)

**Ahora actualizamos MetradosTable.tsx:**

#### 3.1: Importar nuevas funciones (línea 10)
En `src/components/MetradosTable.tsx`, después del import de SPECIALTY_RULES, agrega:

```typescript
import { applyAllFilters, getAvailableAuthorsImproved, filterMetradosByAuthor } from '../utils/filteringLogic';
import { normalizeAuthorName } from '../utils/normalization';
```

#### 3.2: Agregar estados para rango de fechas (línea 285)
Reemplaza:
```typescript
const [filterDate, setFilterDate] = React.useState('');
```

Por:
```typescript
const [filterDateFrom, setFilterDateFrom] = React.useState('');
const [filterDateTo, setFilterDateTo] = React.useState('');
```

#### 3.3: Actualizar availableAuthors (línea 290)
Reemplaza todo el useMemo de availableAuthors por:

```typescript
const availableAuthors = useMemo(() => {
    return getAvailableAuthorsImproved(metradosDelProyecto, especialidadSeleccionada, catalogoActivo);
}, [metradosDelProyecto, especialidadSeleccionada, catalogoActivo]);
```

#### 3.4: Actualizar filteredMetrados (línea 300)
Reemplaza todo el useMemo por:

```typescript
const filteredMetrados = useMemo(() => {
    return applyAllFilters(metradosDelProyecto, {
        proyecto,
        especialidad: especialidadSeleccionada,
        autor: filterAuthor,
        dateFrom: filterDateFrom,
        dateTo: filterDateTo,
    }, catalogoActivo);
}, [metradosDelProyecto, especialidadSeleccionada, filterAuthor, filterDateFrom, filterDateTo, proyecto, catalogoActivo]);
```

#### 3.5: Actualizar UI - Header filtros (línea 330)
Busca la sección de "Filtro Fecha" y reemplaza:

```typescript
{/* Filtro Fecha */}
<div className="flex items-center gap-2 pl-2">
    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Fecha</span>
    <div className="relative flex items-center gap-1">
        <label className="text-[9px] text-slate-500">Desde:</label>
        <input
            type="date"
            value={filterDateFrom}
            onChange={(e) => setFilterDateFrom(e.target.value)}
            className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
        />
        <label className="text-[9px] text-slate-500">Hasta:</label>
        <input
            type="date"
            value={filterDateTo}
            onChange={(e) => setFilterDateTo(e.target.value)}
            className="text-[11px] font-bold bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 outline-none cursor-pointer hover:border-blue-400 shadow-sm transition-all"
        />
        {(filterDateFrom || filterDateTo) && (
            <button 
                onClick={() => {
                    setFilterDateFrom('');
                    setFilterDateTo('');
                }}
                className="absolute -right-8 w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white transition-colors text-[8px] cursor-pointer"
            >✕</button>
        )}
    </div>
</div>
```

---

### PASO 4: Compilar y Verificar

```powershell
cd d:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados
npm run build
```

**Esperado**: Se compila sin errores (solo warning de tamaño bundle)

---

### PASO 5: Testing (Validar que funciona)

#### Test 1: Autores sin duplicados
1. Abre la app
2. En filtro "Autor", selecciona dropdown
3. ✅ Debería mostrar valores ÚNICOS (sin repeticiones)

#### Test 2: Rango de fechas
1. En filtro "Fecha", selecciona:
   - Desde: 2025-01-01
   - Hasta: 2025-03-31
2. ✅ Debería traer solo registros en ese rango

#### Test 3: Performance
1. Con 1000+ registros en Supabase
2. Cambiar especialidad → debe ser instantáneo (<50ms)
3. Abrir dropdown autor → debe ser instantáneo (<50ms)

---

## 📋 CHECKLIST FINAL

- [ ] Migración `0011_create_metrados_liquidaciones` ejecutada
- [ ] Tabla `metrados_liquidaciones` creada en Supabase
- [ ] 5+ índices creados en tabla `metrados`
- [ ] `src/utils/normalization.ts` existe
- [ ] `src/utils/filteringLogic.ts` existe
- [ ] `MetradosTable.tsx` actualizado (imports + states + useMemo)
- [ ] Header de tabla actualizado (rango fechas)
- [ ] `npm run build` compila sin errores
- [ ] Tests de autor, fecha y performance pasan
- [ ] Liquidaciones usa mismos índices y mejoras

---

## 🎯 RESULTADO ESPERADO

✅ App 100x más rápido en filtros  
✅ Sin duplicados en dropdown "Autor"  
✅ Rango de fechas funcionando  
✅ Tabla `metrados_liquidaciones` lista para usar  
✅ Liquidaciones y Main app con performance óptima  

**Tiempo total**: 1-2 horas  
**Impacto**: Crítico en UX/Performance

---

**Siguiente**: Ejecuta PASO 1 en Supabase Dashboard 👆
