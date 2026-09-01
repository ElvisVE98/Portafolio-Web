/**
 * ============================================================================
 * ARCHIVO: src/types/proyectos.tipos.ts
 * PROPÓSITO: Define las interfaces y tipos para los proyectos en español.
 * ============================================================================
 */

/**
 * Representa una columna de desglose técnico en el proyecto estrella.
 */
export interface ColumnaDetalleProyecto {
  /** Título de la columna (ej: 'Backend & BD', 'Frontend') */
  titulo: string;
  
  /** Clase de color de Tailwind (ej: 'text-amber-400') */
  claseColor?: string;
  
  /** Lista de herramientas o tecnologías */
  elementos: string[];
}

/**
 * Categorías posibles para filtrar proyectos.
 */
export type CategoriaProyecto = 'todos' | 'fullstack' | 'frontend' | 'backend-datos';

/**
 * Estructura de datos completa de un Proyecto.
 */
export interface Proyecto {
  /** Identificador único del proyecto */
  id: string;

  /** Título visible del proyecto */
  titulo: string;

  /** Descripción explicativa de la aplicación */
  descripcion: string;

  /** Categoría del proyecto */
  categoria: 'fullstack' | 'frontend' | 'backend-datos';

  /** Indica si es el proyecto principal destacado */
  esDestacado?: boolean;

  /** Texto de la insignia (ej: 'PROYECTO ESTRELLA') */
  insigniaDestacado?: string;

  /** Tu rol en el proyecto */
  rol?: string;

  /** Columnas con el detalle de arquitectura (solo proyecto estrella) */
  columnasDetalle?: ColumnaDetalleProyecto[];

  /** Lista de etiquetas de tecnologías usadas */
  etiquetas: string[];

  /** Enlace al sitio web en vivo */
  enlaceDemo?: string;

  /** Enlace al repositorio de GitHub */
  enlaceGithub?: string;

  /** Ruta a la captura de pantalla en public/img/projects/ */
  rutaImagen?: string;
}
