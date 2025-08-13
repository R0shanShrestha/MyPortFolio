import React from "react";
import Showcase from "./Showcase";
import prjs from "../assets.json";
import Marquee from "react-fast-marquee";

const Portfolio = ({ setTotalPrj }) => {
  const prj = prjs[0].portfolio[0].webproject;
  // 1,2,3,4,5
  return (
    <div id="Portfolio" className="flex w-full  my-10  flex-col gap-10  lg:px-10 ">
      <div className="flex text-sm h-10 gap-5 " id="Portfolio">
        <Showcase text={"Web Project"} color={"bg-zinc-900"} />
        <Showcase text={"Graphic Project"} color={"bg-gray-400"} />
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold px-3">A collection of my project</h1>
          <span className="hidden md:block">Total Projects : {prj.length}</span>
        </div>
        <div className="flex gap-20 mt-10  overflow-x-scroll no-scroller md:p-10 cursor-pointer">
          <Marquee>
            {prj.map((pr, id) => (
              <a href={pr.link} target="_blank">
                <div
                  key={id}
                  className="max-w-[310px]  flex flex-col gap-4 min-w-[300px] mx-4"
                >
                  {id % 2 != 0 && (
                    <p className="pt-4 text-center text-sm secondary">
                      {pr.desc}
                    </p>
                  )}

                  <div className="relative">
                    {pr.status && (
                      <div className="absolute top-1 left-2">
                        <Showcase color={"bg-green-400"} text={"Live"} />
                      </div>
                    )}
                    <img
                      src={pr.img}
                      alt="not found"
                      className=" shadow-md rounded-xl h-[200px] w-full object-cover object-top"
                    />
                  </div>
                  {id % 2 == 0 && (
                    <p className="pt-4 text-center text-sm secondary">
                      {pr.desc}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
