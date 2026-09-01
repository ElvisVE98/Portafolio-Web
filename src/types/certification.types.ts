/**
 * certification.types.ts
 * ============================================================================
 * Define la estructura de las credenciales, títulos y cursos completados.
 * ============================================================================
 */

export interface CertificationItem {
  id: string;
  name: string;
  institution: string;
  institutionColor?: 'cyan' | 'indigo' | 'emerald' | 'amber';
  date: string;
  description: string;
  skills: string[];
  certId?: string;
  linkUrl: string;
  linkText?: string;
  isExternalLink?: boolean;
}
