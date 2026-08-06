import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import QAToolkit from "@/components/QAToolkit";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import WhyHireMe from "@/components/WhyHireMe";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Spotlight from "@/components/Spotlight";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Navbar />

      <main className="flex-1">
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <TrustBar />
        </Reveal>

        <Reveal>
          <ProjectsGrid />
        </Reveal>

        <Reveal>
          <ExperienceTimeline />
        </Reveal>

        <Reveal>
          <QAToolkit />
        </Reveal>

        <Reveal>
          <WhyHireMe />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <ContactCTA />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
