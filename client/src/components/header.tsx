import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "bg-transparent"
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
              className={`h-8 md:h-10 transition-all duration-300 cursor-pointer ${
                isScrolled ? "" : "invert brightness-200"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                  isScrolled
                    ? location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : location === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" data-testid="link-nav-contact-cta">
              <Button
                variant="outline"
                size="sm"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? ""
                    : "border-white/30 text-white hover:bg-white/10 hover:text-white"
                }`}
                data-testid="button-nav-contact"
              >
                Get in Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "" : "text-white hover:bg-white/10"}`}
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
            className={`md:hidden py-4 border-t ${
              isScrolled ? "border-border/40" : "border-white/20"
            }`}
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  data-testid={`nav-mobile-link-${item.label.toLowerCase()}`}
                  className={`text-sm uppercase tracking-wider block py-2 transition-colors ${
                    isScrolled
                      ? location === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                      : location === item.href
                        ? "text-white"
                        : "text-white/70"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" data-testid="link-mobile-contact-cta">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full mt-2 ${
                    isScrolled
                      ? ""
                      : "border-white/30 text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-contact"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
