import { Link } from "react-router-dom";
import { Trophy, Flag, BookOpen, Sparkles, MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import PillarsGrid from "@/components/PillarsGrid";

import golfPortrait from "@/assets/stacey/stacey-interview-1.jpg";
import golfShot1 from "@/assets/stacey/golf-shot-1.jpg";

export const ProfessionalGolfPage = () => {
  const { openLightbox } = useLightbox();

  const golfSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Stacey Soans",
      "jobTitle": "Professional Golfer, Golf Writer & Ambassador",
      "knowsAbout": [
        "Professional Golf",
        "Golf Course Architecture Analysis",
        "Golf Journalism & Publishing",
        "Women's Golf Empowerment",
        "Corporate Pro-Am Tournaments",
      ],
    },
  };

  const courseEssays = [
    {
      course: "St. George's Golf and Country Club",
      location: "Toronto, Ontario",
      focus: "Stanley Thompson Classic Architecture",
      summary:
        "An in-depth tactical critique of Thompson's strategic bunkering, green contour subtleties, and the preservation of historic Canadian golf heritage.",
    },
    {
      course: "Cabot Cliffs & Cabot Links",
      location: "Inverness, Nova Scotia",
      focus: "Coastal Wind Dynamics & Links Psychology",
      summary:
        "Examining how true coastal links weather tests emotional composure and shot-making creativity for modern competitive players.",
    },
    {
      course: "The National Golf Club of Canada",
      location: "Woodbridge, Ontario",
      focus: "Championship Precision & Mental Resilience",
      summary:
        "Analyzing penal architectural design, narrow corridors of play, and the acute psychological demands imposed on elite players.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Professional Golf, Golf Journalism & Course Writing — Stacey Soans"
        description="Explore Stacey Soans's golf career, course writing, tournament appearances, and advocacy for women's athletic excellence and inclusion in golf."
        canonical="/professional-golf"
        type="website"
        keywords={[
          "Stacey Soans Golf",
          "Professional Golf Stacey Soans",
          "Golf Writing Stacey Soans",
          "Women in Golf Toronto",
          "Fairways and Femininity Golf",
          "Golf Course Reviews Stacey Soans",
        ]}
        schema={golfSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Professional Golf" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Pillar II • Athletic Career &amp; Journalism
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Professional Golf &amp; Golf Writing
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Competitive golf career, architectural course critiques, corporate pro-am appearances, and leadership in elevating women&apos;s participation in the sport.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Content */}
            <div className="lg:col-span-7 font-serif text-base md:text-lg text-foreground/85 leading-relaxed space-y-6">
              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3">
                Athletic Career &amp; Competitive Trajectory
              </h2>

              <p>
                Golf is a game of supreme discipline, patience, and unwavering psychological control. For <strong className="text-primary font-normal">Stacey Soans</strong>, the game has been both an athletic crucible and an intellectual laboratory. Beginning in junior circuits and progressing into high-level amateur and professional circles, her game has been defined by rhythmic tempo, strategic course management, and intense focus under pressure.
              </p>

              <p>
                Throughout her career, Stacey has approached the fairway as a venue where athletic rigor and personal character converge. Her experiences on challenging championship courses across North America and internationally have given her an insider&apos;s technical appreciation for every facet of the sport—from swing mechanics and equipment optimization to wind management and mental fortitude.
              </p>

              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 pt-6">
                Golf Writing, Journalism &amp; Course Analysis
              </h2>

              <p>
                Stacey has established herself as a distinctive voice in golf media, authoring literary dispatches, technical reviews, and architectural essays. Her writing rejects clichéd tropes in favor of acute, lyrical observations that bring readers inside the mindset of a competitive golfer facing a daunting approach shot over water.
              </p>

              <p>
                Her published course analyses focus on the interplay between landscape architecture and player decision-making, offering golfers both strategic playing tips and a deeper aesthetic reverence for classic course design.
              </p>

              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 pt-6">
                Advocating for Women in Golf
              </h2>

              <p>
                A central theme of Stacey&apos;s golf-related work is expanding access, visibility, and respect for women on the fairways. Through her writing, pro-am appearances, and mentoring of junior female golfers, she actively champions modern golf attire, inclusive clubhouse cultures, and the recognition of women as serious competitors and executive power-players on corporate greens.
              </p>
            </div>

            {/* Right Photo Column (Uncropped Photo Guarantee) */}
            <div className="lg:col-span-5 space-y-6">
              <UncroppedPhoto
                src={golfPortrait}
                alt="Stacey Soans - Professional Golf on Championship Course"
                caption="Stacey Soans — International Golf & Athletic Focus"
                catalogId="ARC-GOLF-01"
                year="2025"
                category="Athletics & Golf"
                maxHeightClass="max-h-[540px]"
                onOpenLightbox={openLightbox}
              />

              <div className="p-5 bg-card/80 border border-border/80">
                <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-widest mb-3 pb-2 border-b border-border/60">
                  <Trophy className="w-4 h-4" />
                  <span>Golf Engagements &amp; Appearances</span>
                </div>
                <ul className="space-y-2.5 text-xs archive-sans text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Corporate Pro-Am Hosting &amp; Tournament Playing Guest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Course Architecture &amp; Luxury Resort Journalism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Keynote Speaker: Women, Leadership &amp; Athletic Poise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Brand Ambassadorship for Premium Apparel &amp; Equipment</span>
                  </li>
                </ul>

                <div className="mt-5 pt-4 border-t border-border/60">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-secondary/80 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors text-xs uppercase tracking-widest archive-sans font-medium"
                  >
                    <span>Inquire for Golf Pro-Am or Writing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Golf Journalism Dispatches */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Published Field Notes
              </span>
              <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                Selected Course Essays &amp; Technical Reviews
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courseEssays.map((essay) => (
                <div key={essay.course} className="p-6 bg-card/60 border border-border/80 hover:border-gold/50 transition-colors">
                  <div className="flex items-center gap-1.5 text-xs archive-sans text-gold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{essay.location}</span>
                  </div>
                  <h3 className="archive-heading text-xl font-normal text-primary mb-1">
                    {essay.course}
                  </h3>
                  <span className="text-xs archive-sans uppercase tracking-wider text-muted-foreground block mb-3 font-medium">
                    {essay.focus}
                  </span>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    {essay.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PillarsGrid currentPillarId="golf" />
    </Layout>
  );
};

export default ProfessionalGolfPage;
