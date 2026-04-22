// components/LanguageDropdown.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { Languages, Check, ChevronDown } from 'lucide-react';

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageOptions = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' }
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background/50 hover:bg-secondary/30 transition-all duration-200 text-sm font-medium"
      >
        <Languages className="h-4 w-4" />
        <span>{currentLanguage?.native}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-background shadow-lg z-50 overflow-hidden dropdown-animate">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'mr');
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-all duration-200 ${
                language === lang.code
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-secondary/50 text-foreground'
              }`}
            >
              <span>{lang.native}</span>
              {language === lang.code && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}