"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn, asset } from "@/lib/utils";

interface Item {
  src: string;
  alt: string;
  caption: string;
  category: string;
  cls: string;
  dataSection: string;
}

const items: Item[] = [
  {
    src: asset("/images/ebru-with-baby.jpeg"),
    alt: "Bebek antrenmanı",
    caption: "Bebek Programı",
    category: "Bebek Jakuzisi",
    cls: "md:col-span-2 md:row-span-2",
    dataSection: "gallery-bebek"
  },
  {
    src: asset("/images/kids-group.jpeg"),
    alt: "Grup dersi",
    caption: "Grup Dersleri",
    category: "Etkinlikler",
    cls: "md:col-span-2",
    dataSection: "gallery-grup"
  },
  {
    src: asset("/images/child-pink.jpeg"),
    alt: "Mutlu çocuk",
    caption: "Mutlu Yüzler",
    category: "Genel",
    cls: "",
    dataSection: "gallery-cocuk"
  },
  {
    src: asset("/images/ebru-2.jpeg"),
    alt: "Havuz görünümü",
    caption: "Ana Havuz",
    category: "2 Havuz",
    cls: "",
    dataSection: "gallery-havuz"
  },
  {
    src: asset("/images/underwater-trainer.jpeg"),
    alt: "Su altı eğitim",
    caption: "Akuatik Terapi",
    category: "Terapi Odaları",
    cls: "md:col-span-2",
    dataSection: "gallery-terapi"
  },
  {
    src: asset("/images/ebru-1.jpeg"),
    alt: "Eğitmen",
    caption: "Eğitmen Kadromuz",
    category: "Genel",
    cls: "",
    dataSection: "gallery-egitmen"
  },
  {
    src: asset("/images/ebru-portrait.jpeg"),
    alt: "Press",
    caption: "Basında Biz",
    category: "Etkinlikler",
    cls: "",
    dataSection: "gallery-basin"
  },
  {
    src: asset("/images/ebru-magazine.jpeg"),
    alt: "Press magazine",
    caption: "Kocaeli Life",
    category: "Etkinlikler",
    cls: "md:col-span-2",
    dataSection: "gallery-magazine"
  }
];

const categories = ["Tümü", "2 Havuz", "Bebek Jakuzisi", "Terapi Odaları", "Genel", "Etkinlikler"];

export default function Gallery() {
  const [active, setActive] = useState("Tümü");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = active === "Tümü" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="relative bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Galeri</SectionLabel>
            <h2 className="h-display mt-5 text-[clamp(2.4rem,4.6vw,4.8rem)] text-ink-deep">
              Tesisimizden{" "}
              <span className="italic text-gold">Kareler</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.25em] transition-all duration-300",
                  active === c
                    ? "border-aqua bg-aqua text-white"
                    : "border-ink-deep/15 bg-white text-ink-gray hover:border-aqua/50 hover:text-ink-deep"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-4"
        >
          <AnimatePresence>
            {filtered.map((it) => (
              <motion.button
                layout
                key={it.src}
                onClick={() => setLightbox(it)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group/g relative h-44 overflow-hidden rounded-[4px] bg-bg-section sm:h-auto",
                  it.cls
                )}
                data-section={it.dataSection}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover/g:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/g:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left opacity-0 transition-all duration-500 group-hover/g:translate-y-0 group-hover/g:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-aqua-foam">
                    {it.category}
                  </span>
                  <p className="font-display text-xl text-white">{it.caption}</p>
                </div>
                {/* corner plus */}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur opacity-0 transition-all duration-500 group-hover/g:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-deep/80 p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[88vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-black">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  sizes="80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-aqua-foam">
                    {lightbox.category}
                  </span>
                  <p className="font-display text-2xl">{lightbox.caption}</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-ink-deep"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
