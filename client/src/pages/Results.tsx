import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Users } from "lucide-react";

export default function Results() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const caseStudies = [
    {
      client: "E-commerce Business Owner",
      industry: "Retail",
      challenge: "Spending 20+ hours/week on content creation and customer follow-ups",
      solution: "Custom AI assistant + email automation + content repurposing system",
      results: [
        "18 hours saved per week",
        "3x increase in social media consistency",
        "45% improvement in email open rates",
        "Completely automated customer onboarding"
      ],
      timeframe: "3 weeks to implementation"
    },
    {
      client: "Online Coach",
      industry: "Education/Coaching",
      challenge: "Manual client scheduling, content creation, and follow-up sequences eating up business growth time",
      solution: "Integrated scheduling automation + content workflow + CRM setup",
      results: [
        "12 hours reclaimed weekly",
        "Zero scheduling conflicts",
        "Doubled client capacity",
        "Consistent weekly content output"
      ],
      timeframe: "2 weeks to implementation"
    },
    {
      client: "Service-Based Business",
      industry: "Professional Services",
      challenge: "Inconsistent marketing, manual proposal generation, scattered client communication",
      solution: "Marketing automation + proposal templates + unified communication system",
      results: [
        "15 hours saved per week",
        "50% faster proposal turnaround",
        "40% increase in quote conversions",
        "Centralized client communication"
      ],
      timeframe: "4 weeks to full implementation"
    }
  ];

  const stats = [
    { icon: Clock, value: "10+", label: "Hours Saved Weekly (Avg)" },
    { icon: TrendingUp, value: "3x", label: "Content Consistency Increase" },
    { icon: Users, value: "25+", label: "Parent Entrepreneurs Helped" }
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
              Real Results
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              See what happens when automation is built right
            </motion.p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Case Studies</h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  className="p-8 bg-card rounded-xl border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  data-testid={`case-study-${index}`}
                >
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline">{study.timeframe}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{study.client}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-2">Challenge</h4>
                      <p className="text-foreground mb-4">{study.challenge}</p>
                      <h4 className="font-semibold text-muted-foreground mb-2">Solution</h4>
                      <p className="text-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-muted-foreground mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start">
                            <span className="text-primary mr-2 text-xl">✓</span>
                            <span className="text-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Own Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build a custom automation system that delivers results like these for your business.
            </p>
            <Button size="lg" className="text-lg px-10 min-h-14" data-testid="button-results-cta">
              Book Your Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
