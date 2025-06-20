import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useRef } from "react";
import { 
  Camera, 
  Video, 
  Smartphone, 
  Palette, 
  Wand2, 
  Upload,
  Users,
  Bed,
  Play,
  Award,
  Sparkles,
  ArrowRight,
  Zap,
  ArrowUp,
  Image,
  CheckCircle,
  Clock,
  Plane,
  Eye,
  Settings,
  Monitor,
  Edit,
  Globe,
  Target,
  Star,
  Shield,
  Lightbulb
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

export default function Studio() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const services = [
    {
      icon: <Camera className="text-secondary" size={24} />,
      title: "Shooting photo professionnel",
      description: "Espaces, chambres, services et ambiances",
      color: "from-[#F2A541] to-[#BF3100]",
      details: [
        "Photographie d'architecture et d'intérieur professionnelle",
        "Mise en scène soignée des espaces et équipements",
        "Éclairage professionnel pour révéler les ambiances",
        "Photos de chambres, suites et espaces communs",
        "Photographie culinaire pour restaurants et bars",
        "Images haute résolution pour tous vos supports"
      ]
    },
    {
      icon: <Video className="text-secondary" size={24} />,
      title: "Vidéos immersives & drone",
      description: "Contenu dynamique et formats courts",
      color: "from-[#2A2A72] to-[#105740]",
      details: [
        "Vidéos de présentation immersives de l'établissement",
        "Prises de vues aériennes par drone certifié",
        "Visites virtuelles 360° des espaces",
        "Vidéos promotionnelles courtes pour réseaux sociaux",
        "Captation d'événements et services spéciaux",
        "Montage professionnel avec habillage sur mesure"
      ]
    },
    {
      icon: <Smartphone className="text-secondary" size={24} />,
      title: "Formats courts réseaux sociaux",
      description: "Contenus optimisés pour les OTAs et réseaux sociaux",
      color: "from-[#9EB7E5] to-[#2A2A72]",
      details: [
        "Contenus optimisés pour Instagram, TikTok, Facebook",
        "Formats verticaux et carrés selon les plateformes",
        "Stories et Reels engageants",
        "Contenus adaptés aux algorithmes des réseaux",
        "Calendrier éditorial et stratégie de publication",
        "Optimization pour les OTA (Booking, Expedia, etc.)"
      ]
    },
    {
      icon: <Palette className="text-secondary" size={24} />,
      title: "Direction artistique",
      description: "Vision créative cohérente pour votre marque",
      color: "from-[#105740] to-[#F2A541]",
      details: [
        "Développement d'une identité visuelle cohérente",
        "Création d'un univers graphique sur mesure",
        "Direction créative pour tous vos contenus",
        "Harmonisation des couleurs, typographies et styles",
        "Guidelines visuelles pour votre équipe",
        "Adaptation aux codes de votre secteur d'activité"
      ]
    },
    {
      icon: <Wand2 className="text-secondary" size={24} />,
      title: "Retouche & montage",
      description: "Post-production professionnelle",
      color: "from-[#F2A541] to-[#9EB7E5]",
      details: [
        "Retouche photo professionnelle (luminosité, couleurs, netteté)",
        "Montage vidéo avec transitions et effets",
        "Correction colorimétrique pour un rendu optimal",
        "Suppression d'éléments indésirables",
        "Ajout de textes, logos et éléments graphiques",
        "Livraison dans tous les formats requis"
      ]
    },
    {
      icon: <Upload className="text-secondary" size={24} />,
      title: "Intégration sur plateformes",
      description: "Mise en ligne optimisée sur vos canaux",
      color: "from-[#2A2A72] to-[#BF3100]",
      details: [
        "Upload et organisation sur vos plateformes OTA",
        "Optimisation SEO des descriptions et métadonnées",
        "Mise à jour de vos profils réseaux sociaux",
        "Intégration sur votre site web",
        "Archivage et organisation de votre médiathèque",
        "Formation à l'utilisation de vos contenus"
      ]
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: "Casting figurants",
      description: "Sélection de modèles pour vos visuels",
      color: "from-[#9EB7E5] to-[#105740]",
      details: [
        "Sélection de modèles adaptés à votre clientèle cible",
        "Casting local et professionnel",
        "Direction des modèles pendant les prises de vues",
        "Gestion des contrats et droits à l'image",
        "Diversité et inclusion dans la représentation",
        "Création d'ambiances authentiques et naturelles"
      ]
    },
    {
      icon: <Bed className="text-secondary" size={24} />,
      title: "Espaces, chambres, services",
      description: "Couverture complète de votre établissement",
      color: "from-[#BF3100] to-[#F2A541]",
      details: [
        "Photographie complète de tous vos espaces",
        "Mise en valeur des chambres et suites",
        "Captation des services (spa, restaurant, piscine)",
        "Photos des espaces événementiels et salles de réunion",
        "Documentation des équipements et installations",
        "Création d'un catalogue visuel complet"
      ]
    }
  ];

  const productionProcess = [
    {
      phase: "01",
      title: "Brief créatif",
      description: "Définition des objectifs et du style souhaité",
      duration: "1 jour",
      activities: [
        "Analyse de vos besoins et objectifs",
        "Définition du style et de l'ambiance",
        "Planning de la production",
        "Préparation technique"
      ]
    },
    {
      phase: "02",
      title: "Pré-production",
      description: "Préparation technique et logistique",
      duration: "2-3 jours",
      activities: [
        "Repérage des lieux",
        "Préparation du matériel",
        "Casting si nécessaire",
        "Coordination avec vos équipes"
      ]
    },
    {
      phase: "03",
      title: "Production",
      description: "Réalisation des prises de vues",
      duration: "1-3 jours",
      activities: [
        "Shooting photo et vidéo",
        "Direction artistique en temps réel",
        "Captation drone si nécessaire",
        "Validation des contenus"
      ]
    },
    {
      phase: "04",
      title: "Post-production",
      description: "Retouche et montage des contenus",
      duration: "5-10 jours",
      activities: [
        "Tri et sélection des meilleurs clichés",
        "Retouche photo professionnelle",
        "Montage vidéo et habillage",
        "Livraison des fichiers finaux"
      ]
    }
  ];

  const equipment = [
    {
      category: "Photographie",
      icon: <Camera size={20} />,
      items: [
        "Appareils photo full-frame haute résolution",
        "Objectifs grand-angle et téléobjectifs",
        "Éclairage professionnel LED et flash",
        "Trépieds et stabilisateurs"
      ]
    },
    {
      category: "Vidéo",
      icon: <Video size={20} />,
      items: [
        "Caméras 4K et équipement de stabilisation",
        "Micros directionnels et sans-fil",
        "Éclairage cinéma adaptatif",
        "Accessoires de prise de vue"
      ]
    },
    {
      category: "Drone",
      icon: <Plane size={20} />,
      items: [
        "Drones certifiés pour usage professionnel",
        "Caméras 4K gimbal stabilisé",
        "Autorisations et assurances",
        "Pilotes certifiés DGAC"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
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
              <Camera size={16} />
              <span className="text-sm font-medium">Production visuelle</span>
            </motion.div>

            <img src="/assets/logo2.png" alt="Studio Icon" style={{height:80, margin:'0 auto 24px'}} />

            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
              variants={itemVariants}
            >
              Des visuels pensés pour générer de la réservation
            </motion.h1>

            <motion.p 
              className="text-xl text-neutral-medium mb-8"
              variants={itemVariants}
            >
              Start In Dev Studio produit des contenus visuels adaptés aux attentes des voyageurs 
              et aux exigences des plateformes de distribution. Notre approche ne se limite pas 
              à la production : nous assurons une direction artistique complète sur chaque projet.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Zap size={20} className="mr-2" />
                  Demander un devis
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
              Nos services de production visuelle détaillés
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Des contenus visuels professionnels pour valoriser votre établissement sur tous les canaux
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
                      index === 0 ? '1566073771259-6a8506099945' : 
                      index === 1 ? '1571896349842-33c89424de2d' :
                      index === 2 ? '1611224923853-80b023f02d71' :
                      index === 3 ? '1558618047-0faa56f4961b' :
                      index === 4 ? '1542744173-05336fcc7ad4' :
                      index === 5 ? '1460925895917-afdab827c52f' :
                      index === 6 ? '1507003211169-0a1dd7228f2d' :
                      '1564013434775-cb8ba2d0948e'
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

      {/* Production Process Section */}
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
              Notre processus de production
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Une méthodologie éprouvée pour des résultats de qualité professionnelle
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {productionProcess.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-lg mb-4">
                      {phase.phase}
                    </div>
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
                {index < productionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-primary/30 mx-auto" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Equipment Section */}
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
              Équipement professionnel
            </h2>
            <p className="text-xl text-neutral-medium">
              Du matériel de pointe pour des résultats exceptionnels
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {equipment.map((category, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow border border-neutral-light"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Star size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-neutral-dark">{item}</span>
                    </li>
                  ))}
                </ul>
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
                Pourquoi choisir Start In Dev Studio ?
              </h2>
              <p className="text-lg text-neutral-medium mb-8">
                Notre expertise en production visuelle dédiée à l'hôtellerie vous garantit 
                des contenus qui convertissent et valorisent votre établissement.
              </p>
              <ul className="space-y-4">
                {[
                  "Expertise spécialisée dans l'hôtellerie de luxe",
                  "Équipement professionnel dernière génération", 
                  "Direction artistique adaptée à votre image de marque",
                  "Contenus optimisés pour les OTA et réseaux sociaux",
                  "Livraison rapide et respect des délais",
                  "Post-production incluse dans nos prestations",
                  "Formation à l'utilisation de vos contenus",
                  "Support et conseils personnalisés"
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
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Studio expertise"
                className="rounded-xl shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Preview */}
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
              Exemples de réalisations
            </h2>
            <p className="text-xl text-neutral-medium">
              Découvrez quelques-unes de nos créations pour l'industrie hôtelière
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Photographie d'hôtel",
                description: "Mise en valeur des espaces et ambiances",
                category: "Photography"
              },
              {
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Vidéos promotionnelles",
                description: "Contenus dynamiques pour vos plateformes",
                category: "Video"
              },
              {
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Contenu réseaux sociaux",
                description: "Formats adaptés aux différentes plateformes",
                category: "Social Media"
              },
              {
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Prises de vue drone",
                description: "Vues aériennes spectaculaires",
                category: "Drone"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="text-sm text-primary bg-white/20 rounded-full px-3 py-1 inline-block mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Prêt à valoriser votre image ?
            </motion.h2>

            <motion.p 
              className="text-xl text-neutral-medium mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
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
