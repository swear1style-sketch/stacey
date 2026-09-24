import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

// Social media links prominently in the top right (Requirement 5)
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
  {
    name: "Email",
    href: "mailto:inquiries@staceysoans.com",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

// Clean desktop primary links matching the original template
const desktopLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/media-archive" },
  { label: "Contact", href: "/contact" },
];

// All 9 Encyclopedia sections required by Stacey (Requirement 5)
const encyclopediaSections = [
  { label: "About Stacey Soans", path: "/about", desc: "Biography, education and professional background" },
  { label: "Human Resources", path: "/human-resources", desc: "HR leadership, HRBP practice & organizational design" },
  { label: "Professional Golf", path: "/professional-golf", desc: "Golf career, course writing, tournaments & appearances" },
  { label: "Author & Publishing", path: "/author-publishing", desc: "Fairways & Femininity, essays & publishing history" },
  { label: "Professional Modelling", path: "/modelling", desc: "Editorial campaigns, runway, luxury commercial & stats" },
  { label: "Publications & Press", path: "/publications-press", desc: "Features, interviews, press releases & media kit" },
  { label: "Media Archive", path: "/media-archive", desc: "Uncropped photographic catalog & video reel" },
  { label: "Contact", path: "/contact", desc: "Booking, representation & professional inquiries" },
  { label: "Legal", path: "/legal", desc: "Copyright, image licensing & citation standards" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Transparent Luxury Navbar - Single Uncluttered Line */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between section-padding py-6 transition-all duration-500 ${
          scrolled || !isHomePage
            ? "bg-background/95 backdrop-blur-md py-4 border-b border-border/40 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
      >
        {/* Brand Name on the Left - Times New Roman */}
        <Link to="/" className="font-serif text-2xl md:text-3xl text-primary font-normal tracking-wide hover:opacity-80 transition-opacity">
          Stacey Soans
        </Link>

        {/* Clean Desktop Navigation Links (Exact Template Style) */}
        <div className="hidden md:flex items-center gap-8">
          {desktopLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            if (isAnchor && isHomePage) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-serif"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.href.startsWith("#") ? `/${link.href}` : link.href}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-serif"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Controls: Social Links + Index/Menu Button */}
        <div className="flex items-center gap-5">
          {/* Prominent Social Media Icons (Top Right as requested in Requirement 5) */}
          <div className="flex items-center gap-4 text-muted-foreground">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-primary transition-colors p-1"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Full Encyclopedia Menu / Index Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 border border-primary/30 px-3.5 py-1.5 text-xs tracking-[0.2em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-serif"
            aria-label="Open Encyclopedia Navigation"
          >
            <span className="hidden sm:inline">Index</span>
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Archival Encyclopedia Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col justify-between section-padding py-10 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header of Drawer */}
            <div className="flex items-start justify-between border-b border-border/40 pb-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-primary font-normal">
                  STACEY SOANS
                </h2>
                <p className="text-xs tracking-[0.2em] uppercase text-gold font-serif mt-1">
                  Digital Encyclopedia &amp; Media Archive
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-muted-foreground mt-2 max-w-xl">
                  A Comprehensive Digital Resource on Stacey Soans, Her Professional Work, Publications &amp; Media
                </p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 border border-border hover:border-gold text-primary hover:text-gold transition-colors"
                aria-label="Close Navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Complete 9 Section Links (Requirement 5) */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
              {encyclopediaSections.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="group block p-4 border border-border/60 hover:border-gold/60 bg-secondary/20 hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-serif">
                        Section 0{index + 1}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-primary group-hover:text-gold transition-colors font-normal">
                      {item.label}
                    </h3>
                    <p className="font-serif text-xs text-muted-foreground mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer of Drawer with Social Links & Location */}
            <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-muted-foreground">
              <span>Toronto, Ontario, Canada • Official Digital Archive</span>
              <div className="flex items-center gap-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
              <span>© 2026 Stacey Soans. All Rights Reserved.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
