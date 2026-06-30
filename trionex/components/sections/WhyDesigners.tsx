import Reveal from "@/components/Reveal";
import { DESIGNER_REASONS } from "@/constants/site";
import { Instagram, Globe, MessageCircle, Search, Bot, FolderOpen, Star, Gem } from "lucide-react";

const icons = [Instagram, Globe, Search, MessageCircle, Bot, FolderOpen, Star, Gem];

export default function WhyDesigners() {
  return (
    <section className="bg-section py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-cta">For interior design firms</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary lg:text-5xl">
            Why interior designers need digital marketing
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DESIGNER_REASONS.map((r, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-primary/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cta/30 hover:shadow-glass-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
