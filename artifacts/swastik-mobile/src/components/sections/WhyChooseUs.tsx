import { motion } from "framer-motion";
import { ShieldCheck, Award, Tag, Zap, Cpu, Heart } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Genuine Parts Only",   desc: "OEM and high-grade parts only. No cheap knockoffs.",               accent: "var(--brand-cyan)" },
  { icon: Award,       title: "Expert Technicians",   desc: "Certified professionals with years of micro-soldering experience.", accent: "var(--brand-cyan)" },
  { icon: Tag,         title: "Transparent Pricing",  desc: "Firm quotes before we start. No hidden fees.",                     accent: "var(--brand-cyan)" },
  { icon: Zap,         title: "Fast Turnaround",      desc: "Most common repairs completed in 30–60 minutes.",                  accent: "var(--brand-cyan)" },
  { icon: Cpu,         title: "Advanced Diagnostics", desc: "Professional tools to pinpoint the exact issue.",                  accent: "var(--brand-cyan)" },
  { icon: Heart,       title: "Data Privacy",         desc: "Your personal data is never accessed or touched.",                 accent: "var(--brand-cyan)" },
];

export default function WhyChooseUs() {
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
            Why Swastik Mobile
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            A better repair experience.
          </h2>
          <p className="text-base sm:text-lg mt-4 mx-auto" style={{ color: "var(--apple-text-mid)", maxWidth: 480, lineHeight: 1.6 }}>
            Clean, professional, and precise — raising the standard for phone repair in Shahjahanpur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: "var(--apple-gray)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 shrink-0"
                style={{ background: "rgba(0,113,227,0.1)" }}>
                <f.icon style={{ color: f.accent, width: 18, height: 18 }} />
              </div>
              <h3 className="font-display font-bold text-sm sm:text-base mb-1.5" style={{ color: "var(--apple-text-dark)" }}>{f.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--apple-text-mid)" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 mt-10 rounded-2xl px-5 py-4 w-full sm:w-auto"
          style={{ background: "rgba(0,113,227,0.07)", border: "1px solid rgba(0,113,227,0.18)" }}
        >
          <ShieldCheck style={{ color: "var(--brand-cyan)", width: 22, height: 22, flexShrink: 0 }} />
          <div>
            <div className="font-bold text-sm sm:text-base" style={{ color: "var(--apple-text-dark)" }}>30-Day Warranty on all repairs</div>
            <div className="text-xs sm:text-sm" style={{ color: "var(--apple-text-mid)" }}>Screen, battery &amp; charging port replacements</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
