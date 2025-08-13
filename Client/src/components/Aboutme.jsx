import React from "react";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router";
import Showcase from "./Showcase";

const Aboutme = ({ data }) => {
  const { image, description } = data[0];
  const { para2, para3, para4 } = description[0];

  return (
    <div
      id="About Me"
      className="h-auto min-h-screen w-full pt-20 gap-10 md:gap-20 flex flex-col md:flex-row justify-evenly px-4 md:px-10"
    >
      {/* Left Section - Image */}
      <section className="p-2 flex flex-col items-center md:items-start flex-1">
        <div className="flex text-sm h-10 gap-5">
          <Showcase text="About me" color="bg-zinc-900" />
        </div>
        <div className="mt-6 md:mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-[500px] overflow-hidden rounded-xl shadow-xl">
          <img
            src={image}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Optional scroll prompt for mobile */}
        {/* <div className="mt-10 font-medium flex items-center gap-3">
          Scroll down <GoArrowDown />
        </div> */}
      </section>

      {/* Right Section - Text */}
      <section className="flex-1 w-full max-w-2xl pt-10 md:pt-20 px-2 md:px-6 flex flex-col gap-8 md:gap-12 font-medium">
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          <b>I’m Roshan Shrestha</b>, a passionate Full Stack Web Developer
          dedicated to crafting clean, scalable, and user-friendly web
          applications that bring ideas to life.
        </p>
        <p className="font-normal text-slate-500 text-base md:text-lg">
          {para2}
        </p>
        <p className="font-normal text-slate-500 text-base md:text-lg">
          {para3}
        </p>
        <p className="font-normal text-slate-500 text-base md:text-lg">
          {para4}
        </p>

        {/* Resume Download */}
        <Link
          to="/resume.pdf"
          download
          className="hover:text-blue-500 hover:font-bold hover:text-base text-sm md:text-base duration-300"
        >
          [ View Resume ]
        </Link>
      </section>
    </div>
  );
};

export default Aboutme;
