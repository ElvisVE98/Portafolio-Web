/**
 * techstack.data.ts
 * ============================================================================
 * Lista de tecnologías y herramientas dominadas por Elvis Velásquez.
 *
 * PARA AGREGAR TUS PROPIOS ÍCONOS SVG:
 * Puedes agregar la propiedad opcional `iconSvg` con el código SVG o la ruta
 * a un archivo en public/img/icons/ (ej: iconUrl: '/img/icons/react.svg').
 * ============================================================================
 */

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'data-automation' | 'tools';
  highlightColor?: string;
  /** Ruta opcional al archivo SVG en public/ (ej: '/img/icons/react.svg') */
  iconUrl?: string;
}


export const TECH_STACK_ROW_1: TechItem[] = [
  { name: 'React', category: 'frontend', highlightColor: 'text-cyan-400', iconUrl: '/img/icons/react_dark.svg' },
  { name: 'TypeScript', category: 'frontend', highlightColor: 'text-blue-400', iconUrl: '/img/icons/typescript.svg' },
  { name: 'Node.js', category: 'backend', highlightColor: 'text-emerald-400', iconUrl: '/img/icons/nodejs.svg' },
  { name: 'Tailwind CSS', category: 'frontend', highlightColor: 'text-teal-400', iconUrl: '/img/icons/tailwindcss.svg' },
  { name: 'PostgreSQL', category: 'database', highlightColor: 'text-indigo-400', iconUrl: '/img/icons/postgresql.svg' },
  { name: 'Supabase', category: 'database', highlightColor: 'text-emerald-400', iconUrl: '/img/icons/supabase.svg' },
  { name: 'Python', category: 'backend', highlightColor: 'text-yellow-400', iconUrl: '/img/icons/python.svg' },
  { name: 'Django', category: 'backend', highlightColor: 'text-emerald-400', iconUrl: '/img/icons/django.svg' },
  { name: 'Express.js', category: 'backend', highlightColor: 'text-slate-300', iconUrl: '/img/icons/expressjs_dark.svg' },
  { name: 'Docker', category: 'tools', highlightColor: 'text-blue-400', iconUrl: '/img/icons/docker.svg' }
];

export const TECH_STACK_ROW_2: TechItem[] = [
  { name: 'SQL Server', category: 'database', highlightColor: 'text-red-400', iconUrl: '/img/icons/sql-server.svg' },
  { name: 'Power Automate', category: 'data-automation', highlightColor: 'text-blue-400', iconUrl: '/img/icons/microsoft-power-automate.svg' },
  { name: 'Power Apps', category: 'data-automation', highlightColor: 'text-purple-400', iconUrl: '/img/icons/power-apps.svg' },
  { name: 'Power BI', category: 'data-automation', highlightColor: 'text-amber-400', iconUrl: '/img/icons/powerbi.svg' },
  { name: 'Prisma ORM', category: 'backend', highlightColor: 'text-teal-300', iconUrl: '/img/icons/prisma_dark.svg' },
  { name: 'Git & GitHub', category: 'tools', highlightColor: 'text-orange-400', iconUrl: '/img/icons/github_dark.svg' },
  { name: 'Vite', category: 'tools', highlightColor: 'text-purple-400', iconUrl: '/img/icons/vite.svg' },
  { name: 'REST APIs & Axios', category: 'backend', highlightColor: 'text-cyan-400', iconUrl: '/img/icons/fastapi.svg' },
  { name: 'JavaScript ES6+', category: 'frontend', highlightColor: 'text-yellow-300', iconUrl: '/img/icons/javascript.svg' },
  { name: 'Excel Avanzado (VBA)', category: 'data-automation', highlightColor: 'text-emerald-400', iconUrl: '/img/icons/microsoft-excel.svg' }
];
