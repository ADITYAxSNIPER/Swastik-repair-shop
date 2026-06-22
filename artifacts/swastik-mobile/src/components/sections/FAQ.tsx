import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a screen replacement take?", a: "Most screen replacements take 30–60 minutes. We test every function before handing your device back." },
  { q: "Do you use genuine parts?", a: "Yes — we use only high-quality genuine or OEM parts for all repairs, ensuring longevity and perfect function." },
  { q: "What brands do you repair?", a: "Apple, Samsung, Xiaomi, Vivo, Oppo, Realme, OnePlus, Motorola, Poco, Infinix, and virtually all other brands." },
  { q: "Are your repairs reliable?", a: "Absolutely. We use only high-quality OEM parts and every repair is fully tested before we hand your device back." },
  { q: "Is my data safe?", a: "Absolutely. We never access personal data. You can set a temporary password or guest mode during repair." },
  { q: "Can I get a quote before visiting?", a: "Yes! Call or WhatsApp us with your phone model and issue for a free, no-obligation estimate." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--apple-white)" }} className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 680 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3 sm:mb-4"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            FAQs
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "var(--apple-text-dark)" }}>
            Questions answered.
          </h2>
        </motion.div>

        <div>
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            >
              <button
                className="w-full flex items-start sm:items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display font-semibold text-sm sm:text-base md:text-[17px] leading-snug"
                  style={{ color: "var(--apple-text-dark)" }}>
                  {f.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mt-0.5 sm:mt-0"
                  style={{ background: open === i ? "var(--brand-cyan)" : "rgba(0,0,0,0.06)" }}
                >
                  <Plus size={14} style={{ color: open === i ? "#000" : "var(--apple-text-dark)" }} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed"
                      style={{ color: "var(--apple-text-mid)" }}>
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
