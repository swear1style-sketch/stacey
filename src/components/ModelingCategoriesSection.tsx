import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Eye, Camera, Footprints, Layers } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Fashion Modeling",
    desc: "Fashion editorials, lookbook collections, and contemporary apparel projects across Toronto's fashion industry.",
    href: "/fashion/",
  },
  {
    icon: Eye,
    title: "Beauty Modeling",
    desc: "Skincare, cosmetic closeup portraiture, and high-resolution beauty campaign features.",
    href: "/beauty/",
  },
  {
    icon: Camera,
    title: "Editorial Modeling",
    desc: "Photographic spreads, editorial fashion publications, and artistic direction in studio and on location.",
    href: "/editorial/",
  },
  {
    icon: Footprints,
    title: "Runway Modeling",
    desc: "Runway presentations, dynamic movement, and appearances connected to Toronto fashion events.",
    href: "/runway/",
  },
  {
    icon: Layers,
    title: "Commercial Modeling",
    desc: "National commercial advertising, brand ambassadorship, and lifestyle campaign photography.",
    href: "/commercial/",
  },
];

export const ModelingCategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-28 section-padding bg-secondary/20 border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Areas of Specialization
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
            Modeling Categories
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Explore Stacey Soans’ specialized portfolio divisions across fashion, beauty, editorial, runway, and commercial projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-6 md:p-8 bg-card/60 border border-border/70 hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-secondary/50 border border-border/80 flex items-center justify-center text-gold mb-5 group-hover:border-gold transition-colors">
                  <cat.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-3 font-medium archive-sans">
                  {cat.title}
                </h3>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <Link
                to={cat.href}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] archive-sans text-gold hover:text-gold-light transition-colors mt-auto font-medium"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}

          {/* Quick Agency / Representation Card */}
          <motion.div
            className="p-6 md:p-8 bg-gold/10 border border-gold/40 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          >
            <div>
              <span className="text-[10px] archive-sans uppercase tracking-widest text-gold font-medium block mb-3">
                Representation
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground font-normal mb-3">
                Model Agency Representation
              </h3>
              <p className="font-serif text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                Stacey Soans has been represented by professional modelling agencies in Toronto, including Icon Model Management.
              </p>
            </div>
            <Link
              to="/representation/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] archive-sans text-gold hover:text-gold-light transition-colors font-medium"
            >
              <span>Agency Details &amp; Digitals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelingCategoriesSection;
