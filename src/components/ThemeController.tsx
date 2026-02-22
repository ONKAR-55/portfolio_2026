"use client";

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeController() {
    const { setTheme } = useTheme();

    useEffect(() => {
        const themes: ('blue' | 'green' | 'red')[] = ['blue', 'green', 'red'];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % themes.length;
            setTheme(themes[currentIndex]);
        }, 7000); // Change every 5 seconds

        return () => clearInterval(intervalId);
    }, [setTheme]);

    return null;
}
