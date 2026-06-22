import { motion } from "framer-motion";

const chips = ["Screen Repair", "Battery", "Water Damage", "Motherboard", "Expert Technicians"];

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "#000", minHeight: "100svh" }}
    >
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 pt-20 pb-16 w-full" style={{ maxWidth: 780 }}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-5"
          style={{ color: "var(--brand-cyan)", letterSpacing: "0.2em" }}
        >
          Shahjahanpur's #1 Rated Repair Shop
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="apple-headline text-white w-full"
          style={{ fontSize: "clamp(40px, 8vw, 88px)", lineHeight: 1.06 }}
        >
          Expert Mobile Repairs.
          <br />
          <span style={{ color: "var(--brand-cyan)" }}>
            Done Right.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 sm:mt-6"
          style={{ color: "rgba(245,245,247,0.6)", fontSize: "clamp(16px, 2.2vw, 20px)", maxWidth: 540, lineHeight: 1.6 }}
        >
          From cracked screens to motherboard surgery — genuine parts, surgical precision, and certified expert technicians.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full"
          style={{ maxWidth: 380 }}
        >
          <a
            href="#contact"
            className="w-full sm:w-auto font-semibold rounded-full text-center"
            style={{ background: "var(--brand-cyan)", color: "#fff", fontSize: 16, padding: "13px 32px" }}
          >
            Book a Repair
          </a>
          <a
            href="tel:+919565444414"
            className="w-full sm:w-auto font-semibold rounded-full text-center"
            style={{ color: "rgba(245,245,247,0.75)", border: "1px solid rgba(255,255,255,0.18)", fontSize: 16, padding: "12px 32px" }}
          >
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {chips.map((c, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(245,245,247,0.55)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
