import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import aboutPortrait from "@/assets/stacey/pub-outdoor.jpg";

const modelStats = [
  { label: "Base", value: "Toronto, Ontario, Canada" },
  { label: "Experience", value: "Over 10 Years Professional Modeling" },
  { label: "Disciplines", value: "Fashion, Beauty, Editorial, Runway, Commercial" },
  { label: "Representation", value: "Represented by Toronto Agencies (incl. Icon Model Management)" },
];

export const AboutSection = () => {
  return (
    <section id="about-overview" className="py-20 md:py-32 section-padding bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Full Uncropped Portrait */}
        <motion.div
          className="lg:col-span-5 overflow-hidden bg-secondary/30 border border-border/70 p-2 sm:p-3 flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={aboutPortrait}
            alt="Stacey Soans — Professional Model Biography Portrait"
            className="w-full h-auto max-h-[620px] object-contain grayscale select-none"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Factual Content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Model Biography
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6 font-normal">
            About Stacey Soans
          </h2>

          <div className="space-y-4 font-serif text-base md:text-lg text-muted-foreground mb-8 leading-[1.8]">
            <p className="text-foreground/95 font-medium">
              Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning
              fashion, beauty, editorial, runway and commercial modelling.
            </p>
            <p>
              Stacey Soans began modelling at age 12 and has developed a professional portfolio across Toronto fashion,
              beauty campaigns, editorial publications, runway events and commercial projects.
            </p>
            <p className="text-muted-foreground/90">
              Her professional modelling work includes fashion editorials, beauty campaigns, commercial photography,
              runway appearances and lifestyle projects.
            </p>
          </div>

          {/* Model Snapshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-border/60 py-6 mb-8 text-xs archive-sans">
            {modelStats.map((stat) => (
              <div key={stat.label} className="p-3 bg-secondary/30 border border-border/50">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">
                  {stat.label}
                </span>
                <span className="font-serif text-sm text-foreground font-medium">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/about-stacey-soans/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
            >
              <span>Read Full Biography</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/modeling-career/"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs uppercase tracking-[0.2em] archive-sans text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
            >
              <span>Explore Career Timeline</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
