/**
 * ============================================================================
 * ARCHIVO: src/data/tecnologias.data.ts
 * PROPÓSITO: Stack tecnológico y herramientas para el carrusel infinito.
 * ============================================================================
 */

import { ItemTecnologia } from '../types/tecnologias.types';

export const TECNOLOGIAS_FILA_1: ItemTecnologia[] = [
  { nombre: 'React', categoria: 'frontend', colorResaltado: 'text-cyan-400', rutaIcono: '/img/icons/react_dark.svg' },
  { nombre: 'TypeScript', categoria: 'frontend', colorResaltado: 'text-blue-400', rutaIcono: '/img/icons/typescript.svg' },
  { nombre: 'Node.js', categoria: 'backend', colorResaltado: 'text-emerald-400', rutaIcono: '/img/icons/nodejs.svg' },
  { nombre: 'Tailwind CSS', categoria: 'frontend', colorResaltado: 'text-teal-400', rutaIcono: '/img/icons/tailwindcss.svg' },
  { nombre: 'PostgreSQL', categoria: 'database', colorResaltado: 'text-indigo-400', rutaIcono: '/img/icons/postgresql.svg' },
  { nombre: 'Supabase', categoria: 'database', colorResaltado: 'text-emerald-400', rutaIcono: '/img/icons/supabase.svg' },
  { nombre: 'Python', categoria: 'backend', colorResaltado: 'text-yellow-400', rutaIcono: '/img/icons/python.svg' },
  { nombre: 'Django', categoria: 'backend', colorResaltado: 'text-emerald-400', rutaIcono: '/img/icons/django.svg' },
  { nombre: 'Express.js', categoria: 'backend', colorResaltado: 'text-slate-300', rutaIcono: '/img/icons/expressjs_dark.svg' },
  { nombre: 'Docker', categoria: 'tools', colorResaltado: 'text-blue-400', rutaIcono: '/img/icons/docker.svg' }
];

export const TECNOLOGIAS_FILA_2: ItemTecnologia[] = [
  { nombre: 'SQL Server', categoria: 'database', colorResaltado: 'text-red-400', rutaIcono: '/img/icons/sql-server.svg' },
  { nombre: 'Power Automate', categoria: 'data-automation', colorResaltado: 'text-blue-400', rutaIcono: '/img/icons/microsoft-power-automate.svg' },
  { nombre: 'Power Apps', categoria: 'data-automation', colorResaltado: 'text-purple-400', rutaIcono: '/img/icons/power-apps.svg' },
  { nombre: 'Power BI', categoria: 'data-automation', colorResaltado: 'text-amber-400', rutaIcono: '/img/icons/powerbi.svg' },
  { nombre: 'Prisma ORM', categoria: 'backend', colorResaltado: 'text-teal-300', rutaIcono: '/img/icons/prisma_dark.svg' },
  { nombre: 'Git & GitHub', categoria: 'tools', colorResaltado: 'text-orange-400', rutaIcono: '/img/icons/github_dark.svg' },
  { nombre: 'Vite', categoria: 'tools', colorResaltado: 'text-purple-400', rutaIcono: '/img/icons/vite.svg' },
  { nombre: 'REST APIs & Axios', categoria: 'backend', colorResaltado: 'text-cyan-400', rutaIcono: '/img/icons/fastapi.svg' },
  { nombre: 'JavaScript ES6+', categoria: 'frontend', colorResaltado: 'text-yellow-300', rutaIcono: '/img/icons/javascript.svg' },
  { nombre: 'Excel Avanzado (VBA)', categoria: 'data-automation', colorResaltado: 'text-emerald-400', rutaIcono: '/img/icons/microsoft-excel.svg' }
];
