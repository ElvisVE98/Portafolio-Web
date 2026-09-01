import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TechMarqueeSection } from '../components/sections/TechMarqueeSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * HomePage.tsx
 * ============================================================================
 * Vista principal del portafolio (Página principal).
 * Ensambla de forma limpia y ordenada cada una de las secciones del sitio web.
 * ============================================================================
 */
export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Sección 1: Bienvenida, biografía y presentación */}
      <HeroSection />

      {/* Sección 2: Cinta animada continua de Stack Tecnológico (Infinite Marquee) */}
      <TechMarqueeSection />

      {/* Sección 3: Trayectoria profesional y formación (Roadmap de hitos) */}
      <ExperienceSection />

      {/* Sección 4: Proyectos destacados con filtro interactivo por categoría */}
      <ProjectsSection />

      {/* Sección 5: Acreditaciones oficiales, título Duoc UC y cursos */}
      <CertificationsSection />

      {/* Sección 6: Conexión directa y correo */}
      <ContactSection />
    </main>
  );
};
