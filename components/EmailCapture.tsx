"use client";

import { useState } from "react";

export default function EmailCapture({
  eyebrow = "Free download",
  heading = "5 QA testing checklists, free",
  description = "A starter set pulled straight from the full checklist pack — functional, regression and API testing. Delivered to your inbox.",
  buttonLabel = "Send it free",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-surface p-6 text-center">
        <p className="font-mono text-sm text-accent">
          ✓ Check your inbox — the checklist is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
            {heading}
          </h3>
          <p className="mt-2 max-w-sm text-sm text-fg-muted">
            {description}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="focus-ring w-full rounded-xl border border-border bg-surface-2 px-4 py-3 font-mono text-sm text-fg placeholder:text-fg-muted sm:w-56"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="focus-ring shrink-0 rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : buttonLabel}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="mt-3 font-mono text-xs text-amber">
          Something went wrong — try again in a moment.
        </p>
      )}
    </div>
  );
}
