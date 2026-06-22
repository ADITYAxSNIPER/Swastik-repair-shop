import { motion } from "framer-motion";

const WA_NUMBER = "919565444414";
const WA_MESSAGE = encodeURIComponent("Hi! I need phone repair help.");

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 240, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-[150] flex items-center justify-center rounded-full shadow-xl"
      style={{ width: 54, height: 54, background: "#25D366" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.45, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "rgba(37,211,102,0.4)" }}
      />
      <svg viewBox="0 0 32 32" width={26} height={26} fill="none">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.42.66 4.7 1.81 6.66L3 29l6.53-1.78A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Z" fill="#fff" />
        <path d="M21.5 18.3c-.3-.15-1.8-.88-2.08-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.07-.15-.68-1.64-.93-2.24-.25-.6-.5-.52-.68-.53H12.5c-.2 0-.52.07-.8.38-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.8-.74 2.06-1.45.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" fill="#25D366" />
      </svg>
    </motion.a>
  );
}
