El registro de tu **personal obrero** está gestionado de manera híbrida entre un archivo maestro local y la base de datos en la nube. Aquí están las ubicaciones específicas:

### 1. El Archivo Maestro (Excel)

El origen de toda la información de los obreros es el archivo: 📄

Personal_cuadrillas_belem.xlsx Este archivo contiene las columnas de DNI, Nombre Original, Especialidad, Cuadrilla, Categoría, Teléfono, etc.

### 2. El Registro en la Aplicación (JSON)

Para que la aplicación web funcione de forma fluida y rápida en las búsquedas, los datos del Excel se convierten a un formato optimizado en: 📂

src/data/personal.json Aquí es donde la aplicación "lee" la lista para las sugerencias del buscador de obreros, transformando los nombres de "APELLIDO, NOMBRE" a un formato más legible ("Nombre Apellido").

### 3. La Base de Datos (Supabase)

Cuando guardas un metrado, el sistema vincula el registro a la tabla SQL: 🗄️  **Tabla `personal`** : Almacena el ID único, DNI y el nombre formateado. 🗄️  **Tabla `metrados_personal`** : Es la tabla intermedia que permite que un solo metrado tenga **múltiples obreros asociados** (relación N:N).

### 4. Automatización

Si necesitas actualizar la lista de personal:

1. Modificas el Excel.
2. Ejecutas el script ![](vscode-file://vscode-app/c:/Users/Legion/AppData/Local/Programs/Antigravity/resources/app/extensions/theme-symbols/src/icons/files/python.svg)

   scripts/convertir_personal.py.
3. Este script actualiza automáticamente el JSON y deja la data lista para ser sincronizada con la base de datos de producción.

¿Necesitas que realicemos alguna actualización o cambio en la lista de personal actual?
