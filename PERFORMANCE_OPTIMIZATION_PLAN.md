# 🚀 Plan de Optimización de Performance: Metrados V3 (12k+ Registros)

Has alcanzado un punto crítico (12,685 registros) donde el manejo de datos en memoria y el renderizado de React empiezan a degradarse. Este plan detalla los pasos para hacer la aplicación **ultrarrápida** de nuevo.

---

## 🏗️ 1. Renderizado Virtual (Prioridad Máxima)
**Problema:** Actualmente, si el filtro muestra 2,000 filas, el navegador intenta crear 2,000 elementos DOM. Esto causa el "lag" al hacer scroll o filtrar.
**Solución:** Implementar **Virtualización de Listas** (usando `@tanstack/react-virtual`).
- Solo se renderizan las **20-30 filas visibles** en pantalla.
- Al hacer scroll, se reciclan los elementos DOM, manteniendo el consumo de memoria plano.
- **Impacto:** Eliminación total del lag de scroll.

## 🧵 2. Cálculos Pesados en Web Workers
**Problema:** La función `getHierarchicalRows` y los filtros recorren 12k registros en el hilo principal de JS, lo que "congela" la UI por milisegundos.
**Solución:** Mover la lógica de filtrado y jerarquías a un **Web Worker**.
- El hilo principal solo se encarga de la UI.
- Los cálculos se hacen en un hilo separado.
- Usar **Debouncing** en los inputs de búsqueda (no filtrar hasta que el usuario deje de escribir por 300ms).

## 📊 3. Optimización de Estructura de Datos
**Problema:** Muchas búsquedas usan `.find()` o `.filter()` dentro de bucles, lo que da una complejidad `O(n^2)`.
**Solución:** 
- Crear **Mapas de Referencia (Hash Maps)** en el store:
  - `partidasMap`: Acceso instantáneo por código.
  - `metradosByPartida`: Agrupación pre-calculada.
- **Memoización Agresiva:** Asegurar que `useMemo` no se recalcule a menos que la data base cambie.

## 🌐 4. Estrategia de Carga Incremental (Lazy Loading)
**Problema:** Cargar 12k registros de Supabase en una sola petición `SELECT *` aumenta el "First Contentful Paint".
**Solución:**
- **Paginación en Backend:** Cargar inicialmente los últimos 3 meses o los metrados del usuario actual.
- **Scroll Infinito / Load More:** Traer registros adicionales solo cuando el usuario los necesite.
- **Caching:** Almacenar los resultados en `localStorage` o `IndexedDB` para acceso instantáneo al recargar la página.

## 🛠️ 5. Refactorización de Componentes
**Problema:** Los componentes de fila son pesados y tienen muchos condicionales.
**Solución:**
- **React.memo:** Los componentes de fila no deben re-renderizarse si sus props no han cambiado.
- **CSS Avanzado:** Usar `content-visibility: auto` en secciones largas para ayudar al motor de renderizado del navegador.

---

## 📅 Hoja de Roadmap (Ruta de Trabajo)

### Fase 1: Estabilización (Inmediato)
- Implementar **Virtualización** en `MetradosTable.tsx`.
- Agregar **Debouncing** a todos los filtros de texto.

### Fase 2: Inteligencia (Corto Plazo)
- Refactorizar `filteringLogic.ts` para usar `Map()` en lugar de `.find()`.
- Implementar la carga por "Chunks" (pedazos de 2,000 registros).

### Fase 3: Arquitectura (Mediano Plazo)
- Implementar Paginación desde Supabase basada en el "Clasificador por Meses".

---

> [!TIP]
> **Recomendación Directa:** El cambio más impactante hoy será la **Virtualización**. Sin ella, ningún cambio de código salvará al navegador de procesar miles de nodos DOM al mismo tiempo.
