"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Smoothness factor
      gestureOrientation: "vertical", // Ensure scrolling works on mobile
      wheelMultiplier: 1, // Adjust scrolling speed
      touchMultiplier: 2, // Make touch scrolling more responsive
    });

    const rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId); // Cleanup animation frame
      lenis.destroy(); // Properly clean up Lenis instance
    };
  }, []);

  return null;
};

export default SmoothScroll;
