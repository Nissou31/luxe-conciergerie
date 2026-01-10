import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Qui sommes-nous', href: '#about' },
  { label: 'Service Signature', href: '#signature' },
  { label: 'La Différence', href: '#difference' },
  // { label: 'La Collection', href: '#collection' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent ${isScrolled
          ? 'py-4 bg-obsidian/80 backdrop-blur-md border-white/5'
          : 'py-8 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="z-50">
            <a href="#" className="flex flex-col text-offwhite uppercase font-serif tracking-widest leading-none">
              <span className="text-2xl">Optima</span>
              <span className="text-sm text-gold">Conciergerie</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300 font-sans text-offwhite/80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden z-50 text-offwhite hover:text-gold transition-colors"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl font-serif text-offwhite hover:text-gold transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 flex space-x-8 text-gold"
            >
              <Instagram className="cursor-pointer hover:text-offwhite transition-colors" />
              <Linkedin className="cursor-pointer hover:text-offwhite transition-colors" />
              <Mail className="cursor-pointer hover:text-offwhite transition-colors" />
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
