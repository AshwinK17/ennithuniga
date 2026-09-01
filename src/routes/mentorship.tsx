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
        <div className="min-h-screen bg-background flex flex-col">
            <SiteNav />
            <main className="flex-1 pt-32 pb-20">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-deep tracking-tight mb-8">
                        Mentorship Program
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        A dedicated, hands-on mentorship pipeline designed to take you from a learner to an industry-ready tech professional.
                    </p>
                </div>

                {/* 10 Card Semi-Circle Mentors Component */}
                <SemiCircleCarousel />

                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 mt-12 text-center pb-24">
                    <button className="inline-flex min-h-[3.5rem] items-center justify-center gap-2 rounded-full bg-[#00C9C6] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#00a3a1]">
                        Enroll Now <ArrowRight className="size-5" />
                    </button>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}
