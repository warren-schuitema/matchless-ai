import FinalCTA from "../FinalCTA";
import finalImage from "@assets/generated_images/Final_CTA_family_success_045409a7.png";

export default function FinalCTAExample() {
  return (
    <FinalCTA
      headline="Ready to Automate Your Business & Reclaim Your Time?"
      subheadline="Book your assessment today and start getting hours back this month. Your family is waiting."
      primaryCtaText="Get Your Assessment"
      secondaryCtaText="Have questions? Contact us"
      imageSrc={finalImage}
      imageAlt="Happy family success"
      onPrimaryCta={() => console.log("Primary CTA clicked")}
      onSecondaryCta={() => console.log("Secondary CTA clicked")}
    />
  );
}
