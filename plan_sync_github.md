# Plan de Sincronización GitHub -> Render

El problema es que actualmente estás trabajando en la rama local `jorddddd`, pero tu servicio en Render está configurado para desplegar automáticamente desde la rama `main` de GitHub. Por eso los cambios no se ven reflejados.

## Pasos para la Solución

1.  **Consolidar Trabajo Local**:
    - Guardar todos los archivos (Filtros, Plantilla V5, Fix de Excel).
    - Hacer un Commit con un mensaje descriptivo (ej: `Fix: exportación excel y soporte plantilla v5`).

### 2. Sincronizar el Backend (Render)
El error 502/503 indica que el servidor backend (`inkaia-backend`) está intentando iniciar pero falla. Probablemente se debe a:
- **Archivo Faltante**: La plantilla `METRADO_PLANTILLA_5.xlsx` debe estar en tu GitHub para que el servidor la use.
- **Ruta Incorrecta**: He ajustado las rutas para que funcionen mejor en Render.
- **Puerto**: Asegúrate de que en Render el "Start Command" sea `node server/index.js` (o que estés dentro de la carpeta server).

### 3. Pasos a seguir
1. **Push a GitHub**: Ya lo hicimos, pero asegúrate de que el archivo `.xlsx` se haya subido.
2. **Revisar Logs de Render**: Entra a tu servicio `inkaia_backend` en Render y copia los últimos mensajes de error en la pestaña "Logs".

---
🚀 **¿Deseas que proceda a realizar el commit y subir los cambios a la rama 'main' de tu GitHub ahora mismo?**
