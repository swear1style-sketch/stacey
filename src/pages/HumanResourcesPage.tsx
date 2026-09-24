import { Link } from "react-router-dom";
import { Briefcase, Users, Target, Shield, Award, CheckCircle2, ArrowRight, Building2, TrendingUp, Cpu } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import PillarsGrid from "@/components/PillarsGrid";

export const HumanResourcesPage = () => {
  const hrSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Stacey Soans",
      "jobTitle": "Human Resources Business Partner (HRBP)",
      "knowsAbout": [
        "Human Resources Leadership",
        "HR Business Partnering",
        "Organizational Design",
        "Talent Acquisition & Retention",
        "Executive Leadership Coaching",
        "Culture Transformation",
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Executive Advisory & Strategic HRBP",
      },
    },
  };

  const industries = [
    {
      title: "Private Equity & Venture Portfolios",
      icon: TrendingUp,
      desc: "At Accilent Capital, redesigned performance and development architectures that increased leadership pipeline readiness by 40% in under two years while driving strategic M&A integration.",
    },
    {
      title: "Mining & Natural Resources",
      icon: Shield,
      desc: "Architecting talent frameworks and operational safety leadership across resource extraction and global industrial operations with complex workforce logistics.",
    },
    {
      title: "Engineering & Infrastructure",
      icon: Cpu,
      desc: "Scaling specialized technical engineering talent, restructuring cross-functional reporting hierarchies, and aligning talent strategy directly with project delivery.",
    },
    {
      title: "Real Estate Investment Trusts (REITs)",
      icon: Building2,
      desc: "Partnering with executive asset managers on talent retention, succession models, and human capital governance for capital-intensive real estate portfolios.",
    },
  ];

  const competencies = [
    {
      title: "Strategic Workforce Planning",
      desc: "Aligning human capital deployment directly with 3-5 year corporate revenue and market expansion targets.",
    },
    {
      title: "Organizational Design & Restructuring",
      desc: "Redesigning organizational charts, reporting hierarchies, and cross-functional interfaces to eliminate operational friction.",
    },
    {
      title: "Executive Coaching & Advisory",
      desc: "Confidential thought partnership for C-suite executives and founders navigating high-stakes change and leadership fatigue.",
    },
    {
      title: "Culture & DEI Strategy",
      desc: "Building authentic, metrics-driven inclusion frameworks that elevate underrepresented talent without performative rhetoric.",
    },
    {
      title: "Employee Relations & Mediation",
      desc: "De-escalating complex workplace disputes with objective, legally compliant, and emotionally intelligent mediation.",
    },
    {
      title: "Talent Acquisition Architecture",
      desc: "Developing structured behavioral interview matrices, candidate assessment scorecards, and high-velocity recruitment funnels.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Human Resources Leadership & Strategic HRBP — Stacey Soans"
        description="Explore Stacey Soans's Human Resources leadership, HR Business Partner expertise, industries served, and strategic organizational development frameworks in Toronto, Canada."
        canonical="/human-resources"
        type="website"
        keywords={[
          "Stacey Soans Human Resources",
          "HR Business Partner Toronto",
          "Stacey Soans HRBP",
          "Strategic Workforce Planning",
          "Organizational Design Consultant Toronto",
          "Executive HR Leadership Stacey Soans",
        ]}
        schema={hrSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Human Resources" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Pillar I • Executive Practice
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Human Resources Leadership
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Strategic HR Business Partner practice, organizational architecture, executive coaching, and workforce transformation based in Toronto, Canada.
            </p>
          </div>

          {/* Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-8 font-serif text-base md:text-lg text-foreground/85 leading-relaxed space-y-6">
              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3">
                Strategic HRBP Practice &amp; Philosophy
              </h2>

              <p>
                In an era characterized by market disruption and shifting organizational structures, <strong className="text-primary font-normal">Stacey Soans</strong> approaches Human Resources not as an administrative utility, but as the premier driver of enterprise performance. As a certified leadership coach and experienced <strong className="text-primary font-normal">Human Resources Business Partner (HRBP)</strong>, she embeds alongside C-suite teams across private equity, natural resources, engineering, and REITs to align organizational culture directly with strategic growth.
              </p>

              <p>
                Her advisory methodology is anchored in analytical precision and empathetic leadership. By diagnosing systemic friction, establishing leadership development pipelines, and modernizing performance frameworks, Stacey empowers organizations across Toronto and internationally to achieve scalable, sustainable expansion.
              </p>

              <blockquote className="border-l-2 border-gold pl-6 py-3 my-6 font-serif italic text-gold/90 text-xl bg-secondary/20 pr-4">
                &quot;When you invest in people, performance follows.&quot;
                <footer className="text-xs archive-sans text-muted-foreground mt-2 font-normal not-italic tracking-wider uppercase">
                  — Stacey Soans, Strategic HRBP &amp; Leadership Coach
                </footer>
              </blockquote>

              <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 pt-6">
                Core HR Competencies &amp; Expertise
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                {competencies.map((comp) => (
                  <div key={comp.title} className="p-4 bg-card/60 border border-border/80 hover:border-gold/50 transition-colors">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <h3 className="archive-sans text-xs uppercase tracking-wider font-medium text-foreground">
                        {comp.title}
                      </h3>
                    </div>
                    <p className="font-serif text-xs text-muted-foreground leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Stats & Inquiries */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-card/80 border border-border/80">
                <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-widest mb-4 pb-2 border-b border-border/60">
                  <Briefcase className="w-4 h-4" />
                  <span>HR Leadership Profile</span>
                </div>
                <div className="space-y-4 text-xs archive-sans">
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Primary Role:</span>
                    <span className="text-foreground font-medium text-sm">Strategic HR Business Partner (HRBP)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Jurisdiction:</span>
                    <span className="text-foreground font-medium text-sm">Toronto, Ontario • Global Remote</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Focus Areas:</span>
                    <span className="text-foreground font-medium">Organizational Transformation, C-Suite Coaching, DEI</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Corporate Inquiries:</span>
                    <span className="text-gold font-medium">Consulting, Fractional HRBP &amp; Keynotes</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium hover:bg-gold-light transition-colors"
                  >
                    <span>Inquire for HR Advisory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="p-5 bg-secondary/30 border border-border/80">
                <span className="text-[11px] archive-sans text-gold uppercase tracking-widest block mb-2 font-medium">
                  Interdisciplinary Strength
                </span>
                <p className="font-serif text-xs text-muted-foreground leading-relaxed">
                  Stacey&apos;s background in competitive sports brings a unique mental conditioning perspective to executive coaching, helping corporate leaders handle high-stress board meetings and high-stakes negotiations with athletic poise.
                </p>
              </div>
            </div>
          </div>

          {/* Industries Served Section */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Cross-Sector Proven Track Record
              </span>
              <h2 className="archive-heading text-3xl md:text-4xl font-normal text-primary">
                Industries &amp; Corporate Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.title} className="p-6 bg-card/60 border border-border/80 hover:border-gold/40 transition-colors">
                    <div className="w-10 h-10 rounded-sm bg-secondary/80 border border-border flex items-center justify-center text-gold mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="archive-heading text-xl font-normal text-primary mb-2">
                      {ind.title}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <PillarsGrid currentPillarId="hr" />
    </Layout>
  );
};

export default HumanResourcesPage;
