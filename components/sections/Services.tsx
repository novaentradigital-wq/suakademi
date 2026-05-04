"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn, asset } from "@/lib/utils";

interface Service {
  category: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  span: string;
  dataSection: string;
}

const services: Service[] = [
  {
    category: "Yetişkin",
    title: "Yetişkin Yüzme & Aqua Fitness",
    desc:
      "Su korkusunu yenmekten profesyonel yüzme tekniklerine, AquaFitness ve AquaGym ile düşük etkili yüksek verimli antrenmanlar.",
    img: asset("/images/ebru-1.jpeg"),
    alt: "Yetişkin yüzme dersi",
    span: "lg:col-span-7 lg:row-span-2",
    dataSection: "service-yuzme"
  },
  {
    category: "0-4 Yaş",
    title: "Bebek & Çocuk Programları",
    desc: "AquaBabySwim, Bebek SPA, bebek masajı ve okul öncesi yüzme.",
    img: asset("/images/child-pink.jpeg"),
    alt: "Bebek ve çocuk programları",
    span: "lg:col-span-5",
    dataSection: "service-bebek"
  },
  {
    category: "Terapi",
    title: "Akuatik Terapi",
    desc: "Hidroterapi, Watsu, Halliwick, ortopedik manuel terapi ve rehabilitasyon.",
    img: asset("/images/underwater-trainer.jpeg"),
    alt: "Akuatik terapi seansı",
    span: "lg:col-span-5",
    dataSection: "service-terapi"
  },
  {
    category: "Salon",
    title: "Salon Dersleri",
    desc:
      "Klinik Pilates, yoga ve zumba dersleriyle vücut farkındalığınızı geliştirin. Su dışında da formda kalın.",
    img: asset("/images/kids-group.jpeg"),
    alt: "Salon dersleri",
    span: "lg:col-span-12",
    dataSection: "service-salon"
  }
];

function Card({ s, big = false }: { s: Service; big?: boolean }) {
  const { ref, onMove, onLeave } = useTilt<HTMLDivElement>(5);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-section={s.dataSection}
      className={cn(
        "group/card relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[6px] bg-ink-deep transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(10,77,104,0.5)]",
        big ? "min-h-[560px] sm:min-h-[640px]" : "min-h-[400px]"
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={s.img}
          alt={s.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/55 to-ink-deep/15 transition-all duration-700 group-hover/card:from-ink-deep group-hover/card:via-ink-deep/75" />
      </div>

      <div className="relative z-10 flex items-start justify-between p-7 sm:p-9">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.32em] text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-aqua-light" />
          {s.category}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover/card:bg-white group-hover/card:text-ink-deep">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 transition-transform duration-500 group-hover/card:translate-x-1 group-hover/card:-translate-y-1">
            <path d="M5 19L19 5M9 5h10v10" />
          </svg>
        </span>
      </div>

      <div className="relative z-10 p-7 sm:p-9">
        <h3 className={cn("h-display text-white", big ? "text-[clamp(2.2rem,3.4vw,3.6rem)]" : "text-[clamp(1.6rem,2.4vw,2.4rem)]")}>
          {s.title}
        </h3>
        <p className={cn("mt-4 max-w-md text-white/80", big ? "text-[15px] leading-relaxed" : "text-[14px]")}>
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Hizmetlerimiz</SectionLabel>
            <h2 className="h-display mt-5 max-w-2xl text-[clamp(2.4rem,4.6vw,4.8rem)] text-ink-deep">
              Suya Adım Atın,{" "}
              <span className="italic text-gold">Hayatı</span> Yeniden Keşfedin.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-gray">
            Bebekten yetişkine, terapiden fitness&apos;a — her ihtiyaca özel
            uluslararası standartlarda akuatik programlar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-[280px]">
          <div className={cn("h-full", services[0].span)}>
            <Card s={services[0]} big />
          </div>
          <div className={cn("h-full", services[1].span)}>
            <Card s={services[1]} />
          </div>
          <div className={cn("h-full", services[2].span)}>
            <Card s={services[2]} />
          </div>
          <div className={cn("h-full", services[3].span)}>
            <Card s={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
