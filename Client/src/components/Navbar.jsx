import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = ({ elm }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="py-3 top-0 2xl:py-8 sticky w-full left-0 flex items-center z-20 bg-white bg-opacity-90 backdrop-blur-md">
      <div>
        <img
          src={elm[0].logo[0]}
          className="w-[50px] cursor-pointer"
          alt="logo"
          onClick={() => handleScroll("home")}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between w-full px-10">
        <ul className="flex gap-8 2xl:text-sm xl:text-[12px] cursor-pointer">
          {elm[0].links.map((el, idx) => (
            <li
              key={idx}
              id={idx}
              onClick={() => handleScroll(el)}
              className="cursor-pointer hover:text-blue-600 transition font-semibold"
            >
              <Link>{el}</Link>
            </li>
          ))}
        </ul>
        <Link
          onClick={() => handleScroll("Let's Talk")}
          className="flex cursor-pointer items-center gap-2 font-semibold text-slate-800 text-sm hover:font-bold transition-all duration-300"
        >
          {elm[0].contacts} <GoArrowUpRight />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex ml-auto px-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sticky top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-30">
          <ul className="flex flex-col gap-6 text-lg font-semibold cursor-pointer">
            {elm[0].links.map((el, idx) => (
              <li key={idx} onClick={() => handleScroll(el)}>
                <Link>{el}</Link>
              </li>
            ))}
            <li onClick={() => handleScroll("Let's Talk")}>
              <span className="flex items-center gap-2 text-slate-800 hover:font-bold">
                {elm[0].contacts} <GoArrowUpRight />
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
