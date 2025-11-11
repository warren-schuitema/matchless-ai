import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  trustBadge?: string;
  imageSrc: string;
  imageAlt: string;
  onCtaClick?: () => void;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  trustBadge,
  imageSrc,
  imageAlt,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                size="lg"
                className="text-lg px-8 min-h-12"
                onClick={onCtaClick}
                data-testid="button-hero-cta"
              >
                {ctaText}
              </Button>
            </div>
            {trustBadge && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span className="text-base" data-testid="text-trust-badge">
                  {trustBadge}
                </span>
              </div>
            )}
          </div>
          <div className="lg:col-span-2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg w-full h-auto shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
