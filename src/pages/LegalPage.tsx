import { Link } from "react-router-dom";
import { ShieldCheck, Scale, FileText, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const LegalPage = () => {
  const legalSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal Notices, Copyright & Citation Standards — Stacey Soans",
    "description":
      "Official intellectual property notices, image usage guidelines, academic citation standards, and privacy policy for Stacey Soans Digital Encyclopedia & Media Archive.",
  };

  return (
    <Layout>
      <SEO
        title="Legal, Copyright & Citation Standards — Stacey Soans"
        description="Official intellectual property guidelines, copyright notices, photographic licensing protocols, and standardized academic citation methods for Stacey Soans Digital Encyclopedia."
        canonical="/legal"
        type="website"
        keywords={[
          "Stacey Soans Copyright",
          "Stacey Soans Legal",
          "Digital Encyclopedia Terms",
          "Citation Guide Stacey Soans",
          "Image Licensing Stacey Soans",
        ]}
        schema={legalSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Legal" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Statutory Governance &amp; Intellectual Property
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Legal, Copyright &amp; Citation Standards
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Official copyright declaration, photographic preservation and licensing protocols, academic citation formats, and terms of encyclopedia access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 font-serif">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-10 text-foreground/85 leading-relaxed text-base md:text-lg">
              {/* Copyright Statement */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <Scale className="w-5 h-5 text-gold" />
                  <span>1. Intellectual Property &amp; Copyright Declaration</span>
                </h2>
                <p>
                  All content, text, literary excerpts, layout architecture, graphic marks, and photographic assets displayed within the <strong className="text-primary font-normal">Stacey Soans Digital Encyclopedia &amp; Media Archive</strong> are the exclusive intellectual property of Stacey Soans, except where licensed by collaborating photographers, publishers, or agency partners.
                </p>
                <div className="p-4 bg-secondary/30 border border-gold/40 text-gold font-medium text-sm archive-sans tracking-wide">
                  © 2026 Stacey Soans. All Rights Reserved.
                </div>
                <p>
                  No portion of this encyclopedia may be duplicated, scraped for AI training models, redistributed, or exploited commercially without express prior written authorization from Stacey Soans or designated legal counsel.
                </p>
              </section>

              {/* Photographic Usage & Preservation */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span>2. Photographic Preservation &amp; Licensing Protocols</span>
                </h2>
                <p>
                  As an archival prerequisite, all photographic reproductions are displayed in their complete, uncropped original proportions. Any third-party editorial publication granted reproduction rights must adhere to the same preservation standard:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-muted-foreground">
                  <li>Photographs must not be cropped, stretched, or algorithmically altered.</li>
                  <li>Full scope of silhouette and photographic composition must remain visible.</li>
                  <li>Proper photo credit and archival accession code must be appended.</li>
                  <li>For commercial advertising licenses, formal booking contracts must be executed.</li>
                </ul>
              </section>

              {/* Standardized Citation Formats */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-gold" />
                  <span>3. Standardized Bibliographic &amp; Academic Citation</span>
                </h2>
                <p>
                  Scholars, journalists, and media researchers referencing this encyclopedia are requested to use the following standardized citation models:
                </p>

                <div className="space-y-3 not-prose">
                  <div className="p-4 bg-card border border-border/80 text-xs">
                    <span className="text-gold archive-sans font-medium uppercase tracking-wider block mb-1">
                      APA 7th Edition:
                    </span>
                    <p className="font-mono text-muted-foreground select-all">
                      Soans, S. (2026). Stacey Soans Digital Encyclopedia &amp; Media Archive. Toronto, Canada. Retrieved from https://staceysoans.com/
                    </p>
                  </div>

                  <div className="p-4 bg-card border border-border/80 text-xs">
                    <span className="text-gold archive-sans font-medium uppercase tracking-wider block mb-1">
                      Chicago Manual of Style (17th Ed.):
                    </span>
                    <p className="font-mono text-muted-foreground select-all">
                      Soans, Stacey. &quot;Stacey Soans Digital Encyclopedia &amp; Media Archive.&quot; Digital Archive, Toronto, Ontario, 2026. https://staceysoans.com/.
                    </p>
                  </div>

                  <div className="p-4 bg-card border border-border/80 text-xs">
                    <span className="text-gold archive-sans font-medium uppercase tracking-wider block mb-1">
                      MLA 9th Edition:
                    </span>
                    <p className="font-mono text-muted-foreground select-all">
                      Soans, Stacey. &quot;Stacey Soans Digital Encyclopedia &amp; Media Archive.&quot; 2026, https://staceysoans.com/.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy Policy */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <Lock className="w-5 h-5 text-gold" />
                  <span>4. Privacy &amp; Data Governance</span>
                </h2>
                <p>
                  This digital archive does not sell, rent, or trade visitor data. Communication details submitted via the official inquiry portal are used exclusively for evaluating professional engagements and executing correspondence.
                </p>
              </section>
            </div>

            {/* Sidebar Notice */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-card/80 border border-border/80">
                <h3 className="archive-sans text-xs uppercase tracking-widest text-gold mb-3 pb-2 border-b border-border/60">
                  Legal Registry Information
                </h3>
                <div className="space-y-3 text-xs archive-sans text-muted-foreground">
                  <div>
                    <span className="block text-foreground font-medium">Jurisdiction:</span>
                    <span>Ontario, Canada</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-medium">Archive Entity:</span>
                    <span>Stacey Soans Digital Encyclopedia &amp; Media Archive</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-medium">Copyright Year:</span>
                    <span>2026</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-medium">Statutory Scope:</span>
                    <span>Human Resources, Golf, Authorship, Modelling</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/30 border border-border/80">
                <h3 className="archive-sans text-xs uppercase tracking-widest text-gold mb-2 font-medium">
                  Permissions &amp; Rights
                </h3>
                <p className="text-xs font-serif text-muted-foreground leading-relaxed mb-4">
                  For formal licensing requests, syndication permissions, or press inquiries, please submit an official request.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold hover:underline"
                >
                  <span>Submit Licensing Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalPage;
