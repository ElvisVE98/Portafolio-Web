import React from 'react';

/**
 * Badge.tsx
 * ============================================================================
 * Etiquetas y pastillas de tecnología en diseño sobrio y monocromático.
 * ============================================================================
 */
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'amber' | 'featured';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = ''
}) => {
  const variantStyles = {
    neutral: 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20',
    featured: 'bg-amber-500/10 text-amber-300 border-amber-400/40 shadow-sm'
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium 
        rounded-lg border transition-all duration-200
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
