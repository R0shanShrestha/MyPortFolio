import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = ({ link }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full py-10 bg-zinc-950 bg-opacity-90 backdrop-blur-md text-white px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation */}
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm md:text-base items-center">
          <li
            onClick={() => handleScroll("home")}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Home
          </li>
          {link.map((el, idx) => (
            <li
              key={idx}
              onClick={() => handleScroll(el)}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              {el}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl sm:text-3xl">
          <a
            href="https://www.facebook.com/R.stha.boy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/R0shanShrestha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Roshan Shrestha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
