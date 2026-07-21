import Link from "next/link";

export default function CtaBanner({
  heading = "Testing tools that save you the setup time",
  subtext = "Checklists, scripts and kits — built from real QA work, ready to use today.",
  href = "/shop",
  label = "Browse tools →",
}: {
  heading?: string;
  subtext?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="border-t border-border bg-surface-2">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-md text-sm text-fg-muted">{subtext}</p>
        </div>
        <Link
          href={href}
          className="focus-ring shrink-0 rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
