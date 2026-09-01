import { useReveal, useCountUp } from "@/lib/use-reveal";

const stats = [
  { value: 830000, suffix: "+", display: (n: number) => n.toLocaleString("en-US"), label: "People Reached" },
  { value: 10, suffix: "+", display: (n: number) => String(n), label: "Years in Corporate TA" },
  { value: 10000, suffix: "+", display: (n: number) => n.toLocaleString("en-US"), label: "Screenings Completed" },
];

function Stat({ stat, run }: { stat: (typeof stats)[number]; run: boolean }) {
  const n = useCountUp(stat.value, run);
  return (
    <div className="border-t border-white/12 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
      <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
        {stat.display(n)}
        <span className="text-cyan">{stat.suffix}</span>
      </p>
      <p className="eyebrow mt-3 text-white/55">{stat.label}</p>
    </div>
  );
}

export function Credibility() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-navy-deep">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1280px] gap-8 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-18"
      >
        {stats.map((s) => (
          <Stat key={s.label} stat={s} run={visible} />
        ))}
        <div className="border-t border-white/12 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
          <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
            Cohort
          </p>
          <p className="eyebrow mt-3 text-white/55">Readiness System</p>
        </div>
      </div>
    </section>
  );
}