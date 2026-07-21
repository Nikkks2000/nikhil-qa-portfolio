import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-base font-semibold">Nikhil Patil</p>
            <p className="mt-2 max-w-xs text-sm text-fg-muted">
              QA engineer building testing tools and templates for teams that
              shiQA engineer who builds the tools testers actually reach for —
              checklists, automation kits and interview prep resources made
              from real production testing work.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#work" className="focus-ring hover:text-accent">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/shop" className="focus-ring hover:text-accent">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="focus-ring hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools/test-data-generator" className="focus-ring hover:text-accent">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/premium" className="focus-ring hover:text-accent">
                  Premium
                </Link>
              </li>
              <li>
                <Link href="/faq" className="focus-ring hover:text-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-ring hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-muted">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/legal/terms" className="focus-ring hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="focus-ring hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="focus-ring hover:text-accent">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nikhil Patil. All rights reserved.</p>
          <p className="font-mono">Made in Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
