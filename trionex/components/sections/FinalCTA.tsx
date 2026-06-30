import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/constants/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh py-24 lg:py-28">
      <div className="noise-bg absolute inset-0 pointer-events-none" />
      <div className="container relative text-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-white lg:text-5xl">
            Ready to generate more qualified leads?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Let&apos;s build a marketing system that consistently generates high-quality buyers, increases site visits and grows your revenue.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5"
            >
              Book free consultation
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="magnetic-btn inline-flex items-center gap-2 justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Phone size={16} /> Call now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
