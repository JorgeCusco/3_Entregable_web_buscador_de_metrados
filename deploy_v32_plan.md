# Plan de Despliegue V32: Corrección de Exportación Excel

He detectado que el error en la exportación (Hostinger/Render) se debía a un conflicto de protocolos (Mixed Content) y una URL del servidor incorrecta en producción.

## Solución Implementada
He actualizado `MetradosTable.tsx` con una lógica "inteligente":
- **Si estás en Localhost**: Usa `http://localhost:3001`.
- **Si estás en la Nube**: Cambia automáticamente a `https://inkaia-backend.onrender.com`.
Esto evita que el navegador bloquee la descarga y asegura que siempre apunte al servidor correcto.

## Pasos para TI

### Para Hostinger:
1.  **Descarga** el nuevo archivo `inkaia_hostinger_v32.zip` que he generado.
2.  **Sube** el contenido a tu carpeta `public_html`. (Recuerda que ya incluye el `.htaccess`).

### Para Render (web):
1.  **Haz un Commit y Push** de los últimos cambios a tu GitHub.
2.  Render detectará el cambio y hará el "Deploy" automático.
3.  **Nota**: No necesitas subir el ZIP a Render, ellos lo compilan directamente desde tu repositorio.

---
🚀 Con esto, el botón de exportar debería funcionar tanto en Render como en Hostinger.
