import HeroSection from "../HeroSection";
import heroImage from "@assets/generated_images/Hero_parent_working_from_home_7e48e289.png";

export default function HeroSectionExample() {
  return (
    <HeroSection
      headline="Stop Drowning in Business Tasks. Start Being Present for Your Family."
      subheadline="Parent entrepreneurs: Automate your content creation, reclaim 10 hours every week, and scale your business without missing another family dinner."
      ctaText="Get Your Assessment"
      trustBadge="Trusted by 25+ parent-run businesses"
      imageSrc={heroImage}
      imageAlt="Parent entrepreneur working from home"
      onCtaClick={() => console.log("CTA clicked")}
    />
  );
}
