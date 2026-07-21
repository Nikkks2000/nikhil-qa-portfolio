import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop — QA Testing Templates & Tools | Nikhil Patil",
  description:
    "Buy testing checklists, API testing kits and QA automation resources built from real production testing work.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Shop
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Testing tools, built by a QA engineer
            </h1>
            <p className="mt-4 max-w-xl text-fg-muted">
              Everything here comes from templates and scripts I use in my
              own testing work. Instant download after payment, secure
              checkout via Razorpay.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <ShopClient />
        </section>
      </main>
      <Footer />
    </>
  );
}
