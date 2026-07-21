import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsGrid() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Test Report
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Work I&apos;ve shipped
          </h2>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/work/${p.slug}`}
            className="focus-ring group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-fg-muted">{p.id}</span>
              <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[11px] text-accent">
                PASS
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">
              {p.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-fg-muted">{p.tag}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              {p.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded bg-surface-2 px-2 py-1 font-mono text-[11px] text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Read case study →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
