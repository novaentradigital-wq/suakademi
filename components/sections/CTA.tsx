"use client";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative bg-deep-aqua">
        {/* Animated SVG waves */}
        <svg
          className="pointer-events-none absolute -top-1 left-0 w-[200%] h-[160px] animate-wave"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,160 C480,240 960,80 1440,160 C1920,240 2400,80 2880,160 L2880,320 L0,320 Z"
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-1 left-0 w-[200%] h-[140px]"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,200 C480,260 960,140 1440,200 C1920,260 2400,140 2880,200 L2880,320 L0,320 Z"
            fill="rgba(5,191,219,0.18)"
          />
        </svg>

        {/* glowing blob */}
        <div className="aurora-blob" style={{ width: 800, height: 800, top: "-30%", left: "-20%", background: "#05BFDB", opacity: 0.35 }} />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center text-white sm:py-36 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            className="h-display text-[clamp(2.6rem,6vw,6rem)]"
          >
            İlk Adımı Atın,{" "}
            <span className="italic text-gold">Suyla Tanışın.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mx-auto mt-7 max-w-xl text-[15px] leading-[1.85] text-white/80"
          >
            Ücretsiz tanışma seansımız için bize ulaşın. Size en uygun programı
            birlikte belirleyelim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#contact" variant="white" shimmer>
              Ücretsiz Seans Talep Et
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/905452822743"
              variant="outline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.5 3.5A11.4 11.4 0 0 0 12.1 0C5.7 0 .6 5.1.6 11.4c0 2 .5 4 1.5 5.7L.5 24l7-1.6a11.4 11.4 0 0 0 4.6 1c6.3 0 11.4-5.1 11.4-11.4 0-3-1.2-5.9-3-8zM12.1 21.5a9.5 9.5 0 0 1-4.7-1.3l-.3-.2-3.7.8.8-3.6-.2-.3a9.5 9.5 0 1 1 8 4.6zm5.2-7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.2s1 2.6 1.2 2.8c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3z" />
              </svg>
              WhatsApp ile Yaz
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
