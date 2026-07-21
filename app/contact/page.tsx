import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Nikhil Patil",
  description: "Get in touch for QA services, collaboration or support.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-fg-muted">
            For QA/testing work, collaboration, or support with a purchased
            tool — reach out directly and I&apos;ll get back within a day.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                Email
              </p>
              <a
                href="mailto:nikhilpatil2503@gmail.com"
                className="focus-ring mt-2 block font-display text-lg hover:text-accent"
              >
                nikhilpatil2503@gmail.com
              </a>
              <p className="mt-1 text-xs text-fg-muted">
                Business email — replace with your registered address
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                LinkedIn
              </p>
              <a
                href="#"
                className="focus-ring mt-2 block font-display text-lg hover:text-accent"
              >
                /in/nikhilpatil
              </a>
              <p className="mt-1 text-xs text-fg-muted">
                Fastest way to reach me for work enquiries
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface-2 p-6 text-sm text-fg-muted">
            Product support: include your order ID (from the payment
            confirmation email) so I can look it up faster.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
