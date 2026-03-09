#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SCRIPT INTEGRAL DE LIMPIEZA DE BASE DE DATOS
Valida, corrige y regenera datos limpios
"""

import pandas as pd
import json
import re
import os
from pathlib import Path
from typing import Dict, List, Tuple

class LimpiadordeDatos:
    def __init__(self):
        self.reportes = {}
        self.datos_limpios = {}
    
    def log(self, mensaje):
        print(f"[INFO] {mensaje}")
    
    def error(self, mensaje):
        print(f"[ERROR] {mensaje}")
    
    def advertencia(self, mensaje):
        print(f"[⚠️ ADVERTENCIA] {mensaje}")
    
    def validar_codigo_wbs(self, codigo: str) -> Tuple[bool, str]:
        """Valida formato del código WBS"""
        if not codigo or str(codigo).lower() in ['nan', '']:
            return False, "Código vacío"
        
        codigo = str(codigo).strip()
        
        # Formato esperado: OE.1.2.3...
        if not codigo.startswith("OE."):
            return False, f"No inicia con 'OE.': {codigo}"
        
        partes = codigo.split(".")
        if len(partes) < 2:
            return False, f"Estructura incompleta: {codigo}"
        
        # Validar que todos después de OE sean números
        for parte in partes[1:]:
            if not parte.isdigit():
                return False, f"Dígitos inválidos: {parte}"
        
        return True, "OK"
    
    def limpiar_descripcion(self, texto: str) -> str:
        """Limpia descripciones de caracteres problemáticos"""
        if not texto or pd.isna(texto):
            return ""
        
        texto = str(texto).strip()
        
        # Remover caracteres de control
        texto = re.sub(r'[\x00-\x1f]', '', texto)
        
        # Remover espacios múltiples
        texto = re.sub(r'\s+', ' ', texto)
        
        # Remover emojis y caracteres especiales raros (pero preservar acentos)
        texto = re.sub(r'[^\w\sáéíóúñÁÉÍÓÚÑ\.\,\-\(\)\/#"\'°\+\*\=\:\;\&]', '', texto)
        
        return texto.strip()
    
    def analizar_archivo(self, ruta: Path) -> Dict:
        """Analiza un archivo Excel completo"""
        self.log(f"Analizando: {ruta.name}")
        
        resultado = {
            "archivo": ruta.name,
            "hojas": {},
            "problemas_encontrados": 0
        }
        
        try:
            xl = pd.ExcelFile(ruta)
            
            for sheet in xl.sheet_names:
                self.log(f"  Procesando hoja: {sheet}")
                df = pd.read_excel(ruta, sheet_name=sheet, header=None)
                
                resumen_hoja = {
                    "filas": df.shape[0],
                    "columnas": df.shape[1],
                    "codigos_procesados": 0,
                    "filas_vacias": 0,
                    "problemas": []
                }
                
                codigos_vistos = {}
                nuevas_filas = []
                
                for idx, row in df.iterrows():
                    codigo = str(row.iloc[0]).strip() if pd.notna(row.iloc[0]) else ""
                    descripcion = str(row.iloc[1]).strip() if len(row) > 1 and pd.notna(row.iloc[1]) else ""
                    
                    # Detectar fila vacía
                    if not codigo and not descripcion:
                        resumen_hoja["filas_vacias"] += 1
                        continue  # Saltar filas completamente vacías
                    
                    # Limpiar descripción
                    if descripcion:
                        desc_limpia = self.limpiar_descripcion(descripcion)
                    else:
                        desc_limpia = ""
                    
                    # Validar código si existe
                    if codigo and codigo not in ['nan', '']:
                        es_valido, msg = self.validar_codigo_wbs(codigo)
                        
                        if not es_valido:
                            resumen_hoja["problemas"].append({
                                "tipo": "código_inválido",
                                "fila": idx + 1,
                                "codigo": codigo,
                                "razon": msg
                            })
                            resultado["problemas_encontrados"] += 1
                            continue  # Saltar este registro problemático
                        
                        # Detectar duplicados
                        if codigo in codigos_vistos:
                            resumen_hoja["problemas"].append({
                                "tipo": "duplicado",
                                "codigo": codigo,
                                "primera_aparicion": codigos_vistos[codigo],
                                "segunda_aparicion": idx
                            })
                            resultado["problemas_encontrados"] += 1
                            continue  # Saltar duplicado
                        
                        codigos_vistos[codigo] = idx
                        resumen_hoja["codigos_procesados"] += 1
                    
                    # Agregar fila limpia
                    nueva_fila = [codigo, desc_limpia]
                    
                    # Preservar columnas adicionales
                    for col_idx in range(2, len(row)):
                        val = row.iloc[col_idx]
                        if pd.notna(val):
                            nueva_fila.append(str(val).strip())
                        else:
                            nueva_fila.append("")
                    
                    nuevas_filas.append(nueva_fila)
                
                # Crear DataFrame limpio
                if nuevas_filas:
                    df_limpio = pd.DataFrame(nuevas_filas)
                    resumen_hoja["filas_validas"] = len(nuevas_filas)
                    
                    # Guardar datos limpios
                    self.datos_limpios[f"{ruta.stem}_{sheet}"] = df_limpio
                else:
                    resumen_hoja["filas_validas"] = 0
                
                resultado["hojas"][sheet] = resumen_hoja
        
        except Exception as e:
            self.error(f"Error procesando {ruta}: {e}")
            resultado["error"] = str(e)
        
        return resultado
    
    def generar_reporte(self, reportes: List[Dict]) -> str:
        """Genera reporte detallado"""
        output = "\n" + "="*80 + "\n"
        output += "📊 REPORTE DE LIMPIEZA DE BASE DE DATOS\n"
        output += "="*80 + "\n\n"
        
        problemas_totales = sum(r.get("problemas_encontrados", 0) for r in reportes)
        
        for rep in reportes:
            output += f"\n📄 {rep['archivo']}\n"
            output += "-" * 40 + "\n"
            
            for sheet, info in rep.get("hojas", {}).items():
                output += f"\n  Hoja: {sheet}\n"
                output += f"    • Filas totales: {info['filas']}\n"
                output += f"    • Filas válidas: {info.get('filas_validas', 0)}\n"
                output += f"    • Filas vacías (eliminadas): {info['filas_vacias']}\n"
                output += f"    • Códigos procesados: {info['codigos_procesados']}\n"
                
                if info['problemas']:
                    output += f"    • Problemas encontrados: {len(info['problemas'])}\n"
                    for prob in info['problemas'][:5]:
                        output += f"      - {prob['tipo']}: {prob.get('codigo', 'N/A')}\n"
                    if len(info['problemas']) > 5:
                        output += f"      ... y {len(info['problemas']) - 5} más\n"
        
        output += "\n" + "="*80 + "\n"
        output += f"✅ RESUMEN: {problemas_totales} problemas detectados y limpiados\n"
        output += "="*80 + "\n\n"
        
        return output
    
    def guardar_datos_limpios(self, archivo_original: Path):
        """Guarda datos limpios en archivo de backup y regenerado"""
        for clave, df in self.datos_limpios.items():
            partes = clave.rsplit("_", 1)
            if len(partes) == 2:
                nombre_base = partes[0]
                nombre_sheet = partes[1]
                
                # Crear archivo limpio
                archivo_limpio = Path(f"{nombre_base}_CLEANED.xlsx")
                
                if archivo_limpio.exists():
                    archivo_backup = Path(f"{nombre_base}_CLEANED_BACKUP_{pd.Timestamp.now().strftime('%Y%m%d_%H%M%S')}.xlsx")
                    archivo_limpio.rename(archivo_backup)
                    self.log(f"Backup creado: {archivo_backup.name}")
                
                # Escribir archivo limpio
                try:
                    df.to_excel(archivo_limpio, sheet_name=nombre_sheet, index=False, header=False)
                    self.log(f"✅ Archivo limpio guardado: {archivo_limpio.name}")
                except Exception as e:
                    self.error(f"Error guardando {archivo_limpio}: {e}")

def main():
    print("\n" + "="*80)
    print("🧹 INICIANDO LIMPIEZA INTEGRAL DE BASE DE DATOS")
    print("="*80 + "\n")
    
    limpiador = LimpiadordeDatos()
    
    archivos_procesar = [
        Path("DATOS_LIMPIOS_PROCESAR.xlsx"),
        Path("Base_datos_Modificaciones.xlsm"),
    ]
    
    reportes = []
    
    for archivo in archivos_procesar:
        if archivo.exists():
            reporte = limpiador.analizar_archivo(archivo)
            reportes.append(reporte)
        else:
            limpiador.advertencia(f"No encontrado: {archivo.name}")
    
    # Mostrar reporte
    print(limpiador.generar_reporte(reportes))
    
    # Guardar datos limpios
    if limpiador.datos_limpios:
        print("\n💾 Guardando datos limpios...\n")
        for archivo in archivos_procesar:
            if archivo.exists():
                limpiador.guardar_datos_limpios(archivo)
    
    print("\n✅ LIMPIEZA COMPLETADA\n")

if __name__ == "__main__":
    main()
