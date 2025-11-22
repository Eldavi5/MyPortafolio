import { projects } from '@/data/projects';
import { Section } from '@/components/Section';
import Link from 'next/link';

export const metadata = {
    title: 'Proyectos | Portafolio',
    description: 'Proyectos destacados de desarrollo de software.'
};

export default function ProyectosPage() {
    return (
        <div className="pt-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Proyectos</h1>
            <Section id="proyectos" title="Listado">
                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map(p => (
                        <article key={p.slug} className="reveal border card-border rounded-xl p-5 bg-background/60 backdrop-blur transition hover:shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
                            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 leading-relaxed">{p.summary}</p>
                            <ul className="flex flex-wrap gap-2 mb-3">
                                {p.tech.map(t => (
                                    <li key={t} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium">{t}</li>
                                ))}
                            </ul>
                            {p.highlights && (
                                <ul className="list-disc ms-5 mb-3 text-xs space-y-1 text-neutral-700 dark:text-neutral-300">
                                    {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                            )}
                            <div className="flex gap-3 text-xs">
                                {p.repo && <Link href={p.repo} className="underline" target="_blank">Repo</Link>}
                                {p.demo && <Link href={p.demo} className="underline" target="_blank">Demo</Link>}
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </div>
    );
}
