import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/personal.data';

/**
 * Navbar.tsx
 * ============================================================================
 * Barra de navegación fija con botón de "Descargar CV".
 * ============================================================================
 */
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Trayectoria', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Nombre */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group text-white font-bold text-base tracking-tight transition-colors">

        
        {/*  <img src="/logo.svg" alt="Logo Elvis Velásquez" className="w-6 h-6 object-contain" />*/ }


          
          <span className='text-2xl'>
            Elvis <span className="bg-linear-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent font-extrabold">Velásquez</span>
          </span>
        </a>

        {/* Enlaces de escritorio */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-zinc-300 hover:text-purple-300 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}



          {/* Botón Descargar CV */}
          <a
            href={PERSONAL_DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV - Evelasquez.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold rounded-lg bg-white hover:bg-zinc-800  hover:shadow-[0_0_20px_rgba(168,85,247,1.9)]  hover:text-white text-zinc-950 shadow-sm transition-all"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Descargar CV</span>
          </a>
        </nav>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-zinc-800 px-6 py-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono text-zinc-300 hover:text-amber-400 transition-colors py-2 border-b border-zinc-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PERSONAL_DATA.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Curriculum-Elvis-Velasquez.pdf"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-mono font-bold rounded-lg bg-amber-400 text-zinc-950 shadow-md"
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
