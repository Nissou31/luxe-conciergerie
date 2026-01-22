import React from 'react';
import { motion } from 'framer-motion';
import CalendlyEmbed from './CalendlyEmbed';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-offwhite py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian mb-4">Entrons en Contact</h2>
          <p className="text-gray-500 font-sans font-light">Nous vous invitons à découvrir la différence.</p>
        </div>

        <CalendlyEmbed url="https://calendly.com/conciergerie-optima/30min?hide_gdpr_banner=1" />
      </div >
    </section >
  );
};
