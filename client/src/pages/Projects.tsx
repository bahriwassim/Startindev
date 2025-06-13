import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowUp, Camera, Code, Star, TrendingUp } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Consulting",
      categoryColor: "bg-primary/10 text-primary",
      title: "Audit Digital Complet",
      description: "Accompagnement d'un groupe hôtelier dans l'optimisation de sa stratégie OTA et l'amélioration de ses performances de réservation directe.",
      result: "+45% de réservations directes",
      icon: <ArrowUp className="text-secondary" size={16} />
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Studio",
      categoryColor: "bg-primary/10 text-primary",
      title: "Shooting Photographique Premium",
      description: "Production complète de visuels pour un hôtel boutique, incluant espaces communs, chambres et prestations. Direction artistique et retouche professionnelle.",
      result: "120+ visuels produits",
      icon: <Camera className="text-secondary" size={16} />
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Tech",
      categoryColor: "bg-primary/10 text-primary",
      title: "Site Web & Intégration PMS",
      description: "Développement d'un site vitrine avec tunnel de réservation intégré et connexion au système de gestion hôtelière existant.",
      result: "Conversion +28%",
      icon: <Code className="text-secondary" size={16} />
    },
    {
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "360°",
      categoryColor: "bg-secondary/10 text-secondary",
      title: "Projet Complet Multi-Services",
      description: "Intervention complète combinant audit stratégique, production de contenu visuel et développement technique pour un resort 5 étoiles.",
      result: "Approche 360°",
      icon: <Star className="text-secondary" size={16} />
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Consulting",
      categoryColor: "bg-primary/10 text-primary",
      title: "Optimisation Performance OTA",
      description: "Audit et optimisation complète de la présence sur les plateformes de réservation pour une chaîne hôtelière régionale.",
      result: "+62% visibilité OTA",
      icon: <TrendingUp className="text-secondary" size={16} />
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      category: "Studio",
      categoryColor: "bg-primary/10 text-primary",
      title: "Vidéo Immersive & Drone",
      description: "Création d'une visite virtuelle complète et de contenus aériens pour un complexe hôtelier en bord de mer.",
      result: "Contenus immersifs",
      icon: <Camera className="text-secondary" size={16} />
    }
  ];

  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à transformer leur présence digitale 
            et optimiser leurs performances
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={project.categoryColor}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-neutral-dark mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-medium mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center font-medium text-secondary">
                      {project.icon}
                      <span className="ml-2">{project.result}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Zishop Highlight */}
        <AnimatedSection delay={0.8}>
          <div className="gradient-bg rounded-3xl p-12 text-white text-center">
            <Star className="mx-auto mb-6 text-yellow-300" size={48} />
            <h3 className="text-3xl font-bold mb-6">Projet Zishop - Coming Soon</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Notre plateforme innovante de mise en relation entre hôtels et commerces locaux. 
              Une solution qui révolutionne l'expérience client et crée de nouvelles opportunités de revenus 
              pour l'écosystème hôtelier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 px-6 py-3 rounded-lg font-medium flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-yellow-300 rounded-full mr-3"
                />
                En développement
              </div>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
                  Être notifié du lancement
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Case Studies Section */}
        <AnimatedSection delay={1} className="mt-20">
          <div className="bg-neutral-light rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
              Études de cas détaillées
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-lg text-neutral-dark font-medium mb-2">Hôtels accompagnés</div>
                <div className="text-neutral-medium">Établissements de toutes tailles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-lg text-neutral-dark font-medium mb-2">Visuels produits</div>
                <div className="text-neutral-medium">Photos et vidéos professionnelles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-lg text-neutral-dark font-medium mb-2">Solutions techniques</div>
                <div className="text-neutral-medium">Sites web et intégrations</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={1.2}>
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-neutral-dark mb-6">
              Votre projet sera le prochain ?
            </h3>
            <p className="text-xl text-neutral-medium mb-8 max-w-3xl mx-auto">
              Rejoignez nos clients satisfaits et transformez votre présence digitale avec nos experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4">
                  Démarrer votre projet
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="font-semibold px-8 py-4">
                  En savoir plus sur nous
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
