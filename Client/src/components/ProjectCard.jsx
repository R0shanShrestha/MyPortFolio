import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({ img, state, title, subtitle, link }) => {
  return (
    <div className="card shadow shadow-white/25 bg-black duration-500  relative overflow-hidden min-w-[450px] max-w-[500px] rounded-xl">
      {/* Img */}
      <img
        src={img}
        alt="prd"
        className=" top-0 w-full left-0 h-full object-cover object-top brightness-80  max-h-[300px]"
      />
      {/* Product Heading */}
      <div className="p-4 flex items-center gap-4 justify-between">
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-xs font-light">{subtitle}</p>
        </div>
        <div className="z-10  ">
          {state == "live" && (
            <span className="bg-green-500 px-5 rounded-2xl py-1 font-semibold">
              live
            </span>
          )}
          {state == "maintains" && (
            <span className="bg-yellow-500 px-5 rounded-2xl py-1 font-semibold">
              Server Error
            </span>
          )}
        </div>
      </div>

      {/* View Button */}

      <div className=" rounded-2xl  overflow-hidden hover:scale-105 duration-500 scale-50 opacity-0 hover:opacity-100 shadow-md shadow-white absolute  inset-0 mx-auto my-auto z-30  w-[70%] h-[60%] flex items-center justify-center cursor-pointer">
        <img
          src={img}
          alt="prd"
          className=" top-0 w-full h-full object-cover object-top 
            "
        />
        <a
          href={link}
          className="text-white absolute w-[50px] h-[50px] flex items-center justify-center rounded-full bg-slate-800/50"
        >
          <GoArrowUpRight size={24} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
