import React from 'react';
import { Award, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certifications.data';
import { SectionTitle } from '../ui/SectionTitle';

/**
 * CertificationsSection.tsx
 * ============================================================================
 * Sección de Credenciales, Certificaciones y Título Profesional.
 * Estilo sobrio y limpio en gris carbón y ámbar.
 * ============================================================================
 */
export const CertificationsSection: React.FC = () => {
  const universityDegree = CERTIFICATIONS.find((c) => c.id === 'duoc-degree');
  const courseCertifications = CERTIFICATIONS.filter((c) => c.id !== 'duoc-degree');

  return (
    <section id="certifications" className="py-24 bg-linear-to-b from-[#0d0814] to-[#09090b] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <SectionTitle
          regularText="Credenciales &"
          highlightText="Cursos"
          subtitle="Acreditaciones & Formación Continua"
        />

        {/* ==================================================================
            TÍTULO PROFESIONAL DESTACADO (DUOC UC)
           ================================================================== */}
        {universityDegree && (
          <div className="mb-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-zinc-700 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-purple-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 bg-purple-900/20 px-2.5 py-0.5 rounded border border-purple-400/80">
                      {universityDegree.institution}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      • {universityDegree.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {universityDegree.name}
                  </h3>

                  <p className="text-sm text-zinc-300 max-w-2xl font-light">
                    {universityDegree.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {universityDegree.skills.map((skill) => (
                      <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón para ver el PDF del título */}
              {universityDegree.linkUrl && (
                <div className="shrink-0 w-full md:w-auto">
                  <a
                    href={universityDegree.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-purple-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all font-mono"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Ver Certificado (PDF)</span>
                  </a>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ==================================================================
            GRILLA DE CURSOS Y CERTIFICACIONES
           ================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCertifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#121215]/90 border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabecera de la tarjeta */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-zinc-400 mt-0.5">
                        {cert.institution}
                      </p>
                    </div>
                  </div>
                  
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 font-light">
                  {cert.description}
                </p>

                {/* Tags de temas */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Código de verificación */}
                {cert.certId && (
                  <p className="text-[11px] font-mono text-zinc-500 mb-3">
                    ID: <span className="text-zinc-300 font-semibold">{cert.certId}</span>
                  </p>
                )}
              </div>

              {/* Enlace de validación */}
              {cert.linkUrl && (
                <div className="pt-3 border-t border-zinc-800/80 mt-auto">
                  <a
                    href={cert.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-purple-300 transition-colors"
                  >
                    <span>{cert.linkText || 'Validar Credencial'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
