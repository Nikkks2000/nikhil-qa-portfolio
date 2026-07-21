import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProjectsGrid from "@/components/ProjectsGrid";
import ShopPreview from "@/components/ShopPreview";
import Testimonials from "@/components/Testimonials";
import EmailCapture from "@/components/EmailCapture";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProjectsGrid />
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <EmailCapture />
        </section>
        <Testimonials />
        <ShopPreview />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
