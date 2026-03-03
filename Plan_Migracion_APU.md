# Plan de Migración Arquitectónica: De Excel a BD Relacional con APUs (Análisis de Precios Unitarios)

El objetivo de esta fase es extraer la base de datos de las partidas desde el archivo Excel (`Sistema_Metrados_v4.xlsm`) y transformarla en una estructura de datos moderna (`mockDB.ts`) que soporte "Análisis de Precios Unitarios" (APUs) anidados. 

Es decir, que cada **Partida** no sea solo un título, sino que contenga una sub-tabla con su rendimiento y sus recursos (Mano de Obra, Materiales, Equipos).

A continuación, detallo exactamente cómo debemos estructurar esto y qué pasos tomaré para automatizar la extracción.

---

## 1. La Evolución de la Estructura de Datos (Las Interfaces)

Para que React y TypeScript entiendan un APU, debemos evolucionar nuestras interfaces en `/src/types/index.ts`. Pasaremos de una estructura plana a una **estructura jerárquica (Anidada)**:

```typescript
// 1. Tipamos los recursos individuales que componen un APU
export type TipoRecurso = "Mano de Obra" | "Materiales" | "Equipos" | "Subcontratos";

export interface RecursoAPU {
  tipo: TipoRecurso;
  descripcion: string;
  unidad: string;
  cuadrilla?: number;      // Opcional: Los materiales no usan cuadrilla
  cantidad: number;        // Cantidad de aporte unitario
  precio_unitario: number; // Precio parcial del insumo
  parcial: number;         // cantidad * precio_unitario
}

// 2. Tipamos la cabecera del APU
export interface APU {
  rendimiento_diario: number;
  jornada_horas: number;
  recursos: RecursoAPU[];
  costo_directo_unitario: number; // La suma de todos los parciales
}

// 3. Evolucionamos la Partida para que contenga su propio APU
export interface Partida {
  id: string;
  codigo: string;
  descripcion: string;
  unidad: string;
  apu?: APU; // Campo anidado opcional que contiene la "mesa de datos" del APU
}
```

---

## 2. ¿Cómo se verá el nuevo `mockDB.ts`?

Una vez convertida la data, el arreglo de `mockPartidas` dejará de ser una simple lista y tomará esta forma tridimensional:

```typescript
export const mockPartidas: Partida[] = [
  { 
    id: "12", 
    codigo: "OE.4.1.01", 
    descripcion: "Concreto f'c=210 kg/cm2", 
    unidad: "m3",
    apu: {
      rendimiento_diario: 25.0,
      jornada_horas: 8,
      costo_directo_unitario: 350.50,
      recursos: [
        { tipo: "Mano de Obra", descripcion: "Operario", unidad: "hh", cuadrilla: 2, cantidad: 0.64, precio_unitario: 25.00, parcial: 16.00 },
        { tipo: "Materiales", descripcion: "Cemento Portland", unidad: "bol", cantidad: 9.73, precio_unitario: 28.50, parcial: 277.30 },
        { tipo: "Equipos", descripcion: "Mezcladora de Concreto", unidad: "hm", cuadrilla: 1, cantidad: 0.32, precio_unitario: 45.00, parcial: 14.40 }
      ]
    }
  },
  // ... más partidas
];
```

---

## 3. El Plan de Acción (Cómo automatizar la extracción del Excel)

Hacer esto a mano copiando y pegando desde `Sistema_Metrados_v4.xlsm` tomaría semanas. Mi propuesta es construir un script en **Python** (similar a los que usamos para inyectar macros, pero esta vez para **leer** y **extraer**).

**Los Pasos del Script Python:**
1.  **Lectura:** Usaré la librería `openpyxl` o `pandas` en Python para abrir el `Sistema_Metrados_v4.xlsm` y dirigirme a la pestaña `BD` (o la hoja que contenga el S10 / APUs exportados).
2.  **Detección de Jerarquía:** El script iterará fila por fila. 
    *   Si detecta una fila con formato de Título (ej. "OE.2.1..."), sabrá que está creando una nueva `Partida`.
    *   Si detecta filas debajo de esa partida (ej. "Operario", "Cemento"), sabrá que son elementos de la lista `RecursoAPU` y los irá empaquetando dentro del APU de esa partida madre.
3.  **Generación del JSON/TS:** Una vez que Python haya navegado por las miles de filas de Excel y construido un "Diccionario", lo exportará automáticamente formateado como el archivo `mockDB.ts` o como un `bd_partidas.json` listo para ser consumido por React.

---

## 4. Impacto en la Aplicación Web (El Siguiente Paso UI)

Tener esta data tan rica abre la puerta a funcionalidades empresariales top dentro de nuestra app web:

*   **Desplegables (Accordions):** En el historial de Metrados (o en un panel separado), añadiremos un botón de "Ver APU" junto a cada partida. Al darle clic, se desplegará una sub-tabla hermosa y estilizada con React mostrando al detalle qué recursos componen ese metrado.
*   **Cálculo de Presupuesto en Vivo:** Como el `Metrado` (Ejem: 10 m3) ahora está cruzado con una `Partida` que tiene internamente el precio de los recursos, podemos multiplicar `Metrado Total` x `Recursos del APU` y generar una nueva tabla dinámica: **Requerimiento de Materiales en Tiempo Real**.
*   **Migración a Base de Datos Relacional:** Cuando pasemos esto a la Nube (Supabase o SQL), esta estructura anidada se separará de forma natural en 2 tablas de base de datos conectadas mediante llaves foráneas (`Table Partidas` y `Table Recursos_APU`), siendo la estructura arquitectónica perfecta.
