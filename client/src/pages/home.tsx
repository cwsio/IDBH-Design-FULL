import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const featuredProjects = [
  { id: 1, title: "Sunrise Senior Living", category: "Senior Living", image: "/images/lobby.jpg" },
  { id: 2, title: "Wellness Center", category: "Healthcare", image: "/images/gym.jpg" },
  { id: 3, title: "Patient Care Suite", category: "Healthcare", image: "/images/patient-room.jpg" },
  { id: 4, title: "Memory Care Commons", category: "Senior Living", image: "/images/hallway.jpg" },
  { id: 5, title: "Assisted Living Dining", category: "Senior Living", image: "/images/dining.jpg" },
  { id: 6, title: "Rehabilitation Lounge", category: "Healthcare", image: "/images/lounge.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 40, damping: 20 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section - Full viewport with background image */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/lobby.jpg"
            alt="IDBH Design - Senior Living Lobby"
            className="w-full h-full object-cover"
          />
          {/* Dark wash overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-16 md:h-24 mx-auto invert brightness-200"
              data-testid="img-logo"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
            data-testid="text-headline"
          >
            Designing Spaces<br />
            <span className="italic">That Inspire Care</span>
          </motion.h1>

          {/* Sub-headline / Positioning Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            data-testid="text-subheadline"
          >
            IDBH Design specializes in healthcare interiors for assisted living communities, nursing homes, and senior care facilities. We create environments that nurture healing and comfort.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="bg-white text-neutral-900 border border-white/20 backdrop-blur-sm"
                data-testid="button-view-work"
              >
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/40 text-white bg-white/10 backdrop-blur-sm"
                data-testid="button-contact-hero"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About the Company Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8"
              data-testid="text-about-title"
            >
              About IDBH Design
            </h2>
            <p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
              data-testid="text-about-description"
            >
              For over two decades, IDBH Design has been at the forefront of healthcare interior design. We understand that assisted living facilities, nursing homes, and senior care communities require thoughtful design that balances beauty with functionality, comfort with safety.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our team brings a wealth of experience in creating spaces that not only meet regulatory requirements but exceed expectations. We believe that great design has the power to improve quality of life, and we bring that philosophy to every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4"
              data-testid="text-featured-title"
            >
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of healthcare and senior living interior design projects.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects#project-${project.id}`}>
                  <div 
                    className="group relative aspect-[4/3] overflow-hidden rounded-md cursor-pointer"
                    data-testid={`card-project-${project.id}`}
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-white/70 text-sm uppercase tracking-wider mb-1 block" data-testid={`text-project-category-${project.id}`}>
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-serif" data-testid={`text-project-title-${project.id}`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/lounge.jpg"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </div>
        
        {/* Glassmorphism Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6 md:px-12"
        >
          <div className="liquid-glass p-12 md:p-16 text-center">
            <p 
              className="text-white/70 text-xs md:text-sm uppercase tracking-[0.25em] mb-6"
              data-testid="text-experience-subtitle"
            >
              Design with purpose
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
              data-testid="text-experience-title"
            >
              Where vision meets<br />intention
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Each space carries its own narrative—blending function with elegance, crafted for those who live and work within.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-background mb-6"
              data-testid="text-cta-title"
            >
              Ready to Transform Your Space?
            </h2>
            <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's discuss how IDBH Design can help bring your vision to life. Whether you're planning a new facility or renovating an existing space, we're here to help.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-background text-foreground"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-10 invert brightness-200 opacity-80"
              data-testid="img-footer-logo"
            />
            <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-sm">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-footer-home">
                Home
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors" data-testid="link-footer-projects">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </div>
            <div className="text-neutral-400 text-sm">
              <a 
                href="mailto:info@idbh.com" 
                className="hover:text-white transition-colors"
                data-testid="link-footer-email"
              >
                info@idbh.com
              </a>
              <span className="mx-3">|</span>
              <a 
                href="tel:732-813-8500" 
                className="hover:text-white transition-colors"
                data-testid="link-footer-phone"
              >
                732-813-8500
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-500 text-sm" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
