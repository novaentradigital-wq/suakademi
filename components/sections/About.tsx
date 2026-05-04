"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealText from "@/components/ui/RevealText";

const features = [
  {
    title: "Uluslararası Sertifikalı Kadro",
    desc: "IATF, Halliwick, Watsu ve manuel terapi sertifikalı eğitmenler."
  },
  {
    title: "Kocaeli'nin İlk Akuatik Terapi Merkezi",
    desc: "2021'den bu yana akuatik terapide bölgenin öncü tesisi."
  },
  {
    title: "IATF İşbirliği",
    desc: "International Aquatic Therapy Faculty ile resmi partnerlik."
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      data-section="about"
      className="relative bg-white py-28 sm:py-36 lg:py-44"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        {/* Left: parallax image */}
        <div className="relative lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-bg-section">
              <motion.div
                className="absolute inset-0"
                style={{ y: imgY, scale: 1.18 }}
              >
                <Image
                  src="/images/ebru-2.jpeg"
                  alt="Su Akademi kurucusu Ebru Gücin havuzda"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* Frame line */}
              <span className="pointer-events-none absolute inset-3 border border-white/40" />
              {/* Caption tag */}
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-ink-deep backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                Ebru Gücin · Kurucu
              </div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="lg:col-span-7 lg:pl-8">
          <SectionLabel>Hakkımızda</SectionLabel>

          <h2 className="h-display mt-6 max-w-xl text-[clamp(2.4rem,4.4vw,4.4rem)] text-ink-deep">
            Bir Tutkuyla{" "}
            <span className="italic text-gold">Başladı,</span>
            <br />
            Bir{" "}
            <span className="italic text-gold">Markaya</span> Dönüştü.
          </h2>

          <RevealText
            as="p"
            className="mt-8 max-w-xl text-[16px] leading-[1.85] text-ink-gray"
            text="Su Akademi Türkiye, kurucumuz Ebru Gücin'in suyla başlayan kişisel iyileşme yolculuğunun bir meyvesidir. Bugün 960 metrekarelik tesisimizde, uluslararası sertifikalı kadromuzla 0 yaşından 99'a kadar herkese — sağlıklı bireylerden özel gereksinimli bireylere kadar — geniş bir yelpazede hizmet veriyoruz."
            stagger={0.012}
          />
          <RevealText
            as="p"
            className="mt-5 max-w-xl text-[16px] leading-[1.85] text-ink-gray"
            text="Akuatik terapide Türkiye'nin öncü merkezi olmanın gururunu yaşıyoruz."
            stagger={0.012}
          />

          {/* Feature accordion-style reveals */}
          <div className="mt-12 grid max-w-xl gap-px border-y border-ink-deep/10 bg-ink-deep/10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group/feat flex items-center gap-5 bg-white py-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-aqua/40 text-aqua transition-all duration-500 group-hover/feat:bg-aqua group-hover/feat:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-[20px] text-ink-deep">{f.title}</h3>
                  <p className="text-[13px] text-ink-gray">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#team"
            className="group/link mt-12 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-ink-deep"
          >
            <span className="relative">
              Hikayemizi Okuyun
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-500 group-hover/link:scale-x-0" />
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
