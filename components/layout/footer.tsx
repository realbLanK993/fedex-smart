// src/components/layout/FooterOption1.tsx
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Youtube } from "lucide-react"; // Example social icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8 text-sm">
        {/* Section 1: Brand & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
          {/* Brand Info */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <h3 className="text-base font-semibold text-foreground mb-2">
              <Link href="/" className="hover:text-primary transition-colors">
                FedEx SMART Centre @ IIT Madras
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-xs">
              Pioneering research and technology for sustainable, efficient, and
              socially responsible logistics and supply chains. A joint
              initiative of FedEx and IIT Madras.
            </p>
          </div>
          {/* Contact Info */}
          <div className="text-left md:text-right w-full md:w-auto">
            <h4 className="font-semibold text-foreground mb-2 hidden md:block">
              Get In Touch
            </h4>
            <ul className="space-y-1">
              <li>
                <span className="text-muted-foreground">
                  NAC 1, IIT Madras, Chennai, TN 600036
                </span>
              </li>
              <li>
                <a
                  href="mailto:fedexiitm.admin@imail.iitm.ac.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  fedexiitm.admin@imail.iitm.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Section 2: Links & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Section 3: Copyright */}
        <div className="pt-2 text-center text-xs text-muted-foreground">
          © {currentYear} FedEx SMART Centre, Indian Institute of Technology
          Madras. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
