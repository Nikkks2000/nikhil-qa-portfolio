"use client";

const timeline = [
  {
    year: "2023",
    title: "Software Testing Training",
    company: "VCTC, Pune",
    description:
      "Completed professional training in Manual Testing and Selenium Automation with Java, TestNG, Maven and SQL.",
    skills: ["Manual Testing", "Selenium", "Java", "SQL", "TestNG"],
  },
  {
    year: "2023 - 2024",
    title: "Software Testing Intern",
    company: "LetsGrowMore",
    description:
      "Worked on automation assignments, created test cases, executed functional testing and improved debugging skills.",
    skills: ["Automation", "Functional Testing", "Java", "Git"],
  },
  {
    year: "2025 - 2026",
    title: "Software Test Engineer",
    company: "Aurionpro Solutions",
    description:
      "Worked on Healthcare and Banking applications. Automated regression suites using Selenium WebDriver, TestNG and Maven. Performed API testing using Postman, SQL validation and collaborated with developers during Agile sprints.",
    skills: ["Selenium", "TestNG", "Maven", "Postman", "SQL", "Jira", "Agile"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mb-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
          EXPERIENCE
        </p>

        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Professional Journey
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-fg-muted">
          From learning software testing to working on real Healthcare and
          Banking automation projects using Selenium WebDriver.
        </p>
      </div>

      <div className="relative border-l-2 border-border pl-8">
        {timeline.map((item) => (
          <div key={item.year} className="relative mb-16">
            <div className="absolute -left-[43px] top-2 h-5 w-5 rounded-full border-4 border-bg bg-accent" />

            <div className="godmode-card rounded-3xl border border-border bg-surface p-8">
              <span className="font-mono text-sm text-accent">{item.year}</span>

              <h3 className="mt-3 font-display text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-1 font-semibold text-fg-muted">{item.company}</p>

              <p className="mt-5 leading-7 text-fg-muted">{item.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs transition hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
