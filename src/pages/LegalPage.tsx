import { Link } from "react-router-dom";
import { ShieldCheck, Scale, FileText, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/config/site";

export const LegalPage = () => {
  return (
    <Layout>
      <SEO
        title="Image Licensing & Usage Terms — Stacey Soans"
        description="Official copyright declaration, photographic licensing protocols, and terms of usage for Stacey Soans' professional modeling portfolio."
        canonical="/legal/"
        type="website"
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Image Licensing & Legal" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Portfolio Legal Notices
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Image Licensing &amp; Usage Terms
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Official copyright declaration, photographic rights, and terms of use governing Stacey Soans’ professional modeling portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 font-serif">
            <div className="lg:col-span-8 space-y-10 text-foreground/85 leading-relaxed text-base md:text-lg">
              {/* Copyright Statement */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <Scale className="w-5 h-5 text-gold" />
                  <span>1. Intellectual Property &amp; Image Rights</span>
                </h2>
                <p>
                  All photographic assets, portfolio imagery, digitals, and creative content displayed on this website are the intellectual property of Stacey Soans and respective commissioned photographers or agency partners. Unauthorized duplication, commercial redistribution, AI model training, or scraping without written authorization is prohibited.
                </p>
              </section>

              {/* Editorial & Press Usage */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-gold" />
                  <span>2. Press &amp; Casting Usage</span>
                </h2>
                <p>
                  Casting directors, agencies, and credentialed media publications may reference official model digitals and press photography for confirmed professional casting calls or editorial features, provided that credit is attributed to Stacey Soans.
                </p>
              </section>

              {/* Inquiries */}
              <section className="space-y-4">
                <h2 className="archive-heading text-2xl md:text-3xl font-normal text-primary border-b border-border/60 pb-3 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span>3. Licensing Inquiries</span>
                </h2>
                <p>
                  For commercial syndication, high-resolution original asset requests, or advertising rights, please direct inquiries to the contact details provided on this website.
                </p>
                <div className="pt-4">
                  <Link
                    to="/contact/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black text-xs uppercase tracking-[0.2em] archive-sans font-medium hover:bg-gold-light transition-colors"
                  >
                    <span>Contact Management</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 p-6 bg-secondary/30 border border-border/80 text-xs archive-sans space-y-4">
              <span className="text-gold uppercase tracking-widest font-medium block">
                Utility Notice
              </span>
              <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                This page serves as a utility reference for rights and licensing. For professional modeling portfolio divisions, please explore the primary navigation.
              </p>
              <Link
                to="/"
                className="text-gold hover:underline block pt-2"
              >
                Return to Portfolio Home →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LegalPage;
