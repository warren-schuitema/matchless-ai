import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  headline: string;
  subheadline: string;
  steps: Step[];
  ctaText: string;
  onCtaClick?: () => void;
}

export default function ProcessSection({
  headline,
  subheadline,
  steps,
  ctaText,
  onCtaClick,
}: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="hover-elevate h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 min-h-12"
            onClick={onCtaClick}
            data-testid="button-process-cta"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
