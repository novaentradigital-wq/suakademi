"use client";
import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "white";
  href?: string;
  onClick?: () => void;
  shimmer?: boolean;
}

export default function MagneticButton({
  children,
  className,
  variant = "solid",
  href,
  onClick,
  shimmer = false
}: Props) {
  const ref = useMagnetic<HTMLDivElement>(14, 120);

  const base =
    "group/mb relative inline-flex items-center gap-2 px-7 py-4 font-body text-[13px] uppercase tracking-[0.18em] rounded-full transition-all duration-500 will-change-transform overflow-hidden";

  const variants = {
    solid:
      "bg-aqua text-white hover:bg-aqua-light shadow-[0_10px_30px_-10px_rgba(8,131,149,0.55)] hover:shadow-[0_18px_45px_-10px_rgba(5,191,219,0.55)]",
    outline:
      "border border-white/60 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm",
    white:
      "bg-white text-ink-deep hover:bg-bg-secondary shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]"
  };

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );

  const shimmerEl = shimmer && (
    <span
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/mb:translate-x-full transition-transform duration-1000 ease-out"
      aria-hidden
    />
  );

  if (href) {
    return (
      <div ref={ref} className="inline-block">
        <a href={href} className={cn(base, variants[variant], className)}>
          {shimmerEl}
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="inline-block">
      <button onClick={onClick} className={cn(base, variants[variant], className)}>
        {shimmerEl}
        {inner}
      </button>
    </div>
  );
}
