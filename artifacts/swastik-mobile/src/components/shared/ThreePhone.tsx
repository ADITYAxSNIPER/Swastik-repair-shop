import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ThreePhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * -30;
      rotateY.set(x);
      rotateX.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="flex items-center justify-center w-full h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="relative rounded-[2.5rem] overflow-hidden"
          style={{
            width: "200px",
            height: "400px",
            background: "linear-gradient(145deg, #1a1a2e 0%, #0d0d1a 50%, #111128 100%)",
            boxShadow: "0 0 0 2px rgba(0,229,255,0.4), 0 0 40px rgba(0,229,255,0.15), 0 0 80px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            border: "1px solid rgba(0,229,255,0.25)",
          }}
        >
          <div
            className="absolute inset-2 rounded-[2rem] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #050816 0%, #0a0a1f 40%, #050816 100%)", boxShadow: "inset 0 0 30px rgba(0,229,255,0.05)" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 rounded-full"
                style={{ background: "radial-gradient(circle, #00E5FF, #7C3AED)" }}
              />
              <motion.div
                animate={{ width: ["40%", "70%", "40%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #00E5FF, #7C3AED)", width: "60%" }}
              />
              <motion.div
                animate={{ width: ["60%", "30%", "60%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="h-1 rounded-full opacity-50"
                style={{ background: "rgba(0,229,255,0.4)", width: "50%" }}
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="mt-2 px-4 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.3)", color: "#00E5FF", fontSize: "9px" }}
              >
                Repair Complete ✓
              </motion.div>
            </div>
            <motion.div
              className="absolute left-0 right-0 h-px opacity-20"
              style={{ background: "linear-gradient(90deg, transparent, #00E5FF, transparent)" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full"
            style={{ width: "60px", height: "18px", background: "#050816", zIndex: 10 }} />
          <div className="absolute right-0 top-20 rounded-r-sm"
            style={{ width: "3px", height: "40px", background: "rgba(0,229,255,0.3)" }} />
          <div className="absolute right-0 top-32 rounded-r-sm"
            style={{ width: "3px", height: "30px", background: "rgba(0,229,255,0.2)" }} />
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ boxShadow: "inset 0 0 20px rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
          />
        </div>
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full blur-xl opacity-40"
          style={{ width: "140px", height: "20px", background: "radial-gradient(ellipse, #00E5FF 0%, #7C3AED 60%, transparent 100%)" }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#00E5FF" : "#7C3AED",
              top: `${15 + i * 12}%`,
              left: i % 2 === 0 ? "-20px" : "calc(100% + 12px)",
              filter: "blur(0.5px)",
              boxShadow: `0 0 6px ${i % 2 === 0 ? "#00E5FF" : "#7C3AED"}`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
