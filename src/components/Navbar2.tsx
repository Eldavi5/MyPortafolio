"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Anclas disponibles en la página principal
const sectionLinks = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#educacion', label: 'Educación' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#contacto', label: 'Contacto' },
];

export function Navbar2() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState<string>('');

    // ScrollSpy para destacar sección activa
    useEffect(() => {
        const ids = sectionLinks.map(l => l.href.substring(1));
        const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive('#' + entry.target.id);
                    }
                });
            },
            { threshold: 0.4 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Secciones principales"
            className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-white/80 dark:supports-backdrop-filter:bg-neutral-950/75 border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
        >
            <div className="max-w-5xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
                {/* Marca */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="font-semibold text-base tracking-wide">
                        <span className="inline-block bg-accent/10 px-2 py-1 rounded-md text-accent">David SB</span>
                    </Link>
                </div>
                {/* Navegación desktop */}
                <ul className="hidden md:flex items-center gap-2">
                    {sectionLinks.map(l => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 hover:text-accent ${active === l.href ? 'text-accent' : 'text-neutral-600 dark:text-neutral-300'
                                    }`}
                            >
                                {l.label}
                                <span
                                    className={`absolute left-2 right-2 -bottom-1 h-px bg-accent transition-opacity ${active === l.href ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Botón móvil */}
                <button
                    aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                    onClick={() => setMobileOpen(o => !o)}
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 backdrop-blur text-neutral-700 dark:text-neutral-200 shadow-sm"
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
            </div>
            {/* Menú móvil: se renderiza sólo cuando está abierto para que no empuje el contenido */}
            {mobileOpen && (
                <div
                    className="md:hidden absolute left-0 right-0 top-16 z-40 bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 shadow-sm animate-fade-down"
                >
                    <ul className="flex flex-col px-4 py-2 gap-1">
                        {sectionLinks.map(l => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${active === l.href ? 'text-accent' : 'text-neutral-700 dark:text-neutral-300'}`}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
