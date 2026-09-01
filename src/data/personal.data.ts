/**
 * personal.data.ts
 * ============================================================================
 * Información personal, biografía, enlaces de contacto y CV.
 * ============================================================================
 */

export interface SkillItem {
  name: string;
  category: 'web' | 'data';
}

export interface SkillGroup {
  title: string;
  category: 'web' | 'data';
  skills: string[];
}

export const PERSONAL_DATA = {
  name: 'Elvis Velasquez',
  title: 'Desarrollo Web',
  titleHighlight: 'Código que resuelve.',
  badgeText: 'Disponible para nuevos retos (Híbrido / Remoto)',
  
  description: `Hola, soy Elvis Velasquez. Ingeniero en Informática egresado de Duoc UC, enfocado en desarrollo Full Stack y tecnologías web modernas. He desarrollado proyectos y aplicaciones internas utilizando React, JavaScript, TypeScript, Node.js y PostgreSQL, combinando frontend, backend y consumo de APIs REST. Actualmente continúo fortaleciendo mis conocimientos en desarrollo web moderno, aprendiendo constantemente y construyendo nuevas soluciones.`,

  location: 'Santiago, Chile',
  availability: 'Disponible para proyectos de Desarrollo Full Stack, Inteligencia de Negocios, Automatización y Análisis de Datos (Remoto / Híbrido).',
  
  email: 'evelasquez_98@hotmail.com',
  
  // Ruta exacta a tu archivo PDF dentro de la carpeta public/docs/
  cvUrl: '/docs/CV - Evelasquez.pdf',
  
  socials: {
    linkedin: 'https://www.linkedin.com/in/elvis-velasquez-28b9a3251/',
    github: 'https://github.com/ElvisVE98'
  },

  skillGroups: [
    {
      title: 'Desarrollo Web & Backend',
      category: 'web' as const,
      skills: [
        'Frontend: HTML, CSS, Tailwind CSS, React',
        'Backend: Node.js, Express',
        'Lenguajes: JavaScript, TypeScript',
        'APIs: Consumo e integración (Axios, REST)',
        'Bases de datos: SQL Server, PostgreSQL (Supabase)',
        'Control de versiones: Git / GitHub'
      ]
    },
    {
      title: 'Automatización & Datos',
      category: 'data' as const,
      skills: [
        'Power Automate',
        'Power Apps',
        'Power BI',
        'Excel Avanzado (Macros VBA) / SQL Server'
      ]
    }
  ]
};
