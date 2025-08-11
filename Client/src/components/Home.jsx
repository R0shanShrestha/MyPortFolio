import React from "react";
import Navbar from "./Navbar";
import { GoArrowDown } from "react-icons/go";

const Home = ({ nav, homesection }) => {
  const { userimg, name, projectcompleted } = homesection[0];
  return (
    <div className="h-full border w-full">
      <Navbar elm={nav} />
      <div className="border border-red-500 h-screen grid grid-cols-2 overflow-hidden relative">
        <section className="border px-20  flex flex-col gap-20 pt-30">
          <div className="flex flex-col  border text-slate-500">
            <h1 className="flex text-5xl font-semibold">
              {" "}
              <sub>+</sub> {projectcompleted}
            </h1>
            <span className="secondary font-semibold px-5">
              Project completed
            </span>
          </div>
          <div className="leading-50 border flex flex-col">
            <h1 className="text-[10rem] ">Hello</h1>
            <h1 className="text-xl font-medium secondary">- It's {name} a Software Engineer</h1>
          </div>
          <div className="border mt-40 font-medium">
            <span className="flex items-center gap-3">
              Scroll down <GoArrowDown />
            </span>
          </div>
        </section>
        <section className="-bottom-10 border w-[60%]  border-yellow-500 flex items-center justify-end absolute right-0  ">
          <img
            src={homesection[0].userimg[1]}
            alt="not found"
            className=" w-full border border-yellow-500"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
