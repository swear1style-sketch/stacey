import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import pubPortrait3 from "@/assets/stacey/pub-portrait-3.jpg";
import pubPortrait1 from "@/assets/stacey/pub-portrait-1.jpg";
import pubPortrait2 from "@/assets/stacey/pub-portrait-2.jpg";
import pubOutdoor from "@/assets/stacey/pub-outdoor.jpg";

export const EditorialPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.editorial;

  const editorialSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/editorial/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "knowsAbout": "Editorial Modeling",
    },
  };

  const editorialPhotos = [
    {
      src: pubPortrait3,
      alt: "Stacey Soans editorial modeling portrait in Toronto",
      caption: "Editorial Portrait — Strength & Form",
      catalogId: "ED-TOR-01",
      category: "Editorial",
      year: "2026",
    },
    {
      src: pubPortrait1,
      alt: "Stacey Soans high-fashion editorial studio portrait",
      caption: "High-Fashion Editorial — Studio Light",
      catalogId: "ED-TOR-02",
      category: "Editorial",
      year: "2025",
    },
    {
      src: pubPortrait2,
      alt: "Stacey Soans editorial fashion portrait with natural lighting",
      caption: "Editorial Fashion — Natural Light & Composure",
      catalogId: "ED-TOR-03",
      category: "Editorial",
      year: "2025",
    },
    {
      src: pubOutdoor,
      alt: "Stacey Soans outdoor editorial modeling portrait in Toronto",
      caption: "Outdoor Editorial — Candid Form & Motion",
      catalogId: "ED-TOR-04",
      category: "Editorial",
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
        schema={editorialSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Editorial Modeling", item: "/editorial/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Editorial Modeling" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Portfolio Division
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Editorial Modeling
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Editorial photography, fashion spreads, and fine art studio portraiture in Toronto, Canada.
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
              Stacey Soans' modelling credits include editorial and runway work as well as appearances associated with Toronto fashion events and publications.
            </p>
          </div>

          {/* Editorial Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {editorialPhotos.map((photo) => (
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
              <Link to="/publications-and-press/" className="text-gold hover:underline uppercase tracking-wider">
                Publications &amp; Press →
              </Link>
              <Link to="/fashion/" className="text-gold hover:underline uppercase tracking-wider">
                Fashion Modeling →
              </Link>
            </div>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <span>Book for Editorial Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditorialPage;
