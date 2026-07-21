import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "FAQ | Nikhil Patil",
  description: "Answers about payment, download, refunds and support.",
};

const faqs = [
  {
    q: "How do I receive my product after payment?",
    a: "Right after a successful payment, you get an instant download link on the confirmation screen and a copy sent to your email. No waiting, no manual delivery.",
  },
  {
    q: "What payment methods are supported?",
    a: "All major methods via Razorpay — UPI, debit/credit cards, netbanking and wallets. Payments are processed securely; card details never touch this site directly.",
  },
  {
    q: "Can I get a refund?",
    a: "Since these are digital products delivered instantly, refunds are handled case by case — see the Refund Policy page for the full terms. If a file is corrupted or wrong, that's on me to fix or refund.",
  },
  {
    q: "Do I get updates if the template/script is improved later?",
    a: "Yes — if a product gets a meaningful update, past buyers get the new version free. You'll be notified by email.",
  },
  {
    q: "Can I use these templates for client/commercial work?",
    a: "Yes, for your own projects or client delivery. Reselling or redistributing the files as your own product isn't allowed.",
  },
  {
    q: "I didn't receive my download email — what now?",
    a: "Check spam first. If it's still missing after 30 minutes, contact me with your order ID and I'll resend it manually.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions
          </h1>
          <div className="mt-10 divide-y divide-border border-t border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between font-display text-base font-medium">
                  {f.q}
                  <span className="ml-4 shrink-0 font-mono text-fg-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <CtaBanner
        heading="Still have questions?"
        subtext="Happy to answer anything before you buy — reach out directly."
        href="/contact"
        label="Contact me →"
      />
      <Footer />
    </>
  );
}
