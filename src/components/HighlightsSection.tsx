import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Trophy, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Human Resources Leadership",
    desc: "Executive HR Business Partner (HRBP) specializing in strategic workforce planning, culture transformation, and C-suite advisory in Toronto.",
    href: "/human-resources",
  },
  {
    icon: Trophy,
    title: "Professional Golf & Writing",
    desc: "Competitive athletic background, championship course architecture critiques, and dedicated advocacy for women's visibility on the fairways.",
    href: "/professional-golf",
  },
  {
    icon: BookOpen,
    title: "Author & Publishing",
    desc: "Author of 'Fairways & Femininity', analyzing the convergence of athletic discipline, feminine identity, and corporate executive mobility.",
    href: "/author-publishing",
  },
  {
    icon: Sparkles,
    title: "Professional Modelling",
    desc: "High-fashion editorial campaigns, international runway presentations, and luxury commercial representation with refined architectural grace.",
    href: "/modelling",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-secondary/30 border-b border-border/40">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
          Multidisciplinary Scope
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary font-normal">
          The Four Professional Pillars
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex gap-5 items-start group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
          >
            <div className="w-10 h-10 rounded-sm bg-card border border-border/80 flex items-center justify-center text-gold flex-shrink-0 group-hover:border-gold transition-colors mt-0.5">
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <Link to={item.href} className="group-hover:text-gold transition-colors">
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-2 font-medium archive-sans flex items-center gap-1.5">
                  <span>{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-gold" />
                </h3>
              </Link>
              <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
