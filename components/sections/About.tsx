"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "Full", label: "Stack capability" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-5">
            About
          </p>
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 md:gap-24 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                I build web apps and
                <br />
                business websites
                <br />
                <span className="text-slate-500">that actually work.</span>
              </h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>
                  I&apos;m a full stack developer building modern web applications and
                  business websites focused on performance, usability, and clean
                  UI. Every project gets the same level of precision — from
                  architecture to the last pixel.
                </p>
                <p>
                  My stack is React and Next.js on the front, Node.js and MongoDB
                  on the back. I enjoy the whole pipeline: ideation, design system
                  setup, API design, deployment. No hand-offs needed.
                </p>
                <p>
                  Whether it&apos;s a client-facing business site or a data-heavy web
                  app, I focus on shipping clean, maintainable code that solves
                  the real problem.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#1e2d3d] bg-[#0f1520] p-6 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold text-[#2dd4bf] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
