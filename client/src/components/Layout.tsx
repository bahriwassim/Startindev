import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActionButton, useToast } from "./NotificationToast";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { ToastManager } = useToast();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        className="flex-1 pt-28 page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
      
      {/* Interactive Elements */}
      <FloatingActionButton />
      <ToastManager />
    </div>
  );
}
