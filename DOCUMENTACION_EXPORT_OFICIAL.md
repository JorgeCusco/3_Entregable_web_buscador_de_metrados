# Estructura Técnica: Exportación Oficial a Excel (V31)

Este documento detalla la estructura, mapeo de columnas y lógica de procesamiento utilizada para generar el reporte de Excel "Oficial" desde el sistema **3_Entregable_web_buscador_de_metrados**.

## 📌 Configuración General
- **Plantilla Base:** `METRADO_PLANTILLA_5.xlsx`
- **Pestaña de Destino:** Busca preferentemente `METRADO`, luego `Hospital`, `Contingencia` o la primera disponible.
- **Fila de Inicio:** Los datos se escriben a partir de la **Fila 8**.
- **Engine:** `ExcelJS` (Node.js Backend).

---

## 📋 Mapeo de Columnas (Desde Columna B)

| Col | Excel | Campo | Lógica de Población |
| :--- | :--- | :--- | :--- |
| **B** | Col 2 | **Nivel** | Se obtiene de `nivel_jerarquia`. Indica la profundidad en el WBS (1.1, 1.1.1, etc.). |
| **C** | Col 3 | **Fecha** | Fecha del registro (`YYYY-MM-DD`). Solo se llena en registros de metrado real. |
| **D** | Col 4 | **Especialidad** | **Detección Automática:** El servidor analiza el prefijo del código (OE.2, OE.3, etc.) usando `SPECIALTY_RULES`. |
| **E** | Col 5 | **Frente** | Ubicación: Frente ingresado en el formulario. |
| **F** | Col 6 | **Bloque** | Ubicación: Bloque ingresado en el formulario. |
| **G** | Col 7 | **Nivel (Piso)** | Ubicación: Piso o Nivel del metrado. |
| **H** | Col 8 | **Cuadrilla** | Código de la cuadrilla asignada al registro. |
| **I** | Col 9 | **Grado 1** | Ancestro de nivel 1 (Raíz). Formato: `CÓDIGO-DESCRIPCIÓN`. |
| **J** | Col 10 | **Grado 2** | Ancestro de nivel 2. |
| **K** | Col 11 | **Grado 3** | Ancestro de nivel 3. |
| **L** | Col 12 | **Grado 4** | Ancestro de nivel 4. |
| **M** | Col 13 | **Partida** | Código y Nombre de la Partida actual. Formato: `CÓDIGO-DESCRIPCIÓN`. |
| **N** | Col 14 | **Detalle** | Concatenación: `[ELEMENTO] / [DETALLE ESPECÍFICO]`. |
| **O** | Col 15 | **Cantidad** | Cantidad de elementos (Veces). |
| **P** | Col 16 | **Long. / Área** | Dimensión de longitud o área según el tipo de partida. |
| **Q** | Col 17 | **Ancho / Emp.** | Dimensión de ancho o empalme. |
| **R** | Col 18 | **Alt. / Gancho** | Dimensión de altura o gancho. |
| **S** | Col 19 | **Parcial** | Cálculo intermedio. Si es **Acero**, aplica pesos nominales. |
| **T** | Col 20 | **Nro Veces** | Multiplicador de repetición. |
| **U** | Col 21 | **Diámetro** | Solo para partidas de acero. Extrae el diámetro o valor configurado. |
| **V** | Col 22 | **Total** | Multiplicación final del registro: `Cantidad * Dimensiones * Veces`. |
| **W** | Col 23 | **Total 2** | **Resumen de Partida:** Suma de todos los totales (`V`) para esa partida específica. Solo aparece en filas de cabecera. |
| **X** | Col 24 | **Unidad** | Unidad de medida oficial (GLB, m2, m3, kg, und). |
| **Y** | Col 25 | **Modif.** | Tipo de modificación: `ET` (Exp. Técnico), `AD` (Adicional), `DE` (Deductivo), etc. |
| **Z** | Col 26 | **Personal** | Lista de personal/obreros involucrados en el registro. |
| **AA** | Col 27 | **Autor** | Nombre del usuario que realizó el registro en el sistema. |

---

## ⚙️ Lógica de Cálculos Especiales

### 1. Partidas de Acero (Cálculo por Peso)
Si el servidor detecta que la partida es de **Acero** (Unidad: `kg` + Descripción con palabra "Acero"), aplica el peso nominal por metro lineal:
- **Fórmula:** `Parcial = Cantidad * (Longitud + Empalme + Gancho) * PesoNominal`
- **Pesos (kg/m):** 
  - 1/4" (0.254), 3/8" (0.560), 1/2" (0.994), 5/8" (1.550), 3/4" (2.240), 1" (3.970), 1 3/8" (7.907).

### 2. Partidas HVAC (Sistema de Ductos)
Usa factores de conversión específicos según el `hvac_item_type`:
- **Fórmula:** `Parcial = Cantidad * Dim1 * Dim2 * Dim3 * Factor`
- Los campos de dimensiones se mapean dinámicamente según si es Ducto, Codo o Rejilla.

### 3. Filtro de Jerarquía (Grados I-L)
El sistema realiza una búsqueda recursiva hacia arriba en el árbol de partidas para identificar los ancestros. Esto permite que cada fila sepa a qué Capítulo o Sub-capítulo pertenece, facilitando el filtrado por "Tablas Dinámicas" directamente en Excel.

---

## 🚀 Proceso de Exportación
1. El usuario hace click en **"Exportar Oficial"**.
2. El Frontend envía el arreglo de filas procesadas (filtros aplicados) al Backend.
3. El Backend carga la plantilla `.xlsx`, limpia los datos anteriores y escribe secuencialmente desde la fila 8.
4. Se devuelve el archivo binario para descarga automática en el navegador.

> [!IMPORTANT]
> El sistema limpia la columna **W (Total 2)** en las filas de registros detallados para evitar duplicidad visual, manteniéndola solo en las filas que representan la sumatoria de la partida.
