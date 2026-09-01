import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/experience.data';
import { SectionTitle } from '../ui/SectionTitle';

/**
 * ExperienceSection.tsx
 * ============================================================================
 * Sección de Trayectoria Profesional en estilo Linear/Raycast.
 * Destaca el rol actual con indicador ámbar y tarjetas en gris carbón neutro.
 * ============================================================================
 */
export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-linear-to-b from-[#09090b] to-[#1c102d] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <SectionTitle
          regularText="Trayectoria"
          highlightText="Profesional"
          subtitle="Experiencia Laboral & Formación"
        />

        {/* Contenedor del Roadmap */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-600 space-y-10 ml-2 sm:ml-4">
          
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Punto indicador del Timeline */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-emerald-400 border-emerald-300 shadow-md shadow-amber-500/20 ring-4 ring-amber-500/10'
                    : 'bg-zinc-900 border-zinc-600 group-hover:border-zinc-200'
                }`}
              />

              {/* Tarjeta de Experiencia */}
              <div className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
                exp.isCurrent
                  ? 'bg-[#121215] border-zinc-400/90 shadow-xl'
                  : 'bg-[#121215]/80 border-zinc-700/80 hover:border-zinc-400'
              }`}>
                
                {/* Cabecera del puesto */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4 mb-4">
                
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        {exp.jobTitle}
                      </h3>  
                    </div>

                    <p className="text-sm font-semibold text-zinc-300 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Fecha / Período */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-lg w-fit border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    {exp.period}
                  </span>
                </div>

                {/* Resumen del rol */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5 font-light">
                  {exp.description}
                </p>

                {/* Lista de Logros y Responsabilidades */}
                {exp.highlights.length > 0 && (
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white font-medium">{item.category}:</strong>{' '}
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
