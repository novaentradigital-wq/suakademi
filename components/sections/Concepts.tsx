"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const concepts = [
  {
    name: "WST-Halliwick",
    short: "Su İçi Bağımsızlık",
    desc:
      "Halliwick yaklaşımı, bireyin suya uyumunu ve dengesini geliştirmeye odaklanan bir 10 nokta programıdır. Özellikle motor bozukluklarda etkili."
  },
  {
    name: "Klinik Ai Chi",
    short: "Akuatik Hareket Sanatı",
    desc:
      "Tai Chi'den esinlenen yavaş ve akıcı su içi egzersizler. Denge, postür ve solunum kontrolünü geliştirir, stres yönetiminde etkilidir."
  },
  {
    name: "Bad Ragaz Halka Metodu",
    short: "Pasif & Aktif Direnç",
    desc:
      "Su içi yüzdürme halkalarıyla uygulanan PNF temelli rehabilitasyon. Ortopedik ve nörolojik hastalarda kasları güçlendirir."
  },
  {
    name: "Aqua-T-Relax",
    short: "Su İçi Relaksasyon",
    desc:
      "Watsu temelli, sıcak su içinde ağırlıksızlık hissiyle uygulanan derin gevşeme tekniği. Anksiyete ve kronik ağrıyı azaltır."
  },
  {
    name: "Pediatrik Akuatik Egzersiz",
    short: "Çocuklara Özel Terapi",
    desc:
      "Cerebral palsy, otizm spektrum, down sendromu ve gelişimsel gecikmeler için tasarlanmış oyun temelli su içi egzersizler."
  }
];

function ConceptCard({ c, idx }: { c: (typeof concepts)[number]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 22 });
  const sy = useSpring(y, { stiffness: 240, damping: 22 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className="group/c relative h-[420px] w-[340px] flex-shrink-0 overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-gold/40"
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/c:opacity-100"
        style={{
          background: useTransform(
            [tx, ty] as any,
            ([xx, yy]: string[]) =>
              `radial-gradient(450px at ${xx} ${yy}, rgba(201,169,97,0.18), transparent 60%)`
          )
        }}
      />
      {/* gold accent corner */}
      <span className="absolute right-0 top-0 h-[1px] w-16 bg-gold" />
      <span className="absolute right-0 top-0 h-16 w-[1px] bg-gold" />

      <div className="relative flex h-full flex-col justify-between p-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold/80">
            0{idx + 1}
          </span>
          <h3 className="mt-6 font-display text-[28px] leading-[1.05] text-white">
            {c.name}
          </h3>
          <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-aqua-foam/70">
            {c.short}
          </p>
        </div>

        <p className="text-[13.5px] leading-relaxed text-white/70 opacity-0 translate-y-3 transition-all duration-500 group-hover/c:opacity-100 group-hover/c:translate-y-0">
          {c.desc}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="h-px flex-1 bg-white/15" />
          <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover/c:border-gold group-hover/c:bg-gold group-hover/c:text-ink-deep">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Concepts() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="concepts"
      className="relative isolate overflow-hidden bg-ink-deep py-28 sm:py-36"
    >
      {/* spotlight blob */}
      <div className="aurora-blob" style={{ width: 700, height: 700, top: "-20%", left: "30%", background: "#088395", opacity: 0.35 }} />
      <div className="aurora-blob" style={{ width: 500, height: 500, bottom: "-10%", right: "-10%", background: "#05BFDB", opacity: 0.25 }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel variant="gold">Türkiye&apos;de Bir İlk</SectionLabel>
          <h2 className="h-display mt-6 text-[clamp(2.6rem,5vw,5rem)] text-white">
            Uluslararası Akuatik Terapi{" "}
            <span className="italic text-gold">Konseptleri</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-white/65">
            International Aquatic Therapy Faculty (IATF) işbirliğiyle, dünyaca
            ünlü Johan Lambeck&apos;in liderliğinde Türkiye&apos;ye ilk kez biz getirdik.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative mt-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* fade edges */}
        <span className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-ink-deep to-transparent" />
        <span className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-ink-deep to-transparent" />

        <div
          className="marquee-track gap-6 px-6"
          style={{
            animation: paused
              ? "none"
              : "marquee 38s linear infinite"
          }}
        >
          {[...concepts, ...concepts].map((c, i) => (
            <ConceptCard key={i} c={c} idx={i % concepts.length} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-7xl justify-center px-6">
        <a
          href="#contact"
          className="group/link inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-gold"
        >
          <span className="relative">
            IATF Hakkında Daha Fazlası
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-500 group-hover/link:scale-x-0" />
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
