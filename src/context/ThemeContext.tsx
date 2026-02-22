"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'blue' | 'green' | 'red';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('blue'); // Default to blue

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div data-theme={theme} className="min-h-screen transition-colors duration-700 selection:bg-accent selection:text-black">
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
