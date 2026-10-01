import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import gallery1 from "@/assets/stacey/pub-outdoor.jpg";
import gallery2 from "@/assets/stacey/pub-portrait-1.jpg";
import gallery3 from "@/assets/stacey/pub-portrait-3.jpg";
import gallery4 from "@/assets/stacey/pub-portrait-5.jpg";
import gallery5 from "@/assets/stacey/pub-portrait-2.jpg";
import gallery6 from "@/assets/stacey/pub-portrait-4.jpg";
import gallery7 from "@/assets/stacey/pub-digitals-full.jpg";
import gallery8 from "@/assets/stacey/pub-digitals-sq.jpg";

const images = [
  {
    src: gallery1,
    alt: "Stacey Soans outdoor editorial modeling portrait",
    label: "Outdoor Editorial Portrait",
    category: "Editorial",
    href: "/editorial/",
  },
  {
    src: gallery2,
    alt: "Stacey Soans high-fashion studio portrait",
    label: "High-Fashion Studio Portrait",
    category: "Fashion",
    href: "/fashion/",
  },
  {
    src: gallery3,
    alt: "Stacey Soans runway modeling portrait in Toronto",
    label: "Runway — Form & Movement",
    category: "Runway",
    href: "/runway/",
  },
  {
    src: gallery4,
    alt: "Stacey Soans editorial studio modeling portrait",
    label: "Editorial Studio Study",
    category: "Editorial",
    href: "/editorial/",
  },
  {
    src: gallery5,
    alt: "Stacey Soans fashion modeling portrait",
    label: "Fashion Portrait — Natural Light",
    category: "Fashion",
    href: "/fashion/",
  },
  {
    src: gallery6,
    alt: "Stacey Soans commercial lifestyle portrait",
    label: "Commercial Lifestyle Portrait",
    category: "Commercial",
    href: "/commercial/",
  },
  {
    src: gallery7,
    alt: "Stacey Soans official model casting digitals portrait",
    label: "Official Model Digitals",
    category: "Representation",
    href: "/representation/",
  },
  {
    src: gallery8,
    alt: "Stacey Soans agency casting digitals",
    label: "Agency Casting Digitals",
    category: "Representation",
    href: "/representation/",
  },
];

export const GallerySection = () => {
  return (
    <section id="selected-work" className="py-20 md:py-32 section-padding bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
            Portfolio Gallery
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground mt-2 max-w-lg mx-auto">
            Every photograph displayed in its complete original proportions without automated cropping or distortion.
          </p>
        </motion.div>

        {/* Masonry layout where each photograph renders at its natural aspect ratio */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mb-12">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              className="mb-6 overflow-hidden group bg-secondary/30 border border-border/70 hover:border-gold/50 transition-colors p-2 break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
            >
              <Link to={img.href} className="block">
                <div className="relative overflow-hidden flex items-center justify-center bg-black/40">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain grayscale transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[11px] archive-sans uppercase tracking-widest text-white border border-white/40 px-3 py-1.5 backdrop-blur-sm">
                      View {img.category}
                    </span>
                  </div>
                </div>
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs archive-sans">
                  <span className="font-serif text-foreground/90 font-medium text-xs">{img.label}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gold font-medium">{img.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to All Modeling Career */}
        <div className="text-center pt-4">
          <Link
            to="/modeling-career/"
            className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3.5 text-xs tracking-[0.25em] uppercase text-primary hover:bg-primary hover:text-black transition-all duration-300 archive-sans font-medium"
          >
            <span>Explore Complete Modeling Career</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
