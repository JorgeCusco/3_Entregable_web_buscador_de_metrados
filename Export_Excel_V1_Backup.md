# Respaldo: Formato de Exportación a Excel (V1)
*Fecha de Respaldo: Previo a la Refactorización V5.0 (Exportación Púrpura/Python)*

Este documento preserva la lógica de la **Primera Versión** del motor de exportación utilizado en el frontend (`MetradosTable.tsx`), el cual dependía de la librería `xlsx` de React para procesar directamente la grilla activa y generar un archivo `.xlsx`.

---

## 1. Cabeceras del Documento
El archivo de Excel se estructuraba como un arreglo de arreglos (AoA - Array of Arrays), arrancando con un título quemado y una fila vacía de margen, seguido de 13 columnas exactas:

```javascript
[
    ["PLANILLA DE METRADOS - BELEMPAMPA"],
    [],
    ["ITEM", "DESCRIPCIÓN", "UND", "FRENTE", "BLOQUE", "NIVEL", "CANT", "LARGO", "ANCHO", "ALTO", "PARCIAL", "VECES", "TOTAL"]
]
```

## 2. Iteración Jerárquica y Volcado de Datos
La iteración dependía de nuestro árbol mixto (`rows`), evaluando 4 casos posibles de representación de fila:

### Caso A: Títulos Estructurales (Roll-Ups WBS)
**Condición:** `r.is_template && r.es_titulo`
Los grandes títulos macro (Ej. "OE.1 OBRAS PROVISIONALES") imprimían su código WBS y el nombre. El subtotal de TODA su rama hija (`totalRama` calculado en `titleTotals`) se imprimía en la columna de **PARCIAL**. Todo lo demás vacío.
*   **Código:** Columna 1
*   **Descripción:** Columna 2
*   **Parcial (Sumatoria WBS):** Columna 11

### Caso B: Elementos Virtuales (Agrupadores de UX)
**Condición:** `r.is_template && r.is_elemento_virtual`
El agrupador sintético (ej: "Vigas Eje A-A") se imprimía para brindar visibilidad sin ensuciar sumarizaciones.
*   **Descripción:** Columna 2 (Texto Pleno)
*   *Todas las demás columnas vacías.*

### Caso C: Partida Master (Ítem Costeado)
**Condición:** `r.is_template && !r.es_titulo`
Correspondía a la partida en sí. Imprimía el Código, Descripción, y Unidad. La suma neta de sus metrados directos se imprimía en la columna de **TOTAL**.
*   **Código:** Columna 1
*   **Descripción:** Columna 2
*   **Und:** Columna 3
*   **Total (Suma de la Partida):** Columna 13

### Caso D: Registros de Metrado Atómicos (Filas Físicas)
**Condición:** `!r.is_template`
El grueso de los datos inyectados por el usuario. Si la fila contenía unidad de `kg` (Acero), la lógica inyectaba un prefijo `[Φ 5/8"] ` en la Descripción automáticamente concatenado al `detalle` o `elemento + detalle`.
*   **Item:** Vacío
*   **Descripción:** `[Prefijo de Acero si existe] + Detalle` (Añadiendo margen si pertenecía a un agrupador).
*   **Und:** Vacío
*   **Frente:** Columna 4
*   **Bloque:** Columna 5
*   **Nivel:** Columna 6
*   **Cant:** Columna 7
*   **Largo:** Columna 8
*   **Ancho:** Columna 9
*   **Alto:** Columna 10
*   **Parcial:** Columna 11
*   **Veces:** Columna 12
*   **Total:** Columna 13

---

## 3. Lógica Cruda de Generación (Fragmento de Código)

```tsx
const exportToExcel = () => {
    const excelRows: any[] = [
        ["PLANILLA DE METRADOS - BELEMPAMPA"],
        [],
        ["ITEM", "DESCRIPCIÓN", "UND", "FRENTE", "BLOQUE", "NIVEL", "CANT", "LARGO", "ANCHO", "ALTO", "PARCIAL", "VECES", "TOTAL"]
    ];

    rows.forEach(r => {
        if (r.is_template) {
            if (r.es_titulo) {
                // Jerarquía WBS - Roll-up
                const totalRama = titleTotals[r.codigo] || 0;
                excelRows.push([r.codigo, r.descripcion, "", "", "", "", "", "", "", "", totalRama.toFixed(2), "", ""]);
            } else if (r.is_elemento_virtual) {
                excelRows.push(["", r.descripcion, "", "", "", "", "", "", "", "", "", "", ""]);
            } else {
                // Cabecera de Partida
                const total = partidaTotals[r.codigo] || 0;
                excelRows.push([r.codigo, r.descripcion, r.unidad, "", "", "", "", "", "", "", "", "", total.toFixed(2)]);
            }
        } else {
            // Registro de metrado individual
            const prefix = r.diametro ? `[Φ ${r.diametro}] ` : "";
            excelRows.push([
                "",
                r.elemento ? "  " + prefix + r.detalle : prefix + r.detalle,
                "",
                r.frente,
                r.bloque,
                r.nivel,
                r.cantidad,
                r.longitud_area,
                r.ancho_empalme,
                r.altura_gancho,
                formatNumber(r.parcial),
                r.nro_veces,
                formatNumber(r.total)
            ]);
        }
    });

    const ws = XLSX.utils.aoa_to_sheet(excelRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Planilla");
    XLSX.writeFile(wb, `Planilla_Metrados_${new Date().toISOString().split('T')[0]}.xlsx`);
};
```

---
*Fin del respaldo de la V1.*
