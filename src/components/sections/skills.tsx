"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { SKILLS } from "@/lib/constants";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob left-1/2 top-20 size-[420px] bg-[var(--accent-2)]/15" />
      </div>
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A toolkit refined by practice."
          description="Software fluency, craft discipline, and a strong sense of what makes a brand feel right."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILLS.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--primary)]/8 bg-white/65 backdrop-blur p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent)]/10 hover:border-[var(--accent)]/30"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[var(--accent)]/0 blur-3xl transition-all duration-700 group-hover:bg-[var(--accent)]/25" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,107,53,0.06), transparent 40%)" }} />

              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {s.category}
                </span>
                <span className="text-xs font-medium text-[var(--primary)]/60">{s.level}%</span>
              </div>

              <div className="font-display mt-4 text-2xl font-semibold text-[var(--primary)]">
                {s.name}
              </div>

              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[var(--primary)]/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="h-full rounded-full gradient-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
