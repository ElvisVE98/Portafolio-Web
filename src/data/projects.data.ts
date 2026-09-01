/**
 * projects.data.ts
 * ============================================================================
 * Lista de proyectos destacados de Elvis Velásquez.
 * Incluye asignación de categorías e imágenes de vista previa (imageUrl).
 *
 * CÓMO FUNCIONA imageUrl:
 * Guarda tus imágenes dentro de la carpeta: public/img/projects/
 * (ejemplo: si guardas public/img/projects/VyLgroup.png, aquí escribes '/img/projects/VyLgroup.png')
 * ============================================================================
 */

import { Project } from '../types/project.types';

export const PROJECTS: Project[] = [
  {
    id: 'clickbot',
    title: 'Clickbot Platform',
    category: 'fullstack',
    isFeatured: true,
    featuredBadge: 'PROYECTO ESTRELLA',
    imageUrl: '/img/projects/clickbot.png',
    description:
      'Plataforma SaaS desarrollada en equipo bajo metodología Scrum para la digitalización del comercio minorista. Centraliza ventas e inventario con un módulo de Business Intelligence y un Asistente Virtual con IA. Mi rol: diseño de la arquitectura de base de datos relacional y desarrollo del backend en Django, incluyendo la integración de las APIs de IA.',
    detailColumns: [
      {
        title: 'Backend & BD',
        colorClass: 'text-amber-400',
        items: ['Python 3.10+ (Django)', 'PostgreSQL (Supabase)', 'VPS Linux (Nginx/Gunicorn)']
      },
      {
        title: 'IA & Data',
        colorClass: 'text-zinc-200',
        items: ['Google Gemini API (NLP)', 'Prophet (Predicciones)', 'Metabase (BI)']
      },
      {
        title: 'Frontend',
        colorClass: 'text-zinc-300',
        items: ['HTML5 / CSS3 / JS', 'Bootstrap 5']
      }
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'Business Intelligence', 'Scrum', 'Gemini AI'],
    demoUrl: 'https://clickbot.store/'
  },


  
  {
    id: 'tareo',
    title: 'Tareo — Gestor de Tareas Fullstack',
    category: 'fullstack',
    imageUrl: '/img/projects/tareo.png',
    description:
      'Aplicación fullstack de gestión de tareas construida con arquitectura moderna. Incluye autenticación completa con JWT, CRUD de tareas con filtros y buscador, dashboard con métricas en tiempo real y diseño responsive. Backend desplegado en Railway con PostgreSQL y frontend en Netlify.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'Docker',
      'JWT',
      'Zod'
    ],
    demoUrl: 'https://tareoapp.netlify.app'
  },


  {
    id: 'vyl-group',
    title: 'V&L Group SpA — Sitio Web Corporativo',
    category: 'fullstack',
    imageUrl: '/img/projects/VyLgroup.png',
    description:
      'Desarrollo completo de sitio web corporativo para empresa de externalización de RR.HH. y contabilidad. Incluye una landing page moderna con secciones informativas, formulario funcional conectado al correo corporativo vía EmailJS y un portal privado para clientes con autenticación contra base de datos MySQL, descarga de documentos y rutas protegidas.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'PHP API',
      'MySQL',
      'React Router',
      'Zod'
    ],
    demoUrl: 'https://www.vylgroupspa.cl/'
  },


  {
    id: 'inventaflow',
    title: 'InventaFlow — Gestión de Activos & Inventario',
    category: 'backend-data',
    imageUrl: '/img/projects/inventaflow.png',
    description:
      'Plataforma web de gestión de inventario y activos desarrollada para uso empresarial real. Permite controlar equipos, dispositivos móviles, tablets y licencias de software asignadas a colaboradores, reemplazando planillas Excel. Incluye dashboard con KPIs y gráficos de costos por sucursal, historial de asignaciones y panel de administración.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS',
      'Recharts'
    ],
    demoUrl: 'https://plataforma-inventario.netlify.app/'
  },



  {
    id: 'mercado-local',
    title: 'Mercado Local — E-commerce Fullstack',
    category: 'fullstack',
    imageUrl: '/img/projects/mercado.png',
    description:
      'Plataforma de e-commerce desarrollada con tecnologías modernas. Incluye autenticación de usuarios, catálogo de productos con filtros y buscador, carrito de compras con Context API, historial de pedidos y página interactiva con animaciones GSAP.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'GSAP'
    ],
    demoUrl: 'https://mercadoecommerce.netlify.app/'
  },


  {
    id: 'finchile',
    title: 'FinChile — Dashboard Financiero',
    category: 'frontend',
    imageUrl: '/img/projects/finchile.png',
    description:
      'Aplicación web interactiva que consume la API de Mindicador.cl en tiempo real. Conversor de divisas multidireccional con TypeScript, gráficos históricos interactivos de los últimos 30 días con Chart.js y diseño responsive. Desplegada en Netlify con CI/CD.',
    tags: ['TypeScript', 'Vite', 'Chart.js', 'REST API', 'Netlify'],
    demoUrl: 'https://conversor-cl.netlify.app/'
  },


  {
    id: 'blackjack',
    title: 'BlackJack — Juego de Cartas',
    category: 'frontend',
    imageUrl: '/img/projects/blackjack.png',
    description:
      'Juego de BlackJack interactivo construido con JavaScript puro aplicando el patrón módulo (IIFE) para encapsulación del estado. Lógica completa de turnos, cálculo de puntos y condiciones de victoria sin dependencias de frameworks.',
    tags: ['JavaScript', 'Patrón Módulo', 'IIFE', 'Bootstrap 4'],
    demoUrl: 'https://blackjack-gamecard.netlify.app'
  },


  {
    id: 'evenprod',
    title: 'EvenProd — Landing Page de Eventos',
    category: 'frontend',
    imageUrl: '/img/projects/evenprod.png',
    description:
      'Landing page para agencia de eventos con CSS Grid, diseño responsive y menú hamburguesa funcional. Formulario de contacto integrado con Formspree para recepción de cotizaciones.',
    tags: ['HTML5', 'CSS Grid', 'JavaScript', 'Responsive', 'Formspree'],
    demoUrl: 'https://eventprod.netlify.app'
  }
];
