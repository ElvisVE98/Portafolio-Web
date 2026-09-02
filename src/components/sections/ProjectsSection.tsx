import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Layers, Image as ImageIcon } from 'lucide-react';
import { PROYECTOS } from '../../data/proyectos.data';
import { CategoriaProyecto } from '../../types/proyectos.types';
import { SectionTitle } from '../ui/SectionTitle';

/**
 * ============================================================================
 * ARCHIVO: src/components/sections/ProjectsSection.tsx
 * PROPÓSITO: Grilla de proyectos con filtro interactivo por categoría e imágenes.
 * ============================================================================
 */
export const ProjectsSection: React.FC = () => {
  // Estado para la categoría de filtro seleccionada
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaProyecto>('todos');

  // Buscamos el proyecto estrella principal
  const proyectoEstrella = PROYECTOS.find((p) => p.esDestacado);
  
  // Filtramos la lista según la categoría seleccionada
  const proyectosFiltrados = PROYECTOS.filter((proyecto) => {
    if (categoriaActiva === 'todos') return true;
    return proyecto.categoria === categoriaActiva;
  });

  // Lista de botones de categorías
  const categorias: { clave: CategoriaProyecto; etiqueta: string }[] = [
    { clave: 'todos', etiqueta: 'Todos los Proyectos' },
    { clave: 'fullstack', etiqueta: 'Full Stack' },
    { clave: 'frontend', etiqueta: 'Frontend & UI' },
    { clave: 'backend-datos', etiqueta: 'Backend & Datos' },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#140d22] via-[#1b1030] to-[#140d22] relative">
      
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
        {proyectoEstrella && (
          <div className="mb-14">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-[#121215] border border-purple-500/30 shadow-2xl backdrop-blur-xl group">
              
              {/* Encabezado del proyecto estrella */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  {proyectoEstrella.insigniaDestacado || 'PROYECTO ESTRELLA'}
                </span>

                {proyectoEstrella.enlaceDemo && (
                  <a
                    href={proyectoEstrella.enlaceDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-white hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(168,85,247,1.9)] hover:text-white text-zinc-950 shadow-sm transition-all font-mono"
                  >
                    <span>Ver Proyecto en Vivo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Título y descripción */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {proyectoEstrella.titulo}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {proyectoEstrella.descripcion}
              </p>

              {/* Columnas de desglose técnico */}
              {proyectoEstrella.columnasDetalle && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-[#09090b] border border-zinc-800 mb-6">
                  {proyectoEstrella.columnasDetalle.map((col, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className={`text-xs font-mono uppercase font-bold tracking-wider ${col.claseColor || 'text-zinc-300'}`}>
                        {col.titulo}
                      </h4>
                      <ul className="space-y-1 text-xs text-zinc-400">
                        {col.elementos.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-1.5">
                            <span className="text-purple-400 font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Etiquetas del proyecto estrella */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                {proyectoEstrella.etiquetas.map((tag) => (
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
            FILTRO INTERACTIVO DE CATEGORÍAS
           ================================================================== */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Explorar por Categoría:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat.clave}
                onClick={() => setCategoriaActiva(cat.clave)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  categoriaActiva === cat.clave
                    ? 'bg-white text-zinc-950 font-bold shadow-[0_0_15px_rgba(168,85,247,0.7)]'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-purple-500/40'
                }`}
              >
                {cat.etiqueta}
              </button>
            ))}
          </div>
        </div>

        {/* ==================================================================
            GRILLA DE TARJETAS DE PROYECTOS
           ================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosFiltrados
            .filter((p) => !p.esDestacado || categoriaActiva !== 'todos')
            .map((proyecto) => (
              <div
                key={proyecto.id}
                className="group rounded-2xl bg-[#121215]/90 border border-zinc-800 hover:border-purple-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Espacio para la vista previa / captura de pantalla */}
                  <div className="relative aspect-video w-full bg-zinc-950 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center">
                    {proyecto.rutaImagen ? (
                      <img
                        src={proyecto.rutaImagen}
                        alt={`Captura del proyecto ${proyecto.titulo}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}

                    {/* Placeholder elegante en caso de que aún no exista la imagen */}
                    <div className={`fallback-placeholder ${proyecto.rutaImagen ? 'hidden' : ''} flex flex-col items-center justify-center text-zinc-600 gap-1.5 p-4`}>
                      <ImageIcon className="w-8 h-8 text-zinc-700 group-hover:text-purple-400/50 transition-colors" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase">Vista previa</span>
                    </div>

                    {/* Botón flotante directo al demo */}
                    {proyecto.enlaceDemo && (
                      <a
                        href={proyecto.enlaceDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 p-2 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-purple-400 shadow-lg transition-all"
                        title="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-zinc-400">
                      <FolderGit2 className="w-4 h-4 text-purple-400" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                        {proyecto.categoria === 'fullstack' ? 'Full Stack' : proyecto.categoria === 'frontend' ? 'Frontend' : 'Backend & Datos'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {proyecto.titulo}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                      {proyecto.descripcion}
                    </p>
                  </div>
                </div>

                {/* Etiquetas al pie de cada tarjeta */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80 mt-auto">
                    {proyecto.etiquetas.map((tag) => (
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
