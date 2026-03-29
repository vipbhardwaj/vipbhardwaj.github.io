"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TextScramble from "./TextScramble";
import { TIMELINE_EVENTS } from "@/utils/constants";

export default function Timeline() {
  const [activeDots, setActiveDots] = useState<boolean[]>(
    new Array(TIMELINE_EVENTS.length).fill(false)
  );
  const [scrambleKey, setScrambleKey] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, idx) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setActiveDots((prev) => {
            const newDots = [...prev];
            newDots[idx] = entry.isIntersecting;
            return newDots;
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-magenta cursor-pointer"
          onClick={() => setScrambleKey(!scrambleKey)}
        >
          <TextScramble text="EXPERIENCE" delay={1500} />
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-magenta to-pink-500 -translate-x-1/2" />

          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                ref={(el) => {
                  refs.current[idx] = el;
                }}
                variants={itemVariants}
                className={`flex ${event.side === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="glass-card p-6 rounded-xl relative"
                    whileHover={{ y: -5, boxShadow: "0 0 20px rgba(230, 126, 255, 0.3)" }}
                  >
                    <h3 className="text-xl font-bold text-magenta mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{event.description}</p>
                    <p className="text-xs text-gray-400">{event.date}</p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="relative flex justify-center w-full md:w-1/2">
                  <motion.div
                    className={`timeline-dot ${activeDots[idx] ? "active" : ""}`}
                    animate={activeDots[idx] ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  {/* Glow effect when active */}
                  {activeDots[idx] && (
                    <motion.div
                      className="absolute w-8 h-8 border-2 border-magenta rounded-full"
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
