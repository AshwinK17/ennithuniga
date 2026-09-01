import { Check } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";

const items = [
  "ATS-Ready CV Layout",
  "Optimized LinkedIn Profile",
  "Real-Time Scorecard",
  "Practical Interview Experience",
  "Recruiter-Focused Feedback",
  "Better Understanding of Hiring Expectations",
];

export function Deliverables() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Outcomes</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] sm:text-5xl">
              What Students Walk Away With
            </h2>
          </Reveal>
        </div>
        <ul className="grid gap-px bg-border sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal
              as="li"
              key={it}
              delay={i * 70}
              className="group flex items-start gap-4 bg-mist p-6 transition-colors duration-300 hover:bg-card"
            >
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-navy text-primary-foreground transition-colors duration-300 group-hover:bg-cyan-deep">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <p className="min-w-0 text-base font-semibold leading-snug text-navy">{it}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}