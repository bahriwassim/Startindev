import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Calendar,
  Users,
  BarChart3,
  Ticket,
  Clock,
  MapPin,
  Mail,
  Bell,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Trophy,
  Target,
  Zap
} from "lucide-react";
import { useRef } from "react";

export default function EventMasterPro() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const features = [
    {
      icon: <Calendar className="text-[#F2A541]" size={24} />,
      title: "Planification Intelligente",
      description: "Organisez vos événements avec des outils de planification avancés et une timeline interactive.",
      benefits: ["Calendrier intégré", "Gestion des tâches", "Rappels automatiques", "Synchronisation équipe"]
    },
    {
      icon: <Ticket className="text-[#F2A541]" size={24} />,
      title: "Billetterie Intégrée",
      description: "Système de billetterie complet avec paiements sécurisés et gestion des ventes en temps réel.",
      benefits: ["Vente en ligne", "QR codes", "Contrôle d'accès", "Remboursements automatiques"]
    },
    {
      icon: <Users className="text-[#F2A541]" size={24} />,
      title: "Gestion des Participants",
      description: "Suivez et gérez tous vos participants avec des outils de communication intégrés.",
      benefits: ["Base de données centralisée", "Segmentation avancée", "Communication ciblée", "Check-in mobile"]
    },
    {
      icon: <BarChart3 className="text-[#F2A541]" size={24} />,
      title: "Analytics Avancées",
      description: "Analysez les performances de vos événements avec des tableaux de bord détaillés.",
      benefits: ["Métriques en temps réel", "ROI tracking", "Rapports personnalisés", "Insights prédictifs"]
    }
  ];

  const modules = [
    {
      title: "Event Builder",
      description: "Créez et configurez vos événements en quelques clics",
      icon: <Target size={32} />,
      color: "bg-[#F2A541]/10"
    },
    {
      title: "Marketing Hub",
      description: "Promocjoner vos événements sur tous les canaux",
      icon: <Mail size={32} />,
      color: "bg-[#bf3100]/10"
    },
    {
      title: "Live Management",
      description: "Gérez vos événements en temps réel le jour J",
      icon: <Zap size={32} />,
      color: "bg-[#F2A541]/10"
    },
    {
      title: "Post-Event Analytics",
      description: "Analysez les résultats et optimisez vos futurs événements",
      icon: <BarChart3 size={32} />,
      color: "bg-[#bf3100]/10"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "99€",
      period: "/mois",
      description: "Parfait pour les petits événements",
      features: [
        "Jusqu'à 5 événements/mois",
        "500 participants max",
        "Billetterie basique",
        "Support email",
        "Analytics de base"
      ],
      buttonClass: "border-[#F2A541] text-[#F2A541] hover:bg-[#F2A541] hover:text-white"
    },
    {
      name: "Professional",
      price: "299€",
      period: "/mois",
      description: "Pour les organisateurs réguliers",
      features: [
        "Événements illimités",
        "2000 participants max",
        "Billetterie avancée",
        "Support prioritaire",
        "Analytics complètes",
        "Intégrations tierces"
      ],
      buttonClass: "bg-[#F2A541] hover:bg-[#bf3100] text-white",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      description: "Solution personnalisée pour grandes entreprises",
      features: [
        "Configuration sur mesure",
        "Participants illimités",
        "White label",
        "Support dédié 24/7",
        "API personnalisée",
        "Formation équipe"
      ],
      buttonClass: "border-[#F2A541] text-[#F2A541] hover:bg-[#F2A541] hover:text-white"
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
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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
                <Calendar size={16} />
                <span className="text-sm font-medium">EventMaster Pro</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                La plateforme
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  événementielle
                </motion.span>
                <span className="text-white/90">complète</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Créez, gérez et analysez vos événements comme jamais auparavant. 
                EventMaster Pro vous accompagne de la conception à l'analyse post-événement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                    <Sparkles size={20} className="mr-2" />
                    Essai gratuit 14 jours
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
                      Demander une démo
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Résultats prouvés</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: "10K+", label: "Événements créés", icon: Calendar },
                      { number: "2M+", label: "Participants gérés", icon: Users },
                      { number: "99.9%", label: "Uptime garanti", icon: CheckCircle },
                      { number: "4.9/5", label: "Note satisfaction", icon: Star }
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#F2A541]/10 text-[#F2A541] rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Trophy size={16} />
              <span className="text-sm font-medium">Fonctionnalités Clés</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une suite complète d'outils pour organiser des événements exceptionnels
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-2xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-[#F2A541] mr-2 flex-shrink-0" size={16} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modules Intégrés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre modules puissants pour couvrir tous les aspects de vos événements
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${module.color} text-[#F2A541] rounded-xl mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {module.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {module.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#F2A541]/10 text-[#F2A541] rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Target size={16} />
              <span className="text-sm font-medium">Tarification Simple</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choisissez votre formule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des plans adaptés à tous les besoins, du débutant à l'entreprise
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-3xl p-8 border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-[#F2A541] scale-105' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: plan.popular ? 1.08 : 1.02 }}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F2A541] text-white px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Plus populaire
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-[#F2A541]">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="text-[#F2A541] mr-3 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className={`w-full ${plan.buttonClass} font-medium py-3`}>
                    {plan.name === 'Enterprise' ? 'Nous contacter' : 'Commencer'}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </motion.div>
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
              Prêt à révolutionner vos événements ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Rejoignez les milliers d'organisateurs qui font confiance à EventMaster Pro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-[#F2A541] hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                  <Calendar size={20} className="mr-2" />
                  Démarrer l'essai gratuit
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
                    className="border-2 border-white/90 bg-white/10 text-white hover:bg-white hover:text-[#F2A541] font-semibold text-lg px-8 py-4 backdrop-blur-sm"
                  >
                    Parler à un expert
                  </Button>
                </motion.div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}