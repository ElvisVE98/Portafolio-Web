/**
 * ============================================================================
 * ARCHIVO: src/types/tecnologias.tipos.ts
 * PROPÓSITO: Define las interfaces para las tecnologías del stack en español.
 * ============================================================================
 */

export interface ItemTecnologia {
  /** Nombre de la tecnología o herramienta */
  nombre: string;

  /** Categoría del stack */
  categoria: 'frontend' | 'backend' | 'database' | 'data-automation' | 'tools';

  /** Color decorativo de texto */
  colorResaltado?: string;

  /** Ruta al icono SVG en public/ (ej: '/img/icons/react_dark.svg') */
  rutaIcono?: string;
}
