# Diseño UX/UI: Simplificación del Buscador y Traslado de Jerarquía

Entendido. El objetivo es desaturar el componente de búsqueda interactivo (`SearchCombobox.tsx`) y el formulario (`MetradosForm.tsx`), reservando la "Conciencia Topológica" (El Árbol WBS) para el Registro Final (La Tabla de Historial).

Aquí está la ruta paso a paso de refactorización basada en tu requerimiento y la imagen de referencia:

---

### Paso 1: Limpieza Extrema del `SearchCombobox.tsx`
Actualmente, el buscador intenta mostrar toda la ruta ("OBRAS PROVISIONALES > ALMACENES..."). Esto lo vuelve lento visualmente y saturado.
*   **Acción:** Eliminaremos el renderizado de `partida.jerarquia` dentro de las opciones del dropdown.
*   **Alineación al Diseño (Ver Imagen de Referencia):**
    *   **Izquierda:** La Descripción de la Partida (en texto normal o semibold, truncado si es muy largo).
    *   **Derecha:** Un badge/píldora flotante que contenga el `Código OE` y la `(Unidad)`.
*   Esto garantiza que el buscador sea rapidísimo, ultra-responsivo y que el ojo del usuario vaya directo a lo que importa.

### Paso 2: Limpieza del `MetradosForm.tsx` (Formulario)
No necesitamos que el "Árbol Genealógico" consuma la mitad de la pantalla del formulario antes de registrar.
*   **Acción:** Revertiremos el Formulario hacia su estado original (solo mostrando el Código y la Unidad en cajas de "Solo Lectura", o integrados a la partida).
*   Eliminaremos completamente el cajón blanco con el Árbol Indentado de colores fuertes que acabamos de hacer. ¡Menos es Más!

### Paso 3: Traslado de la Jerarquía a `MetradosTable.tsx` (El Historial)
Aquí es donde reside el valor real. Cuando miras el historial de cientos de metrados agregados, necesitas saber a qué parte de la obra pertenecen.
*   **Acción:** Modificaremos la Tabla. Cuando se renderice una fila (un metrado registrado), pondremos la jerarquía WBS justo **debajo** del nombre de la partida, en texto muy sutil y pequeño (letra gris).
*   **Diseño:** 
    ```text
    Desmontaje de Oficinas y Almacenes (Texto Principal Fila)
    ↳ OBRAS PROVISIONALES > CONSTRUCCIONES PROVISIONALES (Texto secundario miniatura gris)
    ```
*   **Requisito de Datos:** Para que la Tabla pueda recordar la jerarquía, necesitamos que la interfaz `Metrado` guarde el arreglo `jerarquia: string[]`. Cuando hagamos clic en "Registrar Metrado", el `useMetradosForm.ts` deberá copiar la `jerarquia` de la Partida Seleccionada hacia el nuevo objeto Metrado.

---

### ¿Cómo procederemos?
Si apruebas esta ruta conceptual:
1.  **Edición 1:** Limpieza de `SearchCombobox` (Buscador limpio estilo tu imagen).
2.  **Edición 2:** Limpieza de `MetradosForm` (Quitar el Árbol grande).
3.  **Edición 3:** Actualizar interface `Metrado` e inyectar `jerarquia` al guardar.
4.  **Edición 4:** Renderizar texto sutil en `MetradosTable`.

¿Le damos luz verde a esta ruta exacta?
