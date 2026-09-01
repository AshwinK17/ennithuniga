import { type ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string; }) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-cyan-deep" : "text-cyan",
        className
      )}
    >
      <span className={cn("h-px w-8", tone === "dark" ? "bg-cyan-deep" : "bg-cyan")} aria-hidden />
      {children}
    </p>
  );
}

export function CtaLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold tracking-tight transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        variant === "solid" && "bg-navy text-primary-foreground hover:bg-navy-deep",
        variant === "outline" &&
        "border border-border text-foreground hover:border-cyan-deep hover:text-cyan-deep",
        variant === "light" && "bg-cyan text-navy-deep hover:bg-cyan-deep",
        className
      )}
    >
      {children}
    </a>
  );
}