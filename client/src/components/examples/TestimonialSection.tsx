import TestimonialSection from "../TestimonialSection";
import shaunPhoto from "@assets/Shaun Richardson image_1762891403477.jpg";
import kellyPhoto from "@assets/Kelly McCord Image_1762891407534.jpg";
import philPhoto from "@assets/Phil Taylor image_1762891395285.jpg";

export default function TestimonialSectionExample() {
  const testimonials = [
    {
      name: "Shaun Richardson",
      businessType: "Business Consultant",
      quote:
        "Before working with Warren, I was spending 20 hours a week just keeping up with content. Now my automation handles it in 2 hours, and it's actually better quality. I took on three new clients with the time I got back, and I'm home for dinner every night.",
      photoSrc: shaunPhoto,
    },
    {
      name: "Kelly McCord",
      businessType: "Business Consultant & Founder, SimpliPhi Management LLC",
      quote:
        "I was drowning in manual processes and couldn't scale. Warren built automations that not only saved me 10 hours a week but also made it possible to finally hire my first VA with clear systems in place. Game changer for my business and my family.",
      photoSrc: kellyPhoto,
    },
    {
      name: "Phil Taylor",
      businessType: "CEO, Goal Achiever's Summit",
      quote:
        "The content automation Warren built is incredible. What used to take me an entire Saturday now happens automatically while I'm spending time with my family. I'm showing up more consistently online and actually enjoying the process.",
      photoSrc: philPhoto,
    },
  ];

  const stats = [
    { value: "25+", label: "Businesses Automated" },
    { value: "200+", label: "Hours Saved Across All Clients" },
    { value: "8-10", label: "Average Hours Saved Per Week" },
  ];

  return (
    <TestimonialSection
      headline="Real Results from Real Parents"
      subheadline="Here's what happens when you automate the right way."
      testimonials={testimonials}
      stats={stats}
    />
  );
}
