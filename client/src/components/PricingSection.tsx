import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingSectionProps {
  headline: string;
  subheadline: string;
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
}

export default function PricingSection({
  headline,
  subheadline,
  onPrimaryCta,
  onSecondaryCta,
}: PricingSectionProps) {
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

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-foreground">
                Start with a comprehensive business assessment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    4-Hour Assessment: $1,000
                  </p>
                  <p className="text-muted-foreground">
                    Best for smaller operations, 1-2 main pain points
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    8-Hour Assessment: $1,500
                  </p>
                  <p className="text-muted-foreground">
                    Best for larger businesses, multiple systems, team
                    involvement
                  </p>
                </div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-md p-4">
                <p className="font-medium text-foreground">
                  Fully credited toward your retainer when you proceed.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Monthly Retainer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-foreground">
                Starting at $500/month, custom pricing based on your specific
                needs and scope.
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-foreground">
                  What's included:
                </p>
                <ul className="space-y-2">
                  {[
                    "Ongoing system support and optimization",
                    "Regular check-ins",
                    "New automations as your business grows",
                    "Troubleshooting and updates",
                    "Training for you and your team",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t">
                <p className="font-medium text-foreground">
                  Commitment:{" "}
                  <span className="text-muted-foreground">
                    6-month minimum commitment to ensure we have time to see
                    real results and ROI.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-base text-muted-foreground">
              Not sure which assessment is right for you? Book a free 15-minute
              clarity call and I'll help you figure it out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 min-h-12"
                onClick={onPrimaryCta}
                data-testid="button-pricing-primary"
              >
                Get Your Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 min-h-12"
                onClick={onSecondaryCta}
                data-testid="button-pricing-secondary"
              >
                Book Free Clarity Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
