import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/stacey/stacey-campaign-1.jpg";
import portfolio2 from "@/assets/stacey/editorial-shot-3.jpg";
import portfolio3 from "@/assets/stacey/stacey-interview-1.jpg";
import portfolio4 from "@/assets/stacey/golf-authorship.jpg";

const items = [
  { src: portfolio1, label: "Executive & Media", pillar: "Human Resources & Editorial", href: "/human-resources" },
  { src: portfolio2, label: "Fashion & Runway", pillar: "Icon Model Management", href: "/modelling" },
  { src: portfolio3, label: "Professional Golf", pillar: "International Golf & Puma", href: "/professional-golf" },
  { src: portfolio4, label: "Authorship", pillar: "Fairways & Femininity", href: "/author-publishing" },
];

const PortfolioStrip = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 section-padding bg-background border-b border-border/40">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
          Curated Visual Archive
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
          The Four Pillars &amp; Portfolio
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.15 }}
          >
            {/* 100% Uncropped proportion display */}
            <Link to={item.href} className="block">
              <div className="overflow-hidden aspect-[2/3] bg-secondary/30 border border-border/60 group-hover:border-gold/50 transition-colors flex items-center justify-center p-1">
                <img
                  src={item.src}
                  alt={`${item.label} photography - Stacey Soans`}
                  className="h-full w-full object-contain grayscale transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground text-center group-hover:text-gold transition-colors font-medium archive-sans">
                {item.label}
              </p>
              <p className="text-[11px] font-serif text-muted-foreground/70 text-center">
                {item.pillar}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioStrip;
