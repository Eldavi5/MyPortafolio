"use client";
import { useEffect, useRef } from 'react';

type ElementTag = 'div' | 'section' | 'span' | 'article' | 'header' | 'footer';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    as?: ElementTag;
    id?: string;
}

export function Reveal({ children, className = '', as: Tag = 'div', id }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        el.setAttribute('data-visible', 'true');
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Tag ref={ref as any} id={id} className={`reveal ${className}`}>{children}</Tag>
    );
}
