"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { trackEvent } from "@/lib/metaPixel";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
          scrolled ? "glass shadow-glass py-2" : "py-1"
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-xl tracking-tight text-primary">
            Trionex<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            onClick={() => trackEvent("Contact")}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <Phone size={16} /> Call now
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("Contact")}
            className="magnetic-btn flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary hover:-translate-y-0.5 hover:shadow-glass-lg"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="container mt-2"
          >
            <div className="glass shadow-glass-lg rounded-2xl p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink/80"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex-1 text-center rounded-full border border-primary/20 py-2.5 text-sm font-semibold text-primary"
                >
                  Call now
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="flex-1 text-center rounded-full bg-primary py-2.5 text-sm font-semibold text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
