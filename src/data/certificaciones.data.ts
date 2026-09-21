/**
 * ============================================================================
 * ARCHIVO: src/data/certificaciones.data.ts
 * PROPÓSITO: Título universitario y certificaciones oficiales reales de Elvis Velásquez.
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
      'Título profesional de Ingeniería en Informática, con formación en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.',
    habilidades: ['Desarrollo de Software', 'Programación', 'Bases de Datos'],
    idCertificado: '2481476133',
    enlaceUrl: '/docs/certificadoTitulo.pdf',
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
      'Tipado estático, interfaces, generics y mejores prácticas para construir aplicaciones escalables y seguras con TypeScript.',
    habilidades: ['TypeScript', 'Frontend', 'Tipado Estático'],
    enlaceUrl: 'https://www.udemy.com/certificate/UC-0c19b4d6-a470-45fc-ba1e-93c098a11a20/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'udemy-javascript',
    nombre: 'JavaScript Moderno: Guía para dominar el lenguaje',
    institucion: 'UDEMY',
    colorInstitucion: 'cyan',
    fecha: 'Feb. 2026',
    descripcion:
      'JavaScript moderno completo: ES6+, async/await, Fetch API, manipulación del DOM, módulos y patrones de desarrollo actuales.',
    habilidades: ['JavaScript', 'Fetch API', 'ES6+'],
    enlaceUrl: 'https://www.udemy.com/certificate/UC-cbc23a2f-34b7-421f-a0a2-728c6aa39ca1/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'udemy-nodejs',
    nombre: 'Node.js: De Cero a Experto',
    institucion: 'UDEMY',
    colorInstitucion: 'cyan',
    fecha: 'Jul. 2026',
    descripcion:
      'Desarrollo backend con Node.js y Express: APIs RESTful, persistencia de datos con MongoDB y Prisma ORM, comunicación en tiempo real con WebSockets, integración de Webhooks y contenerización con Docker.',
    habilidades: ['Node.js', 'Express', 'Docker', 'REST API', 'Prisma', 'MongoDB'],
    enlaceUrl: 'https://www.udemy.com/certificate/UC-e042e003-4a32-44d7-8a21-60f08e555f61/',
    textoEnlace: 'Validar Credencial',
    esEnlaceExterno: true
  },
  {
    id: 'cisco-python',
    nombre: 'PCAP: Programming Essentials in Python',
    institucion: 'CISCO NETWORKING ACADEMY',
    colorInstitucion: 'emerald',
    fecha: 'May. 2022',
    descripcion:
      'Certificación oficial en fundamentos y programación esencial con Python, estructuras de datos y programación orientada a objetos.',
    habilidades: ['Python Core', 'OOP', 'Data Structures']
  },
  {
    id: 'ets-toeic',
    nombre: 'TOEIC — Inglés Profesional',
    institucion: 'ETS',
    colorInstitucion: 'cyan',
    fecha: 'Dic. 2024',
    descripcion:
      'Certificación internacional de inglés orientada al entorno profesional, habilitando la lectura de documentación técnica y comunicación en equipos de trabajo.',
    habilidades: ['Inglés Técnico', 'Comprensión Lectora', 'Comunicación Profesional'],
    idCertificado: '26731371'
  }
];
