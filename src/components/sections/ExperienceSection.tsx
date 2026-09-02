import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCIAS } from '../../data/experiencia.data';
import { SectionTitle } from '../ui/SectionTitle';

/**
 * ============================================================================
 * ARCHIVO: src/components/sections/ExperienceSection.tsx
 * PROPÓSITO: Sección de Trayectoria Profesional y Roadmap laboral.
 * ============================================================================
 */
export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-linear-to-b from-[#0c0a12] via-[#0f0b18] to-[#140d22] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <SectionTitle
          regularText="Trayectoria"
          highlightText="Profesional"
          subtitle="Experiencia Laboral & Formación"
        />

        {/* Contenedor del Roadmap / Línea de tiempo */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10 ml-2 sm:ml-4">
          
          {EXPERIENCIAS.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Punto indicador del Timeline */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.esActual
                    ? 'bg-purple-500 border-purple-300 shadow-md shadow-purple-500/30 ring-4 ring-purple-500/15'
                    : 'bg-zinc-900 border-zinc-700 group-hover:border-purple-500/40'
                }`}
              />

              {/* Tarjeta de Experiencia */}
              <div className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 border ${
                exp.esActual
                  ? 'bg-[#121215] border-purple-500/30 shadow-xl'
                  : 'bg-[#121215]/80 border-zinc-800/80 hover:border-purple-500/30'
              }`}>
                
                {/* Cabecera del puesto */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        {exp.cargo}
                      </h3>
                      
                    </div>

                    <p className="text-sm font-semibold text-zinc-300 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      {exp.empresa}
                    </p>
                  </div>
                  
                  {/* Fecha / Período */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1 rounded-lg w-fit border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {exp.periodo}
                  </span>
                </div>

                {/* Resumen del rol */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5 font-light">
                  {exp.descripcion}
                </p>

                {/* Lista de Logros y Responsabilidades */}
                {exp.logros.length > 0 && (
                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    {exp.logros.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white font-medium">{item.categoria}:</strong>{' '}
                          {item.texto}
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
