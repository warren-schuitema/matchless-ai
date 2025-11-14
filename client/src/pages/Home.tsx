import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import ZekeShowcase from "@/components/ZekeShowcase";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Clock, Home as HomeIcon, TrendingUp, FileText, Mail, Calendar, Bot } from "lucide-react";
import heroImage from "@assets/generated_images/Stressed_parent_missing_family_time_d61982ac.png";
import zekeImage from "@assets/image_1762892026965.png";
import finalImage from "@assets/generated_images/Final_CTA_family_success_045409a7.png";
import shaunPhoto from "@assets/Shaun Richardson image_1762891403477.jpg";
import kellyPhoto from "@assets/Kelly McCord Image_1762891407534.jpg";
import philPhoto from "@assets/Phil Taylor image_1762891395285.jpg";

import { useEffect } from "react";

export default function Home() {
  // Set dark mode by default on mount
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const painPoints = [
    {
      icon: Clock,
      headline: "15+ Hours a Week on Content You Hate",
      body: 'Every week, the same cycle. Write the blog post. Create social media graphics. Schedule posts. Write the newsletter. Repurpose everything for different platforms. Meanwhile, your kids are asking you to play, and you\'re saying "not now, I need to finish this post."',
    },
    {
      icon: HomeIcon,
      headline: "Missing Family Moments for Social Posts",
      body: "You started this business for freedom and flexibility. Instead, you're working evenings and weekends just to stay visible online. Your family sees you physically there but mentally absent, always thinking about the next content deadline.",
    },
    {
      icon: TrendingUp,
      headline: "Competitors Using AI While You're Spinning Your Wheels",
      body: "You see other businesses posting consistently, showing up everywhere, scaling fast. You know they're using automation and AI. You're not. And every day you wait, the gap gets wider.",
    },
  ];

  const benefits = [
    {
      title: "One automation = 8-10 hours back each week",
      description:
        "Stop manually creating content. Let the system do it while you focus on revenue-generating activities (or actually take your kid to the park).",
    },
    {
      title: "Custom-built for your business, not cookie-cutter solutions",
      description:
        "Your business isn't like everyone else's. Your automation shouldn't be either. We build systems that match your voice, your platforms, and your workflow.",
    },
    {
      title: "Learn to manage it yourself or let us handle it",
      description:
        "You're not buying a black box. You're getting training, documentation, and ongoing support. Run it yourself or stay on retainer. Your choice.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Book Your Assessment",
      description:
        "We start with a deep-dive assessment (4-8 hours depending on your needs). We analyze your current tech stack, review your workflows, and identify your biggest time drains. You walk away with a detailed automation roadmap, even if you don't proceed.",
    },
    {
      number: 2,
      title: "We Build Your Custom System",
      description:
        "We build automations tailored to YOUR business. Content creation, client communications, calendar management, whatever you need. You're involved every step because this is YOUR system. We test, refine, and make sure it actually works for your real life.",
    },
    {
      number: 3,
      title: "You Get Your Time Back",
      description:
        "System launches. You get hands-on training, complete documentation, and 30-day support to work out any issues. Then ongoing monthly support keeps everything running smoothly as your business grows.",
    },
  ];

  const testimonials = [
    {
      name: "Shaun Richardson",
      businessType: "Business Consultant",
      quote:
        "Working and learning with Warren has been an amazing experience. He's an absolute wizard with AI! The value he brings to the table is incredible and he's always willing to share his knowledge. Top man!",
      photoSrc: shaunPhoto,
    },
    {
      name: "Kelly McCord",
      businessType: "Business Consultant & Founder, SimpliPhi Management LLC",
      quote:
        "I was drowning in manual processes and couldn't scale. Warren built automations that not only saved me 10 hours a week but also made it possible to finally hire my first VA with clear systems in place. Game changer for my business and my family.",
      photoSrc: kellyPhoto,
    },
    {
      name: "Phil Taylor",
      businessType: "CEO, Goal Achiever's Summit",
      quote:
        "The content automation Warren built is incredible. What used to take me an entire Saturday now happens automatically while I'm spending time with my family. I'm showing up more consistently online and actually enjoying the process.",
      photoSrc: philPhoto,
    },
  ];

  const stats = [
    { value: "50+", label: "Businesses Automated" },
    { value: "200+", label: "Hours Saved Across All Clients" },
    { value: "8-10", label: "Average Hours Saved Per Week" },
  ];

  const services = [
    {
      icon: FileText,
      title: "Content Creation Automation",
      items: [
        "Blog generation and publishing",
        "Social media post creation and scheduling",
        "Newsletter systems",
        "Image and video creation",
        "Platform-specific repurposing",
      ],
      resultTag: "Save 8-10 hours per week",
    },
    {
      icon: Mail,
      title: "Business Systems Setup",
      items: [
        "CRM automation",
        "Client onboarding sequences",
        "Appointment scheduling",
        "Follow-up systems",
        "Proposal generation",
      ],
      resultTag: "Never drop the ball on a client",
    },
    {
      icon: Calendar,
      title: "Calendar & Scheduling",
      items: [
        "Automated booking systems",
        "Meeting coordination",
        "Reminder sequences",
        "Time blocking automation",
        "Team scheduling",
      ],
      resultTag: "Eliminate scheduling chaos",
    },
    {
      icon: Bot,
      title: "Custom AI Assistants",
      items: [
        "Voice-activated task management",
        "Email and communication triage",
        "Research and data gathering",
        "Custom workflows for your specific needs",
        "Integration with your existing tools",
      ],
      resultTag: "Your personal AI team member",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection
          headline="Stop Drowning in Business Tasks. Start Being Present for Your Family."
          subheadline="Parent entrepreneurs: Automate your content creation, reclaim 10 hours every week, and scale your business without missing another family dinner."
          ctaText="Get Your Assessment"
          trustBadge="Trusted by 50+ parent-run businesses"
          imageSrc={heroImage}
          imageAlt="Stressed parent entrepreneur missing family time while working"
        />
        <PainPointsSection
          headline="You're Stuck in the Content Trap"
          subheadline="Running a business while raising a family shouldn't mean choosing one over the other. But right now, you're stuck."
          painPoints={painPoints}
        />
        <SolutionSection
          headline="What If You Could Automate All of That?"
          subheadline="Custom automation built for YOUR business. Not generic templates that don't fit your voice or your family's reality."
          benefits={benefits}
        />
        <ProcessSection
          headline="How It Works"
          subheadline="From overwhelmed to automated in 3 clear steps."
          steps={processSteps}
          ctaText="Get Your Assessment"
        />
        <TestimonialSection
          headline="Real Results from Real Parents"
          subheadline="Here's what happens when you automate the right way."
          testimonials={testimonials}
          stats={stats}
        />
        <ContainerScroll
          titleComponent={
            <div className="space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet ZEKE: My AI Assistant
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This Is What We Build for You
              </p>
            </div>
          }
        >
          <img
            src={zekeImage}
            alt="ZEKE AI automation workflow"
            className="w-full h-full object-cover rounded-lg"
          />
        </ContainerScroll>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I use the same systems I build for clients. ZEKE is my custom AI assistant that connects to my Gmail, Calendar, Zoom, Contacts, blog system, newsletter platform, and social media accounts. I can create an entire week's worth of content with voice commands through WhatsApp or my Meta RayBan glasses while I'm taking a walk or driving.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The result? Content creation went from 15 hours a week to 2-3 hours. I'm more consistent than I've ever been, the quality is better, and I actually have time to be present with my family.
          </p>
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-md">
            <p className="text-lg font-medium text-foreground">
              This is what's possible when automation is built RIGHT. We can build this level of integration for YOUR business.
            </p>
          </div>
        </div>
        <ServicesSection
          headline="What We Automate"
          subheadline="Every system we build is custom, but here's where we typically help parent entrepreneurs save the most time."
          services={services}
        />
        <PricingSection
          headline="Investment & Process"
          subheadline="Transparent pricing. No hidden fees. No surprises."
        />
        <FinalCTA
          headline="Ready to Automate Your Business & Reclaim Your Time?"
          subheadline="Book your assessment today and start getting hours back this month. Your family is waiting."
          primaryCtaText="Get Your Assessment"
          secondaryCtaText="Have questions? Contact us"
          imageSrc={finalImage}
          imageAlt="Happy family success"
        />
      </main>
      <Footer />
    </div>
  );
}
