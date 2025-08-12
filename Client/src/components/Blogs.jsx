import React from "react";
import Showcase from "./Showcase";

const Blogs = () => {
  return (
    <div className="flex w-full  my-20  flex-col gap-10  px-10 overflow-hidden">
      <div className="flex text-sm h-10 gap-5">
        <Showcase text={"My Blogs"} color={"bg-zinc-900"} />
        {/* <Showcase text={"Graphic Project"} color={"bg-gray-400"} /> */}
      </div>
      <div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl font-semibold ">
            My Written Journey - Design Decode
          </h1>
          <p className="secondary text-sm">
            Sharing insights, tips, and stories about design, creativity, and
            growth.
          </p>
        </div>
        <div className="text-center mt-4 font-bold text-2xl">
          <h1 >Comming Soon !</h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
