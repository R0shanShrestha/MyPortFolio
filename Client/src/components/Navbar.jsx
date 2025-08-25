// Navbar.jsx
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = ({ elm }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          <div
            onClick={() => handleScroll("home")}
            className="text-2xl md:text-3xl font-bold text-gray-900 cursor-pointer hover:text-emerald-600 transition"
          >
            Roshan<span className="text-emerald-500">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {elm[0].links.map((el, idx) => (
              <span
                key={idx}
                onClick={() => handleScroll(el)}
                className="text-gray-700 hover:text-emerald-500 transition font-medium cursor-pointer"
              >
                {el}
              </span>
            ))}
            <span
              onClick={() => handleScroll("resume")}
              className="flex items-center gap-1 font-semibold text-gray-900 hover:text-emerald-500 cursor-pointer transition"
            >
              Resume <GoArrowUpRight />
            </span>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(true)}>
              <svg
                className="w-7 h-7 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 bg-black/40 transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span
              onClick={() => handleScroll("home")}
              className="font-bold text-xl text-gray-900 cursor-pointer hover:text-emerald-500 transition"
            >
              Roshan<span className="text-emerald-500">.</span>
            </span>
            <button onClick={() => setMobileOpen(false)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-6 mt-6 px-6 text-lg font-medium">
            {elm[0].links.map((el, idx) => (
              <li
                key={idx}
                onClick={() => handleScroll(el)}
                className="cursor-pointer text-gray-700 hover:text-emerald-500 transition"
              >
                {el}
              </li>
            ))}
            <li
              onClick={() => handleScroll("resume")}
              className="flex items-center gap-1 cursor-pointer text-gray-900 hover:text-emerald-500 font-semibold transition"
            >
              Resume <GoArrowUpRight />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
