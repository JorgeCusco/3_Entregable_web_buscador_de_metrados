# 📊 Arquitectura Liquidaciones - Tabla Separada

## 🎯 Objetivo Logrado

Los usuarios de Liquidaciones ahora tienen:
- ✅ **Apartado completamente independiente**
- ✅ **Tabla separada en Supabase** (`metrados_liquidaciones`)
- ✅ **Acceso a TODOS los catálogos del sistema** (no registran en ellos, los consultan)
- ✅ **Sin cruce de datos** con metrados generales
- ✅ **Aislamiento total de datos**

---

## 🏗️ Arquitectura Implementada

### 1. **Base de Datos - Tabla Nueva**

**Tabla: `metrados_liquidaciones`**
```sql
Estructura idéntica a 'metrados' pero completamente separada:
- id (UUID) - PK
- fecha, frente, bloque, nivel, cuadrilla
- partida_id (FK → catalogo_partidas)
- codigo_partida, descripcion_partida, unidad
- cantidad, longitud_area, ancho_empalme, altura_gancho
- parcial, nro_veces, total
- autor_usuario (texto - nombre del usuario de Liquidaciones)
- especialidad, proyecto (fijo: 'hospital')
- hvac_item_id, hvac_factor, hvac_item_type
- created_at, updated_at

Índices:
- idx_metrados_liquidaciones_autor
- idx_metrados_liquidaciones_fecha
- idx_metrados_liquidaciones_proyecto
- idx_metrados_liquidaciones_codigo
- idx_metrados_liquidaciones_especialidad
```

**Archivo de migración:**
```
supabase/migrations/0011_create_metrados_liquidaciones.sql
```

---

### 2. **Frontend - Store Separado**

**Archivo: `src/store/useLiquidacionesStore.ts`**

Este store **gestiona EXCLUSIVAMENTE** la tabla `metrados_liquidaciones`:

```typescript
Interface LiquidacionesState {
    metrados: Metrado[]
    
    fetchMetrados(autorUsuario?: string)     // Carga metrados filtrados
    addMetrado(metrado)                      // Inserta en metrados_liquidaciones
    updateMetrado(id, payload)               // Actualiza en metrados_liquidaciones
    deleteMetrado(id)                        // Elimina de metrados_liquidaciones
    clearAll()                               // Limpia estado local
}
```

**Características:**
- No toca la tabla `metrados` general
- Filtra por `autor_usuario` automáticamente
- Resolución de `partida_id` desde catálogo
- Persistencia local con Zustand

---

### 3. **Frontend - Componente Liquidaciones**

**Archivo: `src/components/LiquidacionesView.tsx`**

```typescript
// Usa 2 stores simultáneamente:

// Store Liquidaciones (ESCRIBE/LEE aquí)
const { metrados: metradosLiquidaciones, addMetrado: addLiquidacion, 
         updateMetrado: updateLiquidacion, deleteMetrado: deleteLiquidacion,
         fetchMetrados: fetchLiquidaciones } = useLiquidacionesStore();

// Store Principal (SOLO LEE catálogos, NO ESCRIBE)
const { fetchCatalogoMaestro, fetchCustomPartidas } = useMetradosStore();

// Contexto (Personal, Autenticación)
const { fetchPersonal } = usePersonalStore();
const { user, logout } = useAuthStore();
```

**Flujo de Datos:**
```
Usuario abre LiquidacionesView
    ↓
fetchLiquidaciones() carga desde metrados_liquidaciones
    ↓
fetchCatalogoMaestro() carga catálogo disponible (PARA CONSULTA)
    ↓
Usuario rellena formulario usando catálogo disponible
    ↓
handleGuardar() → addLiquidacion() 
    ↓
INSERTA EN metrados_liquidaciones (NO en metrados)
    ↓
Metrado guardado con autor_usuario = user.nombre_completo
```

---

### 4. **Aislamiento de Datos**

#### A. Nivel de Tablas
```
tabla 'metrados'             ← Metrados generales del proyecto
tabla 'metrados_liquidaciones' ← SOLO liquidaciones
```

#### B. Nivel de Componentes
```
        USUARIO GENERAL
        ↓
    useMetradosStore
    ↓ (metrados)
MetradosTable → Tabla 'metrados'

        USUARIO LIQUIDACIONES
        ↓
    LiquidacionesView
    ├→ useLiquidacionesStore (metrados)
    │  ↓
    │  Tabla 'metrados_liquidaciones'
    │
    └→ useMetradosStore (SOLO catálogos)
       ↓
       Tabla 'catalogo_partidas' (CONSULTA)
```

#### C. Nivel de Datos
```javascript
// En LiquidacionesView:
const metradosLiquidaciones = metrados.filter(m => m.autor_usuario === user.nombre_completo);
// Aunque en realidad fetchLiquidaciones(user.nombre_completo) ya filtra en Supabase
```

---

### 5. **Acceso a Información Compartida**

