import { ArrowRight } from "lucide-react";

import { CtaLink, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section id="partner" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-[2.4rem] leading-[1.04] text-white sm:text-6xl">
            Ready for What Comes Next?
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            The gap between potential and opportunity can be prepared for.
          </p>
        </Reveal>
        <Reveal delay={170}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="mailto:hello@ennithuniga.com?subject=Institutional%20Partnership" variant="light">
              Partner With ENNI THUNIGA <ArrowRight className="size-4" />
            </CtaLink>
            <a
              href="mailto:hello@ennithuniga.com?subject=Start%20a%20Conversation"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white transition-colors hover:border-cyan hover:text-cyan"
            >
              Start a Conversation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14 pb-28">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="flex flex-col gap-2">
          <img src="/brand_name.png" alt="ENNI THUNIGA" className="h-6 w-auto object-contain object-left sm:h-8" loading="lazy" />
          <p className="eyebrow mt-2 text-[#00C9C6]">Dream • Dare • Do</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
          {[
            { href: "#why", label: "Why Us" },
            { href: "/mentorship", label: "Mentorship" },
            { href: "#about", label: "About" },
            { href: "#partner", label: "Partner With Us" },
            { href: "mailto:hello@ennithuniga.com", label: "Contact" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enroll"
            className="ml-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 shadow-md"
          >
            Enroll the course
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] border-t border-border px-5 pt-6 sm:px-8">
        <p className="text-xs font-medium text-muted-foreground">© 2026 ENNI THUNIGA</p>
      </div>
    </footer>
  );
}