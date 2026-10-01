import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Building2, ShieldCheck } from "lucide-react";
import digitalsPreview from "@/assets/stacey/pub-digitals-full.jpg";

export const HomePressAndRepresentation = () => {
  return (
    <>
      {/* Publications & Press Homepage Section */}
      <section className="py-20 md:py-28 section-padding bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Media &amp; Editorial Coverage
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal mb-6">
                Publications &amp; Press
              </h2>
              <p className="font-serif text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                Stacey Soans of Toronto, Canada has been featured across professional publishing, editorial publications and other forms of professional media.
              </p>
              <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                The modelling archive includes selected professional fashion, beauty, editorial, runway and commercial work, documenting appearances associated with Toronto fashion events and editorial spreads.
              </p>
              <Link
                to="/publications-and-press/"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
              >
                <span>View Publications &amp; Press Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-5 p-6 md:p-8 bg-card/60 border border-border/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold mb-4">
                <Newspaper className="w-4 h-4" />
                <span>Editorial &amp; Media Highlights</span>
              </div>
              <ul className="space-y-4 text-xs font-serif border-t border-border/60 pt-4">
                <li className="pb-3 border-b border-border/40">
                  <span className="text-[10px] archive-sans uppercase tracking-wider text-muted-foreground block mb-1">
                    Editorial Fashion Spread
                  </span>
                  <span className="text-foreground font-medium text-sm block">
                    Toronto Editorial &amp; Studio Fashion Photography
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Featuring high-fashion silhouette, drapery and contemporary styling.
                  </span>
                </li>
                <li className="pb-3 border-b border-border/40">
                  <span className="text-[10px] archive-sans uppercase tracking-wider text-muted-foreground block mb-1">
                    Commercial Campaign
                  </span>
                  <span className="text-foreground font-medium text-sm block">
                    National Beauty &amp; Complexion Campaign Photography
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Showcasing diverse skin tones and professional cosmetic portraiture.
                  </span>
                </li>
                <li>
                  <span className="text-[10px] archive-sans uppercase tracking-wider text-muted-foreground block mb-1">
                    Event Appearances
                  </span>
                  <span className="text-foreground font-medium text-sm block">
                    Toronto Fashion Events &amp; Runway Appearances
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Runway movement and high-fashion presentations across Ontario.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Representation Homepage Section */}
      <section className="py-20 md:py-28 section-padding bg-secondary/20 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Model Digitals Preview */}
            <motion.div
              className="lg:col-span-5 overflow-hidden bg-secondary/30 border border-border/70 p-2 sm:p-3 flex items-center justify-center order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img
                src={digitalsPreview}
                alt="Stacey Soans official agency model digitals in Toronto"
                className="w-full h-auto max-h-[520px] object-contain grayscale select-none"
                loading="lazy"
              />
            </motion.div>

            {/* Factual Representation Info */}
            <motion.div
              className="lg:col-span-7 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
                Agency Representation
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal mb-6">
                Model Representation
              </h2>
              <div className="p-5 bg-card/60 border border-border/80 mb-6">
                <div className="flex items-center gap-2 text-xs archive-sans uppercase tracking-widest text-gold mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Agency Affiliation</span>
                </div>
                <p className="font-serif text-base text-foreground leading-relaxed">
                  Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs archive-sans mb-8">
                <div className="p-3 bg-secondary/30 border border-border/50">
                  <span className="text-muted-foreground text-[10px] uppercase block mb-1">Height</span>
                  <span className="font-serif text-sm font-medium text-foreground">5'9" (175 cm)</span>
                </div>
                <div className="p-3 bg-secondary/30 border border-border/50">
                  <span className="text-muted-foreground text-[10px] uppercase block mb-1">Eyes</span>
                  <span className="font-serif text-sm font-medium text-foreground">Dark Brown</span>
                </div>
                <div className="p-3 bg-secondary/30 border border-border/50">
                  <span className="text-muted-foreground text-[10px] uppercase block mb-1">Hair</span>
                  <span className="font-serif text-sm font-medium text-foreground">Dark Brown</span>
                </div>
                <div className="p-3 bg-secondary/30 border border-border/50">
                  <span className="text-muted-foreground text-[10px] uppercase block mb-1">Base</span>
                  <span className="font-serif text-sm font-medium text-foreground">Toronto, CA</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/representation/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
                >
                  <span>View Representation &amp; Digitals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs uppercase tracking-[0.2em] archive-sans text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
                >
                  <span>Request Booking Details</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePressAndRepresentation;
