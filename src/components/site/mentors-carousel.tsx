import { useState } from "react";
import { cn } from "@/lib/utils";

const MENTORS = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Mentor ${i + 1}`,
    role: i % 2 === 0 ? "Senior Cloud Engineer" : "Principal Architect",
    company: "Top Tech Corp"
}));

export function SemiCircleCarousel() {
    const [activeIndex, setActiveIndex] = useState(4);

    const getTransform = (index: number) => {
        const diff = index - activeIndex;
        const absDiff = Math.abs(diff);

        // Fan-out mathematical layout
        const rotate = diff * 12; // Degrees rotation
        const translateX = diff * 110; // X spread offset
        const translateY = (absDiff * absDiff) * 12; // Parabola-like drop for outside cards

        // Middle card is scale 1, outer cards scale down
        const scale = 1 - (absDiff * 0.1);
        const zIndex = 20 - absDiff;

        return {
            transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
            zIndex,
            // Hide cards that fan out way too far (past 4 cards away)
            opacity: absDiff > 4 ? 0 : 1,
            pointerEvents: absDiff > 4 ? ("none" as const) : ("auto" as const),
        };
    };

    const setIndex = (newIndex: number) => {
        let boundedIndex = Math.max(0, Math.min(newIndex, MENTORS.length - 1));
        setActiveIndex(boundedIndex);
    };

    // Allow scrolling to switch cards intuitively (debounced slightly by natural wheel ticks)
    let scrollTimeout: NodeJS.Timeout;
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                setIndex(activeIndex + 1);
            } else if (e.deltaY < 0 || e.deltaX < 0) {
                setIndex(activeIndex - 1);
            }
        }, 40);
    };

    return (
        <div className="relative w-full overflow-hidden py-16 flex flex-col items-center justify-center min-h-[800px] bg-slate-50 border-t border-slate-200">
            <div className="text-center mb-24 z-30 relative">
                <h2 className="text-[3rem] font-extrabold text-navy-deep tracking-tight sm:text-6xl uppercase leading-none">
                    Meet The <br /> <span className="text-[#00C9C6]">Mentors</span>
                </h2>
            </div>

            {/* Container for the cards with custom perspective */}
            <div
                onWheel={handleWheel}
                className="relative w-full max-w-[1200px] h-[550px] flex items-center justify-center mx-auto perspective-[1000px]"
            >
                {MENTORS.map((m, index) => {
                    const style = getTransform(index);
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={m.id}
                            onClick={() => setIndex(index)}
                            className={cn(
                                "absolute top-0 left-1/2 w-[340px] h-[480px] rounded-[2rem] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-2xl border-4 overflow-hidden group select-none",
                                isActive ? "border-[#00C9C6] shadow-[0_30px_70px_-15px_rgba(0,201,198,0.5)] z-[50]" : "border-white shadow-lg bg-gray-100",
                            )}
                            style={{
                                ...style,
                                transformOrigin: "bottom center",
                            }}
                        >
                            {/* Top Blank Placeholder Area for Image */}
                            <div className="flex-1 bg-slate-200 relative flex items-center justify-center h-full">
                                <p className="text-slate-400 font-bold text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                                    [ Image {m.id + 1} ]
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-80" />
                                {!isActive && <div className="absolute inset-0 bg-white/40 transition-opacity duration-300" />}
                            </div>

                            {/* Detail Content (Shows prominently when active) */}
                            <div className={cn(
                                "absolute bottom-0 inset-x-0 p-8 text-white transition-transform duration-700 delay-100",
                                isActive ? "translate-y-0" : "translate-y-6 opacity-0"
                            )}>
                                <p className="text-[#00C9C6] font-bold text-sm mb-1 uppercase tracking-wider">{m.role}</p>
                                <h3 className="text-3xl font-extrabold mb-3 leading-tight tracking-tight">{m.name}</h3>
                                <div className="h-[2px] w-12 bg-[#00C9C6]/50 mb-4" />
                                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                                    10+ years of building hyper-scale infrastructure. Current architect leading global deployments.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Helper */}
            <div className="flex gap-4 mt-12 z-30 relative">
                <button onClick={() => setIndex(activeIndex - 1)} className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow hover:bg-slate-50 font-bold text-navy-deep transition-transform active:scale-95">Prev</button>
                <button onClick={() => setIndex(activeIndex + 1)} className="px-6 py-3 rounded-full bg-white border border-slate-200 shadow hover:bg-slate-50 font-bold text-navy-deep transition-transform active:scale-95">Next</button>
            </div>
            <p className="text-slate-400 mt-4 font-semibold text-sm">Scroll on the cards or use buttons to navigate</p>
        </div>
    );
}
