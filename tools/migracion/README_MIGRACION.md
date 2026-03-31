# 🚀 Guía de Migración Universal (V21)

Esta herramienta te permite importar datos de cualquier archivo Excel a la nueva estructura de partidas del sistema, sin depender de formatos fijos.

## Comando de Ejecución

Usa el script `budget_migrator.py` con los parámetros que necesites:

```bash
python tools/migracion/budget_migrator.py --file "TU_EXCEL.xlsx" --sheet "Hospital" --item C --metrado E --presupuesto F --pu G
```

### Parámetros Disponibles:
- `--file`: Ruta al archivo Excel (ej: `COPILADO_METRADO_VALO_ACUMULADO.xlsx`).
- `--sheet`: Nombre de la hoja a procesar. Si usas `"AMBOS"`, procesará "Presupuesto Hospital" y "Presupuesto Contingencia" automáticamente.
- `--item-col`: Letra de la columna donde están los códigos `OE.`. Si no se da, el script busca una columna que contenga "ITEM".
- `--metrado-ant-col`: Letra de la columna con el **Metrado Anterior Acumulado**.
- `--presupuesto-ant-col`: Letra de la columna con el **Presupuesto Anterior Acumulado (Soles)**.
- `--pu-col`: Letra de la columna con el **Precio Unitario (APU)**.
- `--metrado-prog-col`: (Opcional) Letra de la columna con el **Metrado Contractual/Programado**.

### Ejemplo Práctico (Tu Excel Actual):
Para regenerar tu archivo de importación actual usando la lógica que definimos:
```bash
python tools/migracion/budget_migrator.py --file "COPILADO_METRADO_VALO_ACUMULADO.xlsx" --sheet "AMBOS" --item C --metrado-ant G --presupuesto-ant F
```

> [!TIP]
> El script es inteligente: si solo tienes el Metrado y el Presupuesto, él calculará automáticamente el PU (Precio Unitario) antes de generar el SQL.

## Archivo de Salida
El script generará un archivo `migration_output.sql` por defecto. 
1. Copia su contenido.
2. Pégalo en el **SQL Editor** de Supabase.
3. Ejecuta.

¡Listo! Tus partidas estarán actualizadas con la nueva lógica histórica y contractual.
