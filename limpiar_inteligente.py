#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LIMPIEZA AVANZADA: Entiende la estructura real de APUS
"""

import pandas as pd
import json
from pathlib import Path

def analizar_estructura_apus():
    """Analiza la estructura de la hoja APUS para entenderla"""
    print("\n🔍 ANALIZANDO ESTRUCTURA DE HOJA APUS...\n")
    
    archivo = Path("DATOS_LIMPIOS_PROCESAR.xlsx")
    df = pd.read_excel(archivo, sheet_name="APUS", header=None, nrows=50)
    
    print("Primeras 50 filas de APUS:")
    print("-" * 100)
    for idx, row in df.iterrows():
        print(f"Fila {idx+1}: {' | '.join(str(v)[:30] for v in row.head(5))}")
    
    print("\n" + "="*100)
    print("ESTRUCTURA DETECTADA:")
    print("- Las filas parecen contener información de partidas y sus recursos")
    print("- Necesitamos extraer solo las líneas de PARTIDA válidas")
    print("="*100)

def limpiar_inteligentemente():
    """Limpieza inteligente que preserva la estructura de APUS"""
    print("\n🧹 INICIANDO LIMPIEZA INTELIGENTE...\n")
    
    archivo = Path("DATOS_LIMPIOS_PROCESAR.xlsx")
    xl = pd.ExcelFile(archivo)
    
    # Procesar cada hoja diferente
    resultados = {}
    
    for sheet in xl.sheet_names:
        print(f"\n📄 Procesando: {sheet}")
        df = pd.read_excel(archivo, sheet_name=sheet, header=None)
        
        if sheet == "APUS":
            # Estructura especial: buscamos líneas que empiezan con "OE."
            filas_partidas = []
            for idx, row in df.iterrows():
                codigo = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ""
                
                # Solo preservar filas que contienen partidas (OE.X.X...)
                if codigo.startswith("OE.") and codigo.count(".") >= 2:
                    filas_partidas.append(row)
            
            df_limpio = pd.DataFrame(filas_partidas) if filas_partidas else pd.DataFrame()
            print(f"   ✓ Extraídas {len(filas_partidas)} partidas válidas de {len(df)} filas")
            resultados[sheet] = df_limpio
        
        elif sheet in ["PREP_Y_METRADO_PROGRAMODO", "METRADO_EJECUTADO_ENERO"]:
            # Hojas de metrados: eliminar filas completamente vacías
            filas_validas = []
            for idx, row in df.iterrows():
                if not all(pd.isna(v) or str(v).strip() == "" for v in row):
                    filas_validas.append(row)
            
            df_limpio = pd.DataFrame(filas_validas) if filas_validas else pd.DataFrame()
            print(f"   ✓ Preservadas {len(filas_validas)} filas válidas de {len(df)} filas")
            resultados[sheet] = df_limpio
        
        else:
            print(f"   ⚠️  Hoja desconocida: preservando como está")
            resultados[sheet] = df
    
    # Guardar archivo limpio consolidado
    archivo_limpio = Path("DATOS_LIMPIOS_PROCESAR_FINAL.xlsx")
    if archivo_limpio.exists():
        backup = Path(f"DATOS_LIMPIOS_PROCESAR_FINAL_BACKUP_{pd.Timestamp.now().strftime('%Y%m%d_%H%M%S')}.xlsx")
        archivo_limpio.rename(backup)
        print(f"\n💾 Backup anterior: {backup.name}")
    
    with pd.ExcelWriter(archivo_limpio, engine='openpyxl') as writer:
        for sheet, df in resultados.items():
            if not df.empty:
                df.to_excel(writer, sheet_name=sheet, index=False, header=False)
    
    print(f"\n✅ Archivo maestro limpio guardado: {archivo_limpio.name}")
    
    # Procesar Base_datos_Modificaciones.xlsm eliminando duplicados
    print(f"\n📄 Procesando: Base_datos_Modificaciones.xlsm")
    bd_mod = Path("Base_datos_Modificaciones.xlsm")
    
    if bd_mod.exists():
        df_mod = pd.read_excel(bd_mod, sheet_name="BD_PARTIDAS", header=None)
        
        # Eliminar duplicados manteniendo primera aparición
        df_mod_sin_dup = df_mod.drop_duplicates(subset=[0], keep='first')
        
        print(f"   ✓ Eliminados {len(df_mod) - len(df_mod_sin_dup)} duplicados")
        
        archivo_mod_limpio = Path("Base_datos_Modificaciones_CLEANED.xlsm")
        if archivo_mod_limpio.exists():
            backup = Path(f"Base_datos_Modificaciones_CLEANED_BACKUP_{pd.Timestamp.now().strftime('%Y%m%d_%H%M%S')}.xlsm")
            archivo_mod_limpio.rename(backup)
        
        with pd.ExcelWriter(archivo_mod_limpio, engine='openpyxl') as writer:
            df_mod_sin_dup.to_excel(writer, sheet_name="BD_PARTIDAS", index=False, header=False)
        
        print(f"✅ Archivo de modificaciones limpio: {archivo_mod_limpio.name}")
    
    print("\n" + "="*80)
    print("✅ LIMPIEZA AVANZADA COMPLETADA")
    print("="*80 + "\n")

if __name__ == "__main__":
    analizar_estructura_apus()
    limpiar_inteligentemente()
