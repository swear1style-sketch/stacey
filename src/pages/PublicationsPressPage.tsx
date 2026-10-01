import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Camera, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import stacy1 from "@/assets/stacey/stacy-1.jpg";
import heroStacey from "@/assets/stacey/hero-stacey.jpg";
import staceyCampaign1 from "@/assets/stacey/stacey-campaign-1.jpg";

export const PublicationsPressPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.publications;

  const pressSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/publications-and-press/`,
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

  const archiveEntries = [
    {
      src: heroStacey,
      title: "Studio Monochrome Portraiture & Editorial Study",
      category: "Editorial Photography",
      year: "2026",
      catalogId: "PRS-ED-01",
      alt: "Stacey Soans studio monochrome modeling portrait in Toronto",
      caption: "Studio Monochrome Portraiture — High-Neck Silhouette",
      details: "High-resolution studio portraiture documenting form, posture, and monochrome lighting.",
    },
    {
      src: stacy1,
      title: "High Fashion Editorial Portraiture",
      category: "Fashion Publication",
      year: "2025",
      catalogId: "PRS-FSH-02",
      alt: "Stacey Soans in high-fashion editorial portrait photography",
      caption: "High Fashion Editorial Portraiture",
      details: "Editorial spread featuring classic poise, tailoring, and contemporary fashion aesthetics.",
    },
    {
      src: staceyCampaign1,
      title: "Beauty & Complexion Campaign Photography",
      category: "Commercial & Beauty",
      year: "2026",
      catalogId: "PRS-BTY-03",
      alt: "Stacey Soans beauty modeling portfolio closeup portrait",
      caption: "Beauty Campaign Closeup Study",
      details: "Cosmetic closeup photography highlighting natural skin tones, texture, and refined beauty standards.",
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
        schema={pressSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Publications & Press", item: "/publications-and-press/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Publications & Press" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Editorial Archive &amp; Press Documentation
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Publications &amp; Press
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Editorial documentation, publication photography, and verified media coverage connected to Stacey Soans’ professional modelling career.
            </p>
          </div>

          {/* Factual Narrative */}
          <div className="max-w-3xl mb-16 space-y-4 font-serif text-base sm:text-lg text-muted-foreground leading-relaxed">
            <div className="p-6 bg-card/60 border border-border/80 text-foreground/95">
              <p className="font-medium text-lg leading-relaxed">
                Stacey Soans of Toronto, Canada has been featured across professional publishing, editorial publications and other forms of professional media.
              </p>
            </div>
            <p>
              The modelling archive includes selected professional fashion, beauty, editorial, runway and commercial work.
            </p>
            <p>
              Stacey Soans' modelling credits include editorial and runway work as well as appearances associated with Toronto fashion events and publications.
            </p>
          </div>

          {/* Clean Editorial Archive Cards */}
          <div className="space-y-12 mb-20">
            <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold pb-4 border-b border-border/60">
              <Newspaper className="w-4 h-4" />
              <span>Documented Editorial Media Entries</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {archiveEntries.map((entry) => (
                <div key={entry.catalogId} className="space-y-4">
                  <UncroppedPhoto
                    src={entry.src}
                    alt={entry.alt}
                    caption={entry.caption}
                    catalogId={entry.catalogId}
                    category={entry.category}
                    year={entry.year}
                    onOpenLightbox={openLightbox}
                  />
                  <div className="p-4 bg-secondary/30 border border-border/60 space-y-2">
                    <div className="flex items-center justify-between text-[11px] archive-sans text-muted-foreground">
                      <span className="uppercase text-gold font-medium">{entry.category}</span>
                      <span>{entry.year}</span>
                    </div>
                    <h2 className="font-serif text-base text-foreground font-medium leading-snug">
                      {entry.title}
                    </h2>
                    <p className="font-serif text-xs text-muted-foreground leading-relaxed">
                      {entry.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Press Inquiries Callout */}
          <div className="p-8 bg-card/60 border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs archive-sans uppercase tracking-widest text-gold font-medium block mb-2">
                Press &amp; Media Inquiries
              </span>
              <h2 className="font-serif text-2xl text-primary font-normal mb-2">
                Media &amp; Publication Contact
              </h2>
              <p className="font-serif text-sm text-muted-foreground max-w-xl">
                Media, publishing, professional collaboration and business inquiries can be directed through the appropriate contact information provided on this website.
              </p>
            </div>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-colors flex-shrink-0"
            >
              <span>Submit Media Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPressPage;
