import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
    value: string;
    options: string[];
    onSelect: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}

export const Select: React.FC<SelectProps> = ({ value, options, onSelect, placeholder = "Seleccionar...", label, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

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
        <div ref={wrapperRef} className={`relative w-full ${className}`}>
            {label && <label className="text-xs font-semibold text-gray-600 block mb-1">{label}</label>}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-3 py-2 border rounded-md text-sm text-left flex justify-between items-center transition-all outline-none
                    ${isOpen ? 'border-primary ring-1 ring-primary ring-opacity-20 shadow-sm bg-white' : 'border-blue-100 bg-blue-50/30 hover:border-blue-200'}
                `}
            >
                <span className={value ? "text-gray-800 font-medium" : "text-gray-400"}>
                    {value || placeholder}
                </span>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-xl max-h-48 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`px-4 py-2 text-sm cursor-pointer transition-colors
                                    ${value === option ? 'bg-primary/10 text-primary font-bold' : 'text-gray-600 hover:bg-slate-50'}
                                `}
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
