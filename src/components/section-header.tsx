"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--primary)]/70",
            align === "center" && "mx-auto"
          )}
        >
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[var(--primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-[var(--text)]/75 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
