"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/constants/site";
import { trackEvent } from "@/lib/metaPixel";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("Contact")}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass-lg"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </motion.a>
  );
}
