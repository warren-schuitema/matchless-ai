import SolutionSection from "../SolutionSection";

export default function SolutionSectionExample() {
  const benefits = [
    {
      title: "One automation = 8-10 hours back each week",
      description:
        "Stop manually creating content. Let the system do it while you focus on revenue-generating activities (or actually take your kid to the park).",
    },
    {
      title: "Custom-built for your business, not cookie-cutter solutions",
      description:
        "Your business isn't like everyone else's. Your automation shouldn't be either. We build systems that match your voice, your platforms, and your workflow.",
    },
    {
      title: "Learn to manage it yourself or let us handle it",
      description:
        "You're not buying a black box. You're getting training, documentation, and ongoing support. Run it yourself or stay on retainer. Your choice.",
    },
  ];

  return (
    <SolutionSection
      headline="What If You Could Automate All of That?"
      subheadline="Custom automation built for YOUR business. Not generic templates that don't fit your voice or your family's reality."
      benefits={benefits}
    />
  );
}
