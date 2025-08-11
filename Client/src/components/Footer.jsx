import React from "react";
import { DiGithub, DiGithubFull } from "react-icons/di";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = ({ link }) => {
  return (
    <div className="bg-zinc-950 w-full text-white  p-10">
      <div className="flex justify-evenly items-center">
        <div className=" gap-8 flex-col flex">
          <div className="bg-amber-50 w-fit px-4 py-1.5 text-sm rounded-md text-slate-800 font-bold">
            <span>Home</span>
          </div>
          <ul className="flex gap-10 text-sm">
            {link[0].links.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="text-3xl flex gap-2">
          <Link to={"https://www.facebook.com/"}>
            <FaFacebook />
          </Link>
          <Link>
            <FaGithub to={"https://github.com/"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
