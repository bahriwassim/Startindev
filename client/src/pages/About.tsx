import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { History, Eye, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            À propos de Start In Dev Group
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Notre conviction : un digital utile, accessible et activable, pensé pour les réalités du terrain hôtelier
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <AnimatedSection delay={0.2}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Business consulting meeting" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-dark mb-4 flex items-center">
                  <History className="text-primary mr-3" size={28} />
                  Historique
                </h3>
                <p className="text-neutral-medium leading-relaxed">
                  Start In Dev est né de plusieurs années de missions menées au sein d'un grand groupe hôtelier 
                  international. Face à la complexité croissante des enjeux digitaux dans l'hôtellerie, 
                  nous avons structuré notre expertise autour de 3 pôles complémentaires.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-neutral-dark mb-4 flex items-center">
                  <Eye className="text-secondary mr-3" size={28} />
                  Vision
                </h3>
                <p className="text-neutral-medium leading-relaxed">
                  Notre conviction : un digital utile, accessible et activable, pensé pour les réalités du terrain hôtelier.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-neutral-dark mb-4 flex items-center">
                  <Users className="text-primary mr-3" size={28} />
                  Pourquoi "Group"
                </h3>
                <p className="text-neutral-medium leading-relaxed">
                  Pour rassembler des compétences distinctes au service d'un même objectif : 
                  la performance digitale des hôtels.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission Statement */}
        <AnimatedSection delay={0.6}>
          <div className="gradient-bg rounded-3xl p-12 text-center text-white">
            <Target className="mx-auto mb-6 text-white" size={48} />
            <h3 className="text-3xl font-bold mb-6">Notre mission</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Vous apporter de la clarté, de l'efficacité et des résultats concrets dans vos projets digitaux. 
              Que vous soyez un hôtel indépendant ou un groupe structuré, nous adaptons notre méthodologie 
              à votre environnement et à vos objectifs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">360°</div>
                <div className="text-lg">Approche complète</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-lg">Pôles d'expertise</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Hôtellerie</div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
