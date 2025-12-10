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
    role: 'Front End Developer | React & Next.js Specialist',
    location: 'México',
    about: 'Desarrollador Front End especializado en el ecosistema de React y Next.js, con sólida experiencia en la creación de interfaces web escalables, responsivas y centradas en la experiencia del usuario (UX). Mi formación como Ingeniero en Sistemas y experiencia previa como Full Stack me permite comprender el ciclo completo de desarrollo, facilitando una integración eficiente con APIs REST y equipos de Backend. Apasionado por el código limpio, la optimización del rendimiento web y las metodologías ágiles.',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Diseño Responsivo', 'React.js', 'Next.js', 'Redux', 'Context API'],
    backend: ['Python', 'Django', 'Consumo de APIs RESTful'],
    databases: [],
    tools: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify'],
    softSkills: ['Resolución de problemas', 'Documentación técnica', 'Trabajo colaborativo', 'Metodologías Ágiles (Scrum)'],
    experience: [
        {
            role: 'Front End Developer (Anteriormente Full Stack)',
            company: 'Loop Conexión Empresarial',
            period: '2022 – Actualidad',
            summary: [
                'Desarrollo de Interfaces de Alto Impacto: Lideré la construcción del frontend para la aplicación "Check-On", utilizando React para crear componentes reutilizables y modulares, mejorando la consistencia visual y reduciendo tiempos de desarrollo futuros.',
                'Optimización y Rendimiento: Implementé Next.js para el desarrollo de interfaces web, logrando mejoras significativas en los tiempos de carga (LCP) y optimización SEO mediante Server-Side Rendering (SSR).',
                'Integración de Servicios: Diseñé la lógica de consumo de datos y gestión de estado en el cliente para interactuar eficientemente con APIs REST desarrolladas en Django.',
                'Colaboración Técnica: Participé activamente en la definición de la arquitectura de datos del backend (Django + REST) para asegurar endpoints optimizados para el consumo móvil y web.'
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
        linkedin: 'https://www.linkedin.com/in/david-silva-38006a1b0/',
        github: 'https://github.com/Eldavi5'
    }
};
