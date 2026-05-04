"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  format?: (n: number) => string;
}

export default function Counter({ to, duration = 1800, format }: Props) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const animate = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(eased * to));
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, started]);

  return <span ref={ref}>{format ? format(val) : val}</span>;
}
