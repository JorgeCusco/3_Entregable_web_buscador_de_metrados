# Documentación Completa: Smart Metrados Web App

Bienvenido a la documentación arquitectónica de **Smart Metrados**, la evolución web de la plantilla automatizada de Excel. Este documento explica absolutamente todo sobre cómo está construida la aplicación, desde la capa de datos hasta la interfaz visual.

---

## 1. Arquitectura Base y Tecnologías (El Stack)

La aplicación está construida sobre las tecnologías más modernas y rápidas del ecosistema Frontend de 2026:

*   **Vite:** El empaquetador ultrarrápido (reemplaza a Webpack/CRA). Permite que el entorno de desarrollo local cargue al instante y compila el proyecto de manera óptima para producción.
*   **React (Single Page Application):** Toda la interfaz se recarga dinámicamente sin necesidad de refrescar el navegador. 
*   **TypeScript:** (Los archivos `.tsx` y `.ts`). Es JavaScript pero con superpoderes de **Tipado Estricto**. Esto significa que si un componente espera recibir un "número", TypeScript no dejará compilar si por error le pasamos "texto", haciendo la app nivel *Enterprise* a prueba de fallos.
*   **TailwindCSS v4:** Framework de CSS basado en utilidades. En lugar de escribir interminables archivos mágicos de CSS, inyectamos estilos directamente en el HTML (ej: `bg-blue-500 rounded-xl`). Esto incluye el acabado "Glassmorphism" (vidrio translúcido) usado en las tarjetas.
*   **Lucide-React:** La biblioteca de Iconos (minimalistas y profesionales).

---

## 2. Estructura de Carpetas

Todo el código fuente vive dentro de la carpeta `/src`. La estructura está diseñada para escalar ("Escalable") en caso de que la aplicación crezca a cientos de archivos:

```text
src/
├── types/                <-- Define la forma exacta de los datos.
│   └── index.ts
├── data/                 <-- Bases de datos falsas o conexiones al Backend.
│   └── mockDB.ts
├── hooks/                <-- Lógica reactiva y matemáticas (El cerebro).
│   └── useMetradosForm.ts
├── components/           <-- Piezas de la interfaz gráfica.
│   ├── ui/               <-- Componentes atómicos/reutilizables.
│   │   └── SearchCombobox.tsx
│   ├── MetradosForm.tsx  <-- Componente complejo: Formulario izquierdo.
│   └── MetradosTable.tsx <-- Componente oculto: Historial de sesión.
├── App.tsx               <-- El Layout principal que une a todos los componentes.
├── main.tsx              <-- El punto de entrada a React.
└── index.css             <-- Estilos globales base y Glassmorphism.
```

---

## 3. Análisis en Profundidad por Capas

### A. Capa Define de Datos (`/types/index.ts`)
Aquí es donde controlamos qué forma tiene la información. Creamos Contratos (Interfaces) llamados `Partida` y `Metrado`.
*   Esto nos asegura que, en toda la aplicación, una "Partida" siempre tenga un `id`, `codigo`, `descripcion` y `unidad`.

### B. Capa de "Backend" / Catálogo (`/data/mockDB.ts`)
Para no depender de un servidor externo de momento, inyectamos un array de JavaScript llamado `mockPartidas` alojado en memoria local. 
*   Este archivo emula perfectamente la hoja `BD_PARTIDAS` que tenías en Excel, proveyendo al buscador de sus resultados en 0 milisegundos.

### C. El Cerebro Matemático (`/hooks/useMetradosForm.ts`)
Este es el archivo más importante para igualar la experiencia de tu Excel. Se le conoce como un *Custom Hook*.
*   **¿Cúl es su función?** Separar la de interfaz (los colores, botones) de las matemáticas pesadas.
*   **Manejo de Estados (`useState`):** Rastrea en tiempo real todo lo que el usuario tipea en las celdillas.
*   **Reactivadad (`useMemo`):** Esto replica las fórmulas de Excel. Monitorea específicamente el `Largo`, `Ancho` y `Alto`. Cuando cualquiera cambia, `useMemo` ejecuta el cálculo instantáneamente.
*   **La Lógica Anti-Ceros:** Igual que en el Excel con la función `PRODUCTO()`, si dejas el Ancho y el Alto en blanco, nuestro código detecta que es un string vacío `""` y lo multiplica por `1` en segundo plano, evitando resultados iguales a 0 al calcular el **Parcial**.
*   **Reciclaje Limpio:** Al guardar los datos envía una orden a `limpiarCampos()` para borrar numéricos pero retener inteligentemente la `Fecha` y Ubicación, lo que aumenta la productividad del Metrador.

### D. La Interfaz Visual (`/components`)

Aquí es donde construimos los legos de React.

#### 1. `SearchCombobox.tsx` (El Buscador Mágico)
Reemplaza al tosco ComboBox de VBA. 
*   Usa un estado en React llamado `query` para ir guardando tecla por tecla lo que el usuario escribe, y filtra en fracciones de segundo la BD usando Javascript puro `.filter()`.
*   Incluye un `useEffect` adjuntado al DOM que "escucha el Mouse" (`mousedown`), de forma que si el usuario da clic fuera del menú desplegable, este se oculte automáticamente.

#### 2. `MetradosForm.tsx` (El Formulario)
Es puramente visual (`JSX`). Recibe por Props (Propiedades) el `state` matemático y las `actions` del Cerebro (`useMetradosForm`).
*   Construido en formato "Grid" de Tailwind, lo que hace que los inputs de medidas estén perfectamente alineados (4 columnas equivalentes a Largo, Ancho, Alto, Cantidad).
*   El botón Registar permanece gris (Disabled) si no hay Partida seleccionada en el Buscador.

#### 3. `MetradosTable.tsx` (El Reporte)
Equivale a la hoja `BD_METRADOS`. Recibe el Array global de Metrados en sesión.
*   Usa mapeado `.map()` para dibujar filas `<tr>` dinámicamente si hay mil registros.
*   Incorpora animaciones fluidas de cascada (`animate-in fade-in slide-in-from-top`) inyectando feedback visual positivo cuando se registra un item.

### E. Director de Orquesta (`App.tsx`)
La App base une las partes. Inicializa el Hook `useMetradosForm` y crea el estado global de la tabla `[metrados, setMetrados]`.
*   Añade un Notificador Visual (*Toast*) moderno y temporal ubicado en la esquina superior cuando se guarda correctamente.
*   Pinta de fondo usando la clase global heredada de `index.css`: `.glass-panel` para dar opacidad cristalina sobre un fondo gris claro elegante.

---

## 4. ¿Cómo escalar esto en el futuro? (Siguiente Nivel)

Toda la aplicación ya fue construida con fundamentos para *Cloud*. El día de mañana si quieres llevarlo a internet:
1.  **Sustituir MockDB:** Eliminamos el `mockDB.ts` y conectamos la App usando `fetch()` a una API (NodeJS, Supabase, Firebase) que traiga la BD directamente desde un proveedor nube.
2.  **Sustituir Arreglo en Memoria Local:** El método `handleGuardar` dentro de `App.tsx` simplemente emitirá una mutación asíncrona (como `await supabase.from("metrados").insert(nuevo)`) enviando al servidor mundial el registro, permitiendo a todo el equipo trabajar colaborativamente en tiempo real.
