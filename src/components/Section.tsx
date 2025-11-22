"use client";
import { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
    id?: string;
    title?: string;
    children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
    return (
        <Reveal as="section" id={id} className="scroll-mt-24 py-12">
            {title && (
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 border-b card-border pb-2">
                    {title}
                </h2>
            )}
            <div className="space-y-4">{children}</div>
        </Reveal>
    );
}
