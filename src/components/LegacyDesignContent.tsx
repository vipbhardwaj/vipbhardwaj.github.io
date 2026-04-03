"use client";

import { useState } from "react";
import { PROJECTS, TIMELINE_EVENTS, SOCIAL_LINKS } from "@/utils/constants";
import type { Project } from "@/types";

export default function LegacyDesignContent() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getSectionContent = () => {
    return expandedSections.includes("projects")
      ? "auto"
      : "0px";
  };

  return (
    <div className="legacy-design bg-[#0b0d1b] text-black min-h-screen overflow-x-hidden">
      {/* Intro Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/myImg1.jpeg"
            alt="Vipul Bhardwaj"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-purple-500"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Hi. I am{" "}
            <span className="name cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              VIPUL BHARDWAJ
            </span>
            .
          </h1>
          <p className="text-2xl text-gray-300 space-y-4">
            <div>
              A habitual <span className="enlarge text-purple-400">Front-End Developer</span>,
            </div>
            <div>
              <span className="enlarge text-pink-400">Competitive Coder</span>
            </div>
            <div>
              and an <span className="enlarge text-cyan-400">Eager Learner</span>.
            </div>
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Projects Section */}
        <div className="dropdown-container border-2 border-purple-500/30 rounded-lg mb-6 bg-dark/50 backdrop-blur-sm overflow-hidden">
          <button
            onClick={() => toggleSection("projects")}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-500/10 transition-colors"
          >
            <h2 className="text-3xl font-bold text-white">PROJECTS</h2>
            <span className="text-2xl text-purple-400">
              {expandedSections.includes("projects") ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300`}
            style={{
              maxHeight: expandedSections.includes("projects") ? "auto" : "0",
            }}
          >
            <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-6 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
                >
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-purple-500/30 text-purple-200 rounded border border-purple-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="dropdown-container border-2 border-purple-500/30 rounded-lg mb-6 bg-dark/50 backdrop-blur-sm overflow-hidden">
          <button
            onClick={() => toggleSection("about")}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-500/10 transition-colors"
          >
            <h2 className="text-3xl font-bold text-white">ABOUT</h2>
            <span className="text-2xl text-purple-400">
              {expandedSections.includes("about") ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: expandedSections.includes("about") ? "auto" : "0",
            }}
          >
            <div className="px-6 py-6 text-gray-300 leading-relaxed">
              <p>
                Full-stack developer with a passion for building elegant user interfaces and solving complex problems through code. I specialize in modern frontend technologies and have experience building scalable applications. Currently working at Couchbase on cloud platform development.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="dropdown-container border-2 border-purple-500/30 rounded-lg mb-6 bg-dark/50 backdrop-blur-sm overflow-hidden">
          <button
            onClick={() => toggleSection("experience")}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-500/10 transition-colors"
          >
            <h2 className="text-3xl font-bold text-white">EXPERIENCE</h2>
            <span className="text-2xl text-purple-400">
              {expandedSections.includes("experience") ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: expandedSections.includes("experience") ? "auto" : "0",
            }}
          >
            <div className="px-6 py-6 space-y-6">
              {TIMELINE_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="border-l-4 border-purple-500 pl-6 py-4 bg-white/5 rounded-r-lg"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2">
                    {event.description}
                  </p>
                  <p className="text-xs text-purple-400">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="dropdown-container border-2 border-purple-500/30 rounded-lg mb-6 bg-dark/50 backdrop-blur-sm overflow-hidden">
          <button
            onClick={() => toggleSection("contact")}
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-500/10 transition-colors"
          >
            <h2 className="text-3xl font-bold text-white">GET IN TOUCH</h2>
            <span className="text-2xl text-purple-400">
              {expandedSections.includes("contact") ? "−" : "+"}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: expandedSections.includes("contact") ? "auto" : "0",
            }}
          >
            <div className="px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 hover:bg-purple-500/10 rounded-lg transition-all border border-white/10 hover:border-purple-500/50"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-sm font-semibold text-gray-300 hover:text-purple-400 transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0b0d1b] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#0b0d1b] px-6 py-4 border-b border-purple-500/30 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition-colors mb-6"
                >
                  View Project →
                </a>
              )}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Screenshots</h3>
                  {selectedProject.images.map((image, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
