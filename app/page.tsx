import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 px-6 md:px-12 border-t border-[#1e2d3d]">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold tracking-tight">
            RS<span className="text-[#2dd4bf]">.</span>
          </p>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Roshan Shrestha. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-600 text-sm">
            Built with Next.js &amp; Tailwind CSS
          </div>
        </div>
      </footer>
    </main>
  );
}
