"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp, MessageSquareText, Target, Building2 } from "lucide-react";
import { HERO, SITE } from "@/constants/site";
import { trackEvent } from "@/lib/metaPixel";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-secondary/40 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/30 blur-[120px]" />
        <div className="noise-bg absolute inset-0" />
      </div>

      <div className="container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {HERO.label}
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-balance font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tightest text-white sm:text-6xl lg:text-[4.4rem] lg:leading-[0.95]"
          >
            Generate more{" "}
            <span className="gradient-text-animated">qualified property buyers</span>, not just more website visitors.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-[1.8] text-white/70"
          >
            {HERO.sub}
          </motion.p>

          <motion.ul
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3"
          >
            {HERO.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                <Check size={15} className="shrink-0 text-accent" /> {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              onClick={() => trackEvent("Lead")}
              className="magnetic-btn inline-flex items-center justify-center rounded-full bg-cta px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glass-lg"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#contact"
              onClick={() => trackEvent("Schedule")}
              className="magnetic-btn inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 hover:-translate-y-0.5"
            >
              {HERO.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7"
          >
            {HERO.badges.map((b) => (
              <div key={b.label}>
                <p className="font-stat text-2xl font-bold text-white">{b.value}</p>
                <p className="text-xs text-white/50">{b.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — floating dashboard composition */}
        <div className="relative hidden h-[34rem] lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark absolute left-1/2 top-1/2 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 shadow-glass-lg"
          >
            <p className="text-xs font-medium text-white/50">Lead performance</p>
            <p className="font-stat mt-1 text-3xl font-bold text-white">5,247</p>
            <p className="text-xs text-accent">+38% this quarter</p>
            <div className="mt-6 flex items-end gap-2 h-24">
              {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-secondary to-accent"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute left-2 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass-lg"
          >
            <Building2 size={18} className="text-secondary" />
            <div>
              <p className="text-xs font-semibold text-ink">Property leads</p>
              <p className="text-[11px] text-ink/50">Live tracking</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass absolute right-0 top-28 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass-lg"
          >
            <Target size={18} className="text-cta" />
            <div>
              <p className="text-xs font-semibold text-ink">Google Ads</p>
              <p className="text-[11px] text-ink/50">CPL ₹92</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute bottom-16 left-0 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass-lg"
          >
            <TrendingUp size={18} className="text-accent" />
            <div>
              <p className="text-xs font-semibold text-ink">ROI growth</p>
              <p className="text-[11px] text-ink/50">+6.5X average</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            className="glass absolute bottom-2 right-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass-lg"
          >
            <MessageSquareText size={18} className="text-secondary" />
            <div>
              <p className="text-xs font-semibold text-ink">AI chatbot</p>
              <p className="text-[11px] text-ink/50">Replies in 2s</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
