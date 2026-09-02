import React from 'react';
import { TECNOLOGIAS_FILA_1, TECNOLOGIAS_FILA_2 } from '../../data/tecnologias.data';
import { Cpu } from 'lucide-react';

/**
 * ============================================================================
 * ARCHIVO: src/components/sections/TechMarqueeSection.tsx
 * PROPÓSITO: Carrusel continuo de tecnologías y herramientas dominadas.
 * ============================================================================
 */
export const TechMarqueeSection: React.FC = () => {
  // Duplicamos las listas para crear el efecto de carrusel infinito sin cortes
  const fila1Duplicada = [...TECNOLOGIAS_FILA_1, ...TECNOLOGIAS_FILA_1, ...TECNOLOGIAS_FILA_1];
  const fila2Duplicada = [...TECNOLOGIAS_FILA_2, ...TECNOLOGIAS_FILA_2, ...TECNOLOGIAS_FILA_2];

  return (
    <section id="tech-stack" className="py-14 bg-[#0c0a12] border-y border-purple-950/40 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
            Stack Tecnológico & Herramientas
          </span>
        </div>
        <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
          // En constante evolución
        </span>
      </div>

      {/* Contenedor con máscara de desvanecimiento lateral */}
      <div className="marquee-container marquee-mask space-y-3.5 overflow-hidden">
        
        {/* Fila 1: Movimiento hacia la izquierda */}
        <div className="animate-marquee-left flex gap-3">
          {fila1Duplicada.map((tech, indice) => (
            <div
              key={`fila1-${tech.nombre}-${indice}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-purple-500/40 shadow-sm transition-all duration-200 cursor-default group whitespace-nowrap"
            >
              {tech.rutaIcono ? (
                <img src={tech.rutaIcono} alt={tech.nombre} className="w-4 h-4 object-contain" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-purple-400 transition-colors" />
              )}
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 group-hover:text-white">
                {tech.nombre}
              </span>
            </div>
          ))}
        </div>

        {/* Fila 2: Movimiento hacia la derecha */}
        <div className="animate-marquee-right flex gap-3">
          {fila2Duplicada.map((tech, indice) => (
            <div
              key={`fila2-${tech.nombre}-${indice}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-purple-500/40 shadow-sm transition-all duration-200 cursor-default group whitespace-nowrap"
            >
              {tech.rutaIcono ? (
                <img src={tech.rutaIcono} alt={tech.nombre} className="w-4 h-4 object-contain" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-purple-400 transition-colors" />
              )}
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 group-hover:text-white">
                {tech.nombre}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
