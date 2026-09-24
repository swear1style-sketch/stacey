import { useState } from "react";
import { Link } from "react-router-dom";
import { Archive, Search, Filter, Play, CheckCircle2, Maximize2, ShieldCheck, Download, Film } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";

// Authentic Stacey Soans Assets
import staceyDigitals from "@/assets/stacey/stacey-digitals.jpg";
import aboutStacey from "@/assets/stacey/about-stacey.jpg";
import staceyInterview1 from "@/assets/stacey/stacey-interview-1.jpg";
import golfAuthorship from "@/assets/stacey/golf-authorship.jpg";
import shoppersBeauty1 from "@/assets/stacey/shoppers-beauty-1.jpg";
import shoppersBeauty2 from "@/assets/stacey/shoppers-beauty-2.jpg";
import staceyEditorial1 from "@/assets/stacey/stacey-editorial-1.jpg";
import staceyCampaign1 from "@/assets/stacey/stacey-campaign-1.jpg";
import editorialShot3 from "@/assets/stacey/editorial-shot-3.jpg";
import img3081 from "@/assets/stacey/img-3081.jpg";
import img5982 from "@/assets/stacey/img-5982.jpg";
import stacy1 from "@/assets/stacey/stacy-1.jpg";
import videoBg from "@/assets/video-reel-bg.jpg";

