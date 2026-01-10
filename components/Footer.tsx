import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian pt-24 pb-12 border-t border-white/5 text-offwhite">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

        <div className="mb-12 text-center">
          <a href="#" className="text-3xl font-serif tracking-widest text-offwhite uppercase block mb-6">
            Optima Conciergerie
          </a>
          <p className="text-white/40 font-sans text-sm tracking-wide max-w-md mx-auto">
            La référence mondiale en gestion immobilière de luxe et services de conciergerie.
          </p>
        </div>

        {/* <div className="flex space-x-8 mb-16">
          <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} strokeWidth={1} /></a>
          <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} strokeWidth={1} /></a>
          <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} strokeWidth={1} /></a>
        </div> */}

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans uppercase tracking-wider">
          <p>&copy; 2025 Optima Conciergerie. Tous droits réservés.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            {/* <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a> */}
            <a href="https://portfolio.awahrani.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors lowercase tracking-normal">
              Site by Anes AMRI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
