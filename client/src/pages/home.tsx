import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateContact } from "@/hooks/use-contact";
import logo from "@assets/IDBDesignLogo_1766439748813.png";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const createContact = useCreateContact();
  
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    createContact.mutate(data, {
      onSuccess: () => {
        setSubmitted(true);
        form.reset();
      },
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background font-sans overflow-hidden">
      {/* Left Content Section */}
      <motion.div 
        className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 xl:px-32 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-xl mx-auto lg:mx-0 w-full">
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-12">
            <img 
              src={logo} 
              alt="IDBH Design Logo" 
              className="h-24 md:h-32 object-contain" 
            />
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Coming Soon
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 font-display">
              Designing spaces for <span className="text-primary">healing</span> and well-being.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed mb-10 text-balance">
            IDBH Design is a design firm led by Debbie Beyman that primarily focuses on healthcare design, with experience in commercial offices and multifamily projects. Our new portfolio-driven website is currently under construction.
          </motion.p>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">Thank you for your interest. We'll be in touch soon.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Get notified when we launch</h3>
                
                <div className="space-y-2">
                  <Input 
                    placeholder="Enter your email" 
                    type="email"
                    {...form.register("email")}
                    className={form.formState.errors.email ? "border-destructive" : ""}
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-destructive pl-1">{form.formState.errors.email.message as string}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea 
                    placeholder="Optional message..." 
                    {...form.register("message")}
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={createContact.isPending}
                >
                  {createContact.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Notify Me"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IDBH Design. All rights reserved.
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div 
        className="hidden lg:block lg:w-1/2 relative bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
        
        {/* Abstract architecture / healthcare design image from Unsplash */}
        {/* modern minimalist interior architecture white bright */}
        <img 
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2788&auto=format&fit=crop"
          alt="Modern Interior Design"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <div className="glass-panel p-6 rounded-xl inline-block">
            <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-widest mb-1 text-black">Featured Project</p>
            <p className="text-2xl font-display font-bold text-black">Healthcare Excellence Center</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
