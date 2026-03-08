# 📜 Bitácora Técnica: Implementación Pipeline INKAIA V4 (Google Sheets)

Este documento resume todo el conocimiento, lógica y soluciones aplicadas en esta sesión para que nunca se pierda la "receta" de este desarrollo.

## 🚀 Objetivo Logrado
Pasar de una exportación local de Excel limitada a una **Exportación en la Nube de Google** utilizando el motor de renderizado de Google Sheets API para obtener archivos `.xlsx` oficiales con formato corporativo.

## 🛠️ Arquitectura del Sistema
- **Backend:** Node.js (Express) actuando como Proxy "Dark" (invisible).
- **Autenticación:** Server-to-Server mediante una **Service Account** (`jorgeveintiseis-b82df74e7efb.json`).
- **Google APIs:** Drive API v3 y Sheets API v4.

## 🧠 Lógica Inkaia (Muta-Data)
El backend procesa los datos de React antes de inyectarlos siguiendo reglas de ingeniería civil:
1. **Ruta Estándar (Concreto, Encofrado, etc.):** Mapeo directo.
2. **Ruta Acero (kg):**
   - El sistema detecta automáticamente partidas de "Acero" con unidad "kg".
   - **Largo:** Toma el valor del campo `Longitud/Área` de la web.
   - **Alto:** Toma el valor del campo `Altura/Gancho` de la web.
   - **Ancho:** Se fuerza a estar **Vacío** (por norma de metrados de acero).
   - **Parcial:** El backend recalcula el peso exacto: `Cantidad * Veces * (Largo + Alto) * Peso_por_Diametro`.

## 🛡️ Solución a Bloqueos de Google (Workarounds)
Durante este chat, enfrentamos y vencimos dos errores críticos:
1. **FAILED_PRECONDITION:** La API de Google Sheets no permite inyectar datos en archivos `.xlsx` crudos. Se solucionó convirtiendo la plantilla a **Google Sheet Nativo**.
2. **STORAGE_QUOTA / PERMISSION_DENIED:** Las Service Accounts no tienen disco duro propio. 
   - **Solución Final:** El bot NO crea archivos nuevos. En su lugar, entra al archivo original compartido, **clona una pestaña temporalmente**, inyecta los datos, descarga el binario y borra la pestaña. Esto consume 0 bytes de cuota y es instantáneo.

## 📊 Mapeo de Columnas (Desde B8)
El archivo se inyecta comenzando en la celda **B8** con este orden estricto de 18 columnas:
1. Nivel Indicador
2. Fecha
3. Frente
4. Bloque
5. Nivel
6. Código
7. Partida (Descripción de la partida)
8. Descripción_ (Elemento / Detalle concatenado)
9. Cantidad
10. Longitud
11. Ancho
12. Altura
13. Acero (Diámetro)
14. Parcial
15. Nro de Veces
16. Total
17. Unidades
18. Modificaciones

## 📂 Dónde están los archivos
- **Código Backend:** `server/index.js`
- **Configuración:** `server/.env`
- **Frontend Trigger:** `src/components/MetradosTable.tsx` (Función `exportToExcel`)

---
**Desarrollado por Antigravity (Advanced Agentic Coding) - Google DeepMind.**
*Fecha: 7 de Marzo, 2026*
