import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useRef, useState } from "react";
import { 
  ChartLine, 
  Lightbulb, 
  Handshake, 
  BarChart3, 
  Megaphone, 
  GraduationCap,
  Target,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  BookOpen,
  Zap,
  CheckCircle,
  Clock,
  Search,
  DollarSign,
  Smartphone,
  Monitor,
  Globe,
  Settings,
  Award,
  Star,
  MessageSquare,
  Calendar,
  MapPin,
  Eye
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

export default function Consulting() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const services = [
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Conseil stratégique digital",
      description: "Accompagnement stratégique pour définir votre roadmap digitale",
      color: "from-[#F2A541] to-[#2A2A72]",
      details: [
        "Audit complet de votre présence digitale actuelle",
        "Définition d'une stratégie digitale sur mesure",
        "Roadmap de déploiement avec priorités et timeline",
        "Analyse concurrentielle et benchmark sectoriel",
        "Définition des KPIs et tableaux de bord",
        "Accompagnement dans la conduite du changement"
      ]
    },
    {
      icon: <Handshake className="text-primary" size={24} />,
      title: "Renfort d'équipe et accompagnement sur site",
      description: "Intervention directe au sein de vos équipes",
      color: "from-[#105740] to-[#9EB7E5]",
      details: [
        "Consultants spécialisés intégrés à vos équipes",
        "Formation en situation réelle",
        "Accompagnement opérationnel quotidien",
        "Transfert de compétences et autonomisation",
        "Support technique et méthodologique",
        "Missions de 3 à 12 mois selon vos besoins"
      ]
    },
    {
      icon: <BarChart3 className="text-primary" size={24} />,
      title: "Audit de performance OTA / contenu",
      description: "Analyse complète de vos performances sur les plateformes",
      color: "from-[#BF3100] to-[#F2A541]",
      details: [
        "Analyse détaillée de vos performances sur Booking, Expedia, etc.",
        "Optimisation de votre contenu et tarification",
        "Audit de votre visibilité et positionnement",
        "Recommandations d'amélioration concrètes",
        "Suivi des performances et ROI",
        "Stratégies d'optimisation des commissions"
      ]
    },
    {
      icon: <Megaphone className="text-primary" size={24} />,
      title: "Mise en place de sponsoring & campagnes",
      description: "Stratégies de visibilité et campagnes marketing ciblées",
      color: "from-[#2A2A72] to-[#BF3100]",
      details: [
        "Stratégie de visibilité sur les OTA",
        "Campagnes publicitaires ciblées (Google Ads, Meta)",
        "Optimisation des budgets marketing",
        "A/B testing des créations publicitaires",
        "Suivi et analyse des performances",
        "Stratégies de remarketing et fidélisation"
      ]
    },
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Formation aux outils et leviers digitaux",
      description: "Sessions de formation personnalisées pour vos équipes",
      color: "from-[#9EB7E5] to-[#F2A541]",
      details: [
        "Formation sur les outils de gestion des OTA",
        "Maîtrise des stratégies de pricing dynamique",
        "Formation aux outils analytics et reporting",
        "Sessions sur les réseaux sociaux professionnels",
        "Formation aux bonnes pratiques digitales",
        "Certification et suivi post-formation"
      ]
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Performance du site direct",
      description: "Optimisation de la conversion et du référencement",
      color: "from-[#105740] to-[#BF3100]",
      details: [
        "Audit UX/UI et optimisation de l'expérience utilisateur",
        "Stratégie SEO pour améliorer la visibilité",
        "Optimisation du taux de conversion",
        "Mise en place d'outils d'analytics avancés",
        "Tests A/B sur les parcours de réservation",
        "Stratégies de fidélisation client"
      ]
    },
  ];

  const methodology = [
    {
      phase: "Phase 1",
      title: "Diagnostic & Audit",
      duration: "2-3 semaines",
      description: "Analyse complète de votre situation actuelle",
      activities: [
        "Audit de la présence digitale",
        "Analyse des performances OTA",
        "Étude de la concurrence",
        "Entretiens avec les équipes"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Stratégie & Roadmap",
      duration: "1-2 semaines",
      description: "Définition de la stratégie et du plan d'actions",
      activities: [
        "Définition des objectifs SMART",
        "Priorisation des actions",
        "Planning de déploiement",
        "Estimation des budgets"
      ]
    },
    {
      phase: "Phase 3",
      title: "Mise en œuvre",
      duration: "3-6 mois",
      description: "Accompagnement dans l'exécution du plan",
      activities: [
        "Pilotage des actions prioritaires",
        "Formation des équipes",
        "Mise en place des outils",
        "Suivi des performances"
      ]
    },
    {
      phase: "Phase 4",
      title: "Optimisation",
      duration: "Continu",
      description: "Amélioration continue et évolution",
      activities: [
        "Analyse des résultats",
        "Optimisations itératives",
        "Évolution de la stratégie",
        "Support et maintenance"
      ]
    }
  ];

  const expertises = [
    {
      icon: <Globe size={20} />,
      title: "Distribution digitale",
      description: "OTA, metasearch, direct booking"
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Revenue Management",
      description: "Pricing, yield management, forecasting"
    },
    {
      icon: <Search size={20} />,
      title: "Marketing digital",
      description: "SEO, SEM, social media, email marketing"
    },
    {
      icon: <Monitor size={20} />,
      title: "Technologies hôtelières",
      description: "PMS, CRM, outils de gestion"
    },
    {
      icon: <Users size={20} />,
      title: "Experience client",
      description: "UX/UI, parcours client, fidélisation"
    },
    {
      icon: <Settings size={20} />,
      title: "Transformation digitale",
      description: "Change management, processus, formation"
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
              <ChartLine size={16} />
              <span className="text-sm font-medium">Expertise stratégique</span>
            </motion.div>

            <img src="/assets/logo3.png" alt="Consulting Icon" style={{height:80, margin:'0 auto 24px'}} />

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              variants={itemVariants}
            >
              Renforcez votre structure digitale avec des experts métiers
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-medium mb-8"
              variants={itemVariants}
            >
              Start In Dev Consulting accompagne les hôtels et groupes hôteliers dans leurs projets digitaux 
              avec une approche sur mesure et opérationnelle. Notre expertise terrain et notre connaissance 
              des standards hôteliers font la différence.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Zap size={20} className="mr-2" />
                  Demander un audit gratuit
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
              Nos services de conseil détaillés
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Des expertises pointues pour accélérer votre transformation digitale
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
                      index === 0 ? '1460925895917-afdab827c52f' : 
                      index === 1 ? '1521737604893-d14cc237f11d' :
                      index === 2 ? '1551288049-4c9b4d5fdde9' :
                      index === 3 ? '1556742049-0c4b30e8c0b9' :
                      index === 4 ? '1523240795612-9a054b0db644' :
                      '1551434678-e076c223a692'
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

      {/* Methodology Section */}
      <motion.section 
        className="py-20 bg-neutral-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Notre méthodologie d'intervention
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de votre transformation digitale
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {methodology.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <div className="text-sm text-primary font-medium mb-2">{phase.phase}</div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                      {phase.title}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-primary mb-4">
                      <Clock size={14} />
                      {phase.duration}
                    </div>
                  </div>
                  <p className="text-neutral-medium mb-4 text-center">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-neutral-dark">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-primary/30 mx-auto" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Areas */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-xl text-neutral-medium">
              Des compétences spécialisées dans l'écosystème digital hôtelier
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {expertises.map((expertise, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-neutral-light"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {expertise.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-dark">
                    {expertise.title}
                  </h3>
                </div>
                <p className="text-neutral-medium">{expertise.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
                Pourquoi choisir Start In Dev Consulting ?
              </h2>
              <p className="text-lg text-neutral-medium mb-8">
                Notre expertise combinée à une approche pragmatique vous garantit 
                des résultats concrets et durables dans vos projets de transformation digitale.
              </p>
              <ul className="space-y-4">
                {[
                  "Expertise sectorielle reconnue dans l'hôtellerie",
                  "Approche pragmatique et orientée résultats", 
                  "Accompagnement personnalisé selon vos besoins",
                  "Consultants seniors avec expérience terrain",
                  "Méthodologie éprouvée et outils performants",
                  "Support continu et relation de confiance",
                  "ROI mesurable et amélioration des performances",
                  "Formation et transfert de compétences"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-neutral-dark"
                    variants={itemVariants}
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Star size={14} className="text-primary" />
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Consulting expertise"
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
              Prêt à optimiser votre présence digitale ?
            </motion.h2>

            <motion.p 
              className="text-xl text-neutral-medium mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Contactez-nous pour un audit express gratuit et découvrez comment nous pouvons 
              vous aider à atteindre vos objectifs.
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
