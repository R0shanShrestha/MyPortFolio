import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { GoArrowDown } from "react-icons/go";
import gsap from "gsap";

const Home = ({ nav, homesection, totalPrj }) => {
  const { name } = homesection[0];

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scrollRef = useRef(null);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left section staggered animation
      gsap.from(leftRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // Right section image animation
      gsap.from(rightRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      // Scroll arrow bounce
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      <Navbar elm={nav} />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-16 md:mt-20 px-4 sm:px-6 md:px-10 lg:px-20 gap-6">
        {/* Left Section */}
        <section ref={leftRef} className="flex flex-col gap-6 md:gap-10 py-10">
          {/* Projects Completed */}
          <div className="text-slate-500">
            <h1 className="text-4xl text-emerald-500 sm:text-5xl md:text-6xl font-bold flex items-baseline">
              <sub className="text-2xl text-emerald-500 sm:text-3xl">+</sub> {totalPrj}
            </h1>
            <span className="secondary font-semibold mt-1 block text-sm sm:text-base">
              Projects Completed
            </span>
          </div>

          {/* Intro */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              I'm <span className="text-emerald-500">{name}</span>
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-4 pl-3 sm:pl-4 border-l-4 border-slate-300">
              Full Stack Web Developer passionate about building clean, scalable, and user-friendly web applications that deliver engaging digital experiences.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button className="w-fit px-5 py-2.5 bg-emerald-600 text-white text-sm sm:text-base font-medium rounded-lg shadow hover:bg-emerald-700 transition transform hover:scale-105">
              Let's Talk
            </button>
          </div>

          {/* Scroll down for md+ */}
          <div
            onClick={() => handleScroll("Portfolio")}
            ref={scrollRef}
            className="hidden md:flex font-medium text-slate-500 items-center gap-3 mt-6 cursor-pointer text-sm"
          >
            Scroll down <GoArrowDown />
          </div>
        </section>

        {/* Right Section */}
        <section
          ref={rightRef}
          className="flex items-center justify-center md:justify-end px-2 sm:px-4 md:px-6"
        >
          <img
            src={homesection[0].userimg[1]}
            alt="Profile"
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-full rounded-xl shadow-xl"
          />
        </section>
      </div>

      {/* Scroll down popup on small screens */}
      <div
        onClick={() => handleScroll("Portfolio")}
        ref={scrollRef}
        className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-md rounded-full px-6 py-2 flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-600 z-50"
      >
        Scroll down <GoArrowDown />
      </div>
    </div>
  );
};

export default Home;
