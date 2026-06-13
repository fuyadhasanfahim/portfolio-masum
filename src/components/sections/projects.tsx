"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { PROJECTS, CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Projects() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () => (category === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === category)),
    [category]
  );

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Work I'm proud of."
          description="A small selection from brand identities, social campaigns, and print systems."
        />

        {/* Filters */}
        <LayoutGroup>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                    active ? "text-white" : "text-[var(--text)]/70 hover:text-[var(--primary)]"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)]"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  {c}
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-flow:dense]">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] border border-[var(--primary)]/8 bg-white shadow-lg shadow-[var(--primary)]/5 transition-all hover:shadow-2xl hover:shadow-[var(--primary)]/10",
                  i % 5 === 0 && "sm:col-span-2 lg:col-span-2"
                )}
              >
                {/* Visual */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br", p.accent)} />
                  <div className="absolute inset-0 opacity-25 mix-blend-overlay" style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, black 0%, transparent 50%)",
                  }} />

                  {/* Decorative composition */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 6, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="font-display text-white text-[clamp(2rem,5vw,4rem)] leading-none font-bold tracking-tight text-center drop-shadow-lg"
                    >
                      {p.title}
                    </motion.div>
                  </div>

                  {/* Palette */}
                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {p.palette.map((c) => (
                      <span
                        key={c}
                        className="size-5 rounded-full ring-2 ring-white/40"
                        style={{ background: c }}
                      />
                    ))}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white w-fit">
                      {p.category}
                    </span>
                    <p className="mt-3 text-sm text-white/85 leading-relaxed">{p.description}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {p.category} · {p.year}
                    </div>
                    <h3 className="font-display mt-1 text-xl font-semibold text-[var(--primary)]">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-full border border-[var(--primary)]/10 text-[var(--primary)] transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
