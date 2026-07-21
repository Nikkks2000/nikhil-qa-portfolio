"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const checks = [
  { label: "portfolio.render()", status: "PASS", time: "12ms" },
  { label: "automation.selenium_suite()", status: "PASS", time: "340ms" },
  { label: "api.rest_assured_suite()", status: "PASS", time: "180ms" },
  { label: "checkout.razorpay_flow()", status: "PASS", time: "96ms" },
];

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= checks.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 450);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            QA Engineer · Test Automation
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            I test software for a living.
            <br />
            <span className="text-fg-muted">Now I build the tools for it.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
            Testing checklists, automation scripts and QA templates —
            built from real work in healthcare and banking QA, not
            theory. Explore what I&apos;ve built, or get the tools I use
            myself.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#work"
              className="focus-ring rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              View work
            </Link>
            <Link
              href="/shop"
              className="focus-ring rounded-xl border border-border px-6 py-3 font-mono text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Browse tools →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface font-mono text-sm shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8544d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="ml-3 text-xs text-fg-muted">test-run.sh</span>
          </div>
          <div className="space-y-2.5 px-5 py-6">
            {checks.slice(0, visible).map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-4 animate-[fadeIn_0.3s_ease-out]"
              >
                <span className="text-fg-muted">
                  <span className="text-accent">✓</span> {c.label}
                </span>
                <span className="shrink-0 text-xs text-fg-muted">{c.time}</span>
              </div>
            ))}
            {visible >= checks.length && (
              <div className="mt-4 border-t border-border pt-4 text-accent">
                4 passed, 0 failed <span className="text-fg-muted">— 628ms</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
