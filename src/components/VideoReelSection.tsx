import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import videoBg from "@/assets/video-reel-bg.jpg";

const VideoReelSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 section-padding bg-background">
        <motion.div
          className="relative max-w-5xl mx-auto aspect-video cursor-pointer group overflow-hidden"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={videoBg}
            alt="Video reel preview"
            className="w-full h-full object-cover grayscale transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[0.97]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/60 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 border border-primary/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary/80">
              <Play className="w-6 h-6 text-primary ml-1" strokeWidth={1} />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Play Reel
            </span>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setIsOpen(false)}
          >
            <button
              className="absolute top-8 right-8 text-primary hover:text-muted-foreground transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" strokeWidth={1} />
            </button>
            <motion.div
              className="w-full max-w-4xl aspect-video bg-secondary flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
                Video Reel Coming Soon
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoReelSection;
