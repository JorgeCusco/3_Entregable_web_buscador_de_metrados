import { IFormulaHandler } from './types';
import { EstandarStrategy } from './strategies/EstandarStrategy';
import { AceroStrategy } from './strategies/AceroStrategy';
import { HvacStrategy } from './strategies/HvacStrategy';

class FormulaRegistry {
    private strategies: Map<string, IFormulaHandler> = new Map();
    private defaultStrategy: IFormulaHandler;

    constructor() {
        this.defaultStrategy = new EstandarStrategy();
        this.register(this.defaultStrategy);
        this.register(new AceroStrategy());
        this.register(new HvacStrategy());
    }

    register(strategy: IFormulaHandler) {
        this.strategies.set(strategy.id, strategy);
    }

    get(tipoMetrado?: string): IFormulaHandler {
        if (!tipoMetrado) return this.defaultStrategy;
        
        // Manejo especial para HVAC_DUCTO y HVAC_ACCESORIO (usan la misma estrategia lógica)
        if (tipoMetrado.startsWith('HVAC')) return this.strategies.get('HVAC') || this.defaultStrategy;
        
        return this.strategies.get(tipoMetrado) || this.defaultStrategy;
    }
}

export const formulaRegistry = new FormulaRegistry();
