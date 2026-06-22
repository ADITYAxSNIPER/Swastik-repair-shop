import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, User, Phone, Wrench, MessageCircle, ChevronDown } from "lucide-react";

const brands = [
  "Apple (iPhone)", "Samsung", "Xiaomi / Redmi", "OnePlus", "Vivo",
  "Oppo", "Realme", "Poco", "Motorola", "Infinix", "Nokia", "iQOO", "Other",
];

const issues = [
  "Screen / Display Broken",
  "Battery Draining Fast",
  "Charging Port Not Working",
  "Water Damage",
  "Motherboard / Boot Issue",
  "Speaker / Mic Problem",
  "Software / Bootloop",
  "Camera Not Working",
  "Back Glass Broken",
  "Other Issue",
];

interface FormState {
  name: string;
  phone: string;
  brand: string;
  model: string;
  issue: string;
}

const SHOP_WA = "919565444414";

function buildWaMessage(f: FormState) {
  return encodeURIComponent(
    `Hi Swastik Mobile! I'd like to book a repair:\n\n` +
    `👤 Name: ${f.name}\n` +
    `📱 Phone No: ${f.phone}\n` +
    `📲 Device: ${f.brand}${f.model ? ` – ${f.model}` : ""}\n` +
    `🔧 Issue: ${f.issue}\n\n` +
    `Please confirm my appointment. Thank you!`
  );
}

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", brand: "", model: "", issue: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState, v: string) => {
    setForm(p => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit mobile number";
    if (!form.brand) e.brand = "Please select your device brand";
    if (!form.issue) e.issue = "Please select the issue";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const url = `https://wa.me/${SHOP_WA}?text=${buildWaMessage(form)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const reset = () => {
    setForm({ name: "", phone: "", brand: "", model: "", issue: "" });
    setErrors({});
    setSent(false);
  };

  return (
    <section id="booking" style={{ background: "#000" }} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full" style={{ maxWidth: 620 }}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--brand-cyan)", letterSpacing: "0.18em" }}>
            Book a Repair
          </p>
          <h2 className="apple-headline text-white" style={{ fontSize: "clamp(30px, 5vw, 56px)" }}>
            Get your device fixed{" "}
            <span style={{ color: "var(--brand-cyan)" }}>today.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base" style={{ color: "rgba(245,245,247,0.5)", maxWidth: 420, margin: "12px auto 0" }}>
            Fill in your details — we'll open WhatsApp with everything pre-filled. Just tap Send.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-5 py-6"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}>
                <MessageCircle size={28} style={{ color: "#25D366" }} />
              </div>
              <div>
                <div className="text-white font-display font-bold text-xl mb-2">WhatsApp is opening!</div>
                <p className="text-sm" style={{ color: "rgba(245,245,247,0.5)" }}>
                  Your repair details are pre-filled. Just tap <strong className="text-white">Send</strong> in WhatsApp to confirm your booking.
                </p>
              </div>
              <button
                onClick={reset}
                className="text-sm font-medium px-5 py-2 rounded-full mt-2"
                style={{ color: "var(--brand-cyan)", border: "1px solid rgba(0,113,227,0.3)", background: "rgba(0,113,227,0.08)" }}
              >
                Book another repair
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Name */}
              <Field label="Your Name" icon={<User size={15} />} error={errors.name}>
                <input
                  type="text"
                  placeholder="e.g. Raj Kumar"
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                  className="input-dark"
                />
              </Field>

              {/* Phone */}
              <Field label="Mobile Number" icon={<Phone size={15} />} error={errors.phone}>
                <input
                  type="tel"
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={e => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="input-dark"
                />
              </Field>

              {/* Brand */}
              <Field label="Device Brand" icon={<Smartphone size={15} />} error={errors.brand}>
                <div className="relative">
                  <select
                    value={form.brand}
                    onChange={e => set("brand", e.target.value)}
                    className="input-dark appearance-none pr-9"
                    style={{ color: form.brand ? "#fff" : "rgba(245,245,247,0.35)" }}
                  >
                    <option value="" disabled>Select brand</option>
                    {brands.map(b => <option key={b} value={b} style={{ color: "#000" }}>{b}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "rgba(255,255,255,0.35)" }} />
                </div>
              </Field>

              {/* Model (optional) */}
              <Field label="Device Model (optional)" icon={<Smartphone size={15} />}>
                <input
                  type="text"
                  placeholder="e.g. iPhone 14, Galaxy S21"
                  value={form.model}
                  onChange={e => set("model", e.target.value)}
                  className="input-dark"
                />
              </Field>

              {/* Issue */}
              <Field label="What's the Issue?" icon={<Wrench size={15} />} error={errors.issue}>
                <div className="relative">
                  <select
                    value={form.issue}
                    onChange={e => set("issue", e.target.value)}
                    className="input-dark appearance-none pr-9"
                    style={{ color: form.issue ? "#fff" : "rgba(245,245,247,0.35)" }}
                  >
                    <option value="" disabled>Select issue</option>
                    {issues.map(i => <option key={i} value={i} style={{ color: "#000" }}>{i}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "rgba(255,255,255,0.35)" }} />
                </div>
              </Field>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 w-full flex items-center justify-center gap-2.5 font-semibold py-3.5 rounded-full text-base"
                style={{ background: "#25D366", color: "#fff" }}
              >
                <MessageCircle size={18} />
                Book via WhatsApp
              </motion.button>

              <p className="text-center text-xs" style={{ color: "rgba(245,245,247,0.28)" }}>
                WhatsApp will open with your details pre-filled. Just tap Send to confirm.
              </p>
            </form>
          )}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .input-dark {
          width: 100%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 11px 14px;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-dark::placeholder { color: rgba(245,245,247,0.35); }
        .input-dark:focus { border-color: rgba(0,113,227,0.6); }
        .input-dark option { background: #1d1d1f; color: #fff; }
      ` }} />
    </section>
  );
}

function Field({
  label, icon, error, children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold"
        style={{ color: "rgba(245,245,247,0.55)" }}>
        <span style={{ color: "var(--brand-cyan)" }}>{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs" style={{ color: "#ff6b6b" }}>{error}</p>
      )}
    </div>
  );
}
