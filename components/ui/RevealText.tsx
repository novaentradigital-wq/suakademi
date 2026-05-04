"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
  stagger?: number;
}

export default function RevealText({
  text,
  className,
  as = "p",
  delay = 0,
  once = true,
  stagger = 0.05
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once, amount: 0.4 });
  const Tag = as as any;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span ref={ref} className="inline-block overflow-hidden">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : { y: "110%" }}
              transition={{ duration: 0.85, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
