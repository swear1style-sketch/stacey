import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import gallery1 from "@/assets/stacey/stacey-editorial-1.jpg";
import gallery2 from "@/assets/stacey/stacey-campaign-1.jpg";
import gallery3 from "@/assets/stacey/stacey-interview-1.jpg";
import gallery4 from "@/assets/stacey/shoppers-beauty-1.jpg";
import gallery5 from "@/assets/stacey/img-3081.jpg";
import gallery6 from "@/assets/stacey/img-5982.jpg";

const images = [
  { src: gallery1, alt: "Stacey Soans - Rise Grind & Glow Campaign", label: "Rise, Grind & Glow Campaign", category: "Editorial" },
  { src: gallery2, alt: "Stacey Soans - Beauty & Cosmetic Closeup", label: "Beauty Campaign Portrait", category: "Commercial" },
  { src: gallery3, alt: "Stacey Soans - Puma Golf on Championship Course", label: "Professional Golf Editorial", category: "Athletics" },
  { src: gallery4, alt: "Stacey Soans - Shoppers Beauty Diverse Skin Tones", label: "Shoppers Beauty National Campaign", category: "Commercial" },
  { src: gallery5, alt: "Stacey Soans - Studio Editorial Fashion", label: "Studio Editorial Study", category: "Fashion" },
  { src: gallery6, alt: "Stacey Soans - Contemporary Fashion Movement", label: "High-Fashion Portrait", category: "Fashion" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 section-padding bg-background border-b border-border/40">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
          Uncropped Photographic Archive
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
          Media Gallery
        </h2>
        <p className="font-serif text-sm text-muted-foreground mt-2 max-w-md mx-auto">
          Every photograph displayed in its complete original proportions without automated cropping or distortion.
        </p>
      </motion.div>

      {/* Masonry layout where each photograph renders at its natural aspect ratio without any cropping */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-6xl mx-auto mb-12">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            className="mb-6 overflow-hidden group bg-secondary/30 border border-border/70 hover:border-gold/50 transition-colors p-2 break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
          >
            <div className="relative overflow-hidden flex items-center justify-center bg-black/40">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain grayscale transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs archive-sans">
              <span className="text-foreground/90 font-serif font-medium">{img.label}</span>
              <span className="text-gold text-[10px] uppercase tracking-wider">{img.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/media-archive"
          className="inline-flex items-center gap-2 border border-primary/30 px-8 py-3.5 text-xs tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 archive-sans font-medium"
        >
          <span>Explore Complete Media Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
