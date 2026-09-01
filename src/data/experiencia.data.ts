/**
 * ============================================================================
 * ARCHIVO: src/data/experiencia.data.ts
 * PROPÓSITO: Trayectoria laboral e historial profesional de Elvis Velásquez.
 * ============================================================================
 */

import { ItemExperiencia } from '../types/experiencia.types';

export const EXPERIENCIAS: ItemExperiencia[] = [
  {
    id: 'vyl-group',
    cargo: 'Desarrollador Web Full Stack & Analista de Datos',
    empresa: 'V&L Group SpA',
    periodo: 'Nov. 2025 - Presente',
    esActual: true,
    descripcion:
      'Lidero el diseño, desarrollo y despliegue del nuevo sitio web corporativo de la empresa. Construí una landing page moderna e interactiva, un portal privado para clientes con autenticación en base de datos MySQL, panel de administración para subida y gestión de liquidaciones de sueldo, y el sistema de cotizaciones en línea conectado a correos corporativos.',
    logros: [
      {
        categoria: 'Desarrollo Web Full Stack',
        texto:
          'Creación de landing page responsiva en React 19 + TypeScript + Tailwind CSS, conectada a API REST en PHP y base de datos MySQL.'
      },
      {
        categoria: 'Portal de Clientes & Seguridad',
        texto:
          'Implementación de sistema de autenticación de usuarios, portal privado con descarga de archivos y rutas protegidas con React Router.'
      },
      {
        categoria: 'Automatización & BI',
        texto:
          'Construcción de tableros de control en Power BI y flujos de trabajo en Power Automate para optimización de procesos internos de RR.HH.'
      }
    ]
  },
  {
    id: 'practica-profesional',
    cargo: 'Ingeniero en Informática (Práctica Profesional)',
    empresa: 'Proyectos & Soluciones Digitales',
    periodo: '2024 - 2025',
    esActual: false,
    descripcion:
      'Participación activa en el desarrollo de software aplicando metodologías ágiles (Scrum). Diseño de esquemas de bases de datos relacionales en PostgreSQL y SQL Server, desarrollo de endpoints backend en Node.js y Python/Django, y maquetación de interfaces web dinámicas.',
    logros: [
      {
        categoria: 'Bases de Datos & Backend',
        texto:
          'Modelado relacional y consultas optimizadas en PostgreSQL y Supabase para aplicaciones web de alto tráfico.'
      },
      {
        categoria: 'Integración de APIs & IA',
        texto:
          'Consumo de servicios RESTful e integración de modelos de lenguaje natural con Google Gemini API.'
      }
    ]
  }
];
