import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

// Modeling-focused primary navigation matching requirements
const portfolioCategories = [
  { label: "All Modeling Portfolio", path: "/modeling-career/", desc: "Over a decade of professional modeling experience" },
  { label: "Fashion", path: "/fashion/", desc: "High fashion editorial and lookbook projects" },
  { label: "Beauty", path: "/beauty/", desc: "Beauty campaigns and cosmetic portraiture" },
  { label: "Editorial", path: "/editorial/", desc: "Fashion publications and photographic features" },
  { label: "Runway", path: "/runway/", desc: "Toronto runway events and dynamic silhouette" },
  { label: "Commercial", path: "/commercial/", desc: "Commercial photography and lifestyle campaigns" },
];

const mainNavItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about-stacey-soans/" },
  { label: "PORTFOLIO", path: "/modeling-career/", hasDropdown: true },
  { label: "CAREER", path: "/modeling-career/" },
  { label: "REPRESENTATION", path: "/representation/" },
  { label: "PRESS", path: "/publications-and-press/" },
];

const mobileNavLinks = [
  { label: "Home", path: "/" },
  { label: "About Stacey Soans", path: "/about-stacey-soans/" },
  { label: "Modeling Career", path: "/modeling-career/" },
  { label: "Fashion", path: "/fashion/" },
  { label: "Beauty", path: "/beauty/" },
  { label: "Editorial", path: "/editorial/" },
  { label: "Runway", path: "/runway/" },
  { label: "Commercial", path: "/commercial/" },
  { label: "Representation", path: "/representation/" },
  { label: "Publications & Press", path: "/publications-and-press/" },
  { label: "Contact & Booking", path: "/contact/" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Transparent Luxury Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 transition-all duration-500 ${
          scrolled || !isHomePage
            ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/40 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Brand Name on Left */}
        <Link
          to="/"
          className="font-display text-2xl sm:text-3xl text-[#f3e5ce] tracking-tight hover:opacity-85 transition-opacity"
          aria-label="Stacey Soans - Home"
        >
          Stacey Soans
        </Link>

        {/* Center Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {mainNavItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`inline-flex items-center gap-1 archive-sans text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 font-medium ${
                      isActive ? "text-[#f3e5ce]" : "text-foreground/75 hover:text-[#f3e5ce]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </Link>

                  {isActive && (
                    <span className="block w-1 h-1 rounded-full bg-gold mx-auto mt-1 shadow-[0_0_8px_#c5a880]" />
                  )}

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 p-3 bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl rounded-sm"
                      >
                        <div className="space-y-1">
                          {portfolioCategories.map((cat) => (
                            <Link
                              key={cat.path}
                              to={cat.path}
                              className={`block px-3 py-2 text-xs archive-sans transition-colors rounded-sm ${
                                location.pathname === cat.path
                                  ? "bg-secondary text-gold font-medium"
                                  : "text-foreground/80 hover:bg-secondary/60 hover:text-primary"
                              }`}
                            >
                              <span className="block font-medium tracking-wider uppercase text-[11px]">
                                {cat.label}
                              </span>
                              <span className="block text-[10px] text-muted-foreground font-serif mt-0.5 line-clamp-1">
                                {cat.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div key={item.label} className="relative py-2">
                <Link
                  to={item.path}
                  className={`archive-sans text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 font-medium ${
                    isActive ? "text-[#f3e5ce]" : "text-foreground/75 hover:text-[#f3e5ce]"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <span className="block w-1 h-1 rounded-full bg-gold mx-auto mt-1 shadow-[0_0_8px_#c5a880]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right CTA Button & Minimalist 2-line Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact/"
            className="border border-[#c5a880]/70 hover:border-[#c5a880] hover:bg-[#c5a880]/15 text-[#f3e5ce] px-5 py-2 archive-sans text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 hidden sm:inline-block"
          >
            Book Stacey
          </Link>

          {/* Minimalist 2-line Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center gap-1.5 p-2 group cursor-pointer focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`h-[1.5px] bg-foreground/90 group-hover:bg-gold transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-[4.5px]" : "w-6"
              }`}
            />
            <span
              className={`h-[1.5px] bg-foreground/90 group-hover:bg-gold transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Luxury Menu Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-14 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-8 border-b border-border/40">
              <span className="font-display text-2xl text-[#f3e5ce]">Stacey Soans</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-foreground/80 hover:text-gold transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <span className="archive-sans text-[10px] uppercase tracking-[0.3em] text-gold block mb-4">
                  Navigation
                </span>
                <nav className="flex flex-col space-y-3">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xl sm:text-2xl font-display transition-colors ${
                        location.pathname === link.path
                          ? "text-gold font-normal"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-6 md:border-l md:border-border/40 md:pl-8">
                <div>
                  <span className="archive-sans text-[10px] uppercase tracking-[0.3em] text-gold block mb-2">
                    Professional Representation
                  </span>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
                  </p>
                </div>

                <div>
                  <span className="archive-sans text-[10px] uppercase tracking-[0.3em] text-gold block mb-2">
                    Direct Booking
                  </span>
                  <p className="font-serif text-xs text-muted-foreground mb-4">
                    For commercial campaigns, editorial features, beauty projects, and runway inquiries.
                  </p>
                  <Link
                    to="/contact/"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
                  >
                    <span>Book Stacey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer with Credits */}
            <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs archive-sans text-muted-foreground gap-3">
              <span>© {new Date().getFullYear()} Stacey Soans</span>
              <div className="flex items-center gap-2">
                <span>ENGINEERED BY</span>
                <a
                  href="https://vectoraslab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  VECTORASLAB.COM
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
