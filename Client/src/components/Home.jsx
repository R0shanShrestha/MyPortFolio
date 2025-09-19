import { useGSAP } from "@gsap/react";
import data from "../data.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./Showcase";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const media = [
    { name: "Instagram", link: "https://www.instagram.com/ro_sh_an_st_ha/" },
    { name: "Github", link: "https://github.com/R0shanShrestha" },
    { name: "Facebook", link: "https://www.facebook.com/iAmRoshanShrestha" },
  ];
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(".img", {
      display: "none",
      opacity: 0,
      duration: 0.8,
      ease: "power1",
    });
    tl.from(".hero", {
      opacity: 0,
      duration: 1,
      y: 300,
      ease: "power1",
    });
    tl.from(".lik", {
      opacity: 0,
      duration: 1,
      ease: "power1",
      stagger: 0.1,
    });

    tl.from(".about", {
      opacity: 0,
      duration: 0.2,
      ease: "power1",
      y: 300,
    });

    tl.from(".success", {
      opacity: 0,
      ease: "power1",
      duration: 1,
      y: 200,
    });
  }, []);

  return (
    <main className="px-5 md:px-10 lg:mt-20 lg:px-20 text-neutral-400 py-10 flex flex-col gap-20 ">
      <div className="relative flex flex-col gap-10 md:flex-row-reverse  md:justify-end w-full">
        {/* image */}
        <div className="flex flex-col items-center md:items-start lg:px-20 img ">
          <img
            src={data.aboutme.image}
            alt="Roshan"
            className="bg-zinc-950 w-40"
          />
          <h1 className="font-semibold flex gap-1 ">
            <span className="primaryColor">//</span>Roshan Shrestha
          </h1>
        </div>
        {/* Hero text */}
        <div className=" flex flex-col gap-8 hero">
          <Showcase text={`${data.homesection.experience} Year Experience`} />
          <h1 className="Bigtext text-5xl md:text-7xl lg:text-8xl md:leading-22 text-white">
            Building Fast, <br /> Scable, and <br /> Secure website
          </h1>
          {/* Social links */}
          <h1 className="flex gap-5 text-sm">
            {media.map((lik) => (
              <a key={lik.name} href={lik.link} className="flex gap-1 lik font-semibold">
                <span className="primaryColor">/</span>
                {lik.name}
              </a>
            ))}
          </h1>
        </div>
      </div>
      {/* Brief About */}
      <div className="flex flex-col gap-3 about  md:w-[300px] lg:w-[500px] md:self-end ">
        <Showcase text={"About Me"} />
        <p className="text-sm lg:text-xl font-light">
          I’m a full stack web developer building clean, user-friendly apps like
          Edunova and client portals. I focus on smooth performance, 3D
          interactions, and staying updated with the latest web technologies,
          while balancing coding with personal growth.
        </p>
      </div>
      <div className="flex flex-col gap-5 success">
        <Showcase text={"Success & Achievements"} />
        <div className="flex gap-20 px-5">
          <div className="flex flex-col gap-3 items-center">
            <span className="text-5xl font-bold">
              {data.homesection.projectcompleted}
            </span>
            <span className="text-xs">
              Completed <br />
              Projects
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="text-5xl font-bold">
              {data.homesection.experience}
            </span>
            <span className="text-xs">
              Year in <br />
              Development
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
