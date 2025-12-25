import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiquidGlassButton } from "@/components/liquid-glass";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "dark" | "light";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // On light variant pages (no dark hero), always use the solid header style
  const useSolidHeader = variant === "light" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        useSolidHeader ? "glass-header-scrolled" : "glass-header"
      }`}
      data-testid="header-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-nav-logo">
            <img
              src={logo}
              alt="IDBH Design"
              className={`h-8 md:h-10 transition-all duration-500 cursor-pointer ${
                useSolidHeader ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={`text-xs uppercase tracking-[0.2em] font-light transition-all duration-500 ${
                  useSolidHeader
                    ? location === item.href
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                    : location === item.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-all duration-500 ${useSolidHeader ? "" : "text-white hover:bg-white/20"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className={`md:hidden py-6 border-t ${
              useSolidHeader ? "border-foreground/10" : "border-white/20"
            }`}
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
                  className={`text-xs uppercase tracking-[0.2em] font-light block py-3 transition-all duration-300 ${
                    useSolidHeader
                      ? location === item.href
                        ? "text-foreground"
                        : "text-foreground/60"
                      : location === item.href
                        ? "text-white"
                        : "text-white/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
