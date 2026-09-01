/**
 * ============================================================================
 * ARCHIVO: src/types/certificaciones.tipos.ts
 * PROPÓSITO: Define las interfaces para títulos y cursos en español.
 * ============================================================================
 */

export interface ItemCertificacion {
  /** Identificador único */
  id: string;

  /** Nombre del título o curso */
  nombre: string;

  /** Institución educativa o plataforma */
  institucion: string;

  /** Color decorativo opcional */
  colorInstitucion?: string;

  /** Fecha de emisión */
  fecha: string;

  /** Descripción del aprendizaje obtenido */
  descripcion: string;

  /** Lista de habilidades principales */
  habilidades: string[];

  /** Código de validación (opcional) */
  idCertificado?: string;

  /** Ruta al archivo PDF o enlace web de validación */
  enlaceUrl?: string;

  /** Texto del botón (ej: 'Ver Certificado (PDF)') */
  textoEnlace?: string;

  /** Si debe abrirse en pestaña nueva */
  esEnlaceExterno?: boolean;
}
