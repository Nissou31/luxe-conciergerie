import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  "Gestion complète des invités",
  "Optimisation dynamique des revenus",
  "Coordination du ménage professionnel",
  "Gestion des annonces",
  "Portail propriétaire accessible 24h/7"
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-obsidian py-32 flex justify-center items-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 relative z-10">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">Transparence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-offwhite mt-4 mb-6">Nos Tarifs</h2>
          <p className="text-offwhite/60 font-sans font-light max-w-lg mx-auto">
            Des formules simples et sans engagement, adaptées à vos besoins de gestion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formule Distance (Standard) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-white/10 p-12 md:p-16 relative text-center bg-white/5 hover:bg-white/[0.07] transition-colors duration-500 rounded-sm"
          >
            <h3 className="text-offwhite font-serif text-2xl mb-2">Gestion à Distance</h3>
            <p className="text-gold/80 mb-8 font-sans text-xs tracking-widest uppercase">Boîtier à clés & Autonomie</p>

            <div className="flex justify-center items-baseline mb-8">
              <span className="text-6xl md:text-7xl font-serif text-gold">20</span>
              <div className="flex flex-col items-start ml-2">
                <span className="text-2xl text-gold">%</span>
                <span className="text-offwhite/40 text-[10px] uppercase tracking-wider">Commission</span>
              </div>
            </div>

            <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8" />

            <ul className="space-y-4 text-left mx-auto mb-12 max-w-xs">
              {benefits.slice(0, 4).map((benefit, i) => (
                <li key={i} className="flex items-center text-offwhite/70 font-sans font-light text-sm">
                  <Check className="text-gold w-4 h-4 mr-3 flex-shrink-0" strokeWidth={1} />
                  {benefit}
                </li>
              ))}
              <li className="flex items-center text-offwhite/70 font-sans font-light text-sm">
                <Check className="text-gold w-4 h-4 mr-3 flex-shrink-0" strokeWidth={1} />
                Check-in/out via boîtier
              </li>
            </ul>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/20 text-offwhite px-8 py-3 uppercase text-xs tracking-[0.2em] hover:bg-gold hover:border-gold hover:text-obsidian transition-all duration-300 w-full"
            >
              Choisir
            </button>
          </motion.div>

          {/* Formule Physique (Recommandée) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-gold p-12 md:p-16 relative text-center bg-obsidian shadow-2xl shadow-gold/5 rounded-sm"
          >
            {/* Decorative corners for Premium feel */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold" />

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-obsidian px-4 py-1 text-[10px] uppercase tracking-widest font-bold">
              Recommandé
            </div>

            <h3 className="text-offwhite font-serif text-2xl mb-2">Gestion Complète</h3>
            <p className="text-gold mb-8 font-sans text-xs tracking-widest uppercase">Accueil Physique & Premium</p>

            <div className="flex justify-center items-baseline mb-8">
              <span className="text-6xl md:text-7xl font-serif text-gold">25</span>
              <div className="flex flex-col items-start ml-2">
                <span className="text-2xl text-gold">%</span>
                <span className="text-offwhite/40 text-[10px] uppercase tracking-wider">Commission</span>
              </div>
            </div>

            <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-8" />

            <ul className="space-y-4 text-left mx-auto mb-12 max-w-xs">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-offwhite/90 font-sans font-light text-sm">
                  <Check className="text-gold w-4 h-4 mr-3 flex-shrink-0" strokeWidth={1} />
                  {benefit}
                </li>
              ))}
              <li className="flex items-center text-offwhite/90 font-sans font-light text-sm font-medium">
                <Check className="text-gold w-4 h-4 mr-3 flex-shrink-0" strokeWidth={1} />
                Check-in/out Présentiel
              </li>
            </ul>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold border border-gold text-obsidian px-8 py-3 uppercase text-xs tracking-[0.2em] hover:bg-white hover:border-white transition-all duration-300 w-full font-semibold"
            >
              Choisir
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
