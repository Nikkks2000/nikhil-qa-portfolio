import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Magnetic from "@/components/Magnetic";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#toolkit", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring godmode-spin flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-bg shadow-lg shadow-accent/30">
            ✓
          </span>

          <div>
            <h1 className="font-display text-lg font-semibold">Nikhil Patil</h1>

            <p className="font-mono text-[11px] text-fg-muted">
              Software Test Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="godmode-link focus-ring text-sm text-fg-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Magnetic>
            <Link
              href="/resume.pdf"
              className="focus-ring godmode-btn rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-bg"
            >
              Resume
            </Link>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
}
