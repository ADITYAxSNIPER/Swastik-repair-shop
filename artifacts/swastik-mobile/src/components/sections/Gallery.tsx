import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=900&auto=format&fit=crop", label: "Screen Repair" },
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop", label: "Precision Tools" },
  { src: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=900&auto=format&fit=crop", label: "Disassembly" },
  { src: "https://images.unsplash.com/photo-1555617783-0599bb141cb0?q=80&w=900&auto=format&fit=crop", label: "PCB Work" },
  { src: "https://images.unsplash.com/photo-1601524909162-ae8725290836?q=80&w=900&auto=format&fit=crop", label: "Battery Service" },
  { src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=900&auto=format&fit=crop", label: "Diagnostics" },
];

export default function Gallery() {
  const [sel, setSel] = useState<string | null>(null);

  return (
    <section id="gallery" style={{ background: "var(--apple-gray)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 980 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3 sm:mb-4"
            style={{ color: "var(--brand-violet)", letterSpacing: "0.18em" }}>
            Workshop
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "var(--apple-text-dark)" }}>
            Inside the lab.
          </h2>
          <p className="text-base sm:text-lg mt-4 mx-auto"
            style={{ color: "var(--apple-text-mid)", maxWidth: 400 }}>
            A clean, ESD-safe, professional environment where every repair happens.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3"
          style={{ gridAutoRows: "clamp(130px, 18vw, 210px)" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ scale: 1.02 }}
              className={[
                "relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group",
                i === 0 ? "md:col-span-2 md:row-span-2" : "",
                i === 3 ? "md:col-span-2" : "",
              ].join(" ")}
              onClick={() => setSel(img.src)}
            >
              <motion.img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.88)" }}
                whileHover={{ scale: 1.07, filter: "brightness(1)", transition: { duration: 0.5 } }}
              />
              <div
                className="absolute inset-0 flex items-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
              >
                <span className="text-xs sm:text-sm font-semibold text-white">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(20px)" }}
            onClick={() => setSel(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              onClick={() => setSel(null)}
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={sel}
              alt=""
              className="max-w-full max-h-[85vh] rounded-xl sm:rounded-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
