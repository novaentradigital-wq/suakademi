"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

const links = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Konseptler", href: "#concepts" },
  { label: "Ekibimiz", href: "#team" },
  { label: "Galeri", href: "#gallery" },
  { label: "İletişim", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ctaRef = useMagnetic<HTMLDivElement>(12, 110);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed left-1/2 top-4 z-[60] -translate-x-1/2 transition-all duration-700",
          scrolled
            ? "w-[calc(100%-1.5rem)] max-w-[1180px]"
            : "w-[calc(100%-1.5rem)] max-w-[1240px]"
        )}
      >
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="w-full"
      >
        <div
          className={cn(
            "flex items-center justify-between rounded-full border transition-all duration-700",
            scrolled
              ? "border-white/30 bg-white/70 backdrop-blur-xl px-5 py-2.5 shadow-[0_18px_40px_-20px_rgba(10,77,104,0.35)]"
              : "border-white/15 bg-white/10 backdrop-blur-md px-7 py-3.5"
          )}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-aqua-gradient shadow-[0_8px_20px_-6px_rgba(8,131,149,0.6)]">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2c-3.5 4-6 7.5-6 11a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11z" />
              </svg>
              <span className="absolute inset-0 rounded-full ring-1 ring-white/40" />
            </span>
            <span className="leading-none">
              <span
                className={cn(
                  "block font-display text-[22px] italic transition-colors",
                  scrolled ? "text-ink-deep" : "text-white"
                )}
              >
                Su Akademi
              </span>
              <span
                className={cn(
                  "mt-0.5 block text-[9px] font-body uppercase tracking-[0.32em] transition-colors",
                  scrolled ? "text-ink-gray" : "text-white/70"
                )}
              >
                Türkiye
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "nav-link text-[11.5px] font-medium tracking-wide transition-colors xl:text-[12.5px]",
                  scrolled
                    ? "text-ink-dark/80 hover:text-ink-deep"
                    : "text-white/85 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <div ref={ctaRef} className="inline-block">
              <a
                href="#contact"
                className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-aqua px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_-8px_rgba(8,131,149,0.6)] transition-all duration-500 hover:bg-aqua-light"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover/cta:translate-x-full"
                  aria-hidden
                />
                <span className="relative">Randevu Al</span>
                <svg
                  className="relative h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            aria-label="Menü"
            onClick={() => setOpen(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled ? "text-ink-deep hover:bg-bg-section" : "text-white hover:bg-white/10"
            )}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-3.5 bg-current" />
            </span>
          </button>
        </div>
      </motion.header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] bg-ink-deep/95 backdrop-blur-xl lg:hidden"
          >
            <button
              aria-label="Kapat"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <nav className="flex h-full flex-col items-center justify-center gap-7 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.55 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-aqua px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-white"
              >
                Randevu Al →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
