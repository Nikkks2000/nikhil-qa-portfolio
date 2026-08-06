import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            CONTACT
          </p>

          <h1 className="mt-4 font-display text-5xl font-bold">
            Let's build
            <span className="text-accent"> quality software.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-fg-muted">
            I'm open to Software Testing, QA Automation and Selenium
            opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Link
            href="mailto:nikhilpatil2503@gmail.com"
            className="godmode-card rounded-3xl border border-border bg-surface p-8 transition hover:border-accent"
          >
            <p className="font-mono text-xs uppercase text-accent">Email</p>

            <h2 className="mt-3 text-2xl font-semibold">
              nikhilpatil2503@gmail.com
            </h2>
          </Link>

          <Link
            href="https://linkedin.com/in/nikhil-patil-236691265"
            target="_blank"
            className="godmode-card rounded-3xl border border-border bg-surface p-8 transition hover:border-accent"
          >
            <p className="font-mono text-xs uppercase text-accent">LinkedIn</p>

            <h2 className="mt-3 text-2xl font-semibold">Connect with me</h2>
          </Link>

          <Link
            href="https://github.com/Nikkks2000"
            target="_blank"
            className="godmode-card rounded-3xl border border-border bg-surface p-8 transition hover:border-accent"
          >
            <p className="font-mono text-xs uppercase text-accent">GitHub</p>

            <h2 className="mt-3 text-2xl font-semibold">View Projects</h2>
          </Link>

          <Link
            href="/resume.pdf"
            className="godmode-card rounded-3xl border border-border bg-accent p-8 text-bg transition hover:scale-[1.02]"
          >
            <p className="font-mono text-xs uppercase">Resume</p>

            <h2 className="mt-3 text-2xl font-semibold">Download Resume →</h2>
          </Link>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-10 text-center">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-500">
            ● Available for QA Opportunities
          </span>

          <h2 className="mt-6 text-3xl font-bold">
            Let's discuss your next project.
          </h2>

          <p className="mt-4 text-fg-muted">
            Healthcare • Banking • Selenium • API Testing • SQL • Automation
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
