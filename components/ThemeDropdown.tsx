// components/ThemeDropdown.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop, Check, ChevronDown } from 'lucide-react';

export function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Laptop, label: 'System' }
  ];

  if (!mounted) {
    return (
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background/50">
        <Sun className="h-4 w-4" />
        <ChevronDown className="h-3 w-3" />
      </button>
    );
  }

  const currentTheme = themeOptions.find(opt => opt.id === theme) || themeOptions[2];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-background/50 hover:bg-secondary/30 transition-all duration-200 text-sm font-medium"
      >
        {currentTheme.icon && <currentTheme.icon className="h-4 w-4" />}
        <span>{currentTheme.label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border border-border bg-background shadow-lg z-50 overflow-hidden dropdown-animate">
          {themeOptions.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.id;
            return (
              <button
                key={option.id}
                onClick={() => {
                  setTheme(option.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-secondary/50 text-foreground'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="flex-1 text-left">{option.label}</span>
                {isActive && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}