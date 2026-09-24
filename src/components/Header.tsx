import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Globe, Search, ArrowUpRight } from "lucide-react";
import ArchivalLogo from "./ArchivalLogo";

// Social links prominently at the top right
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/staceysoans",
    label: "Professional LinkedIn Network",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/staceysoans",
    label: "Editorial & Golf Instagram",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:inquiries@staceysoans.com",
    label: "Direct Inquiries & Booking",
    icon: <Mail className="w-3.5 h-3.5" />,
  },
];

// Navigation according to Stacey's instructions:
// About Stacey Soans | Human Resources | Professional Golf | Author & Publishing | Professional Modelling | Publications & Press | Media Archive | Contact | Legal
const navItems = [
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

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-[#0a0c10] border-b border-border/80 sticky top-0 z-40 backdrop-blur-md">
      {/* 1. TOP UTILITY BAR (Official Domain Authority & Prominent Social Links) */}
      <div className="border-b border-border/50 bg-[#07080a] py-1.5 section-padding">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] archive-sans tracking-wider">
          {/* Official Registry Badging */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="hidden sm:inline">Official Authorized Digital Resource • Toronto, Canada</span>
            <span className="sm:hidden text-gold font-medium">Official Digital Archive</span>
          </div>

          {/* Social Media Icons/Links prominently at top right (Requirement 5) */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[10px] uppercase text-muted-foreground tracking-widest mr-1">
              Connect:
            </span>
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors duration-200 px-1 py-0.5"
              >
                {item.icon}
                <span className="hidden lg:inline text-[11px]">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. BRAND TITLE & TAGLINE SECTION (Requirement 5) */}
      <div className="py-4 sm:py-5 section-padding border-b border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo & Main Header Title */}
          <div>
            <ArchivalLogo variant="header" />
            
            {/* Tagline specified by Stacey: */}
            <p className="mt-2 text-xs md:text-[13px] text-muted-foreground tracking-wide font-serif italic text-balance">
              A Comprehensive Digital Resource on Stacey Soans, Her Professional Work, Publications &amp; Media
            </p>
          </div>

          {/* Rapid Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3 self-end md:self-center">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] border border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-300 archive-sans"
            >
              <span>Booking &amp; Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-gold border border-border rounded-sm transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. PRIMARY NAVIGATION BAR (Requirement 5) */}
      <nav
        aria-label="Primary Navigation"
        className="hidden lg:block bg-[#090b0e] py-0 section-padding overflow-x-auto"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex items-center flex-wrap divide-x divide-border/40 text-[12px] md:text-[13px] font-serif">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className={index === 0 ? "" : "pl-3.5 md:pl-4.5"}>
                  <Link
                    to={item.path}
                    className={`block py-3 pr-3.5 md:pr-4.5 transition-colors duration-200 tracking-wide ${
                      isActive
                        ? "text-gold font-medium border-b-2 border-gold -mb-[1px]"
                        : "text-foreground/80 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/media-archive"
            className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-gold archive-sans py-2 flex items-center gap-1.5"
          >
            <span>Catalog Index</span>
          </Link>
        </div>
      </nav>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[125px] bottom-0 bg-[#0a0c10]/98 backdrop-blur-lg border-b border-border z-50 overflow-y-auto p-6 flex flex-col justify-between">
          <div>
            <div className="text-[11px] archive-sans tracking-widest uppercase text-gold/80 mb-3 pb-2 border-b border-border/60">
              Encyclopedia Index &amp; Navigation
            </div>
            <ul className="space-y-3 font-serif text-lg">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block py-1.5 transition-colors ${
                        isActive ? "text-gold font-medium pl-2 border-l-2 border-gold" : "text-foreground/90 hover:text-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-6 border-t border-border/60 space-y-4">
            <p className="text-xs text-muted-foreground italic font-serif">
              A Comprehensive Digital Resource on Stacey Soans, Her Professional Work, Publications &amp; Media
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors"
                >
                  {s.icon}
                  <span className="text-xs archive-sans">{s.name}</span>
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="block text-center py-2.5 bg-gold text-black font-medium text-xs uppercase tracking-widest archive-sans"
            >
              Direct Booking &amp; Media Inquiries
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
