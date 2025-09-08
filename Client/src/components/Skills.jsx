import React, { useEffect, useRef } from "react";
import SkillBlock from "./SkillBlock";
import { skills } from "../constant";
import Showcase from "./Showcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillRefs = useRef([]);
  skillRefs.current = [];

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      id="Skills"
      className="w-full py-16 px-4 sm:px-10 lg:px-20 bg-gray-50"
    >
      <div className="flex justify-center h-10 font-bold mb-12">
        <Showcase text="Skills" color="bg-emerald-600" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ icon: Icon, skillName }) => (
          <div
            key={skillName}
            ref={addToRefs}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2 text-emerald-500">{<Icon />}</div>
            <span className="font-semibold text-sm text-gray-700">{skillName}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
