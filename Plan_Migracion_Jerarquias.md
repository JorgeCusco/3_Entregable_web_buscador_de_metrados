# Fase 7: Arquitectura de Jerarquías WBS (Work Breakdown Structure)

El objetivo de esta fase es dotar de "Contexto Espacial y Lógico" a las partidas, permitiendo que la interfaz web muestre la ruta jerárquica exacta de donde proviene una partida, de forma similar a las migas de pan (Breadcrumbs).

## Análisis del Formato
La base de datos original (`DATOS_LIMPIOS_PROCESAR.xlsx`) provee los títulos agrupadores usando un sistema de códigos anidados por puntos:
*   `OE.1` (Nivel 1: OBRAS PROVISIONALES...)
*   `OE.1.1` (Nivel 2: CONSTRUCCIONES PROVISIONALES...)
*   `OE.1.1.1` (Nivel 3: OFICINAS Y OTROS...)
*   `OE.1.1.1.01` (Nivel 4 / Hoja Final: Oficina y almacén...)

## Estrategia de Extracción en Python (`procesar_apus.py`)
1.  **Tracker de Jerarquía en Memoria:** Crearemos un diccionario (ej. `current_hierarchy = {}`) en el ciclo de iteración (`iterrows()`).
2.  **Detección de Títulos vs Partidas:** 
    *   Si una fila tiene un código como `OE.1` pero **NO** tiene Unidad ni Precio, es un "Título Agrupador". Lo guardamos en `current_hierarchy` usando su nivel de profundidad (ej. nivel = contar los puntos del código).
    *   Si una fila tiene un código como `OE.1.1.1.01` y tiene Unidad/Precio, es una "Partida Ejecutable". 
3.  **Inyección del Árbol:** En el momento en que se procesa y guarda una "Partida Ejecutable", el script recolectará dinámicamente todos los títulos activos superiores desde `current_hierarchy` y los unirá en un array de strings (ej. `["OBRAS PROVISIONALES", "CONSTRUCCIONES PROVISIONALES", "OFICINAS"]`).
4.  Esta nueva propiedad se llamará `jerarquia` y se guardará dentro del objeto Partida JSON.

## Estrategia de Renderizado (React + TypeScript)
1.  **Actualización de Interfaces (`src/types/index.ts`):** Añadir `jerarquia: string[]` de manera opcional en la interface `Partida`.
2.  **Modificación Visual del Combobox (`SearchCombobox.tsx`):** Cuando el usuario busque "concreto", además de salir el nombre de la partida y su código, en una línea superior en letra gris muy pequeña, aparecerán sus migas de pan (`Estructuras > Obras de Concreto > Zapatas`).
3.  **Modificación del Formulario (`MetradosForm.tsx`):** Al elegir una Partida, se mostrará visualmente bajo el título para que el usuario siempre sepa en qué sección de la obra está insertando el metrado.
