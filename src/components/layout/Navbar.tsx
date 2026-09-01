import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { DATOS_PERSONALES } from '../../data/personal.data';

/**
 * ============================================================================
 * ARCHIVO: src/components/layout/Navbar.tsx
 * PROPÓSITO: Barra de navegación fija con enlaces y botón de descarga de CV.
 * ============================================================================
 */
export const Navbar: React.FC = () => {
  // Estado para abrir/cerrar el menú en celulares
  const [estaAbierto, setEstaAbierto] = useState(false);

  // Estado para saber si el usuario hizo scroll hacia abajo y activar el efecto glass
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setConScroll(window.scrollY > 20);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  // Lista de enlaces de navegación
  const enlacesNavegacion = [
    { nombre: 'Inicio', ruta: '#hero' },
    { nombre: 'Trayectoria', ruta: '#experience' },
    { nombre: 'Proyectos', ruta: '#projects' },
    { nombre: 'Certificaciones', ruta: '#certifications' },
    { nombre: 'Contacto', ruta: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        conScroll
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo y Nombre */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-white font-bold text-base tracking-tight transition-colors"
        >
          <span className="text-2xl">
            Elvis{' '}
            <span className="bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent font-extrabold">
              Velásquez
            </span>
          </span>
        </a>

        {/* Enlaces para pantalla de computador */}
        <nav className="hidden md:flex items-center gap-7">
          {enlacesNavegacion.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.ruta}
              className="text-xs font-mono text-zinc-300 hover:text-purple-300 transition-colors py-1"
            >
              {enlace.nombre}
            </a>
          ))}

          {/* Botón Descargar CV */}
          <a
            href={DATOS_PERSONALES.rutaCv}
            target="_blank"
            rel="noopener noreferrer"
            download="CV - Evelasquez.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-lg bg-white hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(168,85,247,1.9)] hover:text-white text-zinc-950 shadow-sm transition-all"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Descargar CV</span>
          </a>
        </nav>

        {/* Botón hamburguesa para celulares */}
        <div className="md:hidden">
          <button
            onClick={() => setEstaAbierto(!estaAbierto)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {estaAbierto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable en celulares */}
      {estaAbierto && (
        <div className="md:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-zinc-800 px-6 py-6 space-y-3 shadow-2xl">
          {enlacesNavegacion.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.ruta}
              onClick={() => setEstaAbierto(false)}
              className="block text-sm font-mono text-zinc-300 hover:text-purple-400 transition-colors py-2 border-b border-zinc-900"
            >
              {enlace.nombre}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={DATOS_PERSONALES.rutaCv}
              target="_blank"
              rel="noopener noreferrer"
              download="CV - Evelasquez.pdf"
              onClick={() => setEstaAbierto(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-mono font-bold rounded-lg bg-white text-zinc-950 shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
