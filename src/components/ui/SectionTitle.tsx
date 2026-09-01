import React from 'react';

/**
 * SectionTitle.tsx
 * ============================================================================
 * Componente unificado para los títulos de cada sección del portafolio.
 * Estilo sobrio y maduro con acento ámbar.
 * ============================================================================
 */
interface SectionTitleProps {
  regularText: string;
  highlightText: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  regularText,
  highlightText,
  subtitle,
  centered = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="font-mono text-xs uppercase tracking-widest text-purple-400/90 font-semibold mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {regularText}{' '}
        <span className="text-purple-400">
          {highlightText}
        </span>
      </h2>
    </div>
  );
};
