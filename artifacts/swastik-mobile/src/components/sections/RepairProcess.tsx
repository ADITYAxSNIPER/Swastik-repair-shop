import { motion } from "framer-motion";
import { Search, FileText, PenTool, CheckCircle, Smartphone } from "lucide-react";

const steps = [
  { n: "01", icon: Search,       title: "Diagnostics",        desc: "Full 20-point inspection to pinpoint the exact issue.", accent: "var(--brand-cyan)" },
  { n: "02", icon: FileText,     title: "Transparent Quote",  desc: "Firm price and time estimate before any work begins.", accent: "var(--brand-violet)" },
  { n: "03", icon: PenTool,      title: "Precision Repair",   desc: "Certified technicians using only OEM-grade parts.", accent: "var(--brand-mint)" },
  { n: "04", icon: CheckCircle,  title: "Quality Check",      desc: "Every function tested post-repair before return.", accent: "var(--brand-cyan)" },
  { n: "05", icon: Smartphone,   title: "Pickup Ready",       desc: "Cleaned, tested, and ready to go.", accent: "var(--brand-violet)" },
];

export default function RepairProcess() {
  return (
    <section id="process" style={{ background: "var(--apple-white)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 720 }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            How It Works
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            From broken to{" "}
            <span style={{ color: "var(--brand-cyan)" }}>perfect.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl"
              style={{ background: "var(--apple-gray)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}>
                <s.icon style={{ color: s.accent, width: 18, height: 18 }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: s.accent }}>Step {s.n}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg mb-1" style={{ color: "var(--apple-text-dark)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--apple-text-mid)" }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
