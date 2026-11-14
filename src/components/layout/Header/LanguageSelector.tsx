'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LANGUAGES } from '@/constants/navigation';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-[#0F0F12] border border-[#252525] hover:border-[#1374DF]/60 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1374DF]"
      >
        <Globe className="w-3.5 h-3.5 text-white/70" />
        <span>{selectedLang}</span>
        <ChevronDown
          className={`w-3 h-3 text-white/50 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#1374DF]' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl bg-[#0F0F12] border border-[#252525] shadow-xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedLang(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                  isSelected
                    ? 'text-[#1374DF] bg-[#1374DF]/10'
                    : 'text-white/80 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#1374DF]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
