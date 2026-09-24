import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Camera, Award, CheckCircle2, ArrowRight, ShieldCheck, Eye, Layers } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import PillarsGrid from "@/components/PillarsGrid";

// Import Stacey's authentic modeling and editorial assets
import staceyDigitals from "@/assets/stacey/stacey-digitals.jpg";
import stacy1 from "@/assets/stacey/stacy-1.jpg";
import staceyEditorial1 from "@/assets/stacey/stacey-editorial-1.jpg";
import staceyCampaign1 from "@/assets/stacey/stacey-campaign-1.jpg";
import shoppersBeauty1 from "@/assets/stacey/shoppers-beauty-1.jpg";
import shoppersBeauty2 from "@/assets/stacey/shoppers-beauty-2.jpg";
import editorialShot3 from "@/assets/stacey/editorial-shot-3.jpg";
import img3081 from "@/assets/stacey/img-3081.jpg";
import img5982 from "@/assets/stacey/img-5982.jpg";
import aboutStacey from "@/assets/stacey/about-stacey.jpg";

export const ModellingPage = () => {
  const { openLightbox } = useLightbox();
  const [activeFilter, setActiveFilter] = useState("all");

  const modelSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Stacey Soans",
      "jobTitle": "Professional Fashion Model",
      "worksFor": {
        "@type": "Organization",
        "name": "Icon Model Management",
        "address": "Toronto, Ontario, Canada",
      },
      "knowsAbout": [
        "Editorial Fashion",
        "Shoppers Beauty National Campaign",
        "Commercial & Beauty Campaigns",
        "Campaign Brand Ambassadorship",
      ],
      "gender": "Female",
      "workLocation": "Toronto, Canada & International",
    },
  };

  const modelStats = [
    { label: "Agency", value: "Icon Model Management (2019–Present)" },
    { label: "Prior Agency", value: "Sutherland Models (Toronto)" },
    { label: "Discovered", value: "Age 12 (Toronto, Canada)" },
    { label: "Key Campaign", value: "Shoppers Beauty National Campaign" },
    { label: "Height", value: "5'9\" (175 cm)" },
    { label: "Eyes", value: "Dark Brown" },
    { label: "Hair", value: "Dark Brown / Black" },
    { label: "Specialty", value: "Editorial, Beauty & Commercial" },
  ];

  const galleryItems = [
    {
      src: staceyDigitals,
      alt: "Stacey Soans - Official Model Digitals & Agency Portrait",
      caption: "Official Model Digitals — Icon Model Management",
      catalogId: "MOD-DIG-01",
      category: "Editorial",
      year: "2026",
    },
    {
      src: stacy1,
      alt: "Stacey Soans - High Fashion Editorial Portrait",
      caption: "High Fashion Editorial Portraiture",
      catalogId: "MOD-ED-02",
      category: "Editorial",
      year: "2025",
    },
    {
      src: staceyCampaign1,
      alt: "Stacey Soans - Beauty & Complexion Campaign",
      caption: "Beauty Campaign Closeup Study",
      catalogId: "MOD-CM-03",
      category: "Commercial",
      year: "2026",
    },
    {
      src: shoppersBeauty1,
      alt: "Stacey Soans - Shoppers Beauty National Campaign",
      caption: "Shoppers Beauty — Diverse Skin Tones National Campaign",
      catalogId: "MOD-CM-04",
      category: "Commercial",
      year: "2025",
    },
    {
      src: staceyEditorial1,
      alt: "Stacey Soans - Rise Grind & Glow Campaign",
      caption: "Rise, Grind & Glow! — Editorial Beauty Campaign",
      catalogId: "MOD-ED-05",
      category: "Editorial",
      year: "2025",
    },
    {
      src: shoppersBeauty2,
      alt: "Stacey Soans - Shoppers Beauty Campaign Feature",
      caption: "Shoppers Beauty Campaign Editorial Feature",
      catalogId: "MOD-CM-06",
      category: "Commercial",
      year: "2025",
    },
    {
      src: editorialShot3,
      alt: "Stacey Soans - High Fashion Runway & Movement",
      caption: "Runway & Dynamic Movement Study",
      catalogId: "MOD-RW-07",
      category: "Runway",
      year: "2025",
    },
    {
      src: img3081,
      alt: "Stacey Soans - Studio Editorial Fashion",
      caption: "Studio Fashion Study — Natural Form",
      catalogId: "MOD-FA-08",
      category: "Fine Art",
      year: "2025",
    },
    {
      src: img5982,
      alt: "Stacey Soans - Contemporary Style Portrait",
      caption: "Contemporary Style & Silhouette",
      catalogId: "MOD-ED-09",
      category: "Editorial",
      year: "2025",
    },
    {
      src: aboutStacey,
      alt: "Stacey Soans - Executive Presence & Portraiture",
      caption: "Executive Presence & Architectural Portrait",
      catalogId: "MOD-ED-10",
      category: "Editorial",
      year: "2026",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <Layout>
      <SEO
        title="Professional Modelling Portfolio & Representation — Stacey Soans"
        description="Official professional modelling portfolio of Stacey Soans. High fashion editorial, runway, luxury commercial campaigns, model statistics, and booking representation in Toronto, Canada."
        canonical="/modelling"
        type="profile"
        keywords={[
          "Stacey Soans Model",
          "Stacey Soans Modelling Toronto",
          "Professional Fashion Model Stacey Soans",
          "High Fashion Runway Toronto",
          "Luxury Campaign Model Stacey Soans",
          "Stacey Soans Portfolio",
        ]}
        schema={modelSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Professional Modelling" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Pillar IV • Visual Arts &amp; Fashion
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Professional Modelling
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              High-fashion editorial campaigns, international runway appearances, luxury commercial representation, and full uncropped lookbook archive.
            </p>
          </div>

          {/* Overview & Model Stats Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-7 font-serif text-base md:text-lg text-foreground/85 leading-relaxed space-y-6">
              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3">
                Career Overview &amp; Representation
              </h2>

              <p>
                <strong className="text-primary font-normal">Stacey Soans</strong> has been an enduring presence in Canadian fashion for over a decade. Scouted at age 12 in a Toronto shopping mall, she began working early across commercial campaigns, runway presentations, and music video appearances, developing an innate command of physical posture, lighting geometry, and personal branding.
              </p>

              <p>
                Earlier in her career represented by Sutherland Models in Toronto, Stacey signed with premier Toronto agency <strong className="text-primary font-normal">Icon Model Management</strong> in 2019. Her work bridges high-fashion editorial aesthetics with national commercial presence, notably starring in the nationwide <strong className="text-primary font-normal">Shoppers Beauty</strong> campaign championing diverse skin tones and complexion products, as well as the dynamic &ldquo;Rise, Grind &amp; Glow!&rdquo; beauty feature.
              </p>

              <p>
                Her athletic background as a competitive golfer gives her extraordinary physical composure and endurance on set, while her executive career in private equity and human resources lends her imagery an authentic, commanding gravitas that resonates with luxury brand directors.
              </p>

              <div className="p-5 bg-secondary/30 border border-border/80 rounded-sm">
                <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Uncropped Photographic Standard</span>
                </div>
                <p className="text-xs font-serif text-muted-foreground leading-relaxed">
                  As mandated by archival preservation standards, all photographs in this portfolio are presented in their 100% complete original proportions without destructive cropping, allowing directors, stylists, and casting agents to inspect full framing and authentic silhouette lines.
                </p>
              </div>
            </div>

            {/* Model Statistics Panel */}
            <div className="lg:col-span-5 p-6 bg-card/80 border border-border/80">
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <span className="archive-sans text-xs uppercase tracking-widest text-gold font-medium">
                  Official Model Statistics
                </span>
                <span className="text-[10px] archive-sans px-2 py-0.5 bg-secondary text-muted-foreground border border-border/60">
                  Verified Stats
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs archive-sans mb-6">
                {modelStats.map((st) => (
                  <div key={st.label} className="p-2.5 bg-secondary/30 border border-border/50">
                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">
                      {st.label}
                    </span>
                    <span className="text-foreground font-medium text-sm font-serif">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-3 border-t border-border/60">
                <div className="text-xs archive-sans">
                  <span className="text-muted-foreground block text-[11px]">Primary Base:</span>
                  <span className="text-foreground font-medium">Toronto, Ontario, Canada (Available Internationally)</span>
                </div>
                <div className="text-xs archive-sans">
                  <span className="text-muted-foreground block text-[11px]">Disciplines:</span>
                  <span className="text-foreground font-medium">Editorial, Runway, Luxury Commercial, Beauty</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/60">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium hover:bg-gold-light transition-colors"
                >
                  <span>Request Booking &amp; Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="border-t border-b border-border/60 py-4 mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs archive-sans uppercase tracking-widest text-muted-foreground mr-2">
                Filter Category:
              </span>
              {["all", "editorial", "runway", "commercial", "fine art"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-3 py-1 text-xs uppercase tracking-wider archive-sans transition-all ${
                    activeFilter === tab
                      ? "bg-gold text-black font-medium"
                      : "bg-secondary/40 text-muted-foreground hover:text-foreground border border-border/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="text-xs archive-sans text-muted-foreground">
              Showing {filteredItems.length} Photographs • 100% Uncropped Scope
            </span>
          </div>

          {/* UN増CROPPED LOOKBOOK GALLERY (Requirement 2) */}
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
                maxHeightClass="max-h-[560px]"
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>
        </div>
      </div>

      <PillarsGrid currentPillarId="modelling" />
    </Layout>
  );
};

export default ModellingPage;
