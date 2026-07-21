import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Privacy Policy | Nikhil Patil" };

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="21 July 2026">
      <p>
        This policy explains what data is collected when you use this site
        and why.
      </p>
      <h2>What we collect</h2>
      <p>
        Name and email address when you make a purchase or contact us;
        payment details are collected and processed directly by Razorpay,
        not stored by us. Basic analytics (pages visited, approximate
        location, device type) via Google Analytics and Microsoft Clarity.
      </p>
      <h2>Why we collect it</h2>
      <p>
        To deliver purchased products, respond to support requests, and
        understand which parts of the site are useful so we can improve it.
      </p>
      <h2>Third parties</h2>
      <p>
        Razorpay (payments), Google Analytics and Microsoft Clarity
        (analytics). These services may process data outside India as part
        of their own infrastructure.
      </p>
      <h2>Your rights</h2>
      <p>
        You can request a copy of your data or ask us to delete it by
        emailing the contact address on this site.
      </p>
      <p className="mt-8 rounded-xl border border-border bg-surface p-4 text-xs">
        This is a starter template, not legal advice — review before
        launch, especially if you plan to collect data beyond what&apos;s
        listed here.
      </p>
    </LegalLayout>
  );
}
