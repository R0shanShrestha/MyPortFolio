import React from "react";
import { FaHtml5 } from "react-icons/fa";
import SkillBlock from "./SkillBlock";
import { skills } from "../constant";
import Marquee from "react-fast-marquee";
import Showcase from "./Showcase";

const Skills = () => {
  return (
    <div className="w-full  flex justify-evenly my-4  px-10  p-2 gap-5 flex-col overflow-hidden">
      <div className="h-10 flex mb-10">
        <Showcase text={"Skills"} color={"bg-gray-400"} />
      </div>
      <Marquee>
        {skills.map(({ icon: Icon, skillName }) => (
          <SkillBlock key={skillName} icon={<Icon />} skillname={skillName} />
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
