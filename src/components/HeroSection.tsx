import { motion } from "framer-motion";
import heroImage from "@/assets/stacey/hero-stacey.jpg";

const transition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Hero Image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={heroImage}
          alt="Stacey Soans - Digital Encyclopedia & Media Archive"
          className="h-full w-full object-cover object-[center_35%]"
          loading="eager"
        />
        {/* Soft bottom fade blending seamlessly with the dark background while preserving full brightness on the portrait */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 section-padding text-center">
        <motion.h1
          className="luxury-heading text-7xl md:text-9xl lg:text-[12rem] text-primary mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
        >
          Stacey Soans
        </motion.h1>

        <motion.p
          className="luxury-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-10 max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
        >
          A Comprehensive Digital Resource on Stacey Soans, Her Professional Work, Publications &amp; Media
        </motion.p>

        <motion.a
          href="#portfolio"
          className="border border-primary/30 px-10 py-4 text-xs tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.9 }}
        >
          View Portfolio
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
