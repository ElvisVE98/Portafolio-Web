import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Layers, Image as ImageIcon } from 'lucide-react';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCategory } from '../../types/project.types';
import { SectionTitle } from '../ui/SectionTitle';

/**
 * ProjectsSection.tsx
 * ============================================================================
 * Sección de Proyectos con soporte para imágenes de vista previa (Screenshots).
 * Cada tarjeta cuenta con un contenedor preparado para renderizar las capturas
 * de tus proyectos con zoom al hacer hover.
 * ============================================================================
 */
export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const featuredProject = PROJECTS.find((p) => p.isFeatured);
  
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'Todos los Proyectos' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'backend-data', label: 'Backend & Datos' },
  ];

  return (
    <section id="projects" className="py-24 bg-linear-to-b from-[#1c102d] via-[#2f1032] to-[#0d0814] relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <SectionTitle
          regularText="Proyectos"
          highlightText="Destacados"
          subtitle="Portfolio & Soluciones Reales"
        />

        {/* ==================================================================
            PROYECTO ESTRELLA (Clickbot Platform Showcase)
           ================================================================== */}
        {featuredProject && (
          <div className="mb-14">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-[#121215] border border-zinc-700/80 shadow-2xl backdrop-blur-xl group">
              
              {/* Encabezado del proyecto estrella */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-purple/20 text-purple-300 border border-purple-400/80">
                  {featuredProject.featuredBadge || 'PROYECTO ESTRELLA'}
                </span>

                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-white hover:bg-purple-300 text-zinc-950 shadow-sm transition-all font-mono"
                  >
                    <span>Ver Proyecto en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Título y descripción */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {featuredProject.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {featuredProject.description}
              </p>

              {/* Columnas de desglose técnico */}
              {featuredProject.detailColumns && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-[#09090b] border border-zinc-800 mb-6">
                  {featuredProject.detailColumns.map((col, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className={`text-xs font-mono uppercase font-bold tracking-wider ${col.colorClass || 'text-zinc-300'}`}>
                        {col.title}
                      </h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-1.5">
                            <span className="text-emerald-400 font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags del proyecto estrella */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ==================================================================
            FILTRO INTERACTIVO DE PROYECTOS
           ================================================================== */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Explorar por Categoría:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.key
                    ? 'bg-purple-400 text-zinc-950 font-bold shadow-sm'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ==================================================================
            GRILLA DE PROYECTOS CON CONTENEDOR DE IMAGEN
           ================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => !p.isFeatured || activeCategory !== 'all')
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#121215]/90 border border-zinc-800 hover:border-zinc-700 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Espacio para la vista previa / captura de pantalla */}
                  <div className="relative aspect-video w-full bg-zinc-950 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`Captura del proyecto ${project.title}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Si aún no has subido la imagen, muestra el placeholder elegante sin romperse
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}

                    {/* Placeholder elegante en caso de que aún no exista la imagen */}
                    <div className={`fallback-placeholder ${project.imageUrl ? 'hidden' : ''} flex flex-col items-center justify-center text-zinc-600 gap-1.5 p-4`}>
                      <ImageIcon className="w-8 h-8 text-zinc-700 group-hover:text-purple-400/50 transition-colors" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase">Vista previa</span>
                    </div>

                    {/* Botón flotante directo al demo */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-purple-300 shadow-lg transition-all"
                        title="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-zinc-400">
                      <FolderGit2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                        {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend & Data'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags al pie de cada tarjeta */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
