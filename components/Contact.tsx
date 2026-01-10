import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-offwhite py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Entrons en Contact</h2>
          <p className="text-gray-500 font-sans font-light">Nous vous invitons à découvrir la différence.</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-gray-500 font-sans font-light text-lg max-w-2xl mx-auto mb-8 text-center">
            Discutons de votre projet et découvrez comment nous pouvons maximiser vos revenus.
            Réservez directement votre créneau ci-dessous.
          </p>

          {/* CALENDLY BUTTON/INTEGRATION */}
          {/* Replace the button below with your Calendly embed code or link */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Lien Calendly à configurer")}
            className="bg-obsidian text-gold border border-gold px-12 py-5 font-serif text-lg uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-xl"
          >
            Réserver un Appel Découverte
          </motion.button>

          {/* 
              Instructions:
              1. Once you have your Calendly embed code.
              2. If it's a popup, keep the button above and add the onClick handler from Calendly.
              3. If it's an inline widget, replace the button above with the <div> provided by Calendly.
            */}
        </div>
      </div >
    </section >
  );
};
