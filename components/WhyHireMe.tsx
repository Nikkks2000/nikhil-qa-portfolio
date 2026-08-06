"use client";

import Link from "next/link";

const points = [
  "1+ Year Professional QA Experience",
  "Healthcare & Banking Domain",
  "Selenium WebDriver Automation",
  "Manual + Regression Testing",
  "API Testing (Postman)",
  "SQL Database Validation",
  "TestNG + Maven",
  "Agile Scrum Workflow",
];

export default function WhyHireMe() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="rounded-[32px] border border-border bg-surface p-10 lg:p-14">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              WHY HIRE ME
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Delivering reliable software through quality engineering.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-fg-muted">
              I enjoy improving software quality with structured testing,
              Selenium automation and practical problem-solving. My experience
              includes Healthcare and Banking applications, where reliability
              and accuracy are essential.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/resume.pdf"
                className="godmode-btn rounded-xl bg-accent px-6 py-3 font-medium text-bg"
              >
                Download Resume
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-border px-6 py-3 hover:border-accent hover:text-accent"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {points.map((item) => (
              <div
                key={item}
                className="godmode-card flex items-center gap-4 rounded-2xl border border-border bg-surface-2 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-bg font-bold">
                  ✓
                </div>

                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
