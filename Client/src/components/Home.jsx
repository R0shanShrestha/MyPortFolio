import React from "react";
import Navbar from "./Navbar";
import { GoArrowDown } from "react-icons/go";

const Home = ({ nav, homesection, totalPrj }) => {
  const { userimg, name, projectcompleted } = homesection[0];
  return (
    <div className="h-full pt-10   w-full mb-10 relative">
      <Navbar elm={nav} />
      <div className="  grid grid-cols-2 h-full  relative  justify-center xl:items-start">
        <section className=" px-20  flex flex-col xl:gap-10 2xl:gap-30  h-fit py-10 pt-30 ">
          <div className="flex flex-col   text-slate-500">
            <h1 className="flex  text-7xl font-semibold">
              {" "}
              <sub>+</sub> {totalPrj}
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
          <div className="">
            <button className="text-sm bg-slate-400 w-fit p-2.5 hover:bg-slate-800 rounded text-white font-medium px-5">Let's Talk</button>
          </div>
          {/* <div className="  font-medium">
            <span className="flex items-center gap-3">
              Scroll down <GoArrowDown />
            </span>
          </div> */}
        </section>
        <section className="flex items-center justify-end ">
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
