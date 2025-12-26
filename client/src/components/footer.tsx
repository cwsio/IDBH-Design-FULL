import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiFacebook } from "react-icons/si";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden mt-auto bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: Logo, description, contact */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <img 
            src={logo} 
            alt="IDBH Design" 
            className="h-10"
            data-testid="img-footer-logo"
          />
          <p className="text-stone-600 dark:text-stone-400 text-sm max-w-md leading-relaxed">
            IDBH Design specializes in healthcare interior design, creating thoughtful environments for assisted living communities and senior care facilities.
          </p>
          <div className="flex flex-col items-start md:items-end gap-2 text-sm">
            <a 
              href="mailto:info@idbh.com" 
              className="text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
              data-testid="link-footer-email"
            >
              info@idbh.com
            </a>
            <a 
              href="tel:732-813-8500" 
              className="text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
              data-testid="link-footer-phone"
            >
              732-813-8500
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-stone-300 dark:bg-stone-700 mb-8" />
        
        {/* Bottom row: Nav, social, copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <nav className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/" 
              className="text-stone-600 dark:text-stone-400 text-xs uppercase tracking-[0.15em] hover:text-stone-900 dark:hover:text-white transition-colors duration-300" 
              data-testid="link-footer-home"
            >
              Home
            </Link>
            <a 
              href="/#about" 
              className="text-stone-600 dark:text-stone-400 text-xs uppercase tracking-[0.15em] hover:text-stone-900 dark:hover:text-white transition-colors duration-300" 
              data-testid="link-footer-about"
            >
              About
            </a>
            <Link 
              href="/projects" 
              className="text-stone-600 dark:text-stone-400 text-xs uppercase tracking-[0.15em] hover:text-stone-900 dark:hover:text-white transition-colors duration-300" 
              data-testid="link-footer-projects"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-stone-600 dark:text-stone-400 text-xs uppercase tracking-[0.15em] hover:text-stone-900 dark:hover:text-white transition-colors duration-300" 
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
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
              data-testid="link-social-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
              data-testid="link-social-linkedin"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
              data-testid="link-social-facebook"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-stone-500 dark:text-stone-500 text-xs uppercase tracking-[0.15em]" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} IDBH Design
          </p>
        </div>
      </div>
      
      {/* Large decorative logo text */}
      <div className="relative w-full px-4">
        <h2 
          className="font-serif text-[18vw] md:text-[15vw] leading-[0.85] text-stone-300 dark:text-stone-800 text-center select-none whitespace-nowrap overflow-hidden"
          aria-hidden="true"
        >
          IDBH Design
        </h2>
      </div>
    </footer>
  );
}
