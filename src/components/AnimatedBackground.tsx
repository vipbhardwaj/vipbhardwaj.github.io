"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks";
import { useEffect, useState } from "react";

interface ScrollState {
  percentage: number;
}

export default function AnimatedBackground() {
  const mousePosition = useMousePosition();
  const [scrollState, setScrollState] = useState<ScrollState>({ percentage: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      setScrollState({
        percentage: Math.min(percentage, 100),
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-dark">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-dark" />

      {/* Primary moving orb - left side */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150 }}
        style={{
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, rgba(168, 85, 247, ${0.3 + scrollState.percentage / 300}), rgba(168, 85, 247, 0))`,
        }}
      />

      {/* Secondary moving orb - right side */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 40,
          y: -mousePosition.y * 40,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150 }}
        style={{
          bottom: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
          background: `radial-gradient(circle, rgba(236, 72, 153, ${0.2 + scrollState.percentage / 400}), rgba(236, 72, 153, 0))`,
        }}
      />

      {/* Accent orb - center */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          scale: 1 + scrollState.percentage / 200,
        }}
        style={{
          top: "45%",
          right: "15%",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, rgba(100, 200, 255, ${0.15 + scrollState.percentage / 500}), rgba(100, 200, 255, 0))`,
        }}
      />

      {/* Grid overlay - becomes more visible on scroll */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(230, 126, 255, .04) 25%, rgba(230, 126, 255, .04) 26%, transparent 27%, transparent 74%, rgba(230, 126, 255, .04) 75%, rgba(230, 126, 255, .04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(230, 126, 255, .04) 25%, rgba(230, 126, 255, .04) 26%, transparent 27%, transparent 74%, rgba(230, 126, 255, .04) 75%, rgba(230, 126, 255, .04) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
          opacity: 0.05 + scrollState.percentage / 2000,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(11, 13, 27, 0.6) 100%)",
          opacity: 0.5,
        }}
      />

      {/* Bottom progress glow */}
      <motion.div
        className="absolute bottom-0 left-0 h-3"
        animate={{
          width: `${scrollState.percentage}%`,
        }}
        transition={{ duration: 0.1 }}
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%,
            rgba(168, 85, 247, 1) 20%,
            rgba(236, 72, 153, 1) 50%,
            rgba(239, 68, 68, 1) 80%,
            transparent 100%)`,
          boxShadow: `0 -5px 40px rgba(230, 126, 255, ${scrollState.percentage / 50})`,
        }}
      />
    </div>
  );
}
