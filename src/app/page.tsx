import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Motivation from "@/components/sections/Motivation";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Expertise />
      <Motivation />
      <Technologies />
      <Contact />
    </>
  );
}
