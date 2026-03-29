"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const searchParams = useSearchParams();
  const isLegacy = searchParams.get("design") === "legacy";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isLegacy ? 0 : 3000);

    return () => clearTimeout(timer);
  }, [isLegacy]);

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-dark">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 border-4 border-magenta border-t-transparent rounded-full"
        />
      </div>
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
