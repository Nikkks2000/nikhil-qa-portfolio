import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
              NIKHIL PATIL
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold">
              Software Test Engineer
            </h2>

            <p className="mt-4 max-w-md leading-7 text-fg-muted">
              Passionate about building reliable automation frameworks,
              improving software quality and delivering bug-free user
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resume.pdf"
                className="godmode-btn rounded-xl bg-accent px-5 py-3 font-medium text-bg"
              >
                Resume
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-border px-5 py-3 transition hover:border-accent hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-5">
            <Link
              href="mailto:nikhilpatil2503@gmail.com"
              className="godmode-card rounded-2xl border border-border bg-surface-2 p-5 transition hover:border-accent"
            >
              📧 nikhilpatil2503@gmail.com
            </Link>

            <Link
              href="https://github.com/Nikkks2000"
              target="_blank"
              className="godmode-card rounded-2xl border border-border bg-surface-2 p-5 transition hover:border-accent"
            >
              💻 GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/nikhil-patil-236691265"
              target="_blank"
              className="godmode-card rounded-2xl border border-border bg-surface-2 p-5 transition hover:border-accent"
            >
              🔗 LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-fg-muted">
          © {new Date().getFullYear()} Nikhil Patil • Built with Next.js &
          Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
