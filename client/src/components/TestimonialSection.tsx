import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

interface Testimonial {
  name: string;
  businessType: string;
  quote: string;
  photoSrc?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface TestimonialSectionProps {
  headline: string;
  subheadline: string;
  testimonials: Testimonial[];
  stats: Stat[];
}

export default function TestimonialSection({
  headline,
  subheadline,
  testimonials,
  stats,
}: TestimonialSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    {testimonial.photoSrc && (
                      <AvatarImage
                        src={testimonial.photoSrc}
                        alt={testimonial.name}
                      />
                    )}
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.businessType}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                <AnimatedCounter value={stat.value} duration={2.5} />
              </div>
              <div className="text-base text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
