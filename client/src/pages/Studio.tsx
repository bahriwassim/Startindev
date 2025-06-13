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
  Image
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
      color: "from-[#F2A541] to-[#BF3100]"
    },
    {
      icon: <Video className="text-secondary" size={24} />,
      title: "Vidéos immersives & drone",
      description: "Contenu dynamique et formats courts",
      color: "from-[#2A2A72] to-[#105740]"
    },
    {
      icon: <Smartphone className="text-secondary" size={24} />,
      title: "Formats courts réseaux sociaux",
      description: "Contenus optimisés pour les OTAs et réseaux sociaux",
      color: "from-[#9EB7E5] to-[#2A2A72]"
    },
    {
      icon: <Palette className="text-secondary" size={24} />,
      title: "Direction artistique",
      description: "Vision créative cohérente pour votre marque",
      color: "from-[#105740] to-[#F2A541]"
    },
    {
      icon: <Wand2 className="text-secondary" size={24} />,
      title: "Retouche & montage",
      description: "Post-production professionnelle",
      color: "from-[#F2A541] to-[#9EB7E5]"
    },
    {
      icon: <Upload className="text-secondary" size={24} />,
      title: "Intégration sur plateformes",
      description: "Mise en ligne optimisée sur vos canaux",
      color: "from-[#2A2A72] to-[#BF3100]"
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: "Casting figurants",
      description: "Sélection de modèles pour vos visuels",
      color: "from-[#9EB7E5] to-[#105740]"
    },
    {
      icon: <Bed className="text-secondary" size={24} />,
      title: "Espaces, chambres, services",
      description: "Couverture complète de votre établissement",
      color: "from-[#BF3100] to-[#F2A541]"
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

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: <Camera size={24} className="text-primary" />,
                title: "Shooting photo professionnel",
                description: "Photos d'espaces, chambres et services pour valoriser votre établissement."
              },
              {
                icon: <Video size={24} className="text-primary" />,
                title: "Vidéos immersives",
                description: "Création de contenus vidéo engageants pour vos plateformes."
              },
              {
                icon: <ArrowUp size={24} className="text-primary" />,
                title: "Contenu drone",
                description: "Vues aériennes spectaculaires pour mettre en valeur votre établissement."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-medium">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Preview */}
      <motion.section 
        className="py-20 bg-neutral-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Photographie d'hôtel",
                description: "Mise en valeur des espaces et ambiances"
              },
              {
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                title: "Vidéos promotionnelles",
                description: "Contenus dynamiques pour vos plateformes"
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
