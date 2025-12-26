import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useLocation } from "wouter";
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiquidGlassFilter } from "@/components/liquid-glass";
import { getProjectById } from "@/data/projects";

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const project = getProjectById(params.id || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header variant="light" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-foreground mb-4">Project Not Found</h1>
            <Link href="/projects">
              <Button variant="outline">Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LiquidGlassFilter />
      <Header variant="light" />

      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
          >
            <div>
              <Link 
                href="/projects" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4 text-sm uppercase tracking-wider"
                data-testid="link-back-projects"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                All Projects
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground" data-testid="text-project-title">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-2" data-testid="text-project-location">
                {project.location}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "slider" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("slider")}
                data-testid="button-view-slider"
              >
                Slider
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                data-testid="button-view-grid"
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                Grid
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {viewMode === "slider" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    data-testid={`img-gallery-${currentImageIndex}`}
                  />
                </AnimatePresence>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                  data-testid="button-prev-image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                  data-testid="button-next-image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      data-testid={`button-dot-${index}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden transition-all ${
                      index === currentImageIndex
                        ? "ring-2 ring-foreground ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    data-testid={`button-thumbnail-${index}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="aspect-[16/10] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-testid={`img-grid-${index}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
