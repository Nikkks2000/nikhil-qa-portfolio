import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Nikhil Patil",
  description: "Notes on QA, testing tools, and building in public.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Blog
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Notes on QA & building in public
          </h1>
          <div className="mt-10 divide-y divide-border border-t border-border">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="focus-ring group block py-6"
              >
                <p className="font-mono text-xs text-fg-muted">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime} read
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
