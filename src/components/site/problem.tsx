import { Eyebrow, Reveal } from "./primitives";

const chain = [
  { step: "01", title: "Student", note: "Grades, projects, certificates, ambition." },
  { step: "02", title: "Recruitment System", note: "ATS filters, keyword screening, volume competition." },
  { step: "03", title: "Interview", note: "Pressure, communication, structured evaluation." },
  { step: "04", title: "Outcome", note: "Selected — or rejected without feedback." },
];

export function Problem() {
  return (
    <section id="why" className="border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The Reality</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] sm:text-5xl">
              The Placement Game Has Changed.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Capable students still get filtered out — not because their ability is missing, but
              because their preparation was never built around how companies actually hire today.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {chain.map((c, i) => (
            <Reveal as="li" key={c.step} delay={i * 90} className="bg-card p-7 lg:p-8">
              <p className="eyebrow text-cyan-deep">{c.step}</p>
              <h3 className="mt-4 text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-6 rounded-2xl bg-navy p-8 sm:grid-cols-[auto_1fr] sm:items-center lg:p-10">
            <p className="eyebrow text-cyan">The Readiness Layer</p>
            <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
              ENNI THUNIGA sits between the student and the recruitment system — translating
              potential into a profile, a performance and a decision recruiters can say yes to.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}