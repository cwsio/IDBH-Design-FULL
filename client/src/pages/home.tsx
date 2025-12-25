import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { LiquidGlassFilter, LiquidGlassCard } from "@/components/liquid-glass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  { id: 1, title: "Sunrise Senior Living", category: "Senior Living", image: "/images/lobby.jpg" },
  { id: 2, title: "Wellness Center", category: "Healthcare", image: "/images/gym.jpg" },
  { id: 3, title: "Patient Care Suite", category: "Healthcare", image: "/images/patient-room.jpg" },
  { id: 4, title: "Memory Care Commons", category: "Senior Living", image: "/images/hallway.jpg" },
  { id: 5, title: "Assisted Living Dining", category: "Senior Living", image: "/images/dining.jpg" },
  { id: 6, title: "Rehabilitation Lounge", category: "Healthcare", image: "/images/lounge.jpg" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect on scroll
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // About section - elegant text reveal
      if (aboutRef.current) {
        const aboutTitle = aboutRef.current.querySelector('h2');
        const aboutTexts = aboutRef.current.querySelectorAll('p');
        
        if (aboutTitle) {
          gsap.fromTo(aboutTitle, 
            { opacity: 0, y: 60, skewY: 2 },
            { 
              opacity: 1, y: 0, skewY: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        aboutTexts.forEach((text, i) => {
          gsap.fromTo(text,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0,
              duration: 1,
              delay: 0.2 + (i * 0.15),
              ease: "power2.out",
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }

      // Featured section header
      if (featuredRef.current) {
        gsap.fromTo(featuredRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Project cards stagger reveal
      if (projectCardsRef.current) {
        const cards = projectCardsRef.current.querySelectorAll('.project-card');
        gsap.fromTo(cards,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectCardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Experience section - dramatic reveal
      if (experienceRef.current) {
        const glassCard = experienceRef.current.querySelector('.liquid-glass');
        if (glassCard) {
          gsap.fromTo(glassCard,
            { opacity: 0, scale: 0.9, y: 60 },
            {
              opacity: 1, scale: 1, y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: experienceRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }

      // CTA section
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Footer reveal
      if (footerRef.current) {
        gsap.fromTo(footerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <LiquidGlassFilter />
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            ref={heroImageRef}
            src="/images/lobby.jpg"
            alt="IDBH Design - Senior Living Lobby"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-16 md:h-24 mx-auto brightness-0 invert"
              data-testid="img-logo"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            data-testid="text-headline"
          >
            Designing Spaces<br />
            <span className="italic">That Inspire Care</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
            data-testid="text-subheadline"
          >
            IDBH Design specializes in healthcare interiors for assisted living communities, nursing homes, and senior care facilities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects">
              <Button 
                size="lg" 
                className="liquid-glass text-white border-white/50"
                data-testid="button-view-work"
              >
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/40 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15"
                data-testid="button-contact-hero"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-28 md:py-36 bg-background">
        <div ref={aboutRef} className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-10"
            data-testid="text-about-title"
          >
            About IDBH Design
          </h2>
          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
            data-testid="text-about-description"
          >
            For over two decades, IDBH Design has been at the forefront of healthcare interior design. We understand that assisted living facilities, nursing homes, and senior care communities require thoughtful design that balances beauty with functionality.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our team brings a wealth of experience in creating spaces that not only meet regulatory requirements but exceed expectations. Great design has the power to improve quality of life.
          </p>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-28 md:py-36 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div ref={featuredRef} className="text-center mb-16">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground"
              data-testid="text-featured-title"
            >
              Featured Work
            </h2>
          </div>

          <div ref={projectCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects#project-${project.id}`}>
                <div 
                  className="project-card group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  data-testid={`card-project-${project.id}`}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span 
                      className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2 block"
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                      data-testid={`text-project-category-${project.id}`}
                    >
                      {project.category}
                    </span>
                    <h3 
                      className="text-white text-xl font-serif"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/projects">
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                data-testid="button-view-all-projects"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/lounge.jpg"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
          <LiquidGlassCard className="text-center">
            <p 
              className="text-white/90 text-xs md:text-sm uppercase tracking-[0.3em] mb-8"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              data-testid="text-experience-subtitle"
            >
              Design with purpose
            </p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
              data-testid="text-experience-title"
            >
              Where vision meets<br />intention
            </h2>
            <p 
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
            >
              Each space carries its own narrative—blending function with elegance, crafted for those who live and work within.
            </p>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-28 md:py-36 bg-foreground">
        <div ref={ctaRef} className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-background/50 text-xs uppercase tracking-[0.25em] mb-6">
            Get Started
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-background mb-8"
            data-testid="text-cta-title"
          >
            Ready to Transform Your Space?
          </h2>
          <p className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss how IDBH Design can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90"
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-10 brightness-0 invert opacity-70"
              data-testid="img-footer-logo"
            />
            <nav className="flex flex-wrap justify-center gap-8">
              <Link 
                href="/" 
                className="text-neutral-400 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="text-neutral-400 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                data-testid="link-footer-projects"
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-neutral-400 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4 text-neutral-400 text-sm">
              <a 
                href="mailto:info@idbh.com" 
                className="hover:text-white transition-colors duration-300"
                data-testid="link-footer-email"
              >
                info@idbh.com
              </a>
              <span className="text-neutral-600">|</span>
              <a 
                href="tel:732-813-8500" 
                className="hover:text-white transition-colors duration-300"
                data-testid="link-footer-phone"
              >
                732-813-8500
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-10 pt-10 text-center">
            <p className="text-neutral-600 text-xs uppercase tracking-[0.15em]" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
