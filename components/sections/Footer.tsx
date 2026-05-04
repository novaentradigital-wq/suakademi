"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cols = [
  {
    title: "Hızlı Linkler",
    links: [
      { label: "Anasayfa", href: "#hero" },
      { label: "Hakkımızda", href: "#about" },
      { label: "Ekibimiz", href: "#team" },
      { label: "Galeri", href: "#gallery" },
      { label: "İletişim", href: "#contact" }
    ]
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Yetişkin Yüzme", href: "#services" },
      { label: "Bebek Programları", href: "#services" },
      { label: "Akuatik Terapi", href: "#services" },
      { label: "Klinik Pilates", href: "#services" },
      { label: "Aqua Fitness", href: "#services" }
    ]
  }
];

const socials = [
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
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const op = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.4, 0.85]);

  return (
    <footer ref={ref} className="relative isolate overflow-hidden bg-ink-deep text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        {/* Brand */}
        <div className="lg:col-span-5">
          <a href="#hero" className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-aqua-gradient">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M12 2c-3.5 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11z" />
              </svg>
            </span>
            <span>
              <span className="block font-display text-[28px] italic">Su Akademi</span>
              <span className="text-[10px] uppercase tracking-[0.34em] text-white/60">Türkiye®</span>
            </span>
          </a>
          <p className="mt-7 max-w-sm text-[14.5px] leading-[1.85] text-white/70">
            Sağlıklı Yaşamın Suyla Buluştuğu Yer. Kocaeli&apos;nin ilk akuatik
            terapi merkezi, IATF işbirliğiyle uluslararası standartlarda hizmet.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
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

        {/* Link columns */}
        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.34em] text-aqua-foam">{c.title}</h4>
            <ul className="mt-7 space-y-3 text-[14px]">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group/fl inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
                  >
                    <span className="block h-px w-3 bg-white/30 transition-all duration-500 group-hover/fl:w-6 group-hover/fl:bg-aqua-light" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.34em] text-aqua-foam">İletişim</h4>
          <ul className="mt-7 space-y-3 text-[13.5px] text-white/75">
            <li>Alikahya Mah. Sakıp Sabancı Bulvarı No: 14, İzmit / Kocaeli</li>
            <li>
              <a href="tel:+905452822743" className="hover:text-white">
                +90 545 282 27 43
              </a>
            </li>
            <li>
              <a href="mailto:info@suakademiturkiye.com.tr" className="hover:text-white">
                info@suakademiturkiye.com.tr
              </a>
            </li>
            <li className="text-white/55">Pazartesi – Cumartesi · 08:00 – 22:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-7 text-[12px] text-white/55 sm:flex-row sm:items-center lg:px-12">
          <p>© 2025 Su Akademi Türkiye® — Tüm hakları saklıdır.</p>
          <p>Web Tasarım & Geliştirme · Studio</p>
        </div>
      </div>

      {/* Parallax giant text */}
      <div className="relative h-[180px] overflow-hidden sm:h-[260px]">
        <motion.div
          style={{ y, opacity: op }}
          className="pointer-events-none select-none absolute inset-x-0 -bottom-12 text-center"
        >
          <span className="font-display text-[clamp(7rem,22vw,22rem)] italic leading-[0.85] tracking-tightish text-white/8">
            <span style={{ color: "rgba(255,255,255,0.08)" }}>Su Akademi</span>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
