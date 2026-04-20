"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const offsets = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: Infinity };
        return { id: link.id, top: el.getBoundingClientRect().top };
      });
      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c10]/90 backdrop-blur-md border-b border-[#1e2d3d] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-6xl">
        <button
          onClick={() => handleNav("hero")}
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          RS<span className="text-[#2dd4bf]">.</span>
        </button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium transition-colors hover:text-[#2dd4bf] relative pb-0.5 ${
                active === link.id ? "text-white" : "text-slate-400"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#2dd4bf] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#1e2d3d] bg-[#080c10]/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-5 gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-base font-medium transition-colors hover:text-[#2dd4bf] ${
                  active === link.id ? "text-[#2dd4bf]" : "text-slate-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
