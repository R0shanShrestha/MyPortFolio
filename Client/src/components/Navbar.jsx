import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = ({ elm }) => {
  return (
    <nav className=" py-8  flex items-center">
      <div>
        <img src={elm[0].logo[0]} className="w-[50px]" alt="not found" />
      </div>
      <div className="flex items-center justify-between w-full px-10">
        <ul className="flex gap-8 text-sm ">
          {elm[0].links.map((el, idx) => (
            <li
              className="primary-font hover:text-slate-800 font-semibold"
              key={idx}
            >
              <Link>{el}</Link>
            </li>
          ))}
        </ul>
        <Link className="flex items-center gap-2 font-semibold text-slate-800 text-sm  hover:font-bold transition-all duration-300">
          {elm[0].contacts} <span>{<GoArrowUpRight  />}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
