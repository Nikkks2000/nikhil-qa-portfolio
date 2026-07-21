import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-accent text-xs text-bg">
            ✓
          </span>
          <span>Nikhil Patil</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-fg-muted sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/shop"
            className="focus-ring rounded-lg bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Get tools
          </Link>
        </div>
      </nav>
    </header>
  );
}
