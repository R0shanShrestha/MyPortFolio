import React from "react";
import SkillBlock from "./SkillBlock";
import { skills } from "../constant";
import Showcase from "./Showcase";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="w-full py-16 px-4 sm:px-10 lg:px-20 bg-gray-50"
    >
      {/* Section Title */}
      <div className="flex justify-center h-10 font-bold mb-12">
        <Showcase text="Skills" color="bg-emerald-600" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ icon: Icon, skillName }) => (
          <div
            key={skillName}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2">{<Icon />}</div>
            <span className="font-semibold text-sm text-gray-700">
              {skillName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
