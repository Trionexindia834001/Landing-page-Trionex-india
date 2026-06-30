import Reveal from "@/components/Reveal";
import { SERVICES } from "@/constants/site";
import {
  Code2, LayoutTemplate, Target, Megaphone, Search as SearchIcon, BarChart, Palette,
  Hexagon, Brush, Share2, Camera, Bot, Workflow, GitBranch, MessageSquare, Mail,
  LineChart, MapPin, ClipboardList, type LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [
  Code2, LayoutTemplate, Target, Megaphone, SearchIcon, BarChart, Hexagon, Palette,
  Brush, Share2, Camera, Bot, Workflow, GitBranch, MessageSquare, Mail,
  LineChart, MapPin, ClipboardList, Target,
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">What we do</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary lg:text-5xl">
            Full-stack marketing for premium property brands
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/60">
            Everything you need to attract, convert and close qualified buyers, under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={(i % 8) * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/8 bg-section p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/0 transition-colors duration-300 group-hover:bg-accent/10" />
                  <Icon size={22} className="relative text-secondary" />
                  <h3 className="relative mt-4 font-bold text-primary">{s.title}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-ink/55">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
