import Reveal from "@/components/Reveal";
import { CASE_STUDIES } from "@/constants/site";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-section py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Case studies</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary lg:text-5xl">
            Results our clients can put in a board meeting
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-primary p-8 text-white shadow-glass-lg lg:p-10">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent">
                  {c.type}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-stat text-3xl font-bold text-accent">{m.value}</p>
                      <p className="mt-1 text-xs text-white/55">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
