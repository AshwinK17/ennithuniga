import ceo from "@/assets/ceo.jpg.asset.json";
import { Eyebrow, Reveal } from "./primitives";

export function CeoSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
        <Reveal>
          <div className="mx-auto aspect-[4/5] w-full max-w-[300px] rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 lg:max-w-[340px] flex items-center justify-center">
            <p className="text-blue-400 font-semibold text-sm">[ CEO Image Space ]</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>The People Behind the Mission</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] sm:text-5xl">
              Built Around Real Industry Experience.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <blockquote className="mt-8 border-l-2 border-cyan-deep pl-6 text-xl font-bold leading-snug text-navy sm:text-2xl">
              “Discipline should be bigger than your dream.”
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              ENNI THUNIGA is shaped by people who have sat on the hiring side of the table — reading
              resumes, running screenings and making decisions. That perspective is what the sessions
              are built on: not motivational theory, but what actually moves a candidate forward.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}