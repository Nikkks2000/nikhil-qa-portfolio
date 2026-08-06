"use client";

const pipeline = [
  { step: "Git Push", status: "DONE" },
  { step: "GitHub Actions", status: "RUNNING" },
  { step: "Selenium Suite", status: "PASS" },
  { step: "Regression", status: "PASS" },
  { step: "Report Upload", status: "SUCCESS" },
];

const browsers = [
  { name: "Chrome", value: 100 },
  { name: "Edge", value: 100 },
  { name: "Firefox", value: 98 },
];

export default function QADashboard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 backdrop-blur-xl shadow-2xl">
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between border-b border-border pb-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            LIVE QA DASHBOARD
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Selenium Automation Pipeline
          </h3>
        </div>

        <div className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-500">
          ● LIVE
        </div>
      </div>

      {/* Top Stats */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="rounded-2xl bg-bg/60 p-4">
          <p className="text-xs text-fg-muted">Build</p>
          <h2 className="mt-2 text-2xl font-bold">#2456</h2>
        </div>

        <div className="rounded-2xl bg-bg/60 p-4">
          <p className="text-xs text-fg-muted">Tests</p>
          <h2 className="mt-2 text-2xl font-bold">1248</h2>
        </div>

        <div className="rounded-2xl bg-bg/60 p-4">
          <p className="text-xs text-fg-muted">Coverage</p>
          <h2 className="mt-2 text-2xl font-bold text-accent">98%</h2>
        </div>

        <div className="rounded-2xl bg-bg/60 p-4">
          <p className="text-xs text-fg-muted">Duration</p>
          <h2 className="mt-2 text-2xl font-bold">4m</h2>
        </div>
      </div>

      {/* Pipeline */}
      <div className="mt-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          Automation Flow
        </p>

        {pipeline.map((item) => (
          <div
            key={item.step}
            className="mb-3 flex items-center justify-between rounded-xl bg-bg/50 px-4 py-3"
          >
            <span>{item.step}</span>

            <span
              className={`font-mono text-xs ${
                item.status === "RUNNING" ? "text-yellow-400" : "text-green-500"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {/* Browser Coverage */}
      <div className="mt-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-muted">
          Cross Browser
        </p>

        {browsers.map((browser) => (
          <div key={browser.name} className="mb-4">
            <div className="mb-2 flex justify-between text-sm">
              <span>{browser.name}</span>
              <span>{browser.value}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-bg">
              <div
                className="h-full rounded-full bg-accent transition-all duration-700"
                style={{ width: `${browser.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-fg-muted">Latest Execution</p>

            <h3 className="mt-1 text-lg font-bold text-green-500">
              ✔ All Selenium Tests Passed
            </h3>
          </div>

          <div className="font-mono text-xs text-fg-muted">04:12 mins</div>
        </div>
      </div>
    </div>
  );
}
