import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArchivalLogo from "./ArchivalLogo";

// Links required by Stacey:
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/staceysoans",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/stacey.soans/",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

const FooterSection = () => {
  return (
    <motion.footer
      className="py-16 section-padding bg-background border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        <ArchivalLogo variant="footer" />

        {/* Required Footer Title */}
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-primary">
          Stacey Soans Digital Encyclopedia &amp; Media Archive
        </h2>

        {/* Required Footer Description */}
        <p className="max-w-3xl font-serif text-muted-foreground text-sm md:text-base leading-relaxed text-balance">
          A comprehensive digital resource covering Stacey Soans and her professional work across Human Resources, professional golf, authorship and professional modelling, including publications and media.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Required Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm font-serif text-foreground/80">
            {footerLinks.map((item, index) => (
              <li key={item.path} className="flex items-center">
                <Link to={item.path} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="ml-4 md:ml-6 text-border select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Required Copyright */}
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-serif pt-4 border-t border-border/40 w-full">
          © 2026 Stacey Soans. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
