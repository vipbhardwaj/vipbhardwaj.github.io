"use client";

import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import { useState } from "react";

export default function Hero() {
  const [isScrambling, setIsScrambling] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-dark to-pink-900/20" />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          style={{ bottom: "10%", right: "5%" }}
        />
      </div>

      <motion.div
        className="flex items-center justify-center z-10 px-4 max-w-6xl gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Text content */}
        <motion.div className="text-center md:text-left flex-1">
          {/* Main title with scramble effect */}
          <motion.div
            variants={itemVariants}
            className="cursor-pointer mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta via-pink to-purple-500 hover:from-purple-500 hover:via-magenta hover:to-pink transition-all duration-300">
              <TextScramble text="VIPUL BHARDWAJ" delay={0} />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-light text-gray-300">
              Full Stack Developer & Competitive Coder
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Full Stack • Cloud Infrastructure • Go • Python • AWS
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-12 mx-auto md:mx-0 bg-gradient-to-b from-magenta to-transparent rounded-full" />
            <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex flex-1 justify-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-magenta/50 shadow-2xl shadow-magenta/20">
              <img
                src="/myImg1.jpeg"
                alt="Vipul Bhardwaj"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-magenta" />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-pink" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-magenta/50 rounded-full"
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
