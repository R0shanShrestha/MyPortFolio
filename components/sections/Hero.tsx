"use client";

// Hero section — full-screen immersive layout
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useEffect, useState } from "react";
import Image from "next/image";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const roles = [
  "Full Stack Developer",
  "React Engineer",
  "Next.js Specialist",
  "UI Craftsman",
];

const marqueeStack = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

const socialRail = [
  { label: "GitHub", href: "https://github.com/R0shanShrestha", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/roshan-shrestha-4aa2b62b8", Icon: Linkedin },
  { label: "Email", href: "mailto:roshanstha401@gmail.com", Icon: Mail },
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col overflow-hidden pt-24 md:pt-0 md:justify-center"
    >
      {/* ─────────── BACKGROUND LAYERS ─────────── */}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e2d3d 1px, transparent 1px), linear-gradient(to bottom, #1e2d3d 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      {/* Aurora glows */}
      <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] bg-[#2dd4bf]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#080c10] pointer-events-none z-[1]" />

      {/* ─────────── VERTICAL SOCIAL RAIL (desktop) ─────────── */}
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex fixed left-6 xl:left-10 bottom-0 z-40 flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-5">
          {socialRail.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-[#2dd4bf] hover:-translate-y-1 transition-all"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
        <div className="w-px h-28 bg-gradient-to-b from-[#1e2d3d] to-transparent" />
      </motion.aside>

      {/* ─────────── MAIN CONTENT ─────────── */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center w-full">
          {/* LEFT — Text column */}
          <div className="flex flex-col">
            {/* Availability pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/8 px-3 py-1 text-xs font-mono text-[#2dd4bf] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#2dd4bf] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4bf]" />
              </span>
              Available for new projects
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-base md:text-lg text-slate-400 mb-4 font-mono"
            >
              <span className="text-[#2dd4bf]">{"<"}</span> Hi there, I&apos;m{" "}
              <span className="text-[#2dd4bf]">{"/>"}</span>
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1] mb-5 text-balance"
            >
              Roshan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-slate-400">
                Shrestha.
              </span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex items-center gap-3 mb-6 h-9"
            >
              <span className="h-px w-8 bg-[#2dd4bf]" />
              <div className="relative overflow-hidden h-8">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-xl md:text-2xl font-light text-slate-200"
                  >
                    {roles[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl text-pretty"
            >
              I design and build{" "}
              <span className="text-slate-200">end-to-end web applications</span>{" "}
              — from pixel-perfect interfaces to scalable backends. Focused on
              performance, clean architecture, and shipping products that feel
              great to use.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex h-12 items-center gap-2 rounded-md bg-[#2dd4bf] px-7 text-sm font-semibold text-[#080c10] transition-all hover:bg-[#5eead4] hover:gap-3 shadow-[0_0_40px_-10px_#2dd4bf]"
              >
                View My Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex h-12 items-center gap-2 rounded-md border border-[#1e2d3d] bg-[#0f1520]/60 backdrop-blur px-7 text-sm font-medium text-slate-300 transition-all hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] hover:bg-[#2dd4bf]/5"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#2dd4bf]" />
                Based in Nepal
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2dd4bf] font-mono">3+</span> yrs experience
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2dd4bf] font-mono">10+</span> projects shipped
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Outer decorative ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full border border-[#1e2d3d]/60 animate-[spin_40s_linear_infinite]">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="absolute w-[380px] h-[380px] rounded-full border border-[#1e2d3d]/40 animate-[spin_60s_linear_infinite_reverse]">
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2dd4bf]/70" />
            </div>

            {/* Glow */}
            <div className="absolute w-[340px] h-[340px] bg-[#2dd4bf]/20 blur-[100px] rounded-full" />

            {/* Profile card */}
            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#2dd4bf]/50 via-[#2dd4bf]/10 to-transparent rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-[320px] h-[400px] rounded-3xl overflow-hidden border border-[#1e2d3d] bg-[#0f1520] shadow-2xl">
                <Image
                  src="/assets/logo/me.png"
                  alt="Roshan Shrestha"
                  fill
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-transparent to-transparent" />
                {/* Card info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-1">
                        Developer
                      </p>
                      <p className="text-white font-semibold">Roshan Shrestha</p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-[#2dd4bf]/40 bg-[#2dd4bf]/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#2dd4bf] animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#1e2d3d] bg-[#0f1520]/90 backdrop-blur px-3 py-2 shadow-xl">
                <SiReact className="text-[#61DAFB]" size={18} />
                <span className="text-xs font-medium text-slate-300">React</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-24 -left-6 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#1e2d3d] bg-[#0f1520]/90 backdrop-blur px-3 py-2 shadow-xl">
                <SiNextdotjs className="text-white" size={18} />
                <span className="text-xs font-medium text-slate-300">Next.js</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-4 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#1e2d3d] bg-[#0f1520]/90 backdrop-blur px-3 py-2 shadow-xl">
                <SiNodedotjs className="text-[#8CC84B]" size={18} />
                <span className="text-xs font-medium text-slate-300">Node.js</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-2 left-4 z-20"
            >
              <div className="flex items-center gap-2 rounded-xl border border-[#1e2d3d] bg-[#0f1520]/90 backdrop-blur px-3 py-2 shadow-xl">
                <SiMongodb className="text-[#47A248]" size={18} />
                <span className="text-xs font-medium text-slate-300">MongoDB</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─────────── BOTTOM MARQUEE STRIP ─────────── */}
      <div className="relative z-10 mt-16 md:mt-auto border-y border-[#1e2d3d]/70 bg-[#080c10]/40 backdrop-blur-sm py-5 overflow-hidden">
        <div className="flex items-center gap-14 animate-[marquee_35s_linear_infinite] whitespace-nowrap">
          {[...marqueeStack, ...marqueeStack, ...marqueeStack].map((item, i) => {
            const Icon = item.Icon;
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center gap-3 text-slate-500"
              >
                <Icon size={18} className="text-[#2dd4bf]/70" />
                <span className="text-sm font-mono tracking-wider uppercase">
                  {item.name}
                </span>
                <span className="text-[#2dd4bf]/40">✦</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-600 hover:text-[#2dd4bf] transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
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
