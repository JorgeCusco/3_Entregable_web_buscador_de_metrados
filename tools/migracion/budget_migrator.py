import pandas as pd
import os
import argparse
import sys
from datetime import datetime

"""
HERRAMIENTA UNIVERSAL DE MIGRACIÓN DE PRESUPUESTO (V21)
------------------------------------------------------
Este script permite mapear columnas de un Excel a la nueva estructura de 
catalogo_partidas en Supabase.

Cálculos automáticos:
- Si falta el PU (Precio Unitario), se calcula como: Presupuesto / Metrado.
- Si falta el Presupuesto, se calcula como: Metrado * PU.
"""

def parse_args():
    parser = argparse.ArgumentParser(description='Universal Budget Migrator to Supabase (SQL Generator)')
    parser.add_argument('--file', type=str, required=True, help='Ruta al archivo Excel (.xlsx o .xls)')
    parser.add_argument('--sheet', type=str, default='Hospital', help='Nombre de la hoja (o "AMBOS" para Hospital y Contingencia)')
    parser.add_argument('--item-col', type=str, help='Nombre o letra de la columna con el CÓDIGO (ITEM/OE). Si no se da, se busca "ITEM".')
    parser.add_argument('--metrado-ant-col', type=str, help='Columna para metrado_anterior_acumulado')
    parser.add_argument('--presupuesto-ant-col', type=str, help='Columna para valorizacion_anterior (Soles)')
    parser.add_argument('--pu-col', type=str, help='Columna para pu_actual')
    parser.add_argument('--metrado-prog-col', type=str, help='Columna para metrado_programado (Contractual)')
    parser.add_argument('--presupuesto-prog-col', type=str, help='Columna para valorizacion_programada (Soles Contractuales)')
    parser.add_argument('--clear-prog', action='store_true', help='Añadir SQL para vaciar metrado_programado y valorizacion_programada antes de insertar')
    parser.add_argument('--output', type=str, default='migration_output.sql', help='Nombre del archivo SQL generado')
    return parser.parse_args()

def col_to_index(col_str):
    """Convierte letras de Excel (A, B, C...) a índices (0, 1, 2...)"""
    if not col_str: return None
    if col_str.isdigit(): return int(col_str)
    
    col_str = col_str.upper()
    index = 0
    for char in col_str:
        index = index * 26 + (ord(char) - ord('A') + 1)
    return index - 1

def safe_float(val):
    try:
        if pd.notnull(val):
            # Limpiar posibles strings con unidades o comas
            text_val = str(val).split()[0].replace(',', '')
            return float(text_val)
    except:
        pass
    return 0.0

def process_sheet(df, args, project_label):
    sql_lines = []
    sql_lines.append(f"\n-- SECCIÓN: {project_label} ({datetime.now().strftime('%Y-%m-%d %H:%M')})")
    
    # Intentar detectar base_col (ITEM)
    base_col = -1
    if args.item_col:
        base_col = col_to_index(args.item_col)
    else:
        for idx, col in enumerate(df.columns):
            if df[col].astype(str).str.contains('ITEM', case=False).any():
                base_col = idx
                break
    
    if base_col == -1:
        print(f"ERROR: No se encontró la columna 'ITEM' en la hoja {project_label}. Usa --item-col.")
        return []

    # Mapeo de índices
    m_ant_idx = col_to_index(args.metrado_ant_col)
    p_ant_idx = col_to_index(args.presupuesto_ant_col)
    pu_idx = col_to_index(args.pu_col)
    m_prog_idx = col_to_index(args.metrado_prog_col)
    v_prog_idx = col_to_index(args.presupuesto_prog_col)

    count = 0
    for index, row in df.iterrows():
        raw_code = str(row[base_col]).strip() if pd.notnull(row[base_col]) else ""
        
        # Filtro por códigos OE. (Estructura estándar de partidas)
        if 'OE.' in raw_code.upper():
            code = raw_code.rstrip('.')
            
            m_ant = safe_float(row[m_ant_idx]) if m_ant_idx is not None else 0.0
            p_ant = safe_float(row[p_ant_idx]) if p_ant_idx is not None else 0.0
            pu = safe_float(row[pu_idx]) if pu_idx is not None else 0.0
            m_prog = safe_float(row[m_prog_idx]) if m_prog_idx is not None else 0.0
            v_prog = safe_float(row[v_prog_idx]) if v_prog_idx is not None else 0.0

            # Lógica de autocompletado de datos financieros
            if pu == 0 and m_ant > 0 and p_ant > 0:
                pu = p_ant / m_ant
            elif p_ant == 0 and m_ant > 0 and pu > 0:
                p_ant = m_ant * pu
            
            # Valorización programada (Soles contractuales) si no se provee
            if v_prog == 0 and m_prog > 0 and pu > 0:
                v_prog = m_prog * pu

            if any([m_ant, p_ant, pu, m_prog, v_prog]):
                # Generar UPDATE con los nuevos campos de Refactor V21
                set_clause = []
                if m_ant > 0 or p_ant > 0:
                    set_clause.append(f"metrado_anterior_acumulado = {m_ant:.4f}")
                    set_clause.append(f"valorizacion_anterior = {p_ant:.4f}")
                
                if pu > 0:
                    set_clause.append(f"pu_actual = {pu:.4f}")
                
                if m_prog > 0:
                    set_clause.append(f"metrado_programado = {m_prog:.4f}")
                
                if v_prog > 0:
                    set_clause.append(f"valorizacion_programada = {v_prog:.4f}")
                
                if set_clause:
                    sql = f"UPDATE catalogo_partidas SET {', '.join(set_clause)} WHERE codigo = '{code}';"
                    sql_lines.append(sql)
                    count += 1

    print(f"✅ Procesados {count} partidas para {project_label}")
    return sql_lines

def main():
    args = parse_args()
    
    if not os.path.exists(args.file):
        print(f"Error: El archivo {args.file} no existe.")
        sys.exit(1)

    print(f"🚀 Iniciando Migración Universal: {args.file}")
    
    output_sql = []
    output_sql.append("-- MIGRACIÓN GENERADA POR UNIVERSAL BUDGET MIGRATOR")
    output_sql.append("BEGIN;")

    if args.clear_prog:
        print("🧹 Añadiendo sentencia de limpieza de columnas programadas...")
        output_sql.append("-- Limpieza inicial solicitada")
        output_sql.append("UPDATE catalogo_partidas SET metrado_programado = 0, valorizacion_programada = 0;")
        output_sql.append("")

    sheets_to_process = []
    if args.sheet.upper() == 'AMBOS':
        # Caso especial para el flujo del Hospital/Contingencia
        sheets_to_process = [
            ('Presupuesto Hospital', 'Hospital'),
            ('Presupuesto Contingencia', 'Contingencia')
        ]
    else:
        sheets_to_process = [(args.sheet, args.sheet)]

    for s_name, label in sheets_to_process:
        try:
            print(f"📖 Leyendo hoja: {s_name}...")
            df = pd.read_excel(args.file, sheet_name=s_name, header=None)
            output_sql.extend(process_sheet(df, args, label))
        except Exception as e:
            print(f"⚠️ Error al procesar hoja {s_name}: {e}")

    output_sql.append("\nCOMMIT;")

    # Guardar resultado
    with open(args.output, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_sql))
    
    print(f"✨ ÉXITO: Archivo SQL generado en: {args.output}")

if __name__ == "__main__":
    main()
