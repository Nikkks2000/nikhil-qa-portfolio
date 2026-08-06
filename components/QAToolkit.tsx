import TiltCard from "@/components/TiltCard";

const tools = [
  {
    title: "Selenium WebDriver",
    icon: "🟢",
    level: 90,
    items: [
      "Web Automation",
      "Cross Browser Testing",
      "XPath & CSS",
      "Explicit Waits",
      "Page Object Model",
    ],
  },
  {
    title: "Java",
    icon: "☕",
    level: 80,
    items: [
      "OOP Concepts",
      "Collections",
      "Exception Handling",
      "Loops & Conditions",
      "File Handling",
    ],
  },
  {
    title: "TestNG",
    icon: "⚡",
    level: 85,
    items: [
      "Assertions",
      "Annotations",
      "Groups",
      "Reports",
      "Parallel Execution",
    ],
  },
  {
    title: "SQL",
    icon: "🗄️",
    level: 75,
    items: [
      "SELECT",
      "JOIN",
      "GROUP BY",
      "Data Validation",
      "Database Testing",
    ],
  },
  {
    title: "Jira",
    icon: "📋",
    level: 85,
    items: [
      "Bug Tracking",
      "Sprint Planning",
      "Agile Workflow",
      "Story Management",
      "Defect Reports",
    ],
  },
  {
    title: "Git",
    icon: "🌿",
    level: 70,
    items: ["Clone", "Branch", "Commit", "Merge", "Pull Request"],
  },
];

export default function QAToolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
          QA TOOLKIT
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          My Automation
          <span className="text-accent"> Tech Stack</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-fg-muted">
          Technologies I use daily for automation testing, regression testing,
          defect tracking and database validation.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => (
          <TiltCard
            key={tool.title}
            className="godmode-card rounded-3xl border border-border bg-surface p-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{tool.icon}</span>

                <h3 className="text-xl font-semibold">{tool.title}</h3>
              </div>

              <span className="font-mono text-xs text-accent">
                {tool.level}%
              </span>
            </div>

            {/* Progress */}
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-accent transition-all duration-700"
                style={{
                  width: `${tool.level}%`,
                }}
              />
            </div>

            <div className="mt-6 space-y-3">
              {tool.items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent" />

                  <span className="text-sm text-fg-muted">{item}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-surface p-10 text-center">
        <p className="font-mono uppercase tracking-[0.3em] text-accent">
          CURRENTLY LEARNING
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["Playwright", "Docker", "CI/CD", "GitHub Actions"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-6 py-3 transition hover:border-accent hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
