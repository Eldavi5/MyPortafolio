export interface ProjectItem {
    slug: string;
    name: string;
    summary: string;
    tech: string[];
    year: number;
    repo?: string;
    demo?: string;
    highlights?: string[];
}

export const projects: ProjectItem[] = [
    {
        slug: 'checx-on',
        name: 'Checx-On',
        summary: 'Aplicación integral para gestión y monitoreo empresarial con frontend React y backend Django.',
        tech: ['React', 'Django', 'TypeScript', 'PostgreSQL'],
        year: 2024,
        highlights: [
            'Arquitectura modular para escalabilidad',
            'Consumo de APIs internas y externas',
            'Optimización de rendimiento en listas (virtualización)'
        ]
    },
    {
        slug: 'panel-bancario',
        name: 'Panel Bancario',
        summary: 'Panel para visualización de métricas financieras y administración de endpoints.',
        tech: ['Next.js', 'REST', 'Charts'],
        year: 2023,
        highlights: ['Integración con servicios externos', 'Diseño responsivo adaptado a casos de uso corporativo']
    }
];
