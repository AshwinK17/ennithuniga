import { Instagram, ChevronRight, ChevronLeft } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { useEffect, useRef, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/careerwith_josh";

const reelsCount = Array.from({ length: 16 });

export function Reels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (scrollRef.current && !isHovering) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 1) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <section id="content" className="overflow-hidden bg-white py-20 lg:py-28 border-y border-slate-200">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 transition-opacity hover:opacity-80"
          >
            <Instagram className="size-4" />
            <Eyebrow tone="light">Active Every Week</Eyebrow>
          </a>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={80}>
            <h2 className="max-w-2xl text-[2.1rem] leading-[1.06] text-navy-deep font-extrabold sm:text-5xl">
              Career Content That Already Reaches Lakhs.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-md text-sm leading-relaxed text-slate-600 font-medium">
              Notice periods, hiring seasons, referral strategy, interview answers — the same
              recruiter insight we bring into campus sessions, published daily.
            </p>
          </Reveal>
        </div>
      </div>

      <div
        className="relative mt-14 group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <div ref={scrollRef} className="flex w-full gap-5 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-10 pt-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {reelsCount.map((_, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Post ${i + 1} on Instagram`}
              className="group/item relative w-[220px] sm:w-[260px] shrink-0 overflow-hidden rounded-2xl border-2 border-dashed border-[#00C9C6]/30 bg-[#00C9C6]/5 shadow-sm snap-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="aspect-[9/16] w-full flex items-center justify-center relative p-6 text-center">
                <p className="text-[#00C9C6] font-semibold text-sm relative z-10">[ Embed Insta Post/Reel {i + 1} ]</p>
              </div>
              <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-[#00C9C6] shadow-md text-white backdrop-blur transition-transform group-hover/item:scale-110">
                <Instagram className="size-5" />
              </span>
            </a>
          ))}
        </div>

        {/* Scroll Hint overlay */}
        <div className="absolute right-0 top-0 bottom-10 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block"></div>
        <div className="absolute left-0 top-0 bottom-10 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none hidden sm:block"></div>
      </div>

      <div className="mx-auto mt-4 max-w-[1280px] px-5 sm:px-8 flex justify-between items-center">
        <p className="eyebrow text-slate-500 font-bold">830k+ Combined Reach • Dream • Dare • Do</p>
        <div className="hidden sm:flex gap-3 text-slate-400">
          <span className="text-xs font-semibold flex items-center gap-1">Swipe/Scroll <ChevronRight className="size-4" /></span>
        </div>
      </div>
    </section>
  );
}
