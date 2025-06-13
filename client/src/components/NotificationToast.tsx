import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Check, AlertTriangle, Info, Zap } from "lucide-react";

interface NotificationProps {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const notificationIcons = {
  success: Check,
  error: X,
  warning: AlertTriangle,
  info: Info
};

const notificationColors = {
  success: "from-green-500 to-emerald-600",
  error: "from-red-500 to-rose-600", 
  warning: "from-yellow-500 to-orange-600",
  info: "from-blue-500 to-indigo-600"
};

export function NotificationToast({ 
  id, 
  type, 
  title, 
  message, 
  duration = 5000, 
  onClose 
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const Icon = notificationIcons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) return 0;
        return prev - (100 / (duration / 100));
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, id, onClose]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.8 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-md w-full"
    >
      {/* Progress bar */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${notificationColors[type]}`}
        initial={{ width: "100%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "linear" }}
      />

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div
            className={`w-10 h-10 rounded-full bg-gradient-to-r ${notificationColors[type]} flex items-center justify-center flex-shrink-0`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Icon className="text-white" size={20} />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.h4
              className="text-lg font-semibold text-gray-900 mb-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h4>
            <motion.p
              className="text-gray-600 text-sm leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {message}
            </motion.p>
          </div>

          {/* Close button */}
          <motion.button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose(id), 300);
            }}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={18} />
          </motion.button>
        </div>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
  );
}

// Toast Manager Component
interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
}

interface ToastManagerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export function ToastManager({ toasts, onRemove }: ToastManagerProps) {
  return (
    <div className="fixed top-6 right-6 z-50 space-y-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <NotificationToast
            key={toast.id}
            {...toast}
            onClose={onRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Hook for using toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (title: string, message: string) => {
    addToast({ type: "success", title, message });
  };

  const showError = (title: string, message: string) => {
    addToast({ type: "error", title, message });
  };

  const showWarning = (title: string, message: string) => {
    addToast({ type: "warning", title, message });
  };

  const showInfo = (title: string, message: string) => {
    addToast({ type: "info", title, message });
  };

  return {
    toasts,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    ToastManager: () => <ToastManager toasts={toasts} onRemove={removeToast} />
  };
}

// Floating Action Button Component
export function FloatingActionButton() {
  const { showSuccess } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    { 
      icon: Info, 
      label: "Contact", 
      color: "bg-primary",
      href: "/contact"
    },
    { 
      icon: Zap, 
      label: "Audit", 
      color: "bg-secondary",
      href: "/contact"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="flex flex-col items-start gap-3">
        {/* Action buttons */}
        <AnimatePresence>
          {isExpanded && actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.a
                key={action.label}
                href={action.href}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -20 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all group relative no-underline`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => showSuccess(action.label, `Redirection vers ${action.label}...`)}
              >
                <IconComponent size={18} />
                <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {action.label}
                </span>
              </motion.a>
            );
          })}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Zap size={20} />
        </motion.button>
      </div>
    </div>
  );
} 