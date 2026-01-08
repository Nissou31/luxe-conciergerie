import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Property } from '../types';

const properties: Property[] = [
  { id: '1', title: 'Villa Azure', location: 'Cannes, France', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop' },
  { id: '2', title: 'The Penthouse', location: 'Monaco', image: 'https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=2675&auto=format&fit=crop' },
  { id: '3', title: 'Chalet Blanc', location: 'Courchevel, France', image: 'https://images.unsplash.com/photo-1513584685908-fce87a2bad6f?q=80&w=2670&auto=format&fit=crop' },
  { id: '4', title: 'Estate 88', location: 'Saint-Tropez', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop' },
];

export const Portfolio: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="collection" className="bg-offwhite py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <span className="text-gold uppercase tracking-widest text-xs font-semibold">Notre Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian mt-4">La Collection</h2>
        </div>
        <div className="hidden md:block text-obsidian/40 font-sans text-sm">
          Glissez pour explorer
        </div>
      </div>

      <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing pl-6 md:pl-12">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="min-w-[300px] md:min-w-[500px] h-[500px] relative group overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />

              {/* Glassmorphic Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-obsidian/80 to-transparent">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6">
                  <h3 className="text-2xl font-serif text-white mb-1">{property.title}</h3>
                  <p className="text-gold font-sans text-sm tracking-wide uppercase">{property.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
