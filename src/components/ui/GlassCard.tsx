import React from 'react';

/**
 * GlassCard.tsx
 * ============================================================================
 * Tarjeta contenedor reutilizable con estilo Carbón / Zinc neutro.
 * ============================================================================
 */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`
        relative rounded-2xl bg-[#121215]/90 p-6 md:p-8 
        backdrop-blur-xl border border-zinc-800/80
        shadow-xl shadow-black/40
        transition-all duration-300 ease-out
        ${hoverEffect ? 'hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-2xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
