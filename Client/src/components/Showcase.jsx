import React from "react";
import { GoDotFill } from "react-icons/go";

const Showcase = ({ text, color }) => {
  return (
    <span
      className={` ${color} text-white flex px-3  items-center gap-2 w-fit rounded-xl text-[12px]`}
    >
      <GoDotFill color="white" />
      {text}
    </span>
  );
};

export default Showcase;
