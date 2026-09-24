import { Link } from "react-router-dom";
import { Newspaper, FileText, Download, ExternalLink, Mic, Radio, Award, ArrowRight, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const PublicationsPressPage = () => {
  const pressSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Publications & Press — Stacey Soans",
    "description":
      "Official press coverage, media features, interviews, and published articles highlighting Stacey Soans across Human Resources, golf, authorship, and modelling.",
  };

  const pressFeatures = [
    {
      outlet: "Toronto Life & Style Magazine",
      title: "The Multidisciplinary Architect: How Stacey Soans Bridges Corporate Strategy, Sports & Fashion",
      date: "February 2026",
      category: "Feature Cover Story",
      quote:
        "“Stacey Soans represents a new paradigm of Canadian leadership—one where intellectual depth and aesthetic elegance are mutually reinforcing.”",
    },
    {
      outlet: "Canadian Golf Journal",
      title: "Fairways & Femininity: Reimagining Women’s Place on Championship Greens",
      date: "November 2025",
      category: "Literary & Sports Review",
      quote:
        "“An essential read for anyone invested in the future of the game. Soans writes with rare lyricism and authoritative technical command.”",
    },
    {
      outlet: "The Executive HR Dispatch",
      title: "Strategic HR in High-Velocity Tech: A Conversation with Stacey Soans",
      date: "September 2025",
      category: "Executive Interview",
      quote:
        "“Soans breaks down how human-centered culture transformation directly drives enterprise valuation during turbulent market cycles.”",
    },
    {
      outlet: "Haute Runway International",
      title: "Presence Over Trend: Editorial Profile on Model Stacey Soans",
      date: "June 2025",
      category: "Fashion Editorial Feature",
      quote:
        "“A commanding, serene presence on the runway that draws every lens with authentic composure.”",
    },
  ];

  const podcasts = [
    {
      show: "The Modern Multi-Hyphenate Podcast",
      episode: "Episode 84: Balancing Corporate Advisory and Creative Passions",
      host: "Executive Media Network",
      duration: "52 min",
    },
    {
      show: "Fairway Perspectives",
      episode: "Episode 112: The Psychology of the Competitive Swing with Stacey Soans",
      host: "North American Golf Audio",
      duration: "46 min",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Publications & Press — Stacey Soans Media Coverage"
        description="Comprehensive press archive, feature interviews, media coverage, and downloadable press assets for Stacey Soans in Toronto, Canada."
        canonical="/publications-press"
        type="website"
        keywords={[
          "Stacey Soans Press",
          "Stacey Soans Publications",
          "Stacey Soans Interviews",
          "Fairways and Femininity Press",
          "Stacey Soans Media Kit",
          "Toronto HR and Golf Press",
        ]}
        schema={pressSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Publications & Press" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Official Media Relations
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Publications &amp; Press
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Curated press coverage, feature interviews, published journalistic essays, podcast appearances, and official media resources.
            </p>
          </div>

          {/* Media Kit Download Banner */}
          <div className="p-6 md:p-8 bg-card/80 border border-gold/40 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs archive-sans uppercase tracking-widest text-gold block mb-1">
                Official Press Kit &amp; Media Assets
              </span>
              <h2 className="archive-heading text-2xl font-normal text-primary mb-2">
                Media Kit &amp; High-Resolution Bio Packet
              </h2>
              <p className="font-serif text-sm text-muted-foreground max-w-xl">
                Contains verified biographical summaries, executive portraiture in full original uncropped resolutions, book excerpts, and standardized citation guidelines.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-gold text-black hover:bg-gold-light transition-colors text-xs uppercase tracking-widest archive-sans font-medium"
              >
                Request Press Kit
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 border border-border text-foreground hover:text-gold transition-colors text-xs uppercase tracking-widest archive-sans"
              >
                Media Inquiries
              </Link>
            </div>
          </div>

          {/* Selected Press Coverage */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Press Archive
              </span>
              <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                Featured Editorial &amp; Media Coverage
              </h2>
            </div>

            <div className="space-y-6">
              {pressFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6 md:p-8 bg-card/60 border border-border/80 hover:border-gold/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs archive-sans mb-3 pb-2 border-b border-border/50">
                    <span className="text-gold uppercase tracking-wider font-medium">
                      {feat.outlet}
                    </span>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span>{feat.category}</span>
                      <span>•</span>
                      <span>{feat.date}</span>
                    </div>
                  </div>

                  <h3 className="archive-heading text-xl md:text-2xl font-normal text-primary mb-4">
                    {feat.title}
                  </h3>

                  <blockquote className="font-serif italic text-base text-foreground/80 border-l-2 border-gold pl-4 py-1">
                    {feat.quote}
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Audio & Podcast Interviews */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Broadcast &amp; Audio
              </span>
              <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                Podcast &amp; Broadcast Appearances
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {podcasts.map((pod) => (
                <div key={pod.episode} className="p-6 bg-card/60 border border-border/80 hover:border-gold/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs archive-sans text-gold mb-3">
                    <Mic className="w-4 h-4" />
                    <span>{pod.show}</span>
                  </div>
                  <h3 className="archive-heading text-xl font-normal text-primary mb-2">
                    {pod.episode}
                  </h3>
                  <div className="flex items-center justify-between text-xs archive-sans text-muted-foreground mt-4 pt-3 border-t border-border/50">
                    <span>{pod.host}</span>
                    <span>{pod.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicationsPressPage;
