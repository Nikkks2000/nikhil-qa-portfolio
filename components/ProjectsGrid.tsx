import Link from "next/link";
import { projects } from "@/lib/projects";
import TiltCard from "@/components/TiltCard";

export default function ProjectsGrid() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      {/* Heading */}
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          FEATURED AUTOMATION PROJECTS
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Real QA projects from{" "}
          <span className="text-accent">production work.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
          Automation frameworks, Selenium test suites and QA solutions built
          using real-world workflows—not tutorial examples.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <TiltCard key={p.id} maxTilt={8} className="rounded-3xl">
            <Link
              href={`/work/${p.slug}`}
              className="focus-ring godmode-card group relative block overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-[0_25px_60px_rgba(0,0,0,.18)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
              </div>

              {/* Fake Selenium Report */}
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-surface-2 p-4">
                <div className="mb-3 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-fg-muted">LoginTest</span>
                    <span className="text-green-500">PASS</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-fg-muted">SearchTest</span>
                    <span className="text-green-500">PASS</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-fg-muted">CheckoutTest</span>
                    <span className="text-green-500">PASS</span>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface">
                    <div className="h-full w-[92%] rounded-full bg-accent" />
                  </div>

                  <p className="mt-2 font-mono text-[11px] text-fg-muted">
                    Test Coverage • 92%
                  </p>
                </div>
              </div>

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs text-fg-muted">{p.id}</span>

                <span className="rounded-full bg-green-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-green-500">
                  ✔ PASS
                </span>
              </div>

              {/* Title */}
              <h3 className="relative mt-5 font-display text-xl font-semibold">
                {p.title}
              </h3>

              <p className="relative mt-2 font-mono text-xs uppercase tracking-wider text-accent">
                {p.tag}
              </p>

              {/* Summary */}
              <p className="relative mt-4 text-sm leading-7 text-fg-muted">
                {p.summary}
              </p>

              {/* Tech Stack */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[11px] text-fg-muted transition hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Coverage */}
              <div className="relative mt-8 flex items-center justify-between">
                <span className="font-mono text-xs text-fg-muted">
                  Automation Coverage
                </span>

                <span className="font-mono text-sm font-semibold text-accent">
                  98%
                </span>
              </div>

              <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-border">
                <div className="h-full w-[98%] rounded-full bg-accent" />
              </div>

              {/* Footer */}
              <div className="relative mt-8 flex items-center justify-between">
                <span className="font-mono text-xs text-accent transition group-hover:translate-x-1">
                  View Project →
                </span>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-mono text-green-500">
                  Production Ready
                </span>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/work"
          className="inline-flex items-center rounded-xl border border-border px-6 py-3 font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_var(--accent)]"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
