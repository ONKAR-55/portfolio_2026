import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-20">
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* Extra spacing to allow scrolling for theme changes test */}
      <div className="h-10"></div>
    </div>
  );
}
