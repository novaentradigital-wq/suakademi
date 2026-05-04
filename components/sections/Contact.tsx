"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Toast from "@/components/ui/Toast";

const services = [
  "Yetişkin Yüzme",
  "Bebek & Çocuk Programları",
  "Akuatik Terapi",
  "Klinik Pilates",
  "Aqua Fitness",
  "Watsu / Bad Ragaz"
];

export default function Contact() {
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({
    ad: "",
    tel: "",
    email: "",
    hizmet: "",
    mesaj: ""
  });
  const [open, setOpen] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setToast(true);
    setForm({ ad: "", tel: "", email: "", hizmet: "", mesaj: "" });
    setTimeout(() => setToast(false), 3500);
  };

  const set = (k: keyof typeof form, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <section id="contact" className="relative bg-bg-section py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info card */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[6px] bg-ink-deep p-9 text-white sm:p-12 lg:col-span-5"
          >
            <div className="aurora-blob" style={{ width: 380, height: 380, top: "-30%", right: "-25%", background: "#05BFDB", opacity: 0.4 }} />
            <div className="relative">
              <SectionLabel variant="light" className="text-aqua-foam">Bize Ulaşın</SectionLabel>
              <h2 className="h-display mt-6 text-[clamp(2rem,3.6vw,3.4rem)]">
                Sorularınızı{" "}
                <span className="italic text-gold">Bekliyoruz.</span>
              </h2>

              <div className="mt-12 space-y-7 text-[14px]">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua-foam">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-aqua-foam/70">Adres</p>
                    <p className="mt-1 leading-relaxed text-white/90">
                      Alikahya Mah. Sakıp Sabancı Bulvarı
                      <br />
                      No: 14, İzmit / Kocaeli
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua-foam">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.4 2L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2-.4c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-aqua-foam/70">Telefon</p>
                    <a href="tel:+905452822743" className="mt-1 block leading-relaxed text-white/90 hover:text-aqua-foam">
                      +90 545 282 27 43
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua-foam">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 6l8 7 8-7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-aqua-foam/70">E-posta</p>
                    <a href="mailto:info@suakademiturkiye.com.tr" className="mt-1 block leading-relaxed text-white/90 hover:text-aqua-foam">
                      info@suakademiturkiye.com.tr
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-aqua-foam">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-aqua-foam/70">Çalışma Saatleri</p>
                    <p className="mt-1 leading-relaxed text-white/90">
                      Pazartesi – Cumartesi
                      <br />
                      08:00 – 22:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-12 flex items-center gap-3">
                {[
                  {
                    label: "Instagram",
                    href: "https://instagram.com/suakademitr",
                    path: "M16.98 4H7.02A3.02 3.02 0 0 0 4 7.02v9.96A3.02 3.02 0 0 0 7.02 20h9.96A3.02 3.02 0 0 0 20 16.98V7.02A3.02 3.02 0 0 0 16.98 4zM12 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2zm5.4-1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM12 10.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z"
                  },
                  {
                    label: "Facebook",
                    href: "https://facebook.com/suakademitr",
                    path: "M13 22v-8h3l1-4h-4V7.5c0-1.1.3-2 2-2h2V2h-3.5C10 2 9 4 9 6v4H6v4h3v8h4z"
                  },
                  {
                    label: "YouTube",
                    href: "https://youtube.com/@suakademitr",
                    path: "M21.6 7.2a3.5 3.5 0 0 0-2.5-2.5C17 4.2 12 4.2 12 4.2s-5 0-7.1.5A3.5 3.5 0 0 0 2.4 7.2 36 36 0 0 0 2 12a36 36 0 0 0 .4 4.8 3.5 3.5 0 0 0 2.5 2.5c2.1.5 7.1.5 7.1.5s5 0 7.1-.5a3.5 3.5 0 0 0 2.5-2.5c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.4V8.6l5.5 3.4z"
                  }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="group/s relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-aqua-light hover:text-white"
                  >
                    <span className="absolute inset-0 scale-0 rounded-full bg-aqua-light transition-transform duration-500 group-hover/s:scale-100" />
                    <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-4 w-4">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={submit}
            className="rounded-[6px] bg-white p-9 shadow-[0_25px_60px_-30px_rgba(10,77,104,0.35)] sm:p-12 lg:col-span-7"
          >
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] text-ink-deep">
              Hızlı İletişim Formu
            </h3>
            <p className="mt-2 text-[13px] text-ink-gray">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div className="float-field">
                <input
                  required
                  id="ad"
                  type="text"
                  placeholder=" "
                  value={form.ad}
                  onChange={(e) => set("ad", e.target.value)}
                />
                <label htmlFor="ad">Ad Soyad</label>
              </div>
              <div className="float-field">
                <input
                  required
                  id="tel"
                  type="tel"
                  placeholder=" "
                  value={form.tel}
                  onChange={(e) => set("tel", e.target.value)}
                />
                <label htmlFor="tel">Telefon</label>
              </div>
              <div className="float-field sm:col-span-2">
                <input
                  required
                  id="email"
                  type="email"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <label htmlFor="email">E-posta</label>
              </div>

              {/* Custom dropdown */}
              <div className={`float-field sm:col-span-2 relative ${form.hizmet ? "has-value" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpen((p) => !p)}
                  className="flex w-full items-center justify-between border-b border-ink-deep/15 bg-transparent pb-3 pt-[22px] text-left text-[15px] text-ink-dark outline-none transition-colors focus:border-aqua"
                >
                  {form.hizmet || " "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`h-4 w-4 text-ink-gray transition-transform ${open ? "rotate-180" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <label>İlgilendiğiniz Hizmet</label>
                {open && (
                  <ul className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-md border border-ink-deep/10 bg-white shadow-[0_25px_50px_-20px_rgba(10,77,104,0.35)]">
                    {services.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          onClick={() => {
                            set("hizmet", s);
                            setOpen(false);
                          }}
                          className="block w-full px-5 py-3 text-left text-[14px] text-ink-dark transition-colors hover:bg-bg-section hover:text-aqua"
                        >
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="float-field sm:col-span-2">
                <textarea
                  required
                  id="mesaj"
                  placeholder=" "
                  value={form.mesaj}
                  onChange={(e) => set("mesaj", e.target.value)}
                />
                <label htmlFor="mesaj">Mesajınız</label>
              </div>
            </div>

            <button
              type="submit"
              className="group/btn mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-aqua px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-aqua-light"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full"
                aria-hidden
              />
              <span className="relative">Bize Ulaşın</span>
              <svg
                viewBox="0 0 24 24"
                className="relative h-3.5 w-3.5 transition-transform duration-500 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </motion.form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-24 h-[440px] w-full overflow-hidden">
        <iframe
          title="Su Akademi konumu"
          src="https://www.openstreetmap.org/export/embed.html?bbox=29.96%2C40.78%2C29.99%2C40.80&amp;layer=mapnik&amp;marker=40.7902%2C29.9763"
          loading="lazy"
          className="h-full w-full grayscale-[35%] saturate-[0.85] contrast-[0.95]"
        />
      </div>

      <Toast open={toast} message="Mesajınız alındı! En kısa sürede dönüş yapacağız." onClose={() => setToast(false)} />
    </section>
  );
}
