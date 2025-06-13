import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  LogIn,
  UserPlus,
  ArrowRight
} from "lucide-react";

export default function EspaceCompte() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="pb-20 min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <User size={16} />
            <span className="text-sm font-medium">Espace Client</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Espace Compte
          </h1>
          <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
            Accédez à votre espace personnel pour suivre vos projets et gérer vos services
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Login Form */}
          <AnimatedSection delay={0.2} direction="left">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-dark mb-6 flex items-center">
                  <LogIn className="text-primary mr-3" size={28} />
                  Connexion Client
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail size={16} />
                      Adresse email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock size={16} />
                      Mot de passe
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="••••••••"
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold group"
                    >
                      <LogIn className="mr-2" size={20} />
                      Se connecter
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6 text-center">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm">
                    Mot de passe oublié ?
                  </a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Non-Client Section */}
          <AnimatedSection delay={0.4} direction="right">
            <Card className="h-full gradient-bg text-white">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <UserPlus className="text-white" size={40} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-6">
                    Vous n'êtes pas encore client ?
                  </h3>
                  
                  <p className="text-lg mb-8 opacity-90 leading-relaxed">
                    Découvrez nos services sur mesure pour l'hôtellerie et rejoignez nos clients satisfaits. 
                    Demandez votre audit gratuit dès maintenant !
                  </p>

                  <div className="space-y-4">
                    <Link href="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          size="lg" 
                          className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 w-full group"
                        >
                          <Mail className="mr-2" size={20} />
                          Devenir client
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </motion.div>
                    </Link>

                    <Link href="/">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 w-full"
                        >
                          Découvrir nos services
                        </Button>
                      </motion.div>
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm opacity-75">
                      Besoin d'aide ? Contactez-nous au{" "}
                      <a href="tel:+33123456789" className="font-semibold hover:underline">
                        +33 1 23 45 67 89
                      </a>
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Features Section */}
        <AnimatedSection delay={0.8} className="mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
              Avantages de votre espace client
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <User className="text-primary" size={32} />,
                  title: "Suivi de projets",
                  description: "Consultez l'avancement de vos projets en temps réel"
                },
                {
                  icon: <Mail className="text-secondary" size={32} />,
                  title: "Communication directe",
                  description: "Échangez facilement avec vos consultants dédiés"
                },
                {
                  icon: <Lock className="text-primary" size={32} />,
                  title: "Accès sécurisé",
                  description: "Vos données et documents en toute sécurité"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-neutral-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-medium">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
} 