import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Trophy, BookOpen, Sparkles } from "lucide-react";

export const pillars = [
  {
    id: "hr",
    title: "Human Resources",
    subtitle: "Strategic Leadership & HRBP",
    description:
      "Executive HR leadership, strategic workforce design, organizational transformation, and HR Business Partner expertise across high-growth corporate sectors.",
    href: "/human-resources",
    icon: Briefcase,
    stats: "Executive HRBP • Talent Strategy • Organizational Design",
    keywords: ["Leadership", "Organizational Design", "HRBP", "Culture Transformation"],
  },
  {
    id: "golf",
    title: "Professional Golf",
    subtitle: "Athletic Career & Golf Writing",
    description:
      "Competitive athletics, dedicated course journalism, event commentary, and advocacy for women's visibility, inclusivity, and competitive excellence in golf.",
    href: "/professional-golf",
    icon: Trophy,
    stats: "Competitive Player • Golf Journalist • Pro-Am Ambassador",
    keywords: ["Athletics", "Golf Writing", "Course Reviews", "Women in Sport"],
  },
  {
    id: "author",
    title: "Author & Publishing",
    subtitle: "Fairways & Femininity & Essays",
    description:
      "Author of 'Fairways & Femininity', exploring the intersection of modern athletics, feminine identity, executive discipline, and cultural narratives.",
    href: "/author-publishing",
    icon: BookOpen,
    stats: "Published Author • Cultural Essayist • Keynote Speaker",
    keywords: ["Fairways & Femininity", "Essays", "Cultural Commentary", "Keynotes"],
  },
  {
    id: "modelling",
    title: "Professional Modelling",
    subtitle: "Editorial, Runway & Campaigns",
    description:
      "High fashion editorial features, prestigious runway shows, luxury brand advertising, and global commercial representation characterized by polished grace.",
    href: "/modelling",
    icon: Sparkles,
    stats: "Runway • Luxury Commercial • Editorial Fashion",
    keywords: ["Editorial", "Runway", "Luxury Campaigns", "Representation"],
  },
];

interface PillarsGridProps {
  currentPillarId?: string;
  title?: string;
  subtitle?: string;
}

export const PillarsGrid = ({
  currentPillarId,
  title = "The Four Professional Pillars",
  subtitle = "A multifaceted career spanning executive leadership, competitive athletics, authorship, and high-fashion modelling based in Toronto, Canada.",
}: PillarsGridProps) => {
  const filtered = currentPillarId
    ? pillars.filter((p) => p.id !== currentPillarId)
    : pillars;

  return (
    <section className="py-16 md:py-24 section-padding bg-[#07090c] border-y border-border/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block archive-sans text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
            Archival Pillar Structure
          </div>
          <h2 className="archive-heading text-3xl md:text-5xl mb-4 font-normal">
            {title}
          </h2>
          <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            {subtitle}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${filtered.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
          {filtered.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between bg-card/70 border border-border/80 hover:border-gold/60 p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-secondary/80 border border-border flex items-center justify-center text-gold mb-6 group-hover:border-gold transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="archive-sans text-[11px] uppercase tracking-widest text-gold block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="archive-heading text-2xl font-normal text-primary mb-3 group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-serif text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-border/60 mb-5 flex flex-wrap gap-1.5">
                    {pillar.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] archive-sans px-2 py-0.5 bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={pillar.href}
                    className="inline-flex items-center gap-2 text-xs archive-sans tracking-widest uppercase text-foreground group-hover:text-gold transition-colors font-medium"
                  >
                    <span>Explore Pillar Section</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsGrid;
