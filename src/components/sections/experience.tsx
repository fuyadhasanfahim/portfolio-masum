"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { EXPERIENCES } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shaped brands."
          description="A focused journey through roles that grew my eye and my craft."
        />

        <div className="relative mt-20 max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--primary)]/15 to-transparent">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="h-full w-px gradient-accent"
            />
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 z-10 -translate-x-1/2">
                  <span className="relative flex size-4 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)]/40" />
                    <span className="relative size-4 rounded-full gradient-accent ring-4 ring-[var(--background)]" />
                  </span>
                </div>

                <div className="md:text-right md:pr-12">
                  <span className="font-display text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                    {exp.period}
                  </span>
                  <h3 className="font-display mt-2 text-3xl md:text-4xl font-semibold text-[var(--primary)]">
                    {exp.company}
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--text)]/70">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>

                <div className="md:pl-12 mt-4 md:mt-0">
                  <div className="rounded-3xl border border-[var(--primary)]/8 bg-white/70 backdrop-blur p-7 shadow-lg shadow-[var(--primary)]/5">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                      <Briefcase size={16} /> {exp.role}
                    </div>
                    <ul className="mt-5 space-y-3">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-[var(--text)]/80 leading-relaxed">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
