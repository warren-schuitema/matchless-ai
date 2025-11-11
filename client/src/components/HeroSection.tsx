import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  trustBadge?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  trustBadge,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              {headline}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <Link href="/book">
                <Button
                  size="lg"
                  className="text-lg px-10 min-h-14 bg-white text-black hover:bg-white/90 font-semibold group"
                  data-testid="button-hero-cta"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            {trustBadge && (
              <motion.div 
                className="flex items-center gap-3 text-white/80 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Users className="w-5 h-5" />
                <span className="text-base font-medium" data-testid="text-trust-badge">
                  {trustBadge}
                </span>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-2xl w-full h-auto shadow-2xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
