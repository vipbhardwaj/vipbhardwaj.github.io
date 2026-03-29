"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import TextScramble from "./TextScramble";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "@/utils/constants";
import type { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scrambleKey, setScrambleKey] = useState(false);
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (selectedIndex !== idx) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = ((e.clientY - centerY) / rect.height) * 10;
    const rotateY = ((centerX - e.clientX) / rect.width) * 10;

    setTiltRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTiltRotation({ x: 0, y: 0 });
    setSelectedIndex(null);
  };

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-magenta cursor-pointer"
          onClick={() => setScrambleKey(!scrambleKey)}
        >
          <TextScramble text="FEATURED PROJECTS" delay={500} />
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              ref={selectedIndex === idx ? cardRef : null}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
              onHoverStart={() => setSelectedIndex(idx)}
              className="group cursor-pointer perspective"
              whileHover={{ y: -10 }}
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                className="glass-card p-6 rounded-xl h-full relative"
                animate={{
                  rotateX: tiltRotation.x,
                  rotateY: tiltRotation.y,
                  z: selectedIndex === idx ? 50 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl -z-10" />

                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-magenta transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-magenta/20 text-magenta rounded-full border border-magenta/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Details
                    </motion.button>

                    {/* External link button */}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-magenta/50 hover:border-magenta text-magenta hover:bg-magenta/10 rounded-lg font-semibold transition-all duration-200 text-center"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-magenta/0 group-hover:border-magenta/50 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

