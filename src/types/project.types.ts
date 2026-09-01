/**
 * project.types.ts
 * ============================================================================
 * Define la estructura de datos para los proyectos del portafolio.
 * Incluye soporte para imagen de vista previa (imageUrl).
 * ============================================================================
 */

export interface ProjectDetailColumn {
  title: string;
  colorClass?: string;
  items: string[];
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend-data';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend-data';
  isFeatured?: boolean;
  featuredBadge?: string;
  role?: string;
  detailColumns?: ProjectDetailColumn[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  /** Ruta a la captura de pantalla del proyecto (ej: '/img/projects/clickbot.png') */
  imageUrl?: string;
}
