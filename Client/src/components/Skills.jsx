import React from "react";
import SkillBlock from "./SkillBlock";
import { skills } from "../constant";
import Marquee from "react-fast-marquee";
import Showcase from "./Showcase";

const Skills = () => {
  return (
    <div className="w-full flex justify-center my-4 px-4 sm:px-10 p-2 gap-5 flex-col overflow-hidden">
      <div className="h-10 flex mb-10 justify-center">
        <Showcase text={"Skills"} color={"bg-slate-900"} />
      </div>
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {skills.map(({ icon: Icon, skillName }) => (
          <div key={skillName} className="mx-4">
            <SkillBlock icon={<Icon />} skillname={skillName} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
