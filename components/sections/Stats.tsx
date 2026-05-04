"use client";
import Counter from "@/components/ui/Counter";

const stats = [
  { value: 960, suffix: "m²", label: "Hizmet Alanı" },
  { value: 5, suffix: "+", label: "Uluslararası Konsept" },
  { value: 49, suffix: "/5", label: "Müşteri Memnuniyeti", divide: 10 },
  { value: 99, suffix: "+", label: "Tüm Yaş Gruplarına" }
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative bg-bg-section py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center px-4 text-center sm:items-start sm:text-left"
            >
              {i > 0 && (
                <span className="absolute left-0 top-2 hidden h-[80%] w-px bg-ink-deep/15 sm:block" />
              )}
              <span className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-light leading-none tracking-crisp text-ink-deep">
                <Counter
                  to={s.value}
                  format={(n) =>
                    s.divide
                      ? (n / s.divide).toFixed(1)
                      : n.toLocaleString("tr-TR")
                  }
                />
                <span className="text-aqua">{s.suffix}</span>
              </span>
              <span className="mt-3 text-[11px] font-medium uppercase tracking-[0.32em] text-ink-gray">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
