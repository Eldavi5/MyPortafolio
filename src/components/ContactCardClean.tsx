import Link from 'next/link';
import { profile } from '@/data/profile';

export function ContactCardClean() {
    const c = profile.contact;
    return (
        <div className="space-y-2">
            <p><strong>Teléfono:</strong> <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">{c.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a></p>
            {c.linkedin && (
                <p><strong>LinkedIn:</strong> <Link href={c.linkedin} className="hover:underline" target="_blank" rel="noopener noreferrer">Perfil</Link></p>
            )}
            {c.github && (
                <p><strong>GitHub:</strong> <Link href={c.github} className="hover:underline" target="_blank" rel="noopener noreferrer">Repositorios</Link></p>
            )}
        </div>
    );
}
