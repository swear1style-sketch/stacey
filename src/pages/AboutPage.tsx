import { Link } from "react-router-dom";
import { GraduationCap, Award, MapPin, CheckCircle2, ArrowRight, BookOpen, Briefcase, Trophy, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Layout, { useLightbox } from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import UncroppedPhoto from "@/components/UncroppedPhoto";
import PillarsGrid from "@/components/PillarsGrid";

import aboutPortrait from "@/assets/stacey/about-stacey.jpg";
import heroModel from "@/assets/stacey/stacey-digitals.jpg";

export const AboutPage = () => {
  const { openLightbox } = useLightbox();

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Stacey Soans",
      "jobTitle": [
        "Human Resources Business Partner Leader",
        "Professional Golfer & Golf Writer",
        "Author of Fairways & Femininity",
        "Professional Fashion Model (Icon Model Management)",
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "Ontario",
        "addressCountry": "Canada",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Toronto",
        "award": "Bachelor of Arts (Honours) in Political Science",
      },
      "description":
        "Comprehensive biographical record and verified educational background of Stacey Soans, an executive HR leader (Private Equity, Mining, REITs), competitive golfer, published author, and model with Icon Model Management in Toronto, Canada.",
    },
  };

  const milestones = [
    {
      year: "2025–2026",
      title: "Fairways & Femininity: The Modern Woman's Guide to Golf",
      desc: "Published debut literary project connecting athletic mastery with executive growth. International expansion and keynote speaking on women in sports and business.",
    },
    {
      year: "2021–Present",
      title: "Senior HR Business Partner & Private Equity Advisory",
      desc: "Architected executive talent succession and people strategy across private equity (Accilent Capital), mining, engineering, and REITs—elevating leadership readiness by 40%.",
    },
    {
      year: "2019–Present",
      title: "Icon Model Management Signing & Shoppers Beauty",
      desc: "Signed with Icon Model Management in Toronto; featured in major national commercial campaigns including Shoppers Beauty (celebrating diverse skin tones) and luxury editorials.",
    },
    {
      year: "2015–2019",
      title: "International Competitive Golf & Journalism",
      desc: "Competed internationally, launched women's golf initiatives across Ontario, and authored course analyses and thought leadership essays.",
    },
    {
      year: "Foundations",
      title: "University of Toronto — B.A. (Honours) Political Science",
      desc: "Earned Honours Bachelor's Degree in Political Science from the University of Toronto, developing the strategic governance and systems frameworks underpinning her corporate practice.",
    },
    {
      year: "Early Career",
      title: "Discovered at Age 12 & Sutherland Models",
      desc: "Scouted in a Toronto mall at age 12; spent over a decade working across runway, editorial spreads, and music video productions, instilling lifelong discipline and brand composure.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Stacey Soans — Biography, Education & Professional Background"
        description="Comprehensive biography, academic education, and multifaceted professional background of Stacey Soans, spanning Human Resources, golf, authorship, and modelling in Toronto, Canada."
        canonical="/about"
        type="profile"
        keywords={[
          "About Stacey Soans",
          "Stacey Soans Biography",
          "Stacey Soans Education",
          "Stacey Soans Toronto",
          "Stacey Soans Career",
          "Human Resources Leader Stacey Soans",
          "Stacey Soans Model Profile",
        ]}
        schema={aboutSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "About Stacey Soans" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Official Biographical Record
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              About Stacey Soans
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Biography, academic education, and professional journey across executive Human Resources, professional golf, authorship, and high-fashion modelling in Toronto, Canada.
            </p>
          </div>

          {/* Main Bio Grid with 100% Uncropped Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Column: Full Uncropped Portrait */}
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <UncroppedPhoto
                  src={aboutPortrait}
                  alt="Stacey Soans - Archival Biography Portrait"
                  caption="Stacey Soans — Toronto, Ontario, Canada"
                  catalogId="BIO-PORTRAIT-01"
                  year="2026"
                  category="Official Bio Portrait"
                  maxHeightClass="max-h-[580px]"
                  onOpenLightbox={openLightbox}
                />
                
                {/* Fast Facts Card */}
                <div className="mt-6 p-5 bg-card/70 border border-border/80">
                  <h3 className="archive-sans text-xs uppercase tracking-widest text-gold mb-3 pb-2 border-b border-border/60">
                    Biographical Data
                  </h3>
                  <div className="space-y-2.5 text-xs archive-sans">
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Primary Residence:</span>
                      <span className="text-foreground font-medium">Toronto, Ontario, Canada</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Professional Scope:</span>
                      <span className="text-foreground font-medium">HR, Athletics, Literature, Fashion</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-border/40">
                      <span className="text-muted-foreground">Published Works:</span>
                      <span className="text-foreground font-medium">Fairways &amp; Femininity (2025)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Representation:</span>
                      <span className="text-foreground font-medium">Toronto / International Editorial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Biography Content */}
            <div className="lg:col-span-7 font-serif text-base md:text-lg text-foreground/85 leading-relaxed space-y-6">
              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3">
                Biographical Narrative
              </h2>

              <p>
                <strong className="text-primary font-normal">Stacey Soans</strong> is a Toronto-based Human Resources Business Partner leader, competitive golfer, published author, and professional model whose career exemplifies the synthesis of intellectual rigor, corporate strategy, athletic discipline, and creative presence.
              </p>

              <p>
                Scouted for modelling at age 12 in a Toronto mall, Stacey spent over a decade developing an acute understanding of personal branding, poise, and public communication across runway shows, commercial campaigns, and music video appearances. Earlier in her career, she was represented by Sutherland Models, and since 2019 has been signed with Toronto&apos;s prestigious <strong className="text-primary font-normal">Icon Model Management</strong>. She has starred in prominent national campaigns including <strong className="text-primary font-normal">Shoppers Beauty</strong> (celebrating diverse skin tones and complexion products) and editorial spreads.
              </p>

              <p>
                As a senior <strong className="text-primary font-normal">Human Resources Business Partner (HRBP)</strong>, Stacey brings human-centered leadership to high-impact industries including <strong className="text-primary font-normal">private equity, mining, engineering, and real estate investment trusts (REITs)</strong>. Notably at private equity firm <strong className="text-primary font-normal">Accilent Capital</strong>, she redesigned performance and development architectures that increased leadership pipeline readiness by 40% in under two years. Her core operating philosophy is unequivocal: <em>&ldquo;When you invest in people, performance follows.&rdquo;</em>
              </p>

              <p>
                An avid international golfer, Stacey channels the strategic composure of the links into her corporate advisory and literary writing. In 2025, she published her debut book, <strong className="text-primary font-normal">Fairways and Femininity: The Modern Woman&apos;s Guide to Golf</strong>, championing female empowerment, wellness, mental resilience, and networking on the world&apos;s premier fairways.
              </p>

              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 pt-6">
                Education &amp; Academic Background
              </h2>

              <div className="space-y-4">
                <div className="p-5 bg-secondary/30 border border-border/80">
                  <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>University Higher Education</span>
                  </div>
                  <h3 className="font-serif text-lg text-primary font-normal">
                    University of Toronto — Bachelor of Arts (Honours) in Political Science
                  </h3>
                  <p className="text-sm font-serif text-muted-foreground mt-1">
                    Graduated with honours from one of Canada&apos;s foremost academic institutions. Coursework and research concentrated on leadership frameworks, institutional governance, systemic policy analysis, and organizational dynamics—sharpening the analytical precision and critical thinking she brings to executive HR strategy.
                  </p>
                </div>

                <div className="p-5 bg-secondary/30 border border-border/80">
                  <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Executive Certifications &amp; Coaching</span>
                  </div>
                  <h3 className="font-serif text-lg text-primary font-normal">
                    Certified Leadership Coaching &amp; Executive Development
                  </h3>
                  <p className="text-sm font-serif text-muted-foreground mt-1">
                    Certified in leadership coaching, executive presence development, succession planning modeling, 360° feedback architecture, and organizational change management frameworks tailored for rapid corporate expansion.
                  </p>
                </div>
              </div>

              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 pt-6">
                Career Milestones &amp; Archival Timeline
              </h2>

              <div className="border-l-2 border-gold/40 pl-6 space-y-8 my-6">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-background" />
                    <span className="text-xs archive-sans font-medium uppercase tracking-widest text-gold block mb-1">
                      {item.year}
                    </span>
                    <h3 className="archive-heading text-xl font-normal text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-linking to Pillars */}
      <PillarsGrid
        title="Explore Stacey's Professional Pillars"
        subtitle="Detailed documentation on each of the four areas defining Stacey Soans's professional practice."
      />
    </Layout>
  );
};

export default AboutPage;
