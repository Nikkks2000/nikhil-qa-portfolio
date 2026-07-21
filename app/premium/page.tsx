import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Premium (Coming Soon) | Nikhil Patil",
  description: "A growing library of QA resources — coming soon.",
};

export default function PremiumPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Coming soon
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A membership for QA resources
          </h1>
          <p className="mt-4 text-fg-muted">
            The plan: one place with every checklist, script and template as
            they're built, instead of buying each one separately. Not live
            yet — it&apos;ll only launch once there's enough in the library
            to make it worth it.
          </p>
        </section>
        <section className="mx-auto max-w-2xl px-6 pb-24">
          <EmailCapture
            eyebrow="Join the waitlist"
            heading="Get notified at launch"
            description="No spam — one email when the membership opens, plus early access before it's public."
            buttonLabel="Join waitlist"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
