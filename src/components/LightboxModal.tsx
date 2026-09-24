import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, Info } from "lucide-react";

export interface LightboxData {
  src: string;
  alt: string;
  caption?: string;
  catalogId?: string;
  year?: string;
  category?: string;
  dimensions?: string;
}

interface LightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const LightboxModal = ({ data, onClose }: LightboxModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [showMeta, setShowMeta] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      setZoom(1);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Controls Bar */}
        <div
          className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-secondary/80 border border-border/80 rounded-sm px-3 py-1.5 backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
            className="p-1.5 text-muted-foreground hover:text-white transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs archive-sans text-muted-foreground px-1">{Math.round(zoom * 100)}%</span>
          <button
            onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
            className="p-1.5 text-muted-foreground hover:text-white transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowMeta((s) => !s)}
            className={`p-1.5 transition-colors ${showMeta ? "text-gold" : "text-muted-foreground hover:text-white"}`}
            title="Toggle Metadata"
            aria-label="Toggle Metadata"
          >
            <Info className="w-4 h-4" />
          </button>
          <div className="h-4 w-px bg-border mx-1" />
          <button
            onClick={onClose}
            className="p-1.5 text-muted-foreground hover:text-white transition-colors"
            title="Close Lightbox"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Archival Specification Banner */}
        <div className="absolute top-4 left-4 z-40 hidden sm:flex items-center gap-2 text-[11px] archive-sans tracking-widest text-muted-foreground uppercase bg-secondary/70 border border-border/60 px-3 py-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span>Archival View • 100% Uncropped Proportion</span>
        </div>

        {/* Image Display Area - ALWAYS object-contain, NEVER cropped */}
        <div
          className="relative max-w-full max-h-[88vh] flex items-center justify-center overflow-auto p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={data.src}
            alt={data.alt}
            style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
            className="max-h-[82vh] max-w-[92vw] w-auto h-auto object-contain transition-transform duration-200 select-none shadow-2xl border border-border/60 bg-black/40"
            draggable={false}
          />
        </div>

        {/* Metadata Footer Panel */}
        {showMeta && (
          <motion.div
            className="absolute bottom-4 inset-x-4 max-w-2xl mx-auto z-40 bg-card/90 border border-border/90 backdrop-blur-md p-4 rounded-sm shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2 mb-2">
              <span className="font-serif text-sm md:text-base text-primary font-normal">
                {data.caption || data.alt}
              </span>
              <div className="flex items-center gap-2 archive-sans text-[10px] uppercase tracking-wider text-gold">
                {data.category && <span className="border border-gold/40 px-2 py-0.5">{data.category}</span>}
                {data.catalogId && <span className="text-muted-foreground">{data.catalogId}</span>}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground archive-sans">
              <span>Status: Full Original Scope Visible (Uncropped)</span>
              <span>Stacey Soans Digital Encyclopedia &amp; Media Archive</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default LightboxModal;
