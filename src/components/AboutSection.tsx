import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutPortrait from "@/assets/stacey/about-stacey.jpg";

const stats = [
  { label: "Location", value: "Toronto & Vaughan, Ontario, Canada" },
  { label: "Education", value: "University of Toronto (B.A. Hons, Political Science)" },
  { label: "Agency Representation", value: "Icon Model Management (Toronto)" },
  { label: "Published Book", value: "Fairways & Femininity (2025)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-padding bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: 100% Full Uncropped Photograph in natural proportions */}
        <motion.div
          className="overflow-hidden bg-secondary/30 border border-border/70 p-2 sm:p-3 flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={aboutPortrait}
            alt="Stacey Soans - Official Archival Portrait"
            className="w-full h-auto max-h-[640px] object-contain grayscale select-none"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Content - Fulfills Requirement 8 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Archival Overview
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6 font-normal">
            About Stacey Soans
          </h2>
          
          <div className="space-y-4 font-serif text-base md:text-lg text-muted-foreground mb-8 leading-[1.8]">
            <p className="text-foreground/90 font-medium">
              A comprehensive digital resource covering Stacey Soans, her professional work, publications, media and four professional pillars: Human Resources, golf, authorship and modelling in Toronto, Canada.
            </p>
            <p>
              Stacey Soans is a Toronto-based Human Resources Business Partner leader, competitive golfer, published author, and professional model signed with Icon Model Management. A graduate of the University of Toronto with a Bachelor of Arts (Honours) in Political Science, she has spearheaded HR strategies across private equity, mining, engineering, and real estate investment trusts.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="space-y-4 border-t border-border pt-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex justify-between items-baseline gap-4">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground archive-sans font-medium">
                  {stat.label}
                </span>
                <span className="text-sm tracking-wide text-primary font-serif text-right">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3.5 text-xs tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 archive-sans font-medium"
          >
            <span>Read Full Biography &amp; Education</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
