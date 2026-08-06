"use client";

const items = [
  {
    value: "2+",
    label: "Years Experience",
    icon: "💼",
  },
  {
    value: "120+",
    label: "Test Cases Automated",
    icon: "🧪",
  },
  {
    value: "98%",
    label: "Automation Coverage",
    icon: "⚡",
  },
  {
    value: "Healthcare + Banking",
    label: "Domain Expertise",
    icon: "🏥",
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/50 py-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            QA ENGINEER
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Trusted Testing Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-fg-muted">
            Focused on building reliable Selenium automation frameworks,
            regression suites and high-quality software testing solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="godmode-card group rounded-3xl border border-border bg-surface p-7 text-center transition-all duration-300 hover:border-accent"
            >
              <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="font-display text-3xl font-bold text-accent">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-fg-muted">{item.label}</p>

              <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-accent transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>

        {/* Tech Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {[
            "Selenium",
            "Java",
            "TestNG",
            "Maven",
            "POM",
            "Regression Testing",
            "Manual Testing",
            "API Testing",
            "Jira",
            "Git",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:border-accent hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
