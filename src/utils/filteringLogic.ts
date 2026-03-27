/**
 * ARCHIVO DE REFERENCIA: Mejoras para MetradosTable.tsx
 * Este archivo contiene las funciones mejoradas que deben reemplazar el código actual
 * 
 * Para implementar:
 * 1. Copiar funciones a MetradosTable.tsx o importarlas desde archivo separado
 * 2. Reemplazar las secciones marcadas con "❌ PROBLEMA" por las versiones "✅ SOLUCIÓN"
 * 3. Agregar índices en Supabase (ver instrucciones abajo)
 * 4. Ejecutar npm run build para verificar cambios
 * 5. Probar con datos inconsistentes en autor_usuario
 */

import { normalizeAuthorName, normalizeSpecialty, isValidSpecialty } from '../utils/normalization';
import type { Metrado, Partida } from '../types';
import { SPECIALTY_RULES } from '../data/specialtyConfig';

/**
 * Deduce la especialidad a partir del código de partida (OE.2... -> ESTRUCTURAS)
 */
export const getEspecialidadPorCodigo = (codigo: string): string => {
    if (!codigo) return '';
    const cleanCode = codigo.trim().toUpperCase();
    
    // Buscar la regla que tenga un rango que sea prefijo del código
    for (const rule of SPECIALTY_RULES) {
        if (rule.id === 'TODAS') continue;
        for (const range of rule.ranges) {
            if (cleanCode.startsWith(range.toUpperCase())) {
                return rule.id;
            }
        }
    }
    return '';
};

// ============================================================================
// ✅ SOLUCIÓN 1: Filtro de Autor Mejorado
// ============================================================================

/**
 * Versión mejorada de availableAuthors que genera lista consistente
 * Ubicación original: MetradosTable.tsx líneas 280-295
 * 
 * CAMBIOS:
 * - Normaliza TODOS los autores al generar lista
 * - Retorna valores UPPERCASE para consistencia
 * - Elimina duplicados reales (no solo por casing)
 * - Más rápido con Set en lugar de Map
 */
export const getAvailableAuthorsImproved = (
    metrados: Metrado[],
    especialidad?: string,
    catalogoActivo?: Partida[],
    getEspecialidadPorCodigoFn: (codigo: string) => string = getEspecialidadPorCodigo,
    debug: boolean = false
): string[] => {
    let filtered = metrados;
    
    // Aplicar filtro de especialidad si existe y NO es TODAS
    if (especialidad && especialidad !== 'TODAS') {
        filtered = filtered.filter(m => 
            isMetradoOfSpecialtyImproved(m, especialidad, catalogoActivo || [], getEspecialidadPorCodigoFn, debug)
        );
    }

    // Deduplicar autores (usando Set)
    const authorSet = new Set<string>();
    filtered.forEach(m => {
        if (m.autor_usuario) {
            const normalized = normalizeAuthorName(m.autor_usuario);
            if (normalized) {
                authorSet.add(normalized);
            }
        }
    });

    // Retornar como array ordenado
    return Array.from(authorSet).sort();
};

// ============================================================================
// ✅ SOLUCIÓN 2: Filtrado de Autor Mejorado
// ============================================================================

/**
 * Filtra metrados por autor después de normalización
 * Ubicación original: MetradosTable.tsx líneas 227-234
 * 
 * CAMBIOS:
 * - Normaliza AMBOS valores (filtro y BD) antes de comparar
 * - Comparación exacta, sin includes() que puede dar falsos positivos
 * - Manejo de nulls/undefined
 */
export const filterMetradosByAuthor = (
    metrados: Metrado[],
    filterAuthor: string
): Metrado[] => {
    if (filterAuthor === 'TODOS') {
        return metrados;
    }

    const normalizedFilter = normalizeAuthorName(filterAuthor);
    
    return metrados.filter(m => {
        if (!m.autor_usuario) return false;
        const normalizedAutor = normalizeAuthorName(m.autor_usuario);
        return normalizedAutor === normalizedFilter;
    });
};

