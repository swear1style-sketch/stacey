import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import pubPortrait2 from "@/assets/stacey/pub-portrait-2.jpg";
import pubDigitalsFull from "@/assets/stacey/pub-digitals-full.jpg";
import pubPortrait4 from "@/assets/stacey/pub-portrait-4.jpg";
import pubDigitalsSq from "@/assets/stacey/pub-digitals-sq.jpg";

export const CommercialPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.commercial;

  const commercialSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/commercial/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "knowsAbout": "Commercial Modeling",
    },
  };

  const commercialPhotos = [
    {
      src: pubPortrait2,
      alt: "Stacey Soans commercial beauty and lifestyle portrait",
      caption: "Commercial Beauty & Lifestyle Portrait",
      catalogId: "CMM-CP-01",
      category: "Commercial",
      year: "2026",
    },
    {
      src: pubDigitalsFull,
      alt: "Stacey Soans commercial casting digitals portrait",
      caption: "Commercial Casting Digitals — Agency Portrait",
      catalogId: "CMM-EX-02",
      category: "Commercial",
      year: "2026",
    },
    {
      src: pubPortrait4,
      alt: "Stacey Soans commercial lifestyle portrait in natural lighting",
      caption: "Lifestyle & Commercial Portrait — Natural Light",
      catalogId: "CMM-LS-03",
      category: "Commercial",
      year: "2025",
    },
    {
      src: pubDigitalsSq,
      alt: "Stacey Soans official model casting digitals — clean form",
      caption: "Commercial Casting — Clean Form & Presence",
      catalogId: "CMM-DIG-04",
      category: "Commercial",
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
        schema={commercialSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Commercial Modeling", item: "/commercial/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Commercial Modeling" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Portfolio Division
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Commercial Modeling
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Commercial photography, beauty campaigns, brand lifestyle projects, and studio portraiture in Toronto, Canada.
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
              Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
            </p>
          </div>

          {/* Commercial Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {commercialPhotos.map((photo) => (
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
              <Link to="/modeling-career/" className="text-gold hover:underline uppercase tracking-wider">
                Modeling Career →
              </Link>
              <Link to="/beauty/" className="text-gold hover:underline uppercase tracking-wider">
                Beauty Modeling →
              </Link>
            </div>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <span>Book for Commercial Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommercialPage;
