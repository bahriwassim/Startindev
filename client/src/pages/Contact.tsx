import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Calendar, 
  QrCode, 
  Target,
  Send,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message envoyé !",
          description: result.message,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      content: "contact@startindev.com",
      href: "mailto:contact@startindev.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      href: "tel:+33123456789"
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      content: "Voir notre profil",
      href: "https://www.linkedin.com/company/start-in-dev-group/?viewAsMember=true"
    }
  ];

  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
            Prêt à transformer votre présence digitale ? Parlons de votre projet.
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neutral-dark mb-8">
                  Envoyez-nous un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Votre prénom"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
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
                    <Label>Objet</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionnez un objet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="audit">Demande d'audit gratuit</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="studio">Studio - Production visuelle</SelectItem>
                        <SelectItem value="tech">Tech - Développement</SelectItem>
                        <SelectItem value="360">Projet complet 360°</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre projet..."
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="mr-2" size={20} />
                    )}
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-dark mb-8">
                    Informations de contact
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-dark mb-1">{item.title}</h4>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              className="text-neutral-medium hover:text-primary transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-neutral-medium">{item.content}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendly & QR Code */}
              <Card>
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-neutral-dark mb-6">
                    Prendre rendez-vous
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-neutral-medium mb-4">
                        Discutons de votre projet en direct
                      </p>
                      <Button className="bg-secondary hover:bg-secondary/90 text-white font-medium">
                        <Calendar className="mr-2" size={20} />
                        Réserver un créneau
                      </Button>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm text-neutral-medium mb-2 text-center">
                        QR Code LinkedIn
                      </p>
                      <div className="w-24 h-24 bg-neutral-light rounded-lg shadow-md flex items-center justify-center">
                        <QrCode className="text-neutral-medium" size={32} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Audit CTA */}
              <div className="gradient-bg rounded-2xl p-8 text-white">
                <Target className="mb-4 text-yellow-300" size={32} />
                <h4 className="text-2xl font-bold mb-4">Audit Express Gratuit</h4>
                <p className="leading-relaxed mb-6 opacity-90">
                  Obtenez une analyse rapide de votre présence digitale et découvrez les 
                  opportunités d'amélioration pour votre établissement.
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                  <CheckCircle className="mr-2" size={20} />
                  Demander un audit
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
