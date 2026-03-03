# Diseño UX/UI: Visualizador Jerárquico WBS (Limpio y Colorizado)

Entendido. El objetivo es que cuando veamos la partida ("Zapatas"), no veamos simplemente texto gris pequeño apilado como "Obras > Estructuras > Zapatas", sino un **Visualizador Estilizado y Escalado** que comunique la profundidad estructural mediante diseño (Indentación, Colores, Tallas de texto).

Aquí te presento mi propuesta de **Ruta Paso a Paso** para lograr un "Visualizador Limpio y Profesional":

---

### Paso 1: Refactorización Visual en el Combobox (Buscador)
No podemos saturar la cajita pequeña del buscador con colores intensos porque distraerá la vista.
*   **Diseño Propuesto:** Mantendremos las "Migas de pan" compactas, pero usaremos íconos muy sutiles (`>`) y colores en degradé. 
*   **Ejemplo:** `Obras Provisionales` (Gris claro) `>` `Oficinas` (Gris medio) `>` **Zapatas** (Azul destacado y en negrita).

### Paso 2: Creación del "Visualizador de Árbol" en el Formulario (Área de Lectura)
Aquí es donde aplicaremos la magia fuerte. Una vez que elijas la partida en el buscador, el cuadro de abajo que dice "Jerarquía Estructural (WBS)" se transformará en un árbol indentado (estilo carpetas de Windows).

**Concepto Visual:**
```text
📘 OE.1 OBRAS PROVISIONALES (Título Principal - Azul Oscuro - Texto Grande)
  ↳ 📗 OE.1.1 CONSTRUCCIONES PROVISIONALES (Subtítulo - Esmeralda - Texto Medio)
    ↳ 📄 OE.1.1.1 OFICINAS Y ALMACENES (Partida Seleccionada - Slate/Azul Brillante - Fondo Resaltado)
```

**Acciones de Código (React/Tailwind):**
1.  **Mapeo con Indentación:** Usaremos el índice del array (`idx`) para multiplicar un margen izquierdo (`ml-${idx * 4}`), creando el efecto visual de escalera o anidación.
2.  **Asignación de Paleta de Colores Dinámica:** Crearemos una pequeña función en TypeScript que asigne un color distinto dependiendo del nivel jerárquico (Nivel 0 = Azul Primario, Nivel 1 = Verde/Teal, Nivel 2 = Naranja/Ambar, Último Nivel = Azul Fuerte con fondo resaltado).
3.  **Iconografía:** Agregaremos conectores visuales (como una flechita en "L") usando CSS o iconos de Lucide (`CornerDownRight`) para que se entienda que uno está dentro de otro.

### Paso 3: Optimización del Espacio (Diseño No Saturado)
Para evitar que una jerarquía muy profunda (ej. 6 niveles) rompa el diseño del formulario:
*   Reduciremos el padding interno de esa zona específica.
*   Mantendremos la tipografía muy limpia (`text-[11px]` o `text-xs`).
*   Ocultaremos temporalmente el "Código" y la "Unidad" en cajas separadas, y tal vez los integremos elegantemente al final del árbol para ganar espacio vertical.

---

### ¿Cómo procederemos?
Si apruebas esta ruta conceptual:
1.  **Edición 1:** Modificaré primero `SearchCombobox.tsx` para implementar el degradé sutil en el buscador.
2.  **Edición 2:** Reescribiré la sección de Solo Lectura en `MetradosForm.tsx` implementando el Árbol Indentado con la paleta de colores dinámica.
3.  **Verificación:** Abriré el subagente navegador para tomar fotos y que evalúes si los colores te agradan o si los ajustamos.

¿Dar el pase libre para iniciar con el **Paso 1 y Paso 2** directamente en el código?
