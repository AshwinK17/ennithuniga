import ceo from "@/assets/ceo.jpg.asset.json";
import { Eyebrow, Reveal } from "./primitives";

export function CeoSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
        <Reveal>
          <div className="mx-auto aspect-[4/5] w-full max-w-[380px] rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 flex items-center justify-center p-4">
            {/* If you have the ceo image you can place it here, otherwise placeholder */}
            <div className="text-center">
              <p className="text-blue-400 font-semibold text-sm mb-4">[ Founder Image Space ]</p>
              <div className="text-navy-deep text-left bg-white/70 p-4 rounded-xl border border-blue-100 shadow-sm mt-4">
                <p className="font-bold text-xl mb-1">William Joshua</p>
                <p className="text-sm font-semibold text-slate-600 mb-3">Founder, ENNI THUNIGA</p>
                <ul className="text-xs text-slate-500 space-y-1.5 font-medium">
                  <li>• 10+ Years in HR & Talent Acquisition</li>
                  <li>• Cognizant • doodleblue • CGI</li>
                  <li>• AON Certified Talent Acquisition Professional</li>
                  <li>• The ACE Award – Excellence in Talent Acquisition</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>A Thought From Our Founder</Eyebrow>
          </Reveal>

          <div className="mt-8 space-y-4 max-w-xl text-base leading-relaxed text-slate-600 font-medium text-lg">
            <Reveal delay={80}>
              <p>“I didn’t have my career figured out when I was a student either.</p>
            </Reveal>
            <Reveal delay={120}>
              <p>I completed Mechanical Engineering, moved into HR, and eventually spent the next 10+ years hiring and working with talent across organisations.</p>
            </Reveal>
            <Reveal delay={160}>
              <p>Somewhere along the way, I realised something.</p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                There are so many talented people out there. But many of them simply don’t know where to start, where to find the right opportunities, or how to prepare when an opportunity comes their way.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                I’ve seen it as a student.<br />
                I’ve seen it as a recruiter.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="font-semibold text-navy-deep mt-6">And I wanted to do something about it.</p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-bold text-xl text-[#00C9C6]">That’s why I started ENNI THUNIGA.</p>
            </Reveal>
            <Reveal delay={340}>
              <p className="text-navy-deep font-semibold">
                To help people understand themselves better, find the right direction, prepare for opportunities and have someone to guide them along the way.”
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}