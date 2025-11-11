import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PainPoint {
  icon: LucideIcon;
  headline: string;
  body: string;
}

interface PainPointsSectionProps {
  headline: string;
  subheadline: string;
  painPoints: PainPoint[];
}

export default function PainPointsSection({
  headline,
  subheadline,
  painPoints,
}: PainPointsSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {point.headline}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {point.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
