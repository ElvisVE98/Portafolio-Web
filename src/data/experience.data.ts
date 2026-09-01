/**
 * experience.data.ts
 * ============================================================================
 * Historial laboral y trayectoria profesional de Elvis Velasquez.
 * Para agregar un nuevo trabajo, solo agregas un nuevo objeto a este arreglo.
 * ============================================================================
 */

import { ExperienceItem } from '../types/experience.types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'curifor',
    jobTitle: 'Asistente de Sistemas',
    company: 'CURIFOR S.A.',
    period: 'Noviembre 2025 - Actualidad',
    isCurrent: true,
    description:
      'Participación en desarrollo de soluciones internas, automatización de procesos e integración de herramientas tecnológicas en entorno empresarial.',
    highlights: [
      {
        category: 'Desarrollo Web',
        text: 'Desarrollo y mantenimiento de aplicaciones internas utilizando tecnologías web modernas y consumo de APIs REST.'
      },
      {
        category: 'SQL & ERP',
        text: 'Desarrollo y optimización de consultas SQL para extracción, validación y análisis de datos desde sistema Flexline ERP.'
      },
      {
        category: 'Automatización',
        text: 'Implementación de flujos con Power Automate y desarrollo de aplicaciones con Power Apps, reduciendo tareas manuales del área.'
      },
      {
        category: 'Calidad de datos',
        text: 'Validación de consistencia e integridad de información en el ERP, asegurando confiabilidad en la toma de decisiones.'
      },
      {
        category: 'Gestión documental',
        text: 'Estructuración y administración de información en SharePoint para facilitar el acceso y control de datos internos.'
      },
      {
        category: 'Proyectos tecnológicos',
        text: 'Participación en levantamiento de requerimientos y coordinación en implementación de soluciones internas.'
      }
    ]
  },
  {
    id: 'tecno-fast',
    jobTitle: 'Administrativo de Logística',
    company: 'TECNO FAST',
    period: 'Mayo 2018 - Noviembre 2025',
    isCurrent: false,
    description:
      'Gestión operativa y mejora continua de procesos administrativos a través de herramientas de análisis y automatización durante más de 7 años.',
    highlights: [
      {
        category: 'ERP & Finanzas',
        text: 'Gestión y procesamiento de estados de pago en SAP HANA, manteniendo trazabilidad y control documental.'
      },
      {
        category: 'Automatización',
        text: 'Optimización de procesos administrativos implementando automatizaciones con Excel (VBA) y Power Automate.'
      },
      {
        category: 'Reportería',
        text: 'Desarrollo de dashboards en Power BI para monitoreo de indicadores del área.'
      },
      {
        category: 'Logística',
        text: 'Gestión integral de órdenes de compra, coordinación de servicios de transporte y mantención.'
      }
    ]
  },
  {
    id: 'duoc-edu',
    jobTitle: 'Ingeniería en Informática',
    company: 'INSTITUTO PROFESIONAL DUOC UC',
    period: '2022 - 2025',
    isCurrent: false,
    description:
      'Formación académica profesional en ingeniería de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos.',
    highlights: []
  }
];
