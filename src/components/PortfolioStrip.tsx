import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/stacey/pub-outdoor.jpg";
import portfolio2 from "@/assets/stacey/pub-portrait-1.jpg";
import portfolio3 from "@/assets/stacey/pub-portrait-3.jpg";
import portfolio4 from "@/assets/stacey/pub-portrait-5.jpg";

const items = [
  {
    src: portfolio1,
    label: "Fashion Editorial",
    category: "High Fashion",
    href: "/fashion/",
    alt: "Stacey Soans outdoor editorial fashion modeling portrait",
  },
  {
    src: portfolio2,
    label: "Beauty Campaigns",
    category: "Commercial Beauty",
    href: "/beauty/",
    alt: "Stacey Soans high-fashion studio beauty portrait",
  },
  {
    src: portfolio3,
    label: "Runway & Movement",
    category: "Runway Silhouette",
    href: "/runway/",
    alt: "Stacey Soans runway modeling portrait in Toronto",
  },
  {
    src: portfolio4,
    label: "Editorial Portfolio",
    category: "Editorial Work",
    href: "/editorial/",
    alt: "Stacey Soans editorial studio modeling portrait",
  },
];

export const PortfolioStrip = () => {
  return (
    <section id="selected-portfolio" className="py-20 md:py-28 section-padding bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Selected Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
            Professional Modeling Disciplines
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Spanning high-fashion editorials, commercial beauty campaigns, runway appearances, and studio portraiture in Toronto, Canada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
            >
              <Link to={item.href} className="block">
                <div className="overflow-hidden aspect-[3/4] bg-secondary/30 border border-border/60 group-hover:border-gold/50 transition-colors">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pt-4 text-center">
                  <p className="text-xs tracking-[0.2em] uppercase text-foreground group-hover:text-gold transition-colors font-medium archive-sans">
                    {item.label}
                  </p>
                  <p className="text-[11px] font-serif text-muted-foreground mt-0.5">
                    {item.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStrip;
