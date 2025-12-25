import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateContact } from "@/hooks/use-contact";
import { Header } from "@/components/header";
import { LiquidGlassFilter } from "@/components/liquid-glass";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const createContact = useCreateContact();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    createContact.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LiquidGlassFilter />
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
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ready to start your next project? We'd love to hear from you. Reach out and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif text-foreground mb-6" data-testid="text-form-title">
                Send Us a Message
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="min-h-[150px] resize-none"
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={createContact.isPending}
                    data-testid="button-submit"
                  >
                    {createContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif text-foreground mb-6" data-testid="text-info-title">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1" data-testid="text-label-email">Email</h3>
                    <a 
                      href="mailto:info@idbh.com" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-contact-email"
                    >
                      info@idbh.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1" data-testid="text-label-phone">Phone</h3>
                    <a 
                      href="tel:732-813-8500" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-contact-phone"
                    >
                      732-813-8500
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1" data-testid="text-label-office">Office</h3>
                    <p className="text-muted-foreground" data-testid="text-office-location">
                      New Jersey, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border/50">
                <h3 className="font-medium text-foreground mb-3" data-testid="text-business-hours-title">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground text-sm" data-testid="text-business-hours">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative glass-footer py-20 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          {/* Glass container for footer content */}
          <div className="liquid-glass-container glass-dark rounded-2xl p-8 md:p-12 mb-10">
            <div className="liquid-glass-filter" />
            <div className="liquid-glass-overlay" />
            <div className="liquid-glass-specular" />
            <div className="liquid-glass-content w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                <img 
                  src={logo} 
                  alt="IDBH Design" 
                  className="h-12 brightness-0 invert opacity-80"
                  data-testid="img-footer-logo"
                />
                <nav className="flex flex-wrap justify-center gap-8">
                  <Link 
                    href="/" 
                    className="text-white/60 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                    data-testid="link-footer-home"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/projects" 
                    className="text-white/60 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                    data-testid="link-footer-projects"
                  >
                    Projects
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-white/60 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors duration-300" 
                    data-testid="link-footer-contact"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-4 text-white/50 text-sm">
                  <a 
                    href="mailto:info@idbh.com" 
                    className="hover:text-white transition-colors duration-300"
                    data-testid="link-footer-email"
                  >
                    info@idbh.com
                  </a>
                  <span className="text-white/20">|</span>
                  <a 
                    href="tel:732-813-8500" 
                    className="hover:text-white transition-colors duration-300"
                    data-testid="link-footer-phone"
                  >
                    732-813-8500
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glass divider */}
          <div className="glass-divider mb-8" />
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em]" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
