"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function PageContent() {
  const searchParams = useSearchParams();
  const isLegacy = searchParams.get("design") === "legacy";

  if (isLegacy) {
    return (
      <iframe
        src="/_legacy.html"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        title="Legacy Design"
      />
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-dark">
      <AnimatedBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </motion.div>
    </main>
  );
}
