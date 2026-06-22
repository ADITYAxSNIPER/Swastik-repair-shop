import { motion } from "framer-motion";
import { Smartphone, Battery, Zap, Droplets, Cpu, Settings, Volume2, Headphones } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Screen Replacement",  desc: "Premium OLED/LCD displays. True-tone, perfect touch.", accent: "var(--brand-cyan)" },
  { icon: Battery,    title: "Battery Replacement", desc: "Original capacity restored. Same-day service.",         accent: "var(--brand-mint)" },
  { icon: Zap,        title: "Charging Port",       desc: "Micro-soldering and port replacement.",                 accent: "var(--brand-violet)" },
  { icon: Droplets,   title: "Water Damage",        desc: "Ultrasonic cleaning and motherboard revival.",          accent: "var(--brand-cyan)" },
  { icon: Cpu,        title: "Motherboard Repair",  desc: "Advanced micro-soldering, IC replacement.",            accent: "var(--brand-mint)" },
  { icon: Settings,   title: "Software Issues",     desc: "Bootloop fixes, data recovery, firmware flashing.",    accent: "var(--brand-violet)" },
  { icon: Volume2,    title: "Speaker & Mic",       desc: "Crystal-clear audio restoration.",                     accent: "var(--brand-cyan)" },
  { icon: Headphones, title: "Accessories",         desc: "Tempered glass, cases, certified chargers.",           accent: "var(--brand-mint)" },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--apple-white)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 980 }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            Repair Services
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            Everything your device needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg mx-auto" style={{ color: "var(--apple-text-mid)", maxWidth: 480 }}>
            From a cracked screen to advanced motherboard surgery, certified precision every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3"
              style={{ background: "var(--apple-gray)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${s.accent}18` }}>
                <s.icon style={{ color: s.accent, width: 18, height: 18 }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base mb-1.5" style={{ color: "var(--apple-text-dark)" }}>
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--apple-text-mid)" }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
