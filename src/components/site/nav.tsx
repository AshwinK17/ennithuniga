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
      <div className="mx-auto flex flex-col sm:flex-row max-w-[1280px] sm:items-center justify-between px-4 py-2 sm:px-8 lg:py-4 gap-y-2">
        <a href="/" className="flex items-center shrink-0">
          <img src="/brand_name.png" alt="ENNI THUNIGA Logo" className="h-5 sm:h-7 w-auto object-contain" />
        </a>
        <nav className="flex items-center justify-start sm:justify-end gap-x-5 overflow-x-auto scrollbar-hide py-1 w-full sm:w-auto pb-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 text-[0.65rem] font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-navy-deep sm:text-xs lg:text-sm lg:normal-case lg:tracking-normal"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header >
  );
}
