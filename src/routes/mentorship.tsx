import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/final";
import { ArrowRight } from "lucide-react";
import { SemiCircleCarousel } from "@/components/site/mentors-carousel";

export const Route = createFileRoute("/mentorship")({
    component: MentorshipPage,
});

function MentorshipPage() {
    return (
        <div className="h-[100dvh] bg-slate-50 flex flex-col overflow-hidden relative">
            <SiteNav />
            <main className="flex-1 flex flex-col relative pt-20 pb-6 w-full max-w-[1280px] mx-auto px-5 sm:px-8">
                {/* Fixed Top Header block */}
                <div className="text-center shrink-0 z-10 pt-4">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-deep tracking-tight mb-2">
                        Mentorship Program
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                        A dedicated, hands-on mentorship pipeline designed to take you from a learner to an industry-ready tech professional.
                    </p>
                </div>

                {/* Flexible, unscrollable space for 10 Card Semi-Circle Mentors Component */}
                <div className="flex-1 relative flex items-center justify-center min-h-0 w-full overflow-hidden mt-4">
                    <SemiCircleCarousel />
                </div>

                {/* The Two-Line Gap below Carousel as requested */}
                <div className="shrink-0 text-center z-10 px-4 mt-2 hidden sm:block">
                    <p className="text-sm font-semibold text-slate-500">
                        Join 1,000+ students learning directly from these active industry leaders. <br />
                        Limited spots available for the 2026 cohort.
                    </p>
                </div>
                {/* Mobile version for two lines */}
                <div className="shrink-0 text-center z-10 px-4 mt-4 sm:hidden">
                    <p className="text-[0.8rem] font-semibold text-slate-500 leading-tight">
                        Learn directly from active industry leaders. <br />
                        Limited spots for 2026.
                    </p>
                </div>

                {/* Fixed Bottom CTA block */}
                <div className="shrink-0 text-center z-10 pt-4 pb-2">
                    <button className="w-full sm:w-auto inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full bg-[#00C9C6] px-10 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#00a3a1] active:scale-95">
                        Enroll Now <ArrowRight className="size-5" />
                    </button>
                </div>
            </main>
        </div>
    );
}
