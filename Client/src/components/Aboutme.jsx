import React from "react";
import { GoArrowDown, GoCircle, GoDotFill } from "react-icons/go";
import { Link } from "react-router";
import Showcase from "./Showcase";

const Aboutme = ({ data }) => {
  const { image, description } = data[0];
  const { para1, para2, para3, para4 } = description[0];

  return (
    <div className="h-screen border-2 border-red-800  w-full px-20 pt-20  gap-20 flex justify-evenly ">
      <section className="border p-2">
        <div className="flex text-sm h-10 gap-5">
          <Showcase text={"About me"} color={"bg-zinc-900"} />
        </div>
        <div className="  mt-10 w-[600px] h-[500px] overflow-hidden rounded-xl shadow-xl">
          <img
            src={image}
            alt="not found"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" mt-40 font-medium">
          <span className="flex items-center gap-3">
            Scroll down <GoArrowDown />
          </span>
        </div>
      </section>
      <section className=" w-[600px] pt-20 border px-10 flex flex-col gap-20 font-medium overflow-hidden  ">
        <p className="text-xl  text-slate-600">
          <b>I’m Roshan Shrestha</b>, a full stack developer passionate about
          creating helpful web apps like Study Buddy. 💻✨
        </p>
        <p className="text-xl font-normal text-slate-500">{para2}</p>
        <p className="text-xl font-normal text-slate-500">{para3}</p>
        <p className="text-xl font-normal text-slate-500">{para4}</p>
        <Link
          download={image}
          className="hover:text-blue-500  hover:font-bold hover:text-base text-sm duration-300"
        >
          [ View Resume ]{" "}
        </Link>
      </section>
    </div>
  );
};

export default Aboutme;
