import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Raj Kumar",    text: "Got my Samsung screen replaced in 45 minutes. Excellent quality and very affordable.", avatar: "RK" },
  { name: "Priya Sharma", text: "My iPhone battery now lasts all day again. They used a genuine Apple battery — absolutely worth it.", avatar: "PS" },
  { name: "Mohd. Farouk", text: "Thought my water-damaged Redmi was gone forever. Swastik Mobile brought it back with all data intact!", avatar: "MF" },
  { name: "Sunita Devi",  text: "So professional and transparent. Told me the exact problem before starting — no upselling.", avatar: "SD" },
  { name: "Amit Verma",   text: "Charging port repaired in 30 minutes for a very fair price. Fast, reliable, skilled team.", avatar: "AV" },
  { name: "Neha Gupta",   text: "OnePlus software issue fixed perfectly. Super fast, friendly staff. My go-to shop from now on!", avatar: "NG" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--apple-white)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 980 }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            Testimonials
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            Trusted by Shahjahanpur.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} fill="#FFD60A" color="#FFD60A" size={16} />)}
            <span className="text-sm font-semibold ml-2" style={{ color: "var(--apple-text-dark)" }}>5.0 · 500+ repairs</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
              style={{ background: "var(--apple-gray)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="#FFD60A" color="#FFD60A" />)}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--apple-text-mid)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                  style={{ background: "var(--brand-cyan)" }}>
                  {t.avatar}
                </div>
                <span className="font-semibold text-sm" style={{ color: "var(--apple-text-dark)" }}>{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
