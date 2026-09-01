/**
 * ============================================================================
 * ARCHIVO: src/data/proyectos.data.ts
 * PROPÓSITO: Lista de proyectos destacados de Elvis Velásquez en español.
 * ============================================================================
 */

import { Proyecto } from '../types/proyectos.types';

export const PROYECTOS: Proyecto[] = [
  {
    id: 'clickbot',
    titulo: 'Clickbot Platform',
    categoria: 'fullstack',
    esDestacado: true,
    insigniaDestacado: 'PROYECTO ESTRELLA',
    rutaImagen: '/img/projects/clickbot.png',
    descripcion:
      'Plataforma SaaS desarrollada en equipo bajo metodología Scrum para la digitalización del comercio minorista. Centraliza ventas e inventario con un módulo de Business Intelligence y un Asistente Virtual con IA. Mi rol: diseño de la arquitectura de base de datos relacional y desarrollo del backend en Django, incluyendo la integración de las APIs de IA.',
    columnasDetalle: [
      {
        titulo: 'Backend & BD',
        claseColor: 'text-amber-400',
        elementos: ['Python 3.10+ (Django)', 'PostgreSQL (Supabase)', 'VPS Linux (Nginx/Gunicorn)']
      },
      {
        titulo: 'IA & Data',
        claseColor: 'text-zinc-200',
        elementos: ['Google Gemini API (NLP)', 'Prophet (Predicciones)', 'Metabase (BI)']
      },
      {
        titulo: 'Frontend',
        claseColor: 'text-zinc-300',
        elementos: ['HTML5 / CSS3 / JS', 'Bootstrap 5']
      }
    ],
    etiquetas: ['Python', 'Django', 'PostgreSQL', 'Business Intelligence', 'Scrum', 'Gemini AI'],
    enlaceDemo: 'https://clickbot.store/'
  },
  {
    id: 'tareo',
    titulo: 'Tareo — Gestor de Tareas Fullstack',
    categoria: 'fullstack',
    rutaImagen: '/img/projects/tareo.png',
    descripcion:
      'Aplicación fullstack de gestión de tareas construida con arquitectura moderna. Incluye autenticación completa con JWT, CRUD de tareas con filtros y buscador, dashboard con métricas en tiempo real y diseño responsive. Backend desplegado en Railway con PostgreSQL y frontend en Netlify.',
    etiquetas: [
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
    enlaceDemo: 'https://tareoapp.netlify.app'
  },
  {
    id: 'vyl-group',
    titulo: 'V&L Group SpA — Sitio Web Corporativo',
    categoria: 'fullstack',
    rutaImagen: '/img/projects/VyLgroup.png',
    descripcion:
      'Desarrollo completo de sitio web corporativo para empresa de externalización de RR.HH. y contabilidad. Incluye una landing page moderna con secciones informativas, formulario funcional conectado al correo corporativo vía EmailJS y un portal privado para clientes con autenticación contra base de datos MySQL, descarga de documentos y rutas protegidas.',
    etiquetas: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'PHP API',
      'MySQL',
      'React Router',
      'Zod'
    ],
    enlaceDemo: 'https://www.vylgroupspa.cl/'
  },
  {
    id: 'inventaflow',
    titulo: 'InventaFlow — Gestión de Activos & Inventario',
    categoria: 'backend-datos',
    rutaImagen: '/img/projects/inventaflow.png',
    descripcion:
      'Plataforma web de gestión de inventario y activos desarrollada para uso empresarial real. Permite controlar equipos, dispositivos móviles, tablets y licencias de software asignadas a colaboradores, reemplazando planillas Excel. Incluye dashboard con KPIs y gráficos de costos por sucursal, historial de asignaciones y panel de administración.',
    etiquetas: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS',
      'Recharts'
    ],
    enlaceDemo: 'https://plataforma-inventario.netlify.app/'
  },
  {
    id: 'mercado-local',
    titulo: 'Mercado Local — E-commerce Fullstack',
    categoria: 'fullstack',
    rutaImagen: '/img/projects/mercado.png',
    descripcion:
      'Plataforma de e-commerce desarrollada con tecnologías modernas. Incluye autenticación de usuarios, catálogo de productos con filtros y buscador, carrito de compras con Context API, historial de pedidos y página interactiva con animaciones GSAP.',
    etiquetas: [
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
    enlaceDemo: 'https://mercadoecommerce.netlify.app/'
  },
  {
    id: 'finchile',
    titulo: 'FinChile — Dashboard Financiero',
    categoria: 'frontend',
    rutaImagen: '/img/projects/finchile.png',
    descripcion:
      'Aplicación web interactiva que consume la API de Mindicador.cl en tiempo real. Conversor de divisas multidireccional con TypeScript, gráficos históricos interactivos de los últimos 30 días con Chart.js y diseño responsive. Desplegada en Netlify con CI/CD.',
    etiquetas: ['TypeScript', 'Vite', 'Chart.js', 'REST API', 'Netlify'],
    enlaceDemo: 'https://conversor-cl.netlify.app/'
  },
  {
    id: 'blackjack',
    titulo: 'BlackJack — Juego de Cartas',
    categoria: 'frontend',
    rutaImagen: '/img/projects/blackjack.png',
    descripcion:
      'Juego de BlackJack interactivo construido con JavaScript puro aplicando el patrón módulo (IIFE) para encapsulación del estado. Lógica completa de turnos, cálculo de puntos y condiciones de victoria sin dependencias de frameworks.',
    etiquetas: ['JavaScript', 'Patrón Módulo', 'IIFE', 'Bootstrap 4'],
    enlaceDemo: 'https://blackjack-gamecard.netlify.app'
  },
  {
    id: 'evenprod',
    titulo: 'EvenProd — Landing Page de Eventos',
    categoria: 'frontend',
    rutaImagen: '/img/projects/evenprod.png',
    descripcion:
      'Landing page para agencia de eventos con CSS Grid, diseño responsive y menú hamburguesa funcional. Formulario de contacto integrado con Formspree para recepción de cotizaciones.',
    etiquetas: ['HTML5', 'CSS Grid', 'JavaScript', 'Responsive', 'Formspree'],
    enlaceDemo: 'https://eventprod.netlify.app'
  }
];
