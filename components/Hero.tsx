"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroScene from "@/components/HeroScene";
import QADashboard from "@/components/QADashboard";
import Magnetic from "@/components/Magnetic";
import Profile3D from "@/components/Profile3D";

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

    const timer = setTimeout(() => {
      setVisible((v) => v + 1);
    }, 450);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <section className="relative overflow-visible border-b border-border grid-bg">
      {/* Aurora Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            left: "-180px",
            top: "-120px",
            width: "420px",
            height: "420px",
            background:
              "radial-gradient(circle, var(--accent), transparent 70%)",
          }}
        />

        <div
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            right: "-120px",
            bottom: "-120px",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle,#5b8cff,transparent 70%)",
          }}
        />
      </div>

      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 py-12 lg:grid-cols-[1fr_560px]">
        {/* LEFT */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            QA Engineer • Test Automation
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            I test software for a living.
            <br />
            <span className="gradient-text">Now I build the tools for it.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg">
            Testing checklists, automation scripts and QA templates built from
            real work in healthcare and banking QA—not theory.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic>
              <Link
                href="#work"
                className="focus-ring godmode-btn rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-bg"
              >
                View Work
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="/resume.pdf"
                className="focus-ring godmode-btn rounded-xl border border-border px-6 py-3 font-mono text-sm font-medium text-fg hover:border-accent hover:text-accent"
              >
                Download Resume →
              </Link>
            </Magnetic>
          </div>

          {/* Stats */}
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-accent">
              <div className="text-2xl">🧪</div>
              <p className="mt-2 text-2xl font-bold text-accent">2+</p>
              <p className="text-xs text-fg-muted">Years QA</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-accent">
              <div className="text-2xl">📋</div>
              <p className="mt-2 text-2xl font-bold text-accent">500+</p>
              <p className="text-xs text-fg-muted">Test Cases</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-accent">
              <div className="text-2xl">⚡</div>
              <p className="mt-2 text-2xl font-bold text-accent">35%</p>
              <p className="text-xs text-fg-muted">Regression Saved</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-accent">
              <div className="text-2xl">🛡️</div>
              <p className="mt-2 text-2xl font-bold text-accent">99%</p>
              <p className="text-xs text-fg-muted">Workflow Stability</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative isolate h-[680px] w-[560px] overflow-visible">
          {/* 3D Background Scene */}
          <div className="pointer-events-none absolute top-[80px] left-[120px] z-0 scale-[0.88]">
            <HeroScene />
          </div>

          {/* Green Glow */}
          <div className="absolute left-24 top-28 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />

          {/* Blue Glow */}
          <div className="absolute right-6 bottom-12 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[120px]" />

          {/* Foreground Layers */}
          <div
            className="absolute top-[300px] left-0 z-50"
            style={{
              transformStyle: "preserve-3d",
              pointerEvents: "auto",
            }}
          >
            <Profile3D />
          </div>

          <div className="absolute top-[0px] left-[270px] z-20 w-[400px]">
            <QADashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
