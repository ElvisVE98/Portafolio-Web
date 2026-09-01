/**
 * ============================================================================
 * ARCHIVO: src/types/experiencia.tipos.ts
 * PROPÓSITO: Define las interfaces para la experiencia laboral en español.
 * ============================================================================
 */

/**
 * Logro o responsabilidad individual en un trabajo.
 */
export interface LogroExperiencia {
  /** Área o tipo de tarea (ej: 'Desarrollo', 'Automatización') */
  categoria: string;
  
  /** Explicación de lo que hiciste */
  texto: string;
}

/**
 * Puesto de trabajo en la trayectoria profesional.
 */
export interface ItemExperiencia {
  /** Identificador único */
  id: string;

  /** Cargo o rol desempeñado */
  cargo: string;

  /** Nombre de la empresa */
  empresa: string;

  /** Período de tiempo (ej: '2025 - Presente') */
  periodo: string;

  /** Descripción general del rol */
  descripcion: string;

  /** Lista de logros destacados */
  logros: LogroExperiencia[];

  /** Indica si es tu trabajo actual */
  esActual?: boolean;
}
