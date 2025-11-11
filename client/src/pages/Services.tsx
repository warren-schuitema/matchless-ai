import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Mail, Calendar, Bot, Zap, TrendingUp } from "lucide-react";

export default function Services() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Content Creation Automation",
      description: "Transform one piece of content into a full week's worth of posts across all platforms. Automated blog-to-social, video transcription, newsletter generation, and more.",
      features: ["Blog post automation", "Social media scheduling", "Video-to-blog conversion", "Newsletter generation"]
    },
    {
      icon: Mail,
      title: "Email & CRM Automation",
      description: "Never miss a follow-up again. Automated lead nurturing, client onboarding sequences, and personalized email campaigns that run on autopilot.",
      features: ["Lead nurturing sequences", "Client onboarding automation", "Personalized campaigns", "CRM integration"]
    },
    {
      icon: Calendar,
      title: "Scheduling & Workflow Automation",
      description: "Stop the back-and-forth of scheduling. Automated booking, meeting prep, follow-ups, and workflow triggers that save hours every week.",
      features: ["Automated booking", "Meeting prep automation", "Follow-up sequences", "Workflow triggers"]
    },
    {
      icon: Bot,
      title: "Custom AI Assistants",
      description: "Your own ZEKE. AI assistants that connect to your tools, learn your voice, and handle tasks via voice commands or chat. Available 24/7.",
      features: ["Voice command integration", "Tool connectivity", "Brand voice training", "24/7 availability"]
    },
    {
      icon: Zap,
      title: "Integration & API Connections",
      description: "Make your tools talk to each other. Connect your CRM, email, calendar, social media, and business tools into one seamless system.",
      features: ["Multi-platform integration", "API connections", "Data synchronization", "Custom workflows"]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Automated dashboards and reports that give you the insights you need without the manual data crunching. Know what's working, instantly.",
      features: ["Automated dashboards", "Custom reports", "Performance tracking", "Data visualization"]
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Custom automation solutions built specifically for your business
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="p-8 bg-card rounded-xl border border-border hover-elevate"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  data-testid={`service-card-${index}`}
                >
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure What You Need?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free assessment and we'll identify exactly where automation can save you the most time and money.
            </p>
            <Button size="lg" className="text-lg px-10 min-h-14" data-testid="button-services-cta">
              Get Your Free Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
