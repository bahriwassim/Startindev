import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ServiceModal } from "./Modal";

interface BusinessUnitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  colorClass: string;
  delay: number;
}

export function BusinessUnitCard({
  icon,
  title,
  description,
  features,
  href,
  colorClass,
  delay
}: BusinessUnitCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const serviceDetails = {
    title,
    description: description + " Notre expertise vous permettra d'optimiser vos performances et d'atteindre vos objectifs avec des solutions sur mesure.",
    features,
    image: `https://images.unsplash.com/photo-${
      title === "Consulting" ? "1552664730-d307ca884978" :
      title === "Studio" ? "1606857521015-7f9fcf423740" :
      "1498050108023-c5249f4df085"
    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400`,
    benefits: title === "Consulting"
      ? [
          "Croissance mesurable du chiffre d'affaires hébergement",
          "Vision claire pour des décisions stratégiques efficaces",
          "Réduction de la dépendance aux OTAs",
          "Montée en compétence des équipes internes"
        ]
      : title === "Studio"
      ? [
          "Amélioration immédiate du taux de conversion",
          "Cohérence de l'image de marque sur tous les canaux",
          "Gain de temps et de qualité grâce à une production clé en main",
          "Valorisation différenciante face à la concurrence locale"
        ]
      : [
          "Integration fluide a l'èco-systeme hôtelière",
          "Accompagnement personnalisé",
          "Expertise sectorielle hôtelière",
          "Solutions clés en main"
        ]
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.setProperty('overflow', 'hidden', 'important');
    } else {
      document.body.style.setProperty('overflow', 'unset', 'important');
    }
    return () => { document.body.style.setProperty('overflow', 'unset', 'important'); };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`h-full group business-unit-hover transition-all duration-300 ${isHovered ? 'border-2 border-[#105740] rounded-2xl shadow-lg' : 'border border-transparent rounded-2xl'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="h-full relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Neon morphing border (desktop only) */}
          <div className="hidden md:block absolute -inset-1 z-20 pointer-events-none">
            <div className="w-full h-full rounded-3xl animate-glow border-4 border-transparent" style={{ 
              boxShadow: isHovered ? '0 0 40px 10px rgba(16, 87, 64, 0.3), 0 0 80px 20px rgba(16, 87, 64, 0.2), 0 0 120px 30px rgba(16, 87, 64, 0.1)' : 'none',
              transition: 'box-shadow 0.5s',
              borderRadius: '24px'
            }} />
          </div>
          {/* Glass morphing effect (desktop only) */}
          <div className="hidden md:block absolute inset-0 z-10 rounded-3xl glass-effect group-hover:backdrop-blur-strong transition-all duration-500" style={{ opacity: isHovered ? 0.95 : 0.85 }} />
          {/* Reveal animation overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 z-10"
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating badge */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay * 0.05 + 0.3, type: "spring" }}
          >
            <Badge className="bg-white/90 text-primary border-primary/20 shadow-lg">
              Premium
            </Badge>
          </motion.div>

          <CardContent className="p-8 h-full flex flex-col relative z-10">
            {/* Icon with enhanced animation */}
            <motion.div
              className={`inline-flex items-center justify-center w-16 h-16 ${colorClass} rounded-2xl mb-6 relative`}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-primary/20"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ 
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.5, 0, 0.5] : 0.5
                }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>

            {/* Title with gradient text effect */}
            <motion.h3 
              className="text-2xl font-bold text-neutral-dark mb-4 group-hover:gradient-text transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-neutral-medium mb-6 leading-relaxed flex-grow"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {description}
            </motion.p>

            {/* Features list with stagger animation */}
            <motion.ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-sm text-neutral-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: delay * 0.05 + index * 0.05,
                    duration: 0.3
                  }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mt-auto">
              <Link href={href}>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #F2A54155' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button 
                    className="w-full bg-primary hover:bg-[#e08a00] hover:shadow-lg text-white font-medium group/btn relative overflow-hidden transition-all duration-200"
                  >
                    <motion.span
                      className="relative z-10 flex items-center justify-center"
                      whileHover={{ x: -5 }}
                    >
                      Découvrir
                      <motion.div
                        whileHover={{ x: 5, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-2" size={16} />
                      </motion.div>
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #10574033' }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full group/info hover:border-primary hover:text-white hover:bg-[#105740] hover:shadow-lg transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                >
                  <motion.span
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.08 }}
                  >
                    <Info size={16} className="mr-2" />
                    Plus d'infos
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </CardContent>

          {/* Decorative elements */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-full transform translate-x-16 translate-y-16"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0.4
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={serviceDetails}
      />
    </>
  );
}
