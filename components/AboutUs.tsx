import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section id="about" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

                    {/* Image Section (Sticky on larger screens) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-5/12 relative lg:sticky lg:top-32"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2574&auto=format&fit=crop"
                                alt="L'équipe Optima"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-obsidian/20 hover:bg-transparent transition-colors duration-500" />
                        </div>
                        {/* Border Accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-gold/30 z-[-1]" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-gold/30 z-[-1]" />
                    </motion.div>

                    {/* Text Section */}
                    <div className="w-full lg:w-7/12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6 block"
                        >
                            Qui sommes-nous
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-offwhite mb-12 leading-tight"
                        >
                            Notre <span className="italic text-gold opacity-90">Histoire</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-12 text-offwhite/80 font-sans font-light text-lg leading-relaxed"
                        >
                            {/* Intro */}
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-4">L'idée n’est pas née autour d’un bureau.</h3>
                                <p className="mb-4">Elle est née sur le terrain.</p>
                                <p className="mb-4">
                                    À Lyon, ville de passage, de découvertes et de rencontres, nous avons vu défiler des voyageurs du monde entier. Certains émerveillés. D’autres déçus.
                                    Et surtout, nous avons rencontré des propriétaires passionnés… mais épuisés.
                                </p>
                                <ul className="list-none space-y-2 pl-4 border-l border-gold/30 italic text-offwhite/60 mb-6">
                                    <li>Des clés à récupérer tard le soir.</li>
                                    <li>Des messages à 2h du matin.</li>
                                    <li>Des ménages à contrôler entre deux réservations.</li>
                                    <li>La peur d’un mauvais commentaire qui tombe sans prévenir.</li>
                                </ul>
                                <p className="font-medium text-white">
                                    Petit à petit, une question s’est imposée : <br />
                                    <span className="italic text-gold">Et si louer son logement ne devait plus être une contrainte, mais une fierté ?</span>
                                </p>
                            </div>

                            <motion.div
                                initial={false}
                                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-12">
                                    {/* La naissance */}
                                    <div className="pt-8">
                                        <h3 className="text-2xl font-serif text-white mb-4">La naissance de la conciergerie</h3>
                                        <p className="mb-4">
                                            Nous venons de la gestion de projet. Habitués à organiser, structurer, anticiper, améliorer.
                                        </p>
                                        <p className="mb-4">
                                            Alors naturellement, nous avons commencé par aider. Un ami. Puis un voisin. Puis plusieurs propriétaires.
                                            Chaque logement était traité comme un projet à part entière. Chaque voyageur comme un invité.
                                        </p>
                                        <p>
                                            Et les résultats ont parlé d’eux-mêmes : des séjours plus fluides, des voyageurs plus sereins, des propriétaires soulagés… et fiers de leur bien.
                                            La conciergerie est née de là : de l’envie de faire mieux, tout simplement.
                                        </p>
                                    </div>

                                    {/* Raison d'être */}
                                    <div>
                                        <h3 className="text-2xl font-serif text-white mb-4">Notre raison d’être</h3>
                                        <p className="mb-6">Nous croyons profondément que :</p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold">👉</span> Un logement raconte une histoire
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold">👉</span> Un voyage commence dès l’arrivée
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold">👉</span> Et une bonne gestion change tout
                                            </li>
                                        </ul>
                                        <p>
                                            Notre mission est de créer un pont de confiance entre les propriétaires et leurs voyageurs.
                                            De prendre soin des logements comme s’ils étaient les nôtres.
                                            Et d’offrir une expérience humaine, chaleureuse et professionnelle à chaque séjour.
                                        </p>
                                    </div>

                                    {/* L'équipe */}
                                    <div>
                                        <h3 className="text-2xl font-serif text-white mb-4">Une équipe, une même vision</h3>
                                        <p className="mb-4">
                                            Nous sommes une équipe de terrain. Présente. Disponible. Engagée.
                                            Notre objectif n’est pas de gérer des centaines de logements anonymement.
                                            Notre objectif est de bien gérer, durablement.
                                        </p>
                                        <p className="mb-6">
                                            Chaque clé remise. Chaque message envoyé. Chaque détail comptabilisé.
                                            Parce que derrière chaque réservation, il y a :
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                            <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                                                <span className="block text-gold mb-2 text-xl font-serif">Un Propriétaire</span>
                                                <span className="text-sm text-white/50">qui nous fait confiance</span>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                                                <span className="block text-gold mb-2 text-xl font-serif">Un Voyageur</span>
                                                <span className="text-sm text-white/50">qui découvre une ville</span>
                                            </div>
                                            <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                                                <span className="block text-gold mb-2 text-xl font-serif">Une Réputation</span>
                                                <span className="text-sm text-white/50">à protéger</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="pt-8 border-t border-white/10">
                                        <h3 className="text-2xl font-serif text-gold mb-4">Plus qu’une conciergerie</h3>
                                        <p className="mb-4">
                                            Nous ne sommes pas qu’un service. Nous sommes des partenaires de confiance.
                                        </p>
                                        <p className="italic text-white/90 text-xl font-serif leading-relaxed">
                                            "Bienvenue dans une conciergerie née du terrain, pensée pour durer, et guidée par l’humain."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-8 text-gold uppercase tracking-[0.2em] text-xs font-semibold hover:text-white transition-colors border-b border-gold pb-1"
                            >
                                {isExpanded ? "Réduire" : "Lire notre histoire"}
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
