"use client";

import { useMemo, useState } from "react";
import { products, coupons } from "@/lib/products";

export default function ShopClient() {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState<{ code: string; pct: number } | null>(
    null,
  );
  const [error, setError] = useState("");

  function applyCoupon(e: React.FormEvent) {
    e.preventDefault();
    const pct = coupons[code.trim().toUpperCase()];
    if (pct) {
      setApplied({ code: code.trim().toUpperCase(), pct });
      setError("");
    } else {
      setApplied(null);
      setError("That code isn't valid.");
    }
  }

  const priced = useMemo(
    () =>
      products.map((p) => ({
        ...p,
        finalPrice: applied
          ? Math.round(p.price * (1 - applied.pct / 100))
          : p.price,
      })),
    [applied],
  );

  return (
    <>
      <div className="mb-10 rounded-2xl border border-border bg-surface p-5">
        <form
          onSubmit={applyCoupon}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <label className="font-mono text-xs uppercase tracking-wider text-fg-muted sm:mr-2">
            Coupon code
          </label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. QA10"
            className="focus-ring w-full rounded-xl border border-border bg-surface-2 px-3 py-2 font-mono text-sm sm:w-40"
          />
          <button
            type="submit"
            className="focus-ring rounded-xl border border-border px-4 py-2 font-mono text-xs font-medium hover:border-accent hover:text-accent"
          >
            Apply
          </button>
          {applied && (
            <span className="font-mono text-xs text-accent">
              ✓ {applied.code} applied — {applied.pct}% off
            </span>
          )}
          {error && (
            <span className="font-mono text-xs text-amber">{error}</span>
          )}
        </form>
      </div>

      <div className="space-y-8">
        {priced.map((p) => (
          <div
            key={p.slug}
            id={p.slug}
            className={`scroll-mt-24 grid gap-8 rounded-lg border p-8 lg:grid-cols-[1.4fr_1fr] ${
              p.bundle
                ? "border-accent/50 bg-surface"
                : "border-border bg-surface"
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-2xl font-semibold">
                  {p.name}
                </h2>
                {p.bundle && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] text-accent">
                    Best value
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-sm text-fg-muted">
                {p.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {p.description}
              </p>
              <ul className="mt-6 space-y-2">
                {p.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface-2 p-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="font-mono text-3xl font-semibold">
                    ₹{p.finalPrice}
                  </p>
                  {(p.originalPrice || applied) && (
                    <p className="font-mono text-sm text-fg-muted line-through">
                      ₹{p.originalPrice ?? p.price}
                    </p>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-fg-muted">
                  One-time payment · Instant download
                </p>
              </div>
              <button
                className="focus-ring mt-6 w-full rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
                data-product={p.slug}
              >
                Buy now — ₹{p.finalPrice}
              </button>
              <p className="mt-3 text-center font-mono text-[11px] text-fg-muted">
                Secured by Razorpay
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
