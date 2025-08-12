import React from "react";
import { GoArrowDown, GoCircle, GoDotFill } from "react-icons/go";
import { Link } from "react-router";
import Showcase from "./Showcase";

const Aboutme = ({ data }) => {
  const { image, description } = data[0];
  const { para1, para2, para3, para4 } = description[0];

  return (
    <div
      id="About Me"
      className="h-auto md:h-screen w-full pt-20 gap-10 md:gap-20 flex flex-col md:flex-row justify-evenly px-4 md:px-0"
    >
      <section className="p-2 flex flex-col items-center md:items-start">
        <div className="flex text-sm h-10 gap-5">
          <Showcase text={"About me"} color={"bg-zinc-900"} />
        </div>
        <div className="mt-6 md:mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md 2xl:w-[500px] xl:w-[400px] 2xl:h-[500px] xl:h-[400px] overflow-hidden rounded-xl shadow-xl">
          <img src={image} alt="not found" className="h-full w-full object-cover" />
        </div>
        {/* Optional: You can uncomment this for a scroll prompt on mobile */}
        {/* <div className="mt-10 font-medium flex items-center gap-3">
          Scroll down <GoArrowDown />
        </div> */}
      </section>
      <section className="w-full md:w-[600px] 2xl:text-xl xl:text-sm pt-10 md:pt-20 px-4 md:px-10 flex flex-col gap-8 md:gap-20 font-medium overflow-hidden">
        <p className="text-slate-600 text-lg md:text-xl">
          <b>I’m Roshan Shrestha</b>, a full stack developer passionate Software Engineer dedicated to crafting clean, efficient, and user-friendly web applications that bring ideas to life.
        </p>
        <p className="font-normal text-slate-500 text-base md:text-lg">{para2}</p>
        <p className="font-normal text-slate-500 text-base md:text-lg">{para3}</p>
        <p className="font-normal text-slate-500 text-base md:text-lg">{para4}</p>
        <Link
          download={image}
          className="hover:text-blue-500 hover:font-bold hover:text-base text-sm md:text-base duration-300"
        >
          [ View Resume ]{" "}
        </Link>
      </section>
    </div>
  );
};

export default Aboutme;
