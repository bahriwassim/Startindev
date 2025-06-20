import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BusinessUnitCard } from "@/components/BusinessUnitCard";
import { ChartLine, Camera, Code, ChevronDown, Sparkles, Zap, Target } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const businessUnits = [
    {
      icon: <ChartLine className="text-primary" size={32} />,
      title: "Consulting",
      description: "Renforcez votre structure digitale avec des experts métiers qui comprennent les enjeux de l'hôtellerie.",
      features: [
        "Pilotage de la stratiégie de distubution web",
        "Audit & optimisation des performances",
        "Formation & sensibilisation digitale"
      ],
      href: "/consulting",
      colorClass: "bg-primary/10",
      delay: 0
    },
    {
      icon: <Camera className="text-primary" size={32} />,
      title: "Studio",
      description: "Des visuels pensés pour générer de la réservation avec une direction artistique complète.",
      features: [
        "Reportage photo & vidéo vitrine",
        "Contenus pour la communication digitale",
        "Direction & pilotage des projets audiovisuels"
      ],
      href: "/studio",
      colorClass: "bg-primary/10",
      delay: 1
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Tech",
      description: "Des outils simples, activables, pensés spécifiquement pour l'industrie hôtelière.",
      features: [
        "Sites vitrine & conversion",
        "Intégration PMS / extranet",
        " Solutions sur-mesure"
      ],
      href: "/tech",
      colorClass: "bg-primary/10",
      delay: 2
    }
  ];

  return (
    <div>
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            scale: heroScale
          }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(16, 87, 64, 0.92)' }}></div>
          
          {/* Animated particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{ 
                y: [null, -100],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Floating badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">Solution 360° innovante</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Votre partenaire digital{" "}
              <motion.span 
                className="inline-block"
                style={{ color: '#F2A541' }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                360°
              </motion.span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              pour l'hôtellerie
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Start In Dev Group accompagne les hôtels et groupes hôteliers dans leur développement digital, 
              en combinant expertise stratégique, création de contenu et solutions techniques. Grâce à une 
              approche à 360°, nous intervenons aussi bien en conseil qu'en production ou en exécution.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4 w-full sm:w-auto group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      <Zap size={20} className="mr-2" />
                      Audit express gratuit
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 backdrop-blur-sm shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('business-units')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir nos services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('business-units')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Business Units Overview */}
      <section id="business-units" className="py-20 bg-neutral-light relative overflow-hidden">
        {/* Background decorations */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16" delay={0.1} duration={0.6}>
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Target size={16} />
              <span className="text-sm font-medium">Expertise complète</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Nos trois pôles d'expertise
            </h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Une approche complète pour répondre à tous vos besoins digitaux dans l'hôtellerie
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => (
              <BusinessUnitCard key={unit.title} {...unit} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <AnimatedSection delay={0.2} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projets réalisés", icon: Target },
              { number: "98%", label: "Satisfaction client", icon: Sparkles },
              { number: "24h", label: "Temps de réponse", icon: Zap },
              { number: "360°", label: "Approche complète", icon: ChartLine }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="text-primary" size={24} />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-neutral-dark mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px"
          }}
          animate={{ x: [0, 50], y: [0, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection delay={0.1} duration={0.6}>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Prêt à transformer votre présence digitale ?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Obtenez un audit express gratuit de votre stratégie digitale et découvrez comment optimiser votre performance.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                    <Sparkles size={20} className="mr-2" />
                    Audit gratuit
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 backdrop-blur-sm shadow-lg transition-all duration-300"
                >
                  Prendre rendez-vous
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
