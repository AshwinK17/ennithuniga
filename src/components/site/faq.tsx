import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Who is this program for?",
        answer: "This program is designed for ambitious technical graduates and early-career developers who want to bridge the massive gap between academic theory and real-world corporate expectations.",
    },
    {
        question: "How is this different from a standard bootcamp?",
        answer: "We don't just teach syntax. We place you in high-pressure, real-world simulations where you build, deploy, and debug complex pipelines—exactly how it happens in a professional environment.",
    },
    {
        question: "Do you guarantee placements?",
        answer: "We guarantee you will be 100% prepared for top-tier interviews and provide direct placement assistance. However, passing the interview is ultimately your execution based on our training.",
    },
    {
        question: "How long is the mentorship program?",
        answer: "The rigorous mentorship cohort lasts for exactly 16 weeks, featuring continuous hands-on project deployments, code reviews, and one-on-one sessions.",
    },
    {
        question: "When does the next cohort start?",
        answer: "Admissions for our upcoming 2026 foundational cohort are currently open. Seats are highly limited to ensure quality 1-on-1 mentorship.",
    },
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-white py-24 lg:py-32 border-t border-slate-200">
            <div className="mx-auto max-w-[800px] px-5 sm:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-navy-deep sm:text-5xl tracking-tight mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Everything you need to know about the ENNI THUNIGA program.
                        </p>
                    </div>
                </Reveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <Reveal key={index} delay={index * 50}>
                                <div
                                    className={cn(
                                        "border rounded-2xl overflow-hidden transition-all duration-300",
                                        isOpen ? "border-[#00C9C6] shadow-md bg-[#00C9C6]/10" : "border-slate-200 hover:border-slate-300 bg-white"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-navy-deep text-lg"
                                    >
                                        {faq.question}
                                        <ChevronDown className={cn("size-5 text-[#00C9C6] transition-transform duration-300", isOpen && "rotate-180")} />
                                    </button>
                                    <div
                                        className={cn(
                                            "grid transition-all duration-300 ease-in-out",
                                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        )}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
