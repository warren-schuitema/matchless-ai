import PainPointsSection from "../PainPointsSection";
import { Clock, Home, TrendingUp } from "lucide-react";

export default function PainPointsSectionExample() {
  const painPoints = [
    {
      icon: Clock,
      headline: "15+ Hours a Week on Content You Hate",
      body: "Every week, the same cycle. Write the blog post. Create social media graphics. Schedule posts. Write the newsletter. Repurpose everything for different platforms. Meanwhile, your kids are asking you to play, and you're saying \"not now, I need to finish this post.\"",
    },
    {
      icon: Home,
      headline: "Missing Family Moments for Social Posts",
      body: "You started this business for freedom and flexibility. Instead, you're working evenings and weekends just to stay visible online. Your family sees you physically there but mentally absent, always thinking about the next content deadline.",
    },
    {
      icon: TrendingUp,
      headline: "Competitors Using AI While You're Spinning Your Wheels",
      body: "You see other businesses posting consistently, showing up everywhere, scaling fast. You know they're using automation and AI. You're not. And every day you wait, the gap gets wider.",
    },
  ];

  return (
    <PainPointsSection
      headline="You're Stuck in the Content Trap"
      subheadline="Running a business while raising a family shouldn't mean choosing one over the other. But right now, you're stuck."
      painPoints={painPoints}
    />
  );
}
