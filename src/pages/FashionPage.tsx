import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import pubOutdoor from "@/assets/stacey/pub-outdoor.jpg";
import pubPortrait1 from "@/assets/stacey/pub-portrait-1.jpg";
import pubPortrait2 from "@/assets/stacey/pub-portrait-2.jpg";
import pubPortrait5 from "@/assets/stacey/pub-portrait-5.jpg";

export const FashionPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.fashion;

  const fashionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/fashion/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "knowsAbout": "Fashion Modeling",
    },
  };

  const fashionPhotos = [
    {
      src: pubOutdoor,
      alt: "Stacey Soans outdoor editorial fashion modeling portrait",
      caption: "Outdoor Editorial — Natural Form & Light",
      catalogId: "FSH-ED-01",
      category: "Fashion",
      year: "2025",
    },
    {
      src: pubPortrait1,
      alt: "Stacey Soans high-fashion studio portrait",
      caption: "High-Fashion Studio Portrait",
      catalogId: "FSH-ST-02",
      category: "Fashion",
      year: "2025",
    },
    {
      src: pubPortrait2,
      alt: "Stacey Soans fashion portrait with natural lighting",
      caption: "Fashion Portrait — Natural Light & Composure",
      catalogId: "FSH-MV-03",
      category: "Fashion",
      year: "2025",
    },
    {
      src: pubPortrait5,
      alt: "Stacey Soans editorial fashion modeling portrait in Toronto",
      caption: "Editorial Fashion — Toronto Studio",
      catalogId: "FSH-MC-04",
      category: "Fashion",
      year: "2026",
    },
  ];

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="website"
        keywords={meta.keywords}
        schema={fashionSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Fashion Modeling", item: "/fashion/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Fashion Modeling" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Portfolio Division
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Fashion Modeling
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              High-fashion editorials, studio lookbooks, and contemporary apparel portraiture in Toronto, Canada.
            </p>
          </div>

          {/* Factual Narrative */}
          <div className="max-w-3xl mb-14 space-y-4 font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
            <div className="p-6 bg-card/60 border border-border/80 text-foreground/95">
              <p className="font-medium text-lg leading-relaxed">
                Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects.
              </p>
            </div>
            <p>
              Her modelling portfolio includes work within Toronto's fashion and beauty industries, including beauty campaigns and editorial projects.
            </p>
          </div>

          {/* Fashion Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {fashionPhotos.map((photo) => (
              <UncroppedPhoto
                key={photo.catalogId}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                catalogId={photo.catalogId}
                category={photo.category}
                year={photo.year}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>

          {/* Related Categories Navigation */}
          <div className="border-t border-border/60 pt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs archive-sans">
              <span className="text-muted-foreground uppercase tracking-wider">Related Disciplines:</span>
              <Link to="/editorial/" className="text-gold hover:underline uppercase tracking-wider">
                Editorial Modeling →
              </Link>
              <Link to="/runway/" className="text-gold hover:underline uppercase tracking-wider">
                Runway Modeling →
              </Link>
            </div>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <span>Book for Fashion Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FashionPage;
