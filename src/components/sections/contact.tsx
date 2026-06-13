"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Input, Textarea } from "@/components/ui/input";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactInput) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob -left-20 top-20 size-[420px] bg-[var(--accent)]/20" />
        <div className="blob right-0 bottom-0 size-[420px] bg-[var(--accent-2)]/15" />
      </div>

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something memorable."
          description="Have a project in mind, or just want to say hi? Drop a note — I read every message."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl border border-[var(--primary)]/8 bg-white/70 backdrop-blur p-8">
              <div className="font-display text-2xl font-semibold text-[var(--primary)]">
                Let&apos;s start with a conversation.
              </div>
              <p className="mt-3 text-[var(--text)]/75 leading-relaxed">
                Whether you need a brand identity, a campaign system, or a one-off creative — I&apos;d love to hear about it.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--primary)]/8 bg-[var(--background)]/70 p-4 transition-all hover:border-[var(--accent)]/30 hover:-translate-y-0.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Email</div>
                    <div className="font-medium text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                      {SITE.email}
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-[var(--primary)]/8 bg-[var(--background)]/70 p-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Based in</div>
                    <div className="font-medium text-[var(--primary)]">{SITE.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br from-[#0F172A] to-[#1F2A44] p-8 text-white">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[var(--accent)]/40 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">Currently</div>
                <div className="font-display mt-2 text-2xl font-semibold">
                  Open for freelance projects
                </div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Typical reply within 24 hours. Selected projects start with a short discovery call.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative rounded-3xl border border-[var(--primary)]/8 bg-white/75 backdrop-blur p-7 md:p-9 shadow-xl shadow-[var(--primary)]/5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <Input placeholder="Your full name" {...register("name")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <Input type="email" placeholder="you@email.com" {...register("email")} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" error={errors.subject?.message}>
                  <Input placeholder="What's this about?" {...register("subject")} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <Textarea placeholder="Tell me about your project, brand, or idea…" {...register("message")} />
                </Field>
              </div>

              <div className="mt-7 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <p className="text-xs text-[var(--muted)]">
                  By submitting, you agree to be contacted by email.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-white transition-all disabled:opacity-60",
                    status === "success"
                      ? "bg-emerald-600"
                      : "bg-[var(--primary)] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[var(--primary)]/30"
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "loading" ? (
                      <motion.span
                        key="l"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </motion.span>
                    ) : status === "success" ? (
                      <motion.span
                        key="s"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} /> Message sent
                      </motion.span>
                    ) : (
                      <motion.span
                        key="i"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Send message
                        <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">{errorMsg || "Something went wrong. Please try again."}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]/70">
        {label}
        {error && <span className="normal-case tracking-normal text-red-500 text-[11px]">{error}</span>}
      </span>
      {children}
    </label>
  );
}
