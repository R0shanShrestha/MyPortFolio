import { useEffect, useRef } from "react";
import { Link } from "react-router";
import Showcase from "./Showcase";
import gsap from "gsap";

const Aboutme = ({ data }) => {
  const { image, description } = data[0];
  const { para2, para3, para4 } = description[0];

  // Refs for animations
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
      });

      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="About Me"
      className="relative w-full py-20 bg-gray-100 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Profile backdrop"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <Showcase text="About Me" color="bg-emerald-600" />
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div
              ref={imageRef}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg"
            >
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <div ref={textRef} className="flex-1 text-center md:text-left space-y-3">
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                I’m Roshan Shrestha
              </p>
              <p className="text-emerald-600 font-medium">
                Full Stack Web Developer
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                I specialize in building scalable, high-performance web
                applications that balance clean design with seamless user
                experiences.
              </p>
              <p className="text-gray-600 text-sm md:text-base">{para2}</p>
              <p className="text-gray-600 text-sm md:text-base">{para3}</p>
              <p className="text-gray-600 text-sm md:text-base">{para4}</p>
            </div>
          </div>

          {/* Resume Button */}
          <div ref={buttonRef} className="flex justify-center md:justify-start">
            <Link
              to="https://drive.google.com/file/d/1IWMQ-X213kY-PKip4Ja03eqsBqmXqYTU/view?usp=sharing"
              download
              className="px-6 py-2 bg-emerald-600 text-white text-sm md:text-base rounded-full shadow hover:bg-emerald-700 transition transform hover:scale-105"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
