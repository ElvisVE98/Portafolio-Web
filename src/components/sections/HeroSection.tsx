import React from 'react';
import { ArrowRight, MapPin, GraduationCap, Code2, Send, ChevronDown } from 'lucide-react';
import { DATOS_PERSONALES } from '../../data/personal.data';
import profilePhoto from '../../assets/images/FOTO_RETRATO2.jpeg';

/**
 * ============================================================================
 * ARCHIVO: src/components/sections/HeroSection.tsx
 * PROPÓSITO: Sección principal de bienvenida a pantalla completa.
 * ============================================================================
 */
export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      {/* Capa Overlay: Oscurece la foto con degradado para legibilidad perfecta */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/80 to-[#09090b]/40 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* =================================================================
              COLUMNA IZQUIERDA: Presentación personal
             ================================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Texto de disponibilidad con degradado llamativo */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>

              <span className="text-xs sm:text-sm font-mono font-bold tracking-wide bg-linear-to-r from-violet-400 via-red-300 to-blue-400 bg-clip-text text-transparent">
                {DATOS_PERSONALES.textoDisponibilidad}
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {DATOS_PERSONALES.titulo} <br />
              <span className="text-purple-500">
                {DATOS_PERSONALES.tituloResaltado}
              </span>
            </h1>

            {/* Párrafo de Biografía */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              Hola, soy <strong className="font-semibold text-white">{DATOS_PERSONALES.nombre}</strong>. Ingeniero en Informática egresado de <strong className="font-semibold text-white">Duoc UC</strong>, enfocado en desarrollo Full Stack y tecnologías web modernas. Construyo aplicaciones rápidas, escalables y orientadas a resolver problemas reales de negocio.
            </p>

            {/* Micro-tarjetas de datos rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase text-zinc-500">Ubicación</p>
                  <p className="text-xs font-semibold text-zinc-200">{DATOS_PERSONALES.ubicacion}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase text-zinc-500">Título</p>
                  <p className="text-xs font-semibold text-zinc-200">Ing. en Informática</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase text-zinc-500">Enfoque</p>
                  <p className="text-xs font-semibold text-zinc-200">Full Stack & Datos</p>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(168,85,247,1.9)] hover:text-white text-zinc-950 font-bold text-xs sm:text-sm font-mono shadow-lg transition-all"
              >
                <span>Ver Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm font-mono transition-all"
              >
                <Send className="w-3.5 h-3.5 text-purple-400" />
                <span>Contáctame</span>
              </a>
            </div>

          </div>

          {/* =================================================================
              COLUMNA DERECHA: Foto de perfil con marco carbón
             ================================================================= */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              
              {/* Esquinas decorativas sutiles */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400/80 z-20" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400/80 z-20" />

              {/* Marco de la foto */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 p-2.5 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt={`Foto de ${DATOS_PERSONALES.nombre}`}
                  className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-xl"
                />

                {/* Etiqueta flotante inferior */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white leading-none">{DATOS_PERSONALES.nombre}</p>
                    <p className="text-[10px] font-mono text-zinc-400 mt-0.5">Software Developer</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Indicador de scroll inferior animado */}
      <div className="w-full flex justify-center pt-8 relative z-10">
        <a
          href="#tech-stack"
          className="inline-flex flex-col items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-white transition-colors"
          aria-label="Ir a la siguiente sección"
        >
          <span>Explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
