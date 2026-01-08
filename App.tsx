import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SignatureReveal } from './components/SignatureReveal';
import { LuxeDifference } from './components/LuxeDifference';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-offwhite selection:bg-gold selection:text-obsidian overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <SignatureReveal />
        <LuxeDifference />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
