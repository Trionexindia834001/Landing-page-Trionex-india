import { Instagram, Linkedin, Facebook } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white/60">
      <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-heading text-xl font-extrabold text-white">
            Trionex<span className="text-accent">.</span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Performance marketing and premium digital experiences for real estate developers, builders and interior design firms.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"><Linkedin size={16} /></a>
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10"><Facebook size={16} /></a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>{SITE.phoneDisplay}</li>
            <li>{SITE.email}</li>
            <li>{SITE.location}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 border-t border-white/10 pt-6 text-xs">
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
