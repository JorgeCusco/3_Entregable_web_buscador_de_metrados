#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de análisis completo de la base de datos para detectar problemas de integridad
"""

import pandas as pd
import json
import re
from pathlib import Path

def validate_wbs_code(codigo):
    """Valida que un código WBS tenga formato correcto"""
    if not codigo or str(codigo).lower() in ['nan', '']:
        return False, "Código vacío"
    
    codigo = str(codigo).strip()
    
    # Patrón esperado: OE.X.X.X... donde X son números
    if not codigo.startswith("OE."):
        return False, f"No comienza con 'OE.': {codigo}"
    
    partes = codigo.split(".")
    if len(partes) < 2:
        return False, f"Estructura incompleta: {codigo}"
    
    # Validar que después de OE, todos sean números
    for i, parte in enumerate(partes[1:], 1):
        if not parte.isdigit():
            return False, f"Parte no numérica en posición {i}: {parte}"
    
    return True, "OK"

def analizar_excel(file_path):
    """Analiza un archivo Excel y reporta problemas"""
    print(f"\n{'='*80}")
    print(f"ANALIZANDO: {file_path}")
    print(f"{'='*80}")
    
    try:
        xl = pd.ExcelFile(file_path)
        hojas = xl.sheet_names
        print(f"Hojas encontradas: {hojas}\n")
        
        for sheet in hojas:
            print(f"\n--- Hoja: {sheet} ---")
            df = pd.read_excel(file_path, sheet_name=sheet, header=None)
            
            print(f"Dimensiones: {df.shape[0]} filas x {df.shape[1]} columnas")
            
            problemas = {
                "codigos_invalidos": [],
                "codigos_duplicados": [],
                "descripciones_vacias": [],
                "caracteres_problematicos": [],
                "filas_vacías": 0
            }
            
            codigos_vistos = {}
            
            for idx, row in df.iterrows():
                codigo = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ""
                descripcion = str(row.iloc[1]).strip() if len(row) > 1 and pd.notna(row.iloc[1]) else ""
                
                # Detectar filas completamente vacías
                if not codigo and not descripcion:
                    problemas["filas_vacías"] += 1
                    continue
                
                # Validar código
                if codigo and codigo not in ['nan', '']:
                    es_valido, msg = validate_wbs_code(codigo)
                    if not es_valido:
                        problemas["codigos_invalidos"].append({
                            "fila": idx + 1,
                            "codigo": codigo,
                            "razon": msg,
                            "descripcion": descripcion[:50]
                        })
                    else:
                        # Detectar duplicados
                        if codigo in codigos_vistos:
                            problemas["codigos_duplicados"].append({
                                "codigo": codigo,
                                "primera_fila": codigos_vistos[codigo] + 1,
                                "segunda_fila": idx + 1
                            })
                        else:
                            codigos_vistos[codigo] = idx
                
                # Detectar descripciones vacías en partidas
                if codigo and codigo.startswith("OE.") and not descripcion:
                    problemas["descripciones_vacias"].append({
                        "fila": idx + 1,
                        "codigo": codigo
                    })
                
                # Detectar caracteres problemáticos (emojis, caracteres especiales raros)
                if descripcion:
                    if not re.match(r'^[\w\séáéíóúñÁÉÍÓÚÑ\.\,\-\(\)\/#"\'°\+\*\=\:\;]+$', descripcion):
                        problemas["caracteres_problematicos"].append({
                            "fila": idx + 1,
                            "codigo": codigo,
                            "descripcion": descripcion[:60]
                        })
            
            # Reporte de problemas
            print(f"\n📊 REPORTE DE PROBLEMAS:")
            print(f"  ❌ Códigos inválidos: {len(problemas['codigos_invalidos'])}")
            if problemas['codigos_invalidos'][:5]:
                for p in problemas['codigos_invalidos'][:5]:
                    print(f"     - Fila {p['fila']}: {p['codigo']} ({p['razon']})")
                if len(problemas['codigos_invalidos']) > 5:
                    print(f"     ... y {len(problemas['codigos_invalidos']) - 5} más")
            
            print(f"  ⚠️  Códigos duplicados: {len(problemas['codigos_duplicados'])}")
            if problemas['codigos_duplicados'][:5]:
                for p in problemas['codigos_duplicados'][:5]:
                    print(f"     - {p['codigo']}: filas {p['primera_fila']} y {p['segunda_fila']}")
            
            print(f"  ❌ Descripciones vacías: {len(problemas['descripciones_vacias'])}")
            if problemas['descripciones_vacias'][:5]:
                for p in problemas['descripciones_vacias'][:5]:
                    print(f"     - Fila {p['fila']}: {p['codigo']}")
            
            print(f"  ⚠️  Caracteres problemáticos: {len(problemas['caracteres_problematicos'])}")
            if problemas['caracteres_problematicos'][:5]:
                for p in problemas['caracteres_problematicos'][:5]:
                    print(f"     - Fila {p['fila']}: {p['codigo']} - {p['descripcion']}")
            
            print(f"  ⏸️  Filas completamente vacías: {problemas['filas_vacías']}")
            
            # Primeras filas de vista previa
            print(f"\n📋 VISTA PREVIA (primeras 5 filas):")
            for i, row in df.head(5).iterrows():
                print(f"  Fila {i+1}: {row.iloc[0]} | {str(row.iloc[1])[:50]}")
    
    except Exception as e:
        print(f"❌ Error al procesar: {e}")

# Ejecutar análisis
if __name__ == "__main__":
    bases_datos = [
        "DATOS_LIMPIOS_PROCESAR.xlsx",
        "Base_datos_Modificaciones.xlsm",
        "Base_datos_MODIF_2.xlsx",
    ]
    
    for bd in bases_datos:
        path = Path(bd)
        if path.exists():
            analizar_excel(str(path))
        else:
            print(f"\n❌ No encontrado: {bd}")
    
    print(f"\n{'='*80}")
    print("ANÁLISIS COMPLETADO")
    print(f"{'='*80}\n")
