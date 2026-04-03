"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import LegacyDesignContent from "@/components/LegacyDesignContent";

function CurrentDesign() {
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



export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLegacy, setIsLegacy] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for design preference
    const savedDesign = localStorage.getItem("portfolio-design");
    setIsLegacy(savedDesign === "legacy");

    // Listen for design changes from DesignToggle
    const handleDesignChange = () => {
      const newDesign = localStorage.getItem("portfolio-design");
      setIsLegacy(newDesign === "legacy");
    };

    window.addEventListener("portfolio-design-changed", handleDesignChange);
    return () => window.removeEventListener("portfolio-design-changed", handleDesignChange);
  }, []);

  // Show current design while hydrating to prevent mismatch
  if (!mounted) {
    return <CurrentDesign />;
  }

  return (
    <motion.div
      key={isLegacy ? "legacy" : "current"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {isLegacy ? <LegacyDesignContent /> : <CurrentDesign />}
    </motion.div>
  );
}
