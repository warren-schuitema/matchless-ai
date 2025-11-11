import HeroSection from "../HeroSection";
import heroImage from "@assets/generated_images/Stressed_parent_missing_family_time_d61982ac.png";

export default function HeroSectionExample() {
  return (
    <HeroSection
      headline="Stop Drowning in Business Tasks. Start Being Present for Your Family."
      subheadline="Parent entrepreneurs: Automate your content creation, reclaim 10 hours every week, and scale your business without missing another family dinner."
      ctaText="Get Your Assessment"
      trustBadge="Trusted by 25+ parent-run businesses"
      imageSrc={heroImage}
      imageAlt="Stressed parent entrepreneur missing family time while working"
      onCtaClick={() => console.log("CTA clicked")}
    />
  );
}
