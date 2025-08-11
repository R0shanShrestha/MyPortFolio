import React from "react";
import Navbar from "./Navbar";
import { GoArrowDown } from "react-icons/go";

const Home = ({ nav, homesection }) => {
  const { userimg, name, projectcompleted } = homesection[0];
  return (
    <div className="h-full  w-full mb-10 ">
      <Navbar elm={nav} />
      <div className="  grid grid-cols-2 h-full  relative  2xl:items-center xl:items-start justify-center">
        <section className=" px-20  flex flex-col gap-20 2xl:gap-40 py-10 pt-30 ">
          <div className="flex flex-col   text-slate-500">
            <h1 className="flex  lg:text-4xl font-semibold">
              {" "}
              <sub>+</sub> {projectcompleted}
            </h1>
            <span className="secondary font-semibold px-5">
              Project completed
            </span>
          </div>
          <div className="leading-50  flex flex-col">
            <h1 className=" sm:text-8xl lg:text-8xl font-semibold text-slate-800 ">
              Hello
            </h1>
            <h1 className="text-sm font-medium secondary px-5 te">
              - It's {name} a Software Engineer
            </h1>
          </div>
          <div className="text-sm bg-slate-400 w-fit p-2 rounded text-white font-medium px-5">
            <button>Let's Talk</button>
          </div>
          {/* <div className="  font-medium">
            <span className="flex items-center gap-3">
              Scroll down <GoArrowDown />
            </span>
          </div> */}
        </section>
        <section className="     flex items-center justify-end    ">
          <img
            src={homesection[0].userimg[1]}
            alt="not found"
            className=" w-full h-full  "
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
