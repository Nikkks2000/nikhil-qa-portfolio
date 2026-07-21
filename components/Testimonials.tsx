import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            First customers, first reviews
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            This section will fill up with real feedback as people use the
            tools. No filler reviews here in the meantime.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-border bg-surface/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Reviews
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What people are saying
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p className="text-sm leading-relaxed text-fg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 font-mono text-xs text-fg-muted">
                {t.name} — {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
