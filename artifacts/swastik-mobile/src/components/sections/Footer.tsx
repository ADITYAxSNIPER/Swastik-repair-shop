const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Brands", href: "#brands" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const serviceList = [
  "Screen Replacement",
  "Battery Replacement",
  "Charging Port",
  "Water Damage",
  "Motherboard Repair",
];

const contactItems = [
  "+91 95654 44414",
  "4414, Tiwari Building",
  "Shahjahanpur, UP 242001",
  "Mon–Sun · 10:30 AM – 9 PM",
];

export default function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 980 }}>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#" className="font-display font-black text-xl sm:text-2xl tracking-tight block mb-1">
              <span style={{ color: "var(--brand-cyan)" }}>S</span>
              <span className="text-white">wastik Mobile</span>
            </a>
            <div className="text-[10px] font-semibold tracking-widest uppercase mb-3 sm:mb-4"
              style={{ color: "rgba(245,245,247,0.32)", letterSpacing: "0.18em" }}>
              Repairing Shop
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6" style={{ color: "rgba(245,245,247,0.4)" }}>
              Shahjahanpur's most trusted mobile repair shop. Genuine parts, fast service, 30-day warranty.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a href="https://wa.me/919565444414" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(245,245,247,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                WhatsApp
              </a>
              <a href="tel:+919565444414"
                className="text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                style={{ background: "rgba(0,212,240,0.08)", color: "var(--brand-cyan)", border: "1px solid rgba(0,212,240,0.22)" }}>
                Call Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: "rgba(245,245,247,0.32)", letterSpacing: "0.15em" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-xs sm:text-sm transition-colors duration-200"
                    style={{ color: "rgba(245,245,247,0.52)" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,245,247,0.52)")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: "rgba(245,245,247,0.32)", letterSpacing: "0.15em" }}>
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceList.map((s, i) => (
                <li key={i} className="text-xs sm:text-sm" style={{ color: "rgba(245,245,247,0.52)" }}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4"
              style={{ color: "rgba(245,245,247,0.32)", letterSpacing: "0.15em" }}>
              Contact
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {contactItems.map((c, i) => (
                <li key={i} className="text-xs sm:text-sm" style={{ color: "rgba(245,245,247,0.52)" }}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-[11px] sm:text-xs text-center sm:text-left" style={{ color: "rgba(245,245,247,0.28)" }}>
            © {new Date().getFullYear()} Swastik Mobile Repairing Shop. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs" style={{ color: "rgba(245,245,247,0.2)" }}>
            Shahjahanpur, Uttar Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
