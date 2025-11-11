import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ZekeShowcaseProps {
  headline: string;
  subheadline: string;
  body: string;
  calloutText: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  onCtaClick?: () => void;
}

export default function ZekeShowcase({
  headline,
  subheadline,
  body,
  calloutText,
  ctaText,
  imageSrc,
  imageAlt,
  onCtaClick,
}: ZekeShowcaseProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">{body}</p>
            <Card className="bg-accent/10 border-accent/20 p-6">
              <p className="text-lg font-medium text-foreground">
                {calloutText}
              </p>
            </Card>
            <Button
              size="lg"
              className="text-lg px-8 min-h-12"
              onClick={onCtaClick}
              data-testid="button-zeke-cta"
            >
              {ctaText}
            </Button>
          </div>
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg w-full h-auto shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
