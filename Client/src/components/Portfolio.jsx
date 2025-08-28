import Showcase from "./Showcase";
import prjs from "../assets.json";

const Portfolio = ({ setTotalPrj }) => {
  const prj = prjs[0].portfolio[0].webproject;
  return (
    <section
      id="Portfolio"
      className="w-full bi py-16 px-4 sm:px-10 lg:px-20 flex flex-col gap-12"
    >
      <div className="flex gap-5 mb-6 h-10">
        <Showcase text="Web Project" color="bg-emerald-600" />
        <Showcase text="Graphic Project" color="bg-gray-400" />
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">A Collection of My Projects</h2>
        <span className="text-gray-600 hidden md:block">
          Total Projects: {prj.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {prj.map((pr, id) => (
          <a
            key={id}
            href={pr.link}
            target="_blank"
            className="group transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              {pr.status && (
                <div className="absolute top-2 h-6  flex left-2 z-10">
                  <Showcase color="bg-green-400" text="Live" />
                </div>
              )}
              <img
                src={pr.img}
                alt={pr.desc}
                className="h-60 w-full object-cover  object-left transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">{pr.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
