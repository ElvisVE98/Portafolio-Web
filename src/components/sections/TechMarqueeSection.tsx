import React from 'react';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../../data/techstack.data';
import { Cpu } from 'lucide-react';

/**
 * TechMarqueeSection.tsx
 * ============================================================================
 * Sección de Stack Tecnológico con animación Infinite Marquee.
 * Soporta íconos SVG personalizados por tecnología si se especifican en `techstack.data.ts`.
 * ============================================================================
 */
export const TechMarqueeSection: React.FC = () => {
  const row1Duplicated = [...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1];
  const row2Duplicated = [...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2];

  return (
    <section id="tech-stack" className="py-14 bg-[#0c0c0e] border-y border-zinc-800/80 relative overflow-hidden">
      
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
          {row1Duplicated.map((tech, index) => (
            <div
              key={`row1-${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 shadow-sm transition-all duration-200 cursor-default group whitespace-nowrap"
            >
              {tech.iconUrl ? (
                <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-purple-400 transition-colors" />
              )}
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Fila 2: Movimiento hacia la derecha */}
        <div className="animate-marquee-right flex gap-3">
          {row2Duplicated.map((tech, index) => (
            <div
              key={`row2-${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800/90 hover:border-zinc-700 shadow-sm transition-all duration-200 cursor-default group whitespace-nowrap"
            >
              {tech.iconUrl ? (
                <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-purple-400 transition-colors" />
              )}
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
