import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Home, Camera, Mail } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 in console for debugging
    console.warn("404 Not Found: Page route does not exist:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="404 Page Not Found — Stacey Soans | Professional Model"
        description="The requested page could not be found on Stacey Soans' professional modeling website."
      />

      <div className="section-padding py-24 md:py-36 bg-[#090b0e] text-center flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto border border-border/80 bg-card/60 p-8 md:p-12 shadow-2xl">
          <span className="text-xs archive-sans uppercase tracking-[0.25em] text-gold font-medium block mb-3">
            Stacey Soans · Professional Model
          </span>
          <h1 className="archive-heading text-6xl md:text-7xl font-normal text-primary mb-4">
            404
          </h1>
          <h2 className="font-serif text-xl md:text-2xl text-foreground/90 font-normal mb-4">
            Page Not Found
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
            The modeling portfolio page, photograph, or section you requested is not available. Please return to the homepage or explore our curated portfolio categories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/modeling-career/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground hover:text-gold text-xs uppercase tracking-widest archive-sans transition-colors"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>View Portfolio</span>
            </Link>

            <Link
              to="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground hover:text-gold text-xs uppercase tracking-widest archive-sans transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact / Booking</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
