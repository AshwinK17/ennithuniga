import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { CtaLink, Eyebrow, Reveal } from "./primitives";
import { Typewriter } from "./typewriter";

export function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden bg-white pt-24 pb-20 sm:pt-28 lg:pt-36 lg:pb-32 text-navy-deep">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 xl:px-0 relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="max-w-xl text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-6 text-sm font-semibold text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Admissions Open 2026
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="text-[2.8rem] leading-[1.1] sm:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight text-navy-deep mb-6">
                Master the Future of <br className="hidden sm:block" />
                <Typewriter
                  words={["Tech & Placements.", "Cloud & DevOps.", "Software Engineering.", "Career Readiness."]}
                  className="text-[#00C9C6] block text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] mt-2"
                  typingSpeed={150}
                  deletingSpeed={80}
                  pauseSpan={3000}
                />
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <ul className="space-y-3 mb-8">
                {["Industry grade training", "Real-time project deployment", "Placement preparation and mock interviews"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-600">
                    <CheckCircle2 className="size-6 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col justify-start items-start gap-4 sm:flex-row w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full bg-[#00C9C6] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#00a3a1]">
                  Enroll Now <ArrowRight className="size-5" />
                </button>
                <button className="w-full sm:w-auto inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600">
                  <Play className="size-5" /> Watch Video
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Image Box Column */}
          <Reveal delay={300} className="w-full h-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border-2 border-blue-100 bg-blue-50/50 shadow-2xl p-6 flex flex-col items-center justify-center overflow-hidden">
              <p className="text-blue-400 font-medium text-lg border-2 border-dashed border-blue-300 rounded-xl p-8 bg-blue-50 relative z-10">[ Video / Image Space ]</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder Space Area */}
      <section id="founder" className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-extrabold text-navy-deep tracking-tight">Meet the Founder</h2>
              <div className="h-[2px] flex-1 ml-10 bg-slate-200" />
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
              {/* Founder Image Placeholder */}
              <div className="aspect-[4/5] rounded-2xl bg-blue-50 border-2 border-dashed border-blue-200 flex items-center justify-center">
                <p className="text-blue-400 font-semibold text-sm">[ Founder Image Space ]</p>
              </div>

              <div className="space-y-6 text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep leading-relaxed">
                  "Our mission is to eliminate the gap between what colleges teach and what top tech companies demand."
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                  We don't just teach theory. We build confidence, upgrade practical technical skills, and simulate real interview pressures so our students are undeniable assets.
                </p>
                <div className="pt-4 flex flex-col text-left">
                  <span className="font-bold text-blue-600 text-xl tracking-wide">[ Founder Name ]</span>
                  <span className="text-slate-500 font-semibold mt-1">Lead Instructor & Founder</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
