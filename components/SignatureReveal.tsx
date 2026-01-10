import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

// Data structure with images and detailed points
const services = [
  {
    id: 1,
    title: "Mise en marché & Valorisation",
    shortDesc: "Photos professionnelles, rédaction de l'annonce, optimisation du prix...",
    fullDesc: "Nous sublimons votre propriété pour capter l'attention instantanément. Une présentation irréprochable est la clé d'un taux d'occupation maximal.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    points: [
      "Création et structuration de l’annonce sur les plateformes",
      "Shooting photo professionnel orienté réservation",
      "Rédaction de descriptifs clairs et attractifs",
      "Optimisation tarifaire selon la demande et la saison",
      "Positionnement adapté aux voyageurs business et family"
    ]
  },
  {
    id: 2,
    title: "Gestion Voyageurs",
    shortDesc: "Communication 7j/7, filtrage des voyageurs, assistance complète...",
    fullDesc: "Une réactivité exceptionnelle pour satisfaire vos invités. Nous gérons chaque interaction avec professionnalisme et courtoisie.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
    points: [
      "Gestion complète des échanges voyageurs",
      "Réponses rapides avant, pendant et après le séjour",
      "Organisation et suivi du planning des réservations",
      "Coordination des demandes spécifiques",
      "Objectif avis positifs et voyageurs fiables"
    ]
  },
  {
    id: 3,
    title: "Check-in & Check-out",
    shortDesc: "Accueil personnalisé, vérification d'identité, état des lieux...",
    fullDesc: "La première et la dernière impression sont cruciales. Nous assurons des arrivées et des départs fluides et sécurisés.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
    points: [
      "Accueil autonome ou en présentiel selon le logement",
      "Instructions d’accès simples et sécurisées",
      "Gestion des arrivées tardives et départs anticipés",
      "Vérification du logement après chaque séjour"
    ]
  },
  {
    id: 4,
    title: "Ménage & Linge",
    shortDesc: "Qualité hôtelière 5 étoiles, blanchisserie professionnelle...",
    fullDesc: "Une propreté sans compromis. Nos équipes de nettoyage suivent des protocoles stricts pour garantir un standard hôtelier constant.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop", // Stack of clean towels/bedding
    points: [
      "Ménage professionnel après chaque départ",
      "Gestion complète du linge (draps & serviettes)",
      "Réassort des consommables essentiels",
      "Protocole qualité et contrôle régulier"
    ]
  },
  {
    id: 5,
    title: "Maintenance & Suivi",
    shortDesc: "Interventions rapides, réparations, surveillance régulière...",
    fullDesc: "Votre bien reste impeccable. Nous intervenons proactivement pour maintenir la valeur de votre investissement.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2532&auto=format&fit=crop", // Clean tools/hardware detail
    points: [
      "Gestion des petites réparations",
      "Intervention rapide en cas d’incident",
      "Surveillance de l’état général du bien",
      "Coordination avec artisans partenaires"
    ]
  },
  {
    id: 6,
    title: "Sécurité & Sérénité",
    shortDesc: "Contrôle des cautions, assurance, tranquillité d'esprit...",
    fullDesc: "Dormez sur vos deux oreilles. Nous mettons en place toutes les mesures nécessaires pour protéger votre patrimoine.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Peaceful modern office/home for security/serenity
    points: [
      "Sélection des voyageurs",
      "Suivi des cautions et garanties",
      "Signalement des anomalies",
      "Accompagnement et conseils continus"
    ]
  }
];

export const SignatureReveal: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="signature" className="bg-obsidian py-32 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 relative z-10">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">Notre Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-offwhite mt-4 mb-6">Services Signature</h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="relative group mt-12">
              {/* Card Container simulating the border frame */}
              <div className="relative border border-white/20 p-8 pt-24 pb-12 flex flex-col items-center text-center h-full transition-colors duration-500 hover:border-gold/50 bg-obsidian">

                {/* Floating Image */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-offwhite mb-6 mt-4">
                  {service.title.split(' & ').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-gold italic"> & </span>}
                    </span>
                  ))}
                </h3>

                <div className="w-8 h-[2px] bg-gold mb-6" />

                <p className="text-offwhite/60 font-sans font-light text-sm leading-relaxed mb-8 flex-grow">
                  {service.shortDesc}
                </p>

                {/* Button overlapping bottom border */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white transition-colors duration-300 shadow-lg whitespace-nowrap"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-obsidian w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm border border-white/10 relative flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image (Left) */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content (Right) */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-2">
                  <div className="w-12 h-1 bg-gold mb-6" />
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-offwhite mb-6">
                  {selectedService.title}
                </h3>

                <p className="text-offwhite/80 font-sans text-lg mb-8 leading-relaxed font-light">
                  {selectedService.fullDesc}
                </p>

                <ul className="space-y-4">
                  {selectedService.points.map((point, i) => (
                    <li key={i} className="flex items-start text-offwhite/60 font-sans font-light">
                      <span className="mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-12 self-start flex items-center gap-2 text-gold uppercase tracking-widest text-xs hover:text-white transition-colors group"
                >
                  Contactez-nous <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
