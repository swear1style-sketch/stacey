import { Link } from "react-router-dom";
import { BookOpen, Feather, Quote, Award, CheckCircle2, ArrowRight, Download, ExternalLink, Bookmark } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import PillarsGrid from "@/components/PillarsGrid";

import golfAuthorship from "@/assets/stacey/golf-authorship.jpg";
import fairwaysBook from "@/assets/stacey/fairways-book.jpg";

export const AuthorPublishingPage = () => {
  const { openLightbox } = useLightbox();

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Fairways and Femininity: The Modern Woman's Guide to Golf",
    "author": {
      "@type": "Person",
      "name": "Stacey Soans",
      "url": "https://staceysoans.com/about",
    },
    "description":
      "A landmark book by Stacey Soans exploring identity, performance, mindset, wellness, and modern femininity through the lens of golf and corporate empowerment.",
    "genre": ["Sports", "Personal Growth", "Women's Empowerment", "Golf Fashion"],
    "inLanguage": "English",
  };

  const chapters = [
    {
      number: "Chapter I",
      title: "The Solitary Tee Box",
      desc: "Deconstructing the initial psychological moment before the first swing—how quiet self-possession lays the groundwork for high-stakes leadership.",
    },
    {
      number: "Chapter II",
      title: "Fairways as Boardrooms",
      desc: "Examining how the unwritten etiquette of the links mirrors corporate deal-making, and why exclusion from the course has historically hindered female executive mobility.",
    },
    {
      number: "Chapter III",
      title: "The Architecture of Poise",
      desc: "Synthesizing physical athletic conditioning with executive presence. Exploring how the discipline of the golf posture translates to boardroom authority.",
    },
    {
      number: "Chapter IV",
      title: "Reclaiming the Modern Aesthetic",
      desc: "Challenging the false dichotomy between feminine style and athletic seriousness; redefining sports attire as an instrument of confidence.",
    },
    {
      number: "Chapter V",
      title: "The Final Putt",
      desc: "Handling pressure, managing missed shots, and cultivating the emotional resilience required to lead through uncertainty.",
    },
  ];

  const articles = [
    {
      title: "The Quiet Power of the 18th Hole: Why Leaders Need Sports Discipline",
      publication: "Executive Leadership & Culture Quarterly",
      date: "Fall 2025",
      type: "Featured Essay",
    },
    {
      title: "Designing Inclusive Fairways: Overcoming Gender Bias in Traditional Clubs",
      publication: "Canadian Golf Journal",
      date: "Spring 2025",
      type: "Investigative Analysis",
    },
    {
      title: "The Modern Multi-Hyphenate: Thriving Across Corporate Strategy and the Arts",
      publication: "Toronto Business & Arts Review",
      date: "Winter 2024",
      type: "Opinion Column",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Author & Publishing — Fairways & Femininity by Stacey Soans"
        description="Explore Stacey Soans's literary work, including 'Fairways & Femininity', published essays, journalism history, and speaking engagements on leadership and athletic poise."
        canonical="/author-publishing"
        type="book"
        keywords={[
          "Fairways and Femininity",
          "Fairways & Femininity Stacey Soans",
          "Stacey Soans Author",
          "Stacey Soans Publishing",
          "Golf and Female Leadership Book",
          "Stacey Soans Essays Toronto",
        ]}
        schema={authorSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Author & Publishing" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Pillar III • Literary Practice &amp; Thought Leadership
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Author &amp; Publishing
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Seminal literary publication <em className="text-gold">Fairways &amp; Femininity</em>, essays, cultural commentary, and keynote lectures on athletic poise and female leadership.
            </p>
          </div>

          {/* Featured Book Section */}
          <div className="p-8 md:p-12 bg-card/80 border border-border/90 mb-20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Book Visual / Author Portrait in Full Uncropped Proportion */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm">
                  <UncroppedPhoto
                    src={golfAuthorship}
                    alt="Stacey Soans - Author of Fairways & Femininity"
                    caption="Stacey Soans — Author of Fairways & Femininity"
                    catalogId="ARC-AUTH-01"
                    year="2025"
                    category="Author Portrait"
                    maxHeightClass="max-h-[500px]"
                    onOpenLightbox={openLightbox}
                  />
                  <div className="mt-3 text-center">
                    <span className="text-[11px] archive-sans text-gold uppercase tracking-widest block">
                      Hardcover • Archival Digital Edition • Available Internationally
                    </span>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-7 font-serif">
                <span className="text-xs archive-sans uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                  Featured Book Release
                </span>
                <h2 className="archive-heading text-3xl sm:text-4xl md:text-5xl font-normal text-primary mb-3">
                  Fairways and Femininity
                </h2>
                <p className="text-base md:text-lg text-gold/90 italic mb-6">
                  The Modern Woman&apos;s Guide to Golf: Mindset, Empowerment, Wellness &amp; Style
                </p>

                <div className="space-y-4 text-foreground/85 leading-relaxed text-base mb-8">
                  <p>
                    In <strong className="text-primary font-normal">Fairways &amp; Femininity</strong>, Stacey Soans crafts an incisive and elegant critique of the traditional cultural architecture that has long cordoned off golf, corporate power, and feminine aesthetics into isolated silos.
                  </p>
                  <p>
                    Synthesizing first-hand narratives from championship golf courses with her strategic acumen as an executive Human Resources Business Partner, Soans illustrates how the discipline of the fairway—patience, strategic shot-making, and stoic composure under pressure—provides the exact blueprint needed for modern women ascending to leadership.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black hover:bg-gold-light transition-colors text-xs uppercase tracking-widest archive-sans font-medium"
                  >
                    <span>Request Media Review Copy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground hover:text-gold transition-colors text-xs uppercase tracking-widest archive-sans"
                  >
                    <span>Inquire for Keynote Lecture</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Architecture */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Structural Outline
              </span>
              <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                Selected Chapter Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((ch) => (
                <div key={ch.number} className="p-6 bg-card/60 border border-border/80 hover:border-gold/40 transition-colors">
                  <div className="flex items-center justify-between text-xs archive-sans text-gold mb-3 pb-2 border-b border-border/50">
                    <span>{ch.number}</span>
                    <Bookmark className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="archive-heading text-xl font-normal text-primary mb-2">
                    {ch.title}
                  </h3>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Published Articles & Essays */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                  Journalistic Record
                </span>
                <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                  Published Essays &amp; Commentary
                </h2>
              </div>
              <Link
                to="/publications-press"
                className="text-xs archive-sans uppercase tracking-widest text-gold hover:underline flex items-center gap-1.5"
              >
                <span>View All Publications &amp; Press</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {articles.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-card/60 border border-border/80 hover:border-gold/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
                >
                  <div>
                    <span className="text-[11px] archive-sans text-gold uppercase tracking-wider block mb-1">
                      {item.publication} • {item.date}
                    </span>
                    <h3 className="archive-heading text-xl font-normal text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs archive-sans px-3 py-1 bg-secondary text-muted-foreground border border-border/60 self-start sm:self-center">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PillarsGrid currentPillarId="author" />
    </Layout>
  );
};

export default AuthorPublishingPage;
