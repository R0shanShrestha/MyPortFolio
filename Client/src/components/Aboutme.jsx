import { Link } from "react-router";
import Showcase from "./Showcase";

const Aboutme = ({ data }) => {
  const { image, description } = data[0];
  const { para2, para3, para4 } = description[0];

  return (
    <section
      id="About Me"
      className=" w-full  flex flex-col md:flex-row items-start px-4 sm:px-6 md:px-12 py-12 gap-6"
    >
      <div className=" h-10 flex md:hidden ">
          <Showcase text="About Me" color="bg-emerald-600" />
        </div>
      <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full overflow-hidden shadow-lg border-2 border-emerald-500 float-left md:float-none mr-4 mb-4 md:mr-6 md:mb-0">
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-3 md:gap-6 text-left">
        <div className=" h-10 hidden md:flex ">
          <Showcase text="About Me" color="bg-emerald-600" />
        </div>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          <b>I’m Roshan Shrestha</b>, a Full Stack Web Developer crafting clean,
          scalable, and user-friendly web apps.
        </p>
        <p className="text-gray-600 text-sm md:text-base">{para2}</p>
        <p className="text-gray-600 text-sm md:text-base">{para3}</p>
        <p className="text-gray-600 text-sm md:text-base">{para4}</p>

        <Link
          to="/resume.pdf"
          download
          className="mt-3 inline-block px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition"
        >
          View Resume
        </Link>
      </div>
    </section>
  );
};

export default Aboutme;
