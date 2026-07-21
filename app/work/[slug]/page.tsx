import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Nikhil Patil`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-fg-muted">
                {project.id}
              </span>
              <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[11px] text-accent">
                PASS
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 font-mono text-sm text-fg-muted">
              {project.tag}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded bg-surface-2 px-2 py-1 font-mono text-[11px] text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Problem
              </p>
              <p className="mt-3 leading-relaxed text-fg-muted">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Solution
              </p>
              <p className="mt-3 leading-relaxed text-fg-muted">
                {project.solution}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Result
              </p>
              <p className="mt-3 leading-relaxed text-fg-muted">
                {project.result}
              </p>
            </div>
          </div>
        </section>
      </main>
      <CtaBanner
        heading="Want testing done this thoroughly on your project?"
        subtext="Get in touch, or grab the templates I use myself."
        href="/contact"
        label="Get in touch →"
      />
      <Footer />
    </>
  );
}
