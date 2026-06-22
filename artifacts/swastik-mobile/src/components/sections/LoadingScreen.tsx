import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("swastik_loaded")) { setDone(true); return; }
    const dur = 1400;
    const start = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(run);
      else setTimeout(() => { setDone(true); sessionStorage.setItem("swastik_loaded", "1"); }, 200);
    };
    requestAnimationFrame(run);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: "#000" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="text-4xl font-display font-black tracking-tight">
                <span style={{ color: "var(--brand-cyan)" }}>S</span>
                <span className="text-white">wastik Mobile</span>
              </div>
              <div className="text-[11px] font-medium tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.2em" }}>
                Repairing Shop
              </div>
            </div>

            <div className="w-40 rounded-full overflow-hidden" style={{ height: 2, background: "rgba(255,255,255,0.1)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "var(--brand-cyan)",
                  transition: "width 60ms linear",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
