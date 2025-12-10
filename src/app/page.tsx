import { profile } from "@/data/profile";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactCardClean } from "@/components/ContactCardClean";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="pt-16 md:pt-24 hero-gradient rounded-xl px-6 py-12 mb-8 border border-border dark:border-neutral-800">
        <div className="text-center md:text-left max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-accent to-accent/70">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-accent mb-6">
            {profile.role}
          </p>
          <p className="max-w-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {profile.about}
          </p>
        </div>
      </div>

      {/* Sobre mí */}
      <Section id="sobre-mi" title="Sobre mí">
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {profile.about}
        </p>
      </Section>

      {/* Habilidades */}
      <Section id="habilidades" title="Habilidades Técnicas">
        <div>
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          {profile.skills.map(s => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Backend</h3>
          {profile.backend.map(s => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Herramientas</h3>
          {profile.tools.map(s => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
          {profile.softSkills.map(s => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      </Section>

      {/* Experiencia */}
      <Section id="experiencia" title="Experiencia Laboral">
        <Timeline items={profile.experience} />
      </Section>

      {/* Educación */}
      <Section id="educacion" title="Educación">
        <ul className="list-none space-y-4">
          {profile.education.map((e, i) => (
            <li key={i} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.institution}</p>
              <p className="text-xs mt-1 text-neutral-500">{e.period}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Cursos */}
      <Section id="cursos" title="Cursos y Certificaciones">
        <ul className="grid gap-3 sm:grid-cols-2">
          {profile.courses.map((c, i) => (
            <li key={i} className="border border-neutral-200 dark:border-neutral-700 rounded-md p-3 text-sm font-medium bg-neutral-50 dark:bg-neutral-900">
              {c.title}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contacto */}
      <Section id="contacto" title="Contacto">
        <ContactCardClean />
      </Section>
    </>
  );
}
