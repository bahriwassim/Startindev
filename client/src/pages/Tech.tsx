import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Code, 
  Globe, 
  Plug, 
  ShoppingCart, 
  Rocket,
  Star,
  Zap,
  Database,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Smartphone,
  Search,
  CreditCard,
  BarChart3,
  Settings,
  Wifi,
  Monitor
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Tech() {
  const services = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Création de site vitrine / pages dédiées à la conversion",
      description: "Sites web optimisés pour maximiser les réservations directes",
      details: [
        "Design responsive adapté à tous les appareils",
        "Optimisation SEO pour améliorer la visibilité",
        "Intégration de systèmes de réservation en ligne",
        "Analyse des parcours utilisateurs et optimisation des conversions",
        "Gestionnaire de contenu intuitif pour les équipes",
        "Temps de chargement optimisés pour une meilleure expérience"
      ]
    },
    {
      icon: <Plug className="text-primary" size={24} />,
      title: "Intégration PMS / extranet",
      description: "Connexion seamless avec vos systèmes de gestion existants",
      details: [
        "Synchronisation automatique des disponibilités et tarifs",
        "APIs sécurisées pour l'échange de données",
        "Intégration avec les principaux PMS du marché (Opera, Protel, Fidelio)",
        "Gestion centralisée des réservations multi-canaux",
        "Mise à jour en temps réel des informations",
        "Support technique dédié pour la configuration"
      ]
    },
    {
      icon: <ShoppingCart className="text-primary" size={24} />,
      title: "Tunnel de réservation / page événement",
      description: "Processus de réservation optimisé pour la conversion",
      details: [
        "Interface intuitive pour réduire l'abandon de panier",
        "Paiement sécurisé multi-devises",
        "Gestion des promotions et codes de réduction",
        "Options de personnalisation pour les événements spéciaux",
        "Suivi des performances et analytics détaillés",
        "Tests A/B pour optimiser les taux de conversion"
      ]
    },
    {
      icon: <Rocket className="text-primary" size={24} />,
      title: "Développement de projets internes innovants",
      description: "Solutions propriétaires comme notre plateforme Zishop",
      details: [
        "Développement d'applications métier sur mesure",
        "Solutions SaaS pour l'hôtellerie",
        "Plateformes de gestion des services internes",
        "Outils d'automatisation des processus",
        "Solutions mobiles pour le personnel",
        "Innovation continue avec les dernières technologies"
      ]
    }
  ];

  const technologies = [
    { name: "React & Next.js", icon: <Code size={16} />, description: "Interfaces modernes et performantes" },
    { name: "Node.js & Express", icon: <Database size={16} />, description: "Backend robuste et scalable" },
    { name: "API REST & GraphQL", icon: <Wifi size={16} />, description: "Communication efficace entre services" },
    { name: "Bases de données SQL/NoSQL", icon: <Database size={16} />, description: "Stockage optimisé des données" },
    { name: "Cloud AWS/Azure", icon: <Settings size={16} />, description: "Infrastructure cloud sécurisée" },
    { name: "Intégrations PMS", icon: <Plug size={16} />, description: "Connexions système hôtelier" },
    { name: "Paiements sécurisés", icon: <CreditCard size={16} />, description: "Stripe, PayPal, solutions bancaires" },
    { name: "Analytics & SEO", icon: <BarChart3 size={16} />, description: "Suivi performance et référencement" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse des besoins",
      description: "Audit de votre situation actuelle et définition des objectifs",
      duration: "1-2 semaines"
    },
    {
      step: "02", 
      title: "Conception technique",
      description: "Architecture de la solution et maquettage des interfaces",
      duration: "2-3 semaines"
    },
    {
      step: "03",
      title: "Développement",
      description: "Codage, tests et intégration des fonctionnalités",
      duration: "4-8 semaines"
    },
    {
      step: "04",
      title: "Déploiement & formation",
      description: "Mise en production et formation de vos équipes",
      duration: "1-2 semaines"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-gradient-to-b from-primary/5 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
              variants={itemVariants}
            >
              <Code size={16} />
              <span className="text-sm font-medium">Solutions digitales</span>
            </motion.div>

            <img src="/assets/logo1.png" alt="Tech Icon" style={{height:80, margin:'0 auto 24px'}} />

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              variants={itemVariants}
            >
              Des outils simples, activables, pensés pour l'hôtellerie
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-medium mb-8"
              variants={itemVariants}
            >
              Start In Dev Tech conçoit des solutions digitales utiles et pragmatiques : site vitrine, 
              page de vente, tunnel de conversion, intégration avec les PMS ou outils de gestion hôtelière.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Zap size={20} className="mr-2" />
                  Demander une démo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Services Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Nos services techniques détaillés
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Des solutions complètes adaptées aux besoins spécifiques de l'industrie hôtelière
            </p>
          </motion.div>

          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                variants={itemVariants}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-medium mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-dark">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1551434678-e076c223a692' : 
                      index === 1 ? '1460925895917-afdab827c52f' :
                      index === 2 ? '1556742049-0c4b30e8c0b9' :
                      '1519389950473-47ba0277781c'
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                    alt={service.title}
                    className="rounded-xl shadow-xl w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section 
        className="py-20 bg-neutral-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Technologies et expertises
            </h2>
            <p className="text-xl text-neutral-medium">
              Notre stack technique pour des solutions performantes et évolutives
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-neutral-dark">{tech.name}</h3>
                </div>
                <p className="text-sm text-neutral-medium">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Notre processus de développement
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-medium mb-3">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-sm text-primary">
                    <Clock size={14} />
                    {step.duration}
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-primary/30 mx-auto" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-neutral-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Une approche centrée sur vos besoins
              </h2>
              <p className="text-lg text-neutral-medium mb-8">
                Nous nous concentrons sur l'essentiel : livrer rapidement une solution fonctionnelle, 
                claire, adaptée aux attentes clients et aux contraintes techniques de l'hôtel.
              </p>
              <ul className="space-y-4">
                {[
                  "Développement rapide et efficace",
                  "Solutions sur mesure",
                  "Support technique réactif",
                  "Formation et documentation",
                  "Maintenance et évolutions",
                  "Sécurité et conformité RGPD"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-neutral-dark"
                    variants={itemVariants}
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Tech solutions"
                className="rounded-xl shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6"
              variants={itemVariants}
            >
              Prêt à digitaliser votre hôtel ?
            </motion.h2>

            <motion.p 
              className="text-xl text-neutral-medium mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Contactez-nous pour une démonstration de nos solutions et découvrez comment 
              nous pouvons vous aider à optimiser votre présence digitale.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <ArrowRight size={20} className="mr-2" />
                  Contactez-nous
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
