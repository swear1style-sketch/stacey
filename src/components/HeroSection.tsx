import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/stacey/hero-stacey.jpg";

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const };

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] md:h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Hero Image with subtle slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={heroImage}
          alt="Stacey Soans — Professional Model Toronto, Canada"
          className="h-full w-full object-cover object-[center_30%]"
          loading="eager"
          fetchpriority="high"
        />
        {/* Soft bottom fade ensuring smooth transition into content while preserving portrait luminosity */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 sm:pb-20 md:pb-24 section-padding text-center max-w-5xl mx-auto mt-auto pt-36">
        {/* Category Line */}
        <motion.div
          className="archive-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          Fashion · Beauty · Editorial · Runway · Commercial
        </motion.div>

        {/* Primary H1 */}
        <motion.h1
          className="luxury-heading text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-primary mb-4 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.35 }}
        >
          Stacey Soans
        </motion.h1>

        {/* Hero Supporting Text (Exact client sentence) */}
        <motion.p
          className="font-serif text-sm sm:text-base md:text-lg text-foreground/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.5 }}
        >
          Stacey Soans of Toronto, Canada is a professional model with more than a decade of experience spanning
          fashion, beauty, editorial, runway and commercial modelling.
        </motion.p>

        {/* CTAs: Primary & Secondary */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.65 }}
        >
          <a
            href="#selected-portfolio"
            className="w-full sm:w-auto px-8 py-3.5 bg-gold text-black text-xs uppercase tracking-[0.25em] archive-sans font-medium hover:bg-gold-light transition-all duration-300"
          >
            View Portfolio
          </a>
          <Link
            to="/contact/"
            className="w-full sm:w-auto border border-primary/40 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-primary hover:bg-primary hover:text-black transition-all duration-300 archive-sans font-medium backdrop-blur-sm"
          >
            Book Stacey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
