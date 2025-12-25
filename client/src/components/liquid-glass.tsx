import { ReactNode, ButtonHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  padding?: string;
}

interface LiquidGlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "primary" | "outline";
  className?: string;
}

export function LiquidGlassFilter() {
  return (
    <svg style={{ display: 'none' }} aria-hidden="true">
      <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.008 0.008" 
          numOctaves={2} 
          seed={92} 
          result="noise" 
        />
        <feGaussianBlur in="noise" stdDeviation={2} result="blurred" />
        <feDisplacementMap 
          in="SourceGraphic" 
          in2="blurred" 
          scale={70} 
          xChannelSelector="R" 
          yChannelSelector="G" 
        />
      </filter>
    </svg>
  );
}

export function LiquidGlass({ children, className = "", padding = "p-8 md:p-12" }: LiquidGlassProps) {
  return (
    <div className={`liquid-glass-container ${className}`}>
      <div className="liquid-glass-filter" />
      <div className="liquid-glass-overlay" />
      <div className="liquid-glass-specular" />
      <div className={`liquid-glass-content ${padding}`}>
        {children}
      </div>
    </div>
  );
}

export function LiquidGlassCard({ children, className = "", padding = "p-12 md:p-20" }: LiquidGlassProps) {
  return (
    <div className={`liquid-glass-container rounded-2xl ${className}`}>
      <div className="liquid-glass-filter" />
      <div className="liquid-glass-overlay" />
      <div className="liquid-glass-specular" />
      <div className={`liquid-glass-content ${padding}`}>
        {children}
      </div>
    </div>
  );
}

export function LiquidGlassButton({ 
  children, 
  size = "default", 
  variant = "primary",
  className = "",
  ...props 
}: LiquidGlassButtonProps) {
  const baseClasses = "liquid-glass-button text-white transition-all duration-300";
  const variantClasses = variant === "outline" 
    ? "liquid-glass-button-outline" 
    : "liquid-glass-button-primary";
  
  return (
    <Button
      size={size}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
