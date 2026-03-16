import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import type { Partida } from '../../types';

interface SimpleSearchInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (val: string) => void;
    onSelect: (partida: Partida) => void;
    suggestions: Partida[];
    searchField: 'codigo' | 'descripcion';
    className?: string;
}

export const SimpleSearchInput: React.FC<SimpleSearchInputProps> = ({ 
    label, 
    placeholder, 
    value, 
    onChange, 
    onSelect, 
    suggestions, 
    searchField,
    className 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const filtered = value.trim() === '' 
        ? [] 
        : suggestions.filter(p => p[searchField].toLowerCase().includes(value.toLowerCase())).slice(0, 5);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className={`space-y-1 relative ${className}`}>
            <label className="text-[9px] font-bold text-slate-500 uppercase">{label}</label>
            <div className="relative">
                <input 
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold focus:border-blue-500 outline-none pr-10"
                    value={value}
                    onChange={e => {
                        onChange(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    placeholder={placeholder}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-300" />
            </div>

            {isOpen && filtered.length > 0 && (
                <div className="absolute z-[210] w-full mt-1 bg-white border border-slate-100 rounded-xl shadow-xl max-h-40 overflow-auto animate-in fade-in slide-in-from-top-1 duration-200">
                    <ul className="py-1">
                        {filtered.map((p) => (
                            <li 
                                key={p.id} 
                                className="px-3 py-2 hover:bg-blue-50 cursor-pointer flex flex-col gap-0.5 border-b border-slate-50 last:border-0"
                                onClick={() => {
                                    onSelect(p);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="text-[10px] font-bold text-slate-800 line-clamp-1">{p.descripcion}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[8px] font-mono text-blue-500 font-bold">{p.codigo}</span>
                                    {/* @ts-ignore - Usando el badge global si existe */}
                                    {window.RenderModificacionBadge && window.RenderModificacionBadge(p.modificacion)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
