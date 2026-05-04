"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface Member {
  name: string;
  role: string;
  bio: string;
  certs: string[];
  img: string;
  alt: string;
}

const team: Member[] = [
  {
    name: "Ebru Gücin",
    role: "Kurucu, Baş Antrenör",
    bio:
      "Yetişkin, okul öncesi, bebek ve özel bireyler yüzme antrenörü. Aqua Fitness Pro Eğitmeni, uluslararası Halliwick ve Watsu uygulayıcısı.",
    certs: ["Halliwick", "Watsu", "Aqua Fitness Pro"],
    img: "/images/ebru-portrait.jpeg",
    alt: "Ebru Gücin"
  },
  {
    name: "Oğuz Gücin",
    role: "Fizyoterapist, İşletme Müdürü",
    bio:
      "Okan Üniversitesi mezunu fizyoterapist. Ortopedik manuel terapi, osteopati, watsu ve ameliyat sonrası su içi egzersiz uzmanı.",
    certs: ["Manuel Terapi", "Osteopati", "Watsu"],
    img: "/images/underwater-trainer.jpeg",
    alt: "Oğuz Gücin"
  }
];

function MemberCard({ m }: { m: Member }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group/m relative overflow-hidden rounded-[6px] bg-white shadow-[0_25px_60px_-30px_rgba(10,77,104,0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-section">
        <Image
          src={m.img}
          alt={m.alt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[2000ms] ease-out group-hover/m:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-transparent" />

        {/* Hover bio overlay */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 p-7 transition-all duration-700 ease-out",
            hover ? "translate-y-0 opacity-100" : "translate-y-2 opacity-95"
          )}
        >
          <span className="text-[10px] uppercase tracking-[0.32em] text-aqua-foam">
            {m.role}
          </span>
          <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] text-white">
            {m.name}
          </h3>

          <div
            className={cn(
              "grid transition-all duration-700 ease-out",
              hover ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="text-[13.5px] leading-relaxed text-white/85">{m.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.certs.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-bg-secondary py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Ekibimiz</SectionLabel>
          <h2 className="h-display mt-6 text-[clamp(2.6rem,5vw,5rem)] text-ink-deep">
            Tutkuyla Çalışan{" "}
            <span className="italic text-gold">Uzmanlar</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-ink-gray">
            Uluslararası sertifikalı kadromuz, her bir misafirimizin yolculuğuna
            kişisel ve bilimsel bir özenle eşlik ediyor.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {team.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
