"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/constants/site";
import { trackEvent } from "@/lib/metaPixel";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  business: z.string().min(2, "Enter your business name"),
  businessType: z.string().min(1, "Select a business type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    trackEvent("Lead", { content_name: "contact_form" });

    const text = `New consultation request:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Business: ${data.business}
Business type: ${data.businessType}
Monthly budget: ${data.budget}
Message: ${data.message || "-"}`;

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="bg-section py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Contact</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary">
            Let&apos;s talk about your next launch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Tell us about your project and we&apos;ll get back with a tailored strategy within one business day.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><Phone size={18} /></div>
              <div>
                <p className="text-xs text-ink/50">Phone</p>
                <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><Mail size={18} /></div>
              <div>
                <p className="text-xs text-ink/50">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-primary">{SITE.email}</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><Clock size={18} /></div>
              <div>
                <p className="text-xs text-ink/50">Working hours</p>
                <p className="font-semibold text-primary">{SITE.hours}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><MapPin size={18} /></div>
              <div>
                <p className="text-xs text-ink/50">Location</p>
                <p className="font-semibold text-primary">{SITE.location}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-3xl bg-surface p-8 shadow-glass-lg lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={48} className="text-secondary" />
                <h3 className="mt-4 text-xl font-bold text-primary">Thanks, we&apos;ve got it</h3>
                <p className="mt-2 text-sm text-ink/60">Our team will reach out within one business day.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-secondary underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate>
                <div>
                  <label className="text-sm font-medium text-ink/70">Name</label>
                  <input
                    {...register("name")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-cta">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">Phone</label>
                  <input
                    {...register("phone")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-cta">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">Email</label>
                  <input
                    {...register("email")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-cta">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">Business name</label>
                  <input
                    {...register("business")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    placeholder="Your company"
                  />
                  {errors.business && <p className="mt-1 text-xs text-cta">{errors.business.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">Business type</label>
                  <select
                    {...register("businessType")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    defaultValue=""
                  >
                    <option value="" disabled>Select type</option>
                    <option value="builder">Builder / Developer</option>
                    <option value="interior">Interior Design Firm</option>
                    <option value="architect">Architect</option>
                    <option value="consultant">Property Consultant</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="mt-1 text-xs text-cta">{errors.businessType.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">Monthly budget</label>
                 <select
                    {...register("budget")}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    defaultValue=""
                  >
                    <option value="" disabled>Select range</option>
                    <option value="10k-15k">₹10,000 – ₹15,000</option>
                    <option value="15k-20k">₹15,000 – ₹20,000</option>
                    <option value="20k-25k">₹20,000-₹25,000</option>
                  </select>
                  {errors.budget && <p className="mt-1 text-xs text-cta">{errors.budget.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-ink/70">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-section px-4 py-3 text-sm outline-none focus:border-secondary"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn sm:col-span-2 inline-flex items-center justify-center rounded-full bg-cta px-7 py-3.5 text-sm font-bold text-white shadow-glow hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Book free consultation"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
