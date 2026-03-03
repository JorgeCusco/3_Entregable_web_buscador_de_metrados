# Plan Estratégico de Migración APU (Fase 2): Transformación de Datos Reales

Tenemos en nuestras manos el archivo `DATOS_LIMPIOS_PROCESAR.xlsx` exportado (probablemente desde el S10 o un software similar de presupuestos). Estos archivos tienen un reto masivo: **Son tablas planas en 2D**.
Es decir, en la misma columna donde dice "Concreto f'c=210", tres filas más abajo en esa misma columna dice "Operario" y luego "Cemento".

React y nuestro Nuevo Buscador no entienden tablas planas. Necesitan **Objetos Tridimensionales (JSON Anidado)**.
Aquí está la estrategia paso a paso para lograr esta limpieza y transformación:

---

## 🔬 1. Análisis del Archivo Crudo (`DATOS_LIMPIOS_PROCESAR`)

He explorado la estructura de tus datos usando Python (`pandas`). Las columnas detectadas siguen este patrón plano:
1.  **Código** (Ej: `OE.1.1.1.06`)
2.  **Descripción** (Ej: `Servicios higiénicos para obreros` o `Operario`)
3.  **Unidad** (Ej: `mes` o `hh`)
4.  **Cantidad / Rendimiento** (Ej: `3.0` o `0.10`)
5.  **Precio Unitario**
6.  **Costo Parcial**

El dilema arquitectónico es: **¿Cómo sabe la computadora diferenciar qué fila es una Partida Principal y qué fila es un Insumo (Recurso)?**

---

## 🛠 2. El Algoritmo Transformador (Script Python a Crear)

Crearemos un script externo `procesar_apus.py` que ejecutaremos solo 1 vez en la vida para fabricar nuestra base de datos perfecta.

### Lógica de Detección (Jerarquía)
El algoritmo leerá el Excel de arriba hacia abajo (fila por fila) y usará 2 reglas de oro:

*   **REGLA A (Es una Partida):**
    Si la fila tiene un *Código* que empieza con letras (ej. `"OE.1..."` o `"01.01..."`), el script dice: *"¡Ah! Esto es una Partida Padre"*.
    Crea un nuevo cajón maestro `{ id: ..., codigo: ..., descripcion: ... }` y lo guarda. Además, lee la fila derecha para capturar el "Costo Directo Unitario" general.
*   **REGLA B (Es un Recurso/Insumo):**
    Si el script sigue bajando y encuentra una fila donde el *Código* está **Vacío** o son puros números (ej. `0147010002` = Cemento), el script dice: *"Esto no es una partida, esto es el 'hijo' de la partida anterior"*.
    Entonces, inserta esa fila (Operario, Cemento, Mezcladora) *dentro* del arreglo `recursos: []` del último cajón Padre creado.

### Manejo del Rendimiento
Los exports de S10 usualmente ponen el Rendimiento de jornada escondido en el texto de la cabecera (Ej: `Rendimiento: 25.00 m3/DIA`). 
Nuestro script usará "Expresiones Regulares" (IA de texto) para buscar la palabra `Rendimiento:` en la misma fila de la partida y cortará ese número matemáticamente para guardarlo en la variable `rendimiento_diario: 25.00`.

---

## 🚀 3. ¿Cómo escalamos esto en el Frontend de React? (El Siguiente Paso)

Cuando el script finalice, nos arrojará un flamante archivo `bd_partidas_anidado.json`.

Con este tesoro en mano, esto es lo que debes pedirme/programar en la Interfaz (UI):

1.  **Reemplazar el Input Falso:**
    Borrariamos el contenido duro de `src/data/mockDB.ts` y haríamos que importe automáticamente este nuevo mega-JSON puro que agrupa todas tus obras.
2.  **La "Tabla Acordeón" (Accordion UI):**
    En tu pantalla principal de la Web (en el historial o al buscar en el Combobox), añadiremos un icono de una flechita `( ► )`.
    Al hacerle clic, usaremos el "Renderizado Condicional" de React (`{isOpen && <TablaRecursos />}`) para hacer aparecer fluidamente una Sub-Tabla justo debajo de la partida, que muestre hermosamente los precios de Materiales, Mano de Obra y Equipos.
3.  **El Multiplicador Masivo:**
    La mejor funcionalidad futura. Como ahora tenemos cuánto Cemento entra por `1 m3` amarrado dentro del JSON de la partida... al momento en que tú llenes en tu app web que hiciste **"15 m3 de Zapatas"**, el componente en milisegundos multiplicará secretamente todos los insumos internos y podrías exportar tu requerimiento de materiales del día exacto en un botón.

---

### ¿Cuál es tu indicación de acción?
Para iniciar con este Live-Coding (creación del cerebro lector), **necesito que confirmes:**
¿El archivo `DATOS_LIMPIOS_PROCESAR.xlsx` tiene alguna columna extraña o sigue el formato S10 estándar (Código, Descripción, Unidad, Cantidad, Precio)? Si es estándar, ¡dime **"Ejecuta el Script Rápido"** y crearé el código Python de succión ahora mismo!
