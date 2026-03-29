"use client";

import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import { useState } from "react";
import { SKILLS } from "@/utils/constants";

export default function About() {
  const [scrambleKey, setScrambleKey] = useState(false);

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
    hidden: { opacity: 0, x: -50 },
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-12 cursor-pointer text-center text-magenta"
          onClick={() => setScrambleKey(!scrambleKey)}
        >
          <TextScramble text="ABOUT ME" delay={1000} />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-magenta">
                Background
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Vipul Bhardwaj, a passionate Full Stack Developer and Competitive Coder from India. 
                Currently working at Couchbase as a Software Develope 2, focusing on infrastrcture development 
                and enhancement leveraging AI having extensive experience in API development and end to end 
                development and CI/CD automation, delivering strong results in high-pressure environments. 
                I have a deep interest in optimization, distributed systems, and cloud infrastructure. 
                I specialize in building scalable, performant web applications, backend facing infrastructures 
                in GoLang and Python. My competitive coding journey has honed my problem-solving skills and 
                algorithmic thinking, which I apply to my development work to create efficient and innovative 
                solutions. Although I hate Dynamic Programming questions in interviews.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-magenta">
                Skills & Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="glass-card px-3 py-1 rounded-lg text-sm border border-magenta/50"
                    whileHover={{ scale: 1.1, borderColor: "rgb(230, 126, 255)" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-magenta">
                Current Focus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently exploring advanced optimization techniques, distributed systems design, 
                and innovative implementations of APIs. My competitive coding journey keeps me sharp 
                with algorithmic problem-solving. I am also deeply interested in the intersection 
                of AI and software development, exploring how AI can enhance development workflows, 
                optimize performance, and drive innovation in web applications and infrastructure.
                I incorporate the same in the projects I work on as well, leveraging AI context enhancements 
                and efficient prompting. I always use these techniques in my in-house tool projects, which 
                are used team-wide. Currently I am working on Sync Gateway which is a critical component 
                used to link Couchbase Server to Couchbase Lite (mobile) database and making sure the 
                data stays in sync across all the nodes involved in a single cluster. This makes my data 
                consistency and reliability concepts sharp as they're a top priority.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-magenta">
                Interests
              </h3>
              <p className="text-gray-300">
                Gaming • Web Development • Competitive Programming • Machine Learning • Open Source • AI • Distributed Systems • Cloud Computing • Optimization • Blogging • Hands-on-learning • Self projects • Infra development • Performance Tuning
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
