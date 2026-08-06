import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

        <p className="relative font-mono uppercase tracking-[0.35em] text-accent">
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h2 className="relative mt-5 font-display text-4xl font-bold sm:text-5xl">
          Let's build reliable software together.
        </h2>

        <p className="relative mx-auto mt-6 max-w-2xl text-fg-muted">
          I'm currently working as a Software Test Engineer and actively looking
          for QA Automation opportunities where I can contribute using Selenium,
          Java and modern testing practices.
        </p>

        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:nikhilpatil2503@gmail.com"
            className="godmode-btn rounded-xl bg-accent px-6 py-3 font-medium text-bg"
          >
            Email Me
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-xl border border-border px-6 py-3 hover:border-accent"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
