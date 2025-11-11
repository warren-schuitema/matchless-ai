import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Book, Video, FileText, Bell } from "lucide-react";

export default function Resources() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const resourceTypes = [
    {
      icon: FileText,
      title: "Blog Articles",
      description: "In-depth guides on automation, AI tools, and productivity strategies for parent entrepreneurs."
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step walkthroughs of automation setups and workflow optimizations."
    },
    {
      icon: Book,
      title: "Case Studies",
      description: "Real-world examples of how automation transformed businesses like yours."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden gradient-hero">
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resources
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Learn how to leverage automation and AI for your business
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {resourceTypes.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  className="p-8 bg-card rounded-xl border border-border hover-elevate text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  data-testid={`resource-type-${index}`}
                >
                  <resource.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="max-w-3xl mx-auto text-center p-12 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Bell className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're building a comprehensive library of automation guides, tutorials, and case studies. 
                Be the first to know when we launch new resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Blog launching soon
                </Badge>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  Video library in progress
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't wait for guides. Get personalized automation recommendations in a free assessment call.
            </p>
            <Button size="lg" className="text-lg px-10 min-h-14" data-testid="button-resources-cta">
              Book Your Free Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
