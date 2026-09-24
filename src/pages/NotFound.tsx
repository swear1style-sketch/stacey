import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route requested:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO
        title="404 — Accession Record Not Located | Stacey Soans Archive"
        description="The requested encyclopedia record could not be located in the Stacey Soans Digital Encyclopedia & Media Archive."
      />

      <div className="section-padding py-24 md:py-36 bg-[#090b0e] text-center flex flex-col items-center justify-center">
        <div className="max-w-xl mx-auto border border-border/80 bg-card/60 p-8 md:p-12 shadow-2xl">
          <span className="text-xs archive-sans uppercase tracking-[0.25em] text-gold font-medium block mb-3">
            Archival Catalog Notice
          </span>
          <h1 className="archive-heading text-6xl md:text-7xl font-normal text-primary mb-4">
            404
          </h1>
          <h2 className="font-serif text-xl md:text-2xl text-foreground/90 font-normal mb-4">
            Catalog Record Not Located
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
            The document, section, or media accession code you requested does not correspond to an active index within the Stacey Soans Digital Encyclopedia &amp; Media Archive.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Archive Home</span>
            </Link>

            <Link
              to="/media-archive"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:text-gold text-xs uppercase tracking-widest archive-sans transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Browse Catalog Index</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
