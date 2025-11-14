import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, CheckCircle, Target, Lightbulb, Gift } from "lucide-react";
import BookingOptions from "@/components/BookingOptions";
import { Link } from "wouter";

export default function BookAssessment() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Identify Opportunities",
      description: "We'll pinpoint exactly where automation can save you the most time and money in your specific business."
    },
    {
      icon: Lightbulb,
      title: "Custom Recommendations",
      description: "Get personalized suggestions tailored to your workflow, tools, and goals - not generic advice."
    },
    {
      icon: Gift,
      title: "No Pressure",
      description: "This is a genuine assessment, not a sales pitch. You'll walk away with actionable insights regardless."
    }
  ];

  const whatToExpect = [
    "We'll discuss your current workflow and biggest time-drains",
    "Identify repetitive tasks that could be automated",
    "Review your existing tools and how they could work together",
    "Map out potential automation opportunities",
    "Answer any questions about AI and automation for your business"
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
              Book Your Free Assessment
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              30 minutes that could save you 10+ hours every week
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-8 bg-card rounded-xl border border-border hover-elevate"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  data-testid={`benefit-card-${index}`}
                >
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">30-Minute Call</h3>
                    <p className="text-muted-foreground">Quick, focused, and valuable</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Gift className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">100% Free</h3>
                    <p className="text-muted-foreground">No catch, no obligation</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">During the Call:</h3>
                <ul className="space-y-3">
                  {whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Booking Option</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the session that best fits your needs. All bookings open a new scheduling page where you can pick your preferred time.
              </p>
            </motion.div>
            
            <BookingOptions />
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Ready to Book Yet?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Learn more about our services or see the results we've delivered for other parent entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg px-10 min-h-14" data-testid="button-view-services">
                  View Services
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="text-lg px-10 min-h-14" data-testid="button-view-resources-cta">
                  View Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
