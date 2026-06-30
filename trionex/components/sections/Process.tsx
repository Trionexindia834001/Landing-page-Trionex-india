import Reveal from "@/components/Reveal";
import { PROCESS } from "@/constants/site";

export default function Process() {
  return (
    <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-secondary/30 blur-[140px]" />
      </div>
      <div className="container relative">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">How we work</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-white lg:text-5xl">
            A proven path from research to revenue
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
          {PROCESS.map((step, i) => (
            <Reveal key={step} delay={i * 0.07} className="relative">
              <div className="flex flex-col items-start">
                <span className="font-stat text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm font-semibold leading-snug text-white">{step}</p>
              </div>
              {i < PROCESS.length - 1 && (
                <div className="absolute top-2 left-[2.4rem] hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-white/30 to-transparent lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
