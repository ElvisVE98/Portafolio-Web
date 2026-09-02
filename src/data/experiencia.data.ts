/**
 * ============================================================================
 * ARCHIVO: src/data/experiencia.data.ts
 * PROPÓSITO: Trayectoria laboral e historial profesional real de Elvis Velásquez.
 * ============================================================================
 */

import { ItemExperiencia } from '../types/experiencia.types';

export const EXPERIENCIAS: ItemExperiencia[] = [
  {
    id: 'curifor',
    cargo: 'Asistente de Sistemas',
    empresa: 'Curifor S.A.',
    periodo: 'Nov. 2025 – Presente',
    esActual: true,
    descripcion:
      'Participación en desarrollo de soluciones internas, automatización de procesos e integración de herramientas tecnológicas en entorno empresarial.',
    logros: [
      {
        categoria: 'Desarrollo Web Fullstack',
        texto:
          'Desarrollo y mantenimiento de aplicaciones internas utilizando tecnologías web modernas y consumo de APIs REST.'
      },
      {
        categoria: 'Automatización de Procesos',
        texto:
          ' Implementación de flujos con Power Automate y desarrollo de aplicaciones con Power Apps, reduciendo tareas manuales del área.'
      },
      {
        categoria: 'Bases de Datos & SQL',
        texto:
          'Desarrollo y optimización de consultas SQL para extracción, validación y análisis de datos desde sistema Flexline ERP.'
      },
      {
        categoria: 'Cloud & BI',
        texto:
          'Participación en proyecto de infraestructura cloud para reportería integrada con Power BI.'
      },
      {
        categoria: 'Impacto & Logro',
        texto:
          'Reemplazo de proceso 100% manual en Excel por plataforma web, reduciendo reportes de horas a minutos.'
      }
    ]
  },
  {
    id: 'tecno-fast',
    cargo: 'Administrativo de Logística',
    empresa: 'Tecno Fast S.A.',
    periodo: 'May. 2018 – Nov. 2025',
    esActual: false,
    descripcion:
      'Gestión operativa y mejora continua de procesos administrativos a través de herramientas de análisis y automatización durante más de 7 años.',
    logros: [
      {
        categoria: 'Automatización & VBA',
        texto:
          'Automatización de procesos administrativos mediante Excel VBA y flujos en Power Automate.'
      },
      {
        categoria: 'Business Intelligence',
        texto:
          'Desarrollo de Dashboards en Power BI para el monitoreo continuo de KPIs logísticos.'
      },
      {
        categoria: 'Sistemas ERP (SAP HANA)',
        texto:
          'Gestión y análisis de estados de pago utilizando SAP HANA.'
      },
      {
        categoria: 'Análisis de Costos',
        texto:
          'Generación de reportes operacionales y análisis de costos logísticos para la toma de decisiones.'
      },
      {
        categoria: 'Impacto & Logro',
        texto:
          'Reducción de tiempos de procesamiento manual y mejora significativa en la visibilidad operativa del área.'
      }
    ]
  }
];
