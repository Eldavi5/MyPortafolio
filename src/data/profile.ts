export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    summary: string[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
}

export interface CourseItem {
    title: string;
    provider?: string;
}

export interface ProfileData {
    name: string;
    role: string;
    location?: string;
    about: string;
    skills: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    softSkills: string[];
    experience: ExperienceItem[];
    education: EducationItem[];
    courses: CourseItem[];
    contact: {
        phone: string;
        email: string;
        linkedin?: string;
        github?: string;
    };
}

export const profile: ProfileData = {
    name: 'David Silva Bello',
    role: 'Ing. Sistemas Computacionales | Desarrollador Full‑Stack',
    about: '¡Hola! Soy David Silva Bello, un apasionado desarrollador Full Stack con experiencia construyendo aplicaciones web y móviles utilizando diversas tecnologías. Me especializo en desarrollar tanto el lado del cliente como el del servidor para entregar soluciones completas, escalables y mantenibles.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    backend: ['Python', 'Django'],
    databases: ['PostgreSQL', 'SQL'],
    tools: ['Git', 'Docker'],
    softSkills: ['Trabajo en equipo', 'Adaptabilidad', 'Comunicación', 'Resolución de problemas'],
    experience: [
        {
            role: 'Desarrollador Full‑Stack',
            company: 'Loop Conexión empresarial',
            period: '2022 – Actualidad',
            summary: [
                'Participación activa en el desarrollo integral de la aplicación Checx-On tanto frontend como backend.',
                'Desarrollo de aplicaciones OTS usando React y Django en colaboración con equipo multidisciplinario.',
                'Colaboración en backend para app móvil Flutter (gestión de datos, lógica de negocio y servicios RESTful).',
                'Participación en desarrollo de paneles y consumo de endpoints en proyecto bancario con Next.js y APIs externas.'
            ]
        }
    ],
    education: [
        {
            degree: 'Ingeniería en Sistemas Computacionales',
            institution: 'Tecnológico de Estudios Superiores de Ecatepec',
            period: '2019 – 2023'
        }
    ],
    courses: [
        { title: 'React de cero a experto' },
        { title: 'React y Django' },
        { title: 'React Native aplicaciones nativas para Android y iOS' },
        { title: 'Machine Learning A a la Z: R y Python para Data Science' }
    ],
    contact: {
        phone: '+52 55 1152 8080',
        email: 'davidsilvabello26@gmail.com',
        linkedin: 'https://www.linkedin.com/in/davidsilvabello',
        github: 'https://github.com/davidsilvabello'
    }
};
