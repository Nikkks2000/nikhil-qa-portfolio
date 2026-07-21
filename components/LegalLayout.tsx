import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-20">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 font-mono text-xs text-fg-muted">
            Last updated: {updated}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-fg-muted [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-fg">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
