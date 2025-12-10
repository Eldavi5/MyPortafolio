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
            role: 'Front End Developer',
            company: 'Loop Conexión Empresarial',
            period: '2022 – Actualidad',
            summary: [
                'Responsable del desarrollo de interfaces modernas para productos internos y consultoría externa, abarcando tanto desarrollo web como móvil.',
                'Proyecto Externo: Sector Bancario (Fintech): Colaboré en la modernización de una aplicación bancaria utilizando Next.js, enfocándome en la reingeniería de la interfaz de usuario (UI) para mejorar la usabilidad y estética.',
                'Optimicé el consumo de APIs bancarias, asegurando una integración segura y reduciendo los tiempos de respuesta.',
                'Implementé diseño responsivo avanzado para garantizar consistencia visual en múltiples dispositivos.',
                'Proyecto Interno: Check-On (Móvil & Web): Lideré el desarrollo de la aplicación móvil utilizando React Native, creando una experiencia nativa fluida para iOS y Android.',
                'Diseñé una arquitectura de componentes reutilizables que permitió agilizar el desarrollo y facilitar el mantenimiento futuro.'
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
        phone: '+56 1152-8080',
        email: 'davidsilvabello26@gmail.com',
        linkedin: 'https://www.linkedin.com/in/david-silva-38006a1b0/',
        github: 'https://github.com/Eldavi5'
    }
};
