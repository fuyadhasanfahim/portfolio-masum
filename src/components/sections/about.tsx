"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { STATS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Designing with intention, every pixel."
          description="Two years into my craft, I've learned the best design isn't loud — it's clear. I help brands find a voice that's confident, distinct, and lasting."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[var(--primary)]/8 bg-gradient-to-br from-[#FAF8F5] via-white to-[#F2EDE5] p-8 shadow-xl shadow-[var(--primary)]/5">
                <div className="grid h-full grid-cols-3 grid-rows-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className={`rounded-2xl ${
                        [
                          "bg-[var(--primary)]",
                          "bg-[var(--accent)]/90",
                          "bg-white border border-[var(--primary)]/10",
                          "bg-[var(--accent-2)]/90",
                          "bg-[var(--primary)] flex items-center justify-center text-white font-display text-2xl font-bold",
                          "bg-[var(--accent)]/20",
                          "bg-white border border-[var(--primary)]/10",
                          "bg-[var(--primary)]/90",
                          "bg-[var(--accent-2)]/15",
                        ][i]
                      }`}
                    >
                      {i === 4 && "MK"}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-3xl glass-strong px-5 py-4 shadow-xl">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Based in</div>
                <div className="font-display text-lg font-semibold text-[var(--primary)]">Bangladesh</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg md:text-xl text-[var(--text)]/85 leading-relaxed">
              I&apos;m a graphic designer with a passion for branding, social media creatives, and print design. Over the past two years at <span className="text-[var(--primary)] font-medium">WebBriks</span>, I&apos;ve shipped designs that helped brands stand out, scale visually, and feel human.
            </p>
            <p className="text-lg text-[var(--text)]/75 leading-relaxed">
              My approach is research-led and detail-obsessed. I care about the small things — kerning, contrast, hierarchy — because the small things become the brand.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--primary)]/8 bg-white/60 backdrop-blur p-6 transition-all hover:shadow-xl hover:shadow-[var(--primary)]/5 hover:border-[var(--accent)]/30"
                >
                  <div className="absolute -right-8 -top-8 size-24 rounded-full bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 blur-2xl transition-all duration-500" />
                  <div className="font-display text-4xl font-semibold text-[var(--primary)]">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-[var(--text)]/70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
