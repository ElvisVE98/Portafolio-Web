import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/SocialIcons';
import { DATOS_PERSONALES } from '../../data/personal.data';

/**
 * ============================================================================
 * ARCHIVO: src/components/sections/ContactSection.tsx
 * PROPÓSITO: Sección de Contacto Directo con enlaces y copia de correo.
 * ============================================================================
 */
export const ContactSection: React.FC = () => {
  // Estado para mostrar el mensaje de "¡Copiado al portapapeles!"
  const [estaCopiado, setEstaCopiado] = useState(false);

  // Función para copiar la dirección de correo al portapapeles
  const copiarCorreo = () => {
    navigator.clipboard.writeText(DATOS_PERSONALES.correo);
    setEstaCopiado(true);
    setTimeout(() => setEstaCopiado(false), 2500);
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-16 relative overflow-hidden bg-linear-to-b from-[#09090b] via-[#1a0b2e]/40 to-[#0e071a]"
    >
      
      {/* Resplandor ambiental púrpura suave de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="py-14 px-6 sm:px-12 rounded-3xl bg-[#120a1f]/85 border border-purple-500/20 shadow-2xl shadow-purple-950/40 backdrop-blur-2xl">
          
          {/* Subtítulo monoespaciado */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold mb-4">
            <span>¿Hablamos de un proyecto?</span>
          </div>

          {/* Título de impacto con degradado */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Vamos a crear{' '}
            <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
              soluciones que sumen valor
            </span>
          </h2>

          {/* Disponibilidad y ubicación */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-light">
            Actualmente resido en <strong className="text-white font-semibold">{DATOS_PERSONALES.ubicacion}</strong> y estoy {DATOS_PERSONALES.disponibilidad}
          </p>

          {/* Botones de acción directa */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            
            {/* Botón Principal: Abre el cliente de correo */}
            <a
              href={`mailto:${DATOS_PERSONALES.correo}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs sm:text-sm font-mono shadow-lg shadow-purple-500/25 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-[1.01] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{DATOS_PERSONALES.correo}</span>
            </a>

            {/* Botón Secundario: Copiar correo al portapapeles */}
            <button
              onClick={copiarCorreo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-zinc-900/90 border border-zinc-700 hover:border-purple-500/40 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm font-mono transition-all"
              title="Copiar dirección de correo"
            >
              {estaCopiado ? (
                <>
                  <Check className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400">¡Copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copiar correo</span>
                </>
              )}
            </button>
          </div>

          {/* Enlaces de Redes Sociales */}
          <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-center gap-3">
            <a
              href={DATOS_PERSONALES.redesSociales.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-purple-400 hover:border-purple-500/40 text-xs font-mono font-semibold transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-purple-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={DATOS_PERSONALES.redesSociales.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-purple-400 hover:border-purple-500/40 text-xs font-mono font-semibold transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
