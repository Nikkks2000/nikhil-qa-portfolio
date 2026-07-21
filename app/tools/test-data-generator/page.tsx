import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import TestDataGenerator from "@/components/TestDataGenerator";

export const metadata: Metadata = {
  title: "Free Test Data Generator | Nikhil Patil",
  description:
    "Generate sample user records and edge-case strings for QA testing — free, in your browser, no signup.",
};

export default function ToolPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Free tool
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Test Data Generator
            </h1>
            <p className="mt-4 max-w-xl text-fg-muted">
              Realistic-looking sample records and common edge-case strings
              for testing forms and APIs. Runs entirely in your browser —
              nothing is sent anywhere.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-6 py-16">
          <TestDataGenerator />
        </section>
      </main>
      <CtaBanner
        heading="Want the full checklist that goes with this?"
        subtext="The QA Testing Checklist Pack covers exactly where to use data like this."
        href="/shop"
        label="See the checklist pack →"
      />
      <Footer />
    </>
  );
}
