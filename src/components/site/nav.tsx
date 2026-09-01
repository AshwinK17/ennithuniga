import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#why", label: "Why Us" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "#about", label: "About" },
  { href: "#partner", label: "Partner With Us" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white",
        scrolled ? "border-b border-border/70 shadow-sm" : "",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-8 lg:py-4">
        <a href="/" className="flex items-center shrink-0">
          <img src="/brand_name.png" alt="ENNI THUNIGA Logo" className="h-[22px] w-auto object-contain sm:h-7" />
        </a>
        <nav className="flex items-center justify-end gap-x-4 overflow-x-auto scrollbar-hide py-1 pl-4 sm:pl-0 sm:gap-x-5 lg:gap-x-8 w-full sm:w-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-navy sm:text-xs lg:text-sm lg:normal-case lg:tracking-normal"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header >
  );
}
