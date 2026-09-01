/**
 * ============================================================================
 * ARCHIVO: src/data/certificaciones.data.ts
 * PROPÓSITO: Título universitario y certificaciones oficiales de Elvis Velásquez.
 * ============================================================================
 */

import { ItemCertificacion } from '../types/certificaciones.types';

export const CERTIFICACIONES: ItemCertificacion[] = [
  {
    id: 'duoc-degree',
    nombre: 'Ingeniero en Informática',
    institucion: 'DUOC UC',
    colorInstitucion: 'cyan',
    fecha: 'Feb. 2026',
    descripcion:
      'Título profesional de Ingeniería en Informática, con formación integral en desarrollo de software, bases de datos relacionales, redes, arquitectura de sistemas y gestión de proyectos tecnológicos.',
    habilidades: ['Desarrollo de Software', 'Programación Web', 'Bases de Datos', 'Arquitectura'],
    idCertificado: '2481476133',
    enlaceUrl: '/docs/5c6a45c9-bb80-4469-a494-eb095eac455c.pdf',
    textoEnlace: 'Ver Certificado (PDF)',
    esEnlaceExterno: true
  },
  {
    id: 'udemy-typescript',
    nombre: 'TypeScript: Tu completa guía y manual de mano',
    institucion: 'UDEMY',
    colorInstitucion: 'emerald',
    fecha: 'Mar. 2026',
    descripcion:
      'Dominio de tipado estático avanzado, interfaces, genéricos, decoradores, tipos utilitarios y patrones de diseño en TypeScript aplicado a proyectos reales de frontend y backend.',
    habilidades: ['TypeScript', 'Tipado Estático', 'Genéricos', 'Clean Code'],
    idCertificado: 'UC-616140ad-3f12-4217-ad91-cf3df860eb63',
    enlaceUrl: 'https://www.udemy.com/certificate/UC-616140ad-3f12-4217-ad91-cf3df860eb63/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'udemy-node',
    nombre: 'Node.js: De cero a experto (Edición 2025)',
    institucion: 'UDEMY',
    colorInstitucion: 'emerald',
    fecha: 'Dic. 2025',
    descripcion:
      'Construcción de APIs RESTful robustas y seguras con Express, autenticación mediante JSON Web Tokens (JWT), middlewares, subida de archivos y despliegues en servidores en la nube.',
    habilidades: ['Node.js', 'Express', 'JWT', 'REST APIs', 'Postman'],
    idCertificado: 'UC-b9f1d06e-82df-427c-9b88-c70e28f110c7',
    enlaceUrl: 'https://www.udemy.com/certificate/UC-b9f1d06e-82df-427c-9b88-c70e28f110c7/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'udemy-react',
    nombre: 'React: De cero a experto ( Hooks y MERN )',
    institucion: 'UDEMY',
    colorInstitucion: 'emerald',
    fecha: 'Oct. 2025',
    descripcion:
      'Desarrollo de Single Page Applications con React, manejo avanzado del estado (Context API, Redux Toolkit), Custom Hooks, optimización de renderizado y conexión con APIs REST.',
    habilidades: ['React', 'Hooks', 'Context API', 'State Management'],
    idCertificado: 'UC-678a1f73-ef46-4a69-80da-3df4c2c8f85f',
    enlaceUrl: 'https://www.udemy.com/certificate/UC-678a1f73-ef46-4a69-80da-3df4c2c8f85f/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'santander-excel',
    nombre: 'Excel: De Cero a Avanzado',
    institucion: 'SANTANDER OPEN ACADEMY',
    colorInstitucion: 'red',
    fecha: 'Mar. 2025',
    descripcion:
      'Modelado de datos financieros, tablas dinámicas avanzadas, funciones complejas de búsqueda y automatización de procesos mediante macros VBA para optimización operativa.',
    habilidades: ['Excel Avanzado', 'Macros VBA', 'Tablas Dinámicas', 'Análisis de Datos'],
    idCertificado: 'SOA-2025-EXCEL-001',
    enlaceUrl: 'https://www.santanderopenacademy.com/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'duoc-bd',
    nombre: 'Acreditación en Modelamiento y Construcción de Bases de Datos',
    institucion: 'DUOC UC',
    colorInstitucion: 'cyan',
    fecha: 'Dic. 2024',
    descripcion:
      'Acreditación académica en diseño relacional, normalización de datos, procedimientos almacenados, triggers, transacciones ACID y optimización de consultas en SQL Server y Oracle.',
    habilidades: ['SQL Server', 'Oracle', 'Modelamiento Relacional', 'Optimización SQL'],
    idCertificado: 'ACR-BD-2024-DUOC',
    enlaceUrl: '/docs/5c6a45c9-bb80-4469-a494-eb095eac455c.pdf',
    textoEnlace: 'Ver Acreditación',
    esEnlaceExterno: true
  }
];
