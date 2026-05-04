"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const data = [
  {
    quote:
      "Yürüteçle başladığım derslerden 2 ay sonra merdiven çıkıyorum. Su Akademi bana sadece spor değil, hayatımı geri verdi.",
    name: "A.Y.",
    role: "67 yaş, Akuatik Terapi"
  },
  {
    quote:
      "Kızımın su korkusu artık tarih oldu. Eğitmenler işine âşık insanlar.",
    name: "M.K.",
    role: "Anne, Çocuk Yüzme"
  },
  {
    quote:
      "Watsu seansları sonrası kronik bel ağrım çok azaldı. Mucize gibi.",
    name: "S.D.",
    role: "42 yaş, Watsu"
  },
  {
    quote:
      "Bebeğim 6 aylıkken başladık. Şimdi suda mutlu bir balık gibi.",
    name: "N.E.",
    role: "Anne, Bebek Programı"
  },
  {
    quote:
      "Pilates derslerinden sonra duruşum tamamen değişti. Çok teşekkürler.",
    name: "Z.G.",
    role: "35 yaş, Klinik Pilates"
  }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const len = data.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % len), 6000);
    return () => clearInterval(t);
  }, [len]);

  const next = () => setI((p) => (p + 1) % len);
  const prev = () => setI((p) => (p - 1 + len) % len);

  return (
    <section className="relative bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Müşterilerimiz Ne Diyor</SectionLabel>
          <h2 className="h-display mt-6 text-[clamp(2.6rem,5vw,5rem)] text-ink-deep">
            Hayat Değiştiren{" "}
            <span className="italic text-gold">Hikayeler</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Big decorative quote */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 -top-12 font-display text-[180px] leading-none text-aqua/10 sm:-left-10 sm:-top-16 sm:text-[260px]"
          >
            &ldquo;
          </span>

          {/* Stars */}
          <div className="flex justify-center gap-1.5">
            {[...Array(5)].map((_, k) => (
              <svg key={k} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gold">
                <path d="M12 2l2.6 6.5L21 9l-5 4.4L17.4 21 12 17.5 6.6 21 8 13.4 3 9l6.4-.5z" />
              </svg>
            ))}
          </div>

          <div className="relative mt-8 min-h-[200px] sm:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-[clamp(1.4rem,2.8vw,2.4rem)] leading-[1.3] text-ink-deep">
                  &ldquo;{data[i].quote}&rdquo;
                </p>
                <footer className="mt-8 text-[12px] uppercase tracking-[0.32em]">
                  <span className="text-ink-deep">{data[i].name}</span>
                  <span className="mx-3 text-ink-gray">·</span>
                  <span className="text-ink-gray">{data[i].role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Önceki"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-deep/15 text-ink-deep transition-all hover:border-aqua hover:bg-aqua hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {data.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Yorum ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    k === i ? "w-8 bg-aqua" : "w-2 bg-ink-deep/20 hover:bg-ink-deep/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Sonraki"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-deep/15 text-ink-deep transition-all hover:border-aqua hover:bg-aqua hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
