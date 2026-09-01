import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Credibility } from "@/components/site/stats";
import { Problem } from "@/components/site/problem";
import { Difference } from "@/components/site/difference";

import { Deliverables } from "@/components/site/deliverables";
import { CeoSection } from "@/components/site/ceo";
import { Reels } from "@/components/site/reels";
import { Institutional, Mentorship } from "@/components/site/mentorship";
import { Reach } from "@/components/site/commercial";
import { FinalCta, SiteFooter } from "@/components/site/final";
import { Faq } from "@/components/site/faq";
import { ArrowRight } from "lucide-react";

const title = "ENNI THUNIGA | Empowering Careers. Enabling Futures.";
const description =
  "ENNI THUNIGA bridges the gap between student potential and real-world hiring through career readiness, industry exposure and placement optimization.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ENNI THUNIGA",
          slogan: "Dream • Dare • Do",
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <Difference />
        <Deliverables />
        <Mentorship />
        <CeoSection />
        <Reels />
        <Institutional />
        <Reach />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />

      {/* Persistent Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] translate-y-0 transition-transform duration-300">
        <div className="mx-auto flex h-auto py-4 sm:h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <div className="hidden sm:block">
            <p className="font-extrabold text-navy-deep text-lg">Your transformation starts here.</p>
            <p className="text-sm font-semibold text-slate-500">Secure your limited spot for 2026.</p>
          </div>
          <button className="w-full sm:w-auto ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#00C9C6] px-8 py-4 sm:py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#00a3a1] active:scale-95">
            Enroll Now <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
