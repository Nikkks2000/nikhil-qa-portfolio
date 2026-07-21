import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Refund Policy | Nikhil Patil" };

export default function RefundPage() {
  return (
    <LegalLayout title="Refund Policy" updated="21 July 2026">
      <p>
        All products on this site are digital and delivered instantly, so
        refunds are handled differently from physical goods.
      </p>
      <h2>Eligible for refund</h2>
      <p>
        A corrupted or unusable file, a product that doesn&apos;t match its
        description, or a duplicate/accidental payment. Contact within 7
        days of purchase with your order ID.
      </p>
      <h2>Not eligible</h2>
      <p>
        Change of mind after download, or not reading the product
        description before buying. Since the file is delivered instantly,
        we can&apos;t offer refunds once it&apos;s been downloaded and used
        outside the above cases.
      </p>
      <h2>How refunds are processed</h2>
      <p>
        Approved refunds are issued to the original payment method via
        Razorpay within 5–7 business days.
      </p>
      <p className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs">
        This is a starter template, not legal advice — review before
        launch and align with Razorpay&apos;s policy requirements for
        merchant activation.
      </p>
    </LegalLayout>
  );
}
