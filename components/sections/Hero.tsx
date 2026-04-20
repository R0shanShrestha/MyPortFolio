"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 md:left-1/2 pointer-events-none select-none opacity-80">
        <HeroScene />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#080c10] pointer-events-none z-[1]" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-6xl w-full">
        <div className="max-w-xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/8 px-3 py-1 text-xs font-mono text-[#2dd4bf] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Roshan
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] via-[#2dd4bf]/80 to-slate-500/60">
              Shrestha
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-xl md:text-2xl font-light text-slate-400 mb-4"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-base text-slate-500 mb-10 leading-relaxed max-w-sm"
          >
            Building modern web applications and business websites focused on
            performance, usability, and clean UI.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-7 text-sm font-medium text-black transition-all hover:bg-white/85 hover:gap-3"
            >
              View Projects
              <ArrowDown size={15} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-[#1e2d3d] bg-transparent px-7 text-sm font-medium text-slate-300 transition-all hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf]"
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
