import { motion } from "framer-motion";

const brands = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Vivo", "Oppo", "Realme", "Poco", "Motorola", "Infinix", "Nokia", "iQOO"];

export default function Brands() {
  const row = [...brands, ...brands, ...brands];

  return (
    <section id="brands" style={{ background: "var(--apple-gray)" }} className="py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 mb-8 text-center" style={{ maxWidth: 980 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-2"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            Supported Brands
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(28px, 4.5vw, 48px)", color: "var(--apple-text-dark)" }}>
            We repair every brand.
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--apple-gray), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--apple-gray), transparent)" }} />
        <div className="flex" style={{ animation: "brandScroll 30s linear infinite", width: "max-content" }}>
          {row.map((b, i) => (
            <div key={i} className="shrink-0 px-6 sm:px-8 py-3"
              style={{ opacity: 0.5 }}>
              <span className="font-display font-bold text-lg sm:text-xl whitespace-nowrap"
                style={{ color: "var(--apple-text-dark)" }}>
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes brandScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-33.33%)} }
      ` }} />
    </section>
  );
}
