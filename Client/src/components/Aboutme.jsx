import { useEffect, useRef } from "react";
import { Link } from "react-router";
import Showcase from "./Showcase";
import gsap from "gsap";
import data from "../data.json";

const Aboutme = () => {
  const { image, description } = data.aboutme;
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
        ease: "back.out",
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
      className="relative w-full py-20  mt-20 overflow-hidden"
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
          <Showcase text="About Me" />
        </div>

        {/* Card */}
        <div className="bg-zinc-900 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Image */}
            <div
              ref={imageRef}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg bg-white"
            >
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <div
              ref={textRef}
              className="flex-1 text-center md:text-left space-y-3"
            >
              <p className="text-xl md:text-2xl font-bold text-white">
                I’m Roshan Shrestha
              </p>
              <p className="text-neutral-50-600 font-medium">
                Full Stack Web Developer
              </p>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                I specialize in building scalable, high-performance web
                applications that balance clean design with seamless user
                experiences.
              </p>
              <div className="text-neutral-400 text-sm md:text-base space-y-4">
                <p>
                  <strong className="text-white">
                    I’m a full stack web developer 💻
                  </strong>{" "}
                  passionate about creating{" "}
                  <strong className="text-white">
                    clean, user-friendly, and visually engaging apps
                  </strong>
                  . I build projects like{" "}
                  <strong className="text-white">
                    MediBook, Study Buddy, iPhone Redesign Web, and my personal
                    portfolio 🌟
                  </strong>
                  , crafting experiences that are{" "}
                  <strong className="text-white">
                    both functional and delightful to use
                  </strong>
                  .
                </p>

                <p>
                  I’m always{" "}
                  <strong className="text-white">
                    learning and growing 📚
                  </strong>{" "}
                  — improving my <strong className="text-white">English</strong>
                  , sharpening{" "}
                  <strong className="text-white">
                    problem-solving skills 🧩
                  </strong>
                  , and staying up-to-date with the{" "}
                  <strong className="text-white">
                    latest web technologies ⚡
                  </strong>{" "}
                  to make my work{" "}
                  <strong className="text-white">
                    more creative and impactful
                  </strong>
                  .
                </p>

                <p>
                  I believe in{" "}
                  <strong className="text-white">
                    design-driven development 🎨
                  </strong>
                  , <strong className="text-white">collaboration 🤝</strong>,
                  and{" "}
                  <strong className="text-white">continuous growth 🌱</strong>.
                  Alongside coding, I balance{" "}
                  <strong className="text-white">personal milestones</strong>{" "}
                  and <strong className="text-white">fitness goals 💪</strong>,
                  bringing{" "}
                  <strong className="text-white">
                    focus and creativity to all areas of life
                  </strong>
                  .
                </p>
              </div>
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
