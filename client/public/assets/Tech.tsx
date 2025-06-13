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
  ArrowRight
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
      description: "Sites web optimisés pour maximiser les réservations directes"
    },
    {
      icon: <Plug className="text-primary" size={24} />,
      title: "Intégration PMS / extranet",
      description: "Connexion seamless avec vos systèmes de gestion existants"
    },
    {
      icon: <ShoppingCart className="text-primary" size={24} />,
      title: "Tunnel de réservation / page événement",
      description: "Processus de réservation optimisé pour la conversion"
    },
    {
      icon: <Rocket className="text-primary" size={24} />,
      title: "Développement de projets internes innovants",
      description: "Solutions propriétaires comme notre plateforme Zishop"
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "API REST & GraphQL",
    "Bases de données SQL/NoSQL",
    "Cloud AWS/Azure",
    "Intégrations PMS",
    "Paiements sécurisés",
    "Analytics & SEO"
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

            <img src="/attached_assets/LOGO-20250613T075327Z-1-001/LOGO/PNG/logo1.png" alt="Tech Icon" style={{height:80, margin:'0 auto 24px'}} />

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
                icon: <Globe size={24} className="text-primary" />,
                title: "Sites vitrine & conversion",
                description: "Création de sites web performants et optimisés pour la conversion."
              },
              {
                icon: <Database size={24} className="text-primary" />,
                title: "Intégration PMS",
                description: "Connexion avec votre système de gestion hôtelière."
              },
              {
                icon: <Code size={24} className="text-primary" />,
                title: "Solutions innovantes",
                description: "Développement de projets internes comme Zishop."
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
                  "Formation et documentation"
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
