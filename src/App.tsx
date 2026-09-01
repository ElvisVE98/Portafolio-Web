import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

/**
 * App.tsx
 * ============================================================================
 * Componente Raíz de la Aplicación React.
 * Define la estructura general: Barra de navegación superior, la página principal
 * y el pie de página.
 * ============================================================================
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenido de la página */}
      <HomePage />

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default App;
