import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import pubDigitalsFull from "@/assets/stacey/pub-digitals-full.jpg";
import pubDigitalsSq from "@/assets/stacey/pub-digitals-sq.jpg";

export const RepresentationPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.representation;

  const representationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/representation/`,
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

  const modelStats = [
    { label: "Location", value: "Toronto, Ontario, Canada" },
    { label: "Height", value: SITE_CONFIG.modelStats.height },
    { label: "Eyes", value: SITE_CONFIG.modelStats.eyes },
    { label: "Hair", value: SITE_CONFIG.modelStats.hair },
    { label: "Disciplines", value: SITE_CONFIG.modelStats.disciplines },
    { label: "Experience", value: "Over 10 Years Professional Modeling" },
  ];

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="website"
        keywords={meta.keywords}
        schema={representationSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Model Representation", item: "/representation/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Model Representation" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Agency Affiliation &amp; Castings
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Stacey Soans — Model Representation
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Official agency representation history, verified casting digitals, and booking information for Stacey Soans in Toronto, Canada.
            </p>
          </div>

          {/* Representation Core Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 bg-card/70 border border-border/80">
                <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>Agency Statement</span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-foreground font-normal leading-relaxed">
                  Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
                </p>
              </div>

              <div className="space-y-4 font-serif text-base text-muted-foreground leading-relaxed">
                <p>
                  Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
                </p>
                <p>
                  Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects.
                </p>
              </div>

              {/* Verified Casting Stats Grid */}
              <div className="p-6 bg-secondary/30 border border-border/80">
                <h2 className="text-xs archive-sans uppercase tracking-widest text-gold font-medium mb-4">
                  Casting &amp; Physical Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs archive-sans">
                  {modelStats.map((st) => (
                    <div key={st.label} className="p-3 bg-card/60 border border-border/50">
                      <span className="text-muted-foreground text-[10px] uppercase block mb-1">
                        {st.label}
                      </span>
                      <span className="font-serif text-xs font-medium text-foreground">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
                >
                  <span>Book Stacey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs uppercase tracking-[0.2em] archive-sans text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Agency Inquiry</span>
                </a>
              </div>
            </div>

            {/* Model Digitals Showcase */}
            <div className="lg:col-span-5 space-y-6">
              <UncroppedPhoto
                src={pubDigitalsFull}
                alt="Stacey Soans official agency model digitals in Toronto"
                caption="Official Model Digitals — Icon Model Management"
                catalogId="REP-DIG-01"
                year="2026"
                category="Digitals"
                onOpenLightbox={openLightbox}
              />
              <UncroppedPhoto
                src={pubDigitalsSq}
                alt="Stacey Soans casting digitals — agency portrait"
                caption="Agency Casting Portrait — Clean Form"
                catalogId="REP-MC-02"
                year="2026"
                category="Digitals"
                onOpenLightbox={openLightbox}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RepresentationPage;
