import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | "gold";
}

export default function SectionLabel({ children, className, variant = "default" }: Props) {
  const palette = {
    default: "text-aqua",
    light: "text-aqua-light",
    gold: "text-gold"
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-body uppercase tracking-[0.32em]",
        palette[variant],
        className
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse-soft" />
      {children}
    </span>
  );
}
