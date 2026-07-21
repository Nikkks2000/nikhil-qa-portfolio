import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPreview() {
  return (
    <section className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Shop
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools you can use today
            </h2>
          </div>
          <Link
            href="/shop"
            className="focus-ring hidden font-mono text-sm text-fg-muted hover:text-accent sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6"
            >
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{p.tagline}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-lg font-medium text-fg">
                  ₹{p.price}
                </span>
                <Link
                  href={`/shop#${p.slug}`}
                  className="focus-ring rounded-xl border border-border px-4 py-2 font-mono text-xs font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
