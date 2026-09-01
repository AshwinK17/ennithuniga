import { ArrowRight } from "lucide-react";
import { CtaLink, Eyebrow, Reveal } from "./primitives";

export function Mentorship() {
  return (
    <section id="mentorship" className="bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow tone="light">Mentorship</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] text-white sm:text-5xl">
              Recruiter Mentorship.
              <span className="block text-cyan">Not Generic Soft-Skill Training.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65">
              Designed and delivered by active Talent Acquisition professionals rather than generic
              freelance soft-skill trainers — so the feedback students receive mirrors the judgement
              real recruiters apply.
            </p>
          </Reveal>
        </div>
        <div className="grid content-center gap-8">
          {[
            { v: "10+ Years", l: "Corporate Talent Acquisition experience" },
            { v: "10,000+", l: "Screenings completed" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 120} className="border-l-2 border-cyan pl-6">
              <p className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">{s.v}</p>
              <p className="mt-3 text-sm font-semibold text-white/55">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Institutional() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Two Audiences, One Mission</Eyebrow>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
          <Reveal className="bg-card p-8 lg:p-12">
            <p className="eyebrow text-cyan-deep">For Students</p>
            <h3 className="mt-6 text-2xl leading-tight sm:text-3xl">
              Become genuinely prepared for the opportunities you actually want.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Clarity on direction, a profile that survives screening, and interview practice under
              realistic pressure.
            </p>
          </Reveal>
          <Reveal delay={120} className="bg-navy p-8 lg:p-12">
            <p className="eyebrow text-cyan">For Institutions</p>
            <h3 className="mt-6 text-2xl leading-tight text-white sm:text-3xl">
              Deploy a structured readiness program across your student cohort.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              A structured readiness system that slots into your placement calendar and gives departments a
              measurable view of cohort readiness.
            </p>
            <div className="mt-8">
              <CtaLink href="#partner" variant="light">
                Partner With ENNI THUNIGA <ArrowRight className="size-4" />
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}