import React from "react";
import { FaHtml5 } from "react-icons/fa";
import SkillBlock from "./SkillBlock";
import { skills } from "../skill";
import Marquee from "react-fast-marquee";
import Showcase from "./Showcase";

const Skills = () => {
  return (
    <div className="w-full  flex justify-evenly  p-2 gap-5 flex-col overflow-hidden">
      <Showcase text={"Skills"} />
      <Marquee>
        {skills.map(({ icon: Icon, skillName }) => (
          <SkillBlock key={skillName} icon={<Icon />} skillname={skillName} />
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
