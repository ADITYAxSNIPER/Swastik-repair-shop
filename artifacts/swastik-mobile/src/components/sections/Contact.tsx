import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address", value: "4414, Tiwari Building, Near Kaunjia Hospital, Eid Gah Road, Shahjahanpur, UP 242001", href: undefined },
  { icon: Phone,  label: "Phone",   value: "+91 95654 44414", href: "tel:+919565444414" },
  { icon: Clock,  label: "Hours",   value: "Monday – Sunday: 10:30 AM – 9:00 PM", href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--apple-gray)" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
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
            Get In Touch
          </p>
          <h2 className="apple-headline" style={{ fontSize: "clamp(30px, 5vw, 56px)", color: "var(--apple-text-dark)" }}>
            Let's fix it <span style={{ color: "var(--brand-cyan)" }}>today.</span>
          </h2>
          <p className="text-base sm:text-lg mt-4 mx-auto"
            style={{ color: "var(--apple-text-mid)", maxWidth: 440, lineHeight: 1.6 }}>
            Drop by our service center or reach out — your device will be back to normal fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 items-start">

          <div className="space-y-3 sm:space-y-4">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-3 sm:gap-4 items-start rounded-2xl p-4 sm:p-5"
                style={{ background: "var(--apple-white)", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(0,113,227,0.1)" }}>
                  <item.icon style={{ color: "var(--brand-cyan)", width: 16, height: 16 }} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--brand-cyan)", letterSpacing: "0.12em" }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-bold text-lg sm:text-xl hover:underline"
                      style={{ color: "var(--apple-text-dark)", textDecorationColor: "var(--brand-cyan)" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--apple-text-mid)" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 pt-1"
            >
              <a href="https://wa.me/919565444414" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full text-white text-sm sm:text-base"
                style={{ background: "#25D366" }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="tel:+919565444414"
                className="flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full text-sm sm:text-base"
                style={{ background: "var(--brand-cyan)", color: "#fff" }}>
                <Phone size={16} /> Call Now
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden w-full"
            style={{ height: "clamp(280px, 50vw, 400px)", border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Swastik+Mobile+Repairing+Center,+Shahjahanpur&t=m&z=15&output=embed&iwloc=near"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
