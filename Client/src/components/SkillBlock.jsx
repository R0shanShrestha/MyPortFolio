import React from "react";

const SkillBlock = ({ skillname, icon }) => {
  return (
    <div className="flex pr-4 py-3 mx-3  items-center w-fit  rounded-md shadow-xl">
      <span className="text-2xl px-3">{icon}</span>
      <span className="font-semibold text-sm">{skillname}</span>
    </div>
  );
};

export default SkillBlock;
