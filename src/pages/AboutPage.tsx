import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Building2, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

import aboutPortrait from "@/assets/stacey/pub-outdoor.jpg";
import digitalsPortrait from "@/assets/stacey/pub-digitals-full.jpg";

export const AboutPage = () => {
  const { openLightbox } = useLightbox();
  const meta = PAGES_METADATA.about;

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "description": meta.description,
      "url": `${SITE_CONFIG.siteUrl}/about-stacey-soans/`,
      "image": `${SITE_CONFIG.siteUrl}/og-image.jpg`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.location.city,
        "addressRegion": SITE_CONFIG.location.region,
        "addressCountry": SITE_CONFIG.location.country,
      },
      "knowsAbout": [
        "Fashion Modeling",
        "Beauty Campaigns",
        "Editorial Photography",
        "Runway Modeling",
        "Commercial Photography",
      ],
    },
  };

  const modelStats = [
    { label: "Base", value: "Toronto, Ontario, Canada" },
    { label: "Height", value: SITE_CONFIG.modelStats.height },
    { label: "Eyes", value: SITE_CONFIG.modelStats.eyes },
    { label: "Hair", value: SITE_CONFIG.modelStats.hair },
    { label: "Specialty", value: "Fashion, Beauty, Editorial, Runway, Commercial" },
    { label: "Experience", value: "Over 10 Years Professional Modeling" },
    { label: "Start", value: "Began Modelling at Age 12" },
    { label: "Representation", value: "Icon Model Management (Toronto)" },
  ];

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="profile"
        keywords={meta.keywords}
        schema={aboutSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Stacey Soans", item: "/about-stacey-soans/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "About Stacey Soans" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Model Biography &amp; Profile
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              About Stacey Soans
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Professional model based in Toronto, Canada with more than a decade of experience across high-fashion editorials, beauty campaigns, runway appearances, and commercial projects.
            </p>
          </div>

          {/* Main Biography Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            {/* Left: Biography Text */}
            <div className="lg:col-span-7 space-y-6 font-serif text-base sm:text-lg leading-[1.85] text-muted-foreground">
              <div className="p-6 bg-card/60 border border-border/80 text-foreground/95">
                <p className="font-medium text-lg leading-relaxed">
                  Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning fashion, beauty, editorial, runway and commercial modelling.
                </p>
              </div>

              <p>
                Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion, beauty campaigns, editorial publications, runway events and commercial projects.
              </p>

              <p>
                Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography, runway appearances and lifestyle projects. Throughout her career, she has cultivated an adaptable editorial range, recognized for architectural posture, clean silhouette lines, and authentic poise.
              </p>

              <div className="p-6 bg-secondary/30 border border-border/80 rounded-sm my-6">
                <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Agency Representation</span>
                </div>
                <p className="font-serif text-sm text-foreground/90 leading-relaxed">
                  Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/modeling-career/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
                >
                  <span>Explore Modeling Career</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs uppercase tracking-[0.2em] archive-sans text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
                >
                  <span>Inquire for Booking</span>
                </Link>
              </div>
            </div>

            {/* Right: Full Uncropped Portrait & Verified Stats */}
            <div className="lg:col-span-5 space-y-8">
              <UncroppedPhoto
                src={aboutPortrait}
                alt="Stacey Soans — Professional Model Biography Portrait in Toronto"
                caption="Official Model Biography Portrait"
                catalogId="BIO-TOR-01"
                year="2026"
                category="Biography"
                onOpenLightbox={openLightbox}
              />

              {/* Verified Model Stats Card */}
              <div className="p-6 bg-card/80 border border-border/80">
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                  <span className="archive-sans text-xs uppercase tracking-widest text-gold font-medium">
                    Verified Model Statistics
                  </span>
                  <span className="text-[10px] archive-sans px-2 py-0.5 bg-secondary text-muted-foreground border border-border/60">
                    Toronto, Canada
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs archive-sans">
                  {modelStats.map((st) => (
                    <div key={st.label} className="p-2.5 bg-secondary/30 border border-border/50">
                      <span className="text-muted-foreground block text-[10px] uppercase tracking-wider mb-0.5">
                        {st.label}
                      </span>
                      <span className="text-foreground font-serif text-xs font-medium">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Visual Showcase */}
          <div className="border-t border-border/60 pt-16 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Agency Digitals
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal">
                Natural Form &amp; Composure
              </h2>
              <p className="font-serif text-sm text-muted-foreground mt-2">
                Natural daylight casting portraits highlighting classic proportions and authentic facial symmetry.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <UncroppedPhoto
                src={digitalsPortrait}
                alt="Stacey Soans official model casting digitals portrait"
                caption="Official Model Digitals — Icon Model Management"
                catalogId="DIG-MOD-01"
                year="2026"
                category="Editorial"
                onOpenLightbox={openLightbox}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
