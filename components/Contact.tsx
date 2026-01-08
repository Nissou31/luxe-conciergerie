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

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="Nom"
                className="w-full bg-transparent border-b border-gray-300 py-4 text-obsidian focus:outline-none focus:border-gold transition-colors duration-300 font-serif text-lg placeholder:font-sans placeholder:text-gray-400"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Adresse Email"
                className="w-full bg-transparent border-b border-gray-300 py-4 text-obsidian focus:outline-none focus:border-gold transition-colors duration-300 font-serif text-lg placeholder:font-sans placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="relative group">
            <input
              type="text"
              placeholder="Localisation de la Propriété"
              className="w-full bg-transparent border-b border-gray-300 py-4 text-obsidian focus:outline-none focus:border-gold transition-colors duration-300 font-serif text-lg placeholder:font-sans placeholder:text-gray-400"
            />
          </div>

          <div className="relative group">
            <textarea
              rows={4}
              placeholder="Parlez-nous de vos besoins"
              className="w-full bg-transparent border-b border-gray-300 py-4 text-obsidian focus:outline-none focus:border-gold transition-colors duration-300 font-serif text-lg placeholder:font-sans placeholder:text-gray-400 resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-obsidian text-offwhite px-12 py-4 font-sans text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Demander une Consultation
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};
