import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiFacebook } from "react-icons/si";
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
            className="h-10 opacity-80"
            data-testid="img-footer-logo"
          />
          <p className="text-foreground/60 text-sm max-w-md leading-relaxed">
            IDBH Design specializes in healthcare interior design, creating thoughtful environments for assisted living communities and senior care facilities.
          </p>
          <div className="flex flex-col items-start md:items-end gap-2 text-foreground/70 text-sm">
            <a 
              href="mailto:info@idbh.com" 
              className="hover:text-foreground transition-colors duration-300"
              data-testid="link-footer-email"
            >
              info@idbh.com
            </a>
            <a 
              href="tel:732-813-8500" 
              className="hover:text-foreground transition-colors duration-300"
              data-testid="link-footer-phone"
            >
              732-813-8500
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="glass-divider mb-8" />
        
        {/* Bottom row: Nav, social, copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/" 
              className="text-foreground/50 text-xs uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-300" 
              data-testid="link-footer-home"
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-foreground/50 text-xs uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-300" 
              data-testid="link-footer-about"
            >
              About
            </a>
            <Link 
              href="/projects" 
              className="text-foreground/50 text-xs uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-300" 
              data-testid="link-footer-projects"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground/50 text-xs uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-300" 
              data-testid="link-footer-contact"
            >
              Contact
            </Link>
          </nav>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors duration-300"
              data-testid="link-social-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors duration-300"
              data-testid="link-social-linkedin"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-foreground transition-colors duration-300"
              data-testid="link-social-facebook"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-foreground/40 text-xs uppercase tracking-[0.15em]" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} IDBH Design
          </p>
        </div>
      </div>
      
      {/* Large decorative logo text - full width with strong contrast */}
      <div className="relative w-full px-4">
        <h2 
          className="font-serif text-[18vw] md:text-[15vw] leading-[0.85] text-foreground/[0.08] text-center select-none whitespace-nowrap overflow-hidden"
          aria-hidden="true"
        >
          IDBH Design
        </h2>
      </div>
    </footer>
  );
}
