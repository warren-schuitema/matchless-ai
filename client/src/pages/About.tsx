import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Users, Zap, Target } from "lucide-react";
import { Link } from "wouter";
import speakingImage from "@assets/1IzrAEBuJrhSrkQF4N38o_b8662213a2af4641a7037b4af0ed6291_1762896661479.png";
import portraitImage from "@assets/T3ZI3uCdstgfcw2JGXAVL_eb106c431f6b4e508e7b153e37a54fd3_1763308917719.png";
import workspaceImage from "@assets/7WHE33eWDQ3WsOKcc-rv6_1a3a65740c354197bd95c10d8c14e46e_1762896661486.png";
import coffeeShopImage from "@assets/12nq5FoFHvFIRhkmziblw_5b5d3a54994743c4b4172488cb0aafa5_1762896661486.jpg";

export default function About() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Family First",
      description: "We're parents too. We know the guilt of choosing between business and family. That's why we build systems that give you both."
    },
    {
      icon: Users,
      title: "Real Partnership",
      description: "You're not just a client. We're in this together, building automation that actually works for your unique business."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "No 6-month implementations. We deliver working systems in weeks, so you start saving time immediately."
    },
    {
      icon: Target,
      title: "Your Success",
      description: "We measure our success by your results: hours saved, revenue grown, and family time reclaimed."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${speakingImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Matchless Marketing
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Built by a parent entrepreneur, for parent entrepreneurs
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Story
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={coffeeShopImage} 
                  alt="Warren working at coffee shop"
                  className="rounded-xl w-full h-auto shadow-2xl"
                  data-testid="img-coffee-shop"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground">
                  I started Matchless Marketing because I lived the problem. As a parent entrepreneur, I was drowning in the daily grind of content creation, social media management, and all the other tasks that kept me from what mattered most: growing my business and being present for my family.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <img 
                  src={workspaceImage} 
                  alt="Warren's workspace with automation systems"
                  className="rounded-xl w-full h-auto shadow-2xl"
                  data-testid="img-workspace"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 w-full md:w-1/2 md:order-first"
              >
                <p className="text-lg text-muted-foreground">
                  I discovered AI and automation weren't just buzzwords - they were game-changers. What used to take 15+ hours a week now takes 2-3. I'm more consistent, the quality is better, and I actually have time to be a present parent and spouse.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={portraitImage} 
                  alt="Warren portrait"
                  className="rounded-xl w-full h-auto shadow-2xl"
                  data-testid="img-portrait"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground">
                  Now I help other parent entrepreneurs do the same. Not with cookie-cutter templates or generic AI tools, but with custom-built automation systems designed specifically for your business, your voice, and your workflow.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-8 bg-background rounded-xl border border-border hover-elevate"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  data-testid={`value-card-${index}`}
                >
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's talk about how custom automation can transform your business and give you your time back.
            </p>
            <Link href="/book">
              <Button size="lg" className="text-lg px-10 min-h-14" data-testid="button-about-cta">
                Book Your Assessment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
