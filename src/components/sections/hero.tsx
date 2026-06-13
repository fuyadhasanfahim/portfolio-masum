'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32"
        >
            {/* Background blobs */}
            <div aria-hidden className="absolute inset-0 -z-10">
                <div className="blob -top-32 -left-24 size-[480px] bg-[var(--accent)]/45 animate-float-slow" />
                <div
                    className="blob top-40 right-[-10%] size-[520px] bg-[var(--accent-2)]/35 animate-float-slow"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="blob bottom-[-10%] left-1/3 size-[420px] bg-amber-200/60 animate-float-slow"
                    style={{ animationDelay: '4s' }}
                />
                <div className="noise" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/40 to-[var(--background)]" />
            </div>

            <div className="container-px mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-12">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={0}
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-[var(--primary)]/80"
                        >
                            <Sparkles
                                size={14}
                                className="text-[var(--accent)]"
                            />
                            Available for design collaborations
                        </motion.div>

                        <motion.h1
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={1}
                            className="font-display mt-6 text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] font-semibold tracking-tight text-[var(--primary)] text-balance"
                        >
                            Designing brands
                            <br />
                            that feel{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text">
                                    unforgettable
                                </span>
                                <svg
                                    viewBox="0 0 300 12"
                                    className="absolute -bottom-2 left-0 w-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M2 8 C 80 1, 200 1, 298 7"
                                        stroke="#FF6B35"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{
                                            duration: 1.4,
                                            delay: 0.6,
                                            ease: 'easeOut',
                                        }}
                                    />
                                </svg>
                            </span>
                            .
                        </motion.h1>

                        <motion.p
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={2}
                            className="mt-7 max-w-xl text-lg md:text-xl text-[var(--text)]/75 leading-relaxed text-balance"
                        >
                            I&apos;m{' '}
                            <span className="text-[var(--primary)] font-medium">
                                Md. Masum Kamal
                            </span>{' '}
                            — a graphic designer turning ideas into brand
                            identities, social media creatives, and print work
                            that move people.
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={3}
                            className="mt-9 flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--primary)]/30"
                            >
                                View Projects
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </a>
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/15 bg-white/60 backdrop-blur px-7 py-4 text-sm font-medium text-[var(--primary)] transition-all hover:bg-white hover:-translate-y-0.5"
                            >
                                Contact Me
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            custom={4}
                            className="mt-14 flex items-center gap-8 text-sm text-[var(--text)]/65"
                        >
                            {[
                                ['2+', 'Yrs experience'],
                                ['50+', 'Designs shipped'],
                                ['100%', 'Crafted by hand'],
                            ].map(([v, l]) => (
                                <div
                                    key={l}
                                    className="flex items-center gap-3"
                                >
                                    <span className="font-display text-2xl font-semibold text-[var(--primary)]">
                                        {v}
                                    </span>
                                    <span className="text-xs uppercase tracking-wider">
                                        {l}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right — Showcase card */}
                    <div className="lg:col-span-5">
                        <ShowcaseCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShowcaseCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
        >
            {/* Floating chips */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -left-6 top-10 z-20 hidden sm:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 shadow-xl"
            >
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-[var(--primary)]">
                    Typography
                </span>
            </motion.div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute -right-4 top-32 z-20 hidden sm:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 shadow-xl"
            >
                <span className="size-2 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-medium text-[var(--primary)]">
                    Branding
                </span>
            </motion.div>
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
                className="absolute -bottom-2 -left-2 z-20 hidden sm:flex items-center gap-2 rounded-2xl glass-strong px-3 py-2 shadow-xl"
            >
                <span className="size-2 rounded-full bg-[var(--accent-2)]" />
                <span className="text-xs font-medium text-[var(--primary)]">
                    Print Design
                </span>
            </motion.div>

            {/* Card */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-[#0F172A] via-[#1F2A44] to-[#0F172A] p-8 shadow-2xl shadow-[var(--primary)]/15">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -right-10 -top-10 size-72 rounded-full bg-[var(--accent)] blur-3xl" />
                    <div className="absolute -bottom-12 -left-10 size-72 rounded-full bg-[var(--accent-2)] blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/20 bg-white/5 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
                            Portfolio · 2026
                        </span>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="size-10 rounded-full border border-dashed border-white/30"
                        />
                    </div>

                    <div>
                        <div className="text-[11px] uppercase tracking-[0.25em] text-white/60">
                            Graphic Designer
                        </div>
                        <div className="font-display mt-3 text-5xl leading-none font-semibold">
                            Masum
                            <br />
                            Kamal.
                        </div>
                        <p className="mt-5 max-w-[260px] text-sm text-white/70 leading-relaxed">
                            Crafting visual identities that tell a story — bold,
                            intentional, and timeless.
                        </p>
                    </div>

                    <div className="flex items-end justify-between">
                        <div className="flex -space-x-1">
                            {['#FF6B35', '#2563EB', '#FAF8F5', '#94A3B8'].map(
                                (c) => (
                                    <span
                                        key={c}
                                        className="size-7 rounded-full ring-2 ring-[#0F172A]"
                                        style={{ background: c }}
                                    />
                                ),
                            )}
                        </div>
                        <ArrowUpRight size={28} className="text-white/80" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
