import ProcessSection from "../ProcessSection";

export default function ProcessSectionExample() {
  const steps = [
    {
      number: 1,
      title: "Book Your Assessment",
      description:
        "We start with a deep-dive assessment (4-8 hours depending on your needs). We analyze your current tech stack, review your workflows, and identify your biggest time drains. You walk away with a detailed automation roadmap, even if you don't proceed.",
    },
    {
      number: 2,
      title: "We Build Your Custom System",
      description:
        "We build automations tailored to YOUR business. Content creation, client communications, calendar management, whatever you need. You're involved every step because this is YOUR system. We test, refine, and make sure it actually works for your real life.",
    },
    {
      number: 3,
      title: "You Get Your Time Back",
      description:
        "System launches. You get hands-on training, complete documentation, and 30-day support to work out any issues. Then ongoing monthly support keeps everything running smoothly as your business grows.",
    },
  ];

  return (
    <ProcessSection
      headline="How It Works"
      subheadline="From overwhelmed to automated in 3 clear steps."
      steps={steps}
      ctaText="Get Your Assessment"
      onCtaClick={() => console.log("Process CTA clicked")}
    />
  );
}
