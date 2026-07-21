import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Terms & Conditions | Nikhil Patil" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="21 July 2026">
      <p>
        [PLACEHOLDER — replace with your legal business name] (&quot;we&quot;,
        &quot;us&quot;) operates this website. By purchasing or using any
        product on this site, you agree to these terms.
      </p>
      <h2>Products</h2>
      <p>
        Products sold here are digital downloads (templates, checklists,
        scripts). No physical goods are shipped. Access is granted
        immediately after successful payment.
      </p>
      <h2>License</h2>
      <p>
        Purchasing a product grants you a personal, non-transferable license
        to use it for your own or client work. You may not resell,
        redistribute, or republish the files as your own product.
      </p>
      <h2>Payments</h2>
      <p>
        All payments are processed securely through Razorpay. We do not
        store your card or banking details on our servers.
      </p>
      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the
        site after changes means you accept the updated terms.
      </p>
      <p className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs">
        This is a starter template, not legal advice. Have it reviewed
        against your actual business setup (proprietorship/LLP, GST status)
        before going live, and check Razorpay&apos;s required format for
        merchant activation.
      </p>
    </LegalLayout>
  );
}
