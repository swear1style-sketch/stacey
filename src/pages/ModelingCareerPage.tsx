import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Camera, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

// Authentic Stacey Soans modeling photography assets
import pubOutdoor from "@/assets/stacey/pub-outdoor.jpg";
import pubPortrait1 from "@/assets/stacey/pub-portrait-1.jpg";
import pubPortrait2 from "@/assets/stacey/pub-portrait-2.jpg";
import pubPortrait3 from "@/assets/stacey/pub-portrait-3.jpg";
import pubPortrait4 from "@/assets/stacey/pub-portrait-4.jpg";
import pubPortrait5 from "@/assets/stacey/pub-portrait-5.jpg";
import pubDigitalsFull from "@/assets/stacey/pub-digitals-full.jpg";

export const ModelingCareerPage = () => {
  const { openLightbox } = useLightbox();
  const [activeFilter, setActiveFilter] = useState("all");
  const meta = PAGES_METADATA.career;

  const careerSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/modeling-career/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.location.city,
        "addressRegion": SITE_CONFIG.location.region,
        "addressCountry": SITE_CONFIG.location.country,
      },
    },
  };

  const careerItems = [
    {
      src: pubOutdoor,
      alt: "Stacey Soans outdoor editorial modeling portrait in Toronto",
      caption: "Outdoor Editorial — Natural Form & Light",
      catalogId: "CAR-ED-01",
      category: "Editorial",
      year: "2026",
    },
    {
      src: pubPortrait1,
      alt: "Stacey Soans high-fashion studio portrait",
      caption: "High-Fashion Studio Portrait",
      catalogId: "CAR-FSH-02",
      category: "Fashion",
      year: "2025",
    },
    {
      src: pubPortrait2,
      alt: "Stacey Soans beauty modeling portrait with natural lighting",
      caption: "Beauty Portrait — Natural Light & Complexion",
      catalogId: "CAR-BTY-03",
      category: "Beauty",
      year: "2026",
    },
    {
      src: pubPortrait3,
      alt: "Stacey Soans runway modeling portrait — full-length form",
      caption: "Runway Portrait — Full-Length Form & Presence",
      catalogId: "CAR-RNW-04",
      category: "Runway",
      year: "2025",
    },
    {
      src: pubPortrait4,
      alt: "Stacey Soans commercial lifestyle portrait in Toronto",
      caption: "Commercial Lifestyle — Natural Presence",
      catalogId: "CAR-CMM-05",
      category: "Commercial",
      year: "2026",
    },
    {
      src: pubPortrait5,
      alt: "Stacey Soans editorial studio modeling portrait",
      caption: "Editorial Studio Study — Composure & Form",
      catalogId: "CAR-ED-06",
      category: "Editorial",
      year: "2025",
    },
    {
      src: pubDigitalsFull,
      alt: "Stacey Soans official agency model digitals in Toronto",
      caption: "Official Model Digitals — Icon Model Management",
      catalogId: "CAR-DIG-07",
      category: "Fashion",
      year: "2026",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? careerItems
      : careerItems.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="website"
        keywords={meta.keywords}
        schema={careerSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Modeling Career", item: "/modeling-career/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Modeling Career" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Professional Timeline &amp; Portfolio
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Professional Modelling Career
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore Stacey Soans’ professional modelling career, spanning fashion, beauty, editorial, runway events and commercial projects in Toronto, Canada.
            </p>
          </div>

          {/* Factual Career Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
            <div className="lg:col-span-8 space-y-5 font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
              <div className="p-6 bg-card/60 border border-border/80 text-foreground/95">
                <p className="font-medium text-lg leading-relaxed">
                  Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
                </p>
              </div>

              <p>
                Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects.
              </p>

              <p>
                Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-secondary/30 border border-border/80">
              <span className="text-xs archive-sans uppercase tracking-widest text-gold font-medium block mb-3">
                Representation
              </span>
              <p className="font-serif text-sm text-foreground/90 leading-relaxed mb-4">
                Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
              </p>
              <div className="pt-4 border-t border-border/50 text-xs archive-sans space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground font-medium">Toronto, Canada</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span className="text-foreground font-medium">5'9" (175 cm)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialty:</span>
                  <span className="text-foreground font-medium">Editorial &amp; Runway</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Toolbar */}
          <div className="border-t border-b border-border/60 py-4 mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs archive-sans uppercase tracking-widest text-muted-foreground mr-2">
                Filter Category:
              </span>
              {["all", "fashion", "beauty", "editorial", "runway", "commercial"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider archive-sans transition-all ${
                    activeFilter === cat
                      ? "bg-gold text-black font-medium"
                      : "bg-secondary/40 text-muted-foreground hover:text-foreground border border-border/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs archive-sans text-muted-foreground">
              Showing {filteredItems.length} curated works
            </span>
          </div>

          {/* Uncropped Photograph Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredItems.map((item) => (
              <UncroppedPhoto
                key={item.catalogId}
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                catalogId={item.catalogId}
                category={item.category}
                year={item.year}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>

          {/* Bottom Navigation to Dedicated Categories */}
          <div className="border-t border-border/60 pt-12 mb-12">
            <span className="text-xs archive-sans uppercase tracking-[0.25em] text-gold font-medium block mb-4 text-center">
              Dedicated Portfolio Sections
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { label: "Fashion", path: "/fashion/" },
                { label: "Beauty", path: "/beauty/" },
                { label: "Editorial", path: "/editorial/" },
                { label: "Runway", path: "/runway/" },
                { label: "Commercial", path: "/commercial/" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="p-3 bg-card/60 border border-border/60 hover:border-gold/50 text-center text-xs archive-sans uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ModelingCareerPage;
