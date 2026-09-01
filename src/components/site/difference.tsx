import { Eyebrow, Reveal } from "./primitives";

const pillars = [
  {
    n: "01",
    title: "Clarity",
    body: "Understand where your strengths actually fit in the market — and stop applying blindly.",
  },
  {
    n: "02",
    title: "Readiness",
    body: "Build resumes, profiles, communication and interview capability around real hiring expectations.",
  },
  {
    n: "03",
    title: "Performance",
    body: "Practise under realistic evaluation conditions, with feedback from people who screen candidates.",
  },
];

export function Difference() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The ENNI THUNIGA Difference</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.06] sm:text-5xl">
              We Don’t Just Prepare Students.
              <span className="block text-cyan-deep">We Prepare Them for Reality.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              as="article"
              key={p.n}
              delay={i * 100}
              className="border-t border-border pt-8"
            >
              <p className="eyebrow text-cyan-deep">{p.n}</p>
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}