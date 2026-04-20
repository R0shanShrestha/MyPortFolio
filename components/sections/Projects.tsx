"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "tea-hub",
    number: "01",
    title: "Tea Hub",
    image: "/assets/projects/teahub.png",
    description:
      "A business website for a specialty tea retailer — clean product catalog, ordering system, and brand-forward design optimised for conversions.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://teahub-mr1r.vercel.app/",
    githubUrl: "https://github.com/R0shanShrestha/Teahub",
  },
  {
    id: "medibook",
    number: "02",
    title: "MediBook",
    image: "/assets/projects/medibook.png",
    description:
      "A full-stack appointment booking system for healthcare providers. Patients can schedule, reschedule, and manage appointments with real-time availability.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://medibook-ten.vercel.app/",
    githubUrl: "https://github.com/R0shanShrestha/medibook",
  },
  {
    id: "looksy",
    number: "03",
    title: "Looksy",
    image: "/assets/projects/looksy.png",
    description:
      "A web application for discovering and sharing style inspiration. Features curated feeds, user collections, and a responsive, image-first interface.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://looksy-8tlv.vercel.app/",
    githubUrl: "https://github.com/R0shanShrestha/looksy",
  },
  {
    id: "iphoneredesign",
    number: "04",
    title: "iPhone Redesign",
    image: "/assets/projects/iphone.png",
    description:
      "A modern redesign of the iPhone interface with enhanced usability and aesthetic appeal.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://iphoneredesign.vercel.app/",
    githubUrl: "https://github.com/R0shanShrestha/IphoneMockup",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 md:py-40 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-5">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Projects I&apos;ve built.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Visual */}
              <div className="md:col-span-7  order-2 md:order-none">
                <div className="relative aspect-[16/9] rounded-xl border border-[#1e2d3d] bg-gradient-to-br from-[#0f1520] to-[#080c10] overflow-hidden transition-all duration-500 group-hover:border-[#2dd4bf]/25">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="font-mono text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="font-bold text-2xl text-white/15 group-hover:text-white/30 transition-colors duration-500">
                      {project.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#2dd4bf]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-5 order-1 md:order-none flex flex-col gap-5">
                <p className="font-mono text-xs text-[#2dd4bf]/50">
                  {project.number}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 bg-[#111827] text-slate-400 rounded-md border border-[#1e2d3d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-[#2dd4bf] transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-[#2dd4bf] transition-colors"
                  >
                    <Github size={15} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
