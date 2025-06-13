import { Link } from "wouter";
import { Mail, Phone, Linkedin, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/footer-logo.png" 
                alt="Start In Dev Group Logo" 
                className="h-10 w-auto logo-shadow"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Votre partenaire digital 360° pour l'hôtellerie. Nous accompagnons les hôtels 
              dans leur transformation digitale avec expertise et pragmatisme.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/start-in-dev-group/?viewAsMember=true" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@startindev.com" 
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/consulting">
                  <span className="hover:text-primary transition-colors cursor-pointer">Consulting</span>
                </Link>
              </li>
              <li>
                <Link href="/studio">
                  <span className="hover:text-primary transition-colors cursor-pointer">Studio</span>
                </Link>
              </li>
              <li>
                <Link href="/tech">
                  <span className="hover:text-primary transition-colors cursor-pointer">Tech</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="hover:text-primary transition-colors cursor-pointer">Réalisations</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Compte</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                contact@startindev.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +33 1 23 45 67 89
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-primary transition-colors cursor-pointer">Formulaire de contact</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-700 mt-4">
                <Link href="/espace-compte">
                  <span className="hover:text-primary transition-colors cursor-pointer flex items-center">
                    <User size={16} className="mr-2" />
                    Espace Compte
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Start In Dev Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
