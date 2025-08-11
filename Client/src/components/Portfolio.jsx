import React from "react";
import Showcase from "./Showcase";

const Portfolio = () => {
  const prj = [
    {
      img: "https://colorlib.com/wp-content/uploads/sites/2/real-estate-WordPress-temes.jpg",
      text: "But if you want to keep icon as a component reference (like FaHtml5 without the < >), then your array should look like this",
    },
    {
      img: "https://colorlib.com/wp-content/uploads/sites/2/real-estate-WordPress-temes.jpg",
      text: "But if you want to keep icon as a component reference (like FaHtml5 without the < >), then your array should look like this",
    },
    {
      img: "https://www.figma.com/community/resource/f7873be2-8318-40c1-ad68-06372e489ddf/thumbnail",
      text: "But if you want to keep icon as a component reference (like FaHtml5 without the < >), then your array should look like this",
    },
    {
      img: "https://colorlib.com/wp-content/uploads/sites/2/real-estate-WordPress-temes.jpg",
      text: "But if you want to keep icon as a component reference (like FaHtml5 without the < >), then your array should look like this",
    },
    {
      img: "https://colorlib.com/wp-content/uploads/sites/2/real-estate-WordPress-temes.jpg",
      text: "But if you want to keep icon as a component reference (like FaHtml5 without the < >), then your array should look like this",
    },
  ];
  // 1,2,3,4,5
  return (
    <div className="flex w-full  my-30  flex-col gap-10  px-10 overflow-hidden">
      <div className="flex text-sm h-10 gap-5">
        <Showcase text={"Web Project"} color={"bg-zinc-900"} />
        <Showcase text={"Graphic Project"} color={"bg-gray-400"} />
      </div>
      <div>
        <h1 className="font-bold px-3">A collection of my project</h1>
        <div className="flex gap-20 mt-10  overflow-x-scroll no-scroller p-10">
          {prj.map((pr, id) => (
            <div
              key={id}
              className="max-w-[310px] flex flex-col gap-4 min-w-[300px]"
            >
              {id % 2 != 0 && (
                <p className="pt-4 text-center text-sm secondary">{pr.text}</p>
              )}
              <img
                src={pr.img}
                alt="not found"
                className=" shadow-md rounded-xl h-[200px] w-full object-cover object-top"
              />
              {id % 2 == 0 && (
                <p className="pt-4 text-center text-sm secondary">{pr.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
