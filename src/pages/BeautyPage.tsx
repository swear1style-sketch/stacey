import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import pubPortrait2 from "@/assets/stacey/pub-portrait-2.jpg";
import pubDigitalsFull from "@/assets/stacey/pub-digitals-full.jpg";
import pubPortrait5 from "@/assets/stacey/pub-portrait-5.jpg";
import pubPortrait4 from "@/assets/stacey/pub-portrait-4.jpg";

export const BeautyPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.beauty;

  const beautySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/beauty/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "knowsAbout": "Beauty Modeling",
    },
  };

  const beautyPhotos = [
    {
      src: pubPortrait2,
      alt: "Stacey Soans beauty modeling portrait — natural light",
      caption: "Beauty Portrait — Natural Light & Complexion",
      catalogId: "BTY-CP-01",
      category: "Beauty",
      year: "2026",
    },
    {
      src: pubDigitalsFull,
      alt: "Stacey Soans official casting digitals — beauty and complexion",
      caption: "Casting Digitals — Clean Complexion Study",
      catalogId: "BTY-DIG-02",
      category: "Beauty",
      year: "2026",
    },
    {
      src: pubPortrait5,
      alt: "Stacey Soans studio beauty portrait in Toronto",
      caption: "Studio Beauty Study — Composure & Form",
      catalogId: "BTY-MC-03",
      category: "Beauty",
      year: "2026",
    },
    {
      src: pubPortrait4,
      alt: "Stacey Soans commercial beauty and skincare portrait",
      caption: "Commercial Beauty & Skincare Portrait",
      catalogId: "BTY-CM-04",
      category: "Beauty",
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
        schema={beautySchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Beauty Modeling", item: "/beauty/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Beauty Modeling" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Portfolio Division
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Beauty Modeling
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Skincare campaigns, cosmetic closeups, and high-resolution beauty portraiture in Toronto, Canada.
            </p>
          </div>

          {/* Factual Narrative */}
          <div className="max-w-3xl mb-14 space-y-4 font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
            <div className="p-6 bg-card/60 border border-border/80 text-foreground/95">
              <p className="font-medium text-lg leading-relaxed">
                Her modelling portfolio includes work within Toronto's fashion and beauty industries, including beauty campaigns and editorial projects.
              </p>
            </div>
            <p>
              Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects.
            </p>
          </div>

          {/* Beauty Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
            {beautyPhotos.map((photo) => (
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
              <Link to="/commercial/" className="text-gold hover:underline uppercase tracking-wider">
                Commercial Modeling →
              </Link>
            </div>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
            >
              <span>Book for Beauty Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BeautyPage;
