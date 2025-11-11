import ServicesSection from "../ServicesSection";
import { FileText, Mail, Calendar, Bot } from "lucide-react";

export default function ServicesSectionExample() {
  const services = [
    {
      icon: FileText,
      title: "Content Creation Automation",
      items: [
        "Blog generation and publishing",
        "Social media post creation and scheduling",
        "Newsletter systems",
        "Image and video creation",
        "Platform-specific repurposing",
      ],
      resultTag: "Save 8-10 hours per week",
    },
    {
      icon: Mail,
      title: "Business Systems Setup",
      items: [
        "CRM automation",
        "Client onboarding sequences",
        "Appointment scheduling",
        "Follow-up systems",
        "Proposal generation",
      ],
      resultTag: "Never drop the ball on a client",
    },
    {
      icon: Calendar,
      title: "Calendar & Scheduling",
      items: [
        "Automated booking systems",
        "Meeting coordination",
        "Reminder sequences",
        "Time blocking automation",
        "Team scheduling",
      ],
      resultTag: "Eliminate scheduling chaos",
    },
    {
      icon: Bot,
      title: "Custom AI Assistants",
      items: [
        "Voice-activated task management",
        "Email and communication triage",
        "Research and data gathering",
        "Custom workflows for your specific needs",
        "Integration with your existing tools",
      ],
      resultTag: "Your personal AI team member",
    },
  ];

  return (
    <ServicesSection
      headline="What We Automate"
      subheadline="Every system we build is custom, but here's where we typically help parent entrepreneurs save the most time."
      services={services}
    />
  );
}
