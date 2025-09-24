import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Users,
  Building,
  Heart,
  Briefcase,
  MapPin,
  Clock,
  Star,
  Gift,
  ChefHat,
  Music,
  Camera,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Target,
  Calendar
} from "lucide-react";
import { useRef } from "react";

export default function EventsPlatform() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const eventTypes = [
    {
      icon: <Briefcase className="text-[#F2A541]" size={32} />,
      title: "Événements Corporatifs",
      description: "Conférences, séminaires, team building et événements d'entreprise",
      features: [
        "Salles modulables",
        "Équipements audiovisuels",
        "Catering professionnel",
        "Support technique"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: <Heart className="text-[#F2A541]" size={32} />,
      title: "Mariages & Célébrations",
      description: "Créez des moments inoubliables pour vos événements privés",
      features: [
        "Planification personnalisée",
        "Décoration sur mesure",
        "Menu gastronomique",
        "Coordination jour J"
      ],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: <Trophy className="text-[#F2A541]" size={32} />,
      title: "Événements Sportifs",
      description: "Compétitions, galas et événements sportifs d'envergure",
      features: [
        "Installations sportives",
        "Chronométrage professionnel",
        "Diffusion en direct",
        "Gestion des participants"
      ],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: <Music className="text-[#F2A541]" size={32} />,
      title: "Spectacles & Concerts",
      description: "Événements culturels et artistiques de qualité",
      features: [
        "Scène professionnelle",
        "Son et éclairage",
        "Gestion des artistes",
        "Sécurité événementielle"
      ],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const services = [
    {
      icon: <MapPin size={24} />,
      title: "Gestion des Lieux",
      description: "Réservation et gestion optimisée de vos espaces événementiels"
    },
    {
      icon: <ChefHat size={24} />,
      title: "Services Traiteur",
      description: "Solutions culinaires adaptées à chaque type d'événement"
    },
    {
      icon: <Camera size={24} />,
      title: "Captation Vidéo",
      description: "Immortalisez vos événements avec nos services de production"
    },
    {
      icon: <Gift size={24} />,
      title: "Animation & Divertissement",
      description: "Services d'animation pour créer des expériences mémorables"
    },
    {
      icon: <Users size={24} />,
      title: "Gestion des Invités",
      description: "Suivi complet des participants et communication ciblée"
    },
    {
      icon: <Clock size={24} />,
      title: "Coordination Temps Réel",
      description: "Gestion et coordination parfaite le jour de l'événement"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechCorp",
      content: "EventsPlatform a transformé notre façon d'organiser nos événements corporatifs. L'interface est intuitive et le support exceptionnel.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Jean Martin",
      role: "Wedding Planner",
      company: "Mariage de Rêve",
      content: "Grâce à cette plateforme, nous gérons plus facilement nos mariages. Nos clients adorent pouvoir suivre l'organisation en temps réel.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Sophie Laurent",
      role: "Responsable Événements",
      company: "Grand Hôtel Palace",
      content: "Un outil indispensable pour notre hôtel. La gestion multi-événements nous fait gagner un temps précieux.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
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
            backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            scale: heroScale
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(242, 165, 65, 0.95), rgba(191, 49, 0, 0.85))' }}></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
                <Building size={16} />
                <span className="text-sm font-medium">Events Platform</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Votre partenaire
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  événementiel
                </motion.span>
                <span className="text-white/90">de confiance</span>
              </h1>

              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                De l'événement corporatif au mariage de rêve, nous créons des expériences 
                exceptionnelles qui marquent les esprits et dépassent les attentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                    <Calendar size={20} className="mr-2" />
                    Planifier un événement
                  </Button>
                </motion.div>

                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white text-white hover:bg-white hover:text-[#F2A541] font-semibold text-lg px-8 py-4 backdrop-blur-sm"
                    >
                      Obtenir un devis
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Événements</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm opacity-80">Participants</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#F2A541]/10 text-[#F2A541] rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Trophy size={16} />
              <span className="text-sm font-medium">Types d'Événements</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nous organisons tous vos événements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète pour chaque type d'événement, du plus intime au plus grandiose
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={eventType.title}
                className="group bg-white rounded-3xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={eventType.image}
                    alt={eventType.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#F2A541] rounded-xl mb-2">
                      {eventType.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {eventType.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {eventType.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {eventType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="text-[#F2A541] mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour des événements clés en main
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#F2A541]/10 text-[#F2A541] rounded-xl mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#F2A541]/10 text-[#F2A541] rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Star size={16} />
              <span className="text-sm font-medium">Témoignages Clients</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les retours de nos clients satisfaits
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#F2A541]">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#F2A541] fill-current" size={16} />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
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
              Créons ensemble votre prochain événement
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Notre équipe d'experts est prête à transformer votre vision en réalité exceptionnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                    <Sparkles size={20} className="mr-2" />
                    Discutons de votre projet
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
                  Voir nos réalisations
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}