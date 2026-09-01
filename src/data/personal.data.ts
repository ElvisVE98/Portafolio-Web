/**
 * ============================================================================
 * ARCHIVO: src/data/personal.data.ts
 * PROPÓSITO: Información personal, datos de contacto, enlaces y biografía.
 * ============================================================================
 */

export interface ItemHabilidad {
  nombre: string;
  categoria: 'web' | 'datos';
}

export interface GrupoHabilidades {
  titulo: string;
  categoria: 'web' | 'datos';
  habilidades: string[];
}

export const DATOS_PERSONALES = {
  // Tu nombre completo visible
  nombre: 'Elvis Velasquez',

  // Título principal en el Hero
  titulo: 'Desarrollo Web',
  tituloResaltado: 'Código que resuelve.',

  // Texto del indicador de disponibilidad
  textoDisponibilidad: 'Disponible para nuevos retos (Híbrido / Remoto)',

  // Biografía profesional
  descripcion: `Hola, soy Elvis Velasquez. Ingeniero en Informática egresado de Duoc UC, enfocado en desarrollo Full Stack y tecnologías web modernas. He desarrollado proyectos y aplicaciones internas utilizando React, JavaScript, TypeScript, Node.js y PostgreSQL, combinando frontend, backend y consumo de APIs REST. Actualmente continúo fortaleciendo mis conocimientos en desarrollo web moderno, aprendiendo constantemente y construyendo nuevas soluciones.`,

  // Ubicación y disponibilidad laboral
  ubicacion: 'Santiago, Chile',
  disponibilidad: 'Disponible para proyectos de Desarrollo Full Stack, Inteligencia de Negocios, Automatización y Análisis de Datos (Remoto / Híbrido).',

  // Correo de contacto principal
  correo: 'evelasquez_98@hotmail.com',

  // Ruta a tu Curriculum Vitae en PDF (dentro de public/docs/)
  rutaCv: '/docs/CV - Evelasquez.pdf',

  // Redes sociales profesionales
  redesSociales: {
    linkedin: 'https://www.linkedin.com/in/elvis-velasquez-28b9a3251/',
    github: 'https://github.com/ElvisVE98'
  },

  // Grupos de habilidades técnicas
  gruposHabilidades: [
    {
      titulo: 'Desarrollo Web & Backend',
      categoria: 'web' as const,
      habilidades: [
        'Frontend: HTML, CSS, Tailwind CSS, React',
        'Backend: Node.js, Express',
        'Lenguajes: JavaScript, TypeScript',
        'APIs: Consumo e integración (Axios, REST)',
        'Bases de datos: SQL Server, PostgreSQL (Supabase)',
        'Control de versiones: Git / GitHub'
      ]
    },
    {
      titulo: 'Automatización & Datos',
      categoria: 'datos' as const,
      habilidades: [
        'Power Automate',
        'Power Apps',
        'Power BI',
        'Excel Avanzado (Macros VBA) / SQL Server'
      ]
    }
  ]
};
