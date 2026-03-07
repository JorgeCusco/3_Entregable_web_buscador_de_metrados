# MASTER PROMPT & REGLAS ARQUITECTÓNICAS (Proyecto Planilla de Metrados Dinámica)

Este archivo sirve como registro perpetuo de las reglas de negocio, decisiones arquitectónicas y pipelines críticos de la aplicación `Buscador de Metrados`. 
Cualquier futuro desarrollo o asistencia de IA debe adherirse estrictamente a estas directrices.

## 1. Frontend (React + TypeScript + Tailwind)
*   **Filosofía UI:** Alta densidad de datos (tipo Excel). Eliminación de márgenes excesivos. Scroll horizontal/vertical puro sin paginación para el grid principal (\`MetradosTable\`).
*   **Algoritmo de WBS (Tree Pruning):** La tabla no es plana visualmente. Las ramificaciones WBS inactivas (que no contienen metrados `parcial > 0`) no deben renderizarse. Solo "Ramas Vivas".
*   **UI Estricta "Acero":** La mutación de "Detalle" por "Diámetro (Φ)" (y viceversa) dentro del \`MetradosForm\` solo se gatilla si se cumplen dos condiciones: (1) La unidad es `kg`, y (2) La descripción de la partida WBS contiene la palabra literal "acero".
*   **Modificaciones (Badges):** Existen partidas mutadas por Expedientes Técnicos. Sus códigos (DD, PN, MM) se procesan en backend y el frontend las pinta con minúsculos círculos de colores atados por \`Tooltip\`.

## 2. Backend Base (Python + Excel Crudo)
*   La fuente de verdad inicial (APUS e ítems) nace del script `procesar_apus.py`. 
*   Este lee Excels en crudo que alimenta la constructora y genera dinámicamente el `mockDB.ts`.
*   El cálculo `nivel_jerarquia` se hace contando los puntos del WBS directamente en el dict de Python para aliviar al cliente.

## 3. Pipeline de Exportación (NUBE INKAIA V5.0+)
El exportador local en JS fue erradicado. Se migró a una arquitectura "Server-to-Server" usando Google Sheets API v4 que garantiza formatos oficiales corporativos estables.

**Componentes del Túnel (Ubicados en `/server/index.js`):**
1.  **Clonación Efímera:** El proxy Backend de Express interrumpe en Drive de Google, usando una *Service Account Privada*. Duplica el `TEMPLATE_SPREADSHEET_ID` guardado en `.env`.
2.  **Despachador Lógico (Polimorfismo INKAIA):** 
    *   *Ruta A (Estándar):* Inserta linealmente 10 columnas base al clon dinámico.
    *   *Ruta B (Acero):* Detecta \`kg + "acero"\` e intercambia en memoria los valores: \`Largo WEB -> Largo EXCEL\` / \`Alto WEB -> Alto EXCEL\`. Fuerza \`Ancho EXCEL = ""\`. 
3.  **Inyección Masiva Continua:** El backend inserta en el Sheets usando un \`values.batchUpdate(RAW)\` en un solo latido atómico ultraveloz.
4.  **Descenso en Binario:** Petición a Drive API para obtener en caliente el buffer del Sheet Mutado en MimeType `.xlsx`.
5.  **Destrucción del Rastro (Auto-Purga):** Antes de entregar la data a React, el ID clonado es `drive.files.delete` eliminado perpetuamente para liberar VRAM en la Nube Corporativa.

---
*Última Actualización: Fin del Sprint 6.0.*
