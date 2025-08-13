import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = ({ link }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-zinc-950 w-full text-white p-10">
      <div className="flex justify-evenly items-center flex-wrap gap-6">
        <div className="gap-8 flex-col flex">
          <ul className="flex gap-5 flex-col text-sm cursor-pointer">
            <li onClick={() => handleScroll("home")}>Home</li>
            {link[0].links.map((el, idx) => (
              <li key={idx} onClick={() => handleScroll(el)}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-3xl flex gap-6">
          <a
            href="https://www.facebook.com/R.stha.boy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/R0shanShrestha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
