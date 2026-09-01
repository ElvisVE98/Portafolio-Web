import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { DATOS_PERSONALES } from '../../data/personal.data';

/**
 * ============================================================================
 * ARCHIVO: src/components/layout/Footer.tsx
 * PROPÓSITO: Pie de página que se fusiona con la sección de contacto en púrpura.
 * ============================================================================
 */
export const Footer: React.FC = () => {
  const anioActual = new Date().getFullYear();

  // Función para subir suavemente al inicio de la página
  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-950/60 bg-[#0e071a] py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Créditos y autor */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-zinc-200">
            Diseñado & Desarrollado por <span className="text-purple-400 font-semibold">{DATOS_PERSONALES.nombre}</span>
          </p>
          <p className="text-xs text-zinc-500 mt-1 font-mono">
            React 19 • TypeScript • Tailwind CSS • © {anioActual}
          </p>
        </div>

        {/* Enlaces a redes sociales y botón para volver arriba */}
        <div className="flex items-center gap-3">
          <a
            href={DATOS_PERSONALES.redesSociales.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="LinkedIn de Elvis Velásquez"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={DATOS_PERSONALES.redesSociales.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="GitHub de Elvis Velásquez"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${DATOS_PERSONALES.correo}`}
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="Enviar correo"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={irArriba}
            className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all ml-2"
            aria-label="Volver arriba"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
