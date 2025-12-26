import { Link } from "wouter";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

export function Footer() {
  return (
    <footer className="relative glass-footer pt-20 pb-8 overflow-hidden mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: Logo, description, contact */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <img 
            src={logo} 
            alt="IDBH Design" 
            className="h-10 brightness-0 invert opacity-70"
            data-testid="img-footer-logo"
          />
          <p className="text-white/50 text-sm max-w-md leading-relaxed">
            IDBH Design specializes in healthcare interior design, creating thoughtful environments for assisted living communities and senior care facilities.
          </p>
          <div className="flex flex-col items-end gap-2 text-white/60 text-sm">
            <a 
              href="mailto:info@idbh.com" 
              className="hover:text-white transition-colors duration-300"
              data-testid="link-footer-email"
            >
              info@idbh.com
            </a>
            <a 
              href="tel:732-813-8500" 
              className="hover:text-white transition-colors duration-300"
              data-testid="link-footer-phone"
            >
              732-813-8500
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="glass-divider mb-8" />
        
        {/* Bottom row: Nav and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/" 
              className="text-white/50 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
              data-testid="link-footer-home"
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-white/50 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
              data-testid="link-footer-about"
            >
              About
            </a>
            <Link 
              href="/projects" 
              className="text-white/50 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
              data-testid="link-footer-projects"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-white/50 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
              data-testid="link-footer-contact"
            >
              Contact
            </Link>
          </nav>
          <p className="text-white/30 text-xs uppercase tracking-[0.15em]" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} IDBH Design
          </p>
        </div>
      </div>
      
      {/* Large decorative logo text */}
      <div className="relative w-full">
        <h2 
          className="font-serif text-[12vw] md:text-[10vw] leading-none text-white/[0.07] text-center select-none whitespace-nowrap"
          aria-hidden="true"
        >
          IDBH Design
        </h2>
      </div>
    </footer>
  );
}
