import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Brands", href: "#brands" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="mx-auto px-6 max-w-[980px] flex items-center justify-between" style={{ height: 48 }}>
          <a href="#" className="text-white font-display font-black text-lg tracking-tight leading-none">
            <span style={{ color: "var(--brand-cyan)" }}>S</span>wastik <span className="hidden sm:inline">Mobile</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a
                key={l.name}
                href={l.href}
                className="text-[13px] font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.72)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="text-[13px] font-medium px-4 py-1.5 rounded-full transition-all duration-200"
              style={{
                color: "var(--brand-cyan)",
                border: "1px solid rgba(0,212,240,0.4)",
                background: "rgba(0,212,240,0.08)",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,240,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,240,0.08)"; }}
            >
              Book Repair
            </a>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", paddingTop: 80 }}
          >
            <button className="absolute top-4 right-5 text-white p-1" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map(l => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-display font-bold text-white"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-3 rounded-full font-semibold text-black"
                style={{ background: "var(--brand-cyan)" }}
              >
                Book Repair
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
