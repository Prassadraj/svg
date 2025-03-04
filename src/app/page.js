"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "@/components/Home/Section1/Section1";
import Counter from "@/components/Home/Counter/Counter";
import About from "@/components/Home/About/About";
import Service from "@/components/Home/Service/Service";
import Gallery from "@/components/Home/Gallery/Gallery";
import Events from "@/components/Home/Events/Events";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Section1 />
      <Counter />
      <About />
      <Service />
      <Gallery />
      <Events />
    </>
  );
}