| Recurso | Acceso | Tabla | Uso |
|---------|--------|-------|-----|
| Catálogo Partidas | ✅ Lectura | `catalogo_partidas` | Seleccionar partidas |
| Personal | ✅ Lectura | `personal` | Seleccionar cuadrillas |
| Proyectos | ✅ Lectura | `proyectos` | Contexto solo |
| Sus Metrados | ✅ Lectura/Escritura | `metrados_liquidaciones` | Registrar propios |
| Metrados Otros | ❌ Bloqueado | `metrados` | No ve otros |

---

### 6. **Flujo de Guardado**

```typescript
handleGuardar() {
    const nuevo = actions.procesarRegistro();
    // {codigo, descripcion, cantidad, longitud, etc.}
    
    const nuevoConMetadata = {
        ...nuevo,
        proyecto: 'hospital',                    // Fijo
        autor_usuario: user.nombre_completo      // Auto-asignado
    };
    
    const result = await addLiquidacion(nuevoConMetadata);
    // Esto INSERTA EN metrados_liquidaciones
}
```

**Base de datos:**
```sql
INSERT INTO metrados_liquidaciones (
    fecha, frente, bloque, nivel, cuadrilla,
    codigo_partida, descripcion_partida, unidad,
    cantidad, longitud_area, parcial, total,
    autor_usuario, proyecto, created_at
) VALUES (...)
```

---

## 🔐 Seguridad

### Frontend
- ✅ LiquidacionesView aislado en componente dedicado
- ✅ No puede acceder a tabla `metrados`
- ✅ Filtrado automático por `autor_usuario`
- ✅ No puede ver metrados de otros usuarios

### Backend (Supabase)
**RECOMENDACIÓN:** Implementar Row-Level Security (RLS)
```sql
-- Ejemplo:
CREATE POLICY "users_see_own_metrados"
  ON metrados_liquidaciones
  FOR SELECT
  USING (autor_usuario = current_user_email());

CREATE POLICY "users_insert_own_metrados"
  ON metrados_liquidaciones
  FOR INSERT
  WITH CHECK (autor_usuario = current_user_email());
```

---

## 📱 Interfaz Usuario

```
┌─────────────────────────────────────────┐
│ Módulo Liquidaciones                    │
│ Juan Pérez - Liquidaciones              │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│ ⚡ Módulo Independiente de Liquidaciones │
│ Registras en tabla privada              │
│ Acceso a todos catálogos del sistema    │
└─────────────────────────────────────────┘

┌──────────────────┬──────────────────────┐
│  FORMULARIO      │  MIS REGISTROS       │
│  (Hospital)      │  (metrados_liq...)   │
│                  │                      │
│  [Partida]       │  Mis 5 registros     │
│  [Cantidad]      │  - Registro 1        │
│  [Longitud]      │  - Registro 2        │
│  [Guardar]       │  - Registro 3        │
│                  │                      │
└──────────────────┴──────────────────────┘
```

---

## 🚀 Próximos Pasos

### 1. **Aplicar Migración SQL**
```bash
# Ejecutar en Supabase
supabase migration up
```

### 2. **RLS en Supabase** (Seguridad)
```sql
-- Validar o crear políticas
ALTER TABLE metrados_liquidaciones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_own" ON metrados_liquidaciones
  FOR SELECT USING (autor_usuario = current_setting('app.current_user'));

CREATE POLICY "insert_own" ON metrados_liquidaciones
  FOR INSERT WITH CHECK (autor_usuario = current_setting('app.current_user'));
```

### 3. **Testing**
```bash
# Compilar
npm run build

# Iniciar dev
npm run dev

# Probar login como Liquidaciones
# DNI: 70662781, Contraseña: 1111
```

### 4. **Reportes/Dashboards** (Opcional)
- Añadir vista de estadísticas de liquidaciones
- Exportar datos a CSV/Excel
- Auditoría de cambios

---

## 📊 Diferencias vs. Modelos Anteriores

| Aspecto | Anterior | Nuevo |
|---------|----------|-------|
| Tabla | `metrados` única | `metrados` + `metrados_liquidaciones` |
| Aislamiento | Por componente (filtrado) | Por tabla (seguro) |
| Store | `useMetradosStore` único | `useMetradosStore` + `useLiquidacionesStore` |
| Catálogos | Uso completo | Consulta (no edición) |
| Escalabilidad | Limitada | Escalable (nuevos roles) |
| Seguridad | Media | Alta (con RLS) |

---

## 🎓 Conclusión

La nueva arquitectura proporciona:
- ✅ Segregación de datos a nivel de tabla (más segura)
- ✅ Escalabilidad para nuevos roles/departamentos
- ✅ Independencia total de datos
- ✅ Acceso completo a recursos compartidos
- ✅ Facilidad de auditoria y compliance

Liquidaciones es ahora un sistema completamente independiente que utiliza el catálogo principal pero mantiene sus propios registros en una tabla dedicada.
