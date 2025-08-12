import React from "react";
import Navbar from "./Navbar";
import { GoArrowDown } from "react-icons/go";

const Home = ({ nav, homesection, totalPrj }) => {
  const { name } = homesection[0];
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-full w-full mb-10 relative ">
      <Navbar elm={nav} />
      <div
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 h-full relative justify-center items-center xl:items-start"
      >
        <section className="px-6 sm:px-10 md:px-20 flex flex-col gap-6 md:gap-10 h-fit py-10 pt-30">
          <div className="text-slate-500">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-baseline">
              <sub className="text-2xl sm:text-3xl">+</sub> {totalPrj}
            </h1>
            <span className="secondary font-semibold mt-1 block text-sm sm:text-base">
              Projects Completed
            </span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              I'm {name}
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-4 pl-3 sm:pl-4 border-l-4 border-slate-300">
              As a passionate Software Engineer, I specialize in building clean
              and user-friendly web applications. By blending creativity with
              solid technical skills, I deliver projects that not only perform
              flawlessly but also provide engaging and intuitive user
              experiences.
            </p>
          </div>

          <div>
            <button className="text-xs sm:text-sm bg-slate-400 w-fit p-2.5 hover:bg-slate-800 rounded text-white font-medium px-4 sm:px-5">
              Let's Talk
            </button>
          </div>

          {/* Scroll down normal on md and larger */}
          <div
            onClick={() => {
              handleScroll("Portfolio");
            }}
            className="hidden md:flex font-medium text-slate-500 flex items-center gap-3 animate-bounce mt-6 cursor-pointer text-sm"
          >
            Scroll down <GoArrowDown />
          </div>
        </section>

        <section className="flex items-center justify-center md:justify-end px-6 sm:px-10">
          <img
            src={homesection[0].userimg[1]}
            alt="not found"
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-full"
          />
        </section>
      </div>

      {/* Scroll down popup on small screens */}
      <div
        onClick={() => handleScroll("Portfolio")}
        className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 shadow-md rounded-full px-6 py-2 flex items-center gap-2 cursor-pointer animate-bounce text-sm font-medium text-slate-600 z-50"
      >
        Scroll down <GoArrowDown />
      </div>
    </div>
  );
};

export default Home;
