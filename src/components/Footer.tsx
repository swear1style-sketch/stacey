import { Link } from "react-router-dom";
import ArchivalLogo from "./ArchivalLogo";

// Footer navigation matching Stacey's instructions:
// About Stacey Soans | Human Resources | Professional Golf | Author & Publishing | Professional Modelling | Publications & Press | Media Archive | Contact | Legal
const footerLinks = [
  { label: "About Stacey Soans", path: "/about" },
  { label: "Human Resources", path: "/human-resources" },
  { label: "Professional Golf", path: "/professional-golf" },
  { label: "Author & Publishing", path: "/author-publishing" },
  { label: "Professional Modelling", path: "/modelling" },
  { label: "Publications & Press", path: "/publications-press" },
  { label: "Media Archive", path: "/media-archive" },
  { label: "Contact", path: "/contact" },
  { label: "Legal", path: "/legal" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#08090c] border-t border-border/80 text-foreground py-14 md:py-20 section-padding">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Archival Logo / Seal */}
        <div className="mb-6">
          <ArchivalLogo variant="footer" />
        </div>

        {/* Required Footer Title */}
        <h2 className="font-serif text-2xl md:text-3xl text-primary font-normal tracking-tight mb-4">
          Stacey Soans Digital Encyclopedia &amp; Media Archive
        </h2>

        {/* Required Description */}
        <p className="max-w-3xl font-serif text-muted-foreground text-sm md:text-base leading-relaxed mb-10 text-balance">
          A comprehensive digital resource covering Stacey Soans and her professional work across Human Resources, professional golf, authorship and professional modelling, including publications and media.
        </p>

        {/* Required Navigation Links */}
        <nav aria-label="Footer Navigation" className="mb-10 w-full max-w-5xl">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm font-serif text-foreground/80">
            {footerLinks.map((item, index) => (
              <li key={item.path} className="flex items-center">
                <Link
                  to={item.path}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="ml-3 sm:ml-4 md:ml-6 text-border select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Archival Verification & Canonical Information for High Domain Authority SEO */}
        <div className="w-full max-w-4xl border-t border-border/40 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground archive-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
            <span>Official Canonical Index • Registered in Toronto, Ontario, Canada</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/legal" className="hover:text-gold transition-colors">
              Terms &amp; Citation Guide
            </Link>
            <span>•</span>
            <Link to="/media-archive" className="hover:text-gold transition-colors">
              Accession Catalog
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold transition-colors">
              Media Inquiries
            </Link>
          </div>
        </div>

        {/* Required Copyright */}
        <div className="mt-4 pt-4 border-t border-border/20 w-full text-center">
          <p className="font-serif text-xs md:text-sm text-muted-foreground/90 tracking-wide">
            © 2026 Stacey Soans. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
