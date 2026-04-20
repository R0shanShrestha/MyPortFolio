"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

const socialLinks = [
  {
    label: "roshanstha401@gmail.com",
    href: "mailto:roshanstha401@gmail.com",
    Icon: Mail,
  },
  {
    label: "github.com/R0shanShrestha",
    href: "https://github.com/R0shanShrestha",
    Icon: SiGithub,
  },
  {
    label: "linkedin.com/in/roshan-shrestha-4aa2b62b8",
    href: "https://linkedin.com/in/roshan-shrestha-4aa2b62b8",
    Icon: Linkedin,
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  function onSubmit() {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1500);
  }

  return (
    <section
      id="contact"
      className="py-28 md:py-40 px-6 md:px-12 border-t border-[#1e2d3d]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left */}
          <div>
            <p className="text-xs font-mono text-[#2dd4bf] tracking-widest uppercase mb-5">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-12">
              I&apos;m currently open to new projects. Whether you have a specific
              idea or just want to chat, feel free to reach out.
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#2dd4bf] transition-colors group w-fit"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1e2d3d] flex items-center justify-center group-hover:border-[#2dd4bf]/30 group-hover:bg-[#2dd4bf]/5 transition-all">
                    <Icon size={16} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-[#1e2d3d] bg-[#0f1520] p-8">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="w-14 h-14 rounded-full bg-[#2dd4bf]/15 flex items-center justify-center text-[#2dd4bf]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Message sent</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-2 px-5 h-9 text-sm rounded-md border border-[#1e2d3d] text-slate-400 hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="text-xs font-mono tracking-wider text-slate-500 uppercase block mb-2">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full h-10 px-3 rounded-md border border-[#1e2d3d] bg-[#080c10] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#2dd4bf]/40 transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-mono tracking-wider text-slate-500 uppercase block mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-10 px-3 rounded-md border border-[#1e2d3d] bg-[#080c10] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#2dd4bf]/40 transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-mono tracking-wider text-slate-500 uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-3 py-2.5 rounded-md border border-[#1e2d3d] bg-[#080c10] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#2dd4bf]/40 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-md bg-white text-black text-sm font-medium transition-all hover:bg-white/85 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
