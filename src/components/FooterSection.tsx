import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

// Clean modeling navigation links across the 11 primary pages
const primaryNavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-stacey-soans/" },
  { label: "Modeling Career", path: "/modeling-career/" },
  { label: "Fashion", path: "/fashion/" },
  { label: "Beauty", path: "/beauty/" },
  { label: "Editorial", path: "/editorial/" },
  { label: "Runway", path: "/runway/" },
  { label: "Commercial", path: "/commercial/" },
  { label: "Representation", path: "/representation/" },
  { label: "Press", path: "/publications-and-press/" },
  { label: "Contact", path: "/contact/" },
];

export const FooterSection = () => {
  return (
    <footer className="py-16 md:py-20 section-padding bg-background border-t border-border/60 text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand Header */}
        <div className="mb-6">
          <Link
            to="/"
            className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-wide hover:opacity-80 transition-opacity"
          >
            Stacey Soans
          </Link>
          <span className="block text-xs uppercase tracking-[0.25em] archive-sans text-gold mt-2 font-medium">
            Professional Model · Toronto, Canada
          </span>
        </div>

        {/* Factual Core Summary */}
        <p className="max-w-2xl font-serif text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
          Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning
          fashion, beauty, editorial, runway and commercial modelling.
        </p>

        {/* Booking CTA Button */}
        <div className="mb-10">
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
          >
            <span>Book Stacey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Primary Navigation */}
        <nav aria-label="Footer Primary Navigation" className="mb-8 w-full max-w-4xl">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs archive-sans uppercase tracking-wider text-muted-foreground">
            {primaryNavLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-gold transition-colors py-1 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Small Neutral Cross-Reference to Broader Profile Site */}
        <div className="py-4 border-t border-b border-border/40 w-full max-w-md mb-8">
          <a
            href={SITE_CONFIG.broaderProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-serif text-muted-foreground/80 hover:text-gold transition-colors"
          >
            <span>Explore Stacey Soans’ broader professional profile</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Legal, Copyright & Engineering Credit Line */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl pt-5 text-xs archive-sans text-muted-foreground/75 gap-3 border-t border-border/40 mt-4">
          <p>© {new Date().getFullYear()} Stacey Soans. All Rights Reserved.</p>

          <div className="flex items-center gap-2 text-[11px] tracking-widest text-muted-foreground/80">
            <span>ENGINEERED BY</span>
            <a
              href="https://vectoraslab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light hover:underline font-medium transition-colors"
            >
              VECTORASLAB.COM
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/legal/" className="hover:text-gold transition-colors">
              Usage &amp; Image Licensing
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact/" className="hover:text-gold transition-colors">
              Professional Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
