import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BarChart3, Clock } from 'lucide-react';
import { ServiceDetail } from '../types';

const services: ServiceDetail[] = [
  {
    id: 'styling',
    title: 'Design d\'Intérieur',
    description: 'Une curation intérieure impeccable qui rehausse la valeur esthétique de votre propriété, attirant une clientèle de haut standing.',
    icon: 'Sparkles'
  },
  {
    id: 'pricing',
    title: 'Tarification Intelligente',
    description: 'Des stratégies de tarification dynamique algorithmique qui s\'adaptent instantanément à la demande, à la saisonnalité et aux événements locaux.',
    icon: 'BarChart3'
  },
  {
    id: 'support',
    title: 'Support 24/7',
    description: 'Un dévouement 24h/24 pour la tranquillité d\'esprit des propriétaires et la satisfaction des invités. Nous veillons pour que vous puissiez dormir.',
    icon: 'Clock'
  }
];

export const LuxeDifference: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceDetail>(services[0]);

  return (
    <section id="difference" className="bg-obsidian py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Static Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-serif text-offwhite mb-8">
            L'Art de <br />
            <span className="text-gold italic">l'Hospitalité</span>
          </h2>
          <p className="text-offwhite/60 font-sans font-light text-lg mb-12 max-w-md leading-relaxed">
            Nous ne nous contentons pas de gérer des propriétés ; nous créons des expériences.
            Notre distinction réside dans le mélange harmonieux d'un service haut de gamme
            et d'une technologie de pointe.
          </p>

          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`text-left py-4 px-6 border-l-[1px] transition-all duration-300 ${activeService.id === service.id
                    ? 'border-gold text-white bg-white/5'
                    : 'border-white/10 text-white/40 hover:text-white/70'
                  }`}
              >
                <span className="font-serif text-xl tracking-wide">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Card */}
        <div className="h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-offwhite p-12 flex flex-col justify-center items-start shadow-2xl"
              style={{
                background: `linear-gradient(135deg, rgba(253,252,251,0.05) 0%, rgba(253,252,251,0.02) 100%)`,
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-8 p-4 bg-gold/10 rounded-full inline-block">
                {activeService.id === 'styling' && <Sparkles className="text-gold w-8 h-8" />}
                {activeService.id === 'pricing' && <BarChart3 className="text-gold w-8 h-8" />}
                {activeService.id === 'support' && <Clock className="text-gold w-8 h-8" />}
              </div>

              <h3 className="text-3xl font-serif text-offwhite mb-6">
                {activeService.title}
              </h3>

              <p className="text-offwhite/70 font-sans font-light leading-relaxed">
                {activeService.description}
              </p>

              <div className="mt-8 w-12 h-[1px] bg-gold" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
