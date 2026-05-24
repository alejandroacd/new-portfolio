import { GSAPProvider } from "./components/gsap-provider";
import { Navbar } from "./components/navbar";
import { HeroAbout } from "./components/hero-about";
import { ProjectsSection } from "./components/projects-section";
import { MemoriesSection } from "./components/memories-section";
import { ExperienceSection } from "./components/experience-section";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white overflow-hidden font-sans">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      <GSAPProvider>
        <Navbar />
        <HeroAbout />

        <ProjectsSection />

        <MemoriesSection />

        <ExperienceSection />

        {/* Contact */}
        <section id="contact" className="relative z-10 px-8 py-24 md:px-16">
          <div className="mx-auto max-w-2xl">
            <p className="section-label mb-4">Contact</p>
            <h2 className="mb-3 text-4xl font-black tracking-tight md:text-5xl">
              Let&apos;s build
              <br />
              <span className="gradient-text">something great.</span>
            </h2>
            <p className="mb-10 text-zinc-500">
              Or reach out directly at{" "}
              <a
                href="mailto:alejandroalicd@gmail.com"
                className="text-zinc-300 transition-colors hover:text-white"
              >
                alejandroalicd@gmail.com
              </a>
            </p>

            <ContactForm />
          </div>
        </section>

        <Footer />
      </GSAPProvider>
    </div>
  );
}
