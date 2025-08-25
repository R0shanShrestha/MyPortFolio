import React from "react";

const SkillBlock = ({ skillname, icon }) => {
  return (
    <div className="flex items-center overflow-hidden gap-3 px-4 py-2 sm:px-5 sm:py-3 bg-white shadow-lg rounded-lg hover:scale-105 transform transition-all duration-300">
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <span className="font-semibold text-sm sm:text-base">{skillname}</span>
    </div>
  );
};

export default SkillBlock;
