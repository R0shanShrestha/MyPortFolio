"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 md:px-12 border-y border-[#1e2d3d]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-10"
        >
          Tech Stack
        </motion.p>

        <div className="flex flex-wrap gap-4 md:gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group flex items-center gap-3 rounded-xl border border-[#1e2d3d] bg-[#0f1520] px-5 py-4 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/5 cursor-default"
              >
                <Icon
                  className="w-5 h-5 transition-all duration-300"
                  style={{ color: skill.color }}
                />
                <span className="font-medium text-sm text-slate-400 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