// ============================================================================
// ✅ SOLUCIÓN 3: Filtro de Especialidad Mejorado
// ============================================================================

/**
 * Versión mejorada de isMetradoOfSpecialty con validación robusta
 * Ubicación original: MetradosTable.tsx líneas 200-220
 * 
 * CAMBIOS:
 * - Jerarquía clara de fallbacks
 * - Validación antes de cada fallback
 * - Retorna false si no se puede determinar (en lugar de asumir)
 * - Mejor manejo de especializaciones genéricas
 */
export const isMetradoOfSpecialtyImproved = (
    metrado: Metrado,
    specialtyId: string,
    catalogoActivo: Partida[] = [],
    getEspecialidadPorCodigoFn?: (codigo: string) => string,
    debug: boolean = false
): boolean => {
    const targetSpecialty = normalizeSpecialty(specialtyId);
    
    // Si selecciona TODAS, mostrar TODO (incluso registros sin especialidad clara)
    if (targetSpecialty === 'TODAS') {
        return true;
    }

    // NIVEL 1: Verificar especialidad grabada directamente en metrado
    const metradoSpecValue = (metrado.especialidad || '').toString().trim();
    if (metradoSpecValue && isValidSpecialty(metradoSpecValue)) {
        const metradoSpec = normalizeSpecialty(metradoSpecValue);
        const matches = metradoSpec === targetSpecialty;
        if (debug && matches) console.log(`      ✅ Match Nivel 1 (Directo): ${metradoSpec} === ${targetSpecialty}`);
        return matches;
    }

    // NIVEL 2: Buscar especialidad en partida del catálogo
    // Solo si el metrado tiene algún ID de vinculación válido
    if (metrado.partida_id || metrado.custom_partida_id) {
        const linkedPartida = catalogoActivo.find(p => {
            if (metrado.partida_id && p.id === metrado.partida_id) return true;
            if (metrado.custom_partida_id && p.id === metrado.custom_partida_id) return true;
            return false;
        });

        if (linkedPartida?.especialidad && isValidSpecialty(linkedPartida.especialidad)) {
            const partidaSpec = normalizeSpecialty(linkedPartida.especialidad);
            const matches = partidaSpec === targetSpecialty;
            if (debug && matches) console.log(`      ✅ Match Nivel 2 (Partida ${linkedPartida.codigo}): ${partidaSpec} === ${targetSpecialty}`);
            return matches;
        }
    }

    // NIVEL 3: Fallback mediante deducción de código
    if (getEspecialidadPorCodigoFn) {
        const deducedSpec = getEspecialidadPorCodigoFn(metrado.codigo_partida);
        if (deducedSpec && isValidSpecialty(deducedSpec)) {
            const deducedNormalized = normalizeSpecialty(deducedSpec);
            const matches = deducedNormalized === targetSpecialty;
            if (debug && matches) console.log(`      ✅ Match Nivel 3 (Código ${metrado.codigo_partida} -> ${deducedNormalized})`);
            return matches;
        }
    }

    if (debug) console.log(`      ❌ No match para ${metrado.id} en ${targetSpecialty}`);
    return false;
};

/**
 * Filtra metrados por especialidad
 */
export const filterMetradosBySpecialty = (
    metrados: Metrado[],
    specialty: string,
    catalogoActivo: Partida[] = [],
    getEspecialidadPorCodigoFn?: (codigo: string) => string
): Metrado[] => {
    if (specialty === 'TODAS') {
        return metrados;
    }

    return metrados.filter(m => 
        isMetradoOfSpecialtyImproved(m, specialty, catalogoActivo, getEspecialidadPorCodigoFn)
    );
};

// ============================================================================
// ✅ SOLUCIÓN 4: Filtro de Fecha Mejorado
// ============================================================================

/**
 * Filtra metrados por rango de fechas (NUEVO: rango en lugar de igualdad)
 * 
 * CAMBIOS:
 * - Soporta rango desde-hasta
 * - Comparación correcta de fechas (no startsWith)
 * - Manejo de fechas inválidas
 * 
 * @param metrados Array de metrados a filtrar
 * @param dateFrom Fecha mínima (formato YYYY-MM-DD)
 * @param dateTo Fecha máxima (formato YYYY-MM-DD)
 * @returns Metrados dentro del rango
 */
