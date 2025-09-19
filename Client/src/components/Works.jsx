import React from "react";
import Showcase from "./Showcase";
import data from "../data.json";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#Portfolio", {
      opacity: 0,
      duration: 3,
      ease: "power1.in",
    });
  }, []);
  return (
    <div
      className=" gap-10 flex flex-col px-5 md:px-10 lg:px-20 pt-30"
      id="Portfolio"
    >
      <div className="headerx">
        <Showcase text="Explore my works" />
      </div>

      <div className="pt-10 gap-10 flex w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // show all 4 projects
          spaceBetween={30}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={true}
          loop={true}
          className="mySwiper max-w-[1400px] mx-auto duration-300 transition-all"
        >
          {data.portfolio.webproject.map((prj) => (
            <SwiperSlide key={prj.title} className="card">
              <ProjectCard
                title={prj.title}
                subtitle={prj.subtitle}
                img={prj.img}
                link={prj.link}
                state={prj.status}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
