interface SkillBadgeProps {
    label: string;
}

export function SkillBadge({ label }: SkillBadgeProps) {
    return (
        <span className="inline-block bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-1 text-sm font-medium mr-2 mb-2">
            {label}
        </span>
    );
}