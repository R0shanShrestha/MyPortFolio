import React, { useEffect, useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import data from "../data.json";
import { FaHamburger } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavLinks = ({ setOpen, handleScroll }) => {
  return (
    <ul className="flex gap-10 flex-col text-3xl md:text-5xl uppercase font-semibold">
      {data.nav.links.map((link) => (
        <li
          onClick={() => {
            handleScroll(link);
            setOpen(false);
          }}
          className="text-neutral-400 hover:text-white  cursor-pointer duration-300 hover:border-b pb-2  md:pb-5 border-green-300"
          key={link}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false); // closed by default
  const nav = useRef();
  const [tab, settab] = useState(
    window.localStorage.getItem("tab") ? window.localStorage.getItem("tab") : ""
  );

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Ensure GSAP immediately sets the correct position on mount
  useEffect(() => {
    gsap.set(nav.current, { translateX: isOpen ? 0 : "-100%" });
  }, []); // run once on mount

  useGSAP(() => {
    gsap.to(nav.current, {
      translateX: isOpen ? 0 : "-100%",
      duration: 1,
      ease: "power1",
    });
  }, [isOpen]);

  return (
    <div className="px-5 py-10 md:px-10 lg:px-20 relative w-full  " id="home">
      <div className="flex items-center justify-between">
        <h1 className="font-bold flex text-2xl">
          Roshan
          <span className="text-emerald-600">.</span>
        </h1>
        <FaHamburger
          onClick={() => setOpen(true)}
          size={24}
          className="hover:rotate-y-180 lg:hidden hover:text-green-400 cursor-pointer duration-500"
        />

        {/* desktop */}
        <div className=" text-white   hidden lg:flex border w-[500px]  rounded-2xl overflow-hidden items-center justify-around text-sm">
          {data.nav.links.map((lik) => {
            return (
              <span
                key={lik}
                onClick={() => {
                  settab(lik);
                  handleScroll(lik);
                  window.localStorage.setItem("tab", lik);
                }}
                className={` cursor-pointer duration-300  w-full text-center py-2  hover:text-emerald-500 hover:font-semibold uppercase ${
                  tab == lik
                    ? "text-emerald-500 font-bold bgPrimaryColor px-2"
                    : "text-white"
                }`}
              >
                {lik}
              </span>
            );
          })}
        </div>
        <div>
          <a
            href="#"
            className="font-semibold px-5 flex items-center gap-3 text-sm bg-green-700 p-2.5 rounded-2xl"
          >
            {data.nav.contacts}
            <GoArrowUpRight />
          </a>
        </div>
      </div>

      <div
        ref={nav}
        className="fixed z-20 inset-0 -translate-x-[100%] bg-black px-5 justify-between flex flex-col py-10"
      >
        <div className="flex items-center justify-between border-b pb-5 border-b-green-300">
          <h1 className="font-bold flex gap-1 text-4xl ">
            <span className="primaryColor">//</span>Roshan
          </h1>
          <FaHamburger
            onClick={() => setOpen(false)}
            className="hover:text-green-400 cursor-pointer duration-500 hover:rotate-y-180"
            size={24}
          />
        </div>
        <NavLinks setOpen={setOpen} handleScroll={handleScroll} />
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-2xl">Email</h1>
            <p>roshanstha401@gmail.com</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl">Contact</h1>
            <p>977-9807960410</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
