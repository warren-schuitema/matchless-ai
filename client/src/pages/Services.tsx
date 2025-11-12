import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Globe, Workflow, Video, CheckCircle2 } from "lucide-react";
import aiDashboard from "@assets/generated_images/AI_automation_dashboard_interface_86e7d4d2.png";
import websitePlatform from "@assets/generated_images/Website_platform_builder_interface_5c11f541.png";
import businessSystems from "@assets/generated_images/Business_automation_systems_dashboard_9a2e4ee4.png";
import contentPlatform from "@assets/generated_images/Content_creation_management_platform_c4521c20.png";

function ServiceSection({ service, index }: { service: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
      data-testid={`service-section-${index}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Text Content */}
          <motion.div
            className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            style={{ opacity }}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <service.icon className="w-10 h-10 text-primary" />
              <Badge variant="outline" className="text-sm">
                {service.pricing}
              </Badge>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {service.title}
            </h2>

            <p className="text-xl md:text-2xl text-primary font-semibold">
              {service.subtitle}
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              {service.description}
            </p>

            <p className="text-muted-foreground">
              {service.tagline}
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Example Projects:</h3>
              <ul className="space-y-3">
                {service.examples.map((example: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6">
                {service.pricingNote}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8"
                    data-testid={`button-get-started-${index}`}
                  >
                    {service.cta}
                  </Button>
                </Link>
                <Link href="/book">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8"
                    data-testid={`button-learn-more-${index}`}
                  >
                    {service.learnMore}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image with 3D effect */}
          <motion.div
            className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            style={{
              y: imageY,
              rotateX: imageRotate,
              scale: imageScale,
              opacity
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="aspect-video bg-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                  data-testid={`service-image-${index}`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI Integration & Automation",
      subtitle: "Technology That Amplifies Your Mission",
      description: "After 10 years training sales teams and managing lead generation, I know exactly where businesses lose time: slow response times, poor follow-up, and wasted hours on repetitive tasks. I build AI systems that fix those problems—24/7 chatbots, automated follow-ups, and call analysis that coaches your team automatically—so you can focus on what matters most: serving people and advancing your mission.",
      tagline: "Whether you need a chatbot for customer support, an AI assistant for lead qualification, or automated call analysis for your sales team, I create solutions tailored to your specific workflow and kingdom purposes.",
      examples: [
        "Sales call analyzer with automated transcription and coaching insights",
        "24/7 chatbot for customer inquiries and lead qualification",
        "Automated donor follow-up system for nonprofits"
      ],
      pricing: "$5,000",
      pricingNote: "Custom quote based on complexity",
      image: aiDashboard,
      cta: "Get Started - $5,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Globe,
      title: "Digital Platforms That Serve Your Community",
      subtitle: "Fast, Functional Websites Built for Impact",
      description: "Fast, functional websites that connect you with the people you serve. I build professional sites in days, not months, using modern tools like Wix, custom code, Wouter, and Readspeaker. Every platform is designed to strengthen your community impact and advance your mission.",
      tagline: "From churches and nonprofits to faith-driven businesses and service organizations, I create responsive, SEO-optimized websites with booking systems, payment processing, and content management that help you serve more effectively.",
      examples: [
        "Luxury gym website with booking and payment integration",
        "Nonprofit site with donation flow and member forum",
        "Service business sites with lead capture forms"
      ],
      pricing: "$5,000",
      pricingNote: "Most sites live in 3-5 days. Simple sites in 48 hours.",
      image: websitePlatform,
      cta: "Get Started - $5,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Workflow,
      title: "Systems That Free You to Focus",
      subtitle: "Streamline Operations & Reclaim Your Time",
      description: "Streamline your operations with custom workflows and automation that serve your mission. I build n8n workflows, email sequences, lead scoring systems, and CRM integrations that save hours of manual work every week—so you can invest more time in the people and purposes that matter.",
      tagline: "Stop wasting time on repetitive tasks. Let automation handle data entry, follow-ups, notifications, and reporting with excellence, while you focus on serving your community and advancing kingdom purposes.",
      examples: [
        "n8n workflows for automated lead nurturing",
        "Email sequences with personalized follow-ups",
        "Lead scoring and qualification automation"
      ],
      pricing: "$3,000",
      pricingNote: "Most clients save 10-15 hours/week within the first month.",
      image: businessSystems,
      cta: "Get Started - $3,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Video,
      title: "Storytelling That Shares Your Purpose",
      subtitle: "Content Creation That Connects & Inspires",
      description: "AI-powered content creation that tells your brand story and shares your mission. I create social media content, video with Sora, and marketing materials that connect with your audience, build community, and advance kingdom purposes through authentic storytelling.",
      tagline: "From social media strategy to video production, I help you build a consistent brand presence that attracts the right people, strengthens relationships, and serves your community with excellence.",
      examples: [
        "Social media content calendar and creation",
        "Sora video creation for marketing campaigns",
        "Brand storytelling and messaging strategy"
      ],
      pricing: "$3,000",
      pricingNote: "Monthly retainers available",
      image: contentPlatform,
      cta: "Get Started - $3,000",
      learnMore: "Learn Why AI"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Matrix-style background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="matrix-bg matrix-glow absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                hsl(var(--primary) / 0.05) 2px,
                hsl(var(--primary) / 0.05) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                hsl(var(--primary) / 0.05) 2px,
                hsl(var(--primary) / 0.05) 4px
              )
            `
          }}
        />
      </div>

      <Navbar />

      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />

          <div className="relative max-w-5xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1" data-testid="badge-services-hero">
              Premium Services
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                With AI Automation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Enterprise-grade automation solutions that save you 10-15 hours per week while scaling your impact
            </p>
          </div>
        </section>

        {/* Service Sections with Alternating Layouts */}
        {services.map((service, index) => (
          <ServiceSection key={service.title} service={service} index={index} />
        ))}

        {/* Special Offer Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          <div className="absolute inset-0 backdrop-blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1 bg-primary text-primary-foreground" data-testid="badge-special-offer">
              Special Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Free AI Opportunity Audit
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation this week and get a complimentary $500 AI opportunity audit.
              Find out exactly how AI can grow your business.
            </p>
            <Link href="/book">
              <Button
                size="lg"
                className="text-lg px-10 min-h-14"
                data-testid="button-claim-audit"
              >
                Claim Your Audit →
              </Button>
            </Link>
          </div>
        </section>

        {/* Monthly Retainers CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Monthly Retainers</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ongoing support and optimization for growing teams and businesses.
              Starting at $500/mo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="text-lg px-10 min-h-14"
                  data-testid="button-retainer-consultation"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 min-h-14"
                  data-testid="button-learn-story"
                >
                  Learn My Story
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
