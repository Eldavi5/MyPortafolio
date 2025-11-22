import { ExperienceItem } from '@/data/profile';

interface TimelineProps {
    items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <ol className="relative border-s border-border dark:border-neutral-700">
            {items.map((exp, i) => (
                <li key={i} className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white bg-accent text-white text-xs font-bold shadow-sm">
                        {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold">
                        {exp.role} <span className="text-accent">@ {exp.company}</span>
                    </h3>
                    <p className="text-sm mb-2 text-neutral-600 dark:text-neutral-300">{exp.period}</p>
                    <ul className="list-disc ps-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
                        {exp.summary.map((s, idx) => (
                            <li key={idx}>{s}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    );
}
