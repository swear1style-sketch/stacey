import { useState } from "react";
import { Mail, MapPin, CheckCircle2, Send, ArrowRight, ShieldCheck, Phone, Globe } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "modelling",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact & Professional Inquiries — Stacey Soans",
    "description":
      "Official contact protocol for Stacey Soans covering modelling bookings, HR executive advisory, golf appearances, and literary engagements in Toronto, Canada.",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Contact & Professional Inquiries — Stacey Soans"
        description="Official contact and booking protocol for Stacey Soans. Inquiries for high-fashion modelling, HR executive advisory, golf pro-ams, and author keynotes in Toronto, Canada."
        canonical="/contact"
        type="website"
        keywords={[
          "Contact Stacey Soans",
          "Book Stacey Soans Model",
          "Stacey Soans HR Consulting",
          "Stacey Soans Golf Appearance",
          "Fairways and Femininity Book Inquiries",
          "Stacey Soans Toronto Contact",
        ]}
        schema={contactSchema}
      />

      <div className="section-padding py-8 bg-[#090b0e] border-b border-border/60">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
              Official Correspondence Protocol
            </span>
            <h1 className="archive-heading text-4xl sm:text-5xl md:text-6xl font-normal text-primary mb-4">
              Contact &amp; Professional Inquiries
            </h1>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
              Direct communication channel for high-fashion bookings, executive Human Resources advisory, competitive golf appearances, author keynotes, and press interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-card/70 border border-border/80 p-8 md:p-10 shadow-xl">
              <h2 className="archive-heading text-2xl font-normal text-primary mb-2">
                Submit Formal Inquiry
              </h2>
              <p className="font-serif text-sm text-muted-foreground mb-8">
                Please complete all required fields. Representatives review submissions within 24 to 48 business hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-secondary/40 border border-gold/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="archive-heading text-2xl font-normal text-primary mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-serif text-base text-muted-foreground mb-6 max-w-md mx-auto">
                    Thank you for reaching out to Stacey Soans. Your inquiry has been routed to the appropriate executive desk and our team will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        inquiryType: "modelling",
                        timeline: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs archive-sans uppercase tracking-widest text-muted-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground font-serif focus:outline-none focus:border-gold"
                        placeholder="e.g. Eleanor Vance"
                      />
                    </div>

                    <div>
                      <label className="block text-xs archive-sans uppercase tracking-widest text-muted-foreground mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground font-serif focus:outline-none focus:border-gold"
                        placeholder="e.g. evance@organization.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs archive-sans uppercase tracking-widest text-muted-foreground mb-2">
                        Organization / Agency / Publication
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground font-serif focus:outline-none focus:border-gold"
                        placeholder="e.g. Luxury Media House / Tech Enterprise"
                      />
                    </div>

                    <div>
                      <label className="block text-xs archive-sans uppercase tracking-widest text-muted-foreground mb-2">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground font-serif focus:outline-none focus:border-gold"
                      >
                        <option value="modelling" className="bg-[#0b0c10]">Professional Modelling / Campaign Booking</option>
                        <option value="hr" className="bg-[#0b0c10]">Human Resources Advisory / HRBP Consultation</option>
                        <option value="golf" className="bg-[#0b0c10]">Professional Golf Pro-Am / Course Writing</option>
                        <option value="author" className="bg-[#0b0c10]">Author Keynote / Fairways &amp; Femininity Review</option>
                        <option value="press" className="bg-[#0b0c10]">Press Interview / Media Appearance</option>
                        <option value="other" className="bg-[#0b0c10]">General Archival Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs archive-sans uppercase tracking-widest text-muted-foreground mb-2">
                      Proposed Project Scope &amp; Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary/50 border border-border px-4 py-3 text-sm text-foreground font-serif focus:outline-none focus:border-gold resize-none"
                      placeholder="Please outline the deliverables, desired dates, shooting locations, or advisory engagement parameters..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-black hover:bg-gold-light transition-colors text-xs uppercase tracking-[0.25em] archive-sans font-medium flex items-center justify-center gap-2"
                  >
                    <span>Transmit Professional Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Representation & Headquarters */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-card/80 border border-border/80">
                <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-widest mb-4 pb-2 border-b border-border/60">
                  <MapPin className="w-4 h-4" />
                  <span>Primary Regional Base</span>
                </div>
                <div className="font-serif space-y-2 text-sm text-foreground/90">
                  <p className="font-medium text-primary text-base">Stacey Soans Executive Office</p>
                  <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                  <p className="text-muted-foreground text-xs archive-sans mt-3">
                    Available for domestic Canadian and international travel for runway, campaigns, and corporate advisory.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-card/80 border border-border/80">
                <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-widest mb-4 pb-2 border-b border-border/60">
                  <Mail className="w-4 h-4" />
                  <span>Direct Electronic Correspondence</span>
                </div>
                <div className="space-y-3 text-xs archive-sans">
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Primary Inquiries:</span>
                    <a
                      href="mailto:inquiries@staceysoans.com"
                      className="text-foreground hover:text-gold transition-colors font-medium text-sm font-serif"
                    >
                      inquiries@staceysoans.com
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Literary &amp; Book Media:</span>
                    <a
                      href="mailto:inquiries@staceysoans.com"
                      className="text-foreground hover:text-gold transition-colors font-medium text-sm font-serif"
                    >
                      publishing@staceysoans.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-secondary/30 border border-border/80">
                <div className="flex items-center gap-2 text-gold text-xs archive-sans uppercase tracking-widest mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official Verification Note</span>
                </div>
                <p className="text-xs font-serif text-muted-foreground leading-relaxed">
                  All contracts, agreements, and official appearances must be validated through authorized written confirmation from Stacey Soans or designated legal counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