export const filterMetradosByDateRange = (
    metrados: Metrado[],
    dateFrom: string = '',
    dateTo: string = ''
): Metrado[] => {
    if (!dateFrom && !dateTo) {
        return metrados;
    }

    return metrados.filter(m => {
        const recordDate = m.fecha || '';
        
        // Validar formato de fecha
        if (!/^\d{4}-\d{2}-\d{2}$/.test(recordDate)) {
            return false;
        }

        // Aplicar rango
        if (dateFrom && recordDate < dateFrom) {
            return false;
        }
        if (dateTo && recordDate > dateTo) {
            return false;
        }

        return true;
    });
};

/**
 * Versión simplificada para una sola fecha (igualdad exacta)
 */
export const filterMetradosByDate = (
    metrados: Metrado[],
    date: string
): Metrado[] => {
    if (!date) {
        return metrados;
    }

    return metrados.filter(m => m.fecha === date);
};

// ============================================================================
// ✅ SOLUCIÓN 5: Filtro Combinado Mejorado
// ============================================================================

/**
 * Combina TODOS los filtros en uno con lógica corregida
 * 
 * CORRECCIONES CRÍTICAS:
 * 1. Proyecto: Excluye explícitamente registros sin proyecto (return false si !m.proyecto)
 * 2. Especialidad: Soporta 'TODAS' para mostrar ambiguos, fallback por código
 * 3. Autor: Soporta 'TODOS' para mostrar todos
 * 4. Debug: Logging opcional para diagnosticar discrepancias local/servidor
 */
export const applyAllFilters = (
    metrados: Metrado[],
    filters: {
        proyecto?: string;
        especialidad?: string;
        autor?: string;
        dateFrom?: string;
        dateTo?: string;
        date?: string;
    },
    catalogoActivo: Partida[] = [],
    debug: boolean = false,
    getEspecialidadPorCodigoFn: (codigo: string) => string = getEspecialidadPorCodigo
): Metrado[] => {
    let result = metrados;
    const startCount = metrados.length;
    const results: Record<string, number> = {};
    
    if (debug) {
        console.group('🔍 DEBUG: applyAllFilters');
        console.log(`📊 Input: ${startCount} metrados`);
        console.log(`🎯 Filters:`, filters);
        console.log(`📚 Catálogo: ${catalogoActivo.length} partidas`);
    }

    // 1️⃣ PRIMERO: Filtro de proyecto (generalmente reduce más)
    // CORRECCIÓN CRÍTICA: Excluir explícitamente registros sin proyecto
    if (filters.proyecto) {
        const before = result.length;
        result = result.filter(m => {
            // Si no tiene proyecto, EXCLUIR (lógica correcta)
            // NO usar: if (!m.proyecto) return true;  ← ESTO ERA EL ERROR
            if (!m.proyecto) return false;
            return m.proyecto.toLowerCase() === filters.proyecto!.toLowerCase();
        });
        results['proyecto'] = result.length;
        if (debug) console.log(`   📋 Proyecto (${filters.proyecto}): ${before} → ${result.length}`);
    }

    // 2️⃣ SEGUNDO: Filtro de especialidad (reduce significativamente)
    if (filters.especialidad && filters.especialidad !== 'TODAS') {
        const before = result.length;
        result = result.filter(m => 
            isMetradoOfSpecialtyImproved(
                m, 
                filters.especialidad!, 
                catalogoActivo, 
                getEspecialidadPorCodigoFn,
                debug
            )
        );
        results['especialidad'] = result.length;
        if (debug) {
            console.log(`   🏗️  Especialidad (${filters.especialidad}): ${before} → ${result.length}`);
            if (before > result.length) {
                console.log(`   ⚠️  Removidos: ${before - result.length}`);
            }
        }
    }

    // 3️⃣ TERCERO: Filtro de autor (después de especialidad, generalmente menos registros)
    if (filters.autor && filters.autor !== 'TODOS') {
        const before = result.length;
        result = filterMetradosByAuthor(result, filters.autor);
        results['autor'] = result.length;
        if (debug) console.log(`   👤 Autor (${filters.autor}): ${before} → ${result.length}`);
    }

    // 4️⃣ CUARTO: Filtro de fecha (simple comparación)
    if (filters.dateFrom || filters.dateTo) {
        const before = result.length;
        result = filterMetradosByDateRange(
            result,
            filters.dateFrom,
            filters.dateTo
        );
        results['fecha'] = result.length;
        if (debug) console.log(`   📅 Fecha (${filters.dateFrom} a ${filters.dateTo}): ${before} → ${result.length}`);
    } else if (filters.date) {
        const before = result.length;
        result = filterMetradosByDate(result, filters.date);
        results['fecha'] = result.length;
        if (debug) console.log(`   📅 Fecha (${filters.date}): ${before} → ${result.length}`);
    }

    if (debug) {
        console.log(`\n✅ Resultado Final: ${result.length} metrados`);
        console.log(`📉 Removidos en total: ${startCount - result.length}`);
        console.log(`📋 Detalles:`, results);
        console.groupEnd();
    }

    return result;
};

