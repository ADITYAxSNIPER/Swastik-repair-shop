import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Devices Repaired",  sub: "and counting" },
  { value: 1000, suffix: "+", label: "Happy Customers",   sub: "across Shahjahanpur" },
  { value: 5.0,  suffix: "★", label: "Star Rating",       sub: "across all platforms" },
  { value: 24,   suffix: "h", label: "Turnaround",        sub: "for most repairs" },
];

function Counter({ value, suffix, label, sub, index }: typeof stats[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let raf: number;
      const dur = 1500;
      const start = performance.now();
      const run = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setCount(value % 1 !== 0 ? parseFloat((e * value).toFixed(1)) : Math.floor(e * value));
        if (p < 1) raf = requestAnimationFrame(run);
        else setCount(value);
      };
      raf = requestAnimationFrame(run);
      return () => cancelAnimationFrame(raf);
    } else { setCount(0); }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="flex flex-col items-center text-center px-4 py-8 sm:py-10"
    >
      <div className="font-display font-black tabular-nums mb-1"
        style={{ fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.03em", color: "var(--apple-text-dark)", lineHeight: 1 }}>
        {value % 1 !== 0 ? count.toFixed(1) : count}
        <span style={{ color: "var(--brand-cyan)" }}>{suffix}</span>
      </div>
      <div className="font-semibold text-sm sm:text-base mb-0.5" style={{ color: "var(--apple-text-dark)" }}>{label}</div>
      <div className="text-xs sm:text-sm" style={{ color: "var(--apple-text-mid)" }}>{sub}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "var(--apple-gray)" }}>
      <div className="mx-auto w-full" style={{ maxWidth: 980, borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={[
              "border-black/[0.06]",
              i % 2 === 0 ? "border-r" : "",
              i < 2 ? "border-b md:border-b-0" : "",
              i < 3 ? "md:border-r" : "",
            ].join(" ")}>
              <Counter {...s} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
