import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Target, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface BookingOption {
  title: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  url: string;
  icon: typeof Clock;
  featured?: boolean;
}

const bookingOptions: BookingOption[] = [
  {
    title: "Quick Chat",
    duration: "15 minutes",
    price: "Free",
    description: "Perfect for quick questions or to see if we're a good fit.",
    features: [
      "Discuss your biggest challenge",
      "Get initial recommendations",
      "See if automation is right for you"
    ],
    url: "https://tidycal.com/warren2/15-minute-meeting",
    icon: Zap
  },
  {
    title: "Free Assessment",
    duration: "30 minutes",
    price: "Free",
    description: "Comprehensive evaluation of your automation opportunities.",
    features: [
      "Deep-dive into your workflow",
      "Identify biggest time-drains",
      "Custom automation roadmap",
      "Actionable insights you can use immediately"
    ],
    url: "https://tidycal.com/warren2/30-minute-meeting",
    icon: Target,
    featured: true
  },
  {
    title: "Deep Dive Strategy",
    duration: "60 minutes",
    price: "$60",
    description: "Intensive session for complex automation planning.",
    features: [
      "Comprehensive workflow analysis",
      "Detailed implementation plan",
      "Tech stack recommendations",
      "ROI projections",
      "Priority roadmap"
    ],
    url: "https://tidycal.com/warren2/60-minute-meeting",
    icon: Clock
  }
];

export default function BookingOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {bookingOptions.map((option, index) => (
        <motion.div
          key={option.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className={option.featured ? "md:scale-105" : ""}
        >
          <Card 
            className={`h-full hover-elevate relative ${
              option.featured ? "border-primary shadow-lg" : ""
            }`}
            data-testid={`booking-option-${index}`}
          >
            {option.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  Recommended
                </Badge>
              </div>
            )}
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <option.icon className="w-8 h-8 text-primary" />
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    {option.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {option.duration}
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl">{option.title}</CardTitle>
              <CardDescription className="text-base">
                {option.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={option.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full gap-2"
                  variant={option.featured ? "default" : "outline"}
                  size="lg"
                  data-testid={`button-book-${index}`}
                >
                  Book Now
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
