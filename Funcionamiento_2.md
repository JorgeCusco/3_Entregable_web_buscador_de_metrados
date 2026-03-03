# Guía de Estructura y Mantenimiento: Smart Metrados Web (Nivel 2)

Este documento detalla milimétricamente qué archivo hace qué, dónde se encuentra ubicado en tu disco duro y, lo más importante, **qué pasos exactos debes seguir si mañana quieres modificar o expandir la aplicación**.

---

## 🏗 1. Mapa Exacto de la Estructura de Carpetas

Todo tu entorno de trabajo actual está en:
`D:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\`

El corazón de la aplicación vive dentro de la carpeta `src/` (Source). Así se divide:

```text
3_Entregable_web_buscador_de_metrados/
│
├── node_modules/         <-- (Carpeta pesada auto-generada) Librerías de terceros (React, Tailwind). ¡Nunca se toca!
├── public/               <-- Imágenes, íconos estáticos (ej: favicon.ico, logo.png)
│
├── src/                  <-- ⚡ TU CÓDIGO VIVE AQUÍ ⚡
│   │
│   ├── components/       <-- FRONTEND (Interfaz y botones)
│   │   ├── ui/
│   │   │   └── SearchCombobox.tsx  <-- El "Buscador Inteligente". Modifícalo si quieres cambiar colores del buscador.
│   │   ├── MetradosForm.tsx        <-- El formulario izquierdo. Modifícalo para añadir/quitar cajas de texto (inputs).
│   │   └── MetradosTable.tsx       <-- La tabla derecha. Modifícala si quieres agregar o quitar columnas al reporte.
│   │
│   ├── data/             <-- BACKEND SIMULADO
│   │   └── mockDB.ts               <-- El "Excel BD_PARTIDAS". Aquí agregas nuevas partidas manualmente hoy en día.
│   │
│   ├── hooks/            <-- LÓGICA / MATEMÁTICAS
│   │   └── useMetradosForm.ts      <-- El cerebro de Excel (Fórmulas Parcial y Total). Edita esto si cambia una regla matemática.
│   │
│   ├── types/            <-- REGLAS ESTRICTAS DE DATOS (TypeScript)
│   │   └── index.ts                <-- Si añades una nueva columna en el formulario, DEBES registrarla aquí primero.
│   │
│   ├── App.tsx           <-- EL DIRECTOR DE ORQUESTA. Une el Formulario y la Tabla en un diseño de pantalla dividida.
│   ├── index.css         <-- ESTILOS GLOBALES. Define colores fondo, tipos de letra y el efecto ventana de cristal (Glassmorphism).
│   └── main.tsx          <-- EL MOTOR DE ARRANQUE. Llama a App.tsx y se lo pasa a React para que lo dibuje.
│
├── package.json          <-- Índice del proyecto. Guarda la lista de comandos (como "npm run dev") y paquetes instalados.
├── tailwind.config.ts    <-- (Oculto/Implícito en v4) Configuraciones avanzadas de estilos si decides cambiar los tonos base.
├── tsconfig.json         <-- Reglas del guardián TypeScript para que el código no crashee.
└── vite.config.ts        <-- Configuración del Servidor de compilación ultrarrápido (Vite).
```

---

## 🛠 2. Guía Práctica de Mantenimiento

### Caso A: "Quiero agregar una Partida nueva a la Base de Datos"
Actualmente, trabajamos con una base simulada local, así que debes hacerlo manualmente en el código.
1. Abre `src/data/mockDB.ts`.
2. Verás una lista con llaves `{}`. Añade una línea al final:
   ```typescript
   { id: "16", codigo: "OE.6.1.01", descripcion: "Mi nueva partida especial", unidad: "m" },
   ```
3. Guarda el archivo. React actualizará el buscador instantáneamente en tu pantalla sin refrescar.

### Caso B: "Quiero añadir una nueva medición (Ejem: 'Profundidad')"
Esto es un cambio estructural profundo. Involucra 4 pasos debido a la arquitectura dividida:

1.  **Regla de Datos:** Abre `src/types/index.ts`. Agrega a la interface `Metrado` la nueva propiedad:
    `profundidad: number | "";`
2.  **El Formulario (UI):** Abre `src/components/MetradosForm.tsx`.
    * Buscas la sección `<!-- Dimensiones Matematicas -->`.
    * Agregas la etiqueta "Profundidad" en el array de etiquetas `['Cantidad', ...]` y su llave respectiva en memoria interna `['cantidad', ..., 'profundidad']`.
3.  **La Lógica (Estado / Cerebro):** Abre `src/hooks/useMetradosForm.ts`.
    * Arriba, declaras su memoria: `const [profundidad, setProfundidad] = useState...`
    * Abajo, en la función de `useMemo` del *Parcial*, multiplicas la profundidad: `const p = profundidad !== "" ? profundidad : 1;` y multiplicas por `p`.
    * Finalmente, lo devuelves abajo en `procesarRegistro` para que se guarde en la fila.
4.  **La Tabla (Visualización Histórica):** Abre `src/components/MetradosTable.tsx`.
    * Añades una nueva celda de título `<th className="...">Prof.</th>`.
    * Añades el valor mapeado en la fila: `<td className="...">m.profundidad</td>`.

### Caso C: "Quiero cambiar toda la aplicación a color Rojo (Branding)"
Gracias a que usamos TailwindCSS, cambiar colores es facilísimo.
1. Abrir `src/index.css`.
2. Actualizar las variables de CSS:
    ```css
    @theme {
      --color-primary: #ef4444; /* Rojo brillante Tailwind */
      --color-primary-hover: #b91c1c; /* Rojo oscuro al pasar mouse */
    }
    ```
Todos los botones azules y anillos de enfoque cambiarán a rojo en toda la interfaz Mágicamente.

---

## 🌐 3. ¿Cómo integrar esta aplicación a una "Página Web Mayor" (Portal de tu Empresa)?

Actualmente, esto es una SPA independiente (que se levanta en el puerto 5173). Para insertar esto dentro de un portal Web de empresa ya existente, tienes dos caminos profesionales:

### Alternativa 1: Exportación Estática (Hosting Tradicional - Subdominio)
Si tu empresa ya tiene página (`tuempresa.com`), puedes colgar esto en `metrados.tuempresa.com`.
1.  **Construir:** Detienes el servidor actual (`Ctrl+C` en PowerShell).
2.  **Compilar:** Ejecutas el comando: `npm run build`
3.  **Resultados:** Vite creará una carpeta llamada `/dist`. Esa carpeta contendrá un hiper-optimizado `index.html` e ingentes hojas `js/css` minificadas.
4.  **Despliegue:** Tomas los archivos de esa carpeta `/dist` y los subes por FTP a cualquier hosting barato (HostGator, GoDaddy) o plataformas gratuitas potentes (Vercel, Netlify, Cloudflare Pages). No requieres backend robusto si sigues usando el MockDB.

### Alternativa 2: Migración como Micro-Frontend (Si ya tienen portal en React)
Si la página de tu empresa también está hecha en React, puedes literalmente **copiar** la carpeta `src/components` y `src/hooks` de este proyecto, y pegarla en el software empresarial como una "Ruta" separada (Ejem: `<Route path="/herramientas/metrador" element={<App />} />`).

### ☁️ El Siguiente Paso Inevitable: El Backend Real
El paso crítico antes de pasar a producción masiva, es botar el archivo `mockDB.ts`. En su lugar, necesitarás:
*   Crear una tabla real en **Supabase** (Gratis y ultra rápido) o una base SQL Server de tu empresa.
*   Modificar el "Buscador" para que en lugar de buscar en el array local `mockPartidas`, haga un *Query* `onKeyDown` hacia internet (Ejem: `supabase.from('partidas').select('*').ilike('descripcion', %Acero%)`).
*   Modificar la función `handleGuardar` para arrojar los datos hacia la nube y que así cada Ingeniero desde una tablet en campo pueda escribir y verlo centralizado.