// ============================================================================
// SQL QUERIES TO ADD INDEXES (Ejecutar en Supabase)
// ============================================================================

/**
 * Ejecutar estas queries en Supabase SQL Editor para optimizar búsquedas:
 * 
 * -- Índices individuales para cada filtro
 * CREATE INDEX idx_metrados_autor_usuario 
 *     ON metrados(autor_usuario);
 * 
 * CREATE INDEX idx_metrados_especialidad 
 *     ON metrados(especialidad);
 * 
 * CREATE INDEX idx_metrados_fecha 
 *     ON metrados(fecha DESC);
 * 
 * CREATE INDEX idx_metrados_proyecto 
 *     ON metrados(proyecto);
 * 
 * -- Índice compuesto para queries frecuentes
 * CREATE INDEX idx_metrados_proyecto_autor 
 *     ON metrados(proyecto, autor_usuario) 
 *     WHERE proyecto IS NOT NULL;
 * 
 * CREATE INDEX idx_metrados_especialidad_fecha 
 *     ON metrados(especialidad, fecha DESC);
 * 
 * -- Verificar índices creados
 * SELECT indexname FROM pg_indexes WHERE tablename = 'metrados';
 */

// ============================================================================
// DEBUGGING HELPERS
// ============================================================================

/**
 * Loggers para debuggear filtros (descomentar si necesario)
 */
export const debugFilters = {
    logAuthorNormalization: (name: string) => {
        const normalized = normalizeAuthorName(name);
        console.log(`📝 Author: "${name}" → "${normalized}"`);
        return normalized;
    },

    logSpecialtyFilter: (antes: Metrado[], despues: Metrado[], specialty: string) => {
        console.log(`🏗️  Specialty "${specialty}": ${antes.length} → ${despues.length} registros`);
    },

    logAuthorFilter: (antes: Metrado[], despues: Metrado[], author: string) => {
        console.log(`👤 Author "${author}": ${antes.length} → ${despues.length} registros`);
    },

    logDateFilter: (antes: Metrado[], despues: Metrado[], dateFrom: string, dateTo: string) => {
        console.log(`📅 Date range (${dateFrom || 'sin límite'} to ${dateTo || 'sin límite'}): ${antes.length} → ${despues.length} registros`);
    },

    logAllFilters: (
        originalCount: number,
        finalCount: number,
        removedBySpec: number,
        removedByAuthor: number,
        removedByDate: number
    ) => {
        console.group('🔍 Filter Summary');
        console.log(`Total original: ${originalCount}`);
        console.log(`Removidos por especialidad: ${removedBySpec}`);
        console.log(`Removidos por autor: ${removedByAuthor}`);
        console.log(`Removidos por fecha: ${removedByDate}`);
        console.log(`Total final: ${finalCount}`);
        console.groupEnd();
    }
};
