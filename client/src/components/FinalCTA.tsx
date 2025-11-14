import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface FinalCTAProps {
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FinalCTA({
  headline,
  subheadline,
  primaryCtaText,
  secondaryCtaText,
  imageSrc,
  imageAlt,
}: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`,
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          {headline}
        </h2>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed text-white/90">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/book">
            <Button
              size="lg"
              className="text-lg px-8 min-h-12 bg-accent hover:bg-accent/90 text-accent-foreground"
              data-testid="button-final-primary"
            >
              {primaryCtaText}
            </Button>
          </Link>
          <a href="mailto:warren@matchless-marketing.com">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 min-h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-final-secondary"
            >
              {secondaryCtaText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
