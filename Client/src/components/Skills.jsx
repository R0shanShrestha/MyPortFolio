import React, { useEffect, useRef } from "react";
import { SKill } from "../constant";
import Showcase from "./Showcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <section id="Skills" className="w-full py-16 px-4 sm:px-10 lg:px-20 pt-30">
      <div className="flex justify-center h-10 font-bold mb-12">
        <h1 className="primaryColor font-bold text-3xl lg:text-2xl">
          {"<"} Skills {">"}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKill.map(({ icon: Icon, skillName }) => (
          <div
            key={skillName}
            className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2 text-emerald-500">
              <Icon />
            </div>
            <span className="font-semibold text-sm text-white">
              {skillName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