export const MediaArchivePage = () => {
  const { openLightbox } = useLightbox();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const archiveSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Digital Media Archive — Stacey Soans",
    "description":
      "Official digital encyclopedia media archive and accession catalog preserving full uncropped photographic, video, and editorial assets for Stacey Soans.",
  };

  const archiveItems = [
    {
      src: staceyDigitals,
      alt: "Stacey Soans - Official Model Digitals Portrait",
      caption: "Official Model Digitals — Icon Model Management",
      catalogId: "ARC-2026-001",
      category: "Editorial",
      year: "2026",
      details: "Official casting digitals in natural studio lighting, Toronto.",
    },
    {
      src: aboutStacey,
      alt: "Stacey Soans - Official Archival Executive Portrait",
      caption: "Biographical Archive Primary Portrait",
      catalogId: "ARC-2026-002",
      category: "Corporate",
      year: "2026",
      details: "Executive HRBP advisory & leadership portrait in Toronto.",
    },
    {
      src: staceyInterview1,
      alt: "Stacey Soans - Professional Golf Puma Editorial",
      caption: "Championship Course Golf Editorial & Interview",
      catalogId: "ARC-2026-003",
      category: "Athletics",
      year: "2025",
      details: "On-course athletic feature in Puma golf apparel.",
    },
    {
      src: golfAuthorship,
      alt: "Stacey Soans - Author Portrait Fairways and Femininity",
      caption: "Author Portrait — Fairways & Femininity",
      catalogId: "ARC-2026-004",
      category: "Authorship",
      year: "2025",
      details: "Official author press portrait for her debut published book.",
    },
    {
      src: shoppersBeauty1,
      alt: "Stacey Soans - Shoppers Beauty National Commercial Campaign",
      caption: "Shoppers Beauty National Campaign (Diverse Complexions)",
      catalogId: "ARC-2026-005",
      category: "Commercial",
      year: "2025",
      details: "National Canadian commercial campaign celebrating beauty diversity.",
    },
    {
      src: staceyEditorial1,
      alt: "Stacey Soans - Rise Grind & Glow Beauty Campaign",
      caption: "Rise, Grind & Glow! — Editorial Beauty Campaign",
      catalogId: "ARC-2026-006",
      category: "Editorial",
      year: "2025",
      details: "Vibrant high-resolution commercial and editorial beauty spread.",
    },
    {
      src: staceyCampaign1,
      alt: "Stacey Soans - Beauty & Cosmetic Closeup",
      caption: "Beauty Campaign Closeup Study",
      catalogId: "ARC-2026-007",
      category: "Commercial",
      year: "2026",
      details: "High-resolution studio cosmetic & skincare commercial study.",
    },
    {
      src: shoppersBeauty2,
      alt: "Stacey Soans - Shoppers Beauty Editorial Feature",
      caption: "Shoppers Beauty Editorial Campaign Feature",
      catalogId: "ARC-2026-008",
      category: "Commercial",
      year: "2025",
      details: "Complexion and skincare advertising series across Canada.",
    },
    {
      src: editorialShot3,
      alt: "Stacey Soans - Runway High Fashion & Movement",
      caption: "Runway Form & Architectural Movement",
      catalogId: "ARC-2026-009",
      category: "Runway",
      year: "2025",
      details: "High-fashion couture drapery and movement study.",
    },
    {
      src: img3081,
      alt: "Stacey Soans - Studio Editorial Fashion Study",
      caption: "Studio Fashion Study — Natural Form",
      catalogId: "ARC-2026-010",
      category: "Fine Art",
      year: "2025",
      details: "Minimalist natural light and shadow study in studio.",
    },
    {
      src: img5982,
      alt: "Stacey Soans - Contemporary Style Portrait",
      caption: "Contemporary Style & Silhouette",
      catalogId: "ARC-2026-011",
      category: "Editorial",
      year: "2025",
      details: "Clean-lined fashion portraiture with architectural lighting.",
    },
    {
      src: stacy1,
      alt: "Stacey Soans - High Fashion Editorial Portrait",
      caption: "High Fashion Portrait Series",
      catalogId: "ARC-2026-012",
      category: "Editorial",
      year: "2025",
      details: "Editorial portraiture showcasing classic composure and poise.",
    },
  ];

  const filteredItems = archiveItems.filter((item) => {
    const matchesCategory =
      activeFilter === "all" || item.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.catalogId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Digital Media Archive & Accession Catalog — Stacey Soans"
        description="Comprehensive media archive and accession catalog preserving full uncropped photographs, video reels, and editorial documentation for Stacey Soans in Toronto, Canada."
        canonical="/media-archive"
        type="website"
        keywords={[
          "Stacey Soans Media Archive",
          "Digital Archive Stacey Soans",
          "Stacey Soans Photos Uncropped",
          "Accession Catalog Stacey Soans",
          "Stacey Soans Video Reel",
        ]}
        schema={archiveSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Media Archive" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Authorized Digital Repository
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Digital Media Archive
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Official catalog of photographic accession records, motion video footage, and editorial documentation preserved in complete uncropped scope.
            </p>
          </div>

          {/* Archival Preservation Statement */}
          <div className="p-5 bg-card/70 border border-border/80 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
              <div className="text-xs archive-sans">
                <span className="text-foreground font-medium block">
                  Preservation Standard: 100% Original Proportions
                </span>
                <span className="text-muted-foreground">
                  Zero automated cropping. Full aspect ratio integrity maintained across all catalog entries.
                </span>
              </div>
            </div>
            <div className="text-xs archive-sans text-gold">
              Total Catalog Records: {archiveItems.length + 1}
            </div>
          </div>

          {/* Video Reel Archive Feature */}
          <div className="mb-16 p-6 md:p-8 bg-card/60 border border-border/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs archive-sans uppercase tracking-widest text-gold block mb-1">
                  Accession Item ARC-VID-01
                </span>
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary">
                  Motion Archive &amp; Broadcast Reel
                </h2>
              </div>
              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium hover:bg-gold-light transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Launch Video Player</span>
              </button>
            </div>

            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative aspect-video max-h-[460px] w-full bg-black/60 border border-border/80 overflow-hidden cursor-pointer group flex items-center justify-center"
            >
              <img
                src={videoBg}
                alt="Stacey Soans - Video Reel Still"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-0.5" />
                </div>
                <span className="text-xs archive-sans uppercase tracking-[0.25em] text-white font-medium">
                  Watch Compiled Archive Reel
                </span>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="border-t border-b border-border/60 py-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs archive-sans uppercase tracking-widest text-muted-foreground mr-1">
                Filter:
              </span>
              {["all", "editorial", "runway", "commercial", "athletics", "authorship", "corporate", "fine art"].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 text-xs uppercase tracking-wider archive-sans transition-all ${
                      activeFilter === cat
                        ? "bg-gold text-black font-medium"
                        : "bg-secondary/40 text-muted-foreground hover:text-foreground border border-border/60"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search archive catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border/80 pl-9 pr-3 py-1.5 text-xs archive-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          {/* Full Uncropped Photograph Grid */}
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
                maxHeightClass="max-h-[540px]"
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-card/40 border border-border/60">
              <p className="font-serif text-muted-foreground text-lg mb-2">
                No catalog records match your query.
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="text-xs archive-sans uppercase tracking-widest text-gold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-card border border-border/80 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60 text-xs archive-sans">
              <span className="text-gold font-medium uppercase tracking-widest">
                Stacey Soans — Archive Video Reel Accession
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-muted-foreground hover:text-white px-2 py-1"
              >
                ✕ Close
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center p-6 text-center">
              <div>
                <Film className="w-12 h-12 text-gold mx-auto mb-3 opacity-80" />
                <h3 className="font-serif text-xl text-primary mb-2">
                  Stacey Soans Motion Archive Reel
                </h3>
                <p className="font-serif text-sm text-muted-foreground max-w-md mx-auto">
                  High-definition motion reel featuring runway presentations, golf technique dispatches, and keynote symposium panels. Contact archive management for broadcast licensing.
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium"
                  >
                    Request Broadcast License File
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MediaArchivePage;
