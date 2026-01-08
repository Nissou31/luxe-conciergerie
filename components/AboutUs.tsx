import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
    return (
        <section id="about" className="bg-obsidian py-24 md:py-32 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1551632436-cbf8e13f4b14?q=80&w=2574&auto=format&fit=crop"
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
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6 block"
                        >
                            Notre Vision
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-offwhite mb-8 leading-tight"
                        >
                            L'excellence <br />
                            <span className="italic text-gold opacity-90">sans compromis</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-offwhite/80 font-sans font-light text-lg leading-relaxed"
                        >
                            <p>
                                Chez Optima Conciergerie, nous redéfinissons les standards de la gestion immobilière de prestige. Nés d'une passion pour l'hospitalité et l'exigence, nous nous positionnons comme le partenaire de confiance des propriétaires qui ne visent rien de moins que la perfection.
                            </p>
                            <p>
                                Notre approche unique mêle technologie de pointe et savoir-faire traditionnel. Chaque détail est scruté, chaque demande anticipée. Nous ne gérons pas simplement des biens, nous cultivons un art de vivre où la sérénité du propriétaire et l'émerveillement de l'invité sont nos seules boussoles.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-10 pt-10 border-t border-white/10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                {/* <div>
                                    <span className="block text-3xl font-serif text-gold mb-1">100+</span>
                                    <span className="text-xs uppercase tracking-widest text-offwhite/50">Propriétés d'Exception</span>
                                </div> */}
                                <div>
                                    <span className="block text-3xl font-serif text-gold mb-1">24/7</span>
                                    <span className="text-xs uppercase tracking-widest text-offwhite/50">Engagement Total</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
