import { useState } from "react";
import { Maximize2, CheckCircle2 } from "lucide-react";
import { LightboxData } from "./LightboxModal";

interface UncroppedPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  catalogId?: string;
  year?: string;
  category?: string;
  dimensions?: string;
  maxHeightClass?: string;
  className?: string;
  showCaption?: boolean;
  onOpenLightbox?: (data: LightboxData) => void;
}

export const UncroppedPhoto = ({
  src,
  alt,
  caption,
  catalogId,
  year,
  category,
  dimensions,
  maxHeightClass = "max-h-[580px]",
  className = "",
  showCaption = true,
  onOpenLightbox,
}: UncroppedPhotoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        src,
        alt,
        caption,
        catalogId,
        year,
        category,
        dimensions,
      });
    }
  };

  return (
    <figure
      className={`group relative flex flex-col bg-card/60 border border-border/80 hover:border-gold/50 transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Archival Matte Container - Strictly non-cropping, non-stretching */}
      <div
        onClick={handleClick}
        className="relative w-full p-2 sm:p-3 bg-[#0d0f14] flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* Subtle grid matte background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* 
          CRITICAL IMAGE CONFIGURATION:
          1. object-contain guarantees 100% of the image is shown without cutting any pixel.
          2. max-w-full and max-h-[...] prevents overflow.
          3. w-auto and h-auto guarantees the browser renders the authentic natural aspect ratio without any distortion or stretching.
        */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-auto h-auto max-w-full ${maxHeightClass} object-contain mx-auto select-none transition-transform duration-500 group-hover:scale-[1.01]`}
        />

        {/* Hover Action Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2 transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black/70 border border-gold/70 text-gold flex items-center justify-center shadow-lg">
            <Maximize2 className="w-4 h-4" />
          </div>
          <span className="text-[11px] archive-sans tracking-widest uppercase text-white/90 font-medium">
            View Fullscope Photograph
          </span>
        </div>

        {/* Uncropped Proportion Assurance Badge */}
        <div className="absolute bottom-2 left-2 z-10 hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-black/70 border border-border/80 text-[10px] text-muted-foreground archive-sans tracking-wider backdrop-blur-sm pointer-events-none">
          <CheckCircle2 className="w-3 h-3 text-gold/80" />
          <span>Full Original Proportions</span>
        </div>

        {catalogId && (
          <div className="absolute top-2 right-2 z-10 px-2 py-0.5 bg-black/70 border border-border/80 text-[10px] text-gold/90 archive-sans tracking-widest backdrop-blur-sm pointer-events-none">
            {catalogId}
          </div>
        )}
      </div>

      {/* Caption & Archival Notes */}
      {showCaption && (caption || category || year) && (
        <figcaption className="p-3 sm:p-4 border-t border-border/60 bg-secondary/20 flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-serif text-foreground/90 font-normal text-sm">
              {caption || alt}
            </span>
            {category && (
              <span className="text-[10px] uppercase tracking-widest text-gold archive-sans">
                {category}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground archive-sans mt-0.5">
            <span>{year ? `Circa ${year}` : "Digital Archive Accession"}</span>
            <button
              onClick={handleClick}
              className="text-gold/90 hover:text-white transition-colors underline underline-offset-2 text-[11px]"
            >
              Expand Uncropped
            </button>
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default UncroppedPhoto;
