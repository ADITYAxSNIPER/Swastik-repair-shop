import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const mm = (e: MouseEvent) => { if (dragging.current) update(e.clientX); };
    const tm = (e: TouchEvent) => { if (dragging.current) update(e.touches[0].clientX); };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", tm, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <section style={{ background: "var(--apple-gray)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
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
            Before & After
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            See the transformation.
          </h2>
          <p className="text-base sm:text-lg mt-4 mx-auto"
            style={{ color: "var(--apple-text-mid)", maxWidth: 420 }}>
            Drag the slider to compare a cracked screen with our flawless OLED restoration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          ref={containerRef}
          className="relative overflow-hidden cursor-ew-resize select-none w-full rounded-2xl sm:rounded-3xl"
          style={{ height: "clamp(240px, 45vw, 500px)", border: "1px solid rgba(0,0,0,0.1)" }}
          onMouseDown={e => { dragging.current = true; update(e.clientX); }}
          onTouchStart={e => { dragging.current = true; update(e.touches[0].clientX); }}
        >
          {/* After */}
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=2000&auto=format&fit=crop)" }}>
            <span className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(0,113,227,0.85)", color: "#fff", backdropFilter: "blur(8px)" }}>
              After: Perfect
            </span>
          </div>

          {/* Before */}
          <div className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1574887372200-8b17b2b69dd4?q=80&w=2000&auto=format&fit=crop)",
              clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
            }}>
            <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(0,0,0,0.65)", color: "#fff", backdropFilter: "blur(8px)" }}>
              Before: Cracked
            </span>
          </div>

          {/* Divider */}
          <div className="absolute top-0 bottom-0 w-px pointer-events-none"
            style={{ left: `${pos}%`, background: "#fff", boxShadow: "0 0 10px rgba(255,255,255,0.5)" }} />

          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10"
            style={{ left: `${pos}%` }}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white shadow-lg">
              <MoveHorizontal className="text-black" size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
