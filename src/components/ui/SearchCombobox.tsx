import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Partida } from '../../types';

interface SearchComboboxProps {
    partidas: Partida[];
    onSelect: (partida: Partida) => void;
    value: string;
}

export const SearchCombobox: React.FC<SearchComboboxProps> = ({ partidas, onSelect, value }) => {
    const [query, setQuery] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Sync external value
    useEffect(() => {
        setQuery(value);
    }, [value]);

    const filteredPartidas = query.trim() === ''
        ? partidas
        : partidas.filter((partida) => {
            // 1. Tokenización
            const searchTokens = query.toLowerCase().split(' ').filter(token => token.trim() !== '');
            const descLower = partida.descripcion.toLowerCase();
            const codLower = partida.codigo.toLowerCase();

            // 2. Coincidencia Booleana (AND)
            // Cada token DEBE estar presente en la descripción o en el código
            return searchTokens.every(token => descLower.includes(token) || codLower.includes(token));
        });

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return (
        <div ref={wrapperRef} className="relative w-full">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 bg-white shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition-all text-sm outline-none font-medium"
                    placeholder="Buscar por código o descripción..."
                    value={query}
                    onClick={() => setIsOpen(true)}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl max-h-60 overflow-auto glass-panel">
                    {filteredPartidas.length === 0 ? (
                        <div className="p-3 text-sm text-gray-500 text-center">Niguna partida encontrada.</div>
                    ) : (
                        <ul className="py-1">
                            {filteredPartidas.map((partida) => (
                                <li
                                    key={partida.id}
                                    className="px-4 py-2.5 text-sm hover:bg-blue-50 cursor-pointer flex justify-between items-center transition-colors group"
                                    onClick={() => {
                                        onSelect(partida);
                                        setQuery(partida.descripcion);
                                        setIsOpen(false);
                                    }}
                                >
                                    <div className="flex flex-col overflow-hidden pr-2">
                                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors truncate">
                                            {partida.descripcion}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded ml-2 flex-shrink-0">
                                        {partida.codigo} ({partida.unidad})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
