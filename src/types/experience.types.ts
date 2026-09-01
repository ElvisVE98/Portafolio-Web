/**
 * experience.types.ts
 * ============================================================================
 * Define la estructura de cada trabajo o puesto en la trayectoria profesional.
 * ============================================================================
 */

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights: {
    category: string;
    text: string;
  }[];
}
