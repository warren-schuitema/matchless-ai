import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Matchless Marketing helps parent entrepreneurs automate their
              businesses so they can scale without sacrificing family time.
              Custom AI systems built for real life.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Warren
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-resources"
                >
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-book"
                >
                  Book Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a
                  href="mailto:warren@matchless-marketing.com"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  warren@matchless-marketing.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <a
                  href="tel:+16166361730"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-phone"
                >
                  (616) 636-1730
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-base text-muted-foreground">
                  Allegan, MI
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/matchlessmarketingllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin-company"
                aria-label="LinkedIn Company"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/warren-schuitema-9244721a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin-warren"
                aria-label="Warren's LinkedIn"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61554191072512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook-company"
                aria-label="Facebook Company"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/warren.schuitema/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook-warren"
                aria-label="Warren's Facebook"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-base text-muted-foreground">
            © 2025 Matchless Marketing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
