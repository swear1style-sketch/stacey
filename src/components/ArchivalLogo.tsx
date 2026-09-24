import { Link } from "react-router-dom";

interface ArchivalLogoProps {
  variant?: "header" | "footer" | "standalone";
  showTagline?: boolean;
}

export const ArchivalLogo = ({ variant = "header", showTagline = false }: ArchivalLogoProps) => {
  return (
    <Link to="/" className="group flex items-center gap-3.5 focus:outline-none" aria-label="Stacey Soans Digital Encyclopedia & Media Archive Home">
      {/* Distinct Archival Seal Emblem (Distinct from "S.S.") */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-sm bg-secondary/80 border border-gold/40 flex items-center justify-center p-1.5 shadow-sm group-hover:border-gold transition-colors duration-300">
        <svg viewBox="0 0 64 64" className="w-full h-full text-gold" fill="none">
          {/* Outer Archival Shield Border */}
          <rect x="4" y="4" width="56" height="56" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <rect x="8" y="8" width="48" height="48" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.75" />
          
          {/* Top Diamond Apex */}
          <path d="M32 10L36.5 16H27.5L32 10Z" fill="currentColor" />
          
          {/* Architectural Pillars & Archival Folio Lines */}
          <path d="M20 20H44" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 20V44" stroke="#ffffff" strokeWidth="1.25" strokeOpacity="0.9" />
          <path d="M40 20V44" stroke="#ffffff" strokeWidth="1.25" strokeOpacity="0.9" />
          <path d="M32 17V46" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="32" cy="27" r="2.5" fill="currentColor" />
          <path d="M18 45H46" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 48H49" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          
          {/* Four Pillar Corner Accents */}
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          <circle cx="52" cy="12" r="1.2" fill="currentColor" />
          <circle cx="12" cy="52" r="1.2" fill="currentColor" />
          <circle cx="52" cy="52" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {/* Typography - Times New Roman */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg md:text-xl tracking-[0.08em] font-normal text-primary group-hover:text-gold transition-colors duration-300">
            STACEY SOANS
          </span>
          <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.2em] px-1.5 py-0.5 border border-gold/40 text-gold/90 archive-sans">
            Archive
          </span>
        </div>
        <span className="archive-sans text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-muted-foreground group-hover:text-foreground/80 transition-colors">
          Digital Encyclopedia &amp; Media Archive
        </span>
        {showTagline && (
          <span className="archive-sans text-[9px] tracking-[0.12em] text-muted-foreground/80 mt-0.5 hidden lg:block">
            Toronto, Canada • HR • Golf • Author • Modelling
          </span>
        )}
      </div>
    </Link>
  );
};

export default ArchivalLogo;
