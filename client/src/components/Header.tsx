import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/consulting", label: "Consulting" },
    { href: "/studio", label: "Studio" },
    { href: "/tech", label: "Tech" },
    { href: "/projects", label: "Réalisations" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect shadow-xl border-b border-white/20" : "bg-white/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Link href="/">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.img 
                src="/startindev-group.png" 
                alt="Start In Dev Group Logo" 
                className="h-10 w-auto logo-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.span 
                  className={`text-neutral-dark hover:text-primary transition-all duration-300 font-medium cursor-pointer relative px-3 py-2 rounded-lg hover:bg-primary/5 ${
                    location === item.href ? "text-primary bg-primary/10" : ""
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
                      layoutId="underline"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            
            {/* Client Space Icon */}
            <Link href="/espace-compte">
              <motion.div
                className="p-2 rounded-lg hover:bg-secondary/10 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Espace Client"
              >
                <User 
                  className={`text-neutral-dark group-hover:text-secondary transition-colors ${
                    location === "/espace-compte" ? "text-secondary" : ""
                  }`} 
                  size={24} 
                />
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Contact</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-3 text-neutral-dark hover:text-primary transition-colors relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl"
        >
          <div className="py-4 px-2">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.span 
                  className={`block px-4 py-3 text-neutral-dark hover:text-primary transition-colors cursor-pointer hover:bg-gray-50 rounded-lg mx-2 my-1 ${
                    location === item.href ? "text-primary bg-primary/10" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            
            {/* Mobile Client Space */}
            <Link href="/espace-compte">
              <motion.span 
                className="block px-4 py-3 text-neutral-dark hover:text-secondary transition-colors cursor-pointer hover:bg-gray-50 rounded-lg mx-2 my-1 flex items-center"
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <User size={16} className="mr-2" />
                Espace Client
              </motion.span>
            </Link>
            
            <Link href="/contact">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
                className="mx-2"
              >
                <Button 
                  className="mt-2 w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
