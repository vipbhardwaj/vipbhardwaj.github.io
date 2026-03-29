"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TextScramble from "./TextScramble";
import { SOCIAL_LINKS } from "@/utils/constants";

export default function Contact() {
  const [scrambleKey, setScrambleKey] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-12 text-center text-magenta cursor-pointer"
          onClick={() => setScrambleKey(!scrambleKey)}
        >
          <TextScramble text="GET IN TOUCH" delay={2000} />
        </motion.h2>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {SOCIAL_LINKS.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              onHoverStart={() => setHoveredLink(idx)}
              onHoverEnd={() => setHoveredLink(null)}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center hover:border-magenta group"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(230, 126, 255, 0.3)",
              }}
            >
              <span className="text-4xl mb-2 group-hover:scale-125 transition-transform">
                {link.icon}
              </span>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-magenta transition-colors">
                {link.label}
              </span>

              {/* Magnetic effect overlay */}
              {hoveredLink === idx && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-magenta"
                  layoutId={`hover-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          className="glass-card p-8 rounded-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-magenta mb-6">Send me a message</h3>

          <form className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-dark/50 border border-magenta/30 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-dark/50 border border-magenta/30 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none transition-colors"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-dark/50 border border-magenta/30 rounded-lg text-white placeholder-gray-500 focus:border-magenta focus:outline-none transition-colors resize-none"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="glass-card px-6 py-3 text-magenta font-bold hover:border-magenta hover:text-pink w-full"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(230, 126, 255, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © 2025 Vipul Bhardwaj. Built with React, TypeScript & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
