import PricingSection from "../PricingSection";

export default function PricingSectionExample() {
  return (
    <PricingSection
      headline="Investment & Process"
      subheadline="Transparent pricing. No hidden fees. No surprises."
      onPrimaryCta={() => console.log("Primary CTA clicked")}
      onSecondaryCta={() => console.log("Secondary CTA clicked")}
    />
  );
}
