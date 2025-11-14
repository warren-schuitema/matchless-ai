import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface Benefit {
  title: string;
  description: string;
}

interface SolutionSectionProps {
  headline: string;
  subheadline: string;
  benefits: Benefit[];
}

export default function SolutionSection({
  headline,
  subheadline,
  benefits,
}: SolutionSectionProps) {
  const { ref: headingRef, isInView: headingInView } = useInView();
  
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="hover-elevate h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center icon-bounce-hover">
                      <Check className="w-6 h-6 text-primary" data-testid={`check-benefit-${index}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
