import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, Building2, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG, PAGES_METADATA } from "@/config/site";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "editorial",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const meta = PAGES_METADATA.contact;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": meta.title,
    "description": meta.description,
    "url": `${SITE_CONFIG.siteUrl}/contact/`,
    "about": {
      "@type": "Person",
      "@id": SITE_CONFIG.personId,
      "name": SITE_CONFIG.personName,
      "jobTitle": "Professional Model",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.location.city,
        "addressRegion": SITE_CONFIG.location.region,
        "addressCountry": SITE_CONFIG.location.country,
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        type="website"
        keywords={meta.keywords}
        schema={contactSchema}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact Stacey Soans", item: "/contact/" },
        ]}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Bookings &amp; Inquiries
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Contact Stacey Soans
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Professional bookings, casting availability, commercial campaigns, and editorial inquiries in Toronto, Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-card/70 border border-border/80 p-8 md:p-10 shadow-xl">
              <h2 className="archive-heading text-2xl font-normal text-primary mb-2">
                Submit Modeling Inquiry
              </h2>
              <p className="font-serif text-sm text-muted-foreground mb-8">
                Please complete the form below. Professional inquiries are reviewed promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-secondary/40 border border-gold/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="archive-heading text-2xl font-normal text-primary mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-serif text-base text-muted-foreground mb-6 max-w-md mx-auto">
                    Thank you for reaching out to Stacey Soans. Your modeling inquiry has been received.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "editorial",
                        dates: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs archive-sans">
                  <div>
                    <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors font-serif text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@domain.com"
                        className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors font-serif text-sm"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Direct Phone"
                        className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors font-serif text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors font-serif text-sm cursor-pointer"
                      >
                        <option value="fashion">Fashion &amp; Lookbook Project</option>
                        <option value="beauty">Beauty &amp; Cosmetic Campaign</option>
                        <option value="editorial">Editorial &amp; Publication Photography</option>
                        <option value="runway">Runway &amp; Live Fashion Event</option>
                        <option value="commercial">Commercial Advertising &amp; Lifestyle</option>
                        <option value="agency">Agency / Casting Representation</option>
                        <option value="press">Media &amp; Press Feature</option>
                      </select>
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                        Proposed Project Dates
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="e.g. November 2026 / TBD"
                        className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors font-serif text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-muted-foreground mb-2">
                      Project Details &amp; Location *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide styling scope, usage rights, creative direction, and shoot location..."
                      className="w-full bg-secondary/50 border border-border/80 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors font-serif text-sm resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="flex-1 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
                    >
                      Book Stacey
                    </button>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="flex-1 border border-border px-8 py-3.5 text-xs uppercase tracking-[0.2em] archive-sans text-center text-foreground hover:border-gold hover:text-gold transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Professional Inquiry</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Factual Protocol Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-secondary/30 border border-border/80 space-y-5">
                <span className="text-xs archive-sans uppercase tracking-widest text-gold font-medium block">
                  Official Inquiries
                </span>
                <p className="font-serif text-base text-foreground leading-relaxed">
                  For professional inquiries relating to professional modelling, please use the contact information provided on this website.
                </p>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                  Media, publishing, professional collaboration and business inquiries can be directed through the appropriate contact information provided on this website.
                </p>
              </div>

              <div className="p-6 bg-card/60 border border-border/80 space-y-4 text-xs archive-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Primary Base</span>
                    <span className="font-serif text-sm text-foreground">Toronto, Ontario, Canada</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Building2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Representation History</span>
                    <span className="font-serif text-sm text-foreground">
                      Icon Model Management (Toronto)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-border/40">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Direct Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="font-serif text-sm text-gold hover:underline"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
