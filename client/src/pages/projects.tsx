import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const projects = [
  { id: 1, title: "Sunrise Senior Living", category: "Senior Living", image: "/images/lobby.jpg", description: "A welcoming lobby design for an upscale senior living community." },
  { id: 2, title: "Wellness Center", category: "Healthcare", image: "/images/gym.jpg", description: "State-of-the-art fitness and rehabilitation facility." },
  { id: 3, title: "Patient Care Suite", category: "Healthcare", image: "/images/patient-room.jpg", description: "Comfortable and functional patient room design." },
  { id: 4, title: "Memory Care Commons", category: "Senior Living", image: "/images/hallway.jpg", description: "Thoughtfully designed corridors for memory care residents." },
  { id: 5, title: "Assisted Living Dining", category: "Senior Living", image: "/images/dining.jpg", description: "Elegant dining space promoting social interaction." },
  { id: 6, title: "Rehabilitation Lounge", category: "Healthcare", image: "/images/lounge.jpg", description: "Relaxing lounge area for patients and visitors." },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4" data-testid="text-page-title">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our portfolio of healthcare and senior living interior design projects. Each space is thoughtfully crafted to enhance comfort, functionality, and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                data-testid={`project-card-${project.id}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-muted-foreground text-sm uppercase tracking-wider" data-testid={`text-project-category-${project.id}`}>
                  {project.category}
                </span>
                <h2 className="text-2xl font-serif text-foreground mt-1 mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h2>
                <p className="text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4" data-testid="text-projects-cta-title">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We'd love to hear about your upcoming project. Get in touch to discuss how we can help.
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-projects-contact">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src={logo} 
              alt="IDBH Design" 
              className="h-10 invert brightness-200 opacity-80"
              data-testid="img-footer-logo"
            />
            <div className="flex flex-wrap justify-center gap-6 text-neutral-400 text-sm">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-footer-home">Home</Link>
              <Link href="/projects" className="hover:text-white transition-colors" data-testid="link-footer-projects">Projects</Link>
              <Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact</Link>
            </div>
            <div className="text-neutral-400 text-sm">
              <a href="mailto:info@idbh.com" className="hover:text-white transition-colors" data-testid="link-footer-email">info@idbh.com</a>
              <span className="mx-3">|</span>
              <a href="tel:732-813-8500" className="hover:text-white transition-colors" data-testid="link-footer-phone">732-813-8500</a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
