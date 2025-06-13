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
  Zap
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
      color: "from-[#F2A541] to-[#2A2A72]"
    },
    {
      icon: <Handshake className="text-primary" size={24} />,
      title: "Renfort d'équipe et accompagnement sur site",
      description: "Intervention directe au sein de vos équipes",
      color: "from-[#105740] to-[#9EB7E5]"
    },
    {
      icon: <BarChart3 className="text-primary" size={24} />,
      title: "Audit de performance OTA / contenu",
      description: "Analyse complète de vos performances sur les plateformes",
      color: "from-[#BF3100] to-[#F2A541]"
    },
    {
      icon: <Megaphone className="text-primary" size={24} />,
      title: "Mise en place de sponsoring & campagnes",
      description: "Stratégies de visibilité et campagnes marketing ciblées",
      color: "from-[#2A2A72] to-[#BF3100]"
    },
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Formation aux outils et leviers digitaux",
      description: "Sessions de formation personnalisées pour vos équipes",
      color: "from-[#9EB7E5] to-[#F2A541]"
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Performance du site direct",
      description: "Optimisation de la conversion et du référencement",
      color: "from-[#105740] to-[#BF3100]"
    },
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
                icon: <Target size={24} className="text-primary" />,
                title: "Conseil stratégique digital",
                description: "Définition de votre stratégie digitale et accompagnement dans sa mise en œuvre."
              },
              {
                icon: <Users size={24} className="text-primary" />,
                title: "Renfort d'équipe",
                description: "Intervention de consultants spécialisés en renfort de vos équipes internes."
              },
              {
                icon: <BookOpen size={24} className="text-primary" />,
                title: "Formation",
                description: "Formation de vos équipes aux outils et leviers digitaux essentiels."
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
