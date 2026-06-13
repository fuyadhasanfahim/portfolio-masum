"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Palette, PackageCheck } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { PROCESS } from "@/lib/constants";

const ICONS = [Search, Lightbulb, Palette, PackageCheck];

export function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob -right-20 top-40 size-[420px] bg-[var(--accent)]/15" />
      </div>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Design Process"
          title="How a brand comes to life."
          description="A repeatable four-step rhythm that turns ambiguous ideas into design that feels inevitable."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <svg
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden lg:block"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            height={40}
          >
            <motion.path
              d="M 60 20 C 300 -10, 500 50, 700 20 S 1100 -10, 1140 20"
              stroke="url(#g1)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--primary)]/8 bg-white/70 backdrop-blur p-7 shadow-lg shadow-[var(--primary)]/5 transition-all hover:shadow-2xl hover:shadow-[var(--accent)]/10"
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-[var(--accent)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--accent)]/30" />

                  <div className="relative flex size-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white transition-transform duration-500 group-hover:rotate-6">
                    <Icon size={22} />
                    <span className="absolute -right-2 -top-2 rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-bold text-white">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-2xl font-semibold text-[var(--primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text)]/75 leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
