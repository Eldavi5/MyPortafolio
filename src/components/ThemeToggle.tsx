"use client";
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light';
        return (localStorage.getItem('theme') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = document.documentElement;
        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', mode);
    }, [mode]);

    return (
        <button
            onClick={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))}
            aria-label="Cambiar tema"
            className="rounded-md px-3 py-1 text-sm font-medium border card-border bg-background/80 backdrop-blur hover:bg-accent/10 transition-colors"
        >
            {mode === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
    );
}
