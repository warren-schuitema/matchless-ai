import ZekeShowcase from "../ZekeShowcase";
import zekeImage from "@assets/image_1762892026965.png";

export default function ZekeShowcaseExample() {
  return (
    <ZekeShowcase
      headline="Meet ZEKE: My AI Assistant (This Is What We Build for You)"
      subheadline="I use the same systems I build for clients."
      body="ZEKE is my custom AI assistant that connects to my Gmail, Calendar, Zoom, Contacts, blog system, newsletter platform, and social media accounts. I can create an entire week's worth of content with voice commands through WhatsApp or my Meta RayBan glasses while I'm taking a walk or driving. The result? Content creation went from 15 hours a week to 2-3 hours. I'm more consistent than I've ever been, the quality is better, and I actually have time to be present with my family."
      calloutText="This is what's possible when automation is built RIGHT. We can build this level of integration for YOUR business."
      ctaText="Build Your Custom Assistant"
      imageSrc={zekeImage}
      imageAlt="ZEKE AI automation workflow"
      onCtaClick={() => console.log("ZEKE CTA clicked")}
    />
  );
}
