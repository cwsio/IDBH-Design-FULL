import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiquidGlassFilter } from "@/components/liquid-glass";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LiquidGlassFilter />
      <Header variant="light" />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4" data-testid="text-page-title">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our portfolio of healthcare and senior living interior design projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  data-testid={`project-card-${project.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img 
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="text-xl font-serif text-white mb-1" data-testid={`text-project-title-${project.id}`}>
                        {project.title}
                      </h2>
                      <p className="text-white/70 text-sm" data-testid={`text-project-location-${project.id}`}>
                        {project.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
}
