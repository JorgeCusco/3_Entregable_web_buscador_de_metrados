# 🛡️ Módulo de Administración de Presupuesto (Master Editor)

Este documento detalla la propuesta para crear un módulo independiente de gestión avanzada de partidas, con control de acceso por roles y auditoría completa.

---

## 🏗️ 1. Arquitectura del Módulo Separado
Para evitar "gastar tokens" y mantener la limpieza del proyecto principal, se propone una estructura de **Micro-Módulo**:
- **Ubicación:** `src/admin/`
- **Ruta:** `/panel-control-presupuesto`
- **Acceso:** Solo usuarios con `rol === 'ADMIN_METRADOS'` o similar en la tabla `ecosistema_usuarios`.

## 👥 2. Control de Acceso por Roles (RBAC)
Actualmente tienes 15 metradores. El plan es:
1.  **Metradores (11):** Mantienen su flujo actual (Registro de metrados diario). Solo lectura del catálogo oficial.
2.  **Encargados / Editores (4):** Tendrán habilitada la pestaña "Administración" donde podrán:
    - Modificar descripciones de partidas existentes.
    - Cambiar precios unitarios (PU).
    - Añadir nuevas partidas al catálogo maestro.
    - Reordenar la jerarquía (OE.x.x.x).

## 📝 3. Sistema de Auditoría (Logs de Control)
Cada vez que un administrador añada o quite una partida, el sistema registrará una entrada en la tabla `logs_maestros`:
- **Quién:** Nombre completo del administrador.
- **Acción:** `ADD_PARTIDA`, `EDIT_PRICE`, `DELETE_PARTIDA`.
- **Detalle:** "Se cambió el PU de OE.1.1.1 de 15.20 a 16.50".
- **Fecha:** Timestamp automático.

## 🛠️ 4. Funcionalidades del "Editor Maestro"
- **Bulk Edit:** Poder seleccionar múltiples partidas y cambiarles la especialidad o el tipo de metrado.
- **Importador Inteligente:** Si traen un Excel con cambios masivos de presupuesto, el administrador podrá "previsualizar" y confirmar la actualización masiva de la base de datos.
- **Filtro de Confirmación:** Un flujo donde un cambio propuesto requiere una "doble verificación" antes de afectarlos metrados históricos.

## 📁 5. Estructura de Carpetas Propuesta
```text
src/
  ├── admin/                      <-- NUEVA CARPETA (Aislada de tokens IA)
  │   ├── components/
  │   │   ├── MasterPartidasTable.tsx
  │   │   ├── AuditLogViewer.tsx
  │   │   └── RoleManager.tsx
  │   └── store/
  │       └── useAdminStore.ts
  ├── components/                 <-- App Principal (Registro de Metrados)
  └── ...
```

---

## 📅 Próximos Pasos Sugeridos

1.  **Actualizar `ecosistema_usuarios`:** Añadir una columna `can_edit_master` (boolean) para identificar a los 4 encargados.
2.  **Crear la tabla `logs_maestro_partidas`:** En Supabase para el tracking.
3.  **Desarrollar la interfaz `MasterEditor`:** Una vista estilo hoja de cálculo fluida (usando la virtualización que ya implementamos) pero diseñada para el catálogo, no para los metrados.

---

> [!IMPORTANT]
> **Beneficio de la Separación:** Al estar en una carpeta `admin/`, podemos pedirle a la IA que trabaje específicamente allí solo cuando sea necesario, sin que lea todo el contexto del registro diario, optimizando el uso de recursos y manteniendo la estabilidad del "core" de producción.

¿Te gustaría que empiece por crear la estructura de base de datos en Supabase para habilitar estos permisos?
