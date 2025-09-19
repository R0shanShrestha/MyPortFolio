import React from "react";
import { GoDotFill } from "react-icons/go";

const Showcase = ({ text, size }) => {
  return (
    <h1 className={`primaryColor font-bold lg:text-xl`}>
      {"<"}
      {text}
      {">"}
    </h1>
  );
};

export default Showcase;
