/**
 * certifications.data.ts
 * ============================================================================
 * Título universitario, certificaciones oficiales y cursos de formación.
 * ============================================================================
 */

import { CertificationItem } from '../types/certification.types';

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'duoc-degree',
    name: 'Ingeniero en Informática',
    institution: 'DUOC UC',
    institutionColor: 'cyan',
    date: 'Feb. 2026',
    description:
      'Título profesional de Ingeniería en Informática, con formación en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.',
    skills: ['Desarrollo de Software', 'Programación', 'Bases de Datos'],
    certId: '2481476133',
    linkUrl: '/docs/certificadoTitulo.pdf',
    linkText: 'Ver Certificado',
    isExternalLink: true
  },



  {
    id: 'udemy-typescript',
    name: 'TypeScript: Tu completa guía y manual de mano',
    institution: 'UDEMY',
    institutionColor: 'emerald',
    date: 'Mar. 2026',
    description:
      'Tipado estático, interfaces, generics y mejores prácticas para construir aplicaciones escalables y seguras con TypeScript.',
    skills: ['TypeScript', 'Frontend', 'Tipado Estático'],
    linkUrl: 'https://www.udemy.com/certificate/UC-0c19b4d6-a470-45fc-ba1e-93c098a11a20/',
    linkText: 'Validar Credencial',
    isExternalLink: true
  },



  {
    id: 'udemy-javascript',
    name: 'JavaScript Moderno: Guía para dominar el lenguaje',
    institution: 'UDEMY',
    institutionColor: 'cyan',
    date: 'Feb. 2026',
    description:
      'JavaScript moderno completo: ES6+, async/await, Fetch API, manipulación del DOM, módulos y patrones de desarrollo actuales.',
    skills: ['JavaScript', 'Fetch API', 'ES6+'],
    linkUrl: 'https://www.udemy.com/certificate/UC-cbc23a2f-34b7-421f-a0a2-728c6aa39ca1/',
    linkText: 'Validar Credencial',
    isExternalLink: true
  },



  {
    id: 'udemy-nodejs',
    name: 'Node.js: De Cero a Experto',
    institution: 'UDEMY',
    institutionColor: 'cyan',
    date: 'Jul. 2026',
    description:
      'Desarrollo backend con Node.js y Express: APIs RESTful, persistencia de datos con MongoDB y Prisma ORM, comunicación en tiempo real con WebSockets, integración de Webhooks y contenerización con Docker.',
    skills: ['Node.js', 'Express', 'Docker', 'REST API', 'Prisma', 'MongoDB'],
    linkUrl: 'https://www.udemy.com/certificate/UC-e042e003-4a32-44d7-8a21-60f08e555f61/',
    linkText: 'Validar Credencial',
    isExternalLink: true
  },



  {
    id: 'cisco-python',
    name: 'PCAP: Programming Essentials in Python',
    institution: 'CISCO NETWORKING ACADEMY',
    institutionColor: 'emerald',
    date: 'May. 2022',
    description:
      'Certificación oficial en fundamentos y programación esencial con Python, estructuras de datos y programación orientada a objetos.',
    skills: ['Python Core', 'OOP', 'Data Structures'],
    linkUrl: '',
    linkText: ''
  },



  {
    id: 'ets-toeic',
    name: 'TOEIC — Inglés Profesional',
    institution: 'ETS',
    institutionColor: 'cyan',
    date: 'Dic. 2024',
    description:
      'Certificación internacional de inglés orientada al entorno profesional, habilitando la lectura de documentación técnica y comunicación en equipos de trabajo.',
    skills: ['Inglés Técnico', 'Comprensión Lectora', 'Comunicación Profesional'],
    certId: '26731371',
    linkUrl: '',
    linkText: ''
  }
];
