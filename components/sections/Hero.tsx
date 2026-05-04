"use client";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/ui/AuroraBackground";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden text-white"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <SectionLabel variant="light" className="text-aqua-foam">
            Kocaeli&apos;nin İlk Akuatik Terapi Merkezi
          </SectionLabel>
        </motion.div>

        {/* Headline — line by line reveal */}
        <h1 className="h-display mt-7 max-w-5xl text-[clamp(3rem,8vw,7.6rem)] font-light leading-[0.96] text-white">
          {[
            { text: "Sağlıklı", italic: false },
            { text: "Yaşamın", italic: false },
            { text: "Suyla", italic: true },
            { text: "Buluştuğu", italic: false },
            { text: "Yer", italic: false }
          ].map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={w.italic ? "italic text-gold" : ""}>{w.text}</span>
                {i < 4 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-9 max-w-xl text-base leading-relaxed text-white/80 sm:text-[17px]"
        >
          Uluslararası standartlarda yüzme eğitimi, akuatik terapi ve wellness hizmetleri.
          960 m² rafine bir tesiste, 0 yaşından 99&apos;a herkes için.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.55 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#services" variant="solid" shimmer>
            Hizmetlerimizi Keşfedin
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            <span>Randevu Al</span>
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover/mb:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Keşfet</span>
        <span className="relative block h-9 w-[1px] overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 block h-1/2 w-full origin-top animate-scroll-bounce bg-white" />
        </span>
      </motion.a>

      {/* EST. 2021 rotating badge */}
      <div className="pointer-events-none absolute bottom-12 right-8 z-10 hidden md:block">
        <div className="relative h-28 w-28">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 h-full w-full animate-spin-slow text-aqua-foam"
          >
            <defs>
              <path
                id="circ"
                d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              />
            </defs>
            <text
              fontSize="9"
              letterSpacing="3.4"
              fill="currentColor"
              fontFamily="var(--font-manrope), sans-serif"
            >
              <textPath href="#circ" startOffset="0">
                SU AKADEMİ • SAĞLIKLI YAŞAM • EST. 2021 •&nbsp;
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-aqua-foam">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 2c-3.5 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
