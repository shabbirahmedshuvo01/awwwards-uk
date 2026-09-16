import React from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'dark' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium tracking-tight rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0070f3] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variantClasses = {
    primary: 'bg-[#0070f3] text-white hover:bg-blue-500 shadow-sm shadow-blue-500/20',
    dark: 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800/80',
    outline: 'bg-transparent text-white border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50',
    white: 'bg-white text-zinc-950 hover:bg-zinc-100 font-semibold',
    ghost: 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/50',
  };

  const sizeClasses = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-7 py-3 gap-2.5',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={combinedClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}
