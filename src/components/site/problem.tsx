import { Eyebrow, Reveal } from "./primitives";

export function Problem() {
  return (
    <section id="why" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Eyebrow>The Core Reason</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] sm:text-5xl text-navy-deep font-extrabold">
              Why ENNI THUNIGA?
            </h2>
          </Reveal>

          <div className="mt-12 space-y-6 text-lg sm:text-xl leading-relaxed text-slate-600 font-medium max-w-3xl mx-auto text-left sm:text-center">
            <Reveal delay={140}>
              <p>
                We’ve seen talented people miss opportunities — not because they weren’t capable, but because they didn’t know where to look, how to prepare, or how to present themselves.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col gap-3 py-4 text-[#00C9C6] font-semibold text-xl sm:text-2xl">
                <p>Some needed direction.</p>
                <p>Some needed better preparation.</p>
                <p>Some simply needed the right guidance at the right time.</p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="font-bold text-navy-deep text-2xl sm:text-3xl mt-4">
                And that’s exactly why ENNI THUNIGA was started.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p className="text-xl mt-4">
                To help you understand your career better, prepare for opportunities and have someone guide you when you need it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}