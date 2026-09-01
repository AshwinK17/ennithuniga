import { useReveal, useCountUp } from "@/lib/use-reveal";

export function Reach() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const n = useCountUp(830000, visible, 1900);
  return (
    <section className="bg-background py-20 lg:py-24">
      <div ref={ref} className="mx-auto max-w-[1280px] px-5 text-center sm:px-8">
        <p className="eyebrow text-cyan-deep">Reach</p>
        <p className="mt-6 text-[3.4rem] font-extrabold leading-none tracking-tighter text-navy sm:text-8xl">
          {n.toLocaleString("en-US")}
          <span className="text-cyan-deep">+</span>
        </p>
        <p className="eyebrow mt-5 text-muted-foreground">People Reached</p>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A company reach metric shared by ENNI THUNIGA across its social platforms.
        </p>
      </div>
    </section>
  );
}