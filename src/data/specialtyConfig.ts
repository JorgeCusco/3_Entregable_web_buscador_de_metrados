export interface SpecialtyRule {
    id: string;
    label: string;
    ranges: string[];
}

export const SPECIALTY_RULES: SpecialtyRule[] = [
    { id: 'TODAS', label: 'TODAS', ranges: ['OE'] },
    { id: 'OBRAS PROVISIONALES', label: 'OBRAS PROVISIONALES', ranges: ['OE.1.1'] },
    { id: 'SEGURIDAD', label: 'SEGURIDAD', ranges: ['OE.1.2'] },
    { id: 'ARQUEOLOGÍA', label: 'ARQUEOLOGÍA', ranges: ['OE.1.3', 'OE.1.4', 'OE.1.5', 'OE.1.6'] },
    { id: 'ESTRUCTURAS', label: 'ESTRUCTURAS', ranges: ['OE.2'] },
    { id: 'ARQUITECTURA', label: 'ARQUITECTURA', ranges: ['OE.3'] },
    { id: 'INSTALACIONES SANITARIAS', label: 'INSTALACIONES SANITARIAS', ranges: ['OE.4'] },
    { id: 'ELÉCTRICAS', label: 'ELÉCTRICAS', ranges: ['OE.5', 'OE.5.1', 'OE.5.2', 'OE.5.3', 'OE.5.4', 'OE.5.5'] },
    { id: 'ELECTROMECÁNICAS', label: 'ELECTROMECÁNICAS', ranges: ['OE.5.6', 'OE.5.7', 'OE.7'] },
    { id: 'COMUNICACIONES', label: 'COMUNICACIONES', ranges: ['OE.6'] },
    { id: 'PLAN DE MANEJO AMBIENTAL', label: 'PLAN DE MANEJO AMBIENTAL', ranges: ['OE.8'] },
    { id: 'EQUIPAMIENTO BIOMÉDICO', label: 'EQUIPAMIENTO BIOMÉDICO', ranges: ['OE.9'] },
];
