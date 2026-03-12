import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: 'primary' | 'outline' | 'ghost';
 size?: 'sm' | 'md' | 'lg';
 href?: string;
 className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className = '', variant = 'primary', size = 'md', href, children, ...props }, ref) => {
 
 const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50";
 
 const variants = {
 primary: "bg-gold text-[#000000] hover:bg-gold-light",
 outline: "border border-gold text-[#dac5a7] hover:bg-gold/10",
 ghost: "hover:bg-white/5 text-foreground hover:text-[#dac5a7] transition-colors",
 };

 const sizes = {
 sm: "h-8 px-3 text-xs",
 md: "h-11 px-6 py-2 text-sm uppercase tracking-wider",
 lg: "h-14 px-8 text-base uppercase tracking-wider",
 };

 const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

 if (href) {
 return (
 <Link href={href} className={combinedClasses}>
 {children}
 </Link>
 );
 }

 return (
 <button
 className={combinedClasses}
 ref={ref}
 {...props}
 >
 {children}
 </button>
 );
 }
);

Button.displayName = "Button";
