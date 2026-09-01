import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/personal.data';

/**
 * Footer.tsx
 * ============================================================================
 * Pie de página que se fusiona de forma continua con la sección de contacto (Púrpura).
 * ============================================================================
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-950/60 bg-[#0e071a] py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Información y créditos */}
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-zinc-200">
            Diseñado & Desarrollado por <span className="text-purple-400 font-semibold">{PERSONAL_DATA.name}</span>
          </p>
          <p className="text-xs text-zinc-500 mt-1 font-mono">
            React 19 • TypeScript • Tailwind CSS • © {currentYear}
          </p>
        </div>

        {/* Enlaces a redes sociales y botón para subir */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="LinkedIn de Elvis Velásquez"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="GitHub de Elvis Velásquez"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
            aria-label="Enviar correo"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
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
