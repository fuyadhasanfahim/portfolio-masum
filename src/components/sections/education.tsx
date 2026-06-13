"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { EDUCATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="A grounding in business & craft."
          description="Studying management while honing the design eye outside the classroom."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border p-7 shadow-lg shadow-[var(--primary)]/5 transition-all hover:shadow-2xl",
                e.highlight
                  ? "bg-gradient-to-br from-[#0F172A] to-[#1F2A44] border-transparent text-white"
                  : "bg-white/70 backdrop-blur border-[var(--primary)]/8"
              )}
            >
              {e.highlight && (
                <>
                  <div className="absolute -right-12 -top-12 size-44 rounded-full bg-[var(--accent)]/40 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-[var(--accent-2)]/35 blur-3xl" />
                </>
              )}

              <div
                className={cn(
                  "relative flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6",
                  e.highlight
                    ? "bg-white/15 backdrop-blur text-white"
                    : "bg-[var(--primary)] text-white"
                )}
              >
                <GraduationCap size={22} />
              </div>

              <div className="relative mt-6">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em]",
                    e.highlight
                      ? "bg-white/15 backdrop-blur text-white/85"
                      : "bg-[var(--primary)]/5 text-[var(--primary)]/70"
                  )}
                >
                  {e.status}
                </span>
                <h3
                  className={cn(
                    "font-display mt-4 text-xl font-semibold leading-snug",
                    e.highlight ? "text-white" : "text-[var(--primary)]"
                  )}
                >
                  {e.degree}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    e.highlight ? "text-white/70" : "text-[var(--text)]/70"
                  )}
                >
                  {e.school}
                </p>
                <p
                  className={cn(
                    "mt-3 text-xs uppercase tracking-[0.18em]",
                    e.highlight ? "text-white/55" : "text-[var(--muted)]"
                  )}
                >
                  {e.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
