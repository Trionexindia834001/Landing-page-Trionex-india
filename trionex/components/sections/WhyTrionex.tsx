import Reveal from "@/components/Reveal";
import { WHY_TRIONEX } from "@/constants/site";
import { Users, FileBarChart, Lightbulb, UserCheck, Wallet, Sparkles, Zap, Gauge } from "lucide-react";

const icons = [Users, FileBarChart, Lightbulb, UserCheck, Wallet, Sparkles, Zap, Gauge];

export default function WhyTrionex() {
  return (
    <section id="why-us" className="bg-surface py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Why Trionex India</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary lg:text-5xl">
            A partner that thinks like an owner
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_TRIONEX.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-primary/8 bg-section p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-secondary">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{w.desc}</p>
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
