import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}
