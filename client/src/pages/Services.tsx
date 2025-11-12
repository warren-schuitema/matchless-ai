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
      subtitle: "Stop Missing Bedtime. Let AI Handle the Rest.",
      description: "After 10 years training sales teams and managing lead generation, I know exactly where parent entrepreneurs lose precious time: answering the same customer questions at 9pm, manually following up with leads during family dinner, and spending weekends on repetitive tasks. I build AI systems that handle these automatically—24/7 chatbots that respond while you're tucking kids in, automated follow-ups that run while you're at the park, and intelligent systems that keep your business running without sacrificing family time.",
      tagline: "Custom AI solutions designed around your life as a parent entrepreneur—systems that work around the clock so you don't have to.",
      examples: [
        "Answer customer questions instantly (even at 2am) without lifting a finger",
        "Qualify and nurture leads automatically while you're at soccer practice",
        "Get coaching insights from sales calls without hours of manual review"
      ],
      pricing: "$5,000",
      pricingNote: "Custom quote based on complexity. Most clients reclaim 10-15 hours/week.",
      image: aiDashboard,
      cta: "Get Started - $5,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Globe,
      title: "Digital Platforms That Work While You Parent",
      subtitle: "Your Business Never Sleeps (So You Can)",
      description: "Fast, professional websites that capture leads and convert customers 24/7—whether you're at the playground, helping with homework, or finally getting some sleep. I build modern sites in days (not months) using proven tools and frameworks. Your website becomes your most reliable employee: always on, never complaining, and working overtime so you don't have to.",
      tagline: "Responsive, mobile-friendly sites with booking systems, payment processing, and lead capture that turn visitors into customers while you're living your life.",
      examples: [
        "Capture and qualify leads automatically while you're at soccer practice",
        "Accept bookings and payments 24/7 without manual scheduling",
        "SEO-optimized sites that attract customers while you sleep"
      ],
      pricing: "$5,000",
      pricingNote: "Most sites live in 3-5 days. Simple sites in 48 hours.",
      image: websitePlatform,
      cta: "Get Started - $5,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Workflow,
      title: "Systems That Give You Your Evenings Back",
      subtitle: "Automate the Busy Work. Reclaim Family Time.",
      description: "Remember when you started your business to have MORE freedom, not less? I build workflow automation that eliminates the repetitive tasks eating up your nights and weekends. Email sequences that nurture leads while you're at the park. CRM updates that happen automatically. Follow-ups that don't require you to set reminders at 11pm. These aren't just time-savers—they're freedom-makers.",
      tagline: "Stop choosing between growing your business and being present for your kids. Smart automation handles the repetitive work so you can focus on what actually matters.",
      examples: [
        "Automated lead nurturing that runs while you're reading bedtime stories",
        "Email sequences that follow up with prospects without you remembering",
        "Workflow automation that saves 10-15 hours every single week"
      ],
      pricing: "$3,000",
      pricingNote: "Most clients reclaim their evenings within the first month.",
      image: businessSystems,
      cta: "Get Started - $3,000",
      learnMore: "Learn Why AI"
    },
    {
      icon: Video,
      title: "Content That Works While You Live",
      subtitle: "Build Authority Without Sacrificing Weekends",
      description: "Stop spending every Saturday creating social media posts. I build AI-powered content systems that maintain your brand presence without stealing your family time. Consistent, engaging content that attracts ideal clients and builds your authority—created in hours instead of days, scheduled weeks in advance, all while you're actually living your life instead of posting about it.",
      tagline: "Professional content creation and strategy that keeps your business top-of-mind without requiring you to be glued to your phone during dinner.",
      examples: [
        "Month's worth of social content created in one focused session",
        "Video content using AI tools (no hours lost to editing)",
        "Consistent brand presence that doesn't require constant hustle"
      ],
      pricing: "$3,000",
      pricingNote: "Monthly retainers available for ongoing content needs.",
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
              For Parent Entrepreneurs
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Grow Your Business.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Never Miss Bedtime.
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              AI automation that gives you back 10-15 hours every week to spend with your kids—while your business keeps growing
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
              Find out exactly how AI can give you back your time while growing your business.
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
              Ongoing support, content creation, and system optimization that keeps your business running smoothly—without eating into family time.
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
