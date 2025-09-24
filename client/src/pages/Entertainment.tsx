import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Music, 
  Video, 
  Camera, 
  Mic, 
  Play, 
  Users, 
  Star, 
  ArrowRight, 
  Sparkles,
  Calendar,
  Trophy,
  Megaphone
} from "lucide-react";
import { useRef } from "react";

export default function Entertainment() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const services = [
    {
      icon: <Calendar className="text-[#F2A541]" size={32} />,
      title: "EventMaster Pro",
      description: "Plateforme complète de gestion d'événements avec fonctionnalités avancées",
      features: [
        "Gestion complète des événements",
        "Billetterie intégrée",
        "Suivi des participants",
        "Analytics en temps réel"
      ],
      href: "/entertainment/eventmasterpro",
      colorClass: "bg-orange-50",
      buttonClass: "bg-[#F2A541] hover:bg-[#bf3100] text-white"
    },
    {
      icon: <Trophy className="text-[#F2A541]" size={32} />,
      title: "Events Platform",
      description: "Solution événementielle pour hôtels et entreprises",
      features: [
        "Événements corporatifs",
        "Mariages et célébrations",
        "Conférences et séminaires",
        "Gestion multi-sites"
      ],
      href: "/entertainment/eventsplatform",
      colorClass: "bg-orange-50",
      buttonClass: "bg-[#F2A541] hover:bg-[#bf3100] text-white"
    }
  ];

  const features = [
    {
      icon: <Music size={24} />,
      title: "Production Musicale",
      description: "Création de contenu audio personnalisé pour vos événements et espaces"
    },
    {
      icon: <Video size={24} />,
      title: "Contenu Vidéo",
      description: "Production de vidéos promotionnelles et de contenu immersif"
    },
    {
      icon: <Camera size={24} />,
      title: "Photographie",
      description: "Reportages photo professionnels et création de galeries interactives"
    },
    {
      icon: <Mic size={24} />,
      title: "Animation Live",
      description: "Services d'animation et de divertissement en direct"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative flex items-center py-20 sm:py-24 lg:py-32 overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            scale: heroScale
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(242, 165, 65, 0.95), rgba(191, 49, 0, 0.85))' }}></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">Entertainment Solutions</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Créez des expériences
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  inoubliables
                </motion.span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transformez vos événements en moments magiques grâce à nos solutions 
                de divertissement innovantes et notre expertise créative.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                      <Play size={20} className="mr-2" />
                      Découvrir nos services
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
                    className="border-2 border-white text-white hover:bg-white hover:text-[#F2A541] font-semibold text-lg px-8 py-4 backdrop-blur-sm"
                  >
                    <Users size={20} className="mr-2" />
                    Nos réalisations
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "500+", label: "Événements", icon: Calendar },
                      { number: "50K+", label: "Participants", icon: Users },
                      { number: "98%", label: "Satisfaction", icon: Star },
                      { number: "24/7", label: "Support", icon: Megaphone }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <stat.icon className="mx-auto mb-2 text-white" size={24} />
                        <div className="text-2xl font-bold">{stat.number}</div>
                        <div className="text-sm opacity-80">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#F2A541]/10 text-[#F2A541] rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Trophy size={16} />
              <span className="text-sm font-medium">Nos Solutions</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Entertainment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos plateformes dédiées à la gestion et création d'événements exceptionnels
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.colorClass} rounded-2xl mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#F2A541] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className={`w-full ${service.buttonClass} font-medium group relative overflow-hidden`}>
                      <span className="relative z-10 flex items-center justify-center">
                        En savoir plus
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Expertises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour créer des expériences mémorables
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#F2A541]/10 text-[#F2A541] rounded-xl mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#F2A541] to-[#bf3100] relative overflow-hidden">
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
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à créer l'événement parfait ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Contactez notre équipe d'experts pour transformer votre vision en réalité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                    <Sparkles size={20} className="mr-2" />
                    Commencer mon projet
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
                  className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-[#F2A541] font-semibold text-lg px-8 py-4 backdrop-blur-sm"
                >
                  Voir notre portfolio
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}