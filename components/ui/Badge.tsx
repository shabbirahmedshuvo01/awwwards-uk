import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'dark' | 'rating' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  ...props
}: BadgeProps) {
  const variantClasses = {
    accent: 'bg-[#0070f3] text-white shadow-sm',
    dark: 'bg-black/60 backdrop-blur-md text-zinc-200 border border-white/15',
    rating: 'bg-black/75 backdrop-blur-md text-white border border-white/15 font-mono',
    outline: 'bg-transparent text-zinc-300 border border-zinc-700',
    default: 'bg-zinc-900/90 text-zinc-300 border border-zinc-800',
  };

  const sizeClasses = {
    sm: 'text-[10px] sm:text-[11px] font-medium tracking-wider uppercase px-3 py-1',
    md: 'text-xs font-medium tracking-wider uppercase px-3.5 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
