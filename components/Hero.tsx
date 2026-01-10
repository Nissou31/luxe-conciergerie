import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const heroImages = [
  "/hero-images/unnamed.png",
  "/hero-images/unnamed.jpg",
  "/hero-images/unnamed-2.jpg",
  "/hero-images/unnamed-3.jpg",
  "/hero-images/unnamed-4.jpg"
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Ken Burns Effect and Slider */}
      <div className="absolute inset-0 z-0 bg-obsidian">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentImage]}
              alt={`Lyon Luxury ${currentImage}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-obsidian/40 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0A_90%)] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-offwhite leading-tight mb-8"
        >
          Redéfinir <br />
          <span className="italic text-gold/90">L'Art de Vivre</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-offwhite/80 font-sans font-light max-w-xl mx-auto leading-relaxed"
        >
          Un service de conciergerie exclusif pour une élite distinguée.
          Une gestion immobilière sur mesure, adaptée à vos exigences les plus élevées.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-offwhite/60">Défiler</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MousePointer2 className="text-gold w-6 h-6" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};
