"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1 from "@/components/Home/Section1/Section1";
import Counter from "@/components/Home/Counter/Counter";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Section1 />
      <Counter />
      <div className="h-screen"></div>
    </>
  );
}
