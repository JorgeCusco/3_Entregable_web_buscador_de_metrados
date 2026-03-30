import { IFormulaHandler, FormulaFieldName } from '../types';

export const PESOS_ACERO: Record<string, number> = {
    "1/4": 0.254,
    "3/8": 0.560,
    "1/2": 0.994,
    "5/8": 1.550,
    "3/4": 2.240,
    "1": 3.970
};

export class AceroStrategy implements IFormulaHandler {
    id = "ACERO";

    isFieldLocked(fieldName: FormulaFieldName): boolean {
        // En acero, el 'Ancho' no se usa comúnmente (se usa Longitud + Gancho)
        return fieldName === 'ancho_empalme';
    }

    getFieldLabel(fieldName: FormulaFieldName): string {
        switch (fieldName) {
            case 'longitud_area': return 'LONG. RECTA';
            case 'altura_gancho': return 'GANCHOS';
            case 'ancho_empalme': return 'N/A';
            default: return fieldName.toUpperCase();
        }
    }

    calcularParcial(data: any): number {
        const { cantidad, longitud, altura, diametro } = data;
        
        const c = typeof cantidad === 'number' ? cantidad : 0;
        const longitudRecta = typeof longitud === 'number' ? longitud : 0;
        const longitudGancho = typeof altura === 'number' ? altura : 0;
        
        // Limpiar diámetro para buscar en tabla
        const d = (diametro || '1/2"').replace('"', '').trim();
        const factorKg = PESOS_ACERO[d] || 0;
        
        const longitudTotal = longitudRecta + longitudGancho;

        if (c === 0 && longitudTotal === 0) return 0;
        return c * longitudTotal * factorKg;
    }
}
