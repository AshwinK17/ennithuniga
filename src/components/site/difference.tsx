import { Eyebrow, Reveal } from "./primitives";

const steps = [
  {
    icon: "🧭",
    title: "Find Your Direction",
    body: "Understand yourself and explore the career paths that fit you.",
  },
  {
    icon: "🌍",
    title: "Know the Market",
    body: "Understand the opportunities around you and what companies actually look for.",
  },
  {
    icon: "📄",
    title: "Build Your Profile",
    body: "Create a resume and professional profile that represent you better.",
  },
  {
    icon: "🎯",
    title: "Get Interview Ready",
    body: "Prepare, practise and learn how to present yourself confidently.",
  },
  {
    icon: "🤝",
    title: "Get the Right Guidance",
    body: "Connect with mentors and industry professionals who can guide you along the way.",
  },
];

export function Difference() {
  return (
    <section className="bg-mist py-20 lg:py-28 relative">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl text-center mx-auto mb-16">
          <Reveal>
            <Eyebrow>The Process</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2.1rem] leading-[1.1] sm:text-5xl font-extrabold text-navy-deep">
              We Help You Figure It Out.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 font-medium max-w-3xl mx-auto">
              From understanding what you want, to knowing what the job market expects, to preparing yourself for the right opportunity, we guide you through it.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <Reveal
              as="article"
              key={i}
              delay={i * 100}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="max-w-3xl mx-auto text-center mt-20 p-8 rounded-3xl bg-white border border-blue-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-[#00C9C6] to-cyan-500"></div>
            <p className="text-2xl sm:text-3xl font-extrabold text-navy-deep leading-relaxed">
              You don’t have to figure everything out at once.
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00C9C6] mt-3">
              You just need to know your next step.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}